
/*!
Hype AutoLayout 1.0
copyright (c) 2019 Max Ziebell, (https://maxziebell.de). MIT-license
*/

/*
* Version-History
* 1.0 Initial release under MIT-license
*/
if("HypeAutoLayout" in window === false) window['HypeAutoLayout'] = (function () {

	var kDefaultSizeSelector = '.hypeAutoLayoutSize';
	
	// HypeDocumentLoad callback
	function documentLoad(hypeDocument, element, event){
		//w.i.p (get height functions etc.)
	}
	
	// HypeSceneLoad callback
	function sceneLoad(hypeDocument, element, event){
		//setupAutoLayout
		var sceneElm = element;
		var autoLayoutElms = [].slice.call(sceneElm.querySelectorAll('[data-auto-layout]'));
		console.log (autoLayoutElms)
		autoLayoutElms.forEach(function(autoLayoutElm, index) {
			if(autoLayoutElm.childNodes.length) {
				setupAutoLayout(hypeDocument, autoLayoutElm);
			}
		});
	}
	
	// auto layout
	function setupAutoLayout(hypeDocument, element) {
		var orientation = element.getAttribute('data-auto-layout').toLowerCase().trim();
		var margin = parseInt(element.getAttribute('data-auto-layout-margin'));
		var selector = element.getAttribute('data-auto-layout-size-selector');
		//options
		var options = {
			selector : selector ? selector : kDefaultSizeSelector,
			margin : margin ? margin : 0,
			sortBy : orientation == 'horizontal' ? 'left' : 'top',
			property : orientation == 'horizontal' ? 'width' : 'height',
			borders : orientation == 'horizontal' ? ['borderLeftWidth','borderRightWidth'] : ['borderTopWidth','borderBottomWidth'],
		}
		// fetch all cards
		var childElms = [].slice.call(document.querySelectorAll('#'+element.id+'> .HYPE_element_container > .HYPE_element'));
		if (orientation)
		// setup an observer for each card
		childElms.forEach(function(childElm) {
			var cardElm = childElm.querySelector(options.selector);
			var watchElm = (cardElm) ? cardElm : childElm;
			hypeDocument.startMutationObserver(watchElm, function(mutation){
				sort(hypeDocument, childElms, options);
				reflow(hypeDocument, childElms, options);
			}, { id: childElm.id, attributes: true, attributeFilter: [ "style" ] });
		});
		//initial flow
		sort(hypeDocument, childElms, options);
		reflow(hypeDocument, childElms, options);
	}
	
	// sort function
	function sort(hypeDocument, childElms, options){
		childElms.sort(function(a,b) {
			return hypeDocument.getElementProperty(a, options.sortBy) > hypeDocument.getElementProperty(b, options.sortBy);
		});
	}
	
	//helper
	function getStyleProp(prop){
		var value = parseInt(prop);
		return (value) ? value : 0;
	}
	
	function getSizeWithBorder(hypeDocument, element, options){
		return 	hypeDocument.getElementProperty(element, options.property) + 
				getStyleProp(element.style[options.borders[0]]) + 
				getStyleProp(element.style[options.borders[1]]);
	}

	// reflow function
	function reflow(hypeDocument, childElms, options){
		var lastPos = hypeDocument.getElementProperty(childElms[0], options.sortBy);
		var margin = options.margin;
		childElms.forEach(function(childElm) {
			var cardElm = childElm.querySelector(options.selector);
			var size;
			if (cardElm) { 
				size = getSizeWithBorder(hypeDocument, cardElm, options);
				hypeDocument.setElementProperty(childElm, options.property, size);
			} else {
				size = getSizeWithBorder(hypeDocument, childElm, options);
			}
			if (size>0.1) {
				childElm.classList.remove('hiddenCard');				
				hypeDocument.setElementProperty(childElm, options.sortBy, lastPos);
				lastPos += size;
				if (margin) {
					lastPos += (size < margin) ? size : margin;
				}
			} else {
				childElm.classList.add('hiddenCard');
			}
		});
	}
	
	function setDefaultSizeSelector(selector) {
		kDefaultSizeSelector = selector;
	}

	/* setup callbacks */
	if("HYPE_eventListeners" in window === false) { window.HYPE_eventListeners = Array();}
	window.HYPE_eventListeners.push({"type":"HypeSceneLoad", "callback": sceneLoad});
	window.HYPE_eventListeners.push({"type":"HypeDocumentLoad", "callback": documentLoad});
	
	/* Reveal Public interface to window['HypeAutoLayout'] */
	return {
		version: '1.0',
		setDefaultSizeSelector: setDefaultSizeSelector
	};
})();
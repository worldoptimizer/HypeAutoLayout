# HypeAutoLayout

![HypeDocumentLoader|690x487](https://playground.maxziebell.de/Hype/AutoLayout/HypeAutoLayout.jpg)
<sup>The cover artwork is not hosted in this repository and &copy;opyrighted by Max Ziebell</sup>

This little extension was initially more primitive and inspired by the following [thread](https://forums.tumult.com/t/move-divs-down-when-top-div-expands/17222?u=maxzieb). It then turned into a [template](https://forums.tumult.com/t/collapsible-stacked-symbols-accordion/17227?u=maxzieb) and now it has become a full extension after reading an article on the Figma auto layout feature.

This extension helps with positioning elements using a stacking order. It should be assigned to a group using `data-auto-layout` using the value `vertical` or `horizontal`. You can use the `data-auto-layout-margin` to set the margin between elements. This extension supports symbols, groups and elements. It evaluates the height of each direct child in the group you assign this to. If you want to deviate from this behavior you can use the default class name `hypeAutoLayoutSize` to on a container within one of the children to set the height. If you don't like the selector name or already have your own you can set it on an auto layout group with `data-auto-layout-size-selector` as a valid query selector qualifier like (for example) `.card`. Furthermore, there is an extension wide setting to replace the optional size selector `HypeAutoLayout.setDefaultSizeSelector`.

**Dependency:**  
[Hype MutationObserver](https://github.com/worldoptimizer/HypeMutationObserver)

**Demo:**  
[HypeAutoLayout.html](https://playground.maxziebell.de/Hype/AutoLayout/HypeAutoLayout.html)

**Version history**  
`1.0 Initial release under MIT-license`

*PS: Would love to have an IDE preview in the future for this*

Content Delivery Network (CDN)
--
Latest version can be linked into your project using the following in the head section of your project:
```html
<script src="https://cdn.jsdelivr.net/gh/worldoptimizer/HypeAutoLayout/HypeAutoLayout.min.js"></script>
```

Optionally you can also link a SRI version or specific releases. 
Read more about that on the JsDelivr (CDN) page for this extension at https://www.jsdelivr.com/package/gh/worldoptimizer/HypeAutoLayout

Learn how to use the latest extension version and how to combine extensions into one file at
https://github.com/worldoptimizer/HypeCookBook/wiki/Including-external-files-and-Hype-extensions

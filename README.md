# HypeAutoLayout

This little extension was initially more primitive and inspired by the following [thread](https://forums.tumult.com/t/move-divs-down-when-top-div-expands/17222?u=maxzieb). It then turned into a [template](https://forums.tumult.com/t/collapsible-stacked-symbols-accordion/17227?u=maxzieb) and now it has become a full extension after reading an article on the Figma auto layout feature.

This extension helps with positioning elements using a stacking order. It should be assigned to a group using `data-auto-layout` using the value `vertical` or `horizontal`. You can use the `data-auto-layout-margin` to set the margin between elements. This extension supports symbols, groups and elements. It evaluates the height of each direct child in the group you assign this to. If you want to deviate from this behavior you can use the default class name `hypeAutoLayoutSize` to on a container within one of the children to set the height. If you don't like the selector name or already have your own you can set it on an auto layout group with `data-auto-layout-size-selector` as a valid query selector qualifier like (for example) `.card`. Furthermore, there is an extension wide setting to replace the optional size selector `HypeAutoLayout.setDefaultSizeSelector`.

**Demo:**  
[HypeAutoLayout.html](https://playground.maxziebell.de/Hype/AutoLayout/HypeAutoLayout.html)

**Download:**   
[HypeAutoLayout.hype.zip](https://playground.maxziebell.de/Hype/AutoLayout/HypeAutoLayout.hype.zip)

**Version history**  
`1.0 Initial release under MIT-license`

*PS: Would love to have a IDE preview in the future for this*

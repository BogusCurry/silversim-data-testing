/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-style",["./sniff","./dom","./_base/window"],function(d,l,p){function q(b,a,c){a=a.toLowerCase();if("auto"==c){if("height"==a)return b.offsetHeight;if("width"==a)return b.offsetWidth}if("fontweight"==a)switch(c){case 700:return"bold";default:return"normal"}a in g||(g[a]=r.test(a));return g[a]?h(b,c):c}var k,f={};k=d("webkit")?function(b){var a;if(1==b.nodeType){var c=b.ownerDocument.defaultView;a=c.getComputedStyle(b,null);!a&&b.style&&(b.style.display="",a=c.getComputedStyle(b,null))}return a||
{}}:d("ie")&&(9>d("ie")||d("quirks"))?function(b){return 1==b.nodeType&&b.currentStyle?b.currentStyle:{}}:function(b){if(1===b.nodeType){var a=b.ownerDocument.defaultView;return(a.opener?a:p.global.window).getComputedStyle(b,null)}return{}};f.getComputedStyle=k;var h;h=d("ie")?function(b,a){if(!a)return 0;if("medium"==a)return 4;if(a.slice&&"px"==a.slice(-2))return parseFloat(a);var c=b.style,d=b.runtimeStyle,f=c.left,e=d.left;d.left=b.currentStyle.left;try{c.left=a,a=c.pixelLeft}catch(g){a=0}c.left=
f;d.left=e;return a}:function(b,a){return parseFloat(a)||0};f.toPixelValue=h;var e=function(b,a){try{return b.filters.item("DXImageTransform.Microsoft.Alpha")}catch(c){return a?{}:null}},s=9>d("ie")||10>d("ie")&&d("quirks")?function(b){try{return e(b).Opacity/100}catch(a){return 1}}:function(b){return k(b).opacity},m=9>d("ie")||10>d("ie")&&d("quirks")?function(b,a){""===a&&(a=1);var c=100*a;1===a?(b.style.zoom="",e(b)&&(b.style.filter=b.style.filter.replace(/\s*progid:DXImageTransform.Microsoft.Alpha\([^\)]+?\)/i,
""))):(b.style.zoom=1,e(b)?e(b,1).Opacity=c:b.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d"+c+")",e(b,1).Enabled=!0);if("tr"==b.tagName.toLowerCase())for(c=b.firstChild;c;c=c.nextSibling)"td"==c.tagName.toLowerCase()&&m(c,a);return a}:function(b,a){return b.style.opacity=a},g={left:!0,top:!0},r=/margin|padding|width|height|max|min|offset/,n={cssFloat:1,styleFloat:1,"float":1};f.get=function(b,a){var c=l.byId(b),d=arguments.length;if(2==d&&"opacity"==a)return s(c);a=n[a]?"cssFloat"in
c.style?"cssFloat":"styleFloat":a;var e=f.getComputedStyle(c);return 1==d?e:q(c,a,e[a]||c.style[a])};f.set=function(b,a,c){var d=l.byId(b),e=arguments.length,g="opacity"==a;a=n[a]?"cssFloat"in d.style?"cssFloat":"styleFloat":a;if(3==e)return g?m(d,c):d.style[a]=c;for(var h in a)f.set(b,h,a[h]);return f.getComputedStyle(d)};return f});
//# sourceMappingURL=dom-style.js.map
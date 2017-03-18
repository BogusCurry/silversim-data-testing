/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/_base/window",["./kernel","./lang","../sniff"],function(a,h,d){var c={global:a.global,doc:a.global.document||null,body:function(b){b=b||a.doc;return b.body||b.getElementsByTagName("body")[0]},setContext:function(b,e){a.global=c.global=b;a.doc=c.doc=e},withGlobal:function(b,e,d,l){var m=a.global;try{return a.global=c.global=b,c.withDoc.call(null,b.document,e,d,l)}finally{a.global=c.global=m}},withDoc:function(b,e,k,l){var m=c.doc,h=d("quirks"),p=d("ie"),f,g,n;try{a.doc=c.doc=b;a.isQuirks=
d.add("quirks","BackCompat"==a.doc.compatMode,!0,!0);if(d("ie")&&(n=b.parentWindow)&&n.navigator)f=parseFloat(n.navigator.appVersion.split("MSIE ")[1])||void 0,(g=b.documentMode)&&(5!=g&&Math.floor(f)!=g)&&(f=g),a.isIE=d.add("ie",f,!0,!0);k&&"string"==typeof e&&(e=k[e]);return e.apply(k,l||[])}finally{a.doc=c.doc=m,a.isQuirks=d.add("quirks",h,!0,!0),a.isIE=d.add("ie",p,!0,!0)}}};h.mixin(a,c);return c});
//# sourceMappingURL=window.js.map
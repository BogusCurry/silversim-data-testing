//>>built
require({cache:{"url:dojox/widget/Dialog/Dialog.html":'\x3cdiv class\x3d"dojoxDialog" tabindex\x3d"-1" role\x3d"dialog" aria-labelledby\x3d"${id}_title"\x3e\n\t\x3cdiv dojoAttachPoint\x3d"titleBar" class\x3d"dojoxDialogTitleBar"\x3e\n\t\t\x3cspan dojoAttachPoint\x3d"titleNode" class\x3d"dojoxDialogTitle" id\x3d"${id}_title"\x3e${title}\x3c/span\x3e\n\t\x3c/div\x3e\n\t\x3cdiv dojoAttachPoint\x3d"dojoxDialogWrapper"\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"containerNode" class\x3d"dojoxDialogPaneContent"\x3e\x3c/div\x3e\n\t\x3c/div\x3e\n\t\x3cdiv dojoAttachPoint\x3d"closeButtonNode" class\x3d"dojoxDialogCloseIcon" dojoAttachEvent\x3d"onclick: onCancel"\x3e\n\t\t\t\x3cspan dojoAttachPoint\x3d"closeText" class\x3d"closeText"\x3ex\x3c/span\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojox/widget/Dialog","dojo dojox dojo/text!./Dialog/Dialog.html dijit/Dialog dojo/window dojox/fx ./DialogSimple".split(" "),function(a,e,f){a.getObject("widget",!0,e);return a.declare("dojox.widget.Dialog",e.widget.DialogSimple,{templateString:f,sizeToViewport:!1,viewportPadding:35,dimensions:null,easing:null,sizeDuration:dijit._defaultDuration,sizeMethod:"chain",showTitle:!1,draggable:!1,modal:!1,constructor:function(b,c){this.easing=b.easing||a._defaultEasing;this.dimensions=b.dimensions||
[300,300]},_setup:function(){this.inherited(arguments);this._alreadyInitialized||(this._navIn=a.fadeIn({node:this.closeButtonNode}),this._navOut=a.fadeOut({node:this.closeButtonNode}),this.showTitle||a.addClass(this.domNode,"dojoxDialogNoTitle"))},layout:function(a){this._setSize();this.inherited(arguments)},_setSize:function(){this._vp=a.window.getBox();var b=this.containerNode,c=this.sizeToViewport;return this._displaysize={w:c?b.scrollWidth:this.dimensions[0],h:c?b.scrollHeight:this.dimensions[1]}},
show:function(){this.open||(this._setSize(),a.style(this.closeButtonNode,"opacity",0),a.style(this.domNode,{overflow:"hidden",opacity:0,width:"1px",height:"1px"}),a.style(this.containerNode,{opacity:0,overflow:"hidden"}),this.inherited(arguments),this.modal?this._modalconnects.push(a.connect(a.body(),"onkeypress",function(b){b.charOrCode==a.keys.ESCAPE&&a.stopEvent(b)})):this._modalconnects.push(a.connect(dijit._underlay.domNode,"onclick",this,"onCancel")),this._modalconnects.push(a.connect(this.domNode,
"onmouseenter",this,"_handleNav")),this._modalconnects.push(a.connect(this.domNode,"onmouseleave",this,"_handleNav")))},_handleNav:function(a){var c="mouseout"==a.type?"_navOut":"_navIn";this["mouseout"==a.type?"_navIn":"_navOut"].stop();this[c].play()},_position:function(){if(this._started){this._sizing&&(this._sizing.stop(),this.disconnect(this._sizingConnect),delete this._sizing);this.inherited(arguments);this.open||a.style(this.containerNode,"opacity",0);var b=2*this.viewportPadding,c={node:this.domNode,
duration:this.sizeDuration||dijit._defaultDuration,easing:this.easing,method:this.sizeMethod},d=this._displaysize||this._setSize();c.width=d.w=d.w+b>=this._vp.w||this.sizeToViewport?this._vp.w-b:d.w;c.height=d.h=d.h+b>=this._vp.h||this.sizeToViewport?this._vp.h-b:d.h;this._sizing=e.fx.sizeTo(c);this._sizingConnect=this.connect(this._sizing,"onEnd","_showContent");this._sizing.play()}},_showContent:function(b){b=this.containerNode;a.style(this.domNode,{overflow:"visible",opacity:1});a.style(this.closeButtonNode,
"opacity",1);a.style(b,{height:this._displaysize.h-this.titleNode.offsetHeight+"px",width:this._displaysize.w+"px",overflow:"auto"});a.anim(b,{opacity:1})}})});
//# sourceMappingURL=Dialog.js.map
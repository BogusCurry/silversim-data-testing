//>>built
define("dojox/layout/dnd/Avatar",["dojo","dijit","dojox","dojo/require!dojo/dnd/Avatar,dojo/dnd/common"],function(a,d,e){a.provide("dojox.layout.dnd.Avatar");a.require("dojo.dnd.Avatar");a.require("dojo.dnd.common");a.declare("dojox.layout.dnd.Avatar",a.dnd.Avatar,{constructor:function(a,b){this.opacity=b||0.9},construct:function(){var c=this.manager.source,b=c.creator?c._normalizedCreator(c.getItem(this.manager.nodes[0].id).data,"avatar").node:this.manager.nodes[0].cloneNode(!0);a.addClass(b,"dojoDndAvatar");
b.id=a.dnd.getUniqueId();b.style.position="absolute";b.style.zIndex=1999;b.style.margin="0px";b.style.width=a.marginBox(c.node).w+"px";a.style(b,"opacity",this.opacity);this.node=b},update:function(){a.toggleClass(this.node,"dojoDndAvatarCanDrop",this.manager.canDropFlag)},_generateText:function(){}})});
//# sourceMappingURL=Avatar.js.map
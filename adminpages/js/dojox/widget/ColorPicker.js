//>>built
require({cache:{"url:dojox/widget/ColorPicker/ColorPicker.html":'\x3ctable class\x3d"dojoxColorPicker" dojoAttachEvent\x3d"onkeypress: _handleKey" cellpadding\x3d"0" cellspacing\x3d"0" role\x3d"presentation"\x3e\n\t\x3ctr\x3e\n\t\t\x3ctd valign\x3d"top" class\x3d"dojoxColorPickerRightPad"\x3e\n\t\t\t\x3cdiv class\x3d"dojoxColorPickerBox"\x3e\n\t\t\t\t\x3c!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\x3e\n\t\t\t\t\x3cimg title\x3d"${saturationPickerTitle}" alt\x3d"${saturationPickerTitle}" class\x3d"dojoxColorPickerPoint" src\x3d"${_pickerPointer}" tabIndex\x3d"0" dojoAttachPoint\x3d"cursorNode" style\x3d"position: absolute; top: 0px; left: 0px;"\x3e\n\t\t\t\t\x3cimg role\x3d"presentation" alt\x3d"" dojoAttachPoint\x3d"colorUnderlay" dojoAttachEvent\x3d"onclick: _setPoint, onmousedown: _stopDrag" class\x3d"dojoxColorPickerUnderlay" src\x3d"${_underlay}" ondragstart\x3d"return false"\x3e\n\t\t\t\x3c/div\x3e\n\t\t\x3c/td\x3e\n\t\t\x3ctd valign\x3d"top" class\x3d"dojoxColorPickerRightPad"\x3e\n\t\t\t\x3cdiv class\x3d"dojoxHuePicker"\x3e\n\t\t\t\t\x3c!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\x3e\n\t\t\t\t\x3cimg dojoAttachPoint\x3d"hueCursorNode" tabIndex\x3d"0" class\x3d"dojoxHuePickerPoint" title\x3d"${huePickerTitle}" alt\x3d"${huePickerTitle}" src\x3d"${_huePickerPointer}" style\x3d"position: absolute; top: 0px; left: 0px;"\x3e\n\t\t\t\t\x3cdiv class\x3d"dojoxHuePickerUnderlay" dojoAttachPoint\x3d"hueNode"\x3e\n\t\t\t\t    \x3cimg role\x3d"presentation" alt\x3d"" dojoAttachEvent\x3d"onclick: _setHuePoint, onmousedown: _stopDrag" src\x3d"${_hueUnderlay}"\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/div\x3e\n\t\t\x3c/td\x3e\n\t\t\x3ctd valign\x3d"top"\x3e\n\t\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" role\x3d"presentation"\x3e\n\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\x3ctd valign\x3d"top" class\x3d"dojoxColorPickerPreviewContainer"\x3e\n\t\t\t\t\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" role\x3d"presentation"\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3ctd valign\x3d"top" class\x3d"dojoxColorPickerRightPad"\x3e\n\t\t\t\t\t\t\t\t\t\x3cdiv dojoAttachPoint\x3d"previewNode" class\x3d"dojoxColorPickerPreview"\x3e\x3c/div\x3e\n\t\t\t\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\t\t\t\t\x3ctd valign\x3d"top"\x3e\n\t\t\t\t\t\t\t\t\t\x3cdiv dojoAttachPoint\x3d"safePreviewNode" class\x3d"dojoxColorPickerWebSafePreview"\x3e\x3c/div\x3e\n\t\t\t\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\x3ctd valign\x3d"bottom"\x3e\n\t\t\t\t\t\t\x3ctable class\x3d"dojoxColorPickerOptional" cellpadding\x3d"0" cellspacing\x3d"0" role\x3d"presentation"\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dijitInline dojoxColorPickerRgb" dojoAttachPoint\x3d"rgbNode"\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctable cellpadding\x3d"1" cellspacing\x3d"1" role\x3d"presentation"\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_r"\x3e${redLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_r" dojoAttachPoint\x3d"Rval" size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_g"\x3e${greenLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_g" dojoAttachPoint\x3d"Gval" size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_b"\x3e${blueLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_b" dojoAttachPoint\x3d"Bval" size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\t\t\t\t\x3ctd\x3e\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dijitInline dojoxColorPickerHsv" dojoAttachPoint\x3d"hsvNode"\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctable cellpadding\x3d"1" cellspacing\x3d"1" role\x3d"presentation"\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_h"\x3e${hueLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_h" dojoAttachPoint\x3d"Hval"size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e ${degLabel}\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_s"\x3e${saturationLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_s" dojoAttachPoint\x3d"Sval" size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e ${percentSign}\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3ctr\x3e\x3ctd\x3e\x3clabel for\x3d"${_uId}_v"\x3e${valueLabel}\x3c/label\x3e\x3c/td\x3e\x3ctd\x3e\x3cinput id\x3d"${_uId}_v" dojoAttachPoint\x3d"Vval" size\x3d"1" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e ${percentSign}\x3c/td\x3e\x3c/tr\x3e\n\t\t\t\t\t\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\t\x3ctr\x3e\n\t\t\t\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"dojoxColorPickerHex" dojoAttachPoint\x3d"hexNode" aria-live\x3d"polite"\x3e\t\n\t\t\t\t\t\t\t\t\t\t\x3clabel for\x3d"${_uId}_hex"\x3e\x26nbsp;${hexLabel}\x26nbsp;\x3c/label\x3e\x3cinput id\x3d"${_uId}_hex" dojoAttachPoint\x3d"hexCode, focusNode, valueNode" size\x3d"6" class\x3d"dojoxColorPickerHexCode" dojoAttachEvent\x3d"onchange: _colorInputChange"\x3e\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\t\t\t\x3c/tr\x3e\n\t\t\t\t\t\t\x3c/table\x3e\n\t\t\t\t\t\x3c/td\x3e\n\t\t\t\t\x3c/tr\x3e\n\t\t\t\x3c/table\x3e\n\t\t\x3c/td\x3e\n\t\x3c/tr\x3e\n\x3c/table\x3e\n\n'}});
define("dojox/widget/ColorPicker","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/connect dojo/_base/sniff dojo/_base/window dojo/_base/event dojo/dom dojo/dom-class dojo/keys dojo/fx dojo/dnd/move dijit/registry dijit/_base/focus dijit/form/_FormWidget dijit/typematic dojox/color dojo/i18n dojo/i18n!./nls/ColorPicker dojo/i18n!dojo/cldr/nls/number dojo/text!./ColorPicker/ColorPicker.html".split(" "),function(s,t,c,u,e,n,v,w,x,p,y,g,m,q,z,l,A,h,k,
r,C,D,B){s.experimental("dojox.widget.ColorPicker");return t("dojox.widget.ColorPicker",A,{showRgb:!0,showHsv:!0,showHex:!0,webSafe:!0,animatePoint:!0,slideDuration:250,liveUpdate:!1,PICKER_HUE_H:150,PICKER_SAT_VAL_H:150,PICKER_SAT_VAL_W:150,PICKER_HUE_SELECTOR_H:8,PICKER_SAT_SELECTOR_H:10,PICKER_SAT_SELECTOR_W:10,value:"#ffffff",_underlay:require.toUrl("dojox/widget/ColorPicker/images/underlay.png"),_hueUnderlay:require.toUrl("dojox/widget/ColorPicker/images/hue.png"),_pickerPointer:require.toUrl("dojox/widget/ColorPicker/images/pickerPointer.png"),
_huePickerPointer:require.toUrl("dojox/widget/ColorPicker/images/hueHandle.png"),_huePickerPointerAlly:require.toUrl("dojox/widget/ColorPicker/images/hueHandleA11y.png"),templateString:B,postMixInProperties:function(){y.contains(w.body(),"dijit_a11y")&&(this._huePickerPointer=this._huePickerPointerAlly);this._uId=z.getUniqueId(this.id);c.mixin(this,r.getLocalization("dojox.widget","ColorPicker"));c.mixin(this,r.getLocalization("dojo.cldr","number"));this.inherited(arguments)},postCreate:function(){this.inherited(arguments);
7>v("ie")&&(this.colorUnderlay.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src\x3d'"+this._underlay+"', sizingMethod\x3d'scale')",this.colorUnderlay.src=this._blankGif.toString());this.showRgb||(this.rgbNode.style.visibility="hidden");this.showHsv||(this.hsvNode.style.visibility="hidden");this.showHex||(this.hexNode.style.visibility="hidden");this.webSafe||(this.safePreviewNode.style.visibility="hidden")},startup:function(){this._started||(this._started=!0,this.set("value",this.value),
this._mover=new q.boxConstrainedMoveable(this.cursorNode,{box:{t:-(this.PICKER_SAT_SELECTOR_H/2),l:-(this.PICKER_SAT_SELECTOR_W/2),w:this.PICKER_SAT_VAL_W,h:this.PICKER_SAT_VAL_H}}),this._hueMover=new q.boxConstrainedMoveable(this.hueCursorNode,{box:{t:-(this.PICKER_HUE_SELECTOR_H/2),l:0,w:0,h:this.PICKER_HUE_H}}),this._subs=[],this._subs.push(n.subscribe("/dnd/move/stop",c.hitch(this,"_clearTimer"))),this._subs.push(n.subscribe("/dnd/move/start",c.hitch(this,"_setTimer"))),this._keyListeners=[],
this._connects.push(h.addKeyListener(this.hueCursorNode,{charOrCode:g.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateHueCursorNode),25,25)),this._connects.push(h.addKeyListener(this.hueCursorNode,{charOrCode:g.DOWN_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateHueCursorNode),25,25)),this._connects.push(h.addKeyListener(this.cursorNode,{charOrCode:g.UP_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateCursorNode),
25,25)),this._connects.push(h.addKeyListener(this.cursorNode,{charOrCode:g.DOWN_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateCursorNode),25,25)),this._connects.push(h.addKeyListener(this.cursorNode,{charOrCode:g.LEFT_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateCursorNode),25,25)),this._connects.push(h.addKeyListener(this.cursorNode,{charOrCode:g.RIGHT_ARROW,shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1},this,c.hitch(this,this._updateCursorNode),
25,25)))},_setValueAttr:function(a,b){this._started&&this.setColor(a,b)},setColor:function(a,b){a=k.fromString(a);this._updatePickerLocations(a);this._updateColorInputs(a);this._updateValue(a,b)},_setTimer:function(a){a.node!=this.cursorNode&&a.node!=this.hueCursorNode||(l.focus(a.node),p.setSelectable(this.domNode,!1),this._timer=setInterval(c.hitch(this,"_updateColor"),45))},_clearTimer:function(a){this._timer&&(clearInterval(this._timer),this._timer=null,this.onChange(this.value),p.setSelectable(this.domNode,
!0))},_setHue:function(a){e.style(this.colorUnderlay,"backgroundColor",k.fromHsv(a,100,100).toHex())},_updateHueCursorNode:function(a,b,f){if(-1!==a){a=e.style(this.hueCursorNode,"top");b=this.PICKER_HUE_SELECTOR_H/2;a+=b;var d=!1;f.charOrCode==g.UP_ARROW?0<a&&(a-=1,d=!0):f.charOrCode==g.DOWN_ARROW&&a<this.PICKER_HUE_H&&(a+=1,d=!0);d&&e.style(this.hueCursorNode,"top",a-b+"px")}else this._updateColor(!0)},_updateCursorNode:function(a,b,f){b=this.PICKER_SAT_SELECTOR_H/2;var d=this.PICKER_SAT_SELECTOR_W/
2;if(-1!==a){a=e.style(this.cursorNode,"top");var c=e.style(this.cursorNode,"left");a+=b;var c=c+d,h=!1;f.charOrCode==g.UP_ARROW?0<a&&(a-=1,h=!0):f.charOrCode==g.DOWN_ARROW?a<this.PICKER_SAT_VAL_H&&(a+=1,h=!0):f.charOrCode==g.LEFT_ARROW?0<c&&(c-=1,h=!0):f.charOrCode==g.RIGHT_ARROW&&c<this.PICKER_SAT_VAL_W&&(c+=1,h=!0);h&&(c-=d,e.style(this.cursorNode,"top",a-b+"px"),e.style(this.cursorNode,"left",c+"px"))}else this._updateColor(!0)},_updateColor:function(a){var b=this.PICKER_HUE_SELECTOR_H/2,f=this.PICKER_SAT_SELECTOR_H/
2,c=this.PICKER_SAT_SELECTOR_W/2,b=e.style(this.hueCursorNode,"top")+b,f=e.style(this.cursorNode,"top")+f,c=e.style(this.cursorNode,"left")+c,b=Math.round(360-360*(b/this.PICKER_HUE_H)),c=k.fromHsv(b,100*(c/this.PICKER_SAT_VAL_W),100-100*(f/this.PICKER_SAT_VAL_H));this._updateColorInputs(c);this._updateValue(c,a);b!=this._hue&&this._setHue(b)},_colorInputChange:function(a){var b,c=!1;switch(a.target){case this.hexCode:b=k.fromString(a.target.value);c=!0;break;case this.Rval:case this.Gval:case this.Bval:b=
k.fromArray([this.Rval.value,this.Gval.value,this.Bval.value]);c=!0;break;case this.Hval:case this.Sval:case this.Vval:b=k.fromHsv(this.Hval.value,this.Sval.value,this.Vval.value),c=!0}c&&(this._updatePickerLocations(b),this._updateColorInputs(b),this._updateValue(b,!0))},_updateValue:function(a,b){var c=a.toHex();this.value=this.valueNode.value=c;if(b&&(!this._timer||this.liveUpdate))this.onChange(c)},_updatePickerLocations:function(a){var b=this.PICKER_HUE_SELECTOR_H/2,c=this.PICKER_SAT_SELECTOR_H/
2,d=this.PICKER_SAT_SELECTOR_W/2;a=a.toHsv();b=Math.round(this.PICKER_HUE_H-a.h/360*this.PICKER_HUE_H)-b;d=Math.round(a.s/100*this.PICKER_SAT_VAL_W)-d;c=Math.round(this.PICKER_SAT_VAL_H-a.v/100*this.PICKER_SAT_VAL_H)-c;this.animatePoint?(m.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:b,left:0}).play(),m.slideTo({node:this.cursorNode,duration:this.slideDuration,top:c,left:d}).play()):(e.style(this.hueCursorNode,"top",b+"px"),e.style(this.cursorNode,{left:d+"px",top:c+"px"}));a.h!=
this._hue&&this._setHue(a.h)},_updateColorInputs:function(a){var b=a.toHex();this.showRgb&&(this.Rval.value=a.r,this.Gval.value=a.g,this.Bval.value=a.b);this.showHsv&&(a=a.toHsv(),this.Hval.value=Math.round(a.h),this.Sval.value=Math.round(a.s),this.Vval.value=Math.round(a.v));this.showHex&&(this.hexCode.value=b);this.previewNode.style.backgroundColor=b;this.webSafe&&(this.safePreviewNode.style.backgroundColor=b)},_setHuePoint:function(a){var b=this.PICKER_HUE_SELECTOR_H/2;a=a.layerY||a.y-a.target.getBoundingClientRect().top;
a-=b;this.animatePoint?m.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:a,left:0,onEnd:c.hitch(this,function(){this._updateColor(!0);l.focus(this.hueCursorNode)})}).play():(e.style(this.hueCursorNode,"top",a+"px"),this._updateColor(!0))},_setPoint:function(a){var b=this.PICKER_SAT_SELECTOR_H/2,f=this.PICKER_SAT_SELECTOR_W/2,d=a.layerY||a.y-a.target.getBoundingClientRect().top,d=d-b,b=a.layerX||a.x-a.target.getBoundingClientRect().left,b=b-f;a&&l.focus(a.target);this.animatePoint?
m.slideTo({node:this.cursorNode,duration:this.slideDuration,top:d,left:b,onEnd:c.hitch(this,function(){this._updateColor(!0);l.focus(this.cursorNode)})}).play():(e.style(this.cursorNode,{left:b+"px",top:d+"px"}),this._updateColor(!0))},_handleKey:function(a){},focus:function(){this.focused||l.focus(this.focusNode)},_stopDrag:function(a){x.stop(a)},destroy:function(){this.inherited(arguments);u.forEach(this._subs,function(a){n.unsubscribe(a)});delete this._subs}})});
//# sourceMappingURL=ColorPicker.js.map
/*
	Copyright (c) 2004-2016, The JS Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/fx","./_base/lang ./Evented ./_base/kernel ./_base/array ./aspect ./_base/fx ./dom ./dom-style ./dom-geometry ./ready require".split(" "),function(d,s,g,h,e,k,p,r,t,l,u){g.isAsync||l(0,function(){u(["./fx/Toggler"])});g=g.fx={};l={_fire:function(a,b){this[a]&&this[a].apply(this,b||[]);return this}};var m=function(a){this._index=-1;this._animations=a||[];this._current=this._onAnimateCtx=this._onEndCtx=null;this.duration=0;h.forEach(this._animations,function(a){a&&("undefined"!=typeof a.duration&&
(this.duration+=a.duration),a.delay&&(this.duration+=a.delay))},this)};m.prototype=new s;d.extend(m,{_onAnimate:function(){this._fire("onAnimate",arguments)},_onEnd:function(){this._onAnimateCtx.remove();this._onEndCtx.remove();this._onAnimateCtx=this._onEndCtx=null;this._index+1==this._animations.length?this._fire("onEnd"):(this._current=this._animations[++this._index],this._onAnimateCtx=e.after(this._current,"onAnimate",d.hitch(this,"_onAnimate"),!0),this._onEndCtx=e.after(this._current,"onEnd",
d.hitch(this,"_onEnd"),!0),this._current.play(0,!0))},play:function(a,b){this._current||(this._current=this._animations[this._index=0]);if(!b&&"playing"==this._current.status())return this;var c=e.after(this._current,"beforeBegin",d.hitch(this,function(){this._fire("beforeBegin")}),!0),f=e.after(this._current,"onBegin",d.hitch(this,function(a){this._fire("onBegin",arguments)}),!0),n=e.after(this._current,"onPlay",d.hitch(this,function(a){this._fire("onPlay",arguments);c.remove();f.remove();n.remove()}));
this._onAnimateCtx&&this._onAnimateCtx.remove();this._onAnimateCtx=e.after(this._current,"onAnimate",d.hitch(this,"_onAnimate"),!0);this._onEndCtx&&this._onEndCtx.remove();this._onEndCtx=e.after(this._current,"onEnd",d.hitch(this,"_onEnd"),!0);this._current.play.apply(this._current,arguments);return this},pause:function(){if(this._current){var a=e.after(this._current,"onPause",d.hitch(this,function(b){this._fire("onPause",arguments);a.remove()}),!0);this._current.pause()}return this},gotoPercent:function(a,
b){this.pause();var c=this.duration*a;this._current=null;h.some(this._animations,function(a,b){if(c<=a.duration)return this._current=a,this._index=b,!0;c-=a.duration;return!1},this);this._current&&this._current.gotoPercent(c/this._current.duration);b&&this.play();return this},stop:function(a){if(this._current){if(a){for(;this._index+1<this._animations.length;++this._index)this._animations[this._index].stop(!0);this._current=this._animations[this._index]}var b=e.after(this._current,"onStop",d.hitch(this,
function(a){this._fire("onStop",arguments);b.remove()}),!0);this._current.stop()}return this},status:function(){return this._current?this._current.status():"stopped"},destroy:function(){this.stop();this._onAnimateCtx&&this._onAnimateCtx.remove();this._onEndCtx&&this._onEndCtx.remove()}});d.extend(m,l);g.chain=function(a){return new m(d.isArray(a)?a:Array.prototype.slice.call(a,0))};var q=function(a){this._animations=a||[];this._connects=[];this.duration=this._finished=0;h.forEach(a,function(a){var b=
a.duration;a.delay&&(b+=a.delay);this.duration<b&&(this.duration=b);this._connects.push(e.after(a,"onEnd",d.hitch(this,"_onEnd"),!0))},this);this._pseudoAnimation=new k.Animation({curve:[0,1],duration:this.duration});var b=this;h.forEach("beforeBegin onBegin onPlay onAnimate onPause onStop onEnd".split(" "),function(a){b._connects.push(e.after(b._pseudoAnimation,a,function(){b._fire(a,arguments)},!0))})};d.extend(q,{_doAction:function(a,b){h.forEach(this._animations,function(c){c[a].apply(c,b)});
return this},_onEnd:function(){++this._finished>this._animations.length&&this._fire("onEnd")},_call:function(a,b){var c=this._pseudoAnimation;c[a].apply(c,b)},play:function(a,b){this._finished=0;this._doAction("play",arguments);this._call("play",arguments);return this},pause:function(){this._doAction("pause",arguments);this._call("pause",arguments);return this},gotoPercent:function(a,b){var c=this.duration*a;h.forEach(this._animations,function(a){a.gotoPercent(a.duration<c?1:c/a.duration,b)});this._call("gotoPercent",
arguments);return this},stop:function(a){this._doAction("stop",arguments);this._call("stop",arguments);return this},status:function(){return this._pseudoAnimation.status()},destroy:function(){this.stop();h.forEach(this._connects,function(a){a.remove()})}});d.extend(q,l);g.combine=function(a){return new q(d.isArray(a)?a:Array.prototype.slice.call(a,0))};g.wipeIn=function(a){var b=a.node=p.byId(a.node),c=b.style,f;a=k.animateProperty(d.mixin({properties:{height:{start:function(){f=c.overflow;c.overflow=
"hidden";if("hidden"==c.visibility||"none"==c.display)return c.height="1px",c.display="",c.visibility="",1;var a=r.get(b,"height");return Math.max(a,1)},end:function(){return b.scrollHeight}}}},a));var n=function(){c.height="auto";c.overflow=f};e.after(a,"onStop",n,!0);e.after(a,"onEnd",n,!0);return a};g.wipeOut=function(a){var b=(a.node=p.byId(a.node)).style,c;a=k.animateProperty(d.mixin({properties:{height:{end:1}}},a));e.after(a,"beforeBegin",function(){c=b.overflow;b.overflow="hidden";b.display=
""},!0);var f=function(){b.overflow=c;b.height="auto";b.display="none"};e.after(a,"onStop",f,!0);e.after(a,"onEnd",f,!0);return a};g.slideTo=function(a){var b=null,c=null,f=function(a){return function(){var d=r.getComputedStyle(a),e=d.position;b="absolute"==e?a.offsetTop:parseInt(d.top)||0;c="absolute"==e?a.offsetLeft:parseInt(d.left)||0;"absolute"!=e&&"relative"!=e&&(d=t.position(a,!0),b=d.y,c=d.x,a.style.position="absolute",a.style.top=b+"px",a.style.left=c+"px")}}(a.node=p.byId(a.node));f();a=
k.animateProperty(d.mixin({properties:{top:a.top||0,left:a.left||0}},a));e.after(a,"beforeBegin",f,!0);return a};return g});
//# sourceMappingURL=fx.js.map
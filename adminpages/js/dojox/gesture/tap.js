//>>built
define("dojox/gesture/tap",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(c,f,g,h,e){c.experimental("dojox.gesture.tap");c=f(h,{defaultEvent:"tap",subEvents:["hold","doubletap"],holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(a,b){if(b.touches&&2<=b.touches.length)clearTimeout(a.tapTimeOut),delete a.context;else{var d=b.target;this._initTap(a,b);a.tapTimeOut=setTimeout(g.hitch(this,function(){this._isTap(a,b)&&this.fire(d,{type:"tap.hold"});
delete a.context}),this.holdThreshold)}},release:function(a,b){if(a.context&&this._isTap(a,b))switch(a.context.c){case 1:this.fire(b.target,{type:"tap"});break;case 2:this.fire(b.target,{type:"tap.doubletap"})}clearTimeout(a.tapTimeOut)},_initTap:function(a,b){a.context||(a.context={x:0,y:0,t:0,c:0});var d=(new Date).getTime();d-a.context.t<=this.doubleTapTimeout?a.context.c++:(a.context.c=1,a.context.x=b.screenX,a.context.y=b.screenY);a.context.t=d},_isTap:function(a,b){if(!a.context)return!1;var d=
Math.abs(a.context.x-b.screenX),c=Math.abs(a.context.y-b.screenY);return d<=this.tapRadius&&c<=this.tapRadius}});e.gesture.tap=new c;e.gesture.tap.Tap=c;return e.gesture.tap});
//# sourceMappingURL=tap.js.map
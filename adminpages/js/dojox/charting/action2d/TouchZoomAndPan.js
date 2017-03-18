//>>built
define("dojox/charting/action2d/TouchZoomAndPan","dojo/_base/lang dojo/_base/declare dojo/_base/event dojo/sniff ./ChartAction ../Element dojo/touch ../plot2d/common dojo/has!dojo-bidi?../bidi/action2d/ZoomAndPan".split(" "),function(n,k,h,m,f,p,l,q,r){var s=k(p,{constructor:function(a){},render:function(){this.isDirty()&&(this.cleanGroup(),this.group.createRect({width:this.chart.dim.width,height:this.chart.dim.height}).setFill("rgba(0,0,0,0)"))},clear:function(){this.dirty=!0;this.chart.stack[0]!=
this&&this.chart.movePlotToFront(this.name);return this},getSeriesStats:function(){return n.delegate(q.defaultStats)},initializeScalers:function(){return this},isDirty:function(){return this.dirty}});f=k(m("dojo-bidi")?"dojox.charting.action2d.NonBidiTouchZoomAndPan":"dojox.charting.action2d.TouchZoomAndPan",f,{defaultParams:{axis:"x",scaleFactor:1.2,maxScale:100,enableScroll:!0,enableZoom:!0},optionalParams:{},constructor:function(a,c,b){this._listeners=[{eventName:l.press,methodName:"onTouchStart"},
{eventName:l.move,methodName:"onTouchMove"},{eventName:l.release,methodName:"onTouchEnd"}];b||(b={});this.axis=b.axis?b.axis:"x";this.scaleFactor=b.scaleFactor?b.scaleFactor:1.2;this.maxScale=b.maxScale?b.maxScale:100;this.enableScroll=void 0!=b.enableScroll?b.enableScroll:!0;this.enableZoom=void 0!=b.enableScroll?b.enableZoom:!0;this._uName="touchZoomPan"+this.axis;this.connect()},connect:function(){this.inherited(arguments);-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.addPlot(this._uName,
{type:s})},disconnect:function(){-1!=this.chart.surface.declaredClass.indexOf("svg")&&this.chart.removePlot(this._uName);this.inherited(arguments)},onTouchStart:function(a){var c=this.chart,b=c.getAxis(this.axis),e=a.touches?a.touches.length:1,d=a.touches?a.touches[0]:a,g=this._startPageCoord;this._startPageCoord={x:d.pageX,y:d.pageY};(this.enableZoom||this.enableScroll)&&c._delayedRenderHandle&&c.render();this.enableZoom&&2<=e?(this._startTime=0,this._endPageCoord={x:a.touches[1].pageX,y:a.touches[1].pageY},
a={x:(this._startPageCoord.x+this._endPageCoord.x)/2,y:(this._startPageCoord.y+this._endPageCoord.y)/2},c=b.getScaler(),this._initScale=b.getWindowScale(),this._middleCoord=(this._initData=this.plot.toData())(a)[this.axis],this._startCoord=c.bounds.from,this._endCoord=c.bounds.to):(!a.touches||1==a.touches.length?this._startTime?250>(new Date).getTime()-this._startTime&&30>Math.abs(this._startPageCoord.x-g.x)&&30>Math.abs(this._startPageCoord.y-g.y)?(this._startTime=0,this.onDoubleTap(a)):this._startTime=
0:this._startTime=(new Date).getTime():this._startTime=0,this.enableScroll&&(this._startScroll(b),h.stop(a)))},onTouchMove:function(a){var c=this.chart,b=c.getAxis(this.axis),e=a.touches?a.touches.length:1,d=b.vertical?"pageY":"pageX",b=b.vertical?"y":"x";this._startTime=0;this.enableZoom&&2<=e?(e={x:(a.touches[1].pageX+a.touches[0].pageX)/2,y:(a.touches[1].pageY+a.touches[0].pageY)/2},d=(this._endPageCoord[b]-this._startPageCoord[b])/(a.touches[1][d]-a.touches[0][d]),this._initScale/d>this.maxScale||
(e=this._initData(e)[this.axis],c.zoomIn(this.axis,[d*(this._startCoord-e)+this._middleCoord,d*(this._endCoord-e)+this._middleCoord]),h.stop(a))):this.enableScroll&&(d=this._getDelta(a),c.setAxisWindow(this.axis,this._lastScale,this._initOffset-d/this._lastFactor/this._lastScale),c.delayedRender(),h.stop(a))},onTouchEnd:function(a){var c=this.chart.getAxis(this.axis);if((!a.touches||1==a.touches.length)&&this.enableScroll)a=a.touches?a.touches[0]:a,this._startPageCoord={x:a.pageX,y:a.pageY},this._startScroll(c)},
_startScroll:function(a){var c=a.getScaler().bounds;this._initOffset=a.getWindowOffset();this._lastScale=a.getWindowScale();this._lastFactor=c.span/(c.upper-c.lower)},onDoubleTap:function(a){var c=this.chart,b=c.getAxis(this.axis),e=1/this.scaleFactor;if(1==b.getWindowScale()){var d=b.getScaler(),b=d.bounds.from,d=d.bounds.to,g=(b+d)/2,f=this.plot.toData(this._startPageCoord)[this.axis];c.zoomIn(this.axis,[e*(b-g)+f,e*(d-g)+f])}else c.setAxisWindow(this.axis,1,0),c.render();h.stop(a)},_getDelta:function(a){var c=
this.chart.getAxis(this.axis),b=c.vertical?"pageY":"pageX",e=c.vertical?"y":"x";a=a.touches?a.touches[0]:a;return c.vertical?this._startPageCoord[e]-a[b]:a[b]-this._startPageCoord[e]}});return m("dojo-bidi")?k("dojox.charting.action2d.TouchZoomAndPan",[f,r]):f});
//# sourceMappingURL=TouchZoomAndPan.js.map
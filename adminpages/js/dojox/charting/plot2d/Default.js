//>>built
define("dojox/charting/plot2d/Default","dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/has ./CartesianBase ./_PlotEvents ./common dojox/lang/functional dojox/lang/functional/reversed dojox/lang/utils dojox/gfx/fx".split(" "),function(r,E,m,K,L,M,w,N,O,x,P){var Q=O.lambda("item.purgeGroup()");return E("dojox.charting.plot2d.Default",[L,M],{defaultParams:{lines:!0,areas:!1,markers:!1,tension:"",animate:!1,enableCache:!1,interpolate:!1},optionalParams:{stroke:{},outline:{},shadow:{},fill:{},
filter:{},styleFunc:null,font:"",fontColor:"",marker:"",markerStroke:{},markerOutline:{},markerShadow:{},markerFill:{},markerFont:"",markerFontColor:"",zeroLine:0},constructor:function(d,c){this.opt=r.clone(r.mixin(this.opt,this.defaultParams));x.updateWithObject(this.opt,c);x.updateWithPattern(this.opt,c,this.optionalParams);this.animate=this.opt.animate},createPath:function(d,c,b){var f;this.opt.enableCache&&0<d._pathFreePool.length?(f=d._pathFreePool.pop(),f.setShape(b),c.add(f)):f=c.createPath(b);
this.opt.enableCache&&d._pathUsePool.push(f);return f},buildSegments:function(d,c){for(var b=this.series[d],f=c?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,m=c?Math.min(b.data.length,Math.ceil(this._hScaler.bounds.to)):b.data.length,h=null,r=[];f<m;f++)if(this.isNullValue(b.data[f])){if(!this.opt.interpolate||c)h=null}else h||(h=[],r.push({index:f,rseg:h})),h.push(c&&b.data[f].hasOwnProperty("y")?b.data[f].y:b.data[f]);return r},render:function(d,c){if(this.zoom&&!this.isDataDirty())return this.performZoom(d,
c);this.resetEvents();this.dirty=this.isDirty();var b;this.dirty&&(m.forEach(this.series,Q),this._eventSeries={},this.cleanGroup(),this.getGroup().setTransform(null),b=this.getGroup(),N.forEachRev(this.series,function(a){a.cleanGroup(b)}));for(var f=this.chart.theme,q,h,x=this.events(),y=0;y<this.series.length;y++){var a=this.series[y];if(!this.dirty&&!a.dirty)f.skip(),this._reconnectEvents(a.name);else if(a.cleanGroup(),this.opt.enableCache&&(a._pathFreePool=(a._pathFreePool?a._pathFreePool:[]).concat(a._pathUsePool?
a._pathUsePool:[]),a._pathUsePool=[]),a.data.length){var g=f.next(this.opt.areas?"area":"line",[this.opt,a],!0),e,F=this._hScaler.scaler.getTransformerFromModel(this._hScaler),z=this._vScaler.scaler.getTransformerFromModel(this._vScaler),E=this._eventSeries[a.name]=Array(a.data.length);b=a.group;if(a.hidden){this.opt.lines&&(a.dyn.stroke=g.series.stroke);if(a.markers||void 0===a.markers&&this.opt.markers)a.dyn.markerFill=g.marker.fill,a.dyn.markerStroke=g.marker.stroke,a.dyn.marker=g.symbol;this.opt.areas&&
(a.dyn.fill=g.series.fill)}else{for(var A=m.some(a.data,function(a){return"number"==typeof a||a&&!a.hasOwnProperty("x")}),B=this.buildSegments(y,A),t=0;t<B.length;t++){var l=B[t];e=A?m.map(l.rseg,function(a,b){return{x:F(b+l.index+1)+c.l,y:d.height-c.b-z(a),data:a}},this):m.map(l.rseg,function(a){return{x:F(a.x)+c.l,y:d.height-c.b-z(a.y),data:a}},this);if(A&&this.opt.interpolate)for(;t<B.length;)t++,(l=B[t])&&(e=e.concat(m.map(l.rseg,function(a,b){return{x:F(b+l.index+1)+c.l,y:d.height-c.b-z(a),data:a}},
this)));var n=this.opt.tension?w.curve(e,this.opt.tension):"";if(this.opt.areas&&1<e.length){var u=this._plotFill(g.series.fill,d,c),p=r.clone(e),v=d.height-c.b;isNaN(this.opt.zeroLine)||(v=Math.max(c.t,Math.min(d.height-c.b-z(this.opt.zeroLine),v)));this.opt.tension?a.dyn.fill=b.createPath(n+" "+("L"+p[p.length-1].x+","+v+" L"+p[0].x+","+v+" L"+p[0].x+","+p[0].y)).setFill(u).getFill():(p.push({x:e[e.length-1].x,y:v}),p.push({x:e[0].x,y:v}),p.push(e[0]),a.dyn.fill=b.createPolyline(p).setFill(u).getFill())}if(this.opt.lines||
this.opt.markers)q=g.series.stroke,g.series.outline&&(h=a.dyn.outline=w.makeStroke(g.series.outline),h.width=2*h.width+(q&&q.width||0));this.opt.markers&&(a.dyn.marker=g.symbol);var C=null,G=null,H=null;if(q&&g.series.shadow&&1<e.length){var s=g.series.shadow,u=m.map(e,function(a){return{x:a.x+s.dx,y:a.y+s.dy}});this.opt.lines&&(a.dyn.shadow=this.opt.tension?b.createPath(w.curve(u,this.opt.tension)).setStroke(s).getStroke():b.createPolyline(u).setStroke(s).getStroke());this.opt.markers&&g.marker.shadow&&
(s=g.marker.shadow,H=m.map(u,function(c){return this.createPath(a,b,"M"+c.x+" "+c.y+" "+g.symbol).setStroke(s).setFill(s.color)},this))}if(this.opt.lines&&1<e.length){var D;h&&(a.dyn.outline=this.opt.tension?b.createPath(n).setStroke(h).getStroke():b.createPolyline(e).setStroke(h).getStroke());a.dyn.stroke=this.opt.tension?(D=b.createPath(n)).setStroke(q).getStroke():(D=b.createPolyline(e)).setStroke(q).getStroke();D.setFilter&&g.series.filter&&D.setFilter(g.series.filter)}n=null;if(this.opt.markers){var k=
g,C=Array(e.length),G=Array(e.length);h=null;k.marker.outline&&(h=w.makeStroke(k.marker.outline),h.width=2*h.width+(k.marker.stroke?k.marker.stroke.width:0));m.forEach(e,function(c,e){if(this.opt.styleFunc||"number"!=typeof c.data){var d="number"!=typeof c.data?[c.data]:[];this.opt.styleFunc&&d.push(this.opt.styleFunc(c.data));k=f.addMixin(g,"marker",d,!0)}else k=f.post(g,"marker");d="M"+c.x+" "+c.y+" "+k.symbol;h&&(G[e]=this.createPath(a,b,d).setStroke(h));C[e]=this.createPath(a,b,d).setStroke(k.marker.stroke).setFill(k.marker.fill)},
this);a.dyn.markerFill=k.marker.fill;a.dyn.markerStroke=k.marker.stroke;!n&&this.opt.labels&&(n=C[0].getBoundingBox());x?m.forEach(C,function(c,b){var d={element:"marker",index:b+l.index,run:a,shape:c,outline:G[b]||null,shadow:H&&H[b]||null,cx:e[b].x,cy:e[b].y};A?(d.x=b+l.index+1,d.y=a.data[b+l.index]):(d.x=l.rseg[b].x,d.y=a.data[b+l.index].y);this._connectEvents(d);E[b+l.index]=d},this):delete this._eventSeries[a.name]}if(this.opt.labels){var I=n?n.width:2,J=n?n.height:2;m.forEach(e,function(a,c){if(this.opt.styleFunc||
"number"!=typeof a.data){var d="number"!=typeof a.data?[a.data]:[];this.opt.styleFunc&&d.push(this.opt.styleFunc(a.data));k=f.addMixin(g,"marker",d,!0)}else k=f.post(g,"marker");this.createLabel(b,l.rseg[c],{x:a.x-I/2,y:a.y-J/2,width:I,height:J},k)},this)}}a.dirty=!1}}else a.dirty=!1,f.skip()}K("dojo-bidi")&&this._checkOrientation(this.group,d,c);this.animate&&(q=this.getGroup(),P.animateTransform(r.delegate({shape:q,duration:1200,transform:[{name:"translate",start:[0,d.height-c.b],end:[0,0]},{name:"scale",
start:[1,0],end:[1,1]},{name:"original"}]},this.animate)).play());this.dirty=!1;return this}})});
//# sourceMappingURL=Default.js.map
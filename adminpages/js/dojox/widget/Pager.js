//>>built
require({cache:{"url:dojox/widget/Pager/Pager.html":'\x3cdiv dojoAttachPoint\x3d"pagerContainer" tabIndex\x3d"0" dojoAttachEvent\x3d"onkeypress: _handleKey, onfocus: _a11yStyle, onblur:_a11yStyle" class\x3d"${orientation}PagerContainer"\x3e\n    \x3cdiv class\x3d"pagerContainer"\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"pagerContainerStatus" class\x3d"${orientation}PagerStatus"\x3e\x3c/div\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"pagerContainerView" class\x3d"${orientation}PagerView"\x3e\n\t\t    \x3cdiv dojoAttachPoint\x3d"pagerItemContainer"\x3e\x3cul dojoAttachPoint\x3d"pagerItems" class\x3d"pagerItems"\x3e\x3c/ul\x3e\x3c/div\x3e\n\t\t\x3c/div\x3e\n\t\t\x3cdiv dojoAttachPoint\x3d"pagerContainerPager" class\x3d"${orientation}PagerPager"\x3e\n\t\t\t\x3cdiv tabIndex\x3d"0" dojoAttachPoint\x3d"pagerNext" class\x3d"pagerIconContainer" dojoAttachEvent\x3d"onclick: _next"\x3e\x3cimg dojoAttachPoint\x3d"pagerIconNext" src\x3d"${iconNext}" alt\x3d"Next" /\x3e\x3c/div\x3e\n\t\t\t\x3cdiv tabIndex\x3d"0" dojoAttachPoint\x3d"pagerPrevious" class\x3d"pagerIconContainer" dojoAttachEvent\x3d"onclick: _previous"\x3e\x3cimg dojoAttachPoint\x3d"pagerIconPrevious" src\x3d"${iconPrevious}" alt\x3d"Previous" /\x3e\x3c/div\x3e\n\t\t\x3c/div\x3e\n    \x3c/div\x3e\n\t\x3cdiv dojoAttachPoint\x3d"containerNode" style\x3d"display:none"\x3e\x3c/div\x3e\n\x3c/div\x3e'}});
define("dojox/widget/Pager","dojo/aspect dojo/_base/array dojo/_base/declare dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/fx dojo/_base/kernel dojo/keys dojo/_base/lang dojo/on dijit/_WidgetBase dijit/_TemplatedMixin ./PagerItem dojo/text!./Pager/Pager.html".split(" "),function(s,u,v,h,w,q,x,k,a,l,y,m,p,t,z,A,B,C){y.experimental("dojox.widget.Pager");return v("dojox.widget.Pager",[z,A],{templateString:C,iconPrevious:"",iconNext:"",iconPage:require.toUrl("dojox/widget/Pager/images/pageInactive.png"),
iconPageActive:require.toUrl("dojox/widget/Pager/images/pageActive.png"),store:null,orientation:"horizontal",statusPos:"leading",pagerPos:"center",duration:500,itemSpace:2,resizeChildren:!0,itemClass:B,itemsPage:3,postMixInProperties:function(){var a="horizontal"==this.orientation;p.mixin(this,{_totalPages:0,_currentPage:1,dirClass:"pager"+(a?"Horizontal":"Vertical"),iconNext:require.toUrl("dojox/widget/Pager/images/"+(a?"h":"v")+"Next.png"),iconPrevious:require.toUrl("dojox/widget/Pager/images/"+
(a?"h":"v")+"Previous.png")})},_next:function(){this.isLeftToRight()?this._pagerNext():this._pagerPrevious()},_previous:function(){this.isLeftToRight()?this._pagerPrevious():this._pagerNext()},postCreate:function(){this.inherited(arguments);this.store.fetch({onComplete:p.hitch(this,"_init")})},_a11yStyle:function(a){q.toggle(a.target,"pagerFocus","focus"==a.type)},_handleKey:function(a){switch(a.charCode==m.SPACE?m.SPACE:a.keyCode){case m.UP_ARROW:case m.RIGHT_ARROW:case 110:case 78:a.preventDefault();
this._next();break;case m.DOWN_ARROW:case m.LEFT_ARROW:case 112:case 80:a.preventDefault();this._previous();break;case m.ENTER:switch(a.target){case this.pagerNext:this._next();break;case this.pagerPrevious:this._previous()}}},_init:function(a){this.items=a;this._renderPages();this._renderStatus();this._renderPager()},generatePagerItem:function(a,d){var b=this.itemClass,b="string"==typeof b?p.getObject(b):b,c=x.create("div",{innerHTML:a.content});return new b({id:this.id+"-item-"+(d+1)},c)},_renderPages:function(){var e=
this.pagerContainerView,d="horizontal"==this.orientation;if(d){var b=k.getMarginBox(this.pagerContainerPager).h,c=k.getMarginBox(this.pagerContainerStatus).h;if("center"!=this.pagerPos)var f=b+c;else{var f=c,g=this.pagerIconNext.width,g=a.get(e,"width")-2*g;a.set(e,{width:g+"px",marginLeft:this.pagerIconNext.width+"px",marginRight:this.pagerIconNext.width+"px"})}f=a.get(this.pagerContainer,"height")-f;a.set(this.pagerContainerView,"height",f+"px");var n=Math.floor(a.get(e,"width")/this.itemsPage);
"trailing"==this.statusPos?("center"!=this.pagerPos&&a.set(e,"marginTop",b+"px"),a.set(e,"marginBottom",c+"px")):(a.set(e,"marginTop",c+"px"),"center"!=this.pagerPos&&a.set(e,"marginTop",b+"px"))}else b=k.getMarginBox(this.pagerContainerPager).w,c=k.getMarginBox(this.pagerContainerStatus).w,a.get(this.pagerContainer,"width"),"center"!=this.pagerPos?f=b+c:(f=c,g=this.pagerIconNext.height,g=a.get(e,"height")-2*g,a.set(e,{height:g+"px",marginTop:this.pagerIconNext.height+"px",marginBottom:this.pagerIconNext.height+
"px"})),f=a.get(this.pagerContainer,"width")-f,a.set(e,"width",f+"px"),n=Math.floor(a.get(e,"height")/this.itemsPage),"trailing"==this.statusPos?("center"!=this.pagerPos&&a.set(e,"marginLeft",b+"px"),a.set(e,"marginRight",c+"px")):(a.set(e,"marginLeft",c+"px"),"center"!=this.pagerPos&&a.set(e,"marginRight",b+"px"));var h="padding"+(d?"Left":"Top"),l="padding"+(d?"Right":"Bottom");u.forEach(this.items,function(b,c){var f=this.generatePagerItem(b,c),g={};this.pagerItems.appendChild(f.domNode);g[d?"width":
"height"]=n-this.itemSpace+"px";var k=d?"height":"width";g[k]=a.get(e,k)+"px";a.set(f.containerNode,g);this.resizeChildren&&f.resizeChildren();f.parseChildren();a.set(f.domNode,"position","absolute");c<this.itemsPage?(g=c*n,k=d?"left":"top",a.set(f.domNode,d?"top":"left","0px"),a.set(f.domNode,k,g+"px")):(a.set(f.domNode,"top","-1000px"),a.set(f.domNode,"left","-1000px"));a.set(f.domNode,l,this.itemSpace/2+"px");a.set(f.domNode,h,this.itemSpace/2+"px")},this)},_renderPager:function(){var e=this.pagerContainerPager;
"horizontal"==this.orientation?("center"!=this.statusPos&&("trailing"==this.statusPos?a.set(e,"top","0px"):a.set(e,"bottom","0px")),a.set(this.pagerNext,"right","0px"),a.set(this.pagerPrevious,"left","0px")):("trailing"==this.statusPos?a.set(e,"left","0px"):a.set(e,"right","0px"),a.set(this.pagerNext,"bottom","0px"),a.set(this.pagerPrevious,"top","0px"))},_renderStatus:function(){this._totalPages=Math.ceil(this.items.length/this.itemsPage);this.iconsLoaded=this.iconHeight=this.iconWidth=0;this._iconConnects=
[];for(var e=1;e<=this._totalPages;e++){var d=new Image,b=e;t(d,"click",p.hitch(this,"_pagerSkip",b));this._iconConnects[b]=t(d,"load",p.hitch(this,function(e){this.iconWidth+=d.width;this.iconHeight+=d.height;this.iconsLoaded++;if(this._totalPages==this.iconsLoaded)if("horizontal"==this.orientation){if("trailing"==this.statusPos){if("center"==this.pagerPos){var b=a.get(this.pagerContainer,"height"),g=a.get(this.pagerContainerStatus,"height");a.set(this.pagerContainerPager,"top",b/2-g/2+"px")}a.set(this.pagerContainerStatus,
"bottom","0px")}else"center"==this.pagerPos&&(b=a.get(this.pagerContainer,"height"),g=a.get(this.pagerContainerStatus,"height"),a.set(this.pagerContainerPager,"bottom",b/2-g/2+"px")),a.set(this.pagerContainerStatus,"top","0px");b=a.get(this.pagerContainer,"width")/2-this.iconWidth/2;a.set(this.pagerContainerStatus,this.isLeftToRight()?"paddingLeft":"paddingRight",b+"px")}else"trailing"==this.statusPos?("center"==this.pagerPos&&(b=a.get(this.pagerContainer,"width"),g=a.get(this.pagerContainerStatus,
"width"),a.set(this.pagerContainerPager,"left",b/2-g/2+"px")),a.set(this.pagerContainerStatus,"right","0px")):("center"==this.pagerPos&&(b=a.get(this.pagerContainer,"width"),g=a.get(this.pagerContainerStatus,"width"),a.set(this.pagerContainerPager,"right",b/2-g/2+"px")),a.set(this.pagerContainerStatus,"left","0px")),b=a.get(this.pagerContainer,"height")/2-this.iconHeight/2,a.set(this.pagerContainerStatus,"paddingTop",b+"px");this._iconConnects[e].remove()},b));d.src=e==this._currentPage?this.iconPageActive:
this.iconPage;b=e;q.add(d,this.orientation+"PagerIcon");w.set(d,"id",this.id+"-status-"+e);this.pagerContainerStatus.appendChild(d);"vertical"==this.orientation&&a.set(d,"display","block")}},_pagerSkip:function(a){if(this._currentPage!=a){var d;a<this._currentPage?(d=this._currentPage-a,a=this._totalPages+a-this._currentPage):(d=this._totalPages+this._currentPage-a,a-=this._currentPage);var b=a>d;this._toScroll=b?d:a;var c=b?"_pagerPrevious":"_pagerNext",f=s.after(this,"onScrollEnd",p.hitch(this,
function(){this._toScroll--;if(1>this._toScroll)f.remove();else this[c]()}),!0);this[c]()}},_pagerNext:function(){if(!this._anim){for(var e=[],d=this._currentPage*this.itemsPage;d>(this._currentPage-1)*this.itemsPage;d--)if(h.byId(this.id+"-item-"+d)){var b=h.byId(this.id+"-item-"+d),c=k.getMarginBox(b);"horizontal"==this.orientation?(c=c.l-this.itemsPage*c.w,e.push(l.slideTo({node:b,left:c,duration:this.duration}))):(c=c.t-this.itemsPage*c.h,e.push(l.slideTo({node:b,top:c,duration:this.duration})))}var f=
this._currentPage;this._currentPage==this._totalPages?this._currentPage=1:this._currentPage++;for(var g=this.itemsPage,d=this._currentPage*this.itemsPage;d>(this._currentPage-1)*this.itemsPage;d--){if(h.byId(this.id+"-item-"+d))if(b=h.byId(this.id+"-item-"+d),c=k.getMarginBox(b),"horizontal"==this.orientation){var n=a.get(this.pagerContainerView,"width")+(g-1)*c.w-1;a.set(b,"left",n+"px");a.set(b,"top","0px");c=n-this.itemsPage*c.w;e.push(l.slideTo({node:b,left:c,duration:this.duration}))}else n=
a.get(this.pagerContainerView,"height")+(g-1)*c.h-1,a.set(b,"top",n+"px"),a.set(b,"left","0px"),c=n-this.itemsPage*c.h,e.push(l.slideTo({node:b,top:c,duration:this.duration}));g--}this._anim=l.combine(e);var m=s.after(this._anim,"onEnd",p.hitch(this,function(){delete this._anim;this.onScrollEnd();m.remove()}),!0);this._anim.play();h.byId(this.id+"-status-"+f).src=this.iconPage;h.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},_pagerPrevious:function(){if(!this._anim){for(var e=
[],d=this._currentPage*this.itemsPage;d>(this._currentPage-1)*this.itemsPage;d--)if(h.byId(this.id+"-item-"+d)){var b=h.byId(this.id+"-item-"+d),c=k.getMarginBox(b);if("horizontal"==this.orientation){var f=a.get(b,"left")+this.itemsPage*c.w;e.push(l.slideTo({node:b,left:f,duration:this.duration}))}else f=a.get(b,"top")+this.itemsPage*c.h,e.push(l.slideTo({node:b,top:f,duration:this.duration}))}var g=this._currentPage;1==this._currentPage?this._currentPage=this._totalPages:this._currentPage--;for(var n=
this.itemsPage,m=1,d=this._currentPage*this.itemsPage;d>(this._currentPage-1)*this.itemsPage;d--){if(h.byId(this.id+"-item-"+d))if(b=h.byId(this.id+"-item-"+d),c=k.getMarginBox(b),"horizontal"==this.orientation){var r=-(m*c.w)+1;a.set(b,"left",r+"px");a.set(b,"top","0px");f=(n-1)*c.w;e.push(l.slideTo({node:b,left:f,duration:this.duration}));f=r+this.itemsPage*c.w;e.push(l.slideTo({node:b,left:f,duration:this.duration}))}else r=-(m*c.h+1),a.set(b,"top",r+"px"),a.set(b,"left","0px"),f=(n-1)*c.h,e.push(l.slideTo({node:b,
top:f,duration:this.duration}));n--;m++}this._anim=l.combine(e);var q=s.after(this._anim,"onEnd",p.hitch(this,function(){delete this._anim;this.onScrollEnd();q.remove()}),!0);this._anim.play();h.byId(this.id+"-status-"+g).src=this.iconPage;h.byId(this.id+"-status-"+this._currentPage).src=this.iconPageActive}},onScrollEnd:function(){}})});
//# sourceMappingURL=Pager.js.map
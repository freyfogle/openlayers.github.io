(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(e,t,r){"use strict";r.r(t);var o=r(18),n=r(3),i=r(2),a=r(11),s=r(76),c=r(15),u=r(21),h=r(25),l=r(36),p=r(32),w=r(61),_=r(51),d=r(62),v=r(10),f=r(5),y=r(19),m=function(e){function t(){e.call(this,{handleDownEvent:b,handleDragEvent:g,handleMoveEvent:x,handleUpEvent:E}),this.coordinate_=null,this.cursor_="pointer",this.feature_=null,this.previousCursor_=void 0}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(w.b);function b(e){var t=e.map.forEachFeatureAtPixel(e.pixel,(function(e){return e}));return t&&(this.coordinate_=e.coordinate,this.feature_=t),!!t}function g(e){var t=e.coordinate[0]-this.coordinate_[0],r=e.coordinate[1]-this.coordinate_[1];this.feature_.getGeometry().translate(t,r),this.coordinate_[0]=e.coordinate[0],this.coordinate_[1]=e.coordinate[1]}function x(e){if(this.cursor_){var t=e.map.forEachFeatureAtPixel(e.pixel,(function(e){return e})),r=e.map.getTargetElement();t?r.style.cursor!=this.cursor_&&(this.previousCursor_=r.style.cursor,r.style.cursor=this.cursor_):void 0!==this.previousCursor_&&(r.style.cursor=this.previousCursor_,this.previousCursor_=void 0)}}function E(){return this.coordinate_=null,this.feature_=null,!1}var C=new o.a(new h.a([0,0])),j=new o.a(new l.a([[-1e7,1e6],[-1e6,3e6]])),k=new o.a(new p.b([[[-3e6,-1e6],[-3e6,1e6],[-1e6,1e6],[-1e6,-1e6],[-3e6,-1e6]]]));new n.a({interactions:Object(_.a)().extend([new m]),layers:[new f.a({source:new d.a({url:"https://a.tiles.mapbox.com/v4/aj.1x1-degrees.json?secure&access_token=pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q"})}),new y.a({source:new v.a({features:[C,j,k]}),style:new a.c({image:new s.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.95,src:"data/icon.png"}),stroke:new c.a({width:3,color:[255,0,0,1]}),fill:new u.a({color:[0,0,255,.6]})})})],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[251,0]]]);
//# sourceMappingURL=custom-interactions.js.map
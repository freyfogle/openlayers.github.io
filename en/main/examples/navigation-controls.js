(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{226:function(t,e,n){"use strict";var o=n(77),a=n(15),i=n(45),r=n(32),c=function(t){function e(e){var n=e||{};t.call(this,{element:document.createElement("div"),target:n.target}),this.extent=n.extent?n.extent:null;var o=void 0!==n.className?n.className:"ol-zoom-extent",r=void 0!==n.label?n.label:"E",c=void 0!==n.tipLabel?n.tipLabel:"Fit to extent",l=document.createElement("button");l.setAttribute("type","button"),l.title=c,l.appendChild("string"==typeof r?document.createTextNode(r):r),l.addEventListener(a.a.CLICK,this.handleClick_.bind(this),!1);var s=o+" "+i.e+" "+i.b,p=this.element;p.className=s,p.appendChild(l)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleClick_=function(t){t.preventDefault(),this.handleZoomToExtent()},e.prototype.handleZoomToExtent=function(){var t=this.getMap().getView(),e=this.extent?this.extent:t.getProjection().getExtent();t.fitInternal(Object(r.d)(e))},e}(o.a);e.a=c},337:function(t,e,n){"use strict";n.r(e);var o=n(3),a=n(9),i=n(5),r=n(2),c=n(50),l=n(226);new o.a({controls:Object(c.a)().extend([new l.a({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})]),layers:[new i.a({source:new a.b})],target:"map",view:new r.a({center:[0,0],zoom:2})})}},[[337,0]]]);
//# sourceMappingURL=navigation-controls.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{227:function(t,e,a){"use strict";var r=a(64),i=a(49),o=a(152),n=a(61),s=a(42),l=a(38),h=a(16),c="translatestart",u="translating",p="translateend",_=function(t){function e(e,a,r,i,o){t.call(this,e),this.features=a,this.coordinate=r,this.startCoordinate=i,this.mapBrowserEvent=o}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(i.a),d=function(t){function e(e){var a,r=e||{};if(t.call(this,r),this.lastCoordinate_=null,this.startCoordinate_=null,this.features_=void 0!==r.features?r.features:null,r.layers)if("function"==typeof r.layers)a=r.layers;else{var i=r.layers;a=function(t){return Object(h.f)(i,t)}}else a=s.b;this.layerFilter_=a,this.filter_=r.filter?r.filter:s.b,this.hitTolerance_=r.hitTolerance?r.hitTolerance:0,this.lastFeature_=null,this.addEventListener(Object(l.b)(o.a.ACTIVE),this.handleActiveChanged_)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDownEvent=function(t){if(this.lastFeature_=this.featuresAtPixel_(t.pixel,t.map),!this.lastCoordinate_&&this.lastFeature_){this.startCoordinate_=t.coordinate,this.lastCoordinate_=t.coordinate,this.handleMoveEvent(t);var e=this.features_||new r.a([this.lastFeature_]);return this.dispatchEvent(new _(c,e,t.coordinate,this.startCoordinate_,t)),!0}return!1},e.prototype.handleUpEvent=function(t){if(this.lastCoordinate_){this.lastCoordinate_=null,this.handleMoveEvent(t);var e=this.features_||new r.a([this.lastFeature_]);return this.dispatchEvent(new _(p,e,t.coordinate,this.startCoordinate_,t)),this.startCoordinate_=null,!0}return!1},e.prototype.handleDragEvent=function(t){if(this.lastCoordinate_){var e=t.coordinate,a=e[0]-this.lastCoordinate_[0],i=e[1]-this.lastCoordinate_[1],o=this.features_||new r.a([this.lastFeature_]);o.forEach((function(t){var e=t.getGeometry();e.translate(a,i),t.setGeometry(e)})),this.lastCoordinate_=e,this.dispatchEvent(new _(u,o,e,this.startCoordinate_,t))}},e.prototype.handleMoveEvent=function(t){var e=t.map.getViewport();this.featuresAtPixel_(t.pixel,t.map)?(e.classList.remove(this.lastCoordinate_?"ol-grab":"ol-grabbing"),e.classList.add(this.lastCoordinate_?"ol-grabbing":"ol-grab")):e.classList.remove("ol-grab","ol-grabbing")},e.prototype.featuresAtPixel_=function(t,e){return e.forEachFeatureAtPixel(t,function(t,e){if(this.filter_(t,e)&&(!this.features_||Object(h.f)(this.features_.getArray(),t)))return t}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_})},e.prototype.getHitTolerance=function(){return this.hitTolerance_},e.prototype.setHitTolerance=function(t){this.hitTolerance_=t},e.prototype.setMap=function(e){var a=this.getMap();t.prototype.setMap.call(this,e),this.updateState_(a)},e.prototype.handleActiveChanged_=function(){this.updateState_(null)},e.prototype.updateState_=function(t){var e=this.getMap(),a=this.getActive();e&&a||(e=e||t)&&e.getViewport().classList.remove("ol-grab","ol-grabbing")},e}(n.b);e.a=d},385:function(t,e,a){"use strict";a.r(e);var r=a(30),i=a(3),o=a(9),n=a(10),s=a(2),l=a(98),h=a(227),c=a(51),u=a(5),p=a(19),_=new u.a({source:new o.b}),d=new p.a({source:new n.a({url:"data/geojson/countries.geojson",format:new r.a})}),f=new l.a,v=new h.a({features:f.getFeatures()});new i.a({interactions:Object(c.a)().extend([f,v]),layers:[_,d],target:"map",view:new s.a({center:[0,0],zoom:2})})}},[[385,0]]]);
//# sourceMappingURL=translate-features.js.map
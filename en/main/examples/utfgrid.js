"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2910],{1831:function(t,e,n){var i=n(1376),r=n(492),o=n(6166),s=n(2010),a=n(6566),l=n(6583),u=n(9626),c=n(3248),h=n(542),f=n(6923),d=n(776),p=n(5059),v=n(9352),y=n(5162),_=n(2810),g=n(2016),m=n(574);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function k(t,e,n){return e&&R(t.prototype,e),n&&R(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=j(t);if(e){var r=j(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return S(this,n)}}function S(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Z(t)}function Z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){O(n,t);var e=w(n);function n(t,i,r,o,s,a){var l;return E(this,n),(l=e.call(this,t,i)).src_=r,l.extent_=o,l.preemptive_=s,l.grid_=null,l.keys_=null,l.data_=null,l.jsonp_=a,l}return k(n,[{key:"getImage",value:function(){return null}},{key:"getData",value:function(t){if(!this.grid_||!this.keys_)return null;var e=(t[0]-this.extent_[0])/(this.extent_[2]-this.extent_[0]),n=(t[1]-this.extent_[1])/(this.extent_[3]-this.extent_[1]),i=this.grid_[Math.floor((1-n)*this.grid_.length)];if("string"!=typeof i)return null;var r=i.charCodeAt(Math.floor(e*i.length));r>=93&&r--,r>=35&&r--;var o=null;if((r-=32)in this.keys_){var s=this.keys_[r];o=this.data_&&s in this.data_?this.data_[s]:s}return o}},{key:"forDataAtCoordinate",value:function(t,e,n){this.state==h.Z.EMPTY&&!0===n?(this.state=h.Z.IDLE,(0,g.Vx)(this,a.Z.CHANGE,(function(n){e(this.getData(t))}),this),this.loadInternal_()):!0===n?setTimeout(function(){e(this.getData(t))}.bind(this),0):e(this.getData(t))}},{key:"getKey",value:function(){return this.src_}},{key:"handleError_",value:function(){this.state=h.Z.ERROR,this.changed()}},{key:"handleLoad_",value:function(t){this.grid_=t.grid,this.keys_=t.keys,this.data_=t.data,this.state=h.Z.LOADED,this.changed()}},{key:"loadInternal_",value:function(){if(this.state==h.Z.IDLE)if(this.state=h.Z.LOADING,this.jsonp_)(0,m.R6)(this.src_,this.handleLoad_.bind(this),this.handleError_.bind(this));else{var t=new XMLHttpRequest;t.addEventListener("load",this.onXHRLoad_.bind(this)),t.addEventListener("error",this.onXHRError_.bind(this)),t.open("GET",this.src_),t.send()}}},{key:"onXHRLoad_",value:function(t){var e=t.target;if(!e.status||e.status>=200&&e.status<300){var n;try{n=JSON.parse(e.responseText)}catch(t){return void this.handleError_()}this.handleLoad_(n)}else this.handleError_()}},{key:"onXHRError_",value:function(t){this.handleError_()}},{key:"load",value:function(){this.preemptive_?this.loadInternal_():this.setState(h.Z.EMPTY)}}]),n}(u.Z),L=function(t){O(n,t);var e=w(n);function n(t){var i;if(E(this,n),(i=e.call(this,{projection:(0,_.U2)("EPSG:3857"),state:l.Z.LOADING,zDirection:t.zDirection})).preemptive_=void 0===t.preemptive||t.preemptive,i.tileUrlFunction_=p.vU,i.template_=void 0,i.jsonp_=t.jsonp||!1,t.url)if(i.jsonp_)(0,m.R6)(t.url,i.handleTileJSONResponse.bind(Z(i)),i.handleTileJSONError.bind(Z(i)));else{var r=new XMLHttpRequest;r.addEventListener("load",i.onXHRLoad_.bind(Z(i))),r.addEventListener("error",i.onXHRError_.bind(Z(i))),r.open("GET",t.url),r.send()}else t.tileJSON?i.handleTileJSONResponse(t.tileJSON):(0,d.h)(!1,51);return i}return k(n,[{key:"onXHRLoad_",value:function(t){var e=t.target;if(!e.status||e.status>=200&&e.status<300){var n;try{n=JSON.parse(e.responseText)}catch(t){return void this.handleTileJSONError()}this.handleTileJSONResponse(n)}else this.handleTileJSONError()}},{key:"onXHRError_",value:function(t){this.handleTileJSONError()}},{key:"getTemplate",value:function(){return this.template_}},{key:"forDataAtCoordinateAndResolution",value:function(t,e,n,i){if(this.tileGrid){var r=this.tileGrid.getZForResolution(e,this.zDirection),o=this.tileGrid.getTileCoordForCoordAndZ(t,r);this.getTile(o[0],o[1],o[2],1,this.getProjection()).forDataAtCoordinate(t,n,i)}else!0===i?setTimeout((function(){n(null)}),0):n(null)}},{key:"handleTileJSONError",value:function(){this.setState(l.Z.ERROR)}},{key:"handleTileJSONResponse",value:function(t){var e,n=(0,_.U2)("EPSG:4326"),i=this.getProjection();if(void 0!==t.bounds){var r=(0,_.WO)(n,i);e=(0,f.Ne)(t.bounds,r)}var o=(0,v.Tl)(i),s=t.minzoom||0,a=t.maxzoom||22,u=(0,v.dl)({extent:o,maxZoom:a,minZoom:s});this.tileGrid=u,this.template_=t.template;var c=t.grids;if(c){if(this.tileUrlFunction_=(0,p.uR)(c,u),void 0!==t.attribution){var h=void 0!==e?e:o;this.setAttributions((function(e){return(0,f.kK)(h,e.extent)?[t.attribution]:null}))}this.setState(l.Z.READY)}else this.setState(l.Z.ERROR)}},{key:"getTile",value:function(t,e,n,i,r){var o=(0,y.lg)(t,e,n);if(this.tileCache.containsKey(o))return this.tileCache.get(o);var s=[t,e,n],a=this.getTileCoordForTileUrlFunction(s,r),l=this.tileUrlFunction_(a,i,r),u=new x(s,void 0!==l?h.Z.IDLE:h.Z.EMPTY,void 0!==l?l:"",this.tileGrid.getTileCoordExtent(s),this.preemptive_,this.jsonp_);return this.tileCache.set(o,u),u}},{key:"useTile",value:function(t,e,n){var i=(0,y.lg)(t,e,n);this.tileCache.containsKey(i)&&this.tileCache.get(i)}}]),n}(c.Z),D=n(4354),C="pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ",N=new s.Z({source:new o.Z({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+C})}),P=new L({url:"https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token="+C}),J=new s.Z({source:P}),I=new D.ZP({center:[0,0],zoom:1}),A=document.getElementById("map"),G=new i.Z({layers:[N,J],target:A,view:I}),H=document.getElementById("country-info"),M=document.getElementById("country-flag"),X=document.getElementById("country-name"),z=new r.Z({element:H,offset:[15,15],stopEvent:!1});G.addOverlay(z);var Y=function(t){var e=I.getResolution();P.forDataAtCoordinateAndResolution(t,e,(function(e){A.style.cursor=e?"pointer":"",e&&(M.src="data:image/png;base64,"+e.flag_png,X.innerHTML=e.admin),z.setPosition(e?t:void 0)}))};G.on("pointermove",(function(t){if(!t.dragging){var e=G.getEventCoordinate(t.originalEvent);Y(e)}})),G.on("click",(function(t){Y(t.coordinate)}))}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(1831)}]);
//# sourceMappingURL=utfgrid.js.map
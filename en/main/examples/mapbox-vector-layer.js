"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6423],{9191:function(e,t,r){var n=r(1376),o=r(1510),c=r(6566),i=r(8768),s=r(6583),a=r(4197),u=r(8083),l=r(7834);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&h(e.prototype,t),r&&h(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=g(e);if(t){var o=g(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b(this,r)}}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w="https://api.mapbox.com";function k(e){var t="mapbox://";return 0!==e.indexOf(t)?"":e.slice(t.length)}function R(e,t,r,n){var o=new URL(e,n),c=k(e);return c?"https://{a-d}.tiles.mapbox.com/v4/".concat(c,"/{z}/{x}/{y}.vector.pbf?access_token=").concat(t):t?(o.searchParams.set(r,t),decodeURI(o.href)):decodeURI(o.href)}var x=function(e){y(r,e);var t=m(r);function r(e){var n;return p(this,r),(n=t.call(this,c.Z.ERROR)).error=e,n}return d(r)}(o.ZP),T="vector",O=function(e){y(r,e);var t=m(r);function r(e){var n;p(this,r);var o=!("declutter"in e)||e.declutter,c=new u.Z({state:s.Z.LOADING,format:new i.Z});((n=t.call(this,{source:c,background:e.background,declutter:o,className:e.className,opacity:e.opacity,visible:e.visible,zIndex:e.zIndex,minResolution:e.minResolution,maxResolution:e.maxResolution,minZoom:e.minZoom,maxZoom:e.maxZoom,renderOrder:e.renderOrder,renderBuffer:e.renderBuffer,renderMode:e.renderMode,map:e.map,updateWhileAnimating:e.updateWhileAnimating,updateWhileInteracting:e.updateWhileInteracting,preload:e.preload,useInterimTilesOnError:e.useInterimTilesOnError,properties:e.properties})).setMaxResolutionFromTileGrid_=void 0===e.maxResolution&&void 0===e.minZoom,n.sourceId=e.source,n.layers=e.layers,e.accessToken)?n.accessToken=e.accessToken:new URL(e.styleUrl,location.href).searchParams.forEach((function(e,t){n.accessToken=e,n.accessTokenParam_=t}));return n.fetchStyle(e.styleUrl),n}return d(r,[{key:"fetchStyle",value:function(e){var t=this,r=function(e,t){var r=k(e);if(!r)return decodeURI(new URL(e,location.href).href);var n="styles/";if(0!==r.indexOf(n))throw new Error("unexpected style url: ".concat(e));var o=r.slice(n.length);return"".concat(w,"/styles/v1/").concat(o,"?&access_token=").concat(t)}(e,this.accessToken);fetch(r).then((function(e){if(!e.ok)throw new Error("unexpected response when fetching style: ".concat(e.status));return e.json()})).then((function(e){t.onStyleLoad(e,r.startsWith("data:")?location.href:r)})).catch((function(e){t.handleError(e)}))}},{key:"onStyleLoad",value:function(e,t){var r,n,o=this;if(this.layers){for(var c,i={},s=0;s<e.layers.length;++s){var a=e.layers[s];a.source&&(i[a.id]=a.source)}for(var u=0;u<this.layers.length;++u){var f=i[this.layers[u]];if(!f)return void this.handleError(new Error("could not find source for ".concat(this.layers[u])));if(c){if(c!==f)return void this.handleError(new Error("layers can only use a single source, found ".concat(c," and ").concat(f)))}else c=f}r=c,n=this.layers}else r=this.sourceId,n=r;n||(r=Object.keys(e.sources)[0],n=r),e.sprite&&(e.sprite=function(e,t,r){var n=k(e);if(!n)return decodeURI(new URL(e,r).href);var o="sprites/";if(0!==n.indexOf(o))throw new Error("unexpected sprites url: ".concat(e));var c=n.slice(o.length);return"".concat(w,"/styles/v1/").concat(c,"/sprite?access_token=").concat(t)}(e.sprite,this.accessToken,t)),e.glyphs&&(e.glyphs=function(e,t,r){var n=k(e);if(!n)return decodeURI(new URL(e,r).href);var o="fonts/";if(0!==n.indexOf(o))throw new Error("unexpected fonts url: ".concat(e));var c=n.slice(o.length);return"".concat(w,"/fonts/v1/").concat(c,"/0-255.pbf?access_token=").concat(t)}(e.glyphs,this.accessToken,t));var h=e.sources[r];if(h.type===T){var d=this.getSource();h.url&&0===h.url.indexOf("mapbox://")?(d.setUrl(R(h.url,this.accessToken,this.accessTokenParam_,t)),(0,l.bg)(this,e,n).then((function(){o.configureSource(d,e)})).catch((function(e){o.handleError(e)}))):(h.tiles&&(h.tiles=h.tiles.map((function(e){return R(e,o.accessToken,o.accessTokenParam_,t)}))),(0,l.KO)(h,h.url?R(h.url,this.accessToken,this.accessTokenParam_,t):void 0).then((function(t){(0,l.bg)(o,e,n).then((function(){o.configureSource(t,e)})).catch((function(r){o.configureSource(t,e),o.handleError(r)}))})))}else this.handleError(new Error("only works for vector sources, found ".concat(h.type)))}},{key:"configureSource",value:function(e,t){var r=this.getSource();if(e!==r&&(r.setAttributions(e.getAttributions()),r.setTileUrlFunction(e.getTileUrlFunction()),r.setTileLoadFunction(e.getTileLoadFunction()),r.tileGrid=e.tileGrid),void 0===this.getBackground()&&(0,l.h0)(this,t),this.setMaxResolutionFromTileGrid_){var n=r.getTileGrid();this.setMaxResolution(n.getResolution(n.getMinZoom()))}r.setState(s.Z.READY)}},{key:"handleError",value:function(e){this.dispatchEvent(new x(e)),this.getSource().setState(s.Z.ERROR)}}]),r}(a.Z),E=r(4354);new n.Z({target:"map",layers:[new O({styleUrl:"mapbox://styles/mapbox/bright-v9",accessToken:"pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2t0cGdwMHVnMGdlbzMxbDhwazBic2xrNSJ9.WbcTL9uj8JPAsnT9mgb7oQ"})],view:new E.ZP({center:[0,0],zoom:2})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(9191)}]);
//# sourceMappingURL=mapbox-vector-layer.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{419:function(t,i,e){"use strict";e.r(i);var r=e(2),o=e(3),a=e(71),n=e(144),s=e(7),p=e(10),h=e(1),u=e(12),c=e(99),d=e(108);var g=function(t){function i(i){t.call(this,{projection:i.projection,resolutions:i.resolutions}),this.crossOrigin_=void 0!==i.crossOrigin?i.crossOrigin:null,this.displayDpi_=void 0!==i.displayDpi?i.displayDpi:96,this.params_=i.params||{},this.url_=i.url,this.imageLoadFunction_=void 0!==i.imageLoadFunction?i.imageLoadFunction:c.b,this.hidpi_=void 0===i.hidpi||i.hidpi,this.metersPerUnit_=void 0!==i.metersPerUnit?i.metersPerUnit:1,this.ratio_=void 0!==i.ratio?i.ratio:1,this.useOverlay_=void 0!==i.useOverlay&&i.useOverlay,this.image_=null,this.renderedRevision_=0}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getParams=function(){return this.params_},i.prototype.getImageInternal=function(t,i,e,r){i=this.findNearestResolution(i),e=this.hidpi_?e:1;var o=this.image_;if(o&&this.renderedRevision_==this.getRevision()&&o.getResolution()==i&&o.getPixelRatio()==e&&Object(h.g)(o.getExtent(),t))return o;1!=this.ratio_&&(t=t.slice(),Object(h.J)(t,this.ratio_));var a=[Object(h.E)(t)/i*e,Object(h.A)(t)/i*e];if(void 0!==this.url_){var u=this.getUrl(this.url_,this.params_,t,a,r);o=new n.a(t,i,e,u,this.crossOrigin_,this.imageLoadFunction_),Object(s.a)(o,p.a.CHANGE,this.handleImageChange,this)}else o=null;return this.image_=o,this.renderedRevision_=this.getRevision(),o},i.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},i.prototype.updateParams=function(t){Object(u.a)(this.params_,t),this.changed()},i.prototype.getUrl=function(t,i,e,r,o){var a=function(t,i,e,r){var o=Object(h.E)(t),a=Object(h.A)(t),n=i[0],s=i[1],p=.0254/r;return s*o>n*a?o*e/(n*p):a*e/(s*p)}(e,r,this.metersPerUnit_,this.displayDpi_),n=Object(h.x)(e),s={OPERATION:this.useOverlay_?"GETDYNAMICMAPOVERLAYIMAGE":"GETMAPIMAGE",VERSION:"2.0.0",LOCALE:"en",CLIENTAGENT:"ol/source/ImageMapGuide source",CLIP:"1",SETDISPLAYDPI:this.displayDpi_,SETDISPLAYWIDTH:Math.round(r[0]),SETDISPLAYHEIGHT:Math.round(r[1]),SETVIEWSCALE:a,SETVIEWCENTERX:n[0],SETVIEWCENTERY:n[1]};return Object(u.a)(s,i),Object(d.a)(t,s)},i.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},i}(c.a);new r.a({layers:[new a.a({extent:[-87.86511444236592,43.66506556483793,-87.59539405949707,43.82385256443007],source:new g({projection:"EPSG:4326",url:"http://www.buoyshark.com/mapguide/mapagent/mapagent.fcgi?",useOverlay:!1,metersPerUnit:111319.4908,params:{MAPDEFINITION:"Library://Public/Samples/Sheboygan/Maps/Sheboygan.MapDefinition",FORMAT:"PNG",USERNAME:"OpenLayers",PASSWORD:"OpenLayers"},ratio:2})})],target:"map",view:new o.a({center:[-87.7302542509315,43.744459064634],projection:"EPSG:4326",zoom:12})})}},[[419,0]]]);
//# sourceMappingURL=mapguide-untiled.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1743],{36078:function(e,t,n){var a=n(91118),o=n(41376),r=n(54354),c=n(79847),l=n(95783),i=n(42010),s=n(41372),m=new o.Z({layers:[new i.Z({source:new c.Z}),new s.Z({source:new l.Z({url:"data/geojson/countries.geojson",format:new a.Z}),opacity:.5})],target:"map",view:new r.ZP({center:[0,0],zoom:2})});document.getElementById("export-png").addEventListener("click",(function(){m.once("rendercomplete",(function(){var e=document.createElement("canvas"),t=m.getSize();e.width=t[0],e.height=t[1];var n=e.getContext("2d");if(Array.prototype.forEach.call(document.querySelectorAll(".ol-layer canvas"),(function(e){if(e.width>0){var t=e.parentNode.style.opacity;n.globalAlpha=""===t?1:Number(t);var a=e.style.transform.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number);CanvasRenderingContext2D.prototype.setTransform.apply(n,a),n.drawImage(e,0,0)}})),navigator.msSaveBlob)navigator.msSaveBlob(e.msToBlob(),"map.png");else{var a=document.getElementById("image-download");a.href=e.toDataURL(),a.click()}})),m.renderSync()}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(36078)}]);
//# sourceMappingURL=export-map.js.map
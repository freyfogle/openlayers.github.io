"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[894],{20663:function(e,t,a){var n=a(41376),r=a(42010),i=a(54354),s=a(35975),o=a(49912),u=a(25738).MP>1,p=u?"bmaphidpi":"geolandbasemap",l=u?2:1,c=new n.Z({target:"map",view:new i.ZP({center:[1823849,6143760],zoom:11})});fetch("https://basemap.at/wmts/1.0.0/WMTSCapabilities.xml").then((function(e){return e.text()})).then((function(e){var t=(new o.Z).read(e),a=(0,s.B)(t,{layer:p,matrixSet:"google3857",style:"normal"});a.tilePixelRatio=l,a.attributions='Grundkarte: <a target="_blank" href="https://basemap.at/">basemap.at</a>',c.addLayer(new r.Z({source:new s.Z(a)}))}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(20663)}]);
//# sourceMappingURL=wmts-hidpi.js.map
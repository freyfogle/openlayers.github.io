(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{382:function(e,a,r){"use strict";r.r(a);var n,o,w=r(17),s=r(3),t=r(68),c=r(10),u=r(2),p=r(19),m=r(5),_=r(32),E=new p.a({source:new c.a}),S=new p.a({source:new c.a});new s.a({layers:[new m.a({source:new t.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),E],target:"map4326",view:new u.a({projection:"EPSG:4326",center:[0,0],zoom:2})}),new s.a({layers:[new m.a({source:new t.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:NE1_HR_LC_SR_W_DR",TILED:!0}})}),S],target:"map3857",view:new u.a({center:[0,0],zoom:2})});for(n=-180;n<180;n+=30)for(o=-90;o<90;o+=30){var v=Object(_.a)([n,o],8e5,64),R=v.clone().transform("EPSG:4326","EPSG:3857");E.getSource().addFeature(new w.a(v)),S.getSource().addFeature(new w.a(R))}}},[[382,0]]]);
//# sourceMappingURL=tissot.js.map
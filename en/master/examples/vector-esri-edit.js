(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{375:function(e,t,r){"use strict";r.r(t);var s=r(2),a=r(3),n=r(214),o=r(67),i=r(92),c=r(159),u=r(49),d=r(21),l=r(6),v=r(114),p=r(5),f=r(13),g=r(50),m=r(58),w="https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/",I=new n.a,y=new f.a({loader:function(e,t,r){var s=w+"0/query/?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry="+encodeURIComponent('{"xmin":'+e[0]+',"ymin":'+e[1]+',"xmax":'+e[2]+',"ymax":'+e[3]+',"spatialReference":{"wkid":102100}}')+"&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&outSR=102100";$.ajax({url:s,dataType:"jsonp",success:function(e){if(e.error)alert(e.error.message+"\n"+e.error.details.join("\n"));else{var t=I.readFeatures(e,{featureProjection:r});t.length>0&&y.addFeatures(t)}}})},strategy:Object(v.c)(Object(m.b)({tileSize:512}))}),j=new d.a({source:y}),R=new l.a({source:new g.a({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),O=new o.c({source:y,type:"Polygon"}),S=new i.a;S.setActive(!1);var F=S.getFeatures(),b=new c.a({features:F});b.setActive(!1);var h=new s.a({interactions:Object(u.a)().extend([O,S,b]),layers:[R,j],target:document.getElementById("map"),view:new a.a({center:Object(p.f)([-122.619,45.512]),zoom:12})}),M=document.getElementById("type");M.onchange=function(){O.setActive("DRAW"===M.value),S.setActive("MODIFY"===M.value),b.setActive("MODIFY"===M.value)};var P={};F.on("add",function(e){e.element.on("change",function(e){P[e.target.getId()]=!0})}),F.on("remove",function(e){var t=e.element,r=t.getId();if(!0===P[r]){var s="["+I.writeFeature(t,{featureProjection:h.getView().getProjection()})+"]";$.post("https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/0/updateFeatures",{f:"json",features:s}).done(function(e){var t=JSON.parse(e);if(t.updateResults&&t.updateResults.length>0)if(!0!==t.updateResults[0].success){var s=t.updateResults[0].error;alert(s.description+" ("+s.code+")")}else delete P[r]})}}),O.on("drawend",function(e){var t=e.feature,r="["+I.writeFeature(t,{featureProjection:h.getView().getProjection()})+"]";$.post("https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/PDX_Pedestrian_Districts/FeatureServer/0/addFeatures",{f:"json",features:r}).done(function(e){var r=JSON.parse(e);if(r.addResults&&r.addResults.length>0)if(!0===r.addResults[0].success)t.setId(r.addResults[0].objectId),y.clear();else{var s=r.addResults[0].error;alert(s.description+" ("+s.code+")")}})})}},[[375,0]]]);
//# sourceMappingURL=vector-esri-edit.js.map
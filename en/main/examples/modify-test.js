(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{333:function(e,t,o){"use strict";o.r(t);var n,r,i=o(30),a=o(3),l=o(19),c=o(10),y=o(2),w=o(48),g=o(15),s=o(11),u=o(21),d=o(98),p=o(144),m=o(51),P=(n={},r=new w.a({radius:5,fill:null,stroke:new g.a({color:"orange",width:2})}),n.Point=new s.c({image:r}),n.Polygon=new s.c({stroke:new g.a({color:"blue",width:3}),fill:new u.a({color:"rgba(0, 0, 255, 0.1)"})}),n.MultiLineString=new s.c({stroke:new g.a({color:"green",width:3})}),n.MultiPolygon=new s.c({stroke:new g.a({color:"yellow",width:1}),fill:new u.a({color:"rgba(255, 255, 0, 0.1)"})}),n.default=new s.c({stroke:new g.a({color:"red",width:3}),fill:new u.a({color:"rgba(255, 0, 0, 0.1)"}),image:r}),function(e){return n[e.getGeometry().getType()]||n.default}),f=new c.a({features:(new i.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[-2e6,0],[0,-2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[9e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6],[8e6,3e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6],[-5e6,-1e6]],[[-45e5,-5e5],[-35e5,-5e5],[-4e6,5e5],[-45e5,-5e5]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[-1e6,-75e4],[-1e6,75e4],[-5e5,0],[-1e6,-75e4]],[[1e6,-75e4],[15e5,0],[15e5,0],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6],[-5e6,6e6]]],[[[-3e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6],[-3e6,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6],[1e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-35e5],[3e6,-5e6],[1e6,-5e6]]]},{type:"Polygon",coordinates:[[[1e6,-5e6],[2e6,-65e5],[3e6,-5e6],[1e6,-5e6]]]}]}}]})}),h=new l.a({source:f,style:P}),k=function(){var e={};return e.Polygon=[new s.c({fill:new u.a({color:[255,255,255,.5]})}),new s.c({stroke:new g.a({color:[255,255,255,1],width:5})}),new s.c({stroke:new g.a({color:[0,153,255,1],width:3})})],e.MultiPolygon=e.Polygon,e.LineString=[new s.c({stroke:new g.a({color:[255,255,255,1],width:5})}),new s.c({stroke:new g.a({color:[0,153,255,1],width:3})})],e.MultiLineString=e.LineString,e.Point=[new s.c({image:new w.a({radius:7,fill:new u.a({color:[0,153,255,1]}),stroke:new g.a({color:[255,255,255,.75],width:1.5})}),zIndex:1e5})],e.MultiPoint=e.Point,e.GeometryCollection=e.Polygon.concat(e.Point),function(t){return e[t.getGeometry().getType()]}}(),F=new d.a({style:k}),S=new p.a({features:F.getFeatures(),style:k,insertVertexCondition:function(){return!F.getFeatures().getArray().every((function(e){return e.getGeometry().getType().match(/Polygon/)}))}});new a.a({interactions:Object(m.a)().extend([F,S]),layers:[h],target:"map",view:new y.a({center:[0,1e6],zoom:2,multiWorld:!0})})}},[[333,0]]]);
//# sourceMappingURL=modify-test.js.map
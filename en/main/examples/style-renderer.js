(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{373:function(e,t,a){"use strict";a.r(t);var o=a(30),r=a(3),n=a(19),s=a(10),c=a(2),w=a(21),i=a(15),l=a(11),g=a(1),p=a(50),u=new w.a,d=new i.a({color:"rgba(255,255,255,0.8)",width:2}),f=new l.c({renderer:function(e,t){var a=t.context,o=t.geometry.clone();o.setCoordinates(e);var r=o.getExtent(),n=Object(g.F)(r),s=Object(g.B)(r),c=t.feature.get("flag");if(!(!c||s<1||n<1)){a.save();var w=Object(p.c)(a,{pixelRatio:1});w.setFillStrokeStyle(u,d),w.drawGeometry(o),a.clip();var i=Object(g.w)(r),l=i[0],f=i[1];a.drawImage(c,l,f,n,s),a.restore()}}}),b=new n.a({source:new s.a({url:"https://openlayersbook.github.io/openlayers_book_samples/assets/data/countries.geojson",format:new o.a}),style:f});b.getSource().on("addfeature",(function(e){var t=e.feature,a=new Image;a.onload=function(){t.set("flag",a)},a.src="https://flagcdn.com/w320/"+t.get("iso_a2").toLowerCase()+".png"})),new r.a({layers:[b],target:"map",view:new c.a({center:[0,0],zoom:1})})}},[[373,0]]]);
//# sourceMappingURL=style-renderer.js.map
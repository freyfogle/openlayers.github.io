(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{257:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(2),o=n(158),i=n(51),p=n(183),c=n(30),s=n(184),u=n(97),w=n(151),g=n(5),l=n(228),f=n(27),m=n(10),d=new o.a({formatConstructors:[p.a,c.a,s.a,u.a,w.a]}),h=new a.a({interactions:Object(i.a)().extend([d]),layers:[new g.a({source:new f.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})})],target:"map",view:new r.a({center:[0,0],zoom:2})});d.on("addfeatures",(function(e){var t=new m.a({features:e.features});h.addLayer(new l.a({source:t})),h.getView().fit(t.getExtent())}));var y=function(e){var t=[];if(h.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){var n,a,r=[];for(n=0,a=t.length;n<a;++n)r.push(t[n].get("name"));document.getElementById("info").innerHTML=r.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};h.on("pointermove",(function(e){if(!e.dragging){var t=h.getEventPixel(e.originalEvent);y(t)}})),h.on("click",(function(e){y(e.pixel)}))}},[[257,0]]]);
//# sourceMappingURL=drag-and-drop-image-vector.js.map
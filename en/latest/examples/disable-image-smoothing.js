(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{255:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(5),i=n(2),o=n(27),c="get_your_own_D6rA4zTHduk6KOKTXzGB",l='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',p=new a.a({className:"ol-layer-dem",source:new o.a({attributions:l,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,maxZoom:10,crossOrigin:"",imageSmoothing:!1})}),s=new a.a({className:"ol-layer-imagery",source:new o.a({attributions:l,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+c,maxZoom:20,crossOrigin:""})}),u=new a.a({source:new o.a({attributions:l,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,maxZoom:10,crossOrigin:""})});s.on("prerender",(function(e){1===s.getOpacity()&&(e.context.fillStyle="white",e.context.fillRect(0,0,e.context.canvas.width,e.context.canvas.height))}));var m=document.getElementById("opacity"),y=document.getElementById("output");m.addEventListener("input",(function(){y.innerText=m.value,s.setOpacity(m.value/100)})),y.innerText=m.value,s.setOpacity(m.value/100);var g=new i.a({center:[6.893,45.8295],zoom:16,projection:"EPSG:4326"}),w=new r.a({target:"map1",layers:[p,s],view:g}),x=new r.a({target:"map2",layers:[u],view:g}),d=document.getElementById("info1"),h=document.getElementById("info2"),f=function(e){e.dragging||(w.forEachLayerAtPixel(e.pixel,(function(e,t){var n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;d.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===p}}),x.forEachLayerAtPixel(e.pixel,(function(e,t){var n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;h.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===u}}))};w.on("pointermove",f),x.on("pointermove",f)}},[[255,0]]]);
//# sourceMappingURL=disable-image-smoothing.js.map
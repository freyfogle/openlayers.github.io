"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1260],{24495:function(e,t,n){var r=n(41376),i=n(42010),a=n(54354),o=n(31998),c="get_your_own_D6rA4zTHduk6KOKTXzGB",l='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',p=new i.Z({className:"ol-layer-dem",source:new o.Z({attributions:l,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:12,crossOrigin:"",imageSmoothing:!1})}),s=new i.Z({className:"ol-layer-imagery",source:new o.Z({attributions:l,url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key="+c,maxZoom:20,crossOrigin:""})}),u=new i.Z({source:new o.Z({attributions:l,url:"https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key="+c,tileSize:512,maxZoom:12,crossOrigin:""})});s.on("prerender",(function(e){1===s.getOpacity()&&(e.context.fillStyle="white",e.context.fillRect(0,0,e.context.canvas.width,e.context.canvas.height))}));var m=document.getElementById("opacity"),g=document.getElementById("output"),y=function(){g.innerText=m.value,s.setOpacity(m.value/100)};m.addEventListener("input",y),m.addEventListener("change",y),g.innerText=m.value,s.setOpacity(m.value/100);var w=new a.ZP({center:[6.893,45.8295],zoom:16,projection:"EPSG:4326"}),f=new r.Z({target:"map1",layers:[p,s],view:w}),h=new r.Z({target:"map2",layers:[u],view:w}),x=document.getElementById("info1"),d=document.getElementById("info2"),v=function(e){e.dragging||(f.forEachLayerAtPixel(e.pixel,(function(e,t){var n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;x.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===p}}),h.forEachLayerAtPixel(e.pixel,(function(e,t){var n=.1*(256*t[0]*256+256*t[1]+t[2])-1e4;d.innerText=n.toFixed(1)}),{layerFilter:function(e){return e===u}}))};f.on("pointermove",v),h.on("pointermove",v)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(24495)}]);
//# sourceMappingURL=disable-image-smoothing.js.map
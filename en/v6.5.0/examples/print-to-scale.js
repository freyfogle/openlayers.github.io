(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{348:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(5),r=n(2),i=n(84),s=n(134),l=n(65),c=n(50),d=n(142),u=n(4),g=n(107);l.a.defs("EPSG:27700","+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"),Object(g.a)(l.a);var p=Object(u.j)("EPSG:27700");p.setExtent([0,0,7e5,13e5]);var m=new o.a;fetch("https://tiles.arcgis.com/tiles/qHLhLQrcvEnxjtPr/arcgis/rest/services/OS_Open_Raster/MapServer/WMTS").then((function(e){return e.text()})).then((function(e){var t=(new s.a).read(e),n=Object(i.b)(t,{layer:"OS_Open_Raster"});n.attributions="Contains OS data © Crown Copyright and database right "+(new Date).getFullYear(),n.crossOrigin="",n.projection=p,n.wrapX=!1,m.setSource(new i.a(n))}));var w=new a.a({layers:[m],controls:Object(c.a)({attributionOptions:{collapsible:!1}}),target:"map",view:new r.a({center:[373500,436500],projection:p,zoom:7})}),h=new d.a({bar:!0,text:!0,minWidth:125});w.addControl(h);var b={a0:[1189,841],a1:[841,594],a2:[594,420],a3:[420,297],a4:[297,210],a5:[210,148]},v={filter:function(e){var t=e.className||"";return-1===t.indexOf("ol-control")||t.indexOf("ol-scale")>-1||t.indexOf("ol-attribution")>-1&&t.indexOf("ol-uncollapsible")}},f=document.getElementById("export-pdf");f.addEventListener("click",(function(){f.disabled=!0,document.body.style.cursor="progress";var e=document.getElementById("format").value,t=document.getElementById("resolution").value,n=document.getElementById("scale").value,a=b[e],o=Math.round(a[0]*t/25.4),r=Math.round(a[1]*t/25.4),i=w.getView().getResolution(),s=n/Object(u.k)(w.getView().getProjection(),t/25.4,w.getView().getCenter());w.once("rendercomplete",(function(){v.width=o,v.height=r,domtoimage.toJpeg(w.getViewport(),v).then((function(t){var n=new jsPDF("landscape",void 0,e);n.addImage(t,"JPEG",0,0,a[0],a[1]),n.save("map.pdf"),h.setDpi(),w.getTargetElement().style.width="",w.getTargetElement().style.height="",w.updateSize(),w.getView().setResolution(i),f.disabled=!1,document.body.style.cursor="auto"}))})),h.setDpi(t),w.getTargetElement().style.width=o+"px",w.getTargetElement().style.height=r+"px",w.updateSize(),w.getView().setResolution(s)}),!1)}},[[348,0]]]);
//# sourceMappingURL=print-to-scale.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{374:function(e,t,n){"use strict";n.r(t);var a=n(71),o=n(3),r=n(2),i=n(20),s=new o.a({target:"map",view:new r.a({center:[0,0],extent:[-180,-90,180,90],projection:"EPSG:4326",zoom:2})}),c=document.createElement("div"),d=new XMLHttpRequest;d.open("GET","data/world.svg"),d.addEventListener("load",(function(){var e=d.responseXML.documentElement;c.ownerDocument.importNode(e),c.appendChild(e)})),d.send();var p=.140625;c.style.width="2560px",c.style.height="1280px",c.style.transformOrigin="top left",c.className="svg-layer",s.addLayer(new a.a({render:function(e){var t=p/e.viewState.resolution,n=e.viewState.center,a=e.size,o=Object(i.c)(a[0]/2,a[1]/2,t,t,e.viewState.rotation,-n[0]/p-1280,n[1]/p-640);return c.style.transform=o,c.style.opacity=this.getOpacity(),c}}))}},[[374,0]]]);
//# sourceMappingURL=svg-layer.js.map
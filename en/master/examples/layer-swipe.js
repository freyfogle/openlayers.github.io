(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{313:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(3),c=t(6),i=t(41),o=t(11),s=new c.a({source:new o.b}),w=new c.a({source:new i.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"})}),p=new a.a({layers:[s,w],target:"map",view:new r.a({center:[0,0],zoom:2})}),u=document.getElementById("swipe");w.on("prerender",function(e){var n=e.context,t=n.canvas.width*(u.value/100);n.save(),n.beginPath(),n.rect(t,0,n.canvas.width-t,n.canvas.height),n.clip()}),w.on("postrender",function(e){e.context.restore()}),u.addEventListener("input",function(){p.render()},!1)}},[[313,0]]]);
//# sourceMappingURL=layer-swipe.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{355:function(e,n,t){"use strict";t.r(n);var o,a=t(3),l=t(9),d=t(5),s=t(2),i=t(143),r=t(49),c=document.getElementById("units"),u=document.getElementById("type"),v=document.getElementById("steps"),m=document.getElementById("showScaleText"),w=document.getElementById("showScaleTextDiv"),y="scaleline",p=4,g=!0;function h(){return o="scaleline"===y?new i.a({units:c.value}):new i.a({units:c.value,bar:!0,steps:p,text:g,minWidth:140})}var E=new a.a({controls:Object(r.a)().extend([h()]),layers:[new d.a({source:new l.b})],target:"map",view:new s.a({center:[0,0],zoom:2})});c.addEventListener("change",(function(){o.setUnits(c.value)})),u.addEventListener("change",(function(){y=u.value,"scalebar"===u.value?(v.style.display="inline",w.style.display="inline",E.removeControl(o),E.addControl(h())):(v.style.display="none",w.style.display="none",E.removeControl(o),E.addControl(h()))})),v.addEventListener("change",(function(){p=parseInt(v.value,10),E.removeControl(o),E.addControl(h())})),m.addEventListener("change",(function(){g=m.checked,E.removeControl(o),E.addControl(h())}))}},[[355,0]]]);
//# sourceMappingURL=scale-line.js.map
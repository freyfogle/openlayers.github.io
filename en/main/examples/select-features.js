(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{361:function(e,n,t){"use strict";t.r(n);var o=t(30),a=t(3),c=t(9),l=t(98),s=t(10),i=t(2),r=t(5),u=t(19),d=t(34),w=new r.a({source:new c.b}),g=new u.a({source:new s.a({url:"data/geojson/countries.geojson",format:new o.a})}),p=new a.a({layers:[w,g],target:"map",view:new i.a({center:[0,0],zoom:2})}),m=null,b=new l.a,f=new l.a({condition:d.e}),v=new l.a({condition:d.l}),h=new l.a({condition:function(e){return Object(d.e)(e)&&Object(d.b)(e)}}),k=document.getElementById("type"),j=function(){null!==m&&p.removeInteraction(m);var e=k.value;null!==(m="singleclick"==e?b:"click"==e?f:"pointermove"==e?v:"altclick"==e?h:null)&&(p.addInteraction(m),m.on("select",(function(e){document.getElementById("status").innerHTML="&nbsp;"+e.target.getFeatures().getLength()+" selected features (last operation selected "+e.selected.length+" and deselected "+e.deselected.length+" features)"})))};k.onchange=j,j()}},[[361,0]]]);
//# sourceMappingURL=select-features.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{288:function(e,t,n){"use strict";n.r(t);var a=n(167),o=n(2),i=n(89),r=n(3),d=n(32),c=n(6),s=n(5),g=n(11),u=new r.a({center:Object(s.f)([5.8713,45.6452]),zoom:19}),l=new c.a({source:new g.b}),m=new o.a({layers:[l],target:"map",view:u}),p=document.getElementById("geolocation_marker"),h=new i.a({positioning:"center-center",element:p,stopEvent:!1});m.addOverlay(h);var v=new d.a([],"XYZM"),f=new a.a({projection:u.getProjection(),trackingOptions:{maximumAge:1e4,enableHighAccuracy:!0,timeout:6e5}}),w=500;f.on("change",function(){var e=f.getPosition(),t=f.getAccuracy(),n=f.getHeading()||0,a=f.getSpeed()||0;!function(e,t,n,a){var o=e[0],i=e[1],r=v.getCoordinates(),d=r[r.length-1],c=d&&d[2];if(c){var s=t-(c%(2*Math.PI)+2*Math.PI)%(2*Math.PI);if(Math.abs(s)>Math.PI){var g=s>=0?1:-1;s=-g*(2*Math.PI-Math.abs(s))}t=c+s}v.appendCoordinate([o,i,t,n]),v.setCoordinates(v.getCoordinates().slice(-20)),p.src=t&&a?"data/geolocation_marker_heading.png":"data/geolocation_marker.png"}(e,n,Date.now(),a);var o=v.getCoordinates(),i=o.length;i>=2&&(w=(o[i-1][3]-o[0][3])/(i-1));var r,d=["Position: "+e[0].toFixed(2)+", "+e[1].toFixed(2),"Accuracy: "+t,"Heading: "+Math.round((r=n,360*r/(2*Math.PI)))+"&deg;","Speed: "+(3.6*a).toFixed(1)+" km/h","Delta: "+Math.round(w)+"ms"].join("<br />");document.getElementById("info").innerHTML=d}),f.on("error",function(){alert("geolocation error")});var M=0;function b(){var e=Date.now()-1.5*w;e=Math.max(e,M),M=e;var t,n,a,o,i=v.getCoordinateAtM(e,!0);i&&(u.setCenter((t=i,n=-i[2],a=u.getResolution(),o=m.getSize()[1],[t[0]-Math.sin(n)*o*a*1/4,t[1]+Math.cos(n)*o*a*1/4])),u.setRotation(-i[2]),h.setPosition(i))}var y,I=document.getElementById("geolocate");I.addEventListener("click",function(){f.setTracking(!0),l.on("postrender",b),m.render(),C()},!1);var P=new XMLHttpRequest;P.open("GET","data/geolocation-orientation.json"),P.onload=function(){y=JSON.parse(P.responseText).data},P.send();var k=document.getElementById("simulate");function E(e){var t=e.coords;f.set("accuracy",t.accuracy),f.set("heading",t.heading*Math.PI*2/360);var n=Object(s.f)([t.longitude,t.latitude]);f.set("position",n),f.set("speed",t.speed),f.changed()}function C(){I.disabled="disabled",k.disabled="disabled"}k.addEventListener("click",function(){var e=y,t=e.shift();E(t);var n=t.timestamp;!function t(){var a=e.shift();if(a){var o=a.timestamp;E(a),window.setTimeout(function(){n=o,t()},(o-n)/.5)}}(),l.on("postrender",b),m.render(),C()},!1)}},[[288,0]]]);
//# sourceMappingURL=geolocation-orientation.js.map
(self.webpackChunk=self.webpackChunk||[]).push([[4205],{9610:function(e,n,r){"use strict";var a=r(1625),t=r(7340),o=r(7842),c=r(640),u=r(3534),i=new c.ZP({center:[0,0],zoom:2});new a.Z({layers:[new o.Z({source:new t.Z})],target:"map",view:i});function s(e){return document.getElementById(e)}var f=new GyroNorm;f.init().then((function(){f.start((function(e){var n=i.getCenter(),r=i.getResolution(),a=(0,u.Yr)(e.do.alpha),t=(0,u.Yr)(e.do.beta),o=(0,u.Yr)(e.do.gamma);s("alpha").innerText=a+" [rad]",s("beta").innerText=t+" [rad]",s("gamma").innerText=o+" [rad]",n[0]-=r*o*25,n[1]+=r*t*25,i.setCenter(n)}))}))}},function(e){"use strict";var n;n=9610,e(e.s=n)}]);
//# sourceMappingURL=device-orientation.js.map
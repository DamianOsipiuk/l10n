parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awRS":[function(require,module,exports) {
"use strict";function n(n){Object.keys(n).forEach(function(t){r[t]=r[t]||{},Object.keys(n[t]).forEach(function(e){return r[t][e]=n[t][e]})})}var t,e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n,n.tl=function(n,t){return o(n,t)||n},n.xl=function(n,t,e){return o(n+""+t,e)||t},n.nl=function(n,t,e,r){var u=o(n,r);return u&&u[0]&&u[1]?u[a(e)]:1===e?n:t},n.t=n.tl,n.x=n.xl,n.n=n.nl,n.setLocale=function(n,r){e=(t=n).substr(0,2)},document.addEventListener("l10n.locale.set",function(t){return n.setLocale(t.detail.locale)}),n.setLocale(navigator.language,!0),n.getLocale=function(){return t};var r={},u={},o=function(n,e){return r[e||t]?r[e||t][n]:void 0},a=function(n){return u[e]||(u[e]=new Function("n","return (".concat(c[e]||c._default,") | 0"))),u[e](n)},c={_default:"n!=1",ak:"n>1",am:"n>1",ar:"(n==0)?0:((n==1)?1:((n==2)?2:((n%100>=3&&n%100<=10)?3:((n%100>=11&&n%100<=99)?4:5))))",arn:"n>1",ay:"0",be:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",bo:"0",br:"n>1",bs:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",cs:"(n==1)?0:((n>=2&&n<=4)?1:2)",csb:"(n==1)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",cy:"(n==1)?0:((n==2)?1:((n!=8&&n!=11)?2:3))",dz:"0",fa:"0",fil:"n>1",fr:"n>1",ga:"(n==1)?0:((n==2)?1:((n<7)?2:((n<11)?3:4)))",gun:"n>1",hr:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",hy:"0",id:"0",ja:"0",jv:"n!=0",ka:"0",km:"0",ko:"0",kw:"(n==1)?0:((n==2)?1:((n==3)?2:3))",ky:"0",ln:"n>1",lo:"0",lt:"(n%10==1&&n%100!=11)?0:((n%10>=2&&(n%100<10||n%100>=20))?1:2)",lv:"(n%10==1&&n%100!=11)?0:((n!=0)?1:2)",mg:"n>1",mi:"n>1",mk:"(n==1||n%10==1)?0:1",ms:"0",mt:"(n==1)?0:((n==0||(n%100>1&&n%100<11))?1:((n%100>10&&n%100<20)?2:3))",nso:"n>1",pl:"(n==1)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",pt:"n>1",ro:"(n==1)?0:((n==0||(n%100>0&&n%100<20))?1:2)",ru:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",sk:"(n==1)?0:((n>=2&&n<=4)?1:2)",sl:"(n%100==1)?0:((n%100==2)?1:((n%100==3||n%100==4)?2:3))",sr:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",su:"0",th:"0",ti:"n>1",tr:"0",uk:"(n%10==1&&n%100!=11)?0:((n%10>=2&&n%10<=4&&(n%100<10||n%100>=20))?1:2)",uz:"0",vi:"0",wa:"n>1",zh:"0"};
},{}],"2HzX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var t=e(require("./l10n.js"));function e(t){return t&&t.__esModule?t:{default:t}}function u(){}u.fmt=function(t,e){return e.split("").map(function(e){return r[e]?r[e](t):e}).join("")},u.getMonths=function(){return[t.default.t("January"),t.default.t("February"),t.default.t("March"),t.default.t("April"),t.default.t("May"),t.default.t("June"),t.default.t("July"),t.default.t("August"),t.default.t("September"),t.default.t("October"),t.default.t("November"),t.default.t("December")]},u.getMonthsShort=function(){return[t.default.t("Jan"),t.default.t("Feb"),t.default.t("Mar"),t.default.t("Apr"),t.default.t("May"),t.default.t("Jun"),t.default.t("Jul"),t.default.t("Aug"),t.default.t("Sep"),t.default.t("Oct"),t.default.t("Nov"),t.default.t("Dec")]},u.getWeekdays=function(){return[t.default.t("Sunday"),t.default.t("Monday"),t.default.t("Tuesday"),t.default.t("Wednesday"),t.default.t("Thursday"),t.default.t("Friday"),t.default.t("Saturday")]},u.getWeekdaysShort=function(){return[t.default.t("Sun"),t.default.t("Mon"),t.default.t("Tue"),t.default.t("Wed"),t.default.t("Thu"),t.default.t("Fri"),t.default.t("Sat")]},u.getFirstDayOfWeek=function(){return parseInt(t.default.x("first day of week; 0: Sunday, 1: Monday","0"))};var n=function(t){return t.toString().padStart(2,"0")},r={j:function(t){return t.getDate().toString()},d:function(t){return n(r.j(t))},w:function(t){return t.getDay().toString()},D:function(t){return u.getWeekdaysShort()[t.getDay()]},l:function(t){return u.getWeekdays()[t.getDay()]},F:function(t){return u.getMonths()[t.getMonth()]},M:function(t){return u.getMonthsShort()[t.getMonth()]},n:function(t){return(t.getMonth()+1).toString()},m:function(t){return n(r.n(t))},Y:function(t){return t.getFullYear().toString()},y:function(t){return r.Y(t).substr(2)},H:function(t){return n(t.getHours())},i:function(t){return n(t.getMinutes())},s:function(t){return n(t.getSeconds())}};
},{"./l10n.js":"awRS"}]},{},["2HzX"], null)
//# sourceMappingURL=/date.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2010:function(t,n,r){var e={"./af.json":[2011,7],"./ar.json":[2012,8],"./az.json":[2013,9],"./be-BY.json":[2014,10],"./bg.json":[2015,11],"./bs.json":[2016,12],"./ca.json":[2017,13],"./cs.json":[2018,14],"./cy.json":[2019,15],"./da.json":[2020,16],"./de-AT.json":[2021,17],"./de-IN.json":[2022,18],"./de.json":[2023,19],"./el.json":[2024,20],"./en.json":[2025,21],"./eo.json":[2026,22],"./es.json":[2027,23],"./et.json":[2028,24],"./eu.json":[2029,25],"./fa.json":[2030,26],"./fi.json":[2031,27],"./fr.json":[2032,28],"./he.json":[2033,29],"./hr.json":[2034,30],"./hu.json":[2035,31],"./id.json":[2036,32],"./it.json":[2037,33],"./ja.json":[2038,34],"./km.json":[2039,35],"./ko.json":[2040,36],"./ku.json":[2041,37],"./lo.json":[2042,38],"./lt.json":[2043,39],"./lv.json":[2044,40],"./mn.json":[2045,41],"./ms-MY.json":[2046,42],"./nl.json":[2047,43],"./no.json":[2048,44],"./pl.json":[2049,45],"./pt-BR.json":[2050,46],"./pt.json":[2051,47],"./ro.json":[2052,48],"./ru.json":[2053,49],"./sk-SK.json":[2054,50],"./sl-SI.json":[2055,51],"./sq.json":[2056,52],"./sr.json":[2057,53],"./sv.json":[2058,54],"./ta-IN.json":[2059,55],"./th-TH.json":[2060,56],"./tr.json":[2061,57],"./ug.json":[2062,58],"./uk.json":[2063,59],"./vi-VN.json":[2064,60],"./zh-HK.json":[2065,61],"./zh-TW.json":[2066,62],"./zh.json":[2067,63]};function o(t){if(!r.o(e,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=e[t],o=n[0];return r.e(n[1]).then((function(){return r.t(o,3)}))}o.keys=function(){return Object.keys(e)},o.id=2010,t.exports=o},2072:function(t,n,r){"use strict";r.r(n),r.d(n,"loadResource",(function(){return s}));var e=r(757),o=r(724),i=r(1089);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",i=e.asyncIterator||"@@asyncIterator",u=e.toStringTag||"@@toStringTag";function s(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new k(e||[]);return i._invoke=function(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var u=h(t,n,r);if("normal"===u.type){if(e=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l={};function p(){}function y(){}function v(){}var d={};s(d,o,(function(){return this}));var j=Object.getPrototypeOf,m=j&&j(j(O([])));m&&m!==n&&r.call(m,o)&&(d=m);var g=v.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){var e;this._invoke=function(o,i){function c(){return new n((function(e,c){!function e(o,i,c,u){var s=h(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==a(l)&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}(o,i,e,c)}))}return e=e?e.then(c,c):c()}}function x(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method))return l;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var e=h(r,t.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,l;var o=e.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=v,s(g,"constructor",v),s(v,"constructor",y),y.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new b(f(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),s(g,u,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(r,e){return a.type="throw",a.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),l},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function u(t,n,r,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?n(u):Promise.resolve(u).then(e,o)}var s=function(){var t,n=(t=c().mark((function t(n){var e,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(2010)("./".concat(n,".json"));case 2:return e=t.sent,o=e.default.translation,t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(e,o){var i=t.apply(n,r);function a(t){u(i,e,o,a,c,"next",t)}function c(t){u(i,e,o,a,c,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();n.default=e.a.use({type:"backend",read:function(t,n,r){s(t).then((function(t){r(null,t)})).catch((function(t){r(t,null)}))}}).use(o.b).init({lng:Object(i.d)(Object(i.b)()||Object(i.a)()),fallbackLng:"en",react:{useSuspense:!1}})}}]);
//# sourceMappingURL=6.chunk.ffbdb.js.map
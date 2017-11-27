/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("src/main",[],e):"object"==typeof exports?exports["src/main"]=e():t["src/main"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.dojoWebpackJsonptest_app;window.dojoWebpackJsonptest_app=function(e,r,c){for(var i,u,a=0,f=[];a<e.length;a++)u=e[a],o[u]&&f.push(o[u][0]),o[u]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(n&&n(e,r,c);f.length;)f.shift()()};var r={},o={1:0};return e.e=function(t){function n(){u.onerror=u.onload=null,clearTimeout(a);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var c=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=c;var i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+{0:"7f9cc48e2029b083e4d7"}[t]+".bundle.js";var a=setTimeout(n,12e4);return u.onerror=u.onload=n,i.appendChild(u),c},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(3)},function(t,e,n){"use strict";var r="object"==typeof t&&"object"==typeof t.exports;Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),c=n(5);(function(){return o.__awaiter(this,void 0,void 0,function(){var t;return o.__generator(this,function(e){switch(e.label){case 0:return[4,!!r&&Promise.resolve().then(function(){return n(6)()})];case 1:return t=e.sent(),[2,t.default]}})})})().then(function(t){console.log(t()),console.log(c)})},function(t,e,n){"use strict";function r(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function o(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,c=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=c.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=c.return)&&n.call(c)}finally{if(o)throw o.error}}return i}function c(t){return this instanceof c?(this.v=t,this):new c(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.__extends=function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},n.d(e,"__assign",function(){return u}),e.__rest=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]]);return n},e.__decorate=function(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},e.__param=function(t,e){return function(n,r){e(n,r,t)}},e.__metadata=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},e.__awaiter=function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function u(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,u)}a((r=r.apply(t,e||[])).next())})},e.__generator=function(t,e){function n(n){return function(i){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,o&&(c=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(c=c.call(o,n[1])).done)return c;switch(o=0,c&&(n=[0,c.value]),n[0]){case 0:case 1:c=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,o=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(c=u.trys,!(c=c.length>0&&c[c.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!c||n[1]>c[0]&&n[1]<c[3])){u.label=n[1];break}if(6===n[0]&&u.label<c[1]){u.label=c[1],c=n;break}if(c&&u.label<c[2]){u.label=c[2],u.ops.push(n);break}c[2]&&u.ops.pop(),u.trys.pop();continue}n=e.call(t,u)}catch(t){n=[6,t],o=0}finally{r=c=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,i])}}var r,o,c,i,u={label:0,sent:function(){if(1&c[0])throw c[1];return c[1]},trys:[],ops:[]};return i={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i},e.__exportStar=function(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])},e.__values=r,e.__read=o,e.__spread=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},e.__await=c,e.__asyncGenerator=function(t,e,n){function r(t){l[t]&&(f[t]=function(e){return new Promise(function(n,r){s.push([t,e,n,r])>1||o(t,e)})})}function o(t,e){try{!function(t){t.value instanceof c?Promise.resolve(t.value.v).then(i,u):a(s[0][2],t)}(l[t](e))}catch(t){a(s[0][3],t)}}function i(t){o("next",t)}function u(t){o("throw",t)}function a(t,e){t(e),s.shift(),s.length&&o(s[0][0],s[0][1])}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var f,l=n.apply(t,e||[]),s=[];return f={},r("next"),r("throw"),r("return"),f[Symbol.asyncIterator]=function(){return this},f},e.__asyncDelegator=function(t){function e(e,o){t[e]&&(n[e]=function(n){return(r=!r)?{value:c(t[e](n)),done:"return"===e}:o?o(n):n})}var n,r;return n={},e("next"),e("throw",function(t){throw t}),e("return"),n[Symbol.iterator]=function(){return this},n},e.__asyncValues=function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator];return e?e.call(t):"function"==typeof r?r(t):t[Symbol.iterator]()},e.__makeTemplateObject=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,e){t.exports={" _key":"app",root:"YxttPEx-"}},function(t,e,n){t.exports=function(){return new Promise(function(t){n.e(0).then(function(e){t(n(7))}.bind(null,n)).catch(n.oe)})}}])}),"function"==typeof define&&define.amd&&require(["src/main"]);
//# sourceMappingURL=43b109ab8dee11c14d11.bundle.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[29,3,14,17],{2:function(t,e,n){n(17);var r=n(752);n(27),t.exports={data:function(){var t=this;return{errorCodeHandler:{default:{model_not_found:function(){return t.$router.replace("/error")},not_authenticated:function(){return t.$router.push("/pages/user/login")}},thread:{permission_denied:function(){return t.$router.replace("/error")}}}}},methods:{handleError:function(t){var e=arguments,n=this;return r(regeneratorRuntime.mark((function r(){var o,c,f,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.length>1&&void 0!==e[1]?e[1]:"",!((c=t.response.data.errors)&&Array.isArray(c)&&c.length>0&&c[0])){r.next=13;break}if(f=c[0].code,l=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,d=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:n.$t("core.".concat(l)),"site_closed"!==c[0].code){r.next=10;break}return r.next=9,n.siteClose(c);case 9:return r.abrupt("return",r.sent);case 10:n.$message.error(d),n.errorCodeHandler.default[f]&&n.errorCodeHandler.default[f](),o&&n.errorCodeHandler[o][f]&&n.errorCodeHandler[o][f]();case 13:case"end":return r.stop()}}),r)})))()},siteClose:function(t){var e=this;return r(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$store.dispatch("forum/setError",{code:t[0].code,detail:t[0].detail&&t[0].detail.length>0&&t[0].detail[0]});case 3:return n.next=5,e.$router.push("/pages/site/close");case 5:n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}}},285:function(module,exports,__webpack_require__){__webpack_require__(38),__webpack_require__(18),__webpack_require__(23),__webpack_require__(287);var _defineProperty=__webpack_require__(757);__webpack_require__(30),__webpack_require__(15),__webpack_require__(29),__webpack_require__(9),__webpack_require__(27),__webpack_require__(51),__webpack_require__(374);var _typeof2=__webpack_require__(758);function ownKeys(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _objectSpread(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(e){_defineProperty(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}__webpack_require__(50),__webpack_require__(21),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===_typeof2(t)&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){function r(){return Math.floor(1e8*Math.random())}var o=function(t){t=t?1:0;try{return location.search.substr(t)}catch(r){try{var e=document.URL,n=e.indexOf("?");if(n>=0)return e.substr(n+t)}catch(t){}}return""},a={};!function(){for(var t=o(!0).split("&"),e=0;e<t.length;e++){var n=/(.*?)=(.*)/.exec(t[e]);n&&(a[n[1]]=n[2])}}(),t.exports={href:function(){try{return location.href}catch(t){try{return document.URL}catch(t){}}return""},getQuery:function(t){var e=o();return t=t?1:0,(e=e?"".concat(e.replace(/&rand=[^&]+/,""),"&rand=").concat(r()):"?rand=".concat(r())).substr(t)},queryParam:function(t){return a[t]},queryMap:function(){return $.extend({},a)},parse2rgb:function(t){if(!t||"string"!=typeof t)return null;t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16),s:"#".concat(e[1]).concat(e[2]).concat(e[3])}:null},arrIndexOf:function(t,e){if("function"==typeof t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1}}},function(t,e,n){var r=function(){var t=1,e=/subsid=(\d+)/.exec(location.href);e&&(t=parseInt(e[1],10)+1);var n=function(e,n){var r=n||t;return e=/subsid=\d+/.test(e)?e.replace(/subsid=\d+/g,"subsid=".concat(r)):"".concat(e,"&subsid=").concat(r),n||t++,e};return n.get=function(){return t},n.bind=function(){var e=t++;return function(t){return n(t,e)}},n}();t.exports=r},function(t,e,n){var r=Object.prototype.hasOwnProperty,o=Object.prototype.toString,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,c=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===o.call(t)},s=function(t){if(!t||"[object Object]"!==o.call(t))return!1;var e,n=r.call(t,"constructor"),a=t.constructor&&t.constructor.prototype&&r.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!a)return!1;for(e in t);return void 0===e||r.call(t,e)},u=function(t,e){a&&"__proto__"===e.name?a(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},p=function(t,e){if("__proto__"===e){if(!r.call(t,e))return;if(i)return i(t,e).value}return t[e]};t.exports=function t(){var e,n,r,o,f,a,i=arguments[0],l=1,d=arguments.length,_=!1;for("boolean"==typeof i&&(_=i,i=arguments[1]||{},l=2),(null==i||"object"!==_typeof2(i)&&"function"!=typeof i)&&(i={});l<d;++l)if(null!=(e=arguments[l]))for(n in e)r=p(i,n),i!==(o=p(e,n))&&(_&&o&&(s(o)||(f=c(o)))?(f?(f=!1,a=r&&c(r)?r:[]):a=r&&s(r)?r:{},u(i,{name:n,newValue:t(_,a,o)})):void 0!==o&&u(i,{name:n,newValue:o}));return i}},function(t,e,n){var r,o,a=n(1),i={ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL:16,ERROR_TYPE_JSONP_PREHANDLE:17,ERROR_TYPE_FRAMEJS_CODE_ERROR:18,CALLBACK_NAME:19},c={ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL:"ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL",ERROR_TYPE_JSONP_PREHANDLE:"ERROR_TYPE_JSONP_PREHANDLE",ERROR_TYPE_FRAMEJS_CODE_ERROR:"ERROR_TYPE_FRAMEJS_CODE_ERROR",CALLBACK_NAME:"CALLBACK_NAME"},s=(r=document.referrer,o=location.href||document.URL,r=r.length>512?r.substr(0,512):r,o=o.length>1024?o.substr(0,1024):o,["referer=".concat(encodeURIComponent(r)),"href=".concat(encodeURIComponent(o))].join("&"));t.exports={type:i,send:function(t,e,n){try{(n=n||c[t]).length>1024&&n.substr(0,1024);var r=["type=".concat(t=i[t]),"appid=".concat(e),"reason=".concat(encodeURIComponent(n))],o="https://aq.qq.com/cn2/manage/mbtoken/cap_monitor?".concat(s,"&").concat(r.join("&"));(new Image).src=a(o)}catch(t){}},perfectStack:function(t){var e="";t&&t.stack&&(e=t.stack.replace(/\n/gi,"").split(/\bat\b/).join("\n").replace(/\?[^:]+/gi,""));try{var n=t.toString();e.indexOf(n)<0&&(e="".concat(n,"@").concat(e))}catch(t){}return e}}},,function(t,e,n){t.exports={add:function(t,e,n){t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on".concat(e),n):t["on".concat(e)]=n)},remove:function(t,e,n){t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on".concat(e),n):t["on".concat(e)]=null)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var i,n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="(".concat(i[2],") and (").concat(n,")")),e.push(i))}},e}},function(t,e){var n,r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},c=o((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),a=o((function(){return document.head||document.getElementsByTagName("head")[0]})),i=null,f=0;function s(t,e){for(var n=0;n<t.length;n++){var o=t[n],c=r[o.id];if(c){c.refs++;for(var i=0;i<c.parts.length;i++)c.parts[i](o.parts[i]);for(;i<o.parts.length;i++)c.parts.push(d(o.parts[i],e))}else{var f=[];for(i=0;i<o.parts.length;i++)f.push(d(o.parts[i],e));r[o.id]={id:o.id,refs:1,parts:f}}}}function u(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],c=o[0],f={css:o[1],media:o[2],sourceMap:o[3]};n[c]?n[c].parts.push(f):e.push(n[c]={id:c,parts:[f]})}return e}function p(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);t.apply(e,n.concat(r))}}function l(){var t=document.createElement("style"),e=a();return t.type="text/css",e.appendChild(t),t}function d(t,e){var n,r,o,s,u;if(e.singleton){var c=f++;n=i||(i=l()),r=p(h,null,n,c,!1),o=p(h,null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=document.createElement("link"),u=a(),s.rel="stylesheet",u.appendChild(s),r=p(y,null,n=s),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(),r=p(b,null,n),o=function(){n.parentNode.removeChild(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!==("undefined"==typeof document?"undefined":_typeof2(document)))throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=c());var n=u(t);return s(n,e),function(t){for(var o=[],a=0;a<n.length;a++){var c=n[a];(f=r[c.id]).refs--,o.push(f)}for(t&&s(u(t),e),a=0;a<o.length;a++){var f;if(0===(f=o[a]).refs){for(var l=0;l<f.parts.length;l++)f.parts[l]();delete r[f.id]}}}};var _=(n=[],function(t,e){var r=[];n[t]=e;for(var o=0;o<n.length;o++)n[o]&&r.push(n[o]);return r.join("\n")});function h(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var c=document.createTextNode(o),f=t.childNodes;f[e]&&t.removeChild(f[e]),f.length?t.insertBefore(c,f[e]):t.appendChild(c)}}function b(t,e){var n=e.css,r=e.media;if(e.sourceMap,r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function y(t,e){var n=e.css,r=(e.media,e.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */"));var o=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(module,exports,__webpack_require__){var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;function f(t){return t<10?"0".concat(t):t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'.concat(t.replace(rx_escapable,(function(t){var e=meta[t];return"string"==typeof e?e:"\\u".concat("0000".concat(t.charCodeAt(0).toString(16)).slice(-4))})),'"'):'"'.concat(t,'"')}function str(t,e){var n,r,o,a,i,c=gap,s=e[t];switch(s&&"object"===(void 0===s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(t)),"function"==typeof rep&&(s=rep.call(e,t,s)),void 0===s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(s)){for(a=s.length,n=0;n<a;n+=1)i[n]=str(n,s)||"null";return o=0===i.length?"[]":gap?"[\n".concat(gap).concat(i.join(",\n".concat(gap)),"\n").concat(c,"]"):"[".concat(i.join(","),"]"),gap=c,o}if(rep&&"object"===(void 0===rep?"undefined":_typeof(rep)))for(a=rep.length,n=0;n<a;n+=1)"string"==typeof rep[n]&&(o=str(r=rep[n],s))&&i.push(quote(r)+(gap?": ":":")+o);else for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(o=str(r,s))&&i.push(quote(r)+(gap?": ":":")+o);return o=0===i.length?"{}":gap?"{\n".concat(gap).concat(i.join(",\n".concat(gap)),"\n").concat(c,"}"):"{".concat(i.join(","),"}"),gap=c,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?"".concat(this.getUTCFullYear(),"-").concat(f(this.getUTCMonth()+1),"-").concat(f(this.getUTCDate()),"T").concat(f(this.getUTCHours()),":").concat(f(this.getUTCMinutes()),":").concat(f(this.getUTCSeconds()),"Z"):null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;r<n;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,e&&"function"!=typeof e&&("object"!==(void 0===e?"undefined":_typeof(e))||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){var j;function walk(t,e){var n,r,o=t[e];if(o&&"object"===(void 0===o?"undefined":_typeof(o)))for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(void 0!==(r=walk(o,n))?o[n]=r:delete o[n]);return reviver.call(t,e,o)}if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,(function(t){return"\\u".concat("0000".concat(t.charCodeAt(0).toString(16)).slice(-4))}))),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("(".concat(text,")")),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)},o="[CODE_VERIFY]",a="postMessage"in window;function i(t,e,n){var o="";if(arguments.length<2?o="[Msger] error 1":"object"!=(void 0===t?"undefined":r(t))?o="[Msger] error 2":"string"!=typeof e&&(o="[Msger] error 3"),o)throw new Error(o);this.target=t,this.name=e,this.domain=n||"*"}function c(t,e){this.targets={},this.name=t,this.listenFunc=[],"string"!=typeof(o=e||o)&&(o=o.toString()),this.initListen()}i.prototype.send=a?function(t){this.target.postMessage(t,this.domain)}:function(t){var e=window.navigator[o+this.name];if("function"!=typeof e)throw new Error("target callback function is not defined");e(t,window)},c.prototype.addTarget=function(t,e,n){var r=new i(t,e,n);this.targets[e]=r},c.prototype.initListen=function(){var t=this,e=function(e){"object"==(void 0===e?"undefined":r(e))&&e.data&&(e=e.data);for(var n=0;n<t.listenFunc.length;n++)t.listenFunc[n](e)};a?"addEventListener"in document?window.addEventListener("message",e,!1):"attachEvent"in document&&window.attachEvent("onmessage",e):window.navigator[o+this.name]=e},c.prototype.listen=function(t){this.listenFunc.push(t)},c.prototype.clear=function(){this.listenFunc=[]},c.prototype.send=function(t){var e,n=this.targets;for(e in n)n.hasOwnProperty(e)&&n[e].send(t)},window.TCapMsg=c,t.exports=c},,,,,,,function(module,exports,__webpack_require__){var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)};if(!0===window.__TencentCaptchaExists__)throw new Error("请勿多次引用腾讯验证码的接入js");window.__TencentCaptchaExists__=!0,__webpack_require__(17),__webpack_require__(8);var Messenger=__webpack_require__(9),domReady=__webpack_require__(19),btoa=window.btoa||__webpack_require__(20),extend=Object.assign||__webpack_require__(2),loadScript=__webpack_require__(21),eventListener=__webpack_require__(5),Executor=__webpack_require__(22),isIEVar=__webpack_require__(23),isElement=__webpack_require__(24),invisibleIframe=__webpack_require__(25),getScriptDomain=__webpack_require__(26),scriptDomain=getScriptDomain()||"",isWechatDevtools=navigator.userAgent&&/wechatdevtools/.test(navigator.userAgent),isWindows=/windows/i.test(navigator.userAgent),isMobile=!isWindows&&("ontouchstart"in window||"ontouchstart"in document.createElement("div")||isWechatDevtools),capDomain="https://ssl.captcha.qq.com";capDomain||(capDomain=scriptDomain);var grayscaleFrameJs="/tcaptcha-frame.2de3157b.js",grayscaleThreshold=1,grayscaleAppId=["123","2100049389","2100049390","2046103261","2070173641","2060075756"],grayscaleProb=Math.random(),needGrayscaleJs=void 0,jsLoadStatus="none",capError=__webpack_require__(3),preVerifyData={},capObj=void 0,initQueue=[],defaultOpt={type:"popup",pos:isIEVar(6)?"absolute":"fixed",lang:2052,showHeader:isMobile,needFeedBack:!0,themeColor:"",tcaptchaFlag:!0,gettype:"cap_union_prehandle",domain:capDomain,htdoc_path:capDomain},noop=function(){},isGrayscaleAppId=function(t){if(void 0!==needGrayscaleJs)return needGrayscaleJs;for(var e=0,n=grayscaleAppId.length;e<n;e++)if(t==grayscaleAppId[e])return needGrayscaleJs=!0;return needGrayscaleJs=!1},callbackWrap=function(t,e){return function(n){"object"===(void 0===n?"undefined":_typeof(n))&&(n=_objectSpread({bizState:t.options.bizState,appid:t.options.appid},n)),e&&e(n)}},executor=new Executor((function(){if(initQueue.length>0){for(var t=0;t<initQueue.length;t++)initQueue[t].show();initQueue.length=0}}),0),Captcha=function Captcha($btn,appid,_tcallback_,opts){var bizState=void 0;if(isElement($btn))if(appid&&"object"===(void 0===appid?"undefined":_typeof(appid)))opts=appid,appid=null,_tcallback_=null;else{if(appid=appid||$btn.getAttribute("data-appid"),!_tcallback_){var callbackName=$btn.getAttribute("data-cbfn");try{_tcallback_=eval("window.".concat(callbackName))}catch(t){throw new Error("Lost `callback`")}}bizState=$btn.getAttribute("data-biz-state")}else{if("string"!=typeof $btn||"function"!=typeof appid)throw new Error("Arguments error.");opts=_tcallback_,_tcallback_=appid,appid=$btn,$btn=null}opts=opts||{},opts.callback=_tcallback_||opts.callback,opts.start=opts.start||noop,opts.end=opts.end||noop;var readyCallback="function"==typeof opts.ready?opts.ready:noop;if(opts.ready=function(t){readyCallback.call(this,t)},opts.appid=appid||opts.appid,opts.bizState=bizState||opts.bizState,opts.fwidth=parseFloat(opts.fwidth)||0,opts.sdkOpts=opts.sdkOpts||null,opts.ele=$btn,this.options=opts,"function"!=typeof opts.callback)throw new Error("Lost `callback`");if(this.initOpts=_objectSpread(_objectSpread({},defaultOpt),opts),this.langFun(),$btn){var that=this;eventListener.add($btn,"click",(function(){that.show()}))}};Captcha.prototype={show:function(){if(executor.isDone)this.__show__();else{for(var t=0;t<initQueue.length;t++)if(initQueue[t]===this)return;initQueue.push(this)}},__show__:function(){var t=this.initOpts;if(void 0===window.AqSCode)return capError.send("ERROR_TYPE_FRAMEJS_CODE_ERROR",t.appid),alert("页面加载异常，请刷新页面重试");this.destroy();var e=[];for(var n in e.push("aid=".concat(t.appid)),e.push("accver=1"),e.push("showtype=".concat(t.type)),e.push("ua=".concat(encodeURIComponent(btoa((navigator.userAgent||"").replace(/[\u00ff-\uffff]+/g,""))))),e.push("noheader=".concat("false"=="".concat(t.showHeader)?"1":"0")),e.push("fb=".concat("false"=="".concat(t.needFeedBack)?"0":"1")),e.push("enableDarkMode=".concat(t.enableDarkMode?"1":"0")),t.sid&&e.push("sid=".concat(t.sid)),preVerifyData)preVerifyData[n]&&e.push("".concat(n,"=").concat(encodeURIComponent(preVerifyData[n])));t.uid="".concat(t.uin||""),needGrayscaleJs&&(e.push("grayscale=1"),t.grayscale=1),isMobile?(e.push("clientype=1"),t.clientype=1,t.forceLang&&e.push("lang=".concat(t.forceLang)),t.params="?".concat(e.join("&"))):(e.push("clientype=2"),t.clientype=2,needGrayscaleJs&&t.forceLang&&e.push("lang=".concat(t.forceLang)),t.params="?".concat(e.join("&")),t.s_type_suffix="?".concat(e.join("&")),t.src="".concat(capDomain,"/template/new_placeholder.html").concat(t.s_type_suffix),t.s_type="".concat(capDomain,"/cap_union_prehandle").concat(t.s_type_suffix),t.slide_src="".concat(capDomain,"/template/new_slide_placeholder.html").concat(t.s_type_suffix),t.fb="false"=="".concat(t.needFeedBack)?"0":"1"),(capObj=new AqSCode(t)).listen(callbackWrap(this,t.callback),callbackWrap(this,t.ready)),capObj.start(callbackWrap(t.start)),capObj.end(callbackWrap(t.end)),(needGrayscaleJs||isMobile)&&((t.top||t.left)&&capObj.initPos({top:t.top||void 0,left:t.left||void 0}),capObj.create())},langFun:function(){if(this.initOpts.forceLang){var t={"zh-cn":"2052","zh-hk":"1028",en:"1033"},e=this.initOpts.forceLang;t[e]?(this.initOpts.lang=t[e],this.initOpts.forceLang=t[e],this.initOpts.forcestyle=1):this.initOpts.forceLang=""}},destroy:function(){capObj&&capObj.destroy&&capObj.destroy()},refresh:function(){capObj&&capObj.refresh&&capObj.refresh()},getTicket:function(){if(capObj&&capObj.getTicket){var t=null;return callbackWrap(this,(function(e){t=e}))(capObj.getTicket()),t}return null}};var autoBindBtn=function(){var t=document.getElementById("TencentCaptcha");t&&new Captcha(t)};executor.exec((function(t){domReady((function(){try{autoBindBtn()}catch(t){}new Messenger("TCaptchaVerifyDetect").listen((function(t){if(t&&"object"===(void 0===t?"undefined":_typeof(t)))switch(t.type){case"preVerify":extend(preVerifyData,t.data)}}));try{invisibleIframe("".concat(capDomain,"/template/captcha-pre-verify.html"))}catch(t){}t()}))})),executor.exec((function(t){jsLoadStatus="loading",needGrayscaleJs=!0,loadScript(grayscaleFrameJs,capDomain,capDomain,(function(){return!!window.AqSCode}),(function(){jsLoadStatus="loaded",t()}),(function(){jsLoadStatus="none",capError.send("ERROR_TYPE_FRAMEJS_DOWNLOAD_FAIL"),t()}))})),window.TencentCaptcha=Captcha},function(t,e,n){var r=n(18);"string"==typeof r&&(r=[[t.i,r,""]]),n(7)(r,{}),r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"@keyframes animate_dots{0%{opacity:1}to{opacity:0}}@-webkit-keyframes animate_dots{0%{opacity:1}to{opacity:0}}.dot0,.dot1{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite}.dot1{animation-delay:.2s;-webkit-animation-delay:.2s}.dot2{animation:animate_dots .9s infinite;-moz-animation:animate_dots .9s infinite;-webkit-animation:animate_dots .9s infinite;-o-animation:animate_dots .9s infinite;animation-delay:.4s;-webkit-animation-delay:.4s}.dots_item{display:inline-block;margin-right:5px;width:10px;height:10px;border-radius:50%;background:#4886ff}.verify-icon{position:absolute;width:100%;margin-top:70px;text-align:center}.t-mask{width:100%;height:100%;position:fixed;_position:absolute;left:0;top:0;background:#000;opacity:.5;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50);z-index:2000000000}",""])},function(t,e,n){t.exports=function(t){var e,n=[],r=document,o=r.documentElement,a=o.doScroll,i=(a?/^loaded|^c/:/^loaded|c/).test(r.readyState);function c(t){for(i=1;t=n.shift();)t()}return r.addEventListener&&r.addEventListener("DOMContentLoaded",e=function(){r.removeEventListener("DOMContentLoaded",e,!1),c()},!1),a&&r.attachEvent("onreadystatechange",e=function(){/^c/.test(r.readyState)&&(r.detachEvent("onreadystatechange",e),c())}),t=a?function(e){self!=top?i?e():n.push(e):function(){try{o.doScroll("left")}catch(n){return setTimeout((function(){t(e)}),50)}e()}()}:function(t){i?t():n.push(t)}}()},function(t,e,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[r.charAt(n>>>18),r.charAt(n>>>12&63),e>=2?"=":r.charAt(n>>>6&63),e>=1?"=":r.charAt(63&n)].join("")};t.exports=function(t){return t.replace(/[\s\S]{1,3}/g,o)}},function(t,e,n){t.exports=function t(e,n,r,a,i,o,s){s=s||1;var u=!1,p=document.createElement("script");function c(t){u||(t&&"load"===t.type||/^(loaded|complete)$/.test(this.readyState))&&(a()?(u=!0,i&&i()):f())}p.type="text/javascript",p.async=!0,p.src=(s>1?r:n)+e,"onload"in p?p.onload=c:p.onreadystatechange=c;var f=function(){u||(u=!0,s>=2?o&&o():t(e,n,r,a,i,o,s+1))};p.onerror=f,document.getElementsByTagName("head").item(0).appendChild(p)}},function(t,e,n){var r=function(t,e){this.i=0,this.doneCallback=t,this.isDone=!1,this.timeout=e||0;var n=this;this.immediateExec=setTimeout((function(){n.doneCheck()}),0)};r.prototype={doneCheck:function(t,e){try{t&&t(e)}catch(t){}if(this.i--,this.i<=0)try{this.isDone=!0,this.doneCallback()}catch(t){}},exec:function(t,e,n){clearTimeout(this.immediateExec);var r=!1,o="",a=this;this.i++,this.i>0&&(this.isDone=!1);try{(o=t((function(t){r||(r=!0,setTimeout((function(){a.doneCheck(e,t)}),0))})))&&(r=!0,setTimeout((function(){a.doneCheck(e,o)}),0))}catch(t){}(n=n||this.timeout||0)>0&&setTimeout((function(){r||(r=!0,a.doneCheck(e,""))}),n)}},t.exports=r},function(t,e,n){t.exports=function(t){var e=document.createElement("b");return e.innerHTML="\x3c!--[if IE ".concat(t,"]><i></i><![endif]--\x3e"),e.getElementsByTagName("i")&&1===e.getElementsByTagName("i").length}},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return _typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":_typeof2(t)};t.exports=function(t){try{return t instanceof HTMLElement}catch(e){return"object"===(void 0===t?"undefined":r(t))&&1===t.nodeType&&"object"===r(t.style)&&"object"===r(t.ownerDocument)}}},function(t,e,n){t.exports=function(t){var e=document.createElement("iframe");return e.src=t,e.style.cssText="width: 0px; height: 0px; display: none;",(document.body||document.getElementsByTagName("body").item("0")).appendChild(e),e}},function(t,e,n){var r=n(0).href;t.exports=function(){try{var t=document.getElementById("CaptchaScript")||function(){for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++){var n=t[e];if(n.src.match(/captcha\.js/i))return n}}()||"";if(!t)return"";var e=t.src,n=function(t){var e=t.split("?");if(2!==e.length)return{};for(var n=e[1]&&e[1].split("&"),r={},o=0;o<n.length;o++){var c=n[o].split("=");c[1]&&(r[c[0]]=decodeURIComponent(c[1]))}return r}(e).domain;if(n)return n;var i=/(https?\:\/\/[0-9a-zA-Z-:\.]+)\//i,o=e.match(i)||r().match(i);return o?o[1]:""}catch(t){return""}}}])}}]);
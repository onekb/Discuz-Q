(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-site-search-theme"],{"04fe":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.readCategories=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/categories.v2",method:"GET",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"0a1d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={url:"",method:"GET",dataType:"json",timeout:3e4,isValidate:!1,validateRules:null}},"116c":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("99af"),r("4160"),r("159b");var n=a(r("2909")),i={data:function(){return{searchValue:"",loadingType:"",data:[],editThreadId:"",pageSize:20,pageNum:1}},onLoad:function(e){this.searchValue=e.value,this.getThemeList(e.value)},onShow:function(){this.uploadItem()},methods:{toTopic:function(e){this.editThreadId=e},searchInput:function(e){var t=this;this.searchValue=e.target.value,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.data=[],t.pageNum=1,t.getThemeList(e.target.value)}),250)},getThemeList:function(e,t){var r=this;this.loadingType="loading";var a={include:["user","user.groups","firstPost","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio","question","question.beUser","question.beUser.groups"],"filter[isDeleted]":"no","filter[isApproved]":1,"page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[q]":e};this.$store.dispatch("jv/get",["threads",{params:a}]).then((function(e){e._jv&&delete e._jv,r.loadingType=e.length===r.pageSize?"more":"nomore",r.data=t&&"clear"===t?e:[].concat((0,n.default)(r.data),(0,n.default)(e))}))},clearSearch:function(){this.searchValue="",this.pageNum=1,this.getThemeList("","clear")},uploadItem:function(){var e=this;if(this.editThreadId){var t=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId)),r=this.data;r.forEach((function(a,n){a._jv.id===e.editThreadId&&(e.editThreadId="",e.$set(r,n,t))}))}},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getThemeList(this.searchValue))}}};t.default=i},"185d":function(e,t,r){e.exports=r.p+"static/img/auth.51e40f27.svg"},"1cb5":function(e,t,r){e.exports=r.p+"static/img/yihuida.894c0306.svg"},"245f":function(e,t,r){"use strict";(function(t){var a=r("4ea4").default,n=a(r("6f74")),i=r("b95e"),s=a(r("4c82"));e.exports={mixins:[n.default,s.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&(e.forum=t)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.navigateTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){s.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};e()},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var r=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var a=uni.getStorageSync("token");""!==a&&(r.data.attributes.token=a),this.login(r,t)}},getLoginBindParams:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var a=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===r&&(a.data.attributes.rebind=1);var n=uni.getStorageSync("token");""!==n&&(a.data.attributes.token=n),this.login(a,t)}},login:function(e,r){var a=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(a.logind(),a.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==i.SITE_PAY&&uni.getStorage({key:"page",success:function(e){uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===i.SITE_PAY&&a.user&&!a.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:r,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var t=a.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:t,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var n=a.i18n.t("core.".concat(e.data.errors[0].code))||a.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:n,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,r("5a52").default)},"26d0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac1f"),r("5319"),r("a9e3");var a,n=r("b95e"),i=r("f61d"),s=n.DISCUZ_REQUEST_HOST.replace(/\/$/,""),u=(0,i.apiIns)({baseURL:s});u.http.interceptors.response.use((function(e){var t=e.data,r=t||{},n=r.Code,s=r.Message;switch(a=getApp(),Number(n)){case i.RESPONSE_CODE.UNAUTHORIZED:a.$store.dispatch("forum/setError",{code:"type_401",status:500});break;case i.RESPONSE_CODE.SUCCESS:break;default:uni.showToast({icon:"none",title:s})}return t}));var o=u;t.default=o},"2aed":function(e,t,r){(t=r("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.search[data-v-17189d95] {height:100vh;min-height:auto;overflow:hidden}.search[data-v-17189d95] .themeCount{padding-left:%?40?%;border-bottom:%?2?% solid var(--qui-BOR-ED);box-shadow:none}.search[data-v-17189d95] .search-item{padding-top:%?15?%;background-color:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.search[data-v-17189d95] .search-box{padding:%?30?% %?40?% 0;background:var(--qui-BG-2)}[data-v-17189d95] .themeCount .themeItem{padding-right:%?40?%;padding-left:0;margin:0;border:0;box-shadow:none}[data-v-17189d95] .themeCount .themeItem__footer{display:none}.search-item__theme[data-v-17189d95]{position:relative;padding-left:%?130?%}.scroll-y[data-v-17189d95]{max-height:calc(100vh - %?200?%)}.search-item__content[data-v-17189d95]{position:relative}.arrow[data-v-17189d95]{position:absolute;top:%?40?%;right:%?40?%}[data-v-17189d95] .themeCount .addFine{display:none}[data-v-17189d95] .themeCount .addAsk{display:none}',""]),e.exports=t},"2b2d":function(e,t,r){"use strict";var a=r("e708");r.n(a).a},"2df5":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.createPosts=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={data:{type:"object",fields:{relationships:{type:"object",fields:{thread:{type:"object",fields:{data:{type:"object",required:!0,fields:{id:{type:"number",required:!0}}}}}}},attributes:{type:"object",fields:{replyId:{type:"number"},content:{type:"string",required:!0},commentPostId:{type:"number"},commentUserId:{type:"number"}}}}}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/posts.v2",method:"POST",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",handleError(e.t0));case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"2e6a":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.readCommentList=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={page:{type:"number"},perPage:{type:"number"}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/posts.v2",method:"GET",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"35ab":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,r=0;r<e.length;r++)t+=e.charCodeAt(r);var a=function(e,t,r){var a,n,i,s=Math.floor(6*e),u=6*e-s,o=r*(1-t),c=r*(1-u*t),d=r*(1-(1-u)*t);switch(s%6){case 0:a=r,n=d,i=o;break;case 1:a=c,n=r,i=o;break;case 2:a=o,n=r,i=d;break;case 3:a=o,n=c,i=r;break;case 4:a=d,n=o,i=r;break;case 5:a=r,n=o,i=c}return{r:Math.floor(255*a),g:Math.floor(255*n),b:Math.floor(255*i)}}(t%360/360,.3,.9);return""+a.r.toString(16)+a.g.toString(16)+a.b.toString(16)},r("d3b7"),r("25f0")},"368d":function(e,t,r){e.exports=r.p+"static/img/msg-warning.f35ce51f.svg"},4661:function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.readStickList=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={categoryId:{type:"array"}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/sticks.v2",method:"GET",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},5458:function(e,t,r){"use strict";(function(e){var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.updatePosts=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={data:{type:"object",required:!0,fields:{attributes:{type:"object",required:!0,fields:{}}}},pid:{type:"number",required:!0}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function t(){var r,a,s,o,c,d,p,l,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=f.length>0&&void 0!==f[0]?f[0]:{},t.prev=1,a=r.params,s=void 0===a?{}:a,o=r.data,c=void 0===o?{}:o,d=(0,i.default)(r,["params","data"]),e.log("op",c),p=(0,n.default)((0,n.default)({url:"/api/posts.update.v2",method:"POST",params:s,data:c},d),{},{validateRules:u}),t.next=7,this.http(p);case 7:return l=t.sent,t.abrupt("return",l);case 11:return t.prev=11,t.t0=t.catch(1),t.abrupt("return",handleError(t.t0));case 14:case"end":return t.stop()}}),t,this,[[1,11]])})))).apply(this,arguments)}}).call(this,r("5a52").default)},"591d":function(e,t,r){"use strict";r.r(t);var a=r("f2c4"),n=r("dc6c");for(var i in n)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(i);r("2b2d");var s=r("f0c5"),u=Object(s.a)(n.default,a.b,a.c,!1,null,"17189d95",null,!1,a.a,void 0);t.default=u.exports},"5b5f":function(e,t,r){"use strict";var a=r("4ea4").default;r("fb6a"),r("99af"),r("ac1f"),r("5319"),r("d3b7"),r("25f0"),r("1276");var n=a(r("53ca")),i=r("b95e"),s=r("ce40");e.exports={methods:{wxShare:function(e){var t=this.getUrl(),r=this.$store.getters["jv/get"]("forums/1");r.passport&&!r.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(t)),{}]).then((function(a){var n=a.appId,i=a.nonceStr,u=a.signature,o=a.timestamp;s.config({debug:!1,appId:n,timestamp:o,nonceStr:i,signature:u,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),s.ready((function(){var a={title:e.title||"Discuz!Q",desc:e.desc||r.set_site.site_introduction,link:t,imgUrl:e.logo||r.set_site.site_favicon};s.updateAppMessageShareData(a),s.updateTimelineShareData(a)}))}))},h5Share:function(e){var t="";switch((0,n.default)(e)){case"undefined":t="Discuz!Q";break;case"string":t=e;break;default:t=e.title||"Discuz!Q"}var r=e.id?"?id=".concat(e.id):"",a="";if("pages/home/index"===e.url)a="".concat(i.DISCUZ_REQUEST_HOST);else{var s=e.url;e.url&&/^\/.*/.test(e.url)&&(s=e.url.slice(1)),a="".concat(i.DISCUZ_REQUEST_HOST).concat(s).concat(r)}var u=document.createElement("input");t=(t=(t=(t=t.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),t="".concat(t.substring(0,17)),u.value="".concat(t,"  ").concat(a),document.body.appendChild(u),u.select(),u.readOnly=!0,u.id="copyInp",document.execCommand("Copy"),u.setAttribute("onfocus",this.copyFocus(u)),u.className="oInput",u.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(e){e.blur(),document.body.removeChild(e)},getUrl:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent),t=window.location.href.split("#")[0];return e&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(t=window.entryUrl),t}}}},"5df8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAMAAADs1AnaAAAARVBMVEVHcEybBAT/UFD6UFD6UVH6UFD/UFD6UVH7UFCYAAD6UFD6UVH9oaH/////5ub7ZWX7ior/8PD+19f7e3v9tbX8kpL+yMjhHSfzAAAAC3RSTlMAjiCg630QwED2YJ4QxbcAAAEbSURBVDjLzdPbkoMgDAZgWrXaJSEcAu//qJugbuuI2rvuf5Fx9NNkAI2R3Oxpxmqe1+j2vEZiLpGaD9oZM30JQVouUjlGDpaLjAeIWVEAJwmo1dEO5SDII2VJQa15/yXC5KAUm7z3BaV4aswU2QF6y0GCWqCBSNrRxeAZIBSAHCUOtUa/QyVGdDEmeIUa6+RRpyC/pjW4jajvch1ah08N5OWprB87uy5JawmKg+iIsdTEFkpIsgSOOcxTcwvFonun7agmtVCg+RQwrmm1W47K6ZfsH6pbZAHpHHntFtsnk3WzvEg9VOl//FLfQON07/pz1E165zH0x6i7myVvbIteZMPeUD9sSM1Pv0H98DCtKFvQEakPxxkdi5r7L8zHODncoK0UAAAAAElFTkSuQmCC"},6670:function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.updateThreads=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={id:{type:"number",required:!0}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/threads/update.v2",method:"POST",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"6d75":function(e,t,r){"use strict";(function(e){var a;r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}));try{a={quiPage:r("29c4").default,quiIcon:r("895d").default,quiThreadItem:r("369a").default,quiLoadMore:r("51e5").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("qui-page",{staticClass:"search",attrs:{"data-qui-theme":e.theme}},[r("v-uni-view",{staticClass:"search-box"},[r("v-uni-view",{staticClass:"search-box__content"},[r("v-uni-view",{staticClass:"icon-content-search"},[r("qui-icon",{attrs:{name:"icon-search",size:"30",color:"#bbb"}})],1),r("v-uni-input",{staticClass:"search-box__content-input",attrs:{type:"text","placeholder-class":"input-placeholder",placeholder:e.i18n.t("search.searchkeywords"),value:e.searchValue},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.searchInput.apply(void 0,arguments)}}}),e.searchValue?r("v-uni-view",{staticClass:"search-box__content-delete",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[r("qui-icon",{attrs:{name:"icon-close1",size:"32",color:"#ccc"}})],1):e._e()],1),e.searchValue?r("v-uni-view",{staticClass:"search-box__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[r("v-uni-text",[e._v(e._s(e.i18n.t("search.cancel")))])],1):e._e()],1),r("v-uni-scroll-view",{staticClass:"scroll-y search-item",attrs:{"scroll-y":"true","scroll-with-animation":"true","show-scrollbar":"false"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.pullDown.apply(void 0,arguments)}}},[e._l(e.data,(function(t,a){return r("v-uni-view",{key:a,staticClass:"search-item__content"},[r("qui-thread-item",{attrs:{currentindex:a,thread:t},on:{toTopic:function(t){arguments[0]=t=e.$handleEvent(t),e.toTopic.apply(void 0,arguments)}}}),r("qui-icon",{staticClass:"arrow",attrs:{name:"icon-folding-r",size:"26",color:"#ddd"}})],1)})),e.loadingType?r("qui-load-more",{attrs:{status:e.loadingType,"show-icon":!1}}):e._e()],2)],1)},i=[]}).call(this,r("5a52").default)},"6f74":function(e,t,r){"use strict";var a=r("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),r=uni.getStorageSync(a.STORGE_GET_USER_TIME);if(e||(t-r)/1e3>60){var n={include:"groups,wechat"},i=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:i}}),this.$store.dispatch("jv/get",["users/".concat(i),{params:n}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(a.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"790f":function(e,t,r){"use strict";(function(e){var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.requestParamsValidator=o,t.validateParameter=void 0,r("96cf");var n=a(r("5530")),i=a(r("1da1"));r("d3b7");var s=a(r("2a95")),u=a(r("2d83"));function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){new s.default(r).validate(t,{firstFields:!0},(function(t,r){var i=t?"fail":"success",s=t?t[0].message:"";"success"===i?a({status:i,message:s,fieldsData:r}):(e.warn("The current parameter validation failed."),n((0,u.default)("Parameter Validator Error",{status:i,message:s,fieldsData:r,errors:t},null)))}))}))}var c=function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,a,i,s,u,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.params,a=void 0===r?{}:r,i=t.data,s=void 0===i?{}:i,u=t.isValidate,c=t.validateRules,!u||!c){e.next=5;break}return d=(0,n.default)((0,n.default)({},a),s),e.next=5,o(d,c,t);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.validateParameter=c}).call(this,r("5a52").default)},"79fc":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.readThreadList=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={page:{type:"number"},perPage:{type:"number"},filter:{type:"object",required:!0,fields:{sticky:{type:"number",required:!0},essence:{type:"number",required:!0},types:{type:"array"},categoryids:{type:"array"},sort:{type:"number"},attention:{type:"number"}}}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/threads.v2",method:"GET",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"7c26":function(e,t,r){"use strict";(function(e){var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LocalBridge=void 0,r("99af"),r("d3b7"),r("25f0"),r("e25e");var n=a(r("5530")),i=a(r("d4ec")),s=a(r("bee2")),u=null;var o="undefined"!=typeof window;function c(){var e="__dzqtest_ls__";try{return!!u&&(u.setItem(e,e),u.getItem(e),!0)}catch(e){return!1}}u=o?window.localStorage:{};var d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.default)(this,t);var r="__dzqls-",a=0;this.options=(0,n.default)({prefix:r,expires:a},e),this.expiresPrefix="expires".concat(this.options.prefix)}return(0,s.default)(t,[{key:"getKey",value:function(e){var t=this.options.prefix;return"".concat(t).concat(e)}},{key:"getExpiresKey",value:function(e){return"".concat(this.expiresPrefix).concat(e)}},{key:"getCurrentTime",value:function(){return Math.floor((new Date).getTime()/1e3)}},{key:"getExpiresValue",value:function(e){return(this.getCurrentTime()+e).toString(10)}},{key:"shiftItem",value:function(e){if(!c())return!1;var t=u.removeItem;t(this.getKey(e)),t(this.getExpiresKey(e))}},{key:"isExpired",value:function(t){if(c()){var r=u.getItem(this.getExpiresKey(t));if(r){var a=parseInt(r,10),n=this.getCurrentTime();if(e.log(a,n),n>a)return this.shiftItem(t),!0}}}},{key:"set",value:function(e,t,r){var a=this.getKey(e),n=t;if(!c())return!1;try{n=JSON.stringify(t)}catch(e){return!1}var i=u,s=i.setItem,o=i.removeItem;try{s(a,n);var d=this.getExpiresKey(e);r?s(d,this.getExpiresValue(r)):o(d)}catch(e){return!1}return!0}},{key:"get",value:function(e){if(!c())return null;if(this.isExpired(e))return null;var t=u.getItem(this.getKey(e));try{return JSON.parse(t)}catch(e){return t}}},{key:"remove",value:function(e){c()&&this.shiftItem(e)}},{key:"clear",value:function(){c()&&u.clear()}}]),t}();t.LocalBridge=d;var p=d;t.default=p}).call(this,r("5a52").default)},"7f23":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.createThread=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={categoriesId:{type:"number",required:!0},content:{type:"string",required:!0},type:{type:"number",required:!0},isAnonymous:{type:"number"},price:{type:"number"},attachmentPrice:{type:"number"},freeWords:{type:"number"},location:{type:"string"},longitude:{type:"number"},latitude:{type:"number"},address:{type:"string"},id:{type:"string"},isDraft:{type:"number"},isRedPacket:{type:"number"},isOldDraft:{type:"number"},title:{type:"string"},postGoodsId:{type:"number"},redPacket:{type:"object",fields:{condition:{type:"number"},likenum:{type:"number"},money:{type:"number"},number:{type:"number"},rule:{type:"number"},orderId:{type:"string"},orderPrice:{type:"number"}}},attachments:{type:"array",defaultField:{type:"object",fields:{id:{type:"number"},type:{type:"string"}}}},question:{type:"object",fields:{type:{type:"number"},price:{type:"number"},orderId:{type:"string"},isOnlooker:{type:"boolean"},beUserId:{type:"number"},expiredAt:{type:"date"}}}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/thread.v2",method:"POST",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},"7fe0":function(e,t,r){"use strict";(function(e){var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("5530")),i=a(r("d4ec")),s=a(r("bee2")),u=a(r("98ef")),o=a(r("7c26")),c=r("790f"),d=a(r("4328")),p=new o.default({prefix:""}),l=function(e){var t=p.get("access_token");return t&&(e.headers.authorization="Bearer ".concat(t)),e},f=function(e){return{data:e.data,status:e.status}},h=function(){function t(e){(0,i.default)(this,t),this.axiosConfig=e,this.createHttp()}return(0,s.default)(t,[{key:"createHttp",value:function(){this.http=u.default.create((0,n.default)({isValidate:!0,withCredentials:!0,paramsSerializer:function(e){return d.default.stringify(e,{arrayFormat:"indices",encode:!1})}},this.axiosConfig)),this.setHttpRequestInterceptors(),this.setHttpResponseInterceptors()}},{key:"setHttpRequestInterceptors",value:function(){this.http.interceptors.request.use(l),this.http.interceptors.request.use(c.validateParameter,null,{synchronous:!0})}},{key:"setHttpResponseInterceptors",value:function(){this.http.interceptors.response.use(f,(function(t){return e.log(t),t}))}}]),t}();t.default=h}).call(this,r("5a52").default)},"864e":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("ac1f"),r("5319"),r("99af");var n=a(r("9558")),i={topic:function(e){var t=(0,n.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,r){var a="/pages/topic/content?id=".concat(t);return'<a href="'.concat(a,'" class="content-topic">').concat(r,"</a> ")}))}))},usermention:function(e){var t=(0,n.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,r){var a="/pages/profile/index?userId=".concat(t);return'<a href="'.concat(a,'" class="content-member">').concat(r,"</a> ")}))}))},attachment:function(e,t){return e&&e.replace(/\[attach\](.*?)\[\/attach\]/g,(function(e,r){var a=t.$store.getters["jv/get"]("attachments/".concat(r));return a.url&&(e='<a href="'.concat(a.url,'" class="content-attachment">').concat(a.attachment,"</a>")),e}))}};var s={parse:function(e,t){if(e){for(var r in i)e=i[r](e,t);return e}}};t.default=s},"98ef":function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Request=void 0;var n=a(r("5530")),i=a(r("bc3a")),s=a(r("0a1d")),u=i.default;t.Request=u,u.defaults=(0,n.default)((0,n.default)((0,n.default)({},u.defaults),s.default),{},{validateRules:null});var o=u;t.default=o},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},cadb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.timestamp2day=t.time2DateAndHM=t.time2MinuteOrHour=void 0,r("e25e"),r("ac1f"),r("5319"),r("99af");t.time2MinuteOrHour=function(e){var t=new Date-new Date(e);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60),"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60),"小时前"):e.replace(/T/," ").replace(/Z/,"").substring(0,16)};t.time2DateAndHM=function(e){var t=e.replace(/T/," ").replace(/Z/,"");return"".concat(t.substring(0,10)," ").concat(t.substring(11,16))};t.timestamp2day=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)}},d1de:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RESPONSE_CODE=void 0;t.RESPONSE_CODE={SUCCESS:0,JUMP_TO_LOGIN:-3001,JUMP_TO_REGISTER:-3002,JUMP_TO_AUDIT:-3003,JUMP_TO_HOME_INDEX:-3004,INVALID_PARAMETER:-4001,UNAUTHORIZED:-4002,RESOURCE_EXIST:-4003,RESOURCE_NOT_FOUND:-4004,RESOURCE_IN_USE:-4005,NET_ERROR:-5001,INTERNAL_ERROR:-5002,DB_ERROR:-5003,EXTERNAL_API_ERROR:-5004,UNKNOWN_ERROR:-6001,DEBUG_ERROR:-6002}},dc6c:function(e,t,r){"use strict";r.r(t);var a=r("116c"),n=r.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return a[e]}))}(i);t.default=n.a},e047:function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.readThreadDetail=function(){return o.apply(this,arguments)},r("96cf");var n=a(r("5530")),i=a(r("15fd")),s=a(r("1da1")),u={pid:{type:"number",required:!0},stopViewCount:{type:"boolean"}};function o(){return(o=(0,s.default)(regeneratorRuntime.mark((function e(){var t,r,a,s,o,c,d,p,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},e.prev=1,r=t.params,a=void 0===r?{}:r,s=t.data,o=void 0===s?{}:s,c=(0,i.default)(t,["params","data"]),d=(0,n.default)((0,n.default)({url:"/api/threads.detail.v2",method:"GET",params:a,data:o},c),{},{validateRules:u}),e.next=6,this.http(d);case 6:return p=e.sent,e.abrupt("return",p);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,10]])})))).apply(this,arguments)}},e708:function(e,t,r){var a=r("2aed");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r("4f06").default)("160a9150",a,!0,{sourceMap:!1,shadowMode:!1})},e972:function(e,t,r){e.exports=r.p+"static/img/msg-404.3ba2611f.svg"},f2c4:function(e,t,r){"use strict";var a=r("6d75");r.d(t,"a",(function(){return a.a})),r.d(t,"b",(function(){return a.b})),r.d(t,"c",(function(){return a.c}))},f61d:function(e,t,r){"use strict";var a=r("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RESPONSE_CODE",{enumerable:!0,get:function(){return i.RESPONSE_CODE}}),t.apiIns=void 0;var n=a(r("7fe0")),i=r("d1de"),s=r("79fc"),u=r("e047"),o=r("04fe"),c=r("2e6a"),d=r("4661"),p=r("7f23"),l=r("6670"),f=r("5458"),h=r("2df5");t.apiIns=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new n.default(e);return t.readThreadList=s.readThreadList,t.readThreadDetail=u.readThreadDetail,t.readCategories=o.readCategories,t.readCommentList=c.readCommentList,t.readStickList=d.readStickList,t.createThread=p.createThread,t.updateThreads=l.updateThreads,t.updatePosts=f.updatePosts,t.createPosts=h.createPosts,t}}}]);
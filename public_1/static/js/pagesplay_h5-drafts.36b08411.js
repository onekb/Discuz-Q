(window.webpackJsonp=window.webpackJsonp||[]).push([["pagesplay_h5-drafts"],{"15d0":function(t,e,n){"use strict";n.r(e);var a=n("d93e"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e.default=i.a},"185d":function(t,e,n){t.exports=n.p+"static/img/auth.51e40f27.svg"},"1bd1":function(t,e,n){"use strict";(function(t){var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));try{a={quiPage:n("29c4").default,quiCellItem:n("e0ca").default,quiThreadItem:n("369a").default,quiIcon:n("895d").default,uniPopup:n("1c89").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("qui-page",{staticClass:"favorite",attrs:{"data-qui-theme":t.theme}},[n("v-uni-scroll-view",{staticClass:"scroll-y",attrs:{"scroll-y":"true","scroll-with-animation":"true","show-scrollbar":"false"},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.pullDown.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"favorite-head"},[n("qui-cell-item",{attrs:{title:""+t.totalData+t.i18n.t("profile.item")+"草稿",border:!1}})],1),n("v-uni-view",{staticClass:"favorite-content"},t._l(t.data,(function(e,a){return n("v-uni-view",{key:a,staticClass:"favorite-content__item"},[n("qui-thread-item",{attrs:{bottomicon:!1,currentindex:a,thread:e},on:{toTopic:function(e){arguments[0]=e=t.$handleEvent(e),t.toTopic.apply(void 0,arguments)},handleClickShare:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickShare.apply(void 0,arguments)}}}),n("qui-icon",{attrs:{name:"icon-link",size:"27",color:"#aaa"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toCompile(e)}}}),n("v-uni-text",{staticClass:"icon-links",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toCompile(e)}}},[t._v("编辑")]),n("qui-icon",{attrs:{name:"icon-delete",size:"27",color:"#aaa"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemDelete(e._jv.id,e.isFavorite,a)}}}),n("v-uni-text",{staticClass:"icon-deletes",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.itemDelete(e._jv.id,e.isFavorite,a)}}},[t._v("删除")])],1)})),1)],1),n("uni-popup",{ref:"popTips",attrs:{type:"center"}},[n("uni-popup-dialog",{attrs:{type:"warn","before-close":!0,content:t.i18n.t("确定删除这条草稿吗？")},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCancel.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOk.apply(void 0,arguments)}}})],1)],1)},o=[]}).call(this,n("5a52").default)},"1cb5":function(t,e,n){t.exports=n.p+"static/img/yihuida.894c0306.svg"},"245f":function(t,e,n){"use strict";(function(e){var a=n("4ea4"),i=a(n("6f74")),o=n("b95e"),r=a(n("4c82"));t.exports={mixins:[i.default,r.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&(t.forum=e)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(n){if("login:ok"===n.errMsg){var a=n.code;uni.getUserInfo({success:function(e){var n={data:{attributes:{js_code:a,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",n)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var a=uni.getStorageSync("token");""!==a&&(n.data.attributes.token=a),this.login(n,e)}},getLoginBindParams:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var a=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===n&&(a.data.attributes.rebind=1);var i=uni.getStorageSync("token");""!==i&&(a.data.attributes.token=i),this.login(a,e)}},login:function(t,n){var a=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(a.logind(),a.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==o.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===o.SITE_PAY&&a.user&&!a.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:n,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var i=a.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:i,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var r=a.i18n.t("core.".concat(t.data.errors[0].code))||a.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:r,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,n("5a52").default)},"250f":function(t,e,n){"use strict";var a=n("1bd1");n.d(e,"a",(function(){return a.a})),n.d(e,"b",(function(){return a.b})),n.d(e,"c",(function(){return a.c}))},3313:function(t,e,n){"use strict";var a=n("948c");n.n(a).a},"35ab":function(t,e,n){"use strict";n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,n=0;n<t.length;n++)e+=t.charCodeAt(n);var a=function(t,e,n){var a,i,o,r=Math.floor(6*t),s=6*t-r,u=n*(1-e),c=n*(1-s*e),d=n*(1-(1-s)*e);switch(r%6){case 0:a=n,i=d,o=u;break;case 1:a=c,i=n,o=u;break;case 2:a=u,i=n,o=d;break;case 3:a=u,i=c,o=n;break;case 4:a=d,i=u,o=n;break;case 5:a=n,i=u,o=c}return{r:Math.floor(255*a),g:Math.floor(255*i),b:Math.floor(255*o)}}(e%360/360,.3,.9);return""+a.r.toString(16)+a.g.toString(16)+a.b.toString(16)}},"368d":function(t,e,n){t.exports=n.p+"static/img/msg-warning.f35ce51f.svg"},"4a9f":function(t,e,n){(e=n("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.scroll-y[data-v-437466a7]{max-height:100vh}.favorite[data-v-437466a7] .favorite-head{padding-top:%?20?%;padding-left:%?40?%;margin-bottom:%?30?%;background:var(--qui-BG-2)}.favorite[data-v-437466a7] .cell-item__body{height:%?78?%}.favorite[data-v-437466a7] .themeCount .addFine{display:none}.favorite[data-v-437466a7] .themeCount .addAsk{display:none}.favorite[data-v-437466a7] /deep/ .themeItem{margin:0;border:none;border-radius:0}.favorite[data-v-437466a7] .favorite-content__item{position:relative}.favorite[data-v-437466a7] .icon-delete{position:absolute;right:%?104?%;bottom:%?40?%;font-size:%?30?%;color:#aaa}.favorite[data-v-437466a7] .icon-deletes{position:absolute;right:%?42?%;bottom:%?34?%;font-size:%?30?%;color:#aaa}.favorite[data-v-437466a7] .icon-link{position:absolute;bottom:%?40?%;left:%?42?%;font-size:%?30?%;color:#aaa}.favorite[data-v-437466a7] .icon-links{position:absolute;bottom:%?34?%;left:%?72?%;font-size:%?30?%;color:#aaa}.favorite[data-v-437466a7] .icon-publish{position:absolute;right:%?396?%;bottom:%?40?%;font-size:%?30?%;color:#aaa}.favorite[data-v-437466a7] .icon-publishs{position:absolute;right:%?332?%;bottom:%?34?%;font-size:%?30?%;color:#aaa}[data-v-437466a7] .themeItem{min-height:%?300?%}[data-v-437466a7] .wxParse{font-family:PingFang SC;font-size:%?30?%;font-weight:400;line-height:%?38?%;color:#000}',""]),t.exports=e},"5b5f":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("1276");var i=a(n("53ca")),o=n("b95e"),r=n("ce40");t.exports={methods:{wxShare:function(t){var e=this.getUrl(),n=this.$store.getters["jv/get"]("forums/1");n.passport&&!n.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(e)),{}]).then((function(a){var i=a.appId,o=a.nonceStr,s=a.signature,u=a.timestamp;r.config({debug:!1,appId:i,timestamp:u,nonceStr:o,signature:s,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),r.ready((function(){var a={title:t.title||"Discuz!Q",desc:t.desc||n.set_site.site_introduction,link:e,imgUrl:t.logo||n.set_site.site_favicon};r.updateAppMessageShareData(a),r.updateTimelineShareData(a)}))}))},h5Share:function(t){var e="";switch((0,i.default)(t)){case"undefined":e="Discuz!Q";break;case"string":e=t;break;default:e=t.title||"Discuz!Q"}var n=t.id?"?id=".concat(t.id):"",a="";if("pages/home/index"===t.url)a="".concat(o.DISCUZ_REQUEST_HOST);else{var r=t.url;t.url&&/^\/.*/.test(t.url)&&(r=t.url.slice(1)),a="".concat(o.DISCUZ_REQUEST_HOST).concat(r).concat(n)}var s=document.createElement("input");e=(e=(e=(e=e.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),e="".concat(e.substring(0,17)),s.value="".concat(e,"  ").concat(a),document.body.appendChild(s),s.select(),s.readOnly=!0,s.id="copyInp",document.execCommand("Copy"),s.setAttribute("onfocus",this.copyFocus(s)),s.className="oInput",s.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(t){t.blur(),document.body.removeChild(t)},getUrl:function(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent),e=window.location.href.split("#")[0];return t&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(e=window.entryUrl),e}}}},"5df8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAMAAADs1AnaAAAARVBMVEVHcEybBAT/UFD6UFD6UVH6UFD/UFD6UVH7UFCYAAD6UFD6UVH9oaH/////5ub7ZWX7ior/8PD+19f7e3v9tbX8kpL+yMjhHSfzAAAAC3RSTlMAjiCg630QwED2YJ4QxbcAAAEbSURBVDjLzdPbkoMgDAZgWrXaJSEcAu//qJugbuuI2rvuf5Fx9NNkAI2R3Oxpxmqe1+j2vEZiLpGaD9oZM30JQVouUjlGDpaLjAeIWVEAJwmo1dEO5SDII2VJQa15/yXC5KAUm7z3BaV4aswU2QF6y0GCWqCBSNrRxeAZIBSAHCUOtUa/QyVGdDEmeIUa6+RRpyC/pjW4jajvch1ah08N5OWprB87uy5JawmKg+iIsdTEFkpIsgSOOcxTcwvFonun7agmtVCg+RQwrmm1W47K6ZfsH6pbZAHpHHntFtsnk3WzvEg9VOl//FLfQON07/pz1E165zH0x6i7myVvbIteZMPeUD9sSM1Pv0H98DCtKFvQEakPxxkdi5r7L8zHODncoK0UAAAAAElFTkSuQmCC"},"6f74":function(t,e,n){"use strict";var a=n("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),n=uni.getStorageSync(a.STORGE_GET_USER_TIME);if(t||(e-n)/1e3>60){var i={include:"groups,wechat"},o=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:o}}),this.$store.dispatch("jv/get",["users/".concat(o),{params:i}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(a.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},8106:function(t,e,n){"use strict";n.r(e);var a=n("250f"),i=n("15d0");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3313");var r=n("f0c5"),s=Object(r.a)(i.default,a.b,a.c,!1,null,"437466a7",null,!1,a.a,void 0);e.default=s.exports},"864e":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("9558")),o={topic:function(t){var e=(0,i.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,n){var a="/pages/topic/content?id=".concat(e);return'<a href="'.concat(a,'" class="content-topic">').concat(n,"</a> ")}))}))},usermention:function(t){var e=(0,i.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,n){var a="/pages/profile/index?userId=".concat(e);return'<a href="'.concat(a,'" class="content-member">').concat(n,"</a> ")}))}))},attachment:function(t,e){return t&&t.replace(/\[attach\](.*?)\[\/attach\]/g,(function(t,n){var a=e.$store.getters["jv/get"]("attachments/".concat(n));return a.url&&(t='<a href="'.concat(a.url,'" class="content-attachment">').concat(a.attachment,"</a>")),t}))}};var r={parse:function(t,e){if(t){for(var n in o)t=o[n](t,e);return t}}};e.default=r},"948c":function(t,e,n){var a=n("4a9f");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n("4f06").default)("e4bb1162",a,!0,{sourceMap:!1,shadowMode:!1})},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},cadb:function(t,e,n){"use strict";n("99af"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp2day=e.time2DateAndHM=e.time2MinuteOrHour=void 0;e.time2MinuteOrHour=function(t){var e=new Date-new Date(t);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60),"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60),"小时前"):t.replace(/T/," ").replace(/Z/,"").substring(0,16)};e.time2DateAndHM=function(t){var e=t.replace(/T/," ").replace(/Z/,"");return"".concat(e.substring(0,10)," ").concat(e.substring(11,16))};e.timestamp2day=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)}},d93e:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("4160"),n("a434"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909")),o=a(n("b469")),r={components:{uniPopupDialog:a(n("840a")).default},mixins:o.default,props:{userId:{type:String,default:""}},data:function(){return{loadingType:"",data:[],query:{},totalData:0,pageSize:20,pageNum:1,currentItem:"",editThreadId:"",nowThreadId:"",fromdrafts:1}},mounted:function(){this.loadlikes()},onLoad:function(){},onShow:function(){this.loadlikes()},methods:{toTopic:function(t){this.editThreadId=t},handleClickShare:function(t){this.nowThreadId=t},loadlikes:function(){var t=this;this.loadingType="loading";var e={"page[number]":this.pageNum,"page[size]":this.pageSize};this.$store.dispatch("jv/get",["thread/draft",{params:e}]).then((function(e){e._jv&&(t.totalData=e._jv.json.meta.threadCount,delete e._jv),t.loadingType=e.length===t.pageSize?"more":"nomore",t.data=[].concat((0,i.default)(t.data),(0,i.default)(e))}))},handleCancel:function(){this.$refs.popTips.close()},handleOk:function(){var t=this;this.$refs.popTips.close();var e=this.currentItem;this.$store.dispatch("jv/delete","threads/".concat(e.id)).then((function(n){n&&(t.totalData-=1,t.data.splice(e.index,1))}))},itemDelete:function(t,e,n){var a={id:t,isFavorite:e,index:n};this.currentItem=a,this.$refs.popTips.open()},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.loadlikes())},uploadItem:function(){var t=this;if(this.editThreadId){var e=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.data.forEach((function(n,a){n._jv.id===t.editThreadId&&(t.editThreadId="",t.$set(t.data,a,e))}))}},toCompile:function(t){5===t.type&&0===t.questionTypeAndMoney.type?uni.redirectTo({url:"/pagesplay_h5/reward-to-ask?type=".concat(t.type,"&operating=draft&threadId=").concat(t._jv.id,"&fromdrafts=").concat(this.fromdrafts)}):uni.redirectTo({url:"/topic/post?type=".concat(t.type,"&operating=draft&threadId=").concat(t._jv.id,"&fromdrafts=").concat(this.fromdrafts,"&isredbag=").concat(t.isRedPacket,"&categoryId=").concat(t.category._jv.id)})}}};e.default=r},e972:function(t,e,n){t.exports=n.p+"static/img/msg-404.3ba2611f.svg"}}]);
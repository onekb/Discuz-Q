(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-invite-income"],{"00e2":function(e,t,i){"use strict";var s=i("b332");i.d(t,"a",(function(){return s.a})),i.d(t,"b",(function(){return s.b})),i.d(t,"c",(function(){return s.c}))},"185d":function(e,t,i){e.exports=i.p+"static/img/auth.bac1d347.svg"},"245f":function(e,t,i){"use strict";(function(t){var s=i("4ea4"),a=s(i("6f74")),n=i("b95e"),r=s(i("4c82"));e.exports={mixins:[a.default,r.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(i){i&&(t.log("forum",i),e.forum=i)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var s=i.code;uni.getUserInfo({success:function(t){var i={data:{attributes:{js_code:s,iv:t.iv,encryptedData:t.encryptedData}}};e.$store.dispatch("session/setParams",i)},fail:function(e){t.log(e)}})}},fail:function(e){t.log(e)}})},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var i=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var s=uni.getStorageSync("token");""!==s&&(i.data.attributes.token=s),this.login(i,t)}},getLoginBindParams:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var s=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(s.data.attributes.rebind=1);var a=uni.getStorageSync("token");""!==a&&(s.data.attributes.token=a),this.login(s,t)}},login:function(e,i){var s=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(s.logind(),s.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==n.SITE_PAY&&uni.getStorage({key:"page",success:function(e){t.log("resData",e),uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===n.SITE_PAY&&s.user&&!s.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var a=s.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:a,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var r=s.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:r,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,i("5a52").default)},"35ab":function(e,t,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,i=0;i<e.length;i++)t+=e.charCodeAt(i);var s=function(e,t,i){var s,a,n,r=Math.floor(6*e),o=6*e-r,u=i*(1-t),c=i*(1-o*t),d=i*(1-(1-o)*t);switch(r%6){case 0:s=i,a=d,n=u;break;case 1:s=c,a=i,n=u;break;case 2:s=u,a=i,n=d;break;case 3:s=u,a=c,n=i;break;case 4:s=d,a=u,n=i;break;case 5:s=i,a=u,n=c}return{r:Math.floor(255*s),g:Math.floor(255*a),b:Math.floor(255*n)}}(t%360/360,.3,.9);return""+s.r.toString(16)+s.g.toString(16)+s.b.toString(16)}},"368d":function(e,t,i){e.exports=i.p+"static/img/msg-warning.0c78a551.svg"},"5b5f":function(e,t,i){"use strict";var s=i("4ea4");i("99af"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var a=s(i("53ca")),n=i("b95e"),r=i("ce40");e.exports={methods:{wxShare:function(e){var t=this.getUrl(),i=this.$store.getters["jv/get"]("forums/1");i.passport&&!i.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(t)),{}]).then((function(s){var a=s.appId,n=s.nonceStr,o=s.signature,u=s.timestamp;r.config({debug:!1,appId:a,timestamp:u,nonceStr:n,signature:o,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),r.ready((function(){var s={title:e.title||"Discuz!Q",desc:e.desc||i.set_site.site_introduction,link:t,imgUrl:e.logo||i.set_site.site_favicon};r.updateAppMessageShareData(s),r.updateTimelineShareData(s)}))}))},h5Share:function(e){var t="";switch((0,a.default)(e)){case"undefined":t="Discuz!Q";break;case"string":t=e;break;default:t=e.title||"Discuz!Q"}var i=e.id?"?id=".concat(e.id):"",s="".concat(n.DISCUZ_REQUEST_HOST).concat(e.url).concat(i),r=document.createElement("input");t=(t=(t=(t=t.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),t="".concat(t.substring(0,17)),r.value="".concat(t,"  ").concat(s),document.body.appendChild(r),r.select(),r.readOnly=!0,r.id="copyInp",document.execCommand("Copy"),r.setAttribute("onfocus",this.copyFocus(r)),r.className="oInput",r.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(e){e.blur(),document.body.removeChild(e)},getUrl:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent),t=window.location.href.split("#")[0];return e&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(t=window.entryUrl),t}}}},6114:function(e,t,i){"use strict";var s=i("f96b");i.n(s).a},6763:function(e,t,i){"use strict";i.r(t);var s=i("9893"),a=i.n(s);for(var n in s)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(n);t.default=a.a},"6a01":function(e,t,i){(t=i("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.search[data-v-12c90ab7] {height:100vh;min-height:auto;overflow:hidden}.search[data-v-12c90ab7] .search-item{background-color:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.search[data-v-12c90ab7] .search-box{background:var(--qui-BG-2)}.search-total[data-v-12c90ab7]{position:relative;padding:%?10?% %?40?% %?24?%;margin-bottom:%?30?%;font-size:%?26?%;background-color:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.search-total__detail[data-v-12c90ab7]{margin:0 %?5?%;font-weight:700}.search-total__invove[data-v-12c90ab7]{position:absolute;top:%?10?%;right:%?40?%}.search-total__invove__detail[data-v-12c90ab7]{margin-left:%?10?%;font-weight:700}.invite-button[data-v-12c90ab7]{position:fixed;right:0;bottom:%?40?%;left:0;width:%?670?%;height:%?90?%;margin:auto}.invite-button .btn[data-v-12c90ab7]{font-size:%?30?%;line-height:%?90?%;color:var(--qui-FC-333);background:var(--qui-BG-2)}[data-v-12c90ab7] .cell-item .cell-item__body__right-text{font-weight:700;color:var(--qui-RED)}[data-v-12c90ab7] .cell-item__body__right{padding-right:%?40?%;font-size:%?30?%;color:var(--qui-FC-AAA)}.search-item__users__avatar[data-v-12c90ab7]{position:absolute;top:%?16?%;left:%?40?%}.search-item__users[data-v-12c90ab7]{position:relative;padding-left:%?130?%}.scroll-y[data-v-12c90ab7]{max-height:calc(100vh - %?500?%);padding-top:%?20?%}',""]),e.exports=t},"6f74":function(e,t,i){"use strict";var s=i("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),i=uni.getStorageSync(s.STORGE_GET_USER_TIME);if(e||(t-i)/1e3>60){var a={include:"groups,wechat"},n=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:n}}),this.$store.dispatch("jv/get",["users/".concat(n),{params:a}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(s.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},9893:function(e,t,i){"use strict";var s=i("4ea4");i("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(i("2909")),n=s(i("b469")),r=i("cadb"),o=s(i("5b5f")),u=s(i("4c82")),c={mixins:[n.default,o.default,u.default],data:function(){return{searchValue:"",loadingType:"",data:[],userId:this.$store.getters["session/get"]("userId"),totalNum:0,totalMoney:0,code:"",pageSize:20,pageNum:1}},onLoad:function(){this.getUserList(),this.getInviteCode()},onShareAppMessage:function(e){return e.from,{title:this.forums.set_site.site_name,path:"/pages/site/partner-invite?code=".concat(this.code)}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},methods:{share:function(){this.h5Share({title:this.forums.set_site.site_name,url:"pages/site/partner-invite?code=".concat(this.code)})},timeHandle:function(e){return(0,r.time2MinuteOrHour)(e)},searchInput:function(e){var t=this;this.searchValue=e.target.value,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.data=[],t.pageNum=1,t.getUserList(e.target.value)}),250)},getUserList:function(e,t){var i=this;this.loadingType="loading";var s={include:["sourceUser"],"filter[user]":this.userId,"filter[change_type]":[33,62,34],"page[number]":this.pageNum,"page[limit]":this.pageSize};this.searchValue&&(s["filter[source_username]"]=this.searchValue),this.$store.dispatch("jv/get",["wallet/log",{params:s}]).then((function(e){e._jv&&(i.totalMoney=e._jv.json.meta.sumChangeAvailableAmount,i.totalNum=e._jv.json.meta.total,delete e._jv),i.loadingType=e.length===i.pageSize?"more":"nomore",i.data=t&&"clear"===t?e:[].concat((0,a.default)(i.data),(0,a.default)(e))}))},clearSearch:function(){this.searchValue="",this.pageNum=1,this.getUserList("","clear")},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getUserList(this.searchValue))},getInviteCode:function(){var e=this;this.$store.dispatch("jv/get","userInviteCode").then((function(t){e.code=t._jv.code}))}}};t.default=c},b332:function(e,t,i){"use strict";(function(e){var s;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return s}));try{s={quiPage:i("29c4").default,quiIcon:i("895d").default,quiAvatar:i("da98").default,quiCellItem:i("e0ca").default,quiLoadMore:i("51e5").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("qui-page",{staticClass:"search",attrs:{"data-qui-theme":e.theme}},[i("v-uni-view",{staticClass:"search-box"},[i("v-uni-view",{staticClass:"search-box__content"},[i("v-uni-view",{staticClass:"icon-content-search"},[i("qui-icon",{attrs:{name:"icon-search",size:"30",color:"#bbb"}})],1),i("v-uni-input",{staticClass:"search-box__content-input",attrs:{type:"text","placeholder-class":"input-placeholder",placeholder:e.i18n.t("search.userssearch"),value:e.searchValue},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.searchInput.apply(void 0,arguments)}}}),e.searchValue?i("v-uni-view",{staticClass:"search-box__content-delete",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[i("qui-icon",{attrs:{name:"icon-close1",size:"32",color:"#ccc"}})],1):e._e()],1),e.searchValue?i("v-uni-view",{staticClass:"search-box__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.i18n.t("search.cancel")))])],1):e._e()],1),i("v-uni-view",{staticClass:"search-total"},[e._v(e._s(e.i18n.t("profile.total"))),i("v-uni-text",{staticClass:"search-total__detail"},[e._v(e._s(e.totalNum))]),e._v(e._s(e.i18n.t("profile.item"))+"\n    "+e._s(e.i18n.t("profile.records"))),i("v-uni-view",{staticClass:"search-total__invove"},[e._v(e._s(e.i18n.t("profile.amountinvolved"))),i("v-uni-text",{staticClass:"search-total__invove__detail"},[e._v(e._s("￥"+e.totalMoney))])],1)],1),i("v-uni-scroll-view",{staticClass:"scroll-y search-item",attrs:{"scroll-y":"true","scroll-with-animation":"true","show-scrollbar":"false"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.pullDown.apply(void 0,arguments)}}},[e._l(e.data,(function(t,s){return i("v-uni-view",{key:s,staticClass:"search-item__users"},[i("qui-avatar",{staticClass:"search-item__users__avatar",attrs:{user:t.sourceUser||"",size:"70","is-real":t.isReal}}),i("qui-cell-item",{attrs:{title:t.sourceUser&&t.sourceUser.username?t.sourceUser.username:e.i18n.t("core.userDeleted"),brief:e.timeHandle(t.created_at),addon:"+ "+t.change_available_amount}})],1)})),e.loadingType?i("qui-load-more",{attrs:{status:e.loadingType,"show-icon":!1}}):e._e()],2),i("v-uni-view",{staticClass:"invite-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.share.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"btn",attrs:{"open-type":"share"}},[e._v(e._s(e.i18n.t("profile.inviteFriends")))])],1)],1)},n=[]}).call(this,i("5a52").default)},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},c108:function(e,t,i){"use strict";i.r(t);var s=i("00e2"),a=i("6763");for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("6114");var r=i("f0c5"),o=Object(r.a)(a.default,s.b,s.c,!1,null,"12c90ab7",null,!1,s.a,void 0);t.default=o.exports},cadb:function(e,t,i){"use strict";i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.timestamp2day=t.time2DateAndHM=t.time2MinuteOrHour=void 0;t.time2MinuteOrHour=function(e){var t=new Date-new Date(e);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60),"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60),"小时前"):e.replace(/T/," ").replace(/Z/,"").substring(0,16)};t.time2DateAndHM=function(e){var t=e.replace(/T/," ").replace(/Z/,"");return"".concat(t.substring(0,10)," ").concat(t.substring(11,16))};t.timestamp2day=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)}},e972:function(e,t,i){e.exports=i.p+"static/img/msg-404.e11dc2d7.svg"},f96b:function(e,t,i){var s=i("6a01");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i("4f06").default)("50e8c9d2",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
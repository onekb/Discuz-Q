(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-site-search-user"],{1620:function(e,t,s){"use strict";var i=s("d97f");s.n(i).a},"185d":function(e,t,s){e.exports=s.p+"static/img/auth.bac1d347.svg"},"245f":function(e,t,s){"use strict";(function(t){var i=s("4ea4"),r=i(s("6f74")),n=s("b95e"),a=i(s("4c82"));e.exports={mixins:[r.default,a.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(s){s&&(t.log("forum",s),e.forum=s)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){a.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=this;uni.login({success:function(s){if("login:ok"===s.errMsg){var i=s.code;uni.getUserInfo({success:function(t){var s={data:{attributes:{js_code:i,iv:t.iv,encryptedData:t.encryptedData}}};e.$store.dispatch("session/setParams",s)},fail:function(e){t.log(e)}})}},fail:function(e){t.log(e)}})},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var s=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var i=uni.getStorageSync("token");""!==i&&(s.data.attributes.token=i),this.login(s,t)}},getLoginBindParams:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var i=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===s&&(i.data.attributes.rebind=1);var r=uni.getStorageSync("token");""!==r&&(i.data.attributes.token=r),this.login(i,t)}},login:function(e,s){var i=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(i.logind(),i.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==n.SITE_PAY&&uni.getStorage({key:"page",success:function(e){t.log("resData",e),uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===n.SITE_PAY&&i.user&&!i.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:s,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var r=i.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:r,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var a=i.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:a,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,s("5a52").default)},"35ab":function(e,t,s){"use strict";s("d3b7"),s("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,s=0;s<e.length;s++)t+=e.charCodeAt(s);var i=function(e,t,s){var i,r,n,a=Math.floor(6*e),o=6*e-a,u=s*(1-t),c=s*(1-o*t),d=s*(1-(1-o)*t);switch(a%6){case 0:i=s,r=d,n=u;break;case 1:i=c,r=s,n=u;break;case 2:i=u,r=s,n=d;break;case 3:i=u,r=c,n=s;break;case 4:i=d,r=u,n=s;break;case 5:i=s,r=u,n=c}return{r:Math.floor(255*i),g:Math.floor(255*r),b:Math.floor(255*n)}}(t%360/360,.3,.9);return""+i.r.toString(16)+i.g.toString(16)+i.b.toString(16)}},"368d":function(e,t,s){e.exports=s.p+"static/img/msg-warning.0c78a551.svg"},3858:function(e,t,s){"use strict";(function(e){var i;s.d(t,"b",(function(){return r})),s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return i}));try{i={quiPage:s("29c4").default,quiIcon:s("895d").default,quiAvatar:s("da98").default,quiCellItem:s("e0ca").default,quiLoadMore:s("51e5").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("qui-page",{staticClass:"search",attrs:{"data-qui-theme":e.theme}},[s("v-uni-view",{staticClass:"search-box"},[s("v-uni-view",{staticClass:"search-box__content"},[s("v-uni-view",{staticClass:"icon-content-search"},[s("qui-icon",{attrs:{name:"icon-search",size:"30",color:"#bbb"}})],1),s("v-uni-input",{staticClass:"search-box__content-input",attrs:{type:"text","placeholder-class":"input-placeholder",placeholder:e.i18n.t("search.searchkeywords"),value:e.searchValue},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.searchInput.apply(void 0,arguments)}}}),e.searchValue?s("v-uni-view",{staticClass:"search-box__content-delete",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[s("qui-icon",{attrs:{name:"icon-close1",size:"32",color:"#ccc"}})],1):e._e()],1),e.searchValue?s("v-uni-view",{staticClass:"search-box__cancel",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearSearch.apply(void 0,arguments)}}},[s("v-uni-text",[e._v(e._s(e.i18n.t("search.cancel")))])],1):e._e()],1),s("v-uni-scroll-view",{staticClass:"scroll-y search-item",attrs:{"scroll-y":"true","scroll-with-animation":"true","show-scrollbar":"false"},on:{scrolltolower:function(t){arguments[0]=t=e.$handleEvent(t),e.pullDown.apply(void 0,arguments)}}},[e._l(e.data,(function(t,i){return s("v-uni-view",{key:i,staticClass:"search-item__users",on:{click:function(s){arguments[0]=s=e.$handleEvent(s),e.toProfile(t.id)}}},[s("qui-avatar",{staticClass:"search-item__users__avatar",attrs:{user:t,size:"70","is-real":t.isReal}}),s("qui-cell-item",{attrs:{title:t.username,arrow:!0,addon:e.handleGroups(t)}})],1)})),e.loadingType?s("qui-load-more",{attrs:{status:e.loadingType,"show-icon":!1}}):e._e()],2)],1)},n=[]}).call(this,s("5a52").default)},"6f74":function(e,t,s){"use strict";var i=s("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),s=uni.getStorageSync(i.STORGE_GET_USER_TIME);if(e||(t-s)/1e3>60){var r={include:"groups,wechat"},n=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:n}}),this.$store.dispatch("jv/get",["users/".concat(n),{params:r}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(i.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},c73c:function(e,t,s){"use strict";s.r(t);var i=s("d773"),r=s.n(i);for(var n in i)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t.default=r.a},d773:function(e,t,s){"use strict";var i=s("4ea4");s("99af"),s("4de4"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(s("2909")),n={data:function(){return{searchValue:"",loadingType:"",data:[],pageSize:20,pageNum:1}},onLoad:function(e){this.searchValue=e.value,this.getUserList(e.value)},methods:{searchInput:function(e){var t=this;this.searchValue=e.target.value,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.data=[],t.pageNum=1,t.getUserList(e.target.value)}),250)},getUserList:function(e,t){var s=this;this.loadingType="loading";var i={include:"groups",sort:"createdAt","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[username]":"*".concat(e,"*")};this.$store.dispatch("jv/get",["users",{params:i}]).then((function(e){e._jv&&delete e._jv,s.loadingType=e.length===s.pageSize?"more":"nomore",s.data=t&&"clear"===t?e:[].concat((0,r.default)(s.data),(0,r.default)(e))}))},handleGroups:function(e){var t=[];return e.groups&&e.groups.length>0&&(t=e.groups.filter((function(e){return e.isDisplay}))),t.length>0?t[0].name:""},clearSearch:function(){this.searchValue="",this.pageNum=1,this.getUserList("","clear")},back:function(){uni.navigateBack()},toProfile:function(e){uni.navigateTo({url:"/pages/profile/index?userId=".concat(e)})},pullDown:function(){"more"===this.loadingType&&(this.pageNum+=1,this.getUserList(this.searchValue))}}};t.default=n},d97f:function(e,t,s){var i=s("d99b");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,s("4f06").default)("6518bb49",i,!0,{sourceMap:!1,shadowMode:!1})},d99b:function(e,t,s){(t=s("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.search[data-v-368d7a77] {height:100vh;min-height:auto;overflow:hidden}.search[data-v-368d7a77] .search-item{background-color:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED)}.search[data-v-368d7a77] .search-box{background:var(--qui-BG-2)}[data-v-368d7a77] .cell-item__body__right{padding-right:%?40?%;font-size:%?30?%;color:var(--qui-FC-AAA)}.search-item__users__avatar[data-v-368d7a77]{position:absolute;top:%?16?%;left:%?40?%}.search-item__users[data-v-368d7a77]{position:relative;padding-left:%?130?%}.scroll-y[data-v-368d7a77]{max-height:calc(100vh - %?200?%)}',""]),e.exports=t},daf6:function(e,t,s){"use strict";s.r(t);var i=s("f24b"),r=s("c73c");for(var n in r)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return r[e]}))}(n);s("1620");var a=s("f0c5"),o=Object(a.a)(r.default,i.b,i.c,!1,null,"368d7a77",null,!1,i.a,void 0);t.default=o.exports},e972:function(e,t,s){e.exports=s.p+"static/img/msg-404.e11dc2d7.svg"},f24b:function(e,t,s){"use strict";var i=s("3858");s.d(t,"a",(function(){return i.a})),s.d(t,"b",(function(){return i.b})),s.d(t,"c",(function(){return i.c}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-modify-right"],{"0886":function(e,t,i){"use strict";i.r(t);var s=i("51e1"),r=i("88d6");for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);i("72f3");var n=i("f0c5"),a=Object(n.a)(r.default,s.b,s.c,!1,null,"b43bbd88",null,!1,s.a,void 0);t.default=a.exports},"245f":function(e,t,i){"use strict";(function(t){var s=i("4ea4"),r=s(i("6f74")),o=i("b95e"),n=s(i("4c82"));e.exports={mixins:[r.default,n.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&(e.forum=t)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){n.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var s=i.code;uni.getUserInfo({success:function(t){var i={data:{attributes:{js_code:s,iv:t.iv,encryptedData:t.encryptedData}}};e.$store.dispatch("session/setParams",i)},fail:function(e){t.log(e)}})}},fail:function(e){t.log(e)}})},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var i=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var s=uni.getStorageSync("token");""!==s&&(i.data.attributes.token=s),this.login(i,t)}},getLoginBindParams:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var s=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(s.data.attributes.rebind=1);var r=uni.getStorageSync("token");""!==r&&(s.data.attributes.token=r),this.login(s,t)}},login:function(e,i){var s=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(s.logind(),s.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==o.SITE_PAY&&uni.getStorage({key:"page",success:function(e){t.log("resData",e),uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===o.SITE_PAY&&s.user&&!s.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var r=s.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:r,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var n=s.i18n.t("core.".concat(e.data.errors[0].code))||s.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:n,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,i("5a52").default)},"368d":function(e,t,i){e.exports=i.p+"static/img/msg-warning.f35ce51f.svg"},"4a75":function(e,t,i){"use strict";(function(e){var s;i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return s}));try{s={quiPage:i("29c4").default,quiCellItem:i("e0ca").default,quiNoData:i("dd95").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("qui-page",{staticClass:"power-box",attrs:{"data-qui-theme":e.theme}},[i("v-uni-view",{staticClass:"power-box__package"},[i("v-uni-view",{staticClass:"power-box__package-head"},[i("v-uni-view",{class:e.typenum1?"power-box__package-head-smore boder-bottom":"power-box__package-head-smore",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.powerlist(1)}}},[e._v(e._s(e.i18n.t("modify.powerlist")))]),i("v-uni-view",{class:e.typenum2?"power-box__package-head-smore boder-bottom":"power-box__package-head-smore",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.powerlist(2)}}},[e._v(e._s(e.i18n.t("modify.purchasepower")))])],1),e.typenum1?i("v-uni-view",{class:e.permissiondisplay?"power-box__package-foot":"power-box__package-bottom"},[e.paidusergroup.length>=1?i("v-uni-view",e._l(e.paidusergroup,(function(t,s){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.default,expression:"!item.default"}],key:s,staticClass:"power-box__package-foot-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.godetails(1,t._jv.id,s)}}},[i("qui-cell-item",{attrs:{title:t.name,"slot-right":!0,arrow:!1,border:!1}},[i("v-uni-view",{staticClass:"money"},[e._v("¥"+e._s(t.fee.toFixed(2)))])],1)],1)})),1):i("qui-no-data",{attrs:{name:"icon-unfold",tips:"暂无内容"}})],1):e._e(),e.typenum2?i("v-uni-view",{class:e.rightspurchased?"power-box__package-foots":"power-box__package-bottoms"},[e.privilegeUserGroup.length>=1?i("v-uni-view",e._l(e.privilegeUserGroup,(function(t,s){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.beoverdue(t.expiration_time),expression:"beoverdue(sitem.expiration_time)"}],key:s,staticClass:"power-box__package-foots-list",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.godetails(2,t.group_id,s)}}},[i("qui-cell-item",{attrs:{title:t.group.name,"slot-right":!0,arrow:!1,border:!1}},[i("v-uni-view",{staticClass:"time"},[e._v(e._s(e.fun(t.expiration_time))+"\n              "+e._s(e.i18n.t("modify.termout")))])],1)],1)})),1):i("qui-no-data",{attrs:{name:"icon-unfold",tips:"暂无内容"}})],1):e._e()],1)],1)},o=[]}).call(this,i("5a52").default)},"51e1":function(e,t,i){"use strict";var s=i("4a75");i.d(t,"a",(function(){return s.a})),i.d(t,"b",(function(){return s.b})),i.d(t,"c",(function(){return s.c}))},"6f74":function(e,t,i){"use strict";var s=i("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),i=uni.getStorageSync(s.STORGE_GET_USER_TIME);if(e||(t-i)/1e3>60){var r={include:"groups,wechat"},o=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:o}}),this.$store.dispatch("jv/get",["users/".concat(o),{params:r}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(s.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"72f3":function(e,t,i){"use strict";var s=i("7650");i.n(s).a},7650:function(e,t,i){var s=i("e192");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i("4f06").default)("3c1fb2ea",s,!0,{sourceMap:!1,shadowMode:!1})},"88d6":function(e,t,i){"use strict";i.r(t);var s=i("a2bc"),r=i.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t.default=r.a},a2bc:function(e,t,i){"use strict";var s=i("4ea4");i("99af"),i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={mixins:[s(i("6f74")).default],data:function(){return{typenum1:!0,typenum2:!1,paidusergroup:[],privilegeUserGroup:[],permissiondisplay:!1,rightspurchased:!1}},onLoad:function(){this.allusergroups(),this.allusergroupsusers()},computed:{usersid:function(){return this.$store.getters["session/get"]("userId")}},methods:{fun:function(e){return e.replace(/T/," ").replace(/Z/,"").substring(0,10)},allusergroups:function(){var e=this;this.$store.dispatch("jv/get",["groups",{params:{"filter[isPaid]":1}}]).then((function(t){e.paidusergroup=t,t.length>0?e.permissiondisplay=!0:e.permissiondisplay=!1}))},allusergroupsusers:function(){var e=this,t={sort:"created_at","filter[user]":this.usersid,"filter[delete_type]":0,include:"group"};this.$store.dispatch("jv/get",["groups/paid",{params:t}]).then((function(t){e.privilegeUserGroup=[],t.forEach((function(t){t.group&&e.privilegeUserGroup.push(t)})),t.length>0?e.rightspurchased=!0:e.rightspurchased=!1}))},beoverdue:function(e){var t=(new Date).getTime();return!(new Date(e).getTime()<=t)&&(new Date(e).getTime()>t||void 0)},powerlist:function(e){1===e?(this.typenum1=!0,this.typenum2=!1):(this.typenum1=!1,this.typenum2=!0,this.allusergroupsusers())},godetails:function(e,t,i){uni.navigateTo({url:"/pages/modify/rightdetails?sice=".concat(e,"&groups=").concat(t,"&index=").concat(i)})}}};t.default=r},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},e192:function(e,t,i){(t=i("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.power-box[data-v-b43bbd88]{background:var(--qui-BG-1);box-sizing:border-box}.power-box__package[data-v-b43bbd88]{width:100vw;background-color:var(--qui-BG-1);box-sizing:border-box}.power-box__package-head[data-v-b43bbd88]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:%?108?%;background:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BG-777);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.power-box__package-head-smore[data-v-b43bbd88]{width:%?240?%;height:100%;font-size:%?28?%;font-weight:700;line-height:%?108?%;color:var(--qui-FC-333);text-align:center}.power-box__package-head .boder-bottom[data-v-b43bbd88]{border-bottom:%?4?% solid var(--qui-BG-HIGH-LIGHT)}.power-box__package-foot[data-v-b43bbd88]{padding-left:%?40?%;margin-top:%?40?%;background:var(--qui-BG-2);box-sizing:border-box}.power-box__package-foot-list[data-v-b43bbd88]{padding-right:%?40?%;border-bottom:%?2?% solid var(--qui-BG-777)}.power-box__package-foots[data-v-b43bbd88]{padding-left:%?40?%;margin-top:%?40?%;background:var(--qui-BG-2);box-sizing:border-box}.power-box__package-foots-list[data-v-b43bbd88]{padding-right:%?40?%;border-bottom:%?2?% solid var(--qui-BG-777)}.money[data-v-b43bbd88]{font-size:%?28?%;font-weight:700;color:var(--qui-RED)}.time[data-v-b43bbd88]{font-size:%?28?%;font-weight:400;color:var(--qui-FC-TAG)}',""]),e.exports=t},e972:function(e,t,i){e.exports=i.p+"static/img/msg-404.3ba2611f.svg"}}]);
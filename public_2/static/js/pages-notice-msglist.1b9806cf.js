(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-notice-msglist"],{"185d":function(t,e,i){t.exports=i.p+"static/img/auth.51e40f27.svg"},"19bc":function(t,e,i){"use strict";i.r(e);var o=i("1e5f"),n=i.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e.default=n.a},"1e5f":function(t,e,i){"use strict";(function(t){var o=i("4ea4");i("4160"),i("fb6a"),i("b64b"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("725e")),r=i("cadb"),a=i("ceb9"),s={components:{quiEmoji:n.default},data:function(){return{username:"",scrollTop:0,old:{scrollTop:0,focus:!1},msg:"",emojiShow:!1,dialogId:0,height:0,scv:0,bottomPadding:10,pageSize:20,pageNum:1,navbarHeight:0,cursor:0,focus:!0,imgArr:[]}},computed:{currentLoginId:function(){var t=this.$store.getters["session/get"]("userId");return parseInt(t,10)},allChatRecord:function(){var t=[],e=this.$store.getters["jv/get"]("dialog_message"),i=Object.keys(e);if(e&&i.length>0)for(var o=0;o<i.length;o+=1){var n=e[i[o]];n.dialog_id.toString()===this.dialogId&&(n.time=(0,r.time2DateAndHM)(n.created_at),n.user=this.$store.getters["jv/get"]("users/".concat(n.user_id)),t.push(n))}return t},allEmoji:function(){return this.$store.getters["jv/get"]("emoji")},userInfo:function(){return this.$store.getters["jv/get"]("users/".concat(this.currentLoginId))}},watch:{allChatRecord:function(){this.scrollToBottom()}},created:function(){if(getApp()&&getApp().systemInfo&&getApp().systemInfo.screenWidth&&getApp().systemInfo.windowHeight){var e=getApp().systemInfo.screenWidth/750;this.scv=getApp().systemInfo.windowHeight/e-140}else try{getApp().systemInfo=uni.getSystemInfoSync();var i=getApp().systemInfo.screenWidth/750;this.scv=getApp().systemInfo.windowHeight/i-140}catch(e){t.error("Painter get system info failed, ".concat(JSON.stringify(e)))}},onLoad:function(t){var e=this;this.navbarHeight=uni.getSystemInfoSync().statusBarHeight+44;var i=t.username,o=t.dialogId;if(o&&(this.dialogId=o),i){this.username=i;var n="".concat(i," 与你对话");uni.setNavigationBarTitle({title:n})}this.getChatRecord(o),Object.keys(this.allEmoji).length<1&&this.getEmoji(),uni.onKeyboardHeightChange((function(t){t.height>0?e.$nextTick((function(){e.scrollTop+=t.height})):e.$nextTick((function(){e.scrollTop-=t.height}))}))},methods:{scrollToBottom:function(){var t=this;this.$nextTick((function(){uni.createSelectorQuery().selectAll(".chat-box__con").boundingClientRect().exec((function(e){var i=0;e[0].forEach((function(t){i+=t.height})),i>600&&(t.scrollTop=i-658+10,t.old.scrollTop=i-658+10)}))}))},toUpper:function(){uni.startPullDownRefresh(),this.pageNum+=1,this.getChatRecord(this.dialogId)},scroll:function(t){t&&t.detail&&(this.old.scrollTop=t.detail.scrollTop)},getChatRecord:function(e){if("0"!==e){uni.showNavigationBarLoading();var i={"filter[dialog_id]":e||this.dialogId,include:["user","user.groups"],"page[number]":this.pageNum,"page[limit]":this.pageSize,sort:"-createdAt"};this.$store.commit("jv/clearRecords",{_jv:{type:"dialog/message"}}),this.$store.dispatch("jv/get",["dialog/message",{params:i}]).then((function(t){t&&(uni.hideNavigationBarLoading(),uni.stopPullDownRefresh())})).catch((function(e){t.log(e)}))}},getEmoji:function(){this.$store.dispatch("jv/get",["emoji",{}])},cursorBlur:function(t){t&&t.detail&&(this.cursor=t.detail.cursor,t.detail.value.length>450&&uni.showToast({icon:"none",title:this.i18n.t("notice.contentMaxLength"),duration:2e3}))},cursorFocus:function(t){t&&(this.emojiShow=!1)},send:function(){var t=this;if(""===this.msg)uni.showToast({icon:"none",title:this.i18n.t("notice.emptycontent"),duration:2e3});else if(this.msg.length>450)uni.showToast({icon:"none",title:this.i18n.t("notice.contentMaxLength"),duration:2e3});else{if("0"===this.dialogId){var e={_jv:{type:"dialog"},recipient_username:this.username,message_text:this.msg};this.$store.dispatch("jv/post",e).then((function(e){e&&(t.dialogId=e._jv.id,t.getChatRecord(e._jv.id))})).catch((function(e){e&&e.data&&e.data.errors&&("content_banned"===e.data.errors[0].code&&uni.showToast({icon:"none",title:t.i18n.t("core.content_banned"),duration:2e3}),"permission_denied"===e.data.errors[0].code&&uni.showToast({icon:"none",title:t.i18n.t("core.permission_denied"),duration:2e3}))}))}else{var i={_jv:{type:"dialog/message"},dialog_id:this.dialogId,message_text:this.msg};this.$store.dispatch("jv/post",i).then((function(e){e&&t.scrollToBottom()})).catch((function(e){e&&e.data&&e.data.errors&&("content_banned"===e.data.errors[0].code&&uni.showToast({icon:"none",title:t.i18n.t("core.content_banned"),duration:2e3}),"permission_denied"===e.data.errors[0].code&&uni.showToast({icon:"none",title:t.i18n.t("core.permission_denied"),duration:2e3}))}))}this.msg="",this.emojiShow=!1}},popEmoji:function(){var t=this;this.emojiShow?(this.scrollTop=this.old.scrollTop,this.scrollToBottom(),this.bottomPadding-=204):(this.scrollTop=this.old.scrollTop,this.scrollToBottom(!0),this.bottomPadding+=204,this.$nextTick((function(){t.scrollTop+=204}))),this.emojiShow=!this.emojiShow},getEmojiClick:function(t){var e=this;this.focus=this.old.focus;var i;i="".concat(this.msg.slice(0,this.cursor)+t+this.msg.slice(this.cursor)),this.msg=i,this.cursor+=t.length,this.$nextTick((function(){e.focus=!0,uni.hideKeyboard()}))},jumpUserPage:function(t){t&&uni.navigateTo({url:"/pages/profile/index?userId=".concat(t)})},sending_pictures:function(){var e=this;uni.chooseImage({count:1,success:function(i){"chooseImage:ok"===i.errMsg&&i.tempFilePaths.forEach((function(i){a.http.upload("attachments",{formData:{type:1},filePath:i,name:"file"}).then((function(i){if(201===i.statusCode){var o={_jv:{type:"dialog/message"},dialog_id:e.dialogId,message_text:e.msg?e.msg:"发送图片",image_url:i.data.data.attributes.thumbUrl};e.$store.dispatch("jv/post",o).then((function(t){t&&(e.msg="",e.scrollToBottom())})).catch((function(e){t.log(e)}))}})).catch((function(t){uni.showToast({icon:"none",title:"".concat(t),duration:2e3})}))}))}})}}};e.default=s}).call(this,i("5a52").default)},"236d":function(t,e,i){"use strict";var o=i("f658");i.n(o).a},"245f":function(t,e,i){"use strict";(function(e){var o=i("4ea4"),n=o(i("6f74")),r=i("b95e"),a=o(i("4c82"));t.exports={mixins:[n.default,a.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&(t.forum=e)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){a.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var o=i.code;uni.getUserInfo({success:function(e){var i={data:{attributes:{js_code:o,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",i)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var o=uni.getStorageSync("token");""!==o&&(i.data.attributes.token=o),this.login(i,e)}},getLoginBindParams:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var o=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(o.data.attributes.rebind=1);var n=uni.getStorageSync("token");""!==n&&(o.data.attributes.token=n),this.login(o,e)}},login:function(t,i){var o=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(o.logind(),o.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==r.SITE_PAY&&uni.getStorage({key:"page",success:function(t){e.log("resData",t),uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===r.SITE_PAY&&o.user&&!o.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var n=o.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:n,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var a=o.i18n.t("core.".concat(t.data.errors[0].code))||o.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:a,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,i("5a52").default)},"2f06":function(t,e,i){"use strict";(function(t){var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));try{o={quiPage:i("29c4").default,quiAvatar:i("da98").default,quiUparse:i("d6b4").default,quiIcon:i("895d").default,quiEmoji:i("725e").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{attrs:{"data-qui-theme":t.theme}},[i("v-uni-view",{staticClass:"chat-box"},[i("v-uni-scroll-view",{style:{height:t.scv+"rpx"},attrs:{"scroll-y":"true","scroll-top":t.scrollTop},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)},scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.toUpper.apply(void 0,arguments)}}},t._l(t.allChatRecord,(function(e){return i("v-uni-view",{key:e._jv.id,staticClass:"chat-box__con"},[i("v-uni-view",{staticClass:"chat-box__con__time"},[t._v(t._s(e.time))]),i("v-uni-view",{class:[e.user_id===t.currentLoginId?"chat-box__con__msg__mine":"chat-box__con__msg__other"]},[i("qui-avatar",{staticClass:"chat-box__con__msg__other__img",attrs:{"is-real":e.user&&e.user.isReal,user:e.user,size:60},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jumpUserPage(e.user_id)}}}),i("v-uni-view",{class:[e.user_id===t.currentLoginId?"chat-box__con__msg__mine__box":"chat-box__con__msg__other__box"]},[i("qui-uparse",{staticStyle:{"word-break":"break-all"},attrs:{content:e.message_text_html,imgs:e.image_url}})],1)],1)],1)})),1),i("v-uni-view",{staticClass:"chat-box__footer"},[i("v-uni-view",{staticClass:"chat-box__footer__msg"},[i("v-uni-textarea",{staticClass:"uni-input",attrs:{maxlength:450,cursor:t.cursor,focus:t.focus,"show-confirm-bar":!1,"adjust-position":!1},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.cursorBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.cursorFocus.apply(void 0,arguments)}},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),i("qui-icon",{attrs:{name:"icon-expression chat-box__footer__msg__icon",size:"40",color:t.emojiShow?"#1878F3":"#7D7979"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popEmoji.apply(void 0,arguments)}}}),i("qui-icon",{attrs:{name:"icon-image chat-box__footer__msg__icon",size:"40",color:t.emojiShow?"#1878F3":"#7D7979"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sending_pictures.apply(void 0,arguments)}}}),i("v-uni-view"),i("v-uni-button",{staticClass:"chat-box__footer__btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("notice.send")))])],1),t.emojiShow?i("qui-emoji",{attrs:{list:t.allEmoji,position:"relative",top:"0rpx",left:"20rpx",right:"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getEmojiClick.apply(void 0,arguments)}}}):t._e()],1)],1)],1)},r=[]}).call(this,i("5a52").default)},"35ab":function(t,e,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,i=0;i<t.length;i++)e+=t.charCodeAt(i);var o=function(t,e,i){var o,n,r,a=Math.floor(6*t),s=6*t-a,u=i*(1-e),c=i*(1-s*e),d=i*(1-(1-s)*e);switch(a%6){case 0:o=i,n=d,r=u;break;case 1:o=c,n=i,r=u;break;case 2:o=u,n=i,r=d;break;case 3:o=u,n=c,r=i;break;case 4:o=d,n=u,r=i;break;case 5:o=i,n=u,r=c}return{r:Math.floor(255*o),g:Math.floor(255*n),b:Math.floor(255*r)}}(e%360/360,.3,.9);return""+o.r.toString(16)+o.g.toString(16)+o.b.toString(16)}},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.f35ce51f.svg"},"6f74":function(t,e,i){"use strict";var o=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(o.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var n={include:"groups,wechat"},r=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:r}}),this.$store.dispatch("jv/get",["users/".concat(r),{params:n}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(o.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"864e":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("9558")),r={topic:function(t){var e=(0,n.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,i){var o="/pages/topic/content?id=".concat(e);return'<a href="'.concat(o,'" class="content-topic">').concat(i,"</a> ")}))}))},usermention:function(t){var e=(0,n.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,i){var o="/pages/profile/index?userId=".concat(e);return'<a href="'.concat(o,'" class="content-member">').concat(i,"</a> ")}))}))},attachment:function(t,e){return t&&t.replace(/\[attach\](.*?)\[\/attach\]/g,(function(t,i){var o=e.$store.getters["jv/get"]("attachments/".concat(i));return o.url&&(t='<a href="'.concat(o.url,'" class="content-attachment">').concat(o.attachment,"</a>")),t}))}};var a={parse:function(t,e){if(t){for(var i in r)t=r[i](t,e);return t}}};e.default=a},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},b577:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.chat-box[data-v-da9afa34]{height:100%;margin:%?0?% %?0?% %?140?%;background:var(--qui-BG-ED);background:#faf9fb}.chat-box-wrap[data-v-da9afa34]{position:absolute;top:%?0?%;right:%?0?%;bottom:%?0?%;left:%?0?%;margin:auto;overflow:auto}.chat-box__con[data-v-da9afa34]{font-size:%?26?%;background:#faf9fb}.chat-box__con__time[data-v-da9afa34]{padding:%?30?% 0;font-size:%?22?%;font-weight:400;color:var(--qui-JT-B5);text-align:center}.chat-box__con__msg__mine[data-v-da9afa34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.chat-box__con__msg__mine__img[data-v-da9afa34]{margin:0 %?20?% 0 %?10?%}.chat-box__con__msg__mine__box[data-v-da9afa34]{position:relative;max-width:%?550?%;padding:%?25?% %?20?%;margin-right:%?20?%;font-family:PingFang SC;font-size:%?28?%;font-weight:400;line-height:%?38?%;color:var(--qui-FC-34);color:#000;background:#fff;background:var(--qui-BG-D1E0FF);border:%?1?% solid var(--qui-BG-A3CAFF);border:%?1?% solid #fff;border-radius:%?10?%}.chat-box__con__msg__mine__box[data-v-da9afa34]:before{position:absolute;top:%?30?%;right:%?-18.6?%;z-index:100;width:%?0?%;height:%?0?%;border-top:%?10?% solid transparent;border-right:%?10?% solid transparent;border-bottom:%?10?% solid transparent;border-left:%?10?% solid var(--qui-BOR-D1E0FF);border-left:%?10?% solid #fff;content:""}.chat-box__con__msg__mine__box[data-v-da9afa34]:after{position:absolute;top:%?30?%;right:%?-20?%;z-index:99;width:%?0?%;height:%?0?%;padding:0;border-top:%?10?% solid transparent;border-right:%?10?% solid transparent;border-bottom:%?10?% solid transparent;border-left:%?10?% solid var(--qui-BOR-A3CAFF);border-left:%?10?% solid #fff;content:""}.chat-box__con__msg__other[data-v-da9afa34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.chat-box__con__msg__other__img[data-v-da9afa34]{margin:0 %?10?% 0 %?20?%}.chat-box__con__msg__other__box[data-v-da9afa34]{position:relative;max-width:%?550?%;padding:%?25?% %?20?%;margin:%?0?% %?0?% %?0?% %?20?%;background:var(--qui-BG-2);border:%?1?% solid var(--qui-BOR-E5);border-radius:%?10?%}.chat-box__con__msg__other__box[data-v-da9afa34]:before{position:absolute;top:%?30?%;left:%?-18.6?%;z-index:100;width:%?0?%;height:%?0?%;border-top:%?10?% solid transparent;border-right:%?10?% solid var(--qui-BOR-FFF);border-bottom:%?10?% solid transparent;border-left:%?10?% solid transparent;content:""}.chat-box__con__msg__other__box[data-v-da9afa34]:after{position:absolute;top:%?30?%;left:%?-20?%;z-index:99;width:%?0?%;height:%?0?%;padding:0;border-top:%?10?% solid transparent;border-right:%?10?% solid var(--qui-BOR-CCC);border-bottom:%?10?% solid transparent;border-left:%?10?% solid transparent;content:""}.chat-box__footer[data-v-da9afa34]{position:fixed;bottom:%?0?%;z-index:999;width:100%;min-height:%?140?%;background:var(--qui-BG-BTN-GRAY-1)}.chat-box__footer__msg[data-v-da9afa34]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?20?% %?40?%;background:var(--qui-BG-BTN-GRAY-1)}.chat-box__footer__msg__icon[data-v-da9afa34]{margin:%?0?% %?0?% %?0?% %?10?%}.chat-box__footer .uni-input[data-v-da9afa34]{width:65%;height:%?80?%;padding:%?0?% %?0?% %?0?% %?20?%;background:var(--qui-BG-2);border-radius:%?5?%}.chat-box__footer__btn[data-v-da9afa34]{margin:0 0 0 %?10?%;font-size:%?30?%;background:var(--qui-BG-BTN);background:#ea3d5a;border-radius:%?4?%}.chat-box__footer__btn[data-v-da9afa34]:after{border:none}[data-v-da9afa34] .emoji-box{width:calc(100vw - %?40?%)}',""]),t.exports=e},cadb:function(t,e,i){"use strict";i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp2day=e.time2DateAndHM=e.time2MinuteOrHour=void 0;e.time2MinuteOrHour=function(t){var e=new Date-new Date(t);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60),"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60),"小时前"):t.replace(/T/," ").replace(/Z/,"").substring(0,16)};e.time2DateAndHM=function(t){var e=t.replace(/T/," ").replace(/Z/,"");return"".concat(e.substring(0,10)," ").concat(e.substring(11,16))};e.timestamp2day=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)}},de9d:function(t,e,i){"use strict";var o=i("2f06");i.d(e,"a",(function(){return o.a})),i.d(e,"b",(function(){return o.b})),i.d(e,"c",(function(){return o.c}))},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.3ba2611f.svg"},f658:function(t,e,i){var o=i("b577");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("4f06").default)("2ad757d0",o,!0,{sourceMap:!1,shadowMode:!1})},fd67:function(t,e,i){"use strict";i.r(e);var o=i("de9d"),n=i("19bc");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("236d");var a=i("f0c5"),s=Object(a.a)(n.default,o.b,o.c,!1,null,"da9afa34",null,!1,o.a,void 0);e.default=s.exports}}]);
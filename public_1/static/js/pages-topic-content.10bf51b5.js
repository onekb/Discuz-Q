(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-topic-content"],{"024a":function(t,e,i){"use strict";i.r(e);var n=i("7cc4"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e.default=a.a},1396:function(t,e,i){(e=i("24fb")(!1)).push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.topic-content-header[data-v-adb9d92c]{padding:%?15?%;margin-bottom:%?30?%;font-size:%?40?%;background:var(--qui-BG-2);border-bottom:%?2?% solid var(--qui-BOR-ED);box-sizing:border-box}.topic-content-header_title[data-v-adb9d92c]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?%}.topic-content-header_title-size[data-v-adb9d92c]{font-weight:600;word-break:break-all;-webkit-align-self:center;align-self:center}.topic-content-header_title-recoment[data-v-adb9d92c]{width:%?34?%;height:%?34?%;margin-left:%?20?%;line-height:%?28?%;color:#fff;text-align:center;-webkit-align-self:center;align-self:center}.topic-content-header_details[data-v-adb9d92c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?5?% 0 %?10?% %?20?%}.topic-content-header_toAll[data-v-adb9d92c]{margin-bottom:%?15?%;margin-left:%?36?%;font-size:%?28?%;color:var(--qui-LINK)}.details_title[data-v-adb9d92c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:var(--qui-FC-777)}.details_title uni-text[data-v-adb9d92c]{font-size:%?28?%;color:var(--qui-FC-333)}.shareBtn[data-v-adb9d92c]{width:%?100?%;padding:0;margin:0;font-size:%?24?%;color:var(--qui-FC-777);background:var(--qui-BG-2)}.shareBtn[plain][data-v-adb9d92c]{border:0}.mask[data-v-adb9d92c]{position:fixed;top:0;left:0;z-index:17;width:100%;height:100%;background:rgba(0,0,0,.6)}.wxShareTip[data-v-adb9d92c]{position:fixed;top:0;left:0;z-index:2222222222222;width:100%;height:100%;text-align:right}.wxShareTip .sharePoint[data-v-adb9d92c]{display:inline-block;width:70%;margin-top:%?10?%;margin-right:%?30?%}.wxShareTip .shareKnow[data-v-adb9d92c]{display:block;width:35%;margin:20vh auto %?30?%}.scroll-y[data-v-adb9d92c]{max-height:100vh}',""]),t.exports=e},"185d":function(t,e,i){t.exports=i.p+"static/img/auth.51e40f27.svg"},"1cb5":function(t,e,i){t.exports=i.p+"static/img/yihuida.894c0306.svg"},"245f":function(t,e,i){"use strict";(function(e){var n=i("4ea4").default,a=n(i("6f74")),s=i("b95e"),r=n(i("4c82"));t.exports={mixins:[a.default,r.default],methods:{getForum:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&(t.forum=e)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var t=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var n=i.code;uni.getUserInfo({success:function(e){var i={data:{attributes:{js_code:n,iv:e.iv,encryptedData:e.encryptedData}}};t.$store.dispatch("session/setParams",i)},fail:function(t){e.log(t)}})}},fail:function(t){e.log(t)}})},mpLogin:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",t),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",t),uni.setStorageSync("rebind",e),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(t,e){var i=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,e)}},getLoginBindParams:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var n=t;if(""===t.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===t.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(n.data.attributes.rebind=1);var a=uni.getStorageSync("token");""!==a&&(n.data.attributes.token=a),this.login(n,e)}},login:function(t,i){var n=this;this.$store.dispatch("session/h5Login",t).then((function(t){if(t&&t.data&&t.data.data&&t.data.data.id&&(n.logind(),n.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(t){t&&t.set_site&&t.set_site.site_mode!==s.SITE_PAY&&uni.getStorage({key:"page",success:function(t){uni.redirectTo({url:t.data})}}),t&&t.set_site&&t.set_site.site_mode===s.SITE_PAY&&n.user&&!n.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),t&&t.data&&t.data.errors){if("401"===t.data.errors[0].status||"402"===t.data.errors[0].status||"500"===t.data.errors[0].status){var e=n.i18n.t("core.".concat(t.data.errors[0].code));uni.showToast({icon:"none",title:e,duration:2e3})}if("403"===t.data.errors[0].status||"422"===t.data.errors[0].status){var a=n.i18n.t("core.".concat(t.data.errors[0].code))||n.i18n.t(t.data.errors[0].detail[0]);uni.showToast({icon:"none",title:a,duration:2e3})}}})).catch((function(t){return e.log(t)}))}}}}).call(this,i("5a52").default)},"35ab":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=0,i=0;i<t.length;i++)e+=t.charCodeAt(i);var n=function(t,e,i){var n,a,s,r=Math.floor(6*t),o=6*t-r,u=i*(1-e),c=i*(1-o*e),d=i*(1-(1-o)*e);switch(r%6){case 0:n=i,a=d,s=u;break;case 1:n=c,a=i,s=u;break;case 2:n=u,a=i,s=d;break;case 3:n=u,a=c,s=i;break;case 4:n=d,a=u,s=i;break;case 5:n=i,a=u,s=c}return{r:Math.floor(255*n),g:Math.floor(255*a),b:Math.floor(255*s)}}(e%360/360,.3,.9);return""+n.r.toString(16)+n.g.toString(16)+n.b.toString(16)},i("d3b7"),i("25f0")},"368d":function(t,e,i){t.exports=i.p+"static/img/msg-warning.f35ce51f.svg"},"59a9":function(t,e,i){var n=i("1396");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("4f06").default)("0870cc26",n,!0,{sourceMap:!1,shadowMode:!1})},"5b5f":function(t,e,i){"use strict";var n=i("4ea4").default;i("fb6a"),i("99af"),i("5319"),i("ac1f"),i("d3b7"),i("25f0"),i("1276");var a=n(i("53ca")),s=i("b95e"),r=i("ce40");t.exports={methods:{wxShare:function(t){var e=this.getUrl(),i=this.$store.getters["jv/get"]("forums/1");i.passport&&!i.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(e)),{}]).then((function(n){var a=n.appId,s=n.nonceStr,o=n.signature,u=n.timestamp;r.config({debug:!1,appId:a,timestamp:u,nonceStr:s,signature:o,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),r.ready((function(){var n={title:t.title||"Discuz!Q",desc:t.desc||i.set_site.site_introduction,link:e,imgUrl:t.logo||i.set_site.site_favicon};r.updateAppMessageShareData(n),r.updateTimelineShareData(n)}))}))},h5Share:function(t){var e="";switch((0,a.default)(t)){case"undefined":e="Discuz!Q";break;case"string":e=t;break;default:e=t.title||"Discuz!Q"}var i=t.id?"?id=".concat(t.id):"",n="";if("pages/home/index"===t.url)n="".concat(s.DISCUZ_REQUEST_HOST);else{var r=t.url;t.url&&/^\/.*/.test(t.url)&&(r=t.url.slice(1)),n="".concat(s.DISCUZ_REQUEST_HOST).concat(r).concat(i)}var o=document.createElement("input");e=(e=(e=(e=e.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),e="".concat(e.substring(0,17)),o.value="".concat(e,"  ").concat(n),document.body.appendChild(o),o.select(),o.readOnly=!0,o.id="copyInp",document.execCommand("Copy"),o.setAttribute("onfocus",this.copyFocus(o)),o.className="oInput",o.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(t){t.blur(),document.body.removeChild(t)},getUrl:function(){var t=/iPad|iPhone|iPod/.test(navigator.userAgent),e=window.location.href.split("#")[0];return t&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(e=window.entryUrl),e}}}},"5df8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAMAAADs1AnaAAAARVBMVEVHcEybBAT/UFD6UFD6UVH6UFD/UFD6UVH7UFCYAAD6UFD6UVH9oaH/////5ub7ZWX7ior/8PD+19f7e3v9tbX8kpL+yMjhHSfzAAAAC3RSTlMAjiCg630QwED2YJ4QxbcAAAEbSURBVDjLzdPbkoMgDAZgWrXaJSEcAu//qJugbuuI2rvuf5Fx9NNkAI2R3Oxpxmqe1+j2vEZiLpGaD9oZM30JQVouUjlGDpaLjAeIWVEAJwmo1dEO5SDII2VJQa15/yXC5KAUm7z3BaV4aswU2QF6y0GCWqCBSNrRxeAZIBSAHCUOtUa/QyVGdDEmeIUa6+RRpyC/pjW4jajvch1ah08N5OWprB87uy5JawmKg+iIsdTEFkpIsgSOOcxTcwvFonun7agmtVCg+RQwrmm1W47K6ZfsH6pbZAHpHHntFtsnk3WzvEg9VOl//FLfQON07/pz1E165zH0x6i7myVvbIteZMPeUD9sSM1Pv0H98DCtKFvQEakPxxkdi5r7L8zHODncoK0UAAAAAElFTkSuQmCC"},"6f74":function(t,e,i){"use strict";var n=i("b95e");t.exports={computed:{user:function(){var t=this.$store.getters["session/get"]("userId");return t?this.$store.getters["jv/get"]("users/".concat(t)):{}}},methods:{getUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(new Date).getTime(),i=uni.getStorageSync(n.STORGE_GET_USER_TIME);if(t||(e-i)/1e3>60){var a={include:"groups,wechat"},s=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:s}}),this.$store.dispatch("jv/get",["users/".concat(s),{params:a}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(n.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var t=this,e=this.$store.getters["session/get"]("userId");if(e){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(e),{params:{include:"groups,wechat"}}]).then((function(e){t.$u.event.$emit("logind",e)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"7cc4":function(t,e,i){"use strict";var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4160"),i("159b"),i("99af");var a=n(i("b469")),s=n(i("5b5f")),r=n(i("4c82")),o={mixins:[a.default,s.default,r.default],data:function(){return{shareShow:!1,topicData:[],query:{},isGreat:!1,editThreadId:"",pageNum:1,pageSize:20,loadingtype:"more",nowThreadId:0,meta:"",scrollTop:0,loadedErr:!1}},computed:{topic:function(){return this.query.id?this.$store.getters["jv/get"]("topics/".concat(this.query.id)):{}}},created:function(){this.isWeixin=r.default.isWeixin().isWeixin,this.isPhone=r.default.isWeixin().isPhone,this.forums.passport&&this.forums.passport.offiaccount_close&&this.wxShare({title:this.topic.content})},onLoad:function(t){var e=this;this.query=t,t.id?(this.loadThreads(),this.$store.dispatch("jv/get","topics/".concat(t.id)).then((function(t){uni.setNavigationBarTitle({title:t.content})})).catch((function(t){e.loadedErr=!0,404===t.statusCode&&e.$store.dispatch("forum/setError",{code:"type_404",status:500})}))):(this.$store.dispatch("forum/setError",{code:"type_404",status:500}),this.loadedErr=!0)},onShow:function(){this.uploadItem()},methods:{handleClickShare:function(t){this.nowThreadId=t},toTopic:function(t){this.editThreadId=t},uploadItem:function(){var t=this;if(this.editThreadId){var e=this.$store.getters["jv/get"]("threads/".concat(this.editThreadId));this.topicData.forEach((function(i,n){i._jv.id===t.editThreadId&&(t.editThreadId="",t.$set(t.topicData,n,e))}))}},loadThreads:function(){var t=this,e={"filter[isApproved]":1,"filter[isDeleted]":"no","filter[topicId]":this.query.id,"page[number]":this.pageNum,"page[limit]":this.pageSize,include:["user","user.groups","firstPost","firstPost.images","firstPost.postGoods","category","threadVideo","threadAudio","question","question.beUser","question.beUser.groups"]};this.$store.dispatch("jv/get",["threads",{params:e}]).then((function(e){t.meta=e._jv.json.meta,t.pageNum>1?t.topicData=t.topicData.concat(e):(t.topicData=e,t.loadingtype="noMore")}))},triggerShare:function(){!0===this.isWeixin?this.shareShow=!0:this.h5Share({title:this.topic.content,id:this.query.id,url:"pages/topic/content"})},closeShare:function(){this.shareShow=!1}},onPullDownRefresh:function(){var t=this;t.pageNum=1,t.topicData=[],setTimeout((function(){t.uploadItem(),t.loadThreads(),uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.meta?this.meta.pageCount>1&&(this.pageNum+=1,this.loadThreads()):this.loadingtype="noMore"},onPageScroll:function(t){this.scrollTop=t.scrollTop}};e.default=o},"864e":function(t,e,i){"use strict";var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("5319"),i("ac1f"),i("99af");var a=n(i("9558")),s={topic:function(t){var e=(0,a.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,i){var n="/pages/topic/content?id=".concat(e);return'<a href="'.concat(n,'" class="content-topic">').concat(i,"</a> ")}))}))},usermention:function(t){var e=(0,a.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return t&&t.replace(e,(function(t){return t.replace(e,(function(t,e,i){var n="/pages/profile/index?userId=".concat(e);return'<a href="'.concat(n,'" class="content-member">').concat(i,"</a> ")}))}))},attachment:function(t,e){return t&&t.replace(/\[attach\](.*?)\[\/attach\]/g,(function(t,i){var n=e.$store.getters["jv/get"]("attachments/".concat(i));return n.url&&(t='<a href="'.concat(n.url,'" class="content-attachment">').concat(n.attachment,"</a>")),t}))}};var r={parse:function(t,e){if(t){for(var i in s)t=s[i](t,e);return t}}};e.default=r},"91fe":function(t,e,i){"use strict";var n=i("59a9");i.n(n).a},b469:function(t,e){t.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},bf30:function(t,e,i){"use strict";var n=i("fbe7");i.d(e,"a",(function(){return n.a})),i.d(e,"b",(function(){return n.b})),i.d(e,"c",(function(){return n.c}))},cadb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.timestamp2day=e.time2DateAndHM=e.time2MinuteOrHour=void 0,i("e25e"),i("5319"),i("ac1f"),i("99af");e.time2MinuteOrHour=function(t){var e=new Date-new Date(t);return parseInt(parseInt(e/1e3,0)/60,0)<60?"".concat(Math.ceil(e/1e3/60),"分钟前"):parseInt(parseInt(parseInt(e/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(e/1e3/60/60),"小时前"):t.replace(/T/," ").replace(/Z/,"").substring(0,16)};e.time2DateAndHM=function(t){var e=t.replace(/T/," ").replace(/Z/,"");return"".concat(e.substring(0,10)," ").concat(e.substring(11,16))};e.timestamp2day=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)}},e972:function(t,e,i){t.exports=i.p+"static/img/msg-404.3ba2611f.svg"},ed75:function(t,e,i){"use strict";i.r(e);var n=i("bf30"),a=i("024a");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("91fe");var r=i("f0c5"),o=Object(r.a)(a.default,n.b,n.c,!1,null,"adb9d92c",null,!1,n.a,void 0);e.default=o.exports},fbe7:function(t,e,i){"use strict";(function(t){var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));try{n={quiPage:i("29c4").default,quiPageMessage:i("e694").default,quiIcon:i("895d").default,quiThreadItem:i("369a").default,quiLoadMore:i("51e5").default}}catch(e){if(-1===e.message.indexOf("Cannot find module")||-1===e.message.indexOf(".vue"))throw e;t.error(e.message),t.error("1. 排查组件名称拼写是否正确"),t.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),t.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("qui-page",{staticClass:"pages-content",attrs:{"data-qui-theme":t.theme}},[!t.query.id||t.loadedErr?i("qui-page-message"):i("v-uni-view",{staticClass:"scroll-y"},[i("v-uni-view",{staticClass:"topic-content-header"},[i("v-uni-view",{staticClass:"topic-content-header_title"},[i("v-uni-view",{staticClass:"topic-content-header_title-size"},[t._v("#"+t._s(t.topic.content)+"#")]),1===t.topic.recommended?i("v-uni-view",{staticClass:"topic-content-header_title-recoment"},[i("qui-icon",{attrs:{name:"icon-tuijian",color:"#1878f3",size:"34"}})],1):t._e()],1),i("v-uni-navigator",{attrs:{url:"/pages/topic/list"}},[i("v-uni-view",{staticClass:"topic-content-header_toAll"},[t._v(t._s(t.i18n.t("topic.allTopics"))+" >")])],1),i("v-uni-view",{staticClass:"topic-content-header_details"},[i("v-uni-view",{staticClass:"details_title"},[t._v(t._s(t.i18n.t("topic.hot"))+"："),i("v-uni-text",[t._v(t._s(t.topic.view_count))])],1),i("v-uni-view",{staticClass:"details_title"},[t._v(t._s(t.i18n.t("topic.contents"))+"："),i("v-uni-text",[t._v(t._s(t.topic.thread_count))])],1),i("v-uni-view",{staticClass:"details_title"},[i("qui-icon",{staticClass:"post-box__hd-l__icon",attrs:{name:"icon-share1",size:"26",color:"#777"}}),i("v-uni-button",{staticClass:"shareBtn",attrs:{"open-type":"share",plain:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerShare.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.t("topic.share")))]),t.shareShow?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeShare.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"wxShareTip"},[i("img",{staticClass:"sharePoint",attrs:{src:"/static/sharePoint.png",alt:!0}}),i("img",{staticClass:"shareKnow",attrs:{src:"/static/shareKnow.png",alt:!0}})])],1):t._e()],1)],1)],1),t._l(t.topicData,(function(e,n){return i("qui-thread-item",{key:n,attrs:{thread:e,"conversation-id":t.query.id,currentindex:n},on:{toTopic:function(e){arguments[0]=e=t.$handleEvent(e),t.toTopic.apply(void 0,arguments)},handleClickShare:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickShare.apply(void 0,arguments)}}})})),i("qui-load-more",{attrs:{status:t.loadingtype}})],2)],1)},s=[]}).call(this,i("5a52").default)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["pages-home-index"],{"0f78":function(e,t,i){"use strict";var n=i("f3a2");i.n(n).a},"185d":function(e,t,i){e.exports=i.p+"static/img/auth.bac1d347.svg"},"1cb5":function(e,t,i){e.exports=i.p+"static/img/yihuida.4252644e.svg"},"245f":function(e,t,i){"use strict";(function(t){var n=i("4ea4"),o=n(i("6f74")),s=i("b95e"),r=n(i("4c82"));e.exports={mixins:[o.default,r.default],methods:{getForum:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(i){i&&(t.log("forum",i),e.forum=i)}))},jump2PhoneLoginPage:function(){uni.redirectTo({url:"/pages/user/phone-login"})},jump2PhoneLoginRegisterPage:function(){uni.redirectTo({url:"/pages/user/phone-login-register"})},jump2LoginPage:function(){uni.redirectTo({url:"/pages/user/login"})},jump2RegisterPage:function(){uni.redirectTo({url:"/pages/user/register"})},jump2RegisterExtendPage:function(){uni.redirectTo({url:"/pages/user/supple-mentary"})},jump2LoginBindPage:function(){uni.redirectTo({url:"/pages/user/login-bind"})},jump2RegisterBindPage:function(){uni.redirectTo({url:"/pages/user/register-bind"})},jump2LoginBindPhonePage:function(){uni.redirectTo({url:"/pages/user/login-bind-phone"})},jump2RegisterBindPhonePage:function(){uni.redirectTo({url:"/pages/user/register-bind-phone"})},jump2findpwdPage:function(){uni.navigateTo({url:"/pages/modify/findpwd?pas=reset_pwd"})},mpLoginMode:function(){this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&this.jump2LoginPage(),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open())},h5LoginMode:function(){r.default.isWeixin().isWeixin?(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&(uni.setStorageSync("register",1),this.$store.dispatch("session/wxh5Login"))):(this.forums&&this.forums.set_reg&&0===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}),this.forums&&this.forums.set_reg&&1===this.forums.set_reg.register_type&&this.jump2PhoneLoginRegisterPage(),this.forums&&this.forums.set_reg&&2===this.forums.set_reg.register_type&&uni.navigateTo({url:"/pages/user/login"}))},refreshmpParams:function(){var e=this;uni.login({success:function(i){if("login:ok"===i.errMsg){var n=i.code;uni.getUserInfo({success:function(t){var i={data:{attributes:{js_code:n,iv:t.iv,encryptedData:t.encryptedData}}};e.$store.dispatch("session/setParams",i)},fail:function(e){t.log(e)}})}},fail:function(e){t.log(e)}})},mpLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;uni.setStorageSync("register",e),uni.setStorageSync("isSend",!0),this.$store.getters["session/get"]("auth").open()},wxh5Login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;uni.setStorageSync("register",e),uni.setStorageSync("rebind",t),uni.setStorageSync("h5_wechat_login",1),this.$store.dispatch("session/wxh5Login")},getLoginParams:function(e,t){var i=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{var n=uni.getStorageSync("token");""!==n&&(i.data.attributes.token=n),this.login(i,t)}},getLoginBindParams:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.refreshmpParams();var n=e;if(""===e.data.attributes.username)uni.showToast({icon:"none",title:this.i18n.t("user.usernameEmpty"),duration:2e3});else if(""===e.data.attributes.password)uni.showToast({icon:"none",title:this.i18n.t("user.passwordEmpty"),duration:2e3});else{1===i&&(n.data.attributes.rebind=1);var o=uni.getStorageSync("token");""!==o&&(n.data.attributes.token=o),this.login(n,t)}},login:function(e,i){var n=this;this.$store.dispatch("session/h5Login",e).then((function(e){if(e&&e.data&&e.data.data&&e.data.data.id&&(n.logind(),n.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]).then((function(e){e&&e.set_site&&e.set_site.site_mode!==s.SITE_PAY&&uni.getStorage({key:"page",success:function(e){t.log("resData",e),uni.redirectTo({url:e.data})}}),e&&e.set_site&&e.set_site.site_mode===s.SITE_PAY&&n.user&&!n.user.paid&&uni.redirectTo({url:"/pages/site/info"})})),uni.showToast({title:i,duration:2e3})),e&&e.data&&e.data.errors){if("401"===e.data.errors[0].status||"402"===e.data.errors[0].status||"500"===e.data.errors[0].status){var o=n.i18n.t("core.".concat(e.data.errors[0].code));uni.showToast({icon:"none",title:o,duration:2e3})}if("403"===e.data.errors[0].status||"422"===e.data.errors[0].status){var r=n.i18n.t(e.data.errors[0].detail[0]);uni.showToast({icon:"none",title:r,duration:2e3})}}})).catch((function(e){return t.log(e)}))}}}}).call(this,i("5a52").default)},"35ab":function(e,t,i){"use strict";i("d3b7"),i("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,i=0;i<e.length;i++)t+=e.charCodeAt(i);var n=function(e,t,i){var n,o,s,r=Math.floor(6*e),a=6*e-r,u=i*(1-t),c=i*(1-a*t),d=i*(1-(1-a)*t);switch(r%6){case 0:n=i,o=d,s=u;break;case 1:n=c,o=i,s=u;break;case 2:n=u,o=i,s=d;break;case 3:n=u,o=c,s=i;break;case 4:n=d,o=u,s=i;break;case 5:n=i,o=u,s=c}return{r:Math.floor(255*n),g:Math.floor(255*o),b:Math.floor(255*s)}}(t%360/360,.3,.9);return""+n.r.toString(16)+n.g.toString(16)+n.b.toString(16)}},"368d":function(e,t,i){e.exports=i.p+"static/img/msg-warning.0c78a551.svg"},"3ef7":function(e,t,i){"use strict";i.r(t);var n=i("efad"),o=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t.default=o.a},"5b5f":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),i("1276");var o=n(i("53ca")),s=i("b95e"),r=i("ce40");e.exports={methods:{wxShare:function(e){var t=this.getUrl(),i=this.$store.getters["jv/get"]("forums/1");i.passport&&!i.passport.offiaccount_close||this.$store.dispatch("jv/get",["offiaccount/jssdk?url=".concat(encodeURIComponent(t)),{}]).then((function(n){var o=n.appId,s=n.nonceStr,a=n.signature,u=n.timestamp;r.config({debug:!1,appId:o,timestamp:u,nonceStr:s,signature:a,jsApiList:["updateAppMessageShareData","updateTimelineShareData","hideMenuItems","showMenuItems"]}),r.ready((function(){var n={title:e.title||"Discuz!Q",desc:e.desc||i.set_site.site_introduction,link:t,imgUrl:e.logo||i.set_site.site_favicon};r.updateAppMessageShareData(n),r.updateTimelineShareData(n)}))}))},h5Share:function(e){var t="";switch((0,o.default)(e)){case"undefined":t="Discuz!Q";break;case"string":t=e;break;default:t=e.title||"Discuz!Q"}var i=e.id?"?id=".concat(e.id):"",n="".concat(s.DISCUZ_REQUEST_HOST).concat(e.url).concat(i),r=document.createElement("input");t=(t=(t=(t=t.toString().replace(/<img(?:.|\s)*?>/g,"")).toString().replace(/(<\/?br.*?>)/gi,"")).toString().replace(/(<\/?p.*?>)/gi,"")).toString().replace(/\s+/g,""),t="".concat(t.substring(0,17)),r.value="".concat(t,"  ").concat(n),document.body.appendChild(r),r.select(),r.readOnly=!0,r.id="copyInp",document.execCommand("Copy"),r.setAttribute("onfocus",this.copyFocus(r)),r.className="oInput",r.style.display="none",uni.showToast({icon:"none",title:"分享链接已复制成功"})},copyFocus:function(e){e.blur(),document.body.removeChild(e)},getUrl:function(){var e=/iPad|iPhone|iPod/.test(navigator.userAgent),t=window.location.href.split("#")[0];return e&&window.entryUrl&&!/wechatdevtools/.test(navigator.userAgent)&&(t=window.entryUrl),t}}}},"5df8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAJKADAAQAAAABAAAAKgAAAAC29n+nAAAEUUlEQVRYCe1YS4gUSRB9mVU1qKjbCLr+wB1BBBk/oAheZEb8I0sj4llc15OHOaws+IEWLwMiDB50/BxmLl482B4Eb7ONehE/BxXxIK7gF12dGT+g3VVpRHZ3TVZNdlV179BeDOiuyIisiFcvoyKzW8CQAiC7crlzv/f0/GGY26mWpJntV2Dgv7GxHaat3XoI6DRwgpL/2W4A8XwaEIHpE8BfceePGLtngAIl/vtHJLflJGKiUs7nu5UQw1Fr20bRom5b2oREYVEnzGmrqyVAcudOiOXLE4Gy3zlwIHGOzdkcINfVMeT69RCLF1fjSXsIsWABZHd3dU4T39UMGW5w9u8HlIJ//vz4bALonT0L//JlODti/XTaNOr7Et7AwPj8mlY+dAh4/36CnQ2ZAalnz+Ds3g3/woUwkFizBpgxA8GdO8DYWGhnRaxcCWbIv3gxYteDz58n2moWO9+W6cGtW0AuB7FsWeh1aOnU3bvAq1dQr19DVSrhB76vGTVtWqcHw9evYYy4kpkhfPgA9eQJJLNCIqZOhVi9GpWTJ/WY2ZBr12pdf02ZopfM3bt33Eaaf+0amO1G0lxjnDsXePsWLoEIhoeh7t2DevGCshAbMZFbt8LZtw/lXbtinsRhKTNDcsMGYOZMHU3QVXZ1IRACYtUqYGQEctOmSCYxa1aVoePHI3Ye+FeuQN2+PcHOhsyAxIoVEPPm0VoRqVxLixZBMkCqG39oCAGxlVnevWs4NTMgv79fBxHr1sE9eBD+1asI6ElDKZcBBpwi6sGDCW+keUtmQPWbnHpNdHQAs2frmmKf3LgRcssW4OPH+tTo1XGA6dNROXoU6uHDqM8YNQWI3ypeKnz6BGfbNjibN6N85Ajw5o0OqZ4/R6W31whvqAsXwjt1yjDY1aYAMTvB9esQnZ0IbtyApLryjh1D+fBh3XPEnDlwiQGrcBtgoW6fJJkbI2+WYskS+JcuVeNRzVT6+qCoyTFbWkgPHj+2ftTTp0k4Ql9mhjQ7N28CL1+GN+PLF1R4yahuuOfwOCiVxv2GJqiHye3bDYtdzQaINkmunYq5sdbjmUVMb5l3hg7F/0OyAQqC6hZBRZso5Nc7uWWSmD8fLi1xmmQDRFHU/ftpsaAIOL+BWjyP2i6Fr22kYulSbVajo4lxMgNKjGJx8vHD5XMPCwOlZdeFzXtfgrQESNH5h3uOKQE1O2EcutSjR/Dp8FYXxUcU7tIp0txunxJsEtw/fwalkpi5U6dGmqQJPwGlETmZDJWEUj2eUp20ow9R4uQO2ABZS30oEouSU+8Y9IrFfwz7HpXP574BvUIIPiD9YvgS1db7EAGhzaEgisV/kzI0CazUPKCMQOIgGRiduvfQf0+9lJSOnVbJDGhUKdVPp+jBNEasaWLGb/k8AytYgKX+LqsD6ScgI7G4LQ87isVBunnQBqzRkhVrjEwqkEZPUPsbsWD181pbHW0wUu7fvgOL85EkK3XjYwAAAABJRU5ErkJggg=="},"6f74":function(e,t,i){"use strict";var n=i("b95e");e.exports={computed:{user:function(){var e=this.$store.getters["session/get"]("userId");return e?this.$store.getters["jv/get"]("users/".concat(e)):{}}},methods:{getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(new Date).getTime(),i=uni.getStorageSync(n.STORGE_GET_USER_TIME);if(e||(t-i)/1e3>60){var o={include:"groups,wechat"},s=this.$store.getters["session/get"]("userId");this.$store.commit("jv/deleteRecord",{_jv:{type:"users",id:s}}),this.$store.dispatch("jv/get",["users/".concat(s),{params:o}]).then((function(){return uni.$emit("updateNotiNum")})),uni.setStorageSync(n.STORGE_GET_USER_TIME,(new Date).getTime())}},logind:function(){var e=this,t=this.$store.getters["session/get"]("userId");if(t){this.$store.dispatch("jv/get",["forum",{params:{include:"users"}}]);this.$store.dispatch("jv/get",["users/".concat(t),{params:{include:"groups,wechat"}}]).then((function(t){e.$u.event.$emit("logind",t)})),this.$store.dispatch("forum/setError",{loading:!1})}}}}},"864e":function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("9558")),s={topic:function(e){var t=(0,o.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,i){var n="/pages/topic/content?id=".concat(t);return'<a href="'.concat(n,'" class="content-topic">').concat(i,"</a> ")}))}))},usermention:function(e){var t=(0,o.default)(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return e&&e.replace(t,(function(e){return e.replace(t,(function(e,t,i){var n="/pages/profile/index?userId=".concat(t);return'<a href="'.concat(n,'" class="content-member">').concat(i,"</a> ")}))}))},attachment:function(e,t){return e&&e.replace(/\[attach\](.*?)\[\/attach\]/g,(function(e,i){var n=t.$store.getters["jv/get"]("attachments/".concat(i));return n.url&&(e='<a href="'.concat(n.url,'" class="content-attachment">').concat(n.attachment,"</a>")),e}))}};var r={parse:function(e,t){if(e){for(var i in s)e=s[i](e,t);return e}}};t.default=r},8820:function(e,t,i){e.exports=i.p+"static/img/published.8537c1b4.svg"},"9ba1":function(e,t,i){"use strict";var n=i("d8ed");i.d(t,"a",(function(){return n.a})),i.d(t,"b",(function(){return n.b})),i.d(t,"c",(function(){return n.c}))},a3de:function(e,t,i){(t=i("24fb")(!1)).push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* eg:\n  .container {\n    color: --color(BG-1);\n  }\n*/.view-content[data-v-d759e65c]{width:100%;height:calc(100vh - %?120?%)}.ioschoice[data-v-d759e65c]{width:100%;height:100vh;padding-top:%?240?%}.ioschoice-img[data-v-d759e65c]{width:%?140?%;height:%?140?%;margin:0 auto}.ioschoice-img-icon[data-v-d759e65c]{width:100%;height:100%}.ioschoice-title[data-v-d759e65c]{margin:%?60?% 0 %?20?%;font-size:%?34?%;font-weight:700;line-height:%?45?%;color:#333;text-align:center}.ioschoice-content[data-v-d759e65c]{font-size:%?28?%;font-weight:400;line-height:%?37?%;color:#aaa;text-align:center}.close-btn[data-v-d759e65c]{width:%?510?%;height:%?90?%;margin:%?50?% auto 0;font-size:%?28?%;font-weight:400;line-height:%?90?%;color:#fff;text-align:center;background:#1878f3;border:%?2?% solid 2px #ededed}[data-v-d759e65c] .my .cell-item,[data-v-d759e65c] .notice-box .cell-item{padding-right:%?40?%}[data-v-d759e65c] .no-border .cell-item{border:0}[data-v-d759e65c] .my-info__box__detail .cell-item__body{height:auto;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}[data-v-d759e65c] .my-tabs .qui-tabs__item--active:after{width:0;height:0}[data-v-d759e65c] .my .qui-tabs__item__title{font-weight:400;color:var(--qui-FC-AAA)}[data-v-d759e65c] .my .qui-tabs__item__brief{font-weight:700}[data-v-d759e65c] .my-info__box__detail .cell-item__body__content-title{font-weight:700}',""]),e.exports=t},b469:function(e,t){e.exports={computed:{forums:function(){return this.$store.getters["jv/get"]("forums/1")}}}},cadb:function(e,t,i){"use strict";i("99af"),i("e25e"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.timestamp2day=t.time2DateAndHM=t.time2MinuteOrHour=void 0;t.time2MinuteOrHour=function(e){var t=new Date-new Date(e);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60),"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60),"小时前"):e.replace(/T/," ").replace(/Z/,"").substring(0,16)};t.time2DateAndHM=function(e){var t=e.replace(/T/," ").replace(/Z/,"");return"".concat(t.substring(0,10)," ").concat(t.substring(11,16))};t.timestamp2day=function(e){var t=e-Math.round(new Date/1e3);return parseInt(t/86400,0)}},d71c:function(e,t,i){i("c975"),e.exports={methods:{detectionModel:function(){var e=uni.getSystemInfoSync().model,t=!1;if(!e)return t;for(var i=["iPhone X","iPhone XR","iPhone XS","iPhone 12","iPhone 12Pro","iPhone 11","iPhone 11Pro","iPhone11","iPhone12","iPhoneXR","iPhoneX"],n=i.length,o=0;o<n;o++)if(-1!==e.indexOf(i[o])){t=!0;break}return t}}}},d8ed:function(e,t,i){"use strict";(function(e){var n;i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));try{n={quiPage:i("29c4").default,quiFooter:i("4bfa").default,quiPageHomeH5:i("2ce2").default,quiPageFind:i("93c6").default,quiPageNotice:i("6b18").default,quiPageMy:i("98c5").default}}catch(t){if(-1===t.message.indexOf("Cannot find module")||-1===t.message.indexOf(".vue"))throw t;e.error(t.message),e.error("1. 排查组件名称拼写是否正确"),e.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),e.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("qui-page",{ref:"quiPage",attrs:{"data-qui-theme":e.theme,header:!1},on:{pageLoaded:function(t){arguments[0]=t=e.$handleEvent(t),e.handlePageLoaded.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"view-content"},[i("v-uni-view",{staticClass:"tabBar"},[i("qui-footer",{ref:"footer-bar",attrs:{bottom:e.detectionModel()?20:0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cut_index.apply(void 0,arguments)}}})],1),e.showHome?i("qui-page-home-h5",{ref:"home",style:{display:0===e.show_index?"block":"none"},attrs:{"show-home":e.showHome,"footer-bar-height":e.footerBarHeight,"home-category-id":e.categoryId,"nav-theme":e.theme},on:{handleClickShare:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClickShare.apply(void 0,arguments)}}}):e._e(),i("qui-page-find",{ref:"quifind",style:{display:1===e.show_index?"block":"none"},attrs:{"nav-theme":e.theme}}),i("qui-page-notice",{ref:"quinotice",style:{display:2===e.show_index?"block":"none"},attrs:{"nav-theme":e.theme}}),i("qui-page-my",{ref:"quimy",style:{display:3===e.show_index?"block":"none"}})],1)],1)],1)},s=[]}).call(this,i("5a52").default)},e972:function(e,t,i){e.exports=i.p+"static/img/msg-404.e11dc2d7.svg"},efad:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("c975"),i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("5530")),s=n(i("b469")),r=n(i("6f74")),a=i("2f62"),u=n(i("d71c")),c=n(i("245f")),d={mixins:[s.default,r.default,u.default,c.default],data:function(){return{nowThreadId:0,showHome:!1,tagId:0,categoryId:"",currentTab:"home",footerBarHeight:50}},computed:(0,o.default)((0,o.default)({},(0,a.mapState)({forumError:function(e){return e.forum.error},footerIndex:function(e){return e.footerTab.footerIndex?parseInt(e.footerTab.footerIndex,10):0}})),{},{loading:function(){return this.forumError.loading},show_index:{get:function(){return this.$store.state.footerTab.footerIndex},set:function(e){if(this.forums.set_site){var t=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];uni.setNavigationBarTitle({title:t[e]})}}}}),mounted:function(){var e,t,i,n,o,s;this.footerBarHeight!==((null===(e=this.$refs["footer-bar"])||void 0===e||null===(t=e.$el)||void 0===t||null===(i=t.firstChild)||void 0===i?void 0:i.offsetHeight)||50)&&(this.footerBarHeight=(null===(n=this.$refs["footer-bar"])||void 0===n||null===(o=n.$el)||void 0===o||null===(s=o.firstChild)||void 0===s?void 0:s.offsetHeight)||50,this.footerBarHeight=this.footerBarHeight?this.footerBarHeight:50)},onLoad:function(e){var t=this;this.categoryId=e.categoryId,this.loading||this.showHome||this.handlePageLoaded(),uni.$on("notiRead",(function(){t.getUserInfo(!0)}))},onPullDownRefresh:function(){var e=this;0===this.show_index&&(this.$refs.home.threads=[],this.$refs.home.isResetList=!0,this.$refs.home.pageNum=1,setTimeout((function(){e.$refs.home.clearScrollerData(),e.$refs.home.loadThreadsSticky(),e.$refs.home.loadThreads()}),100)),1===this.show_index&&(this.$refs.quinotice.dialogList=[],this.$refs.quinotice.pageNum=1,this.$refs.quinotice.ontrueGetList()),2===this.show_index&&this.$refs.quimy.refreshNum(),setTimeout((function(){uni.stopPullDownRefresh()}),0)},onPageScroll:function(e){},onReachBottom:function(){},onShareAppMessage:function(e){if("button"===e.from&&"top"!==e.target.id){var t=this.$store.getters["jv/get"]("/threads/".concat(this.nowThreadId));return{title:1===t.type?t.title:t.firstPost.summaryText,path:"/topic/index?id=".concat(this.nowThreadId)}}return{title:this.forums.set_site.site_name}},onShareTimeline:function(){return{title:this.forums.set_site.site_name,query:""}},onShow:function(){var e=this;if(this.restoreScrollPosition(),this.$refs.home&&this.$refs.home.workFrolazyLoadThreads(),(this.$store.getters["session/get"]("isLogin")||!(["quifind","quinotice","quimy"].indexOf(this.currentTab)>=0))&&("quinotice"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){e.$refs[e.currentTab].getUnreadNoticeNum()})),"quimy"===this.currentTab&&this.$refs[this.currentTab]&&this.$nextTick((function(){e.$refs[e.currentTab].refreshNum()})),this.forums.set_site)){var t=["".concat(this.forums.set_site.site_name," - ").concat(this.forums.set_site.site_title),this.i18n.t("home.find"),this.i18n.t("notice.notice"),this.i18n.t("profile.mine")];uni.setNavigationBarTitle({title:t[this.show_index]})}},methods:(0,o.default)((0,o.default)({},(0,a.mapMutations)({setFooterIndex:"footerTab/SET_FOOTERINDEX"})),{},{restoreScrollPosition:function(){var e,t=window.sessionStorage.getItem("virtual_scroll_top");t&&(null===(e=this.$refs.home)||void 0===e?void 0:e.setScrollerTop)&&this.$refs.home.setScrollerTop(t)},cut_index:function(e,t,i){var n=this;uni.setStorage({key:"page",data:"/pages/home/index"}),1===t&&this.setFooterIndex(1),0===t&&(this.setFooterIndex(0),this.$nextTick((function(){n.restoreScrollPosition()}))),this.currentTab=["home","quifind","quinotice","quimy"][t],!this.$store.getters["session/get"]("isLogin")&&["quinotice","quimy"].indexOf(this.currentTab)>=0&&this.h5LoginMode(),this.show_index=t,-1===i.indexOf(t)&&(this.$refs[this.currentTab].ontrueGetList(),i.push(t))},handleClickShare:function(e){this.nowThreadId=e},handlePageLoaded:function(){this.showHome=!0}}),onUnload:function(){uni.$off("notiRead")}};t.default=d},f3a2:function(e,t,i){var n=i("a3de");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("4f06").default)("08ddedc8",n,!0,{sourceMap:!1,shadowMode:!1})},f5b8:function(e,t,i){"use strict";i.r(t);var n=i("9ba1"),o=i("3ef7");for(var s in o)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(s);i("0f78");var r=i("f0c5"),a=Object(r.a)(o.default,n.b,n.c,!1,null,"d759e65c",null,!1,n.a,void 0);t.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1072:function(e,t,r){"use strict";r(975)},1231:function(e,t,r){"use strict";r.r(t);var n=r(9),o=(r(31),r(52),r(5)),head=r(716),d=r.n(head),c=r(715),l=r.n(c),f=r(797),h=r.n(f),m={name:"Findpwd",mixins:[d.a,h.a,l.a],data:function(){return{title:"".concat(this.$t("modify.forgetPassword"),"  ").concat(this.$t("modify.retrievePassword")),phoneNumber:"",isVerifyDisabled:!0,canCountDown:!1,countDownSecond:60,loading:!1,verifyCode:"",newPassword:"",newPasswordRepeat:"",username:"",validate:!1,code:"",site_mode:"",isPaid:!1}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var e=this.$route.query,t=e.validate,r=e.register,code=e.code;t&&(this.validate=JSON.parse(t)),r&&(this.register=JSON.parse(r)),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.forums&&this.forums.set_reg&&(this.validate=this.forums.set_reg.register_validate)},methods:{onInput:function(e){this.phoneNumber=e.target.value.replace(/[^\d]/g,""),this.isVerifyDisabled=11!==this.phoneNumber.length},countDown:function(e){var t=this;this.canCountDown=!0,this.countDownSecond=e;var r=setInterval((function(){t.countDownSecond-=1,0===t.countDownSecond&&(t.canCountDown=!1,clearInterval(r))}),1e3)},sendVerifyCode:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={_jv:{type:"sms/send"},mobile:e.phoneNumber,type:"reset_pwd"},t.next=3,e.checkCaptcha(r);case 3:r=t.sent,o.status.run((function(){return e.$store.dispatch("jv/post",r)})).then((function(t){t.interval&&e.countDown(t.interval)}),(function(t){var r=t.response.data.errors;if(r[0])return e.$message.error(r[0].detail[0])}));case 5:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;if(""===this.verifyCode)this.$message.error("验证码不能为空");else if(""===this.newPassword)this.$message.error("新密码不能为空");else if(""===this.newPasswordRepeat)this.$message.error("重复密码不能为空");else if(this.newPassword!==this.newPasswordRepeat)this.$message.error("二次密码输入不一致");else{var t={_jv:{type:"sms/verify"},mobile:this.phoneNumber,code:this.verifyCode,password:this.newPassword,type:"reset_pwd"};o.status.run((function(){return e.$store.dispatch("jv/post",t)})).then((function(t){window.localStorage.setItem("username",t.username),e.$router.push("/modify/resetpwdsuccess")}),(function(t){return e.handleError(t)}))}}}},v=(r(1072),r(11)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-find-pwd"},[r("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("modify.forgetPassword"))+"\\"+e._s(e.$t("modify.retrievePassword")))]),e._v(" "),r("div",{staticClass:"describe"},[e._v(" "+e._s(e.$t("modify.retrievePasswordByPhone")))]),e._v(" "),r("div",{staticClass:"retrieve-inputs"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{maxlength:"11",type:"text",placeholder:e.$t("modify.placeEnterRegisteredPhone")},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}}),e._v(" "),e.canCountDown?r("button",{class:{disabled:e.canCountDown},attrs:{disabled:e.canCountDown}},[e._v(e._s(e.countDownSecond+e.$t("modify.retransmission")))]):r("button",{on:{click:e.sendVerifyCode}},[e._v("\n        "+e._s(e.$t("modify.sendVerifyCode"))+"\n      ")])]),e._v(" "),r("el-input",{attrs:{maxlength:"6",placeholder:e.$t("modify.placeEnterCode")},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}}),e._v(" "),r("el-input",{attrs:{placeholder:e.$t("modify.enterNew"),"show-password":""},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),e._v(" "),r("el-input",{attrs:{placeholder:e.$t("modify.resetrepeatpass"),"show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.newPasswordRepeat,callback:function(t){e.newPasswordRepeat=t},expression:"newPasswordRepeat"}})],1),e._v(" "),r("button",{staticClass:"submit",on:{click:e.submit}},[e._v(e._s(e.$t("modify.submit")))])])}),[],!1,null,"708dc53a",null);t.default=component.exports},715:function(e,t,r){var n=r(728);r(31),r(52),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error?code=permissionDenied")}}}}},methods:{handleError:function(e){var t=arguments,r=this;return n(regeneratorRuntime.mark((function n(){var o,d,c,l,f,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",d=e.response.data.errors,!(Array.isArray(d)&&d.length>0)){n.next=17;break}if(c=d[0].code,l=d[0].detail&&d[0].detail.length>0?d[0].detail[0]:d[0].code,f=d[0].detail&&d[0].detail.length>0?d[0].detail[0]:r.$t("core.".concat(l)),"site_closed"!==d[0].code){n.next=10;break}return n.next=9,r.siteClose(d);case 9:return n.abrupt("return",n.sent);case 10:if("need_ext_fields"!==d[0].code){n.next=14;break}return h=r.$store.getters["session/get"]("userId"),r.$router.push("/user/supple-mentary?id=".concat(h)),n.abrupt("return");case 14:"Permission Denied"===c?r.$message.error(r.$t("core.permission_denied2")):"content_banned_show_words"===c?r.$message.error(r.$t("core.content_banned_show_words")+d[0].detail):r.$message.error(f),r.errorCodeHandler.default[c]&&r.errorCodeHandler.default[c](),o&&r.errorCodeHandler[o][c]&&r.errorCodeHandler[o][c]();case 17:case"end":return n.stop()}}),n)})))()},siteClose:function(e){var t=this;return n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return r.next=5,t.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},716:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},728:function(e,t){function r(e,t,r,n,o,d,c){try{var l=e[d](c),f=l.value}catch(e){return void r(e)}l.done?t(f):Promise.resolve(f).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,d){var c=e.apply(t,n);function l(e){r(c,o,d,l,f,"next",e)}function f(e){r(c,o,d,l,f,"throw",e)}l(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},797:function(e,t,r){r(13),e.exports={computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},methods:{checkCaptcha:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(r,n){if(e.forums&&e.forums.qcloud&&e.forums.qcloud.qcloud_captcha)return new TencentCaptcha(e.forums.qcloud.qcloud_captcha_app_id,(function(e){0===e.ret&&(t.captcha_rand_str=e.randstr,t.captcha_ticket=e.ticket,r(t))})).show();r(t)}))}}}},975:function(e,t,r){}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{538:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},551:function(e,t,n){},598:function(e,t,n){n(11);var r=n(602);e.exports={mixins:[r],computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},methods:{checkCaptcha:function(e){var t=this;return new Promise((function(n,r){if(t.forums&&t.forums.qcloud&&t.forums.qcloud.qcloud_captcha)return new TencentCaptcha(t.forums.qcloud.qcloud_captcha_app_id,(function(t){0===t.ret?(e.captcha_rand_str=t.randstr,e.captcha_ticket=t.ticket,n(e)):r(t)})).show();n(e)}))}}}},603:function(e,t,n){"use strict";var r=n(551);n.n(r).a},605:function(e,t,n){"use strict";n.r(t);var r={name:"RegAgreement",props:{check:{type:Boolean,default:!0}},data:function(){return{forums:"",popTitle:"",popDetail:"",showagree:!1,checked:!0}},mounted:function(){this.getAttachMent()},methods:{getAttachMent:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users","filter[tag]":"agreement"}}]).then((function(t){e.forums=t}))},open:function(e){this.$router.push("/user/agreement?type=".concat(e))},rcheck:function(){this.$emit("check",this.checked)}}},o=(n(603),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.forums.agreement&&e.forums.agreement.register||e.forums.agreement&&e.forums.agreement.privacy?n("div",{staticClass:"reg-agreement"},[e.check?n("el-checkbox",{on:{change:e.rcheck},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):e._e(),e._v(" "),n("span",{staticClass:"agree"},[e._v(e._s(e.$t("permission.user.agreement")))]),e._v(" "),e.forums.agreement&&e.forums.agreement.register?n("span",{staticClass:"regagree",on:{click:function(t){return e.open("register")}}},[e._v(e._s("《"+this.$t("permission.user.agreementRegister")+"》")+"\n  ")]):e._e(),e._v(" "),e.forums.agreement&&e.forums.agreement.privacy?n("span",{staticClass:"regagree",on:{click:function(t){return e.open("privacy")}}},[e._v(e._s("《"+this.$t("permission.user.agreementPrivacy")+"》")+"\n  ")]):e._e()],1):e._e()}),[],!1,null,"1f4f9d70",null);t.default=component.exports},650:function(e,t){e.exports={methods:{countDown:function(e){var t=this;if(this.canClick){var n=e;this.canClick=!1,this.content=n+this.$t("modify.retransmission");var r=setInterval((function(){n-=1,t.content=n+t.$t("modify.retransmission"),n<0&&(clearInterval(r),t.content=t.$t("modify.sendVerifyCode"),t.canClick=!0)}),1e3)}}}}},742:function(e,t,n){},894:function(e,t,n){"use strict";var r=n(742);n.n(r).a},977:function(e,t,n){"use strict";n.r(t);n(32);var r=n(8),o=(n(51),n(5)),head=n(538),c=n.n(head),d=n(537),l=n.n(d),h=n(598),m=n.n(h),f=n(650),v=n.n(f),_=n(178),k=n.n(_),C={name:"WechatBindPhone",mixins:[c.a,l.a,m.a,v.a,k.a],data:function(){return{title:"登录/注册并绑定手机号",phoneNumber:"",content:this.$t("modify.sendVerifyCode"),activeName:"0",verifyCode:"",code:"",site_mode:"",isPaid:!1,canClick:!0,ischeck:!0,loading:!1,nickname:"",headimgurl:"",token:"",preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}},userInfo:function(){return this.$store.state.user.info.attributes||{}}},mounted:function(){var e=this.$route.query,code=e.code,t=e.nickname,n=e.headimgurl,r=e.preurl;r&&(this.preurl=r),this.token=localStorage.getItem("wechat"),t&&(this.nickname=t),n&&(this.headimgurl=n),"undefined"!==code&&(this.code=code)},methods:{check:function(e){this.ischeck=e},changeinput:function(){var e=this;setTimeout((function(){e.phoneNumber=e.phoneNumber.replace(/[^\d]/g,"")}),30),11===this.phoneNumber.length?this.canClick=!0:this.canClick=!1},sendVerifyCode:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={_jv:{type:"sms/send"},mobile:e.phoneNumber,type:"login"},t.next=3,e.checkCaptcha(n);case 3:n=t.sent,o.status.run((function(){return e.$store.dispatch("jv/post",n)})).then((function(t){t.interval&&e.countDown(t.interval)}),(function(t){return e.handleError(t)}));case 5:case"end":return t.stop()}}),t)})))()},PhoneLogin:function(){var e=this;if(this.loading=!0,""===this.phoneNumber)this.$message.error("手机号不能为空"),this.loading=!1;else if(""===this.verifyCode)this.$message.error("验证码不能为空"),this.loading=!1;else{var t={data:{attributes:{mobile:this.phoneNumber,code:this.verifyCode,type:"login",register:1,token:this.token}}};this.code&&"undefined"!==this.code&&(t.data.attributes.inviteCode=this.code),this.$store.dispatch("session/verificationCodeh5Login",t).then((function(t){if(e.loading=!1,t&&t.data&&t.data.data&&t.data.data.id&&e.logind(t),t&&t.data&&t.data.errors&&"no_bind_user"===t.data.errors[0].code){var n=t.data.errors[0].token;return localStorage.setItem("mobileToken",n),void e.logind(t)}if(t&&t.data&&t.data.errors&&"register_validate"===t.data.errors[0].code)e.$router.push("/user/warning?username=".concat(e.phoneNumber));else if(t&&t.data&&t.data.errors&&t.data.errors[0]){var r=t.data.errors[0].detail?t.data.errors[0].detail[0]:t.data.errors[0].code,o=t.data.errors[0].detail?t.data.errors[0].detail[0]:e.$t("core.".concat(r));e.$message.error(o)}})).catch((function(t){e.loading=!1,e.handleError(t)}))}}}},y=(n(894),n(12)),component=Object(y.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.forums?n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"register"},[n("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"登录/注册并绑定手机号",name:"0"}},[n("form",[n("div",{staticClass:"bindtext"},[n("div",[e._v("\n            "+e._s(e.$t("user.dear"))+"\n            "),n("avatar",{staticStyle:{display:"inline-block","vertical-align":"text-top"},attrs:{user:{username:e.nickname,avatarUrl:e.headimgurl},size:20,round:!0}}),e._v(" "),n("b",[e._v(e._s(e.nickname||""))]),e._v(" "+e._s(e.$t("user.user"))+"\n          ")],1),e._v(" "),n("div",[e._v("\n            "+e._s(e.$t("user.yourWechat"))+"\n            "),n("b",[e._v(e._s(e.$t("user.withoutBind")))]),e._v("，"),n("b",[e._v(e._s(e.$t("user.register"))+"/"+e._s(e.$t("user.login")))]),e._v("\n            "+e._s(e.$t("user.readyBInd"))+"\n          ")])]),e._v(" "),n("span",{staticClass:"title2"},[e._v(e._s(e.$t("profile.mobile")))]),e._v(" "),n("el-input",{staticClass:"phone-input",attrs:{placeholder:e.$t("user.phoneNumber"),maxlength:"11"},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}}),e._v(" "),n("el-button",{staticClass:"count-b",class:{disabled:!e.canClick},attrs:{size:"middle"},on:{click:e.sendVerifyCode}},[e._v(e._s(e.content))]),e._v(" "),n("span",{staticClass:"title3"},[e._v(e._s(e.$t("user.verification")))]),e._v(" "),n("el-input",{staticClass:"reg-input",attrs:{placeholder:e.$t("user.verificationCode")},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.PhoneLogin(t)}},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}}),e._v(" "),n("div",{staticClass:"agreement"},[n("reg-agreement",{on:{check:e.check}})],1),e._v(" "),n("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:e.PhoneLogin}},[e._v("\n          注册/登录，并绑定")])],1)])],1)],1):e._e()}),[],!1,null,"1b78c57f",null);t.default=component.exports;installComponents(component,{Avatar:n(267).default,RegAgreement:n(605).default})}}]);
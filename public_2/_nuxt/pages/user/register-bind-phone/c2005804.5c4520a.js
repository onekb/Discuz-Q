(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1141:function(t,e,r){"use strict";var o=r(982);r.n(o).a},1229:function(t,e,r){"use strict";r.r(e);var head=r(753),o=r.n(head),n=r(752),d=r.n(n),c=r(179),h=r.n(c),l=r(821),_={name:"RegisterBindPhone",mixins:[o.a,d.a,l,h.a],data:function(){return{title:this.$t("profile.register"),userName:"",passWord:"",repeatPassWord:"",activeName:"0",validate:!1,code:"",register_captcha:!1,site_mode:"",isPaid:!1,captcha:null,ticket:"",randstr:"",ischeck:!0,loading:!1,passerror:!1,mobileToken:"",phoneNumber:"",preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var t=this.$route.query,e=t.validate,code=t.code,r=t.phoneNumber,o=t.preurl;o&&(this.preurl=o),this.mobileToken=localStorage.getItem("mobileToken"),r&&(this.phoneNumber=r),e&&(this.validate=JSON.parse(e)),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha&&(this.register_captcha=this.forums.set_reg.register_captcha),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.forums&&this.forums.set_reg&&(this.validate=this.forums.set_reg.register_validate)},methods:{notsame:function(){this.passWord!==this.repeatPassWord?this.passerror=!0:this.passerror=!1},check:function(t){this.ischeck=t},register:function(){""===this.userName?this.$message.error("用户名不能为空"):""===this.passWord?this.$message.error("密码不能为空"):this.passWord!==this.repeatPassWord?(this.$message.error("两次输入的密码不一致,请重新输入"),this.passWord="",this.repeatPassWord="",this.passerror=!0):this.ischeck?this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha?this.toTCaptcha():this.registerClick():this.$message.error("请同意协议")},toTCaptcha:function(){var t=this;this.forums&&this.forums.qcloud&&this.forums.qcloud.qcloud_captcha_app_id&&(this.captcha=new TencentCaptcha(this.forums.qcloud.qcloud_captcha_app_id,(function(e){0===e.ret&&(t.ticket=e.ticket,t.randstr=e.randstr,t.registerClick())})),this.captcha.show())},registerClick:function(){var t=this;this.loading=!0;var e={data:{attributes:{username:this.userName,password:this.passWord,mobileToken:this.mobileToken,register_type:this.forums&&this.forums.set_reg&&this.forums.set_reg.register_type||0}}};this.register_captcha&&this.validate&&(e.data.attributes.captcha_ticket=this.ticket,e.data.attributes.captcha_rand_str=this.randstr),this.register_captcha&&(e.data.attributes.captcha_ticket=this.ticket,e.data.attributes.captcha_rand_str=this.randstr),""!==this.code&&(e.data.attributes.code=this.code),this.$store.dispatch("session/h5Register",e).then((function(e){if(t.loading=!1,e&&e.data&&e.data.data&&e.data.data.id&&t.logind(e),e&&e.data&&e.data.errors&&"register_validate"===e.data.errors[0].code)return t.$store.commit("session/SET_AUDIT_INFO",{errorCode:"register_validate",username:t.userName}),void t.$router.push("/user/warning");if(e&&e.data&&e.data.errors&&"content_banned"===e.data.errors[0].code)t.$message.error("当前用户名包含禁止注册的词语");else if(e&&e.data&&e.data.errors&&e.data.errors[0]){var r=e.data.errors[0].detail?e.data.errors[0].detail[0]:e.data.errors[0].code,o=e.data.errors[0].detail?e.data.errors[0].detail[0]:t.$t("core.".concat(r));t.$message.error(o)}})).catch((function(e){t.loading=!1,t.passWord="",t.repeatPassWord=""}))},jump2Login:function(){this.$router.push("/user/login-bind-phone?&validate=".concat(this.validate,"\n        &code=").concat(this.code,"&phoneNumber=").concat(this.phoneNumber,"&preurl=").concat(this.preurl))}}},m=(r(1141),r(11)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.forums?r("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"register"},[r("div",{staticClass:"register-header"},[t._v(t._s(t.$t("user.registerBindPhone")))]),t._v(" "),r("div",{staticClass:"register-content"},[r("form",[r("div",{staticClass:"bindtext"},[r("div",[t._v("\n          "+t._s(t.$t("user.phoneuser"))+" "),r("b",[t._v(t._s(t.phoneNumber))]),t._v("\n          "+t._s(t.$t("user.user"))+"\n        ")]),t._v(" "),r("div",[t._v("\n          "+t._s(t.$t("user.yourPhone"))+"\n          "),r("b",[t._v(t._s(t.$t("user.withoutBind")))]),t._v("，"),r("b",[t._v(t._s(t.$t("user.register")))]),t._v(t._s(t.$t("user.readyBInd"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"input-box"},[r("span",{staticClass:"title"},[t._v(t._s(t.$t("profile.username")))]),t._v(" "),r("el-input",{attrs:{placeholder:t.$t("user.username")},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),t._v(" "),r("div",{staticClass:"input-box"},[r("span",{staticClass:"title"},[t._v(t._s(t.$t("user.passwd")))]),t._v(" "),r("el-input",{attrs:{placeholder:t.$t("user.password"),type:"password","show-password":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}})],1),t._v(" "),r("div",{staticClass:"input-box",class:{rep:t.passerror}},[r("span",{staticClass:"title"},[t._v(t._s(t.$t("user.repeatpasswd")))]),t._v(" "),r("el-input",{attrs:{placeholder:t.$t("user.password"),type:"password","show-password":""},on:{input:t.notsame},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.register(e)}},model:{value:t.repeatPassWord,callback:function(e){t.repeatPassWord=e},expression:"repeatPassWord"}}),t._v(" "),t.passerror?r("div",{staticClass:"passerror"},[t._v("\n          "+t._s(t.$t("modify.reenter"))+"\n        ")]):t._e()],1),t._v(" "),r("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:t.register}},[t._v("\n        注册并绑定\n      ")]),t._v(" "),r("div",{staticClass:"agreement"},[r("reg-agreement",{on:{check:t.check}})],1),t._v(" "),r("div",{staticClass:"tologin"},[r("span",{on:{click:t.jump2Login}},[t._v("\n          "+t._s(t.$t("user.exist"))+"\n          "),r("nuxt-link",{attrs:{to:"/user/login-bind-phone"}},[t._v("登录并绑定")])],1)])],1)])]):t._e()}),[],!1,null,"4c79350b",null);e.default=component.exports;installComponents(component,{RegAgreement:r(904).default})},982:function(t,e,r){}}]);
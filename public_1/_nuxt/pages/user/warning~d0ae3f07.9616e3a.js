(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1020:function(t,e,n){},1152:function(t,e,n){"use strict";n(1020)},1243:function(t,e,n){"use strict";n.r(e);var head=n(713),r={name:"Warning",mixins:[n.n(head).a],data:function(){return{username:"",errorReson:"",errorCode:""}},mounted:function(){var t=this.$store.state.session.auditInfo,e=t.username,n=t.reason,r=t.errorCode;e&&(this.username=e),n&&(this.errorReson=n),r&&(this.errorCode=r)},methods:{}},o=(n(1152),n(11)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("div",{staticClass:"info-icon"},["validate_reject"===t.errorCode?n("svg-icon",{staticClass:"icon-userLocking",attrs:{type:"userLocking"}}):n("svg-icon",{staticClass:"icon-userWait",attrs:{type:"userWait"}})],1),t._v(" "),n("h2",{staticClass:"info-title"},[t._v("\n    "+t._s("validate_reject"===t.errorCode?t.$t("core.validateReject"):t.$t("core.registerValidate"))+"\n  ")]),t._v(" "),n("div",{staticClass:"payinfo"},["validate_reject"===t.errorCode?n("p",{staticClass:"payinfo-title"},[t._v("\n      "+t._s(t.username&&""+t.username)+" ，您好。您的账户未能通过审核 原因："+t._s(t.errorReson&&""+t.errorReson)+"。\n    ")]):n("p",{staticClass:"payinfo-title"},[t._v("\n      "+t._s(t.username&&""+t.username)+"，您好。您已注册，请耐心等待审核。\n    ")])])])}),[],!1,null,"846ede76",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default})},713:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}}}]);
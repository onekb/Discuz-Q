(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1132:function(t,e,n){"use strict";var r=n(973);n.n(r).a},1221:function(t,e,n){"use strict";n.r(e);var r={name:"Agreement",data:function(){return{type:"",forums:"",popTitle:"‎",popDetail:""}},mounted:function(){var t=this.$route.query.type;this.type=t,this.getAttachMent()},methods:{getAttachMent:function(){var t=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users","filter[tag]":"agreement"}}]).then((function(e){t.forums=e,t.open(t.type)}))},open:function(t){"register"===t?(this.popTitle=this.$t("permission.user.agreementRegister"),this.popDetail=this.forums.agreement.register_content):(this.popTitle=this.$t("permission.user.agreementPrivacy"),this.popDetail=this.forums.agreement.privacy_content)}},head:function(){return{title:this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.popTitle," - ").concat(this.forums.set_site.site_name):this.popTitle}}},o=(n(1132),n(11)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"agreement"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[this._v(this._s(this.popTitle))]),this._v(" "),e("div",{staticClass:"content"},[this._v(this._s(this.popDetail))])])])}),[],!1,null,"cf161846",null);e.default=component.exports},973:function(t,e,n){}}]);
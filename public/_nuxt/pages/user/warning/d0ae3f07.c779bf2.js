(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{519:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.title+" - "+this.forums.set_site.site_name:this.title}}}},719:function(t,e,n){},869:function(t,e,n){"use strict";var r=n(719);n.n(r).a},940:function(t,e,n){"use strict";n.r(e);var head=n(519),r={name:"Warning",mixins:[n.n(head).a],data:function(){return{title:this.$t("core.registerValidate"),username:""}},mounted:function(){var t=this.$route.query.username;t&&(this.username=t)},methods:{home:function(){this.$router.push("/")}}},o=(n(869),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h2",{staticClass:"info-title"},[t._v(t._s(t.$t("core.registerValidate")))]),t._v(" "),n("div",{staticClass:"payinfo"},[n("p",{staticClass:"payinfo-title"},[t._v('感谢"'+t._s(t.username)+'"用户您的注册')]),t._v(" "),n("p",[n("span",{staticClass:"color"},[t._v(t._s(t.$t("core.regcode")))])]),t._v(" "),n("el-button",{staticClass:"h-button1",attrs:{type:"primary",plain:"",size:"small"},on:{click:t.home}},[t._v("返回首页")])],1)])}),[],!1,null,"1e37e6fe",null);e.default=component.exports}}]);
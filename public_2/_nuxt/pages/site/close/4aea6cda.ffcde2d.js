(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1120:function(t,e,n){"use strict";var r=n(956);n.n(r).a},1211:function(t,e,n){"use strict";n.r(e);n(32);var r=n(8),o=(n(51),{name:"Close",data:function(){return{close_tips:"",forums:""}},mounted:function(){var t=this;this.getSiteInfo(),this.$store.dispatch("jv/get","/forum").then((function(e){t.forums=e,t.forums&&t.forums.set_site&&!t.forums.set_site.site_close&&window.location.replace("/")}))},methods:{getSiteInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$store.state.forum.error,t.close_tips=n?n.detail:"";case 2:case"end":return e.stop()}}),e)})))()}},head:function(){return{title:this.$t("site.siteClose")}}}),c=(n(1120),n(11)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"close-info"},[e("div",{staticClass:"title"},[this._v("抱歉，论坛暂时关闭")]),this._v(" "),e("div",{staticClass:"text"},[this._v("管理员关闭了论坛，请稍后访问。")]),this._v(" "),e("div",{staticClass:"time"},[this._v(this._s(this.close_tips))])])}),[],!1,null,"09d8d6ba",null);e.default=component.exports},956:function(t,e,n){}}]);
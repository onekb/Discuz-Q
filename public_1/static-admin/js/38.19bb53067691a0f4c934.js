(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{Gj3Q:function(t,e,s){"use strict";s.r(e);var n=s("Nky3"),a=s("cn2k");for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);var i=s("KHd+"),o=Object(i.a)(a.default,n.a,n.b,!1,null,null,null);e.default=o.exports},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,a,r,i,o){var c,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=s,_._compiled=!0),n&&(_.functional=!0),r&&(_._scopeId="data-v-"+r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},_._ssrRegister=c):a&&(c=o?function(){a.call(this,(_.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(_.functional){_._injectStyles=c;var d=_.render;_.render=function(t,e){return c.call(e),d(t,e)}}else{var l=_.beforeCreate;_.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:_}}s.d(e,"a",(function(){return n}))},Nky3:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a}));var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-box"},[s("Card",{staticClass:"home-card-box",staticStyle:{border:"0",padding:"0"},attrs:{id:"other_content_header",intercept:"true"}}),t._v(" "),s("Card",{staticClass:"home-card-box",attrs:{header:"待处理事项",intercept:"true"}},[s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的主题数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/cont-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedThreads)+" )")])],1),t._v(" "),s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的回复数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/reply-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedPosts)+" )")])],1),t._v(" "),s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的提现数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/withdrawal-application"}},[t._v("( "+t._s(t.siteInfo.unapprovedMoneys)+" )")])],1),t._v(" "),s("p",{staticClass:"pending-p"},[t._v("\n      等待审核的用户数\n      "),s("router-link",{staticStyle:{color:"#336699"},attrs:{to:"/admin/user-review"}},[t._v("( "+t._s(t.siteInfo.unapprovedUsers)+" )")])],1)]),t._v(" "),s("Card",{staticClass:"home-card-box",attrs:{header:"系统信息",intercept:"true"}},[s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("Discuz!程序版本：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.version))]),t._v(" "),t.newVersion?s("span",{staticClass:"section-title section-title-right"},[s("span",[t._v("[")]),t._v(" "),s("a",{attrs:{href:"https://discuz.com/docs/release_notes.html",target:"_blank"}},[t._v("新版本： "+t._s(t.versionNumber))]),t._v(" "),s("span",[t._v("]")])]):t._e()]),t._v(" "),s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("服务器系统及PHP：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.php_version))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("服务器软件：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.server_software))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("服务器MySQL版本：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.db))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("上传许可：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.upload_size))])]),t._v(" "),s("p",{staticClass:"section"},[s("span",{staticClass:"section-title"},[t._v("当前数据库尺寸：")]),t._v(" "),s("span",[t._v(t._s(t.siteInfo.db_size))])])]),t._v(" "),s("Card",{staticClass:"home-card-box home-card__footer",attrs:{id:"other_content_footer",header:"相关链接"}},[s("a",{attrs:{href:"https://discuz.chat/manual-admin/",target:"_blank"}},[t._v("使用手册")]),t._v(" "),s("a",{attrs:{href:"https://www.discuz.com",target:"_blank"}},[t._v("Discuz! Q 官方")]),t._v(" "),s("a",{attrs:{href:"https://www.discuz.chat",target:"_blank"}},[t._v("支持论坛")]),t._v(" "),s("a",{attrs:{href:"https://cloud.tencent.com/",target:"_blank"}},[t._v("腾讯云")]),t._v(" "),s("a",{attrs:{href:"http://www.dnspod.cn/",target:"_blank"}},[t._v("DNSPod")]),t._v(" "),s("a",{attrs:{href:"https://da.do/hmos",target:"_blank"}},[t._v("免费SSL证书")])])],1)},a=[]},c1W9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(s("4gYi"));a(s("vDqi"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{siteInfo:{},newVersion:!1,versionNumber:"",oldVersion:""}},created:function(){var t=this;this.appFetch({url:"siteinfo",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.siteInfo=e.data.attributes,t.oldVersion=e.data.attributes.version,t.compareSize())}))},methods:{compareSize:function(){this.versionNumber=dzq_latest_ver();var t=this.versionNumber.replace(/[^\d]/g,""),e=this.oldVersion.replace(/[^\d]/g,"");this.newVersion=t>e}},components:{Card:n.default}}},cn2k:function(t,e,s){"use strict";s.r(e);var n=s("rTpx"),a=s.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);e.default=a.a},rTpx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(s("QbLZ"));s("lpfh");var a=r(s("c1W9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({name:"home-view"},a.default)}}]);
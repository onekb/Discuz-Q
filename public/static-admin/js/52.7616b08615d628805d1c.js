(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{OQIx:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"worth-mention-box"},[n("div",{staticClass:"worth-mention__default"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.settingStatus}},[n("el-table-column",{attrs:{prop:"date",label:"微信设置类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"pay-set-type-box"},[n("i",{staticClass:"iconfont table-icon",class:e.row.icon}),t._v(" "),n("div",{staticClass:"table-con-box"},[n("p",[t._v(t._s(e.row.name))]),t._v(" "),n("p",[t._v(t._s(e.row.description))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.status?n("span",{staticClass:"iconfont iconicon_select"}):n("span",{staticClass:"iconfont iconicon_"})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.status?n("div",["oplatform_close"!==e.row.type?n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.configClick(e.row.tag)}}},[t._v("配置")]):t._e(),t._v(" "),n("el-button",{attrs:{size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),t.loginSetting(e.$index,e.row.type,"0")}}},[t._v("关闭")])],1):n("div",["oplatform_close"!==e.row.type?n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.configClick(e.row.tag)}}},[t._v("配置")]):t._e(),t._v(" "),n("el-button",{attrs:{size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),t.loginSetting(e.$index,e.row.type,"1")}}},[t._v("开启")])],1)]}}])})],1)],1)])},a=[]},Y29O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(n("4gYi")),a=s(n("pNQN"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{forums:"",loginStatus:"default",settingStatus:[{name:"公众号接口配置",type:"offiaccount_close",tag:"wx_offiaccount",description:"用户在微信内使用微信授权登录",status:"",icon:"iconH"},{name:"小程序配置",type:"miniprogram_close",tag:"wx_miniprogram",description:"用户在小程序使用微信授权登录",status:"",icon:"iconxiaochengxu"},{name:"PC端微信扫码登录",type:"oplatform_close",tag:"wx_oplatform",description:"用户在PC的网页使用微信扫码登录",status:"",icon:"iconweixin"}]}},created:function(){this.loadStatus()},methods:{loadStatus:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(res.errors[0].code):(t.forums=e.readdata._data,"0"==e.readdata._data.passport.offiaccount_close?t.settingStatus[0].status=!1:t.settingStatus[0].status=!0,"0"==e.readdata._data.passport.miniprogram_close?t.settingStatus[1].status=!1:t.settingStatus[1].status=!0,"0"==e.readdata._data.passport.oplatform_close?t.settingStatus[2].status=!1:t.settingStatus[2].status=!0)})).catch((function(t){}))},configClick:function(t){this.$router.push({path:"/admin/worth-mentioning-config/h5wx",query:{type:t}})},loginSetting:function(t,e,n){if("1"==n){if(!("offiaccount_close"!=e||this.forums.passport.offiaccount_app_id&&this.forums.passport.offiaccount_app_secret))return void this.$message.error("请先填写配置再开启");if(!("miniprogram_close"!=e||this.forums.passport.miniprogram_app_id&&this.forums.passport.miniprogram_app_secret))return void this.$message.error("请先填写配置再开启")}"offiaccount_close"==e?this.changeSettings("offiaccount_close",n,"wx_offiaccount"):"miniprogram_close"==e?this.changeSettings("miniprogram_close",n,"wx_miniprogram"):this.changeSettings("oplatform_close",n,"wx_oplatform")},changeSettings:function(t,e,n){var o=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:t,value:e,tag:n}}]}}).then((function(t){t.errors?o.$message.error(t.errors[0].code):(o.$message({message:"修改成功",type:"success"}),o.loadStatus())})).catch((function(t){o.$message.error("修改失败")}))}},components:{Card:o.default,CardRow:a.default}}},dKQ8:function(t,e,n){"use strict";n.r(e);var o=n("kl61"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e.default=a.a},"e/0E":function(t,e,n){"use strict";n.r(e);var o=n("OQIx"),a=n("dKQ8");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var i=n("KHd+"),r=Object(i.a)(a.default,o.a,o.b,!1,null,null,null);e.default=r.exports},kl61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(n("QbLZ")),a=s(n("Y29O"));function s(t){return t&&t.__esModule?t:{default:t}}n("lpfh"),e.default=(0,o.default)({name:"worth-mentioning-set-view"},a.default)}}]);
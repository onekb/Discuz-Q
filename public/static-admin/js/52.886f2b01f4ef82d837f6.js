(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"+VvL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selectedTheme:1,newTheme:1,currentUrl:"",isPreview:!1,dialogVisible:!1,Loading:""}},mounted:function(){this.getThemeSelect()},methods:{showPreview:function(e){this.currentUrl=e.target.getAttribute("src"),this.isPreview=!0},closePreview:function(){this.isPreview=!1,this.currentUrl=""},getThemeSelect:function(){var e=this;this.appFetch({url:"forum",methods:"get"}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.selectedTheme=t.data.attributes.set_site.site_skin,e.newTheme=t.data.attributes.set_site.site_skin)})).catch((function(e){}))},submitThemeSelect:function(){var e=this,t="";t=1===this.selectedTheme&&2===this.newTheme?'\n          <p style="text-indent:2em;">您确定要切换红色三栏版本吗？</p>\n          <p style="text-indent:2em;;margin-top:10px;">\n            <span style="color:red">温馨小提示：</span>\n            小程序请参考安装手册，重新获取、提交红色三栏的源码。\n          </p>\n        ':2===this.selectedTheme&&1===this.newTheme?'\n          <p style="text-indent:2em;">\n            蓝色两栏版本功能升级中，现在切换回蓝色两栏版本时，\n            将会暂时丢失红色三栏版本下的红包、悬赏帖，您确定要切换吗？\n          </P>\n          <p style="text-indent:2em;margin-top:10px;">\n            <span style="color:red;">温馨小提示：</span>\n            小程序请参考安装手册，重新获取、提交蓝色两栏的源码。\n          </p>\n        ':"相同的提交可能不生效。",this.$confirm(t,"确认信息",{dangerouslyUseHTMLString:!0,confirmButtonText:"确认",cancelButtonText:"取消",type:"success"}).then((function(){e.postThemeSelect()})).catch((function(t){e.$message({type:"info",message:"取消成功"})}))},postThemeSelect:function(){var e=this;this.loading=this.$loading({lock:!0,text:"正在切换...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)"}),this.appFetch({url:"switchskin",method:"post",data:{data:{attributes:{skin:this.newTheme}}}}).then((function(t){e.handleResult(t)})).catch((function(t){e.loading.close()}))},handleResult:function(e){var t=this;if(this.loading.close(),e.errors&&"500"===e.errors[0].status)return this.$message.warning(e.rawData[0].code);e.data&&200===e.data.attributes.code?(this.$message.success(e.data.attributes.message),this.selectedTheme=e.data.attributes.site_skin,this.newTheme=e.data.attributes.site_skin):this.$confirm(e,"提示信息",{dangerouslyUseHTMLString:!0,confirmButtonText:"重试",cancelButtonText:"取消",type:"info"}).then((function(){t.postThemeSelect()})).catch((function(e){t.$message({type:"info",message:"取消成功"})}))}}}},WT5M:function(e,t,n){"use strict";n.r(t);var s=n("pnAt"),i=n.n(s);for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);t.default=i.a},edKC:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-theme-box"},[n("div",{staticClass:"site-theme-head"},[e._v("选择主题：")]),e._v(" "),n("div",{staticClass:"site-theme-content"},[n("div",{staticClass:"left"},[n("el-radio",{attrs:{label:1},model:{value:e.newTheme,callback:function(t){e.newTheme=t},expression:"newTheme"}},[e._v("\n          蓝色两栏\n          "),e._v(" "),n("img",{ref:"img1",staticClass:"theme-img",attrs:{src:"/static-admin/images/theme_blue.jpg",alt:"蓝色皮肤"},on:{click:e.showPreview}})]),e._v(" "),n("el-radio",{attrs:{label:2},model:{value:e.newTheme,callback:function(t){e.newTheme=t},expression:"newTheme"}},[e._v("\n          红色三栏\n          "),e._v(" "),n("img",{ref:"img2",staticClass:"theme-img",attrs:{src:"/static-admin/images/theme_red.jpg",alt:"红色皮肤"},on:{click:e.showPreview}})])],1),e._v(" "),e._m(0)]),e._v(" "),e.isPreview?n("div",{staticClass:"preview-box"},[n("div",{staticClass:"preview-img-wrap"},[n("img",{ref:"img3",staticClass:"preview-img",attrs:{src:e.currentUrl},on:{click:e.closePreview}})])]):e._e(),e._v(" "),n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.submitThemeSelect}},[e._v("提交")])],1)},i=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"right"},[t("p",[this._v("\n          蓝色两栏包含了原有功能；红色三栏包含原有功能再加上红包、悬赏功能；蓝色两栏版本也将陆续更新内容付费功能\n        ")]),this._v(" "),t("p",[this._v("提示：切换后，如果无法正常显示，需要清除浏览器缓存重新进入")])])}]},pnAt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(n("QbLZ"));n("lpfh");var i=a(n("+VvL"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,s.default)({name:"site-theme-view"},i.default)},wS30:function(e,t,n){"use strict";n.r(t);var s=n("edKC"),i=n("WT5M");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);var r=n("KHd+"),c=Object(r.a)(i.default,s.a,s.b,!1,null,null,null);t.default=c.exports}}]);
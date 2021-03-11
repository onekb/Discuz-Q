(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"7RW9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site-function-set-box"},[i("Card",[i("CardRow",{staticClass:"publishing-title",attrs:{description:"生效范围"}},[t._v("\n      发布功能\n    ")])],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布文字帖"}},[i("el-checkbox",{model:{value:t.publishing.text,callback:function(e){t.$set(t.publishing,"text",e)},expression:"publishing.text"}},[t._v("文字")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布帖子"}},[i("el-checkbox",{model:{value:t.publishing.post,callback:function(e){t.$set(t.publishing,"post",e)},expression:"publishing.post"}},[t._v("帖子")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布图片帖"}},[i("el-checkbox",{model:{value:t.publishing.picture,callback:function(e){t.$set(t.publishing,"picture",e)},expression:"publishing.picture"}},[t._v("图片")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布视频帖"}},[i("el-checkbox",{model:{value:t.publishing.video,callback:function(e){t.$set(t.publishing,"video",e)},expression:"publishing.video"}},[t._v("视频")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布语音帖"}},[i("el-checkbox",{model:{value:t.publishing.voice,callback:function(e){t.$set(t.publishing,"voice",e)},expression:"publishing.voice"}},[t._v("语音")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布商品帖"}},[i("el-checkbox",{model:{value:t.publishing.goods,callback:function(e){t.$set(t.publishing,"goods",e)},expression:"publishing.goods"}},[t._v("商品")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"允许站点发布问答帖"}},[i("el-checkbox",{on:{change:t.handleQuestionChange},model:{value:t.publishing.question,callback:function(e){t.$set(t.publishing,"question",e)},expression:"publishing.question"}},[t._v("问答")])],1)],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"publishing-title other"},[t._v("\n      其它功能\n    ")])],1),t._v(" "),i("Card",[i("CardRow",{staticClass:"card-points",attrs:{description:"开启后，用户角色将可以配置价格和有效期，用户可在前台进行用户角色购买"}},[i("el-checkbox",{model:{value:t.purchase,callback:function(e){t.purchase=e},expression:"purchase"}},[t._v("权限购买功能")])],1)],1),t._v(" "),i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.handlePublishingSubmit}},[t._v("提交")])],1)},s=[]},ETVB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i("QbLZ"));i("lpfh");var s=n(i("RIZz"));function n(t){return t&&t.__esModule?t:{default:t}}e.default=(0,a.default)({name:"site-function-set-view"},s.default)},RIZz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(i("4gYi")),s=n(i("pNQN"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{purchase:!1,publishing:{text:!0,post:!0,picture:!0,video:!0,voice:!0,goods:!0,question:!1}}},methods:{loadFunctionStatus:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.purchase="1"===e.readdata._data.set_site.site_pay_group_close,t.publishing.text=1===e.readdata._data.set_site.site_create_thread0,t.publishing.post=1===e.readdata._data.set_site.site_create_thread1,t.publishing.video=1===e.readdata._data.set_site.site_create_thread2,t.publishing.picture=1===e.readdata._data.set_site.site_create_thread3,t.publishing.voice=1===e.readdata._data.set_site.site_create_thread4,t.publishing.question=1===e.readdata._data.set_site.site_create_thread5,t.publishing.goods=1===e.readdata._data.set_site.site_create_thread6)})).catch((function(t){}))},handleQuestionChange:function(t){var e=this;if(t){this.$confirm('\n          <p style="text-indent:2em;">开启问答功能，存在被多个马甲刷回复领取剩余悬赏金额的风险。</p>\n          <p style="text-indent:2em;margin-top:10px;">\n            建议在\n            <span style="color:red;">用户 - 用户角色 - 设置 - 安全设置</span>\n            中开启以下权限：\n          </p>\n          <p style="padding-left:32PX;font-weight:bold;">\n            · 发布内容需先实名认证。<br>\n            · 发布内容需先绑定手机。\n          </p>\n        ',"提示",{dangerouslyUseHTMLString:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){e.publishing.question=!1}))}},handlePublishingSubmit:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"site_pay_group_close",value:this.purchase,tag:"default"}},{attributes:{key:"site_create_thread0",value:this.publishing.text?1:0,tag:"default"}},{attributes:{key:"site_create_thread1",value:this.publishing.post?1:0,tag:"default"}},{attributes:{key:"site_create_thread2",value:this.publishing.video?1:0,tag:"default"}},{attributes:{key:"site_create_thread3",value:this.publishing.picture?1:0,tag:"default"}},{attributes:{key:"site_create_thread4",value:this.publishing.voice?1:0,tag:"default"}},{attributes:{key:"site_create_thread5",value:this.publishing.question?1:0,tag:"default"}},{attributes:{key:"site_create_thread6",value:this.publishing.goods?1:0,tag:"default"}}]}}).then((function(e){e.errors?e.errors[0].detail?t.$message.error(e.errors[0].code+"\n"+e.errors[0].detail[0]):t.$message.error(e.errors[0].code):t.$message({message:"提交成功",type:"success"})})).catch((function(t){}))}},created:function(){this.loadFunctionStatus()},components:{Card:a.default,CardRow:s.default}}},l4bN:function(t,e,i){"use strict";i.r(e);var a=i("ETVB"),s=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e.default=s.a},xMor:function(t,e,i){"use strict";i.r(e);var a=i("7RW9"),s=i("l4bN");for(var n in s)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var r=i("KHd+"),o=Object(r.a)(s.default,a.a,a.b,!1,null,null,null);e.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"8ss3":function(e,t,a){"use strict";a.r(t);var r=a("roIR"),i=a("cabW");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);var n=a("KHd+"),u=Object(n.a)(i.default,r.a,r.b,!1,null,null,null);t.default=u.exports},Bouk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("4gYi")),i=s(a("pNQN"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{picture:"",fileExtension:"",maximumSize:""}},created:function(){this.annexSet()},methods:{annexSet:function(){var e=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.picture=t.readdata._data.set_attach.support_img_ext,e.fileExtension=t.readdata._data.set_attach.support_file_ext,e.maximumSize=t.readdata._data.set_attach.support_max_size)}))},submi:function(){var e=this,t=this.picture,a=this.fileExtension,r=this.maximumSize;t?a?r?/^\d+$|^\d+[.]?\d+$/.test(r)&&/^[0-9]*$/.test(r)?this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"support_img_ext",value:this.picture,tag:"default"}},{attributes:{key:"support_file_ext",value:this.fileExtension,tag:"default"}},{attributes:{key:"support_max_size",value:this.maximumSize,tag:"default"}}]}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.$message({message:"提交成功",type:"success"}),e.annexSet())})).catch((function(e){})):this.$message.error("请输入正确的支持最大尺寸格式"):this.$message.error("请您输入支持的最大尺寸"):this.$message.error("请您输入文件扩展名"):this.$message.error("请您输入图片扩展名")}},components:{Card:r.default,CardRow:i.default}}},cabW:function(e,t,a){"use strict";a.r(t);var r=a("uflW"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(s);t.default=i.a},roIR:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"annex-set-box"},[a("Card",{attrs:{header:"支持的图片扩展名："}},[a("CardRow",{attrs:{description:"多个请用,隔开，例如 png,gif,jpg,jpeg,heic"}},[a("el-input",{model:{value:e.picture,callback:function(t){e.picture=t},expression:"picture"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"支持的文件扩展名："}},[a("CardRow",{attrs:{description:"多个请用,隔开，例如 doc,docx,pdf,zip"}},[a("el-input",{model:{value:e.fileExtension,callback:function(t){e.fileExtension=t},expression:"fileExtension"}})],1)],1),e._v(" "),a("Card",{attrs:{header:"支持的最大尺寸："}},[a("CardRow",{attrs:{description:"单位：MB"}},[a("el-input",{attrs:{type:"number"},model:{value:e.maximumSize,callback:function(t){e.maximumSize=t},expression:"maximumSize"}})],1)],1),e._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.submi}},[e._v("提交")])],1)],1)},i=[]},uflW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(a("QbLZ")),i=s(a("Bouk"));function s(e){return e&&e.__esModule?e:{default:e}}a("lpfh"),t.default=(0,r.default)({name:"annex-set-view"},i.default)}}]);
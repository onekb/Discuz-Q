(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1030:function(e,t){e.exports={data:function(){return{wehcatTimer:null,wechatBind:{}}},destroyed:function(){window.clearInterval(this.wehcatTimer)},methods:{createQRcode:function(){var e=this;this.$store.dispatch("jv/get","/oauth/wechat/pc/qrcode?type=pc_relation").then((function(t){if(t){e.wechatBind=t;var o=e;e.wehcatTimer=setInterval(o.getWechatStatus,3e3)}}),(function(t){return e.handleError(t)}))},getWechatStatus:function(){var e=this;this.wechatBind&&!this.wechatBind.session_token||this.$store.dispatch("jv/get","/oauth/wechat/pc/bind/".concat(this.wechatBind.session_token)).then((function(t){t._jv.json.bind&&(clearInterval(e.wehcatTimer),e.userinfo(),e.isWechatModify=!1,e.$message.success(e.$t("user.BindSuccess")))}),(function(t){var o=t.response.data.errors;if(Array.isArray(o)&&o.length>0){var n=o[0].detail&&o[0].detail.length>0?o[0].detail[0]:o[0].code,r=o[0].detail&&o[0].detail.length>0?o[0].detail[0]:e.$t("core.".concat(n));if("pc_qrcode_scanning_code"===n)return;clearInterval(e.wehcatTimer),e.$message.error(r),e.createQRcode()}}))}}}},1031:function(e,t,o){"use strict";o.r(t);o(27);var n=o(33),r=o(752),l={name:"ShowAvatar",mixins:[o.n(r).a],props:{userId:{type:String,default:""}},data:function(){return{host:"",header:"",dialogVisible:!0,cropImageFormVisible:!1,previews:{},previewCycle:{},option:{img:"",size:1,full:!1,outputType:"png",canMove:!0,fixedBox:!0,original:!0,canMoveBox:!0,autoCrop:!0,autoCropWidth:150,autoCropHeight:150,centerBox:!1,high:!0,max:99999},show:!0,fixed:!0,fixedNumber:[1,1],downImg:"",loading:!1}},mounted:function(){this.header={authorization:"Bearer ".concat(localStorage.getItem("access_token"))}},methods:{handleClose:function(e){var t=this;this.$confirm("确认关闭？").then((function(){e(),t.$emit("change",t.dialogVisible)})).catch((function(){}))},handleClose2:function(){this.dialogVisible=!1,this.$emit("change",this.dialogVisible)},uploadPhoto:function(){this.$refs.photoFile.click()},selectChange:function(e){var t=e.raw;this.fileChange(t)},fileChange:function(e){var t=e;if(/.(png|jpg|jpeg|JPG|JPEG)$/.test(t.name)){var o=new FileReader;o.readAsDataURL(t);var n=this;o.onload=function(){var e=this.result;n.$nextTick((function(){n.pageImage=e,n.option.img=e,n.cropImageFormVisible=!0}))}}else this.$message({message:"请选择符合格式要求的图片",type:"warning"}),this.$refs.photoFile.value=""},realTime:function(data){this.previews=data,this.previewCycle={width:"".concat(this.previews.w,"px"),height:"".concat(this.previews.h,"px"),overflow:"hidden",margin:"0",zoom:.66666666666}},down:function(){var e=this;this.$refs.cropper.getCropBlob((function(data){e.downImg=data,e.$refs.photoFile.submit(),e.loading=!0}))},httpRequest:function(e){var t=this,o=e.action,data=e.data,r=e.filename,l=new FormData;for(var c in data)l.append(c,data[c]);l.append(r,this.downImg,data.fileName),Object(n.a)({url:o,method:"post",data:l,timeout:2e8}).then((function(e){e&&(t.loading=!1,t.$message.success("图片上传成功"),t.dialogVisible=!1,t.$emit("change",t.dialogVisible))}),(function(e){t.loading=!1,t.handleError(e)}))}}},c=(o(1104),o(11)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"showAvatar"},[o("el-dialog",{attrs:{title:"头像",visible:e.dialogVisible,width:"620px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"container"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.cropImageFormVisible,expression:"!cropImageFormVisible"}],staticStyle:{top:"40%",display:"inline-block",position:"relative","z-index":"999"}},[o("el-upload",{ref:"photoFile",attrs:{action:e.host+"/users/"+e.userId+"/avatar",headers:e.header,accept:"image/*",data:{type:1,order:1},name:"avatar","show-file-list":!1,"auto-upload":!1,"on-change":e.selectChange,"http-request":e.httpRequest}},[o("el-button",[e._v(e._s(e.$t("profile.showavatar")))])],1),e._v(" "),o("p",{staticClass:"uptext"},[e._v("\n          "+e._s(e.$t("profile.supportupload"))+"\n          "),o("span",[e._v(e._s(e.$t("profile.jpgorpng"))+" ")]),e._v(" "+e._s(e.$t("profile.filemost"))+" "),o("span",[e._v("500kb")])])],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.cropImageFormVisible,expression:"cropImageFormVisible"}],staticClass:"imgCrop-content"},[o("div",{staticClass:"cropper-content"},[o("VueCropper",{ref:"cropper",attrs:{img:e.option.img,"output-size":e.option.size,"output-type":e.option.outputType,info:!0,full:e.option.full,fixed:e.fixed,"fixed-number":e.fixedNumber,"can-move":e.option.canMove,"can-move-box":e.option.canMoveBox,"fixed-box":e.option.fixedBox,original:e.option.original,"auto-crop":e.option.autoCrop,"auto-crop-width":e.option.autoCropWidth,"auto-crop-height":e.option.autoCropHeight,"center-box":e.option.centerBox,high:e.option.high,mode:"cover","max-img-size":e.option.max},on:{"real-time":e.realTime}})],1)])]),e._v(" "),o("div",{staticClass:"show-preview",style:{width:e.previews.w+"px",height:e.previews.h+"px",overflow:"hidden",display:"inline-block",position:"absolute","margin-left":"17px","margin-top":"7px"}},[o("div",{staticClass:"preview",style:e.previews.div},[o("img",{style:e.previews.img,attrs:{src:e.previews.url}})])]),e._v(" "),o("div",{staticClass:"show-preview",style:{width:"100px",height:"100px",overflow:"hidden",display:"inline-block",position:"absolute","margin-left":"17px","border-radius":"50%",top:"51%"}},[o("div",{staticClass:"preview",style:e.previewCycle},[o("img",{style:e.previews.img,attrs:{src:e.previews.url}})])]),e._v(" "),o("div",{staticClass:"preview2"},[o("div",{staticClass:"square"},[o("span",{staticClass:"squarep"},[e._v(e._s(e.$t("profile.px1")))])]),e._v(" "),o("div",{staticClass:"circle"},[o("span",{staticClass:"squarep"},[e._v(e._s(e.$t("profile.px2")))])]),e._v(" "),o("div",{staticClass:"pre-button"},[o("el-button",{staticClass:"btnw btn_pay1",attrs:{type:"primary",size:"small"},on:{click:e.down}},[e._v(e._s(e.$t("profile.avataruse")))]),e._v(" "),o("el-button",{staticClass:"btnw btn_pay2",attrs:{size:"small"},on:{click:e.handleClose2}},[e._v(e._s(e.$t("profile.avatarcancel")))])],1)])])],1)}),[],!1,null,"1b0e603e",null);t.default=component.exports},1032:function(e,t,o){"use strict";o.r(t);var n={name:"VerifyPhone",props:{error:{type:Boolean,default:!1},passwordErrorTip:{type:String,default:""},mobile:{type:String,default:""}},data:function(){return{}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){this.$emit("sendsms")},methods:{empty:function(){this.$refs.walletinput.deleat()},findpaypwd:function(){this.$emit("close"),this.$emit("findpaypwd")}}},r=(o(1105),o(11)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("message",{attrs:{title:e.$t("modify.authontitle")},on:{close:function(t){return e.$emit("close")}}},[o("div",{staticClass:"container"},[o("div",{staticClass:"block show-amount"},[o("div",{staticClass:"title"},[e._v(e._s("请输入手机 "+e.mobile+" 的验证码"))]),e._v(" "),o("div",{staticClass:"amount"},[o("span",[e._v(e._s(e.$t("modify.editphonewordtip")))])])]),e._v(" "),o("div",{staticClass:"block input-password"},[o("wallet-password-input",{ref:"walletinput",attrs:{error:e.error},on:{password:function(t){return e.$emit("password",t)}}}),e._v(" "),e.error?o("div",{staticClass:"amount"},[e._v(e._s(e.passwordErrorTip?e.passwordErrorTip:e.$t("core.sms_verify_error")))]):e._e()],1)])])}),[],!1,null,"21f0863e",null);t.default=component.exports;installComponents(component,{WalletPasswordInput:o(908).default,Message:o(816).default})},1104:function(e,t,o){"use strict";var n=o(939);o.n(n).a},1105:function(e,t,o){"use strict";var n=o(940);o.n(n).a},939:function(e,t,o){},940:function(e,t,o){}}]);
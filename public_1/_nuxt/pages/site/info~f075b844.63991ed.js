(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1014:function(t,e,n){},1146:function(t,e,n){"use strict";n(1014)},1242:function(t,e,n){"use strict";n.r(e);var o=n(85),r=(n(13),n(5)),c=n(714),l=n.n(c),head=n(715),d=null,m=0,f=1,h=2,v={name:"SiteInfo",mixins:[n.n(head).a,l.a],data:function(){return{title:this.$t("profile.circleinfo"),isLogin:this.$store.getters["session/get"]("isLogin"),qrcodeShow:!1,payStatus:0,orderSn:"",codeUrl:"",site_price:0,threadsData:[],loading:!1,canDetail:!1,currentAudioId:"",preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}},userId:function(){return this.$store.getters["session/get"]("userId")},siteRegMode:function(){return this.$store.state.site.info.attributes.set_reg.register_type||{}}},watch:{userId:function(t){t&&this.userinfo()},forums:{handler:function(t){t.set_site&&t.set_site.site_price&&(this.site_price=(1*t.set_site.site_price).toFixed(2))}}},mounted:function(){this.preurl=this.$route.fullPath,this.userId&&this.userinfo(),this.loadThreads(),this.site_price=this.forums&&this.forums.set_site&&this.forums.set_site.site_price?(1*this.forums.set_site.site_price).toFixed(2):0,(this.forums.set_site&&this.forums.set_site.site_mode||!this.userId)&&(this.canDetail=!0)},methods:{time2YearMonthDay:function(t){if(!t)return"";var e=new Date(t);return["".concat(e.getFullYear(),"年"),e.getMonth()<10?"0".concat(e.getMonth()+1,"月"):"".concat(e.getMonth()+1,"月"),e.getDate()<10?"0".concat(e.getDate(),"日"):"".concat(e.getDate(),"日")].join("")},userinfo:function(){var t=this;this.$store.dispatch("jv/get",["users/".concat(this.userId),{params:{include:"groups,wechat"}}]).then((function(e){e.paid&&t.$router.push("/")}))},tologin:function(){switch(this.siteRegMode){case m:this.$router.push("/user/login?preurl=".concat(this.preurl));break;case f:this.$router.push("/user/phone-login-register?code=".concat(this.code,"&preurl=").concat(this.preurl));break;case h:this.$router.push("/user/wechat?code=".concat(this.code,"&preurl=").concat(this.preurl));break;default:this.$router.push("/user/login?preurl=".concat(this.preurl))}},paysureShow:function(){this.creatOrder(this.forums.set_site.site_price,1,this.value)},creatOrder:function(t,e,n){var o=this,r={_jv:{type:"orders"},type:e,amount:t};this.$store.dispatch("jv/post",r).then((function(t){o.orderSn=t.order_sn,o.orderPay(10,n,o.orderSn,"3")}),(function(t){return o.handleError(t)}))},orderPay:function(t,e,n,o){var r,c=this;r={_jv:{type:"trade/pay/order/".concat(n)},payment_type:t},this.$store.dispatch("jv/post",r).then((function(t){c.wxRes=t,"3"===o&&t&&(c.codeUrl=t.wechat_qrcode,c.payShowStatus=!1,c.qrcodeShow=!0,d=setInterval((function(){1!==c.payStatus?c.getOrderStatus(c.orderSn,o):clearInterval(d)}),3e3))}),(function(t){return c.handleError(t)}))},getOrderStatus:function(t,e){var n=this;this.$store.dispatch("jv/get","orders/".concat(t)).then((function(t){n.payStatus=t.status,1===n.payStatus&&(n.payShowStatus=!1,"3"===e&&(n.qrcodeShow=!1),window.location.href="/",n.$message.success(n.$t("pay.paySuccess")))})).catch((function(){n.$message.success(n.$t("pay.payFail"))}))},loadThreads:function(){var t=this;this.loading=!0;var e={"filter[isDeleted]":"no",sort:"-createdAt",include:"user,user.groups,firstPost,firstPost.images,firstPost.postGoods,category,threadVideo,threadAudio,question,question.beUser,question.beUser.groups","page[number]":1,"page[limit]":10,"filter[isApproved]":1,"filter[isSite]":"yes"};r.status.run((function(){return t.$store.dispatch("jv/get",["threads",{params:e}])})).then((function(e){t.loading=!1,t.threadsData=[].concat(Object(o.a)(t.threadsData),Object(o.a)(e))}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},audioPlay:function(t){this.currentAudioId&&this.currentAudioId!==t&&this.$refs["audio".concat(this.currentAudioId)][0].pause(),this.currentAudioId=t}}},_=(n(1146),n(11)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"infocontainer"},[t.forums&&t.forums.users?n("div",{staticClass:"info"},[n("h2",{staticClass:"info-title"},[t._v(t._s(t.$t("manage.payJoin")))]),t._v(" "),n("div",{staticClass:"payinfo"},[n("p",{staticClass:"payinfo-title"},[t._v(t._s(t.$t("manage.payInfoTitle")))]),t._v(" "),n("p",[n("span",{staticClass:"color"},[t._v(t._s(t.$t("post.paymentAmount")))]),t._v(" "),n("span",{staticClass:"paymoney"},[t._v(t._s("¥ "+t.site_price+" ")+"元")])]),t._v(" "),n("p",[n("span",{staticClass:"date color"},[t._v(t._s(t.$t("site.periodvalidity")))]),t._v(" "),n("span",{staticClass:"workdate"},[t._v("自加入起\n          "+t._s(t.forums.set_site&&t.forums.set_site.site_expire?(t.forums.set_site&&t.forums.set_site.site_expire)+" "+t.$t("site.day"):t.$t("site.permanent")))])])]),t._v(" "),n("div",{staticClass:"content-info abs"},[n("p",[n("span",{staticClass:"color"},[t._v(t._s(t.$t("site.creationtime")))]),t._v(" "),n("span",{staticClass:"workdate"},[t._v(t._s(t.forums.set_site&&t.time2YearMonthDay(t.forums.set_site.site_install)))])]),t._v(" "),n("p",{staticClass:"circlemaster"},[n("span",{staticClass:"date color"},[t._v(t._s(t.$t("site.circlemaster")))]),t._v(" "),t.forums.set_site&&t.forums.set_site.site_author?n("span",{staticClass:"img"},[n("Avatar",{staticClass:"avatar",attrs:{user:{username:t.forums.set_site&&t.forums.set_site.site_author&&t.forums.set_site.site_author.username||"",avatarUrl:t.forums.set_site&&t.forums.set_site.site_author&&t.forums.set_site.site_author.avatar||""},size:30,round:!0}})],1):n("span",[n("avatar",{attrs:{user:{id:0,username:"无",avatarUrl:""},"prevent-jump":!0,size:30,round:!0}})],1),t._v(" "),n("span",{staticClass:"workdate3"},[t._v("\n          "+t._s(t.forums.set_site&&t.forums.set_site.site_author&&t.forums.set_site.site_author.username||"")+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"date color"},[t._v(t._s(t.$t("home.theme")))]),t._v(" "),n("span",{staticClass:"workdate bold"},[t._v(t._s(t.forums.other&&t.forums.other.count_users))])]),t._v(" "),n("p",{staticClass:"member-img"},t._l(t.forums.users,(function(t,e){return n("span",{key:e,staticClass:"img"},[n("Avatar",{staticClass:"avatar",attrs:{user:t,size:30,round:!0}})],1)})),0),t._v(" "),n("p",[n("span",{staticClass:"date color"},[t._v(t._s(t.$t("manage.contents")))]),t._v(" "),n("span",{staticClass:"workdate bold"},[t._v(t._s(t.forums.other&&t.forums.other.count_threads))])]),t._v(" "),n("p",[n("span",{staticClass:"date color rel"},[t._v(t._s(t.$t("manage.siteintroduction")))]),t._v(" "),n("span",{staticClass:"workdate2"},[t._v(t._s(t.forums.set_site&&t.forums.set_site.site_introduction))])])]),t._v(" "),t.isLogin?n("p",{staticClass:"joinnow"},[n("span",[t._v(t._s(t.$t("site.justonelaststepjoinnow")))]),t._v(" "),n("span",{staticClass:"bold"},[t._v("\n        "+t._s(t.forums.set_site&&t.forums.set_site.site_name)+"\n      ")]),t._v(" "),n("span",[t._v(t._s(t.$t("site.site")))]),t._v(" "),n("el-button",{class:t.isLogin?"r-button islogin":"r-button",attrs:{type:"primary"},on:{click:t.paysureShow}},[t._v("\n        "+t._s(t.$t("site.paynow"))+"，¥"+t._s(" "+t.site_price+" "||!1)+"\n        "+t._s(t.forums.set_site&&t.forums.set_site.site_expire?"  / "+t.$t("site.periodvalidity")+(t.forums.set_site&&t.forums.set_site.site_expire)+t.$t("site.day"):" / "+t.$t("site.permanent"))+"\n      ")])],1):t._e(),t._v(" "),t.isLogin?t._e():n("div",[n("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:t.tologin}},[t._v(t._s(t.$t("site.joinnow")))])],1),t._v(" "),t.qrcodeShow?n("topic-wx-pay",{attrs:{"qr-code":t.codeUrl},on:{close:function(e){t.qrcodeShow=!1}}}):t._e()],1):t._e(),t._v(" "),t.threadsData.length>0?n("div",{staticClass:"thread"},[n("div",{staticClass:"threadtitle"},[t._v("部分内容预览")]),t._v(" "),t._l(t.threadsData,(function(e,o){return[4===e.type?n("post-item",{key:o,ref:"audio"+(e&&e.threadAudio&&e.threadAudio._jv&&e.threadAudio._jv.id),refInFor:!0,attrs:{item:e,infoimage:!0,"can-detail":t.canDetail},on:{audioPlay:t.audioPlay}}):n("post-item",{key:o,attrs:{item:e,infoimage:!0,"can-detail":t.canDetail}})]}))],2):t._e()])}),[],!1,null,"270512af",null);e.default=component.exports;installComponents(component,{Avatar:n(255).default,Avatar:n(255).default,TopicWxPay:n(888).default,PostItem:n(756).default})},715:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},716:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c}));n(52),n(159);var o=function(time){var t=((window.currentTime||new Date)-new Date(time))/1e3;return 0===parseInt(t)?"刚刚发布":parseInt(t)<60?"".concat(parseInt(t),"秒前"):parseInt(t/60)<60?"".concat(parseInt(t/60),"分钟前"):parseInt(t/60/60)<16?"".concat(parseInt(t/60/60),"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},r=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),n=Math.round(new Date/1e3)-e,o=parseInt(n/86400,0);if(o>365){var r=parseInt(n/86400/365,0);return"".concat(r,"年")}return"".concat(o,"天")}},717:function(t,e){function n(e,p){return t.exports=n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},t.exports.default=t.exports,t.exports.__esModule=!0,n(e,p)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},718:function(t,e,n){"use strict";n(159),n(801),n(35),n(13),n(32),n(24),n(34);var o=n(27),r=n(802),c=(n(809),n(796),n(808));n(52);function l(t,e){l=function(t,e){return new f(t,void 0,e)};var n=Object(c.a)(RegExp),d=RegExp.prototype,m=new WeakMap;function f(t,e,o){var r=n.call(this,t,e);return m.set(r,o||m.get(t)),r}function h(t,e){var g=m.get(e);return Object.keys(g).reduce((function(e,n){return e[n]=t[g[n]],e}),Object.create(null))}return Object(r.a)(f,n),f.prototype.exec=function(t){var e=d.exec.call(this,t);return e&&(e.groups=h(e,this)),e},f.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=m.get(this);return d[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var r=this;return d[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==Object(o.a)(t[t.length-1])&&t.push(h(t,r)),e.apply(this,t)}))}return d[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}var d={topic:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/topic/".concat(t);return'<a href="'.concat(e,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/user/".concat(t);return'<a href="'.concat(e,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var t=/&lt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return"<"}))}))}},parseHtml2:function(text){if(text){var t=/&gt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return">"}))}))}}};e.a={parse:function(text){for(var t in d)text=d[t](text);return text}}},720:function(t,e,n){"use strict";n.r(e);var o={name:"MessageBox",props:{width:{type:String,default:"820px"},title:{type:String,default:""},overflow:{type:String,default:"auto"}}},r=(n(794),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Cover"),t._v(" "),n("div",{staticClass:"message-box",style:{overflow:t.overflow,width:t.width}},[n("div",{staticClass:"container-title"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("svg-icon",{staticStyle:{"font-size":"14px",cursor:"pointer",fill:"#6d6d6d"},attrs:{type:"close"},on:{click:function(e){return t.$emit("close")}}})],1),t._v(" "),t._t("default")],2)],1)}),[],!1,null,"05e0d157",null);e.default=component.exports;installComponents(component,{Cover:n(752).default,SvgIcon:n(62).default})},721:function(t,e,n){},722:function(t,e,n){},723:function(t,e,n){"use strict";n.r(e);n(254);var o=n(748),r={name:"SharePopover",props:{threadsId:{type:[String,Number],default:""},type:{type:String,default:""}},data:function(){return{qrcode:null,currentType:""}},methods:{copyLink:function(){var t=document.createElement("input");"topic"===this.type?t.value=window.location.href:t.value="".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),t.id="copyInput",document.body.appendChild(t),t.select(),document.execCommand("Copy"),this.$message.success("链接复制成功"),setTimeout((function(){t.remove()}),100)},onShowPopover:function(){this.currentType=this.type;var path=window.location.href;path="topic"===this.type?window.location.href:"".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),this.createQrcode(path)},createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new o(t.$refs.qrcode,{width:88,height:88,text:link})}))},closeCode:function(){this.$refs.qrcode.innerHTML=""}}},c=(n(743),n(744),n(11)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-container"},[n("el-popover",{attrs:{placement:"bottom",width:"120","min-width":"120",trigger:"click","popper-class":"custom-popover-width"},on:{show:t.onShowPopover,hide:t.closeCode}},[n("div",{staticClass:"share-cont"},[n("div",{staticClass:"copy",on:{click:t.copyLink}},[n("svg-icon",{staticClass:"copy-icon",attrs:{type:"copy-link"}}),t._v(" "),n("span",[t._v(t._s(t.$t("core.copyLink")))])],1),t._v(" "),n("div",{staticClass:"qrcode"},[n("div",{staticClass:"qrcode-text"},[n("svg-icon",{staticClass:"wechat-logo",attrs:{type:"wechat-logo"}}),t._v(" "),n("span",[t._v(t._s(t.$t("core.wxShare")))])],1),t._v(" "),n("div",{ref:"qrcode",staticClass:"qrcode-cont"})])]),t._v(" "),n("template",{slot:"reference"},[t._t("default")],2)],2)],1)}),[],!1,null,"c72b1b96",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default})},724:function(t,e,n){},725:function(t,e,n){},732:function(t,e,n){"use strict";n.r(e);var o={name:"ProductItem",props:{item:{type:Object,default:function(){}}},data:function(){return{}}},r=(n(746),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("a",{staticClass:"product-container",attrs:{href:t.item.detailContent,target:"_blank",el:"nofollow"}},[n("el-image",{staticClass:"image",attrs:{src:t.item.imagePath,alt:t.item.title,fit:"cover"}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"info-header"},[n("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.price>0?n("div",{staticClass:"price"},[t._v(t._s(t.$t("post.yuanItem")+t.item.price+t.$t("post.yuan")))]):t._e()]),t._v(" "),n("div",{staticClass:"btn"},[n("svg-icon",{staticClass:"icon",attrs:{type:"product-icon"}}),t._v(t._s(t.$t("post.buyProudct")))],1)])],1):t._e()}),[],!1,null,"85619e88",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default})},733:function(t,e,n){"use strict";n.r(e);n(13),n(108);var o={name:"AudioPlayer",props:{file:{type:Object,default:function(){}},currentAudio:{type:Object,default:function(){}}},data:function(){return{onDragging:!1,delta:0}},computed:{currentFile:function(){return this.file&&this.file.id?this.currentAudio.id===this.file.id:this.currentAudio.id===this.file._jv.id},playing:function(){return this.currentAudio.currentTime&&this.currentAudio.duration}},methods:{formatDuration:function(t){var e=Math.floor(t/60),n=(t-60*e).toString().substr(0,2);return"."===n[1]&&(n="0".concat(n[0])),"".concat(e,":").concat(n)},formatCurrentTime:function(t){var e=parseInt(t/60)%60,n=(t%60).toFixed(),o=e<10?"0".concat(e):e,s=n<10?"0".concat(n):n;return"".concat(o,":").concat(s)},convertToPercentage:function(){return this.currentAudio.currentTime/this.currentAudio.duration*100},onmousedown:function(){window.document.addEventListener("mousemove",this.dragging),window.document.addEventListener("mouseup",this.onMouseUp)},dragging:function(t){this.delta=t.clientX-this.$refs.progress.getBoundingClientRect().x,this.delta<0&&(this.delta=0),this.delta>290&&(this.delta=290);var time=this.delta/290*this.currentAudio.duration;this.$emit("seeking",time)},onMouseUp:function(){var time=this.delta/290*this.currentAudio.duration;this.$emit("seek",time),window.document.removeEventListener("mousemove",this.dragging),window.document.removeEventListener("mouseup",this.onMouseUp)}}},r=(n(747),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio"},[t.currentFile&&t.currentAudio.isLoading?n("div",{staticClass:"control"},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"loading",rotate:""}})],1):t.currentFile&&t.currentAudio.isPlay?n("div",{staticClass:"control",on:{click:function(e){return t.$emit("pause")}}},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-pause"}})],1):n("div",{staticClass:"control",on:{click:function(e){return t.$emit("play",t.file)}}},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-play"}})],1),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("span",{staticClass:"title-audio"},[t._v(t._s(t.file.fileName||t.file.file_name))]),t._v(" "),t.currentFile&&t.playing?n("span",{staticClass:"duration-audio"},[t._v("\n        "+t._s(t.formatCurrentTime(t.currentAudio.currentTime))+" /\n        "+t._s(t.formatDuration(t.currentAudio.duration))+"\n      ")]):n("span",{staticClass:"duration-audio"},[t._v("--:--")])]),t._v(" "),t.currentFile&&t.playing?n("div",{ref:"progress",staticClass:"progress",attrs:{id:"progress"}},[n("div",{staticClass:"progress-item",style:{width:t.convertToPercentage()+"%"}}),t._v(" "),n("div",{staticClass:"control-ball",style:{left:t.convertToPercentage()+"%"},attrs:{id:"control-ball"},on:{mousedown:t.onmousedown}})]):t._e()])])}),[],!1,null,"7fe73b95",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default})},735:function(t,e,n){},742:function(t,e,n){},743:function(t,e,n){"use strict";n(721)},744:function(t,e,n){"use strict";n(722)},745:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.default=t.exports,t.exports.__esModule=!0},746:function(t,e,n){"use strict";n(724)},747:function(t,e,n){"use strict";n(725)},749:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},756:function(t,e,n){"use strict";n.r(e);n(13),n(25);var o=n(718),time=n(716),r=n(731),c=n(714),l=n.n(c),d=n(158),m=n.n(d),f=n(726),h={name:"PostItem",filters:{formatDate:function(t){return Object(time.b)(t)}},mixins:[l.a,m.a],props:{item:{type:Object,default:function(){}},showLike:{type:Boolean,default:!0},showComment:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},infoimage:{type:Boolean,default:!1},canDetail:{type:Boolean,default:!1},padding:{type:String,default:"20.5px 20px 30px"}},data:function(){return{loading:!1,showVideoPop:!1,isLiked:!1,currentAudio:{id:"",url:"",currentTime:"",duration:"",audio:"",seeking:!1,isPlay:!1,isLoading:!1}}},computed:{unpaid:function(){return!(this.item.paid||0===parseFloat(this.item.price))},forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{item:{handler:function(t){this.isLiked=t.firstPost&&t.firstPost.isLiked,this.likeCount=t.firstPost&&t.firstPost.likeCount},immediate:!0}},mounted:function(){this.currentAudio.audio=document.getElementById("audio-player".concat(this.item&&this.item._jv&&this.item._jv.id))},methods:{handleLike:function(){var t=this;if(this.$store.getters["session/get"]("isLogin")){if(this.loading)return;if(!this.item.firstPost.canLike)return void this.$message.error(this.$t("topic.noThreadLikePermission"));this.loading=!0;var e=!this.isLiked,n={pid:parseInt(this.item.firstPost&&this.item.firstPost._jv&&this.item.firstPost._jv.id),data:{attributes:{isLiked:e}}};return f.a.updatePosts({data:n}).then((function(){t.$message.success(e?t.$t("discuzq.msgBox.likeSuccess"):t.$t("discuzq.msgBox.cancelLikeSuccess")),e?t.likeCount+=1:t.likeCount-=1,t.isLiked=e,t.$emit("change")}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}this.$message.warning("请登录"),window.setTimeout((function(){t.headerTologin()}),1e3)},toDetail:function(){this.item.isDraft||this.canViewPostsFn()&&this.routerLink()},onClickImage:function(){this.unpaid&&this.canViewPostsFn()&&this.routerLink()},openVideo:function(){this.canViewPostsFn()&&(this.unpaid?this.routerLink():"/"===this.$route.path||"/site/search"===this.$route.path||"category-id"===this.$route.name?this.$emit("showVideoFn",this.item.threadVideo):this.showVideoPop=!0)},routerLink:function(){window.open("/thread/".concat(this.item._jv&&this.item._jv.id),"_blank")},onClickContent:function(t){if(!this.item.isDraft){var e=t||window.event;"a"!==(e.target||e.srcElement).nodeName.toLocaleLowerCase()&&this.toDetail()}},canViewPostsFn:function(){var t=this;return this.item.canViewPosts?!this.canDetail||(this.$message.warning(this.$t("topic.joinAfterView")),!1):(this.$store.getters["session/get"]("isLogin")?this.$message.warning(this.$t("home.noPostingTopic")):(this.$message.warning(this.$t("core.not_authenticated")),window.setTimeout((function(){t.headerTologin()}),1e3)),!1)},formatTopicHTML:function(html){return o.a.parse(html)},extensionValidate:function(t){return r.extensionList.indexOf(t.toUpperCase())>0?t.toUpperCase():"UNKNOWN"},play:function(t){var e=this;this.unpaid?this.routerLink():this.canViewPostsFn()&&this.currentAudio.audio&&(this.currentAudio.id!==t._jv.id&&(this.resetAudio(this.currentAudio.audio),this.currentAudio.url=t.url||t.media_url,this.currentAudio.id=t._jv.id,this.currentAudio.audio.src=this.currentAudio.url,this.currentAudio.isLoading=!0,this.currentAudio.audio.load()),window.setTimeout((function(){e.currentAudio.audio.play(),e.currentAudio.isPlay=!0,e.currentAudio.audio.addEventListener("timeupdate",e.onProgressing),e.currentAudio.audio.addEventListener("ended",e.onEnded),e.$emit("audioPlay",e.currentAudio.id)}),0))},onProgressing:function(){this.currentAudio.seeking||(this.currentAudio.isLoading=!1,this.currentAudio.duration=this.currentAudio.audio.duration,this.currentAudio.currentTime=this.currentAudio.audio.currentTime)},onEnded:function(){this.resetAudio(this.currentAudio.audio)},resetAudio:function(audio){audio&&(audio.removeEventListener("timeupdate",this.onProgressing),audio.removeEventListener("ended",this.onEnded),this.currentAudio.isPlay=!1,this.currentAudio.duration="",this.currentAudio.currentTime="")},pause:function(){this.currentAudio.audio&&(this.currentAudio.isLoading=!1,this.currentAudio.isPlay=!1,this.currentAudio.audio.pause())},seek:function(time){this.currentAudio.audio&&(this.currentAudio.seeking=!1,this.currentAudio.currentTime=time,this.currentAudio.audio.currentTime=time)},seeking:function(time){this.currentAudio.seeking=!0,this.currentAudio.currentTime=time}}},v=(n(761),n(11)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-container",style:{padding:t.padding}},[t.item.isEssence?n("div",{staticClass:"essence"},[n("svg-icon",{attrs:{type:"index-essence"}})],1):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.question.beUser.id,username:t.item.question.beUser.username,avatarUrl:t.item.question.beUser.avatarUrl,isReal:t.item.question.beUser.isReal},"prevent-jump":t.canDetail}}):t.item.user?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.user.id,username:t.item.user.username,avatarUrl:t.item.user.avatarUrl,isReal:t.item.user.isReal},"prevent-jump":t.canDetail}}):t._e(),t._v(" "),n("div",{staticClass:"main-cont"},[n("div",{staticClass:"top-flex"},[n("div",{staticClass:"top-user-info"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.question.beUser.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.question.beUser.username))]),t._v(" "),t.item.question.beUser&&t.item.question.beUser.groups&&t.item.question.beUser.groups.length>0&&t.item.question.beUser.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n            ("+t._s(t.item.question.beUser.groups[0].name)+")\n          ")]):t._e()]):t.item.user?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.user.username))]),t._v(" "),t.item.user.id>0&&t.item.user.groups&&t.item.user.groups.length>0&&t.item.user.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n            "+t._s(t.item.user.groups[0].name)+"\n          ")]):t._e()]):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer?n("div",{staticClass:"answered"},[t._v("\n          "+t._s(t.$t("topic.answered"))+"\n        ")]):t._e()],1),t._v(" "),n("div",{staticClass:"time"},[t.item.createdAt?[t._v(t._s(t.$t("topic.publishAt"))+"\n          "+t._s(t._f("formatDate")(t.item.createdAt)))]:t._e()],2)]),t._v(" "),5===t.item.type?n("div",{staticClass:"question-user"},[t.item.question?t._e():n("div",[t._v("\n        "+t._s(t.$t("topic.questionsAndAnswers"))+"\n        "),n("div",{staticClass:"inline blue"},[t._v("\n          ￥"+t._s(t.item&&t.item.questionTypeAndMoney?t.item.questionTypeAndMoney.money:0)+"\n        ")])]),t._v(" "),t.item.question&&0===t.item.question.is_answer?n("div",{staticClass:"inline"},[n("div",{staticClass:"inline blue"},[t._v("\n          ￥"+t._s(t.item&&t.item.questionTypeAndMoney?t.item.questionTypeAndMoney.money:0)+"\n        ")]),t._v("\n        "+t._s(t.$t("topic.be"))+"\n        "),t.item.question&&t.item.question.beUser?n("nuxt-link",{staticClass:"grey",attrs:{to:t.item.question.beUser.id>0?"/user/"+t.item.question.beUser.id:""}},[t._v("@"+t._s(t.item.question.beUser.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.question"))+"\n      ")],1):t._e(),t._v(" "),t.item.question&&1===t.item.question.is_answer?[t._v("\n        "+t._s(t.$t("topic.answer"))+"\n        "),t.item.user?n("nuxt-link",{staticClass:"grey",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[t._v("@"+t._s(t.item.user.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.of"))+t._s(t.$t("topic.question"))+"\n      ")]:t._e()],2):t._e(),t._v(" "),t.item.firstPost?[n("div",{staticClass:"first-post",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("a",{attrs:{href:"/thread/"+(t.item._jv&&t.item._jv.id)},on:{click:function(e){return e.preventDefault(),t.onClickContent(e)}}},[1===t.item.type?n("div",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("home.released"))+"\n            "),n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0,expression:"\n                parseFloat(item.price) > 0 ||\n                  parseFloat(item.attachmentPrice) > 0\n              "}],staticClass:"blue icon-pay-yuan-inline",attrs:{type:"pay-yuan"}}),t._v(" "),n("span",{staticClass:"blue"},[t._v(t._s(t.item.title))])],1):n("div",{staticClass:"content"},[5===t.item.type?n("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"question-icon"}}):6===t.item.type?n("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"product-icon"}}):parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0?n("svg-icon",{staticClass:"icon-pay-yuan grey",attrs:{type:"pay-yuan"}}):t._e(),t._v(" "),n("div",{class:{"content-block":5===t.item.type||6===t.item.type||parseFloat(t.item.price)>0,blue:5===t.item.type},domProps:{innerHTML:t._s(t.$xss(t.formatTopicHTML(t.item.firstPost.summary)))}})],1)]),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>0?n("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{url:"data-source"},expression:"{ url: 'data-source' }"}],staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},t._l(t.item.firstPost.images.slice(0,3),(function(image,e){return n("el-image",{key:e,class:{image:!0,infoimage:t.infoimage},attrs:{src:image.thumbUrl,"data-source":t.unpaid?"":image.url,alt:image.filename,fit:"cover",lazy:t.lazy},on:{click:function(e){return e.target!==e.currentTarget?null:t.onClickImage(e)}}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])])})),1):t._e(),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>3?n("div",{staticClass:"image-count",on:{click:t.toDetail}},[t._v("\n          "+t._s(t.$t("home.total"))+" "+t._s(t.item.firstPost.images.length)+"\n          "+t._s(t.$t("home.seeAllImage"))+"\n        ")]):t._e(),t._v(" "),2===t.item.type&&t.item.threadVideo?n("div",{staticClass:"video-main",on:{click:function(e){return e.stopPropagation(),t.openVideo(e)}}},[t.item.threadVideo.cover_url?n("el-image",{staticClass:"video-img-cover",attrs:{src:t.item.threadVideo.cover_url,alt:t.item.threadVideo.file_name,fit:"cover",lazy:t.lazy}}):n("div",{staticClass:"no-cover"},[t._v(t._s(t.$t("home.noPoster")))]),t._v(" "),n("svg-icon",{staticClass:"video-play",attrs:{type:"video-play"}})],1):t._e(),t._v(" "),t.item.firstPost.attachments&&t.item.firstPost.attachments.length>0?n("div",{staticClass:"attachment",on:{click:t.toDetail}},[n("svg-icon",{attrs:{type:t.extensionValidate(t.item.firstPost.attachments[0].extension)}}),t._v(" "),n("div",{staticClass:"name text-hidden"},[t._v("\n            "+t._s(t.item.firstPost.attachments[0].fileName)+"\n          ")]),t._v(" "),t.item.firstPost.attachments.length>1?n("div",{staticClass:"total"},[t._v("\n            "+t._s(t.$t("home.etc")+t.item.firstPost.attachments.length+t.$t("home.attachmentTotal"))+"\n          ")]):t._e()],1):t._e()]),t._v(" "),6===t.item.type?n("product-item",{attrs:{item:t.item&&t.item.firstPost&&t.item.firstPost.postGoods}}):t._e(),t._v(" "),4===t.item.type?n("div",{on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("audio-player",{attrs:{file:t.item&&t.item.threadAudio,"current-audio":t.currentAudio},on:{play:t.play,pause:t.pause,seek:t.seek,seeking:t.seeking}}),t._v(" "),n("audio",{staticClass:"audio-player",staticStyle:{display:"none"},attrs:{id:"audio-player"+(t.item._jv&&t.item._jv.id),src:t.currentAudio.url}})],1):t._e(),t._v(" "),t.item.location?n("nuxt-link",{staticClass:"location",attrs:{to:"/topic/position?longitude="+t.item.longitude+"&latitude="+t.item.latitude}},[n("span",{staticClass:"flex"},[n("svg-icon",{staticClass:"icon",attrs:{type:"location"}}),t._v("\n          "+t._s(t.item.location)+"\n        ")],1)]):t._e(),t._v(" "),t.canDetail?t._e():n("div",{staticClass:"bottom-handle"},[n("div",{staticClass:"left"},[t.showLike?n("div",{staticClass:"btn like",class:{liked:t.isLiked},on:{click:t.handleLike}},[n("svg-icon",{staticClass:"icon",attrs:{type:"like"}}),t._v("\n            "+t._s(t.isLiked?t.$t("topic.liked"):t.$t("topic.like"))+"\n            "+t._s(t.likeCount>0?t.likeCount:"")+"\n          ")],1):t._e(),t._v(" "),t.showComment?n("div",{staticClass:"btn comment",on:{click:t.toDetail}},[n("svg-icon",{staticClass:"icon",attrs:{type:"post-comment"}}),t._v("\n            "+t._s(t.$t("topic.comment"))+"\n            "+t._s(t.item.postCount-1>0?t.item.postCount-1:"")+"\n          ")],1):t._e(),t._v(" "),t.item._jv&&t.item._jv.id&&t.showShare?n("share-popover",{attrs:{"threads-id":t.item._jv.id}},[n("div",{staticClass:"btn share"},[n("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n              "+t._s(t.$t("topic.share"))+"\n            ")],1)]):t._e(),t._v(" "),t._t("btn-edit"),t._v(" "),t._t("btn-delete")],2),t._v(" "),t._t("bottom-right")],2)]:t._e()],2),t._v(" "),t.showVideoPop?n("video-pop",{attrs:{"cover-url":t.item.threadVideo.cover_url,url:t.item.threadVideo.media_url},on:{remove:function(e){t.showVideoPop=!1}}}):t._e()],1)}),[],!1,null,"74927ad6",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default,Avatar:n(255).default,ProductItem:n(732).default,AudioPlayer:n(733).default,SharePopover:n(723).default,VideoPop:n(727).default})},761:function(t,e,n){"use strict";n(735)},794:function(t,e,n){"use strict";n(742)},799:function(t,e,n){},812:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,n.apply(this,arguments)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},820:function(t,e,n){var o=n(734).default,r=n(745);t.exports=function(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?r(t):e},t.exports.default=t.exports,t.exports.__esModule=!0},821:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},822:function(t,e,n){var o=n(717);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},823:function(t,e,n){var o=n(717),r=n(749);function c(e,n,l){return r()?(t.exports=c=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=c=function(t,e,n){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(t,a));return n&&o(r,n.prototype),r},t.exports.default=t.exports,t.exports.__esModule=!0),c.apply(null,arguments)}t.exports=c,t.exports.default=t.exports,t.exports.__esModule=!0},824:function(t,e,n){var o=n(717);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},880:function(t,e,n){"use strict";n(799)},888:function(t,e,n){"use strict";n.r(e);var o={name:"TopicWxPay",props:{qrCode:{type:String,default:""}}},r=(n(880),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("message-box",{attrs:{title:t.$t("pay.pay")},on:{close:function(e){return t.$emit("close")}}},[n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[n("svg-icon",{staticStyle:{fill:"#09BB07","font-size":"30px"},attrs:{type:"wechat"}}),t._v(" "),n("span",[t._v(t._s(t.$t("pay.wxPay")))])],1),t._v(" "),n("div",{staticClass:"tip"},[t._v(t._s(t.$t("pay.wechatTimeLimit")))]),t._v(" "),n("div",{staticClass:"container-qr-code"},[n("img",{staticStyle:{width:"138px",height:"138px"},attrs:{src:t.qrCode,alt:"qr-code"}})]),t._v(" "),n("div",{staticClass:"scan-tip"},[n("svg-icon",{staticStyle:{display:"block","font-size":"32px"},attrs:{type:"wx-scan"}}),t._v(" "),n("div",{staticClass:"tip"},[n("span",[t._v(t._s(t.$t("pay.wechatScan")))]),t._v(" "),n("span",[t._v(t._s(t.$t("pay.wechatScanPay")))])])],1)])])}),[],!1,null,"028323c1",null);e.default=component.exports;installComponents(component,{SvgIcon:n(62).default,MessageBox:n(720).default})}}]);
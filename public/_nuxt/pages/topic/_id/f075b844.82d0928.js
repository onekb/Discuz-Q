(window.webpackJsonp=window.webpackJsonp||[]).push([[43,8,9],{539:function(t,e,n){},540:function(t,e,n){},541:function(t,e,n){},542:function(t,e,n){"use strict";n.r(e);var o={name:"Cover",mounted:function(){var t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.background="rgba(0, 0, 0, .4)",t.style.zIndex="10",t.id="cover",document.querySelector("body").appendChild(t)},destroyed:function(){var t=document.querySelector("#cover");t.parentNode.removeChild(t)},render:function(){return""}},r=n(12),component=Object(r.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports},543:function(t,e,n){},544:function(t,e,n){},545:function(t,e,n){},546:function(t,e,n){},547:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c}));n(177),n(51);var o=function(time){var t=(window.currentTime||new Date)-new Date(time);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60)>0?Math.ceil(t/1e3/60):1,"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60)>0?Math.ceil(t/1e3/60/60):1,"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},r=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),n=Math.round(new Date/1e3)-e,o=parseInt(n/86400,0);if(o>365){var r=parseInt(n/86400/365,0);return"".concat(r,"年")}return"".concat(o,"天")}},548:function(t,e,n){},549:function(t,e,n){"use strict";n.r(e);var o=n(606),r={name:"VideoPop",props:{url:{type:String,default:""},coverUrl:{type:String,default:""}},data:function(){return{options:{autoplay:!0,controls:!0},player:null}},mounted:function(){document.addEventListener("click",this.removeVideoPop),this.initVideoJs()},methods:{initVideoJs:function(){var t=this;this.player=Object(o.a)("videoPlayer",this.options,(function(){var e=this;o.a.log("Your player is ready!"),this.play(),this.on("error",(function(){e.errorDisplay.close(),e.createModal(t.$t("core.videoError"))}))}))},removeVideoPop:function(t){var e=!0;(t.path||t.composedPath&&t.composedPath()).forEach((function(t){"video-pop"===t.id&&(e=!1),t.classList&&t.classList.contains("svg-icon-video-play")&&(e=!1)})),e&&(this.$emit("remove"),this.player.dispose(),document.removeEventListener("click",this.removeVideoPop))}}},c=(n(554),n(12)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-pop",attrs:{id:"video-pop"}},[e("Cover"),this._v(" "),e("video",{staticClass:"video-js",attrs:{id:"videoPlayer",controls:"",width:"800px",height:"600px",preload:"auto","data-setup":"{}"}},[e("source",{attrs:{src:this.url}}),this._v(" "),e("source",{attrs:{src:this.url,type:"video/webm"}})])],1)}),[],!1,null,"625079a2",null);e.default=component.exports;installComponents(component,{Cover:n(542).default})},550:function(t,e){e.extensionList=["7Z","AI","APK","CAD","CDR","DOC","DOCX","EPS","EXE","IPA","MP3","MP4","PDF","PPT","PSD","RAR","TXT","XLS","XLSX","ZIP","JPG","WAV"]},553:function(t,e,n){"use strict";n(39);var o=n(23),r=(n(37),n(29),n(20),n(11),n(36),n(520),n(177),n(51),n(521)),c=(n(523),n(179),n(522));function l(t,e){l=function(t,e){return new h(t,void 0,e)};var n=Object(c.a)(RegExp),d=RegExp.prototype,m=new WeakMap;function h(t,e,o){var r=n.call(this,t,e);return m.set(r,o||m.get(t)),r}function v(t,e){var g=m.get(e);return Object.keys(g).reduce((function(e,n){return e[n]=t[g[n]],e}),Object.create(null))}return Object(r.a)(h,n),h.prototype.exec=function(t){var e=d.exec.call(this,t);return e&&(e.groups=v(e,this)),e},h.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=m.get(this);return d[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var r=this;return d[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==Object(o.a)(t[t.length-1])&&t.push(v(t,r)),e.apply(this,t)}))}return d[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}var d={topic:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/topic/".concat(t);return'<a href="'.concat(e,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/user/".concat(t);return'<a href="'.concat(e,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var t=/&lt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return"<"}))}))}},parseHtml2:function(text){if(text){var t=/&gt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return">"}))}))}}};e.a={parse:function(text){for(var t in d)text=d[t](text);return text}}},554:function(t,e,n){"use strict";var o=n(539);n.n(o).a},559:function(t,e,n){},560:function(t,e,n){},561:function(t,e,n){"use strict";var o=n(540);n.n(o).a},562:function(t,e,n){"use strict";var o=n(541);n.n(o).a},578:function(t,e,n){"use strict";n.r(e);var o={name:"ProductItem",props:{item:{type:Object,default:function(){}}},data:function(){return{}}},r=(n(561),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("a",{staticClass:"product-container",attrs:{href:t.item.detail_content,target:"_blank",el:"nofollow"}},[n("el-image",{staticClass:"image",attrs:{src:t.item.image_path,alt:t.item.title,fit:"cover"}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"info-header"},[n("div",{staticClass:"title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.price>0?n("div",{staticClass:"price"},[t._v(t._s(t.$t("post.yuanItem")+t.item.price+t.$t("post.yuan")))]):t._e()]),t._v(" "),n("div",{staticClass:"btn"},[n("svg-icon",{staticClass:"icon",attrs:{type:"product-icon"}}),t._v(t._s(t.$t("post.buyProudct")))],1)])],1):t._e()}),[],!1,null,"14d72f28",null);e.default=component.exports;installComponents(component,{SvgIcon:n(59).default})},579:function(t,e,n){"use strict";n.r(e);n(30),n(11);var o={name:"AudioPlayer",props:{file:{type:Object,default:function(){}},currentAudio:{type:Object,default:function(){}}},data:function(){return{onDragging:!1,delta:0}},computed:{currentFile:function(){return this.currentAudio.id===this.file._jv.id},playing:function(){return this.currentAudio.currentTime&&this.currentAudio.duration}},methods:{formatDuration:function(t){var e=Math.floor(t/60),n=(t-60*e).toString().substr(0,2);return"."===n[1]&&(n="0".concat(n[0])),"".concat(e,":").concat(n)},formatCurrentTime:function(t){var e=parseInt(t/60)%60,n=(t%60).toFixed();return"".concat(e<10?"0".concat(e):e,":").concat(n<10?"0".concat(n):n)},convertToPercentage:function(){return this.currentAudio.currentTime/this.currentAudio.duration*100},onmousedown:function(){window.document.addEventListener("mousemove",this.dragging),window.document.addEventListener("mouseup",this.onMouseUp)},dragging:function(t){this.delta=t.clientX-this.$refs.progress.getBoundingClientRect().x,this.delta<0&&(this.delta=0),this.delta>290&&(this.delta=290);var time=this.delta/290*this.currentAudio.duration;this.$emit("seeking",time)},onMouseUp:function(){var time=this.delta/290*this.currentAudio.duration;this.$emit("seek",time),window.document.removeEventListener("mousemove",this.dragging),window.document.removeEventListener("mouseup",this.onMouseUp)}}},r=(n(562),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio"},[t.currentFile&&t.currentAudio.isLoading?n("div",{staticClass:"control"},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"loading",rotate:""}})],1):t.currentFile&&t.currentAudio.isPlay?n("div",{staticClass:"control",on:{click:function(e){return t.$emit("pause")}}},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-pause"}})],1):n("div",{staticClass:"control",on:{click:function(e){return t.$emit("play",t.file)}}},[n("svg-icon",{staticStyle:{"font-size":"32px"},attrs:{type:"audio-play"}})],1),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"title"},[n("span",{staticClass:"title-audio"},[t._v(t._s(t.file.fileName||t.file.file_name))]),t._v(" "),t.currentFile&&t.playing?n("span",{staticClass:"duration-audio"},[t._v("\n        "+t._s(t.formatCurrentTime(t.currentAudio.currentTime))+" /\n        "+t._s(t.formatDuration(t.currentAudio.duration))+"\n      ")]):n("span",{staticClass:"duration-audio"},[t._v("--:--")])]),t._v(" "),t.currentFile&&t.playing?n("div",{ref:"progress",staticClass:"progress",attrs:{id:"progress"}},[n("div",{staticClass:"progress-item",style:{width:t.convertToPercentage()+"%"}}),t._v(" "),n("div",{staticClass:"control-ball",style:{left:t.convertToPercentage()+"%"},attrs:{id:"control-ball"},on:{mousedown:t.onmousedown}})]):t._e()])])}),[],!1,null,"070d40bc",null);e.default=component.exports;installComponents(component,{SvgIcon:n(59).default})},581:function(t,e,n){"use strict";n.r(e);n(27),n(11);var o=n(553),time=n(547),r=n(550),c=n(537),l=n.n(c),d=n(178),m=n.n(d),h={name:"PostItem",filters:{formatDate:function(t){return Object(time.b)(t)}},mixins:[l.a,m.a],props:{item:{type:Object,default:function(){}},showShare:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},infoimage:{type:Boolean,default:!1},canDetail:{type:Boolean,default:!1}},data:function(){return{loading:!1,showVideoPop:!1,isLiked:!1,currentAudio:{id:"",url:"",currentTime:"",duration:"",audio:"",seeking:!1,isPlay:!1,isLoading:!1}}},computed:{unpaid:function(){return!(this.item.paid||0===parseFloat(this.item.price))},forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{item:{handler:function(t){this.isLiked=t.firstPost&&t.firstPost.isLiked,this.likeCount=t.firstPost&&t.firstPost.likeCount},deep:!0,immediate:!0}},mounted:function(){this.currentAudio.audio=document.getElementById("audio-player".concat(this.item&&this.item._jv&&this.item._jv.id))},methods:{handleLike:function(){var t=this;if(this.$store.getters["session/get"]("isLogin")){if(this.loading)return;if(!this.item.firstPost.canLike)return void this.$message.error(this.$t("topic.noThreadLikePermission"));this.loading=!0;var e=!this.isLiked,n={_jv:{type:"posts",id:this.item.firstPost&&this.item.firstPost._jv&&this.item.firstPost._jv.id},isLiked:e};return this.$store.dispatch("jv/patch",n).then((function(){t.$message.success(e?t.$t("discuzq.msgBox.likeSuccess"):t.$t("discuzq.msgBox.cancelLikeSuccess")),e?t.likeCount+=1:t.likeCount-=1,t.isLiked=e,t.$emit("change")}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}this.$message.warning("请登录"),window.setTimeout((function(){t.headerTologin()}),1e3)},toDetail:function(){this.canViewPostsFn()&&this.routerLink()},onClickImage:function(){this.unpaid&&this.canViewPostsFn()&&this.routerLink()},openVideo:function(){this.canViewPostsFn()&&(this.unpaid?this.routerLink():"/"===this.$route.path||"/site/search"===this.$route.path||"category-id"===this.$route.name?this.$emit("showVideoFn",this.item.threadVideo):this.showVideoPop=!0)},routerLink:function(){window.open("/thread/".concat(this.item._jv&&this.item._jv.id),"_blank")},onClickContent:function(t){var e=t||window.event;"a"!==(e.target||e.srcElement).nodeName.toLocaleLowerCase()&&this.toDetail()},canViewPostsFn:function(){var t=this;return this.item.canViewPosts?!this.canDetail||(this.$message.warning(this.$t("topic.joinAfterView")),!1):(this.$store.getters["session/get"]("isLogin")?this.$message.warning(this.$t("home.noPostingTopic")):(this.$message.warning(this.$t("core.not_authenticated")),window.setTimeout((function(){t.headerTologin()}),1e3)),!1)},formatTopicHTML:function(html){return o.a.parse(html)},extensionValidate:function(t){return r.extensionList.indexOf(t.toUpperCase())>0?t.toUpperCase():"UNKNOWN"},play:function(t){var e=this;this.unpaid?this.routerLink():this.canViewPostsFn()&&(this.currentAudio.id!==t._jv.id&&(this.resetAudio(this.currentAudio.audio),this.currentAudio.url=t.url||t.media_url,this.currentAudio.id=t._jv.id,this.currentAudio.audio.src=this.currentAudio.url,this.currentAudio.isLoading=!0,this.currentAudio.audio.load()),window.setTimeout((function(){e.currentAudio.audio.play(),e.currentAudio.isPlay=!0,e.currentAudio.audio.addEventListener("timeupdate",e.onProgressing),e.currentAudio.audio.addEventListener("ended",e.onEnded),e.$emit("audioPlay",e.currentAudio.id)}),0))},onProgressing:function(){this.currentAudio.seeking||(this.currentAudio.isLoading=!1,this.currentAudio.duration=this.currentAudio.audio.duration,this.currentAudio.currentTime=this.currentAudio.audio.currentTime)},onEnded:function(){this.resetAudio(this.currentAudio.audio)},resetAudio:function(audio){audio.removeEventListener("timeupdate",this.onProgressing),audio.removeEventListener("ended",this.onEnded),this.currentAudio.isPlay=!1,this.currentAudio.duration="",this.currentAudio.currentTime=""},pause:function(){this.currentAudio.isLoading=!1,this.currentAudio.isPlay=!1,this.currentAudio.audio.pause()},seek:function(time){this.currentAudio.seeking=!1,this.currentAudio.currentTime=time,this.currentAudio.audio.currentTime=time},seeking:function(time){this.currentAudio.seeking=!0,this.currentAudio.currentTime=time}}},v=(n(593),n(12)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-container"},[t.item.isEssence?n("div",{staticClass:"essence"},[n("svg-icon",{attrs:{type:"index-essence"}})],1):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.question.beUser.id,username:t.item.question.beUser.username,avatarUrl:t.item.question.beUser.avatarUrl,isReal:t.item.question.beUser.isReal},"prevent-jump":t.canDetail}}):t.item.user?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.user.id,username:t.item.user.username,avatarUrl:t.item.user.avatarUrl,isReal:t.item.user.isReal},"prevent-jump":t.canDetail}}):t._e(),t._v(" "),n("div",{staticClass:"main-cont"},[n("div",{staticClass:"top-flex"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.question.beUser.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.question.beUser.username))]),t._v(" "),t.item.question.beUser&&t.item.question.beUser.groups&&t.item.question.beUser.groups.length>0&&t.item.question.beUser.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.question.beUser.groups[0].name)+")\n        ")]):t._e()]):t.item.user?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.user.username))]),t._v(" "),t.item.user&&t.item.user.groups&&t.item.user.groups.length>0&&t.item.user.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.user.groups[0].name)+")\n        ")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"time"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer?n("div",{staticClass:"answered"},[t._v("\n          "+t._s(t.$t("topic.answered"))+"\n        ")]):t._e(),t._v(" "),t.item.createdAt?[t._v(t._s(t.$t("topic.publishAt"))+"\n          "+t._s(t._f("formatDate")(t.item.createdAt)))]:t._e()],2)],1),t._v(" "),5===t.item.type?n("div",[t.item.question&&0===t.item.question.is_answer?[t._v("\n        "+t._s(t.$t("topic.be"))+"\n        "),t.item.question&&t.item.question.beUser?n("nuxt-link",{staticClass:"blue",attrs:{to:t.item.question.beUser.id>0?"/user/"+t.item.question.beUser.id:""}},[t._v("@"+t._s(t.item.question.beUser.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.question"))+"\n      ")]:t._e(),t._v(" "),t.item.question&&1===t.item.question.is_answer?[t._v("\n        "+t._s(t.$t("topic.answer"))+"\n        "),t.item.user?n("nuxt-link",{staticClass:"blue",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[t._v("@"+t._s(t.item.user.username))]):t._e(),t._v("\n        "+t._s(t.$t("topic.of"))+t._s(t.$t("topic.question"))+"\n      ")]:t._e()],2):t._e(),t._v(" "),t.item.firstPost?[n("div",{staticClass:"first-post",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("div",{on:{click:t.onClickContent}},[1===t.item.type?n("div",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("home.released"))+"\n            "),n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0,expression:"\n                parseFloat(item.price) > 0 ||\n                  parseFloat(item.attachmentPrice) > 0\n              "}],staticClass:"blue",staticStyle:{"font-size":"17px",display:"inline-block","margin-right":"5px"},attrs:{type:"pay-yuan"}}),t._v(" "),n("span",{staticClass:"blue "},[t._v(t._s(t.item.title))])],1):n("div",{staticClass:"content"},[5===t.item.type?n("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"question-icon"}}):6===t.item.type?n("svg-icon",{staticClass:"icon-pay-yuan blue",attrs:{type:"product-icon"}}):parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0?n("svg-icon",{staticClass:"icon-pay-yuan grey",attrs:{type:"pay-yuan"}}):t._e(),t._v(" "),n("div",{class:{"content-block":5===t.item.type||6===t.item.type||parseFloat(t.item.price)>0,blue:5===t.item.type},domProps:{innerHTML:t._s(t.$xss(t.formatTopicHTML(t.item.firstPost.summary)))}})],1)]),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>0?n("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{url:"data-source"},expression:"{ url: 'data-source' }"}],staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},t._l(t.item.firstPost.images.slice(0,3),(function(image,e){return n("el-image",{key:e,class:{image:!0,infoimage:t.infoimage},attrs:{src:image.thumbUrl,"data-source":t.unpaid?"":image.url,alt:image.filename,fit:"cover",lazy:t.lazy},on:{click:function(e){return e.target!==e.currentTarget?null:t.onClickImage(e)}}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])])})),1):t._e(),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>3?n("div",{staticClass:"image-count",on:{click:t.toDetail}},[t._v("\n          "+t._s(t.$t("home.total"))+" "+t._s(t.item.firstPost.images.length)+"\n          "+t._s(t.$t("home.seeAllImage"))+"\n        ")]):t._e(),t._v(" "),2===t.item.type&&t.item.threadVideo?n("div",{staticClass:"video-main",on:{click:function(e){return e.stopPropagation(),t.openVideo(e)}}},[t.item.threadVideo.cover_url?n("el-image",{staticClass:"video-img-cover",attrs:{src:t.item.threadVideo.cover_url,alt:t.item.threadVideo.file_name,fit:"cover",lazy:t.lazy}}):n("div",{staticClass:"no-cover"},[t._v(t._s(t.$t("home.noPoster")))]),t._v(" "),n("svg-icon",{staticClass:"video-play",attrs:{type:"video-play"}})],1):t._e(),t._v(" "),t.item.firstPost.attachments&&t.item.firstPost.attachments.length>0?n("div",{staticClass:"attachment",on:{click:t.toDetail}},[n("svg-icon",{attrs:{type:t.extensionValidate(t.item.firstPost.attachments[0].extension)}}),t._v(" "),n("div",{staticClass:"name text-hidden"},[t._v("\n            "+t._s(t.item.firstPost.attachments[0].fileName)+"\n          ")]),t._v(" "),t.item.firstPost.attachments.length>1?n("div",{staticClass:"total"},[t._v("\n            "+t._s(t.$t("home.etc")+t.item.firstPost.attachments.length+t.$t("home.attachmentTotal"))+"\n          ")]):t._e()],1):t._e()]),t._v(" "),6===t.item.type?n("product-item",{attrs:{item:t.item&&t.item.firstPost&&t.item.firstPost.postGoods}}):t._e(),t._v(" "),4===t.item.type?n("div",{on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("audio-player",{attrs:{file:t.item&&t.item.threadAudio,"current-audio":t.currentAudio},on:{play:t.play,pause:t.pause,seek:t.seek,seeking:t.seeking}}),t._v(" "),n("audio",{staticClass:"audio-player",staticStyle:{display:"none"},attrs:{id:"audio-player"+(t.item._jv&&t.item._jv.id),src:t.currentAudio.url}})],1):t._e(),t._v(" "),t.item.location?n("nuxt-link",{staticClass:"location",attrs:{to:"/topic/position?longitude="+t.item.longitude+"&latitude="+t.item.latitude}},[n("span",{staticClass:"flex"},[n("svg-icon",{staticClass:"icon",attrs:{type:"location"}}),t._v("\n          "+t._s(t.item.location)+"\n        ")],1)]):t._e(),t._v(" "),t.canDetail?t._e():n("div",{staticClass:"bottom-handle"},[n("div",{staticClass:"left"},[n("div",{staticClass:"btn like",class:{liked:t.isLiked},on:{click:t.handleLike}},[n("svg-icon",{staticClass:"icon",attrs:{type:"like"},on:{click:t.handleLike}}),t._v("\n            "+t._s(t.isLiked?t.$t("topic.liked"):t.$t("topic.like"))+"\n            "+t._s(t.likeCount>0?t.likeCount:"")+"\n          ")],1),t._v(" "),n("div",{staticClass:"btn comment",on:{click:t.toDetail}},[n("svg-icon",{staticClass:"icon",attrs:{type:"post-comment"}}),t._v("\n            "+t._s(t.$t("topic.comment"))+"\n            "+t._s(t.item.postCount-1>0?t.item.postCount-1:"")+"\n          ")],1),t._v(" "),t.item._jv&&t.item._jv.id&&t.showShare?n("share-popover",{attrs:{"threads-id":t.item._jv.id}},[n("div",{staticClass:"btn share"},[n("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n              "+t._s(t.$t("topic.share"))+"\n            ")],1)]):t._e()],1),t._v(" "),t._t("bottom-right")],2)]:t._e()],2),t._v(" "),t.showVideoPop?n("video-pop",{attrs:{"cover-url":t.item.threadVideo.cover_url,url:t.item.threadVideo.media_url},on:{remove:function(e){t.showVideoPop=!1}}}):t._e()],1)}),[],!1,null,"b26a74fc",null);e.default=component.exports;installComponents(component,{SvgIcon:n(59).default,Avatar:n(267).default,ProductItem:n(578).default,AudioPlayer:n(579).default,SharePopover:n(582).default,VideoPop:n(549).default})},582:function(t,e,n){"use strict";n.r(e);n(266);var o=n(580),r={name:"SharePopover",props:{threadsId:{type:[String,Number],default:""},type:{type:String,default:""}},data:function(){return{qrcode:null,currentType:""}},methods:{copyLink:function(){var t=document.createElement("input");"topic"===this.type?t.value=window.location.href:t.value="".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),t.id="copyInput",document.body.appendChild(t),t.select(),document.execCommand("Copy"),this.$message.success("链接复制成功"),setTimeout((function(){t.remove()}),100)},onShowPopover:function(){this.currentType=this.type;var path=window.location.href;path="topic"===this.type?window.location.href:"".concat(window.location.protocol,"//").concat(window.location.host,"/thread/").concat(this.threadsId),this.createQrcode(path)},createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new o(t.$refs.qrcode,{width:88,height:88,text:link})}))},closeCode:function(){this.$refs.qrcode.innerHTML=""}}},c=(n(585),n(586),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"share-container"},[n("el-popover",{attrs:{placement:"bottom",width:"120","min-width":"120",trigger:"click","popper-class":"custom-popover-width"},on:{show:t.onShowPopover,hide:t.closeCode}},[n("div",{staticClass:"share-cont"},[n("div",{staticClass:"copy",on:{click:t.copyLink}},[n("svg-icon",{staticClass:"copy-icon",attrs:{type:"copy-link"}}),t._v(" "),n("span",[t._v(t._s(t.$t("core.copyLink")))])],1),t._v(" "),n("div",{staticClass:"qrcode"},[n("div",{staticClass:"qrcode-text"},[n("svg-icon",{staticClass:"wechat-logo",attrs:{type:"wechat-logo"}}),t._v(" "),n("span",[t._v(t._s(t.$t("core.wxShare")))])],1),t._v(" "),n("div",{ref:"qrcode",staticClass:"qrcode-cont"})])]),t._v(" "),n("template",{slot:"reference"},[t._t("default")],2)],2)],1)}),[],!1,null,"020e6bca",null);e.default=component.exports;installComponents(component,{SvgIcon:n(59).default})},583:function(t,e,n){"use strict";n.r(e);var o=n(580),r={name:"Advertising",data:function(){return{qrcode:null,siteName:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{forums:{handler:function(t){t&&t.set_site&&(this.siteName=t.set_site.siteName?t.set_site.siteName:"Discuz! Q")},deep:!0}},mounted:function(){this.siteName=this.forums&&this.forums.set_site&&this.forums.set_site.siteName?this.forums.set_site.siteName:"Discuz! Q",this.createQrcode(window.location.href)},destroyed:function(){this.qrcode=null},methods:{createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new o(t.$refs.qrcode,{width:70,height:70,text:link})}))}}},c=(n(589),n(12)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adv-container"},[e("div",{ref:"qrcode",staticClass:"qrcode"}),this._v(" "),e("div",{staticClass:"adv-info"},[e("div",{staticClass:"adv-title"},[this._v("扫一扫，访问移动端")]),this._v("\n    "+this._s(this.siteName)+"\n  ")])])}),[],!1,null,"42e54d68",null);e.default=component.exports},584:function(t,e,n){"use strict";n.r(e);var o={name:"Copyright",data:function(){return{year:"2019"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var t=window.currentTime||new Date;this.year=t.getFullYear()}},r=(n(590),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("div",{staticClass:"info"},[n("span",[t._v("Powered By")]),t._v(" "),n("a",{staticClass:"site",attrs:{href:"https://discuz.com",target:"_blank"}},[t._v("Discuz! Q")]),t._v(" "),n("span",{staticClass:"block"},[t._v("© "+t._s(t.year))])]),t._v(" "),t.forums&&t.forums.set_site&&(t.forums.set_site.site_record||t.forums.set_site.site_record_code)?n("div",{staticClass:"id"},[n("div",{staticClass:"site-record-code"},[n("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.forums.set_site?t.forums.set_site.site_record:""))])]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code?n("div",{staticClass:"site-record-code"},[n("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+(t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code.replace(/[^0-9]/gi,"")),target:"_blank"}},[t._v(t._s(t.forums.set_site.site_record_code))])]):t._e()]):t._e()])}),[],!1,null,"67489d5c",null);e.default=component.exports},585:function(t,e,n){"use strict";var o=n(543);n.n(o).a},586:function(t,e,n){"use strict";var o=n(544);n.n(o).a},589:function(t,e,n){"use strict";var o=n(545);n.n(o).a},590:function(t,e,n){"use strict";var o=n(546);n.n(o).a},593:function(t,e,n){"use strict";var o=n(548);n.n(o).a},607:function(t,e){},608:function(t,e,n){"use strict";n.r(e);var o={name:"UserItem",props:{item:{type:Object,default:function(){}},show:{type:String,default:"all"},isFollow:{type:Boolean,default:!1}},data:function(){return{}},methods:{toUser:function(){this.$router.push("/user/".concat(this.item.id))}}},r=(n(617),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-item-container",class:{simple:"simple"===t.show}},[n("div",{staticClass:"flex user-item",on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[n("avatar",{attrs:{user:t.item,size:"simple"===t.show?40:45}}),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"flex"},[n("span",{staticClass:"name text-hidden"},[t._v(t._s(t.item.username))]),t._v(" "),"all"===t.show&&t.item.groupName?n("span",{staticClass:"role"},[t._v(t._s(t.item.groupName))]):t._e()]),t._v(" "),n("div",{staticClass:"flex count"},["all"===t.show?n("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.topic"))+" "+t._s(t.item.threadCount||0))]):t._e(),t._v(" "),"all"===t.show?n("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.following"))+" "+t._s(t.item.followCount||0))]):t._e(),t._v(" "),n("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.followers"))+" "+t._s(t.item.fansCount||0))])])])],1),t._v(" "),t.isFollow?n("el-button",{staticClass:"follow",attrs:{type:"text"}},[t._v("\n    "+t._s(t.$t("profile.following"))+"\n  ")]):t._e()],1)}),[],!1,null,"15aefb24",null);e.default=component.exports;installComponents(component,{Avatar:n(267).default})},617:function(t,e,n){"use strict";var o=n(559);n.n(o).a},619:function(t,e,n){"use strict";var o=n(560);n.n(o).a},622:function(t,e,n){"use strict";n.r(e);n(27),n(11);var o=n(537),r={name:"RecommendUser",mixins:[n.n(o).a],props:{list:{type:Array,default:function(){return[]}}},data:function(){return{userList:[],loading:!1,pageNum:1,pageSize:4}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{list:{handler:function(t){this.userList=t},deep:!0}},mounted:function(){0===this.list.length?this.getList():this.userList=this.list},methods:{getList:function(){var t=this;this.userList=[],this.loading=!0;var e={include:"groups",limit:this.pageSize};this.$store.dispatch("jv/get",["users/recommended",{params:e}]).then((function(e){var data=e;e&&Array.isArray(e)&&data.forEach((function(t,i){data[i].groupName=t.groups[0]?t.groups[0].name:""})),t.userList=data}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},refresh:function(){this.getList()}}},c=(n(619),n(12)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"recommend-user-container"},[n("div",{staticClass:"recommend-user-title"},[t._v(t._s(t.$t("home.recommentUser")))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"recommend-user-list"},[t._l(t.userList,(function(t,e){return n("user-item",{key:e,attrs:{item:t,show:"simple"}})})),t._v(" "),0===t.userList.length?n("div",{staticClass:"no-more"},[t._v(t._s(t.$t("discuzq.list.noData")))]):t._e()],2),t._v(" "),n("div",{staticClass:"refresh",on:{click:t.refresh}},[n("svg-icon",{staticClass:"icon",attrs:{type:"refresh"}}),t._v("\n    "+t._s(t.$t("home.refresh"))+"\n  ")],1)])}),[],!1,null,"ccf1d846",null);e.default=component.exports;installComponents(component,{UserItem:n(608).default,SvgIcon:n(59).default})},755:function(t,e,n){},906:function(t,e,n){"use strict";var o=n(755);n.n(o).a},980:function(t,e,n){"use strict";n.r(e);n(61),n(29),n(20),n(39);var o=n(85),r=(n(11),n(10)),c=(n(32),n(8)),l=n(537),d=n.n(l),m=n(180);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f="user,user.groups,firstPost,firstPost.images,category,threadVideo,question,question.beUser,question.beUser.groups,firstPost.postGoods,threadAudio",_={layout:"custom_layout",name:"TopicIndex",mixins:[d.a],asyncData:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function n(){var o,r,c,l,d,h,_,y,C,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.store,r=t.params,m.a.isSpider||e(null,{}),c={include:f,"filter[isApproved]":1,"filter[isDeleted]":"no","filter[isDisplay]":"yes","page[limit]":10,"filter[topicId]":r.id},l={include:"groups",limit:4},n.prev=4,d={},n.next=8,o.dispatch("jv/get",["topics/".concat(r.id),{}]);case 8:return h=n.sent,n.next=11,o.dispatch("jv/get",["threads",{params:c}]);case 11:return _=n.sent,n.next=14,o.dispatch("jv/get",["users/recommended",{params:l}]);case 14:y=n.sent,d.topic=v({},h),Array.isArray(_)?d.threadsData=_.slice(0,10):_&&_._jv&&_._jv.json&&((C=_._jv.json.data||[]).forEach((function(t,e){C[e]=v(v(v({},t),t.attributes),{},{firstPost:t.relationships&&t.relationships.firstPost&&t.relationships.firstPost.data,user:t.relationships&&t.relationships.user&&t.relationships.user.data,groups:t.relationships&&t.relationships.groups&&t.relationships.groups.data,_jv:{id:t.id}})})),d.threadsData=C),Array.isArray(y)?d.recommendUserData=y:y&&y._jv&&y._jv.json&&((w=y._jv.json.data||[]).forEach((function(t,e){w[e]=v(v({},t),t.attributes)})),d.recommendUserData=w),e(null,d),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(4),e(null,{});case 24:case"end":return n.stop()}}),n,null,[[4,21]])})))()},data:function(){return{loading:!1,threadsData:[],total:0,recommendUserData:[],pageNum:1,pageSize:10,hasMore:!1,topicId:"",topic:{},currentAudioId:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{$route:"init"},mounted:function(){this.init()},methods:{init:function(){this.threadsData=[],this.$route.params&&this.$route.params.id&&(this.topicId=this.$route.params.id,this.getTopicDetail(this.$route.params.id),this.getThreadsList())},getTopicDetail:function(t){var e=this;this.$store.dispatch("jv/get",["topics/".concat(t),{}]).then((function(t){t&&(e.topic=t)}))},getThreadsList:function(){var t=this;this.loading=!0;var e={include:f,"filter[isApproved]":1,"filter[isDeleted]":"no","filter[isDisplay]":"yes","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[topicId]":"".concat(this.topicId)};this.$store.dispatch("jv/get",["threads",{params:e}]).then((function(e){t.hasMore=e.length===t.pageSize,t.total=e._jv.json.meta.threadCount,1===t.pageNum?(t.threadsData=e,!t.address&&e.length>0&&(t.address=e[0].address),!t.location&&e.length>0&&(t.location=e[0].location)):t.threadsData=[].concat(Object(o.a)(t.threadsData),Object(o.a)(e)),t.pageNum+=1,e._jv&&(t.hasMore=t.threadsData.length<e._jv.json.meta.threadCount)}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},loadMore:function(){this.getThreadsList()},audioPlay:function(t){this.currentAudioId&&this.currentAudioId!==t&&this.$refs["audio".concat(this.currentAudioId)][0].pause(),this.currentAudioId=t}},head:function(){return{title:this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.topic.content," - ").concat(this.forums.set_site.site_name):this.topic.content,meta:[{hid:"description",name:"description",content:this.topic.content||""}]}}},y=(n(906),n(12)),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic-content-container"},[n("div",{staticClass:"container"},[n("main",{staticClass:"cont-left"},[n("div",{staticClass:"topic-detail"},[n("div",{staticClass:"title"},[t._v("\n          #"),n("span",{staticClass:"topic-name"},[t._v(t._s(t.topic.content))]),t._v("#\n          "),1===t.topic.recommended?n("svg-icon",{attrs:{type:"recommend"}}):t._e()],1),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"item"},[t._v("\n            "+t._s(t.$t("home.topicCount",{total:t.topic.thread_count}))+"\n          ")]),t._v(" "),n("div",{staticClass:"item"},[t._v("\n            "+t._s(t.$t("home.topicViewCount",{total:t.topic.view_count}))+"\n          ")]),t._v(" "),n("share-popover",{attrs:{type:"topic"}},[n("div",{staticClass:"item hover"},[n("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n              "+t._s(t.$t("topic.share"))+"\n            ")],1)]),t._v(" "),n("nuxt-link",{staticClass:"item hover",attrs:{to:"/topic/list"}},[t._v(t._s(t.$t("topic.allTopics")))])],1)]),t._v(" "),n("div",{staticClass:"thread-list"},[t._l(t.threadsData,(function(e,o){return[4===e.type?n("post-item",{key:o,ref:"audio"+(e&&e.threadAudio&&e.threadAudio._jv&&e.threadAudio._jv.id),refInFor:!0,attrs:{item:e},on:{audioPlay:t.audioPlay}}):n("post-item",{key:o,attrs:{item:e}})]})),t._v(" "),n("list-load-more",{attrs:{loading:t.loading,"has-more":t.hasMore,"page-num":t.pageNum,length:t.threadsData.length},on:{loadMore:t.loadMore}})],2)]),t._v(" "),n("aside",{staticClass:"cont-right"},[n("div",{staticClass:"background-color"},[n("advertising")],1),t._v(" "),n("div",{staticClass:"recommend-user background-color"},[n("recommend-user",{attrs:{list:t.recommendUserData}})],1),t._v(" "),n("copyright",{attrs:{forums:t.forums}})],1)])])}),[],!1,null,"49bf115c",null);e.default=component.exports;installComponents(component,{SvgIcon:n(59).default,SharePopover:n(582).default,PostItem:n(581).default,ListLoadMore:n(577).default,Advertising:n(583).default,RecommendUser:n(622).default,Copyright:n(584).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{751:function(e,t,r){r(32);var o=r(733);r(51),e.exports={data:function(){var e=this;return{errorCodeHandler:{default:{model_not_found:function(){return e.$router.replace("/error")},not_authenticated:function(){return e.$router.push("/user/login")}},thread:{permission_denied:function(){return e.$router.replace("/error")}}}}},methods:{handleError:function(e){var t=arguments,r=this;return o(regeneratorRuntime.mark((function o(){var n,d,c,l,h,v;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n=t.length>1&&void 0!==t[1]?t[1]:"",d=e.response.data.errors,!(Array.isArray(d)&&d.length>0)){o.next=17;break}if(c=d[0].code,l=d[0].detail&&d[0].detail.length>0?d[0].detail[0]:d[0].code,h=d[0].detail&&d[0].detail.length>0?d[0].detail[0]:r.$t("core.".concat(l)),"site_closed"!==d[0].code){o.next=10;break}return o.next=9,r.siteClose(d);case 9:return o.abrupt("return",o.sent);case 10:if("need_ext_fields"!==d[0].code){o.next=14;break}return v=r.$store.getters["session/get"]("userId"),r.$router.push("/user/supple-mentary?id=".concat(v)),o.abrupt("return");case 14:"Permission Denied"===c?r.$message.error(r.$t("core.permission_denied2")):r.$message.error(h),r.errorCodeHandler.default[c]&&r.errorCodeHandler.default[c](),n&&r.errorCodeHandler[n][c]&&r.errorCodeHandler[n][c]();case 17:case"end":return o.stop()}}),o)})))()},siteClose:function(e){var t=this;return o(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("forum/setError",{code:e[0].code,detail:e[0].detail&&e[0].detail.length>0&&e[0].detail[0]});case 3:return r.next=5,t.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},765:function(e,t,r){"use strict";r.r(t);var o=r(915),n={name:"VideoPop",props:{url:{type:String,default:""},coverUrl:{type:String,default:""}},data:function(){return{options:{autoplay:!0,controls:!0},player:null}},mounted:function(){document.addEventListener("click",this.removeVideoPop),this.initVideoJs()},methods:{initVideoJs:function(){var e=this;this.player=Object(o.a)("videoPlayer",this.options,(function(){var t=this;o.a.log("Your player is ready!"),this.play(),this.on("error",(function(){t.errorDisplay.close(),t.createModal(e.$t("core.videoError"))}))}))},removeVideoPop:function(e){var t=!0;(e.path||e.composedPath&&e.composedPath()).forEach((function(e){"video-pop"===e.id&&(t=!1),e.classList&&e.classList.contains("svg-icon-video-play")&&(t=!1)})),t&&(this.$emit("remove"),this.player.dispose(),document.removeEventListener("click",this.removeVideoPop))}}},d=(r(877),r(11)),component=Object(d.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"video-pop",attrs:{id:"video-pop"}},[t("Cover"),this._v(" "),t("video",{staticClass:"video-js",attrs:{id:"videoPlayer",controls:"",width:"800px",height:"600px",preload:"auto","data-setup":"{}"}},[t("source",{attrs:{src:this.url}}),this._v(" "),t("source",{attrs:{src:this.url,type:"video/webm"}})])],1)}),[],!1,null,"625079a2",null);t.default=component.exports;installComponents(component,{Cover:r(799).default})},768:function(e,t){t.extensionList=["7Z","AI","APK","CAD","CDR","DOC","DOCX","EPS","EXE","IPA","MP3","MP4","PDF","PPT","PSD","RAR","TXT","XLS","XLSX","ZIP","JPG","WAV"]},799:function(e,t,r){"use strict";r.r(t);var o={name:"Cover",mounted:function(){var e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100%",e.style.background="rgba(0, 0, 0, .4)",e.style.zIndex="10",e.id="cover",document.querySelector("body").appendChild(e)},destroyed:function(){var e=document.querySelector("#cover");e.parentNode.removeChild(e)},render:function(){return""}},n=r(11),component=Object(n.a)(o,void 0,void 0,!1,null,null,null);t.default=component.exports},827:function(e,t,r){},877:function(e,t,r){"use strict";var o=r(827);r.n(o).a},916:function(e,t){}}]);
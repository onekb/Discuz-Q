(window.webpackJsonp=window.webpackJsonp||[]).push([[40,11],{1035:function(t,e,o){},1170:function(t,e,o){"use strict";o(1035)},1248:function(t,e,o){"use strict";o.r(e);o(34),o(25),o(39),o(53),o(54);var n=o(85),r=o(8),c=o(9),l=(o(31),o(36),o(13),o(712)),d=o.n(l),m=o(159);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v="user,user.groups,firstPost,firstPost.images,category,threadVideo,question,question.beUser,question.beUser.groups,firstPost.postGoods,threadAudio",A={layout:"custom_layout",name:"TopicIndex",mixins:[d.a],asyncData:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function o(){var n,r,c,l,d,f,A,_,y,C;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.store,r=t.params,m.a.isSpider||e(null,{}),c={include:v,"filter[isApproved]":1,"filter[isDeleted]":"no","filter[isDisplay]":"yes","page[limit]":10,"filter[topicId]":r.id},l={include:"groups",limit:4},o.prev=4,d={},o.next=8,n.dispatch("jv/get",["topics/".concat(r.id),{}]);case 8:return f=o.sent,o.next=11,n.dispatch("jv/get",["threads",{params:c}]);case 11:return A=o.sent,o.next=14,n.dispatch("jv/get",["users/recommended",{params:l}]);case 14:_=o.sent,d.topic=h({},f),Array.isArray(A)?d.threadsData=A.slice(0,10):A&&A._jv&&A._jv.json&&((y=A._jv.json.data||[]).forEach((function(t,e){y[e]=h(h(h({},t),t.attributes),{},{firstPost:t.relationships&&t.relationships.firstPost&&t.relationships.firstPost.data,user:t.relationships&&t.relationships.user&&t.relationships.user.data,groups:t.relationships&&t.relationships.groups&&t.relationships.groups.data,_jv:{id:t.id}})})),d.threadsData=y),Array.isArray(_)?d.recommendUserData=_:_&&_._jv&&_._jv.json&&((C=_._jv.json.data||[]).forEach((function(t,e){C[e]=h(h({},t),t.attributes)})),d.recommendUserData=C),e(null,d),o.next=24;break;case 21:o.prev=21,o.t0=o.catch(4),e(null,{});case 24:case"end":return o.stop()}}),o,null,[[4,21]])})))()},data:function(){return{loading:!1,threadsData:[],total:0,recommendUserData:[],pageNum:1,pageSize:10,hasMore:!1,topicId:"",topic:{},currentAudioId:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{$route:"init"},mounted:function(){this.init()},methods:{init:function(){this.threadsData=[],this.$route.params&&this.$route.params.id&&(this.topicId=this.$route.params.id,this.getTopicDetail(this.$route.params.id),this.getThreadsList())},getTopicDetail:function(t){var e=this;this.$store.dispatch("jv/get",["topics/".concat(t),{}]).then((function(t){t&&(e.topic=t)}))},getThreadsList:function(){var t=this;this.loading=!0;var e={include:v,"filter[isApproved]":1,"filter[isDeleted]":"no","filter[isDisplay]":"yes","page[number]":this.pageNum,"page[limit]":this.pageSize,"filter[topicId]":"".concat(this.topicId)};this.$store.dispatch("jv/get",["threads",{params:e}]).then((function(e){t.hasMore=e.length===t.pageSize,t.total=e._jv.json.meta.threadCount,1===t.pageNum?(t.threadsData=e,!t.address&&e.length>0&&(t.address=e[0].address),!t.location&&e.length>0&&(t.location=e[0].location)):t.threadsData=[].concat(Object(n.a)(t.threadsData),Object(n.a)(e)),t.pageNum+=1,e._jv&&(t.hasMore=t.threadsData.length<e._jv.json.meta.threadCount)}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},loadMore:function(){this.getThreadsList()},audioPlay:function(t){this.currentAudioId&&this.currentAudioId!==t&&this.$refs["audio".concat(this.currentAudioId)][0].pause(),this.currentAudioId=t}},head:function(){return{title:this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.topic.content," - ").concat(this.forums.set_site.site_name):this.topic.content,meta:[{hid:"description",name:"description",content:this.topic.content||""}]}}},_=(o(1170),o(11)),component=Object(_.a)(A,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topic-content-container"},[o("div",{staticClass:"container"},[o("main",{staticClass:"cont-left"},[o("div",{staticClass:"topic-detail"},[o("div",{staticClass:"title"},[t._v("\n          #"),o("span",{staticClass:"topic-name"},[t._v(t._s(t.topic.content))]),t._v("#\n          "),1===t.topic.recommended?o("svg-icon",{attrs:{type:"recommend"}}):t._e()],1),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"item"},[t._v("\n            "+t._s(t.$t("home.topicCount",{total:t.topic.thread_count}))+"\n          ")]),t._v(" "),o("div",{staticClass:"item"},[t._v("\n            "+t._s(t.$t("home.topicViewCount",{total:t.topic.view_count}))+"\n          ")]),t._v(" "),o("share-popover",{attrs:{type:"topic"}},[o("div",{staticClass:"item hover"},[o("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n              "+t._s(t.$t("topic.share"))+"\n            ")],1)]),t._v(" "),o("nuxt-link",{staticClass:"item hover",attrs:{to:"/topic/list"}},[t._v(t._s(t.$t("topic.allTopics")))])],1)]),t._v(" "),o("div",{staticClass:"thread-list"},[t._l(t.threadsData,(function(e,n){return[4===e.type?o("post-item",{key:n,ref:"audio"+(e&&e.threadAudio&&e.threadAudio._jv&&e.threadAudio._jv.id),refInFor:!0,attrs:{item:e},on:{audioPlay:t.audioPlay}}):o("post-item",{key:n,attrs:{item:e}})]})),t._v(" "),o("list-load-more",{attrs:{loading:t.loading,"has-more":t.hasMore,"page-num":t.pageNum,length:t.threadsData.length},on:{loadMore:t.loadMore}})],2)]),t._v(" "),o("aside",{staticClass:"cont-right"},[o("div",{staticClass:"background-color"},[o("advertising")],1),t._v(" "),o("div",{staticClass:"recommend-user background-color"},[o("recommend-user",{attrs:{list:t.recommendUserData}})],1),t._v(" "),o("copyright",{attrs:{forums:t.forums}})],1)])])}),[],!1,null,"698d1258",null);e.default=component.exports;installComponents(component,{SvgIcon:o(62).default,SharePopover:o(783).default,PostItem:o(786).default,PostItemPay:o(738).default,ListLoadMore:o(718).default,Advertising:o(742).default,RecommendUser:o(852).default,Copyright:o(743).default})},714:function(t,e){function o(e,p){return t.exports=o=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},t.exports.default=t.exports,t.exports.__esModule=!0,o(e,p)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},715:function(t,e,o){},718:function(t,e,o){"use strict";o.r(e);o(254);var n={name:"ListLoadMore",mixins:[{data:function(){return{scrollTop:0}},mounted:function(){this.addEventListener(window,"scroll",this.handleScroll)},destroyed:function(){this.removeEventListener(window,"scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;Math.ceil(t+e+10)>=o&&this.scrollLoadMore(),this.scrollTop=t},addEventListener:function(t,e,o,n){t.addEventListener?t.addEventListener(e,o,n):t.attachEvent&&t.attachEvent("on".concat(e),o)},removeEventListener:function(t,e,o,n){t.removeEventListener?t.removeEventListener(e,o,n):t.detachEvent&&t.detachEvent("on".concat(e),o)}}}],props:{loading:{type:Boolean,default:!1},hasMore:{type:Boolean,default:!1},pageNum:{type:[Number,String],default:1},length:{type:[Number,String],default:0},surplus:{type:[Number,String],default:0},loadMoreText:{type:String,default:function(){return this.$t("topic.showMore")}}},methods:{scrollLoadMore:function(){(this.pageNum-1)%5>0&&!this.loading&&this.hasMore&&this.loadMore()},loadMore:function(){this.$emit("loadMore")}}},r=o(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"load-more-container"},[t.loading?o("loading"):[t.hasMore&&(t.pageNum-1)%5==0?o("div",{staticClass:"load-more",on:{click:t.loadMore}},[t._v("\n      "+t._s(t.surplus>0?t.$t("notice.checkMore",{surplus:t.surplus}):t.loadMoreText)+"\n    ")]):t.hasMore&&(t.pageNum-1)%5>0?o("loading"):o("div",{staticClass:"no-more"},[0===t.length?o("svg-icon",{staticClass:"empty-icon",attrs:{type:"empty"}}):t._e(),t._v("\n      "+t._s(t.length>0?t.$t("discuzq.list.noMoreData"):t.$t("discuzq.list.noData"))+"\n    ")],1)]],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:o(725).default,SvgIcon:o(62).default})},721:function(t,e,o){},723:function(t,e,o){},724:function(t,e,o){},725:function(t,e,o){"use strict";o.r(e);o(254);var n={name:"Loading",props:{loading:{type:Boolean,default:!1},fontSize:{type:Number,default:32}}},r=(o(727),o(11)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading-container"},[this._v("\n  "+this._s(this.$t("discuzq.list.loading"))+"...\n")])}),[],!1,null,"a5011398",null);e.default=component.exports},727:function(t,e,o){"use strict";o(715)},730:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.default=t.exports,t.exports.__esModule=!0},732:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.default=t.exports,t.exports.__esModule=!0},735:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAMAAAApUkr4AAAAkFBMVEVHcEz3Vmf3V2j5Y3b2TVv2UF73V2f6do7yJyz0anb6bYP0Nz/1QUzzLzfzLTPzLzb6b4b6dI3zKzH7do/5aHz3U2HyJy37do/////zLjb0Nj/6bYL6cIj0RVH0Pkj2UV/6dIv5aHz4XW75YnX2S1j3V2b3jZDvPEr6nqT+3d79ys3rGSf9rrX0a3H/8vLuMj8nTZFDAAAAFnRSTlMAEkXi4ifi4uL44uLint9masnGnKS/GZQQxwAAAoRJREFUOMuNlety2jAQhTENCdMWCG0iZDuSjbEulm3p/d+uK8nWhcBMzx+YYfRxds9qtdmk2p0+X0CvXj+8fi56e6y/KaA4ENL3fQNijHWgG+gKquv6C9S27eWbtglhSwlxjP4Zo33EKFICXRmLD/Y/Ps5JG2iVMVj0sSBWHznkPfahsoR7Hw/7cckYu4A4VAmju/V5KbebmtrHPmIZlRMQgEEVVnktncR4irUkPmKkf0pPcE5mjCWZ8CIOkBZjPS2SmY0Q6a4EVUstYsADNWpF3DpWaxwls1hCpCdLsAywYSas52HmnGM8cClZTsCXdDzOSR2rjYpCBXLAWpgR6hekaTgQuHAyEus6HY8QaYHQasMY/18tFbYl0FUyBAMMvivb0+AjRLpF5cooR227wCkxUEgLuQihFojuiAsmjvpbHArkGQ4xSkugFEzjDhBEQGuHeQYDrIaf0usSI92jlVGWM5gY9EBpqbB2Y0oMRCSlxlMDrVhH3Y5pEimy8gTk50FRgTQMWN/0YGNphQK68pNeexsxUrQIECMfJGcNZAsHJ3dbCPR1UCCoTF/SK5dE6s9bAhrHUcx8AgSzM2q3h4C+GhtpI0Hx2rZtGmm0MSs7RyoEqXoXDbNXlxAGXUlubREjDQQ0cntu4HGcPSKZ79VG/XVOIw0aueKsHAVfNRMimjhcWnZueVxtR+OqQCkCFD9KU8H2EAaReVHP4gL62OSRBoZtiIEhM8a4/WEZXrDOGpZssbh3TxliGY/14jtG34dVGJfpNZaxOaJ75ZAnGzl5Por78wshMPLHZd2m6QN0Qui5jSrW0qQP1EeRvoKH/Tcd90fQL6/fTi9Or+61/XzfZQ/xP0mqs+XfwpcTAAAAAElFTkSuQmCC"},736:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAMAAAApUkr4AAAAeFBMVEVHcEzrxoDv0Zrsx4LsyYfpw3nmuGDz2avisEzpwnfx1J/js1Ty1qXjs1Tktlnz2arz2q3z2q3ir0v////jslLy2KnmuWPktVvpwXby1qTnvW3v0Znx1J/qxH7ty47uzpTsyIb36dPz3rvu0aT78+bdpkbluGv++vXsdvjHAAAAEXRSTlMAEOJB4ibi4uLipJ5mZsXJ8SZQySUAAAKRSURBVDjLdZXrdqsgEIWbpuktvRxughqUQcD3f8MzIAK26e5qVvyRz71nhuHhodXl8+st6inr8ekx6+Xx5Q+9t4DTdVBROsoYM6HmeR7H8Ybqb33fCyHID300hHMYUJlhjgyE9BvhF+LUELquGzIk2zAbovi4x/huyoCEzcZfjGX3Ie7nOEnZddmHOjKmPcrtHuNcENcNkXwMetyti3nzYcUsnCM3C/ZI+FdKcZFR2UeYWNGUfKzMGctYPzm22oON2tKvRIiMIQS5MLZEOfwlyhLHmIXtH4BEhPiZ48I5LzY6bosJMEYrdpRo+1JyfHLJaxQKDJILfK8xCmPZ4hyTtK2tLf3ivPgI0tc3Eq0HJMH+vAJz7XiUlp4SIPvQJr42msA89nYblMEqwmYB5oXsnY2QSxlMyosNvh6TO6WCLE/WTGOZUkFe6lBQuvvgHCDadgAu+gartQp7dEvaUW9b+koLg3s5oo91y8GWoLQijSmSEDujtpTSzEAE1YccGnPY6CYKffVl0iOjtpQ2DB8ApxsLOHsfHBKUBGalBpikYGtzavu+aWkCZIafQAlYgK0aXy+UGrCYIuCzwg93OPm1pdnEhghY9pUt3g4i4BwZ7AeAiJMda0sOG6hp6S7OKc4E+DRSC/YTcTOxEPss0ifYsoHaHFda5f0ClOdSohURUnUdUZ0MYzxtc90excRDBfDI8NQrG+s/pmHjy6KDDFiT0MlpNnWL1aG40FYeOX5TPHP4M5z5MKQtht2Ja2z3UffuZ0vgqajpi9wQcZGpX9sUETVGGs0WQsuRK8t0uHO5nJv7h9I7jLo9hq7Z6tVGQzjmaMb06ONHlPdTewteX+/pOf7tent+y3qKt+37x+VwEf8HVOyS3I7BqRwAAAAASUVORK5CYII="},737:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAMAAAApUkr4AAAAflBMVEVHcEz721P80ET80ET800n8xDb80ET9uyv741v8zUL8z0T80ET800j9uyv9uyr741v8vjD////9wjT8xjn74Vn8yj/81k373VX731f8zkT80kj+78z82VD75Fz721L92I77uR//+ez+57H8zGX7sQ/935v91nb7xTL8w1j8434nLmyfAAAADnRSTlMA4kef4uIW4eLiK2rD8UNrkG4AAALGSURBVDjLdZUBc+IgEIV79apWPQJJiBpMAiSE5P//wdsFAqTnPevUcYbPt/uWzcdHruP19o36HfQr6XyGv3c67AAHjnqiWlCDer36vr/f74/HowYVoK6Dt/sHr+4zI3xWFa82hkO0DvHq7z8ZjhAYxx0BxHNG2wTG5iNAPMKbOSfCpXSE6v+lBB9F7Y933sQ1IcrSMTIfz+Sj3/Wj3vqAr0skHMrAQB/zj1oaswKhv68rMgrw0W2tqLMy6MaoRsXmSotNc9OOjIl17XrF9FZKaEWXIr3RyKBUMbWwqKJ9CvfBaP+FDu1ASor0SKkjIIROcH4IgsNtK5hiTIlAYGuMFiAx0isNjKoq+bgMi5SSECInzQSHo1CbHrUyA2Nzew/jgSZuWR10g1AofOSzE5dw1Eo9yMHMiglrla77h++pY8RIjyQhJPwSNd7yLKED3FpuOX6jjK3a3ZgWMdJPQihSoKV0MkzJgODgaIZ0mwGaobEhps5HvUujeSDBBi3JJJiG9zANTJGZseY542GmBs8VJo5pUaRIT2RjAALimBQbsZMEHFWuBO9KoZHVz7objxjphZDIkBS8w1sIxYwU0EIp1ExCxnIQ6ysrJUVKSIRIGIolDBa6MVbSMk6qGHmTbm0W6cmddwgCLWDYBvhJsxDA8Apj3lQ36drWdRZpMIF/2AJJl2WSkhJwAzeOAnVEaaZ226M+ZpFuDOoCITCaYEhDOxTnFTbVVQHDtdtAtzzSyJggEONmjEq8XAYQUsQ69G6LpVXxhyRJCi1zt5ZMRujBcg6RiMEVMpg132JpKC4kR0wTFuFcwEeKK8jXZS21PG1CWEBp717JjiFJuC3QGb+DrI3bMN+EqQwfadYOmq5cmRYy94uwiUs9e3wcyQ9RsmdUb5f67gFE/lFCVG8YCDkc86fg4fReX6evTd9f35vwQXu77gAffwHkwogbkx55XAAAAABJRU5ErkJggg=="},738:function(t,e,o){"use strict";o.r(e);o(13),o(24);var n=o(729),time=o(717),r=o(741),c=o(712),l=o.n(c),d=o(157),m=o.n(d),f={name:"PostItem",filters:{formatDate:function(t){return Object(time.b)(t)}},mixins:[l.a,m.a],props:{item:{type:Object,default:function(){}},showLike:{type:Boolean,default:!0},showComment:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},infoimage:{type:Boolean,default:!1},canDetail:{type:Boolean,default:!1},padding:{type:String,default:"20.5px 20px 30px"}},data:function(){return{loading:!1,showVideoPop:!1,isLiked:!1,currentAudio:{id:"",url:"",currentTime:"",duration:"",audio:"",seeking:!1,isPlay:!1,isLoading:!1}}},computed:{unpaid:function(){return!(this.item.paid||0===parseFloat(this.item.price))},forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{item:{handler:function(t){this.isLiked=t.firstPost&&t.firstPost.isLiked,this.likeCount=t.firstPost&&t.firstPost.likeCount},deep:!0,immediate:!0}},mounted:function(){this.currentAudio.audio=document.getElementById("audio-player".concat(this.item&&this.item._jv&&this.item._jv.id))},methods:{handleLike:function(){var t=this;if(this.$store.getters["session/get"]("isLogin")){if(this.loading)return;if(!this.item.firstPost.canLike)return void this.$message.error(this.$t("topic.noThreadLikePermission"));this.loading=!0;var e=!this.isLiked,o={_jv:{type:"posts",id:this.item.firstPost&&this.item.firstPost._jv&&this.item.firstPost._jv.id},isLiked:e};return this.$store.dispatch("jv/patch",o).then((function(){t.$message.success(e?t.$t("discuzq.msgBox.likeSuccess"):t.$t("discuzq.msgBox.cancelLikeSuccess")),e?t.likeCount+=1:t.likeCount-=1,t.isLiked=e,t.$emit("change")}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}this.$message.warning("请登录"),window.setTimeout((function(){t.headerTologin()}),1e3)},toDetail:function(){this.item.isDraft||this.canViewPostsFn()&&this.routerLink()},onClickImage:function(){this.unpaid&&this.canViewPostsFn()&&this.routerLink()},openVideo:function(){this.canViewPostsFn()&&(this.unpaid?this.routerLink():"/"===this.$route.path||"/site/search"===this.$route.path||"category-id"===this.$route.name?this.$emit("showVideoFn",this.item.threadVideo):this.showVideoPop=!0)},routerLink:function(){window.open("/thread/".concat(this.item._jv&&this.item._jv.id),"_blank")},onClickContent:function(t){if(!this.item.isDraft){var e=t||window.event;"a"!==(e.target||e.srcElement).nodeName.toLocaleLowerCase()&&this.toDetail()}},canViewPostsFn:function(){var t=this;return this.item.canViewPosts?!this.canDetail||(this.$message.warning(this.$t("topic.joinAfterView")),!1):(this.$store.getters["session/get"]("isLogin")?this.$message.warning(this.$t("home.noPostingTopic")):(this.$message.warning(this.$t("core.not_authenticated")),window.setTimeout((function(){t.headerTologin()}),1e3)),!1)},formatTopicHTML:function(html){return n.a.parse(html)},extensionValidate:function(t){return r.extensionList.indexOf(t.toUpperCase())>0?t.toUpperCase():"UNKNOWN"},play:function(t){var e=this;this.unpaid?this.routerLink():this.canViewPostsFn()&&this.currentAudio.audio&&(this.currentAudio.id!==t._jv.id&&(this.resetAudio(this.currentAudio.audio),this.currentAudio.url=t.url||t.media_url,this.currentAudio.id=t._jv.id,this.currentAudio.audio.src=this.currentAudio.url,this.currentAudio.isLoading=!0,this.currentAudio.audio.load()),window.setTimeout((function(){e.currentAudio.audio.play(),e.currentAudio.isPlay=!0,e.currentAudio.audio.addEventListener("timeupdate",e.onProgressing),e.currentAudio.audio.addEventListener("ended",e.onEnded),e.$emit("audioPlay",e.currentAudio.id)}),0))},onProgressing:function(){this.currentAudio.seeking||(this.currentAudio.isLoading=!1,this.currentAudio.duration=this.currentAudio.audio.duration,this.currentAudio.currentTime=this.currentAudio.audio.currentTime)},onEnded:function(){this.resetAudio(this.currentAudio.audio)},resetAudio:function(audio){audio&&(audio.removeEventListener("timeupdate",this.onProgressing),audio.removeEventListener("ended",this.onEnded),this.currentAudio.isPlay=!1,this.currentAudio.duration="",this.currentAudio.currentTime="")},pause:function(){this.currentAudio.audio&&(this.currentAudio.isLoading=!1,this.currentAudio.isPlay=!1,this.currentAudio.audio.pause())},seek:function(time){this.currentAudio.audio&&(this.currentAudio.seeking=!1,this.currentAudio.currentTime=time,this.currentAudio.audio.currentTime=time)},seeking:function(time){this.currentAudio.seeking=!0,this.currentAudio.currentTime=time}}},h=(o(749),o(11)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add-padding-line"},[n("div",{staticClass:"post-container"},[t.item.isEssence?n("div",{staticClass:"essence"},[n("img",{attrs:{src:o(745),alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"post-header"},[5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.question.beUser.id,username:t.item.question.beUser.username,avatarUrl:t.item.question.beUser.avatarUrl,isReal:t.item.question.beUser.isReal},size:"40",round:!0,"prevent-jump":t.canDetail}}):t.item.user?n("avatar",{staticClass:"avatar",attrs:{user:{id:t.item.user.id,username:t.item.user.username,avatarUrl:t.item.user.avatarUrl,isReal:t.item.user.isReal},size:"40",round:!0,"prevent-jump":t.canDetail}}):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer&&t.item.question.beUser?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.question.beUser.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.question.beUser.username))]),t._v(" "),t.item.question.beUser&&t.item.question.beUser.groups&&t.item.question.beUser.groups.length>0&&t.item.question.beUser.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.question.beUser.groups[0].name)+")\n        ")]):t._e()]):t.item.user?n("nuxt-link",{staticClass:"user-info",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[n("span",{staticClass:"user-name"},[t._v(t._s(t.item.user.username))]),t._v(" "),t.item.user&&t.item.user.groups&&t.item.user.groups.length>0&&t.item.user.groups[0].isDisplay?n("span",{staticClass:"admin"},[t._v("\n          ("+t._s(t.item.user.groups[0].name)+")\n        ")]):t._e()]):t._e(),t._v(" "),5===t.item.type&&t.item.question&&1===t.item.question.is_answer?n("div",{staticClass:"answered"},[t._v(t._s(t.$t("topic.answered")))]):t._e()],1),t._v(" "),t.item.firstPost?n("div",{staticClass:"post-content"},[n("div",{staticClass:"first-post",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("div",{staticClass:"first-post-desc",on:{click:t.onClickContent}},[n("div",{staticClass:"first-post-desc__tips"},[0!==t.item.type&&1!==t.item.type||!t.item.isRedPacket?t._e():n("img",{staticClass:"first-post-img",attrs:{src:o(735)}}),t._v(" "),5===t.item.type&&t.item.questionTypeAndMoney&&0===t.item.questionTypeAndMoney.type?n("img",{staticClass:"first-post-img",attrs:{src:o(736)}}):5===t.item.type?n("img",{staticClass:"first-post-img",attrs:{src:o(737)}}):t._e(),t._v(" "),6===t.item.type?n("img",{staticClass:"first-post-img",attrs:{src:o(746)}}):t._e(),t._v(" "),7===t.item.type?n("img",{staticClass:"first-post-img",attrs:{src:o(747)}}):t._e(),t._v(" "),1===t.item.type?n("span",{staticClass:"first-post-tip"},[t._v(t._s(t.$t("home.releasedPost")))]):t._e(),t._v(" "),5===t.item.type&&t.item.questionTypeAndMoney&&0===t.item.questionTypeAndMoney.type?n("span",{staticClass:"first-post-tip"},[t._v("【￥"+t._s(t.item.questionTypeAndMoney.money)+"】")]):t._e(),t._v(" "),parseFloat(t.item.price)>0||parseFloat(t.item.attachmentPrice)>0?n("img",{staticClass:"first-post-coin",attrs:{src:o(748)}}):t._e()]),t._v(" "),1===t.item.type?n("p",{staticClass:"content"},[t._v(t._s(t.item.title))]):n("p",{staticClass:"content",domProps:{innerHTML:t._s(t.$xss(t.formatTopicHTML(t.item.firstPost.summary)))}}),t._v(" "),5===t.item.type?n("span",[t.item.question&&0===t.item.question.is_answer?[t.item.question&&t.item.question.beUser?n("nuxt-link",{staticClass:"questioner",attrs:{to:t.item.question.beUser.id>0?"/user/"+t.item.question.beUser.id:""}},[t._v("@"+t._s(t.item.question.beUser.username))]):t._e()]:t._e(),t._v(" "),t.item.question&&1===t.item.question.is_answer?[t.item.user?n("nuxt-link",{staticClass:"questioner",attrs:{to:t.item.user.id>0?"/user/"+t.item.user.id:""}},[t._v("@"+t._s(t.item.user.username))]):t._e()]:t._e()],2):t._e()]),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>0?n("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{url:"data-source"},expression:"{ url: 'data-source' }"}],staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},t._l(t.item.firstPost.images.slice(0,3),(function(image,e){return n("el-image",{key:e,class:{image:!0,infoimage:t.infoimage},attrs:{src:image.thumbUrl,"data-source":t.unpaid?"":image.url,alt:image.filename,fit:"cover",lazy:t.lazy},on:{click:function(e){return e.target!==e.currentTarget?null:t.onClickImage(e)}}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])])})),1):t._e(),t._v(" "),t.item.firstPost.images&&t.item.firstPost.images.length>3?n("div",{staticClass:"image-count",on:{click:t.toDetail}},[t._v("\n          "+t._s(t.$t("home.total"))+" "+t._s(t.item.firstPost.images.length)+"\n          "+t._s(t.$t("home.seeAllImage"))+"\n        ")]):t._e(),t._v(" "),2===t.item.type&&t.item.threadVideo?n("div",{staticClass:"video-main",on:{click:function(e){return e.stopPropagation(),t.openVideo(e)}}},[t.item.threadVideo.cover_url?n("el-image",{staticClass:"video-img-cover",attrs:{src:t.item.threadVideo.cover_url,alt:t.item.threadVideo.file_name,fit:"cover",lazy:t.lazy}}):n("div",{staticClass:"no-cover"},[t._v(t._s(t.$t("home.noPoster")))]),t._v(" "),n("svg-icon",{staticClass:"video-play",attrs:{type:"video-play"}})],1):t._e(),t._v(" "),t.item.firstPost.attachments&&t.item.firstPost.attachments.length>0?n("div",{staticClass:"attachment",on:{click:t.toDetail}},[n("svg-icon",{attrs:{type:t.extensionValidate(t.item.firstPost.attachments[0].extension)}}),t._v(" "),n("div",{staticClass:"name text-hidden"},[t._v("\n            "+t._s(t.item.firstPost.attachments[0].fileName)+"\n          ")]),t._v(" "),t.item.firstPost.attachments.length>1?n("div",{staticClass:"total"},[t._v("\n            "+t._s(t.$t("home.etc")+t.item.firstPost.attachments.length+t.$t("home.attachmentTotal"))+"\n          ")]):t._e()],1):t._e()]),t._v(" "),6===t.item.type?n("product-item",{attrs:{item:t.item&&t.item.firstPost&&t.item.firstPost.postGoods}}):t._e(),t._v(" "),4===t.item.type?n("div",{on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("audio-player",{attrs:{file:t.item&&t.item.threadAudio,"current-audio":t.currentAudio},on:{play:t.play,pause:t.pause,seek:t.seek,seeking:t.seeking}}),t._v(" "),n("audio",{staticClass:"audio-player",staticStyle:{display:"none"},attrs:{id:"audio-player"+(t.item._jv&&t.item._jv.id),src:t.currentAudio.url}})],1):t._e(),t._v(" "),t.item.location?n("nuxt-link",{staticClass:"location",attrs:{to:"/topic/position?longitude="+t.item.longitude+"&latitude="+t.item.latitude}},[n("span",{staticClass:"flex"},[n("svg-icon",{staticClass:"icon",attrs:{type:"location"}}),t._v("\n          "+t._s(t.item.location)+"\n        ")],1)]):t._e()],1):t._e(),t._v(" "),n("div",{staticClass:"post-footer"},[n("div",{staticClass:"time"},[t.item.createdAt?[t._v("\n          "+t._s(t.item.isDraft?t.$t("topic.saveAt"):t.$t("topic.publishAt"))+"\n          "+t._s(t._f("formatDate")(t.item.createdAt))+"\n        ")]:t._e()],2),t._v(" "),t.canDetail?t._e():n("div",{staticClass:"handle-btn"},[t.showLike?n("div",{staticClass:"btn like",class:{liked:t.isLiked},on:{click:t.handleLike}},[n("svg-icon",{staticClass:"icon",attrs:{type:"like"},on:{click:t.handleLike}}),t._v("\n          "+t._s(t.isLiked?t.$t("topic.liked"):t.$t("topic.like"))+"\n          "+t._s(t.likeCount>0?t.likeCount:"")+"\n        ")],1):t._e(),t._v(" "),t.showComment?n("div",{staticClass:"btn comment",on:{click:t.toDetail}},[n("svg-icon",{staticClass:"icon",attrs:{type:"post-comment"}}),t._v("\n          "+t._s(t.$t("topic.comment"))+"\n          "+t._s(t.item.postCount-1>0?t.item.postCount-1:"")+"\n        ")],1):t._e(),t._v(" "),t.item._jv&&t.item._jv.id&&t.showShare?n("share-popover",{attrs:{"threads-id":t.item._jv.id}},[n("div",{staticClass:"btn share"},[n("svg-icon",{staticClass:"icon",attrs:{type:"link"}}),t._v("\n            "+t._s(t.$t("topic.share"))+"\n          ")],1)]):t._e(),t._v(" "),t._t("bottom-right"),t._v(" "),t._t("btn-edit"),t._v(" "),t._t("btn-delete")],2)]),t._v(" "),t.showVideoPop?n("video-pop",{attrs:{"cover-url":t.item.threadVideo.cover_url,url:t.item.threadVideo.media_url},on:{remove:function(e){t.showVideoPop=!1}}}):t._e()],1)])}),[],!1,null,"6dfe4743",null);e.default=component.exports;installComponents(component,{Avatar:o(255).default,SvgIcon:o(62).default,ProductItem:o(779).default,AudioPlayer:o(780).default,SharePopover:o(783).default,VideoPop:o(731).default})},742:function(t,e,o){"use strict";o.r(e);var n=o(789),r={name:"Advertising",data:function(){return{qrcode:null,siteName:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{forums:{handler:function(t){t&&t.set_site&&(this.siteName=t.set_site.site_name?t.set_site.site_name:"Discuz! Q")},deep:!0}},mounted:function(){this.siteName=this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.forums.set_site.site_name:"Discuz! Q",this.createQrcode(window.location.href)},destroyed:function(){this.qrcode=null},methods:{createQrcode:function(link){var t=this;this.qrcode=null,this.$nextTick((function(){t.qrcode=new n(t.$refs.qrcode,{width:70,height:70,text:link})}))}}},c=(o(770),o(11)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"adv-container"},[e("div",{ref:"qrcode",staticClass:"qrcode"}),this._v(" "),e("div",{staticClass:"adv-info"},[e("div",{staticClass:"adv-title"},[this._v("扫一扫，访问移动端")]),this._v("\n    \n    "+this._s(this.siteName)+"\n    \n    \n  ")])])}),[],!1,null,"9f251c1a",null);e.default=component.exports},743:function(t,e,o){"use strict";o.r(e);o(52);var n={name:"Copyright",data:function(){return{year:"2019"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}},code:function(){return this.$store.state.site.info.attributes.set_site.site_record_code.replace(/[^0-9]+/g,"")||""}},mounted:function(){var t=window.currentTime||new Date;this.year=t.getFullYear()}},r=(o(771),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"copyright"},[o("div",{staticClass:"info"},[o("span",[t._v("Powered By")]),t._v(" "),o("a",{staticClass:"site",attrs:{href:"https://discuz.com",target:"_blank"}},[t._v("Discuz! Q")]),t._v(" "),o("span",{staticClass:"block"},[t._v("© "+t._s(t.year))])]),t._v(" "),t.forums&&t.forums.set_site&&(t.forums.set_site.site_record||t.forums.set_site.site_record_code)?o("div",{staticClass:"id"},[o("div",{staticClass:"site-record-code"},[o("a",{attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.forums.set_site?t.forums.set_site.site_record:""))])]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code?o("div",{staticClass:"site-record-code"},[o("a",{attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="+t.code,target:"_blank"}},[t._v(t._s(t.forums&&t.forums.set_site&&t.forums.set_site.site_record_code))])]):t._e()]):t._e()])}),[],!1,null,"66f34dac",null);e.default=component.exports},745:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAMAAADQfyDnAAAARVBMVEVHcEz/1t7/MF//M2D/TXL/YoH/d5H/NWP/8/X/2N/+HlX/H1b/+Pr/kqb/sb//NWL/197/W3z/fJX/5On/n7H/ydP/R22l4cNJAAAACnRSTlMAM4RE1sCo5g4grga5YgAAAxZJREFUWMOllol26yAMRPW6pR12vPz/pz6BDRbYTe3YPUmT2LoMIwmgD6Wg0iu9pwtYvtcfxCc03x5vP0T0tUUKiohuLpR3pHHweM+E9lY3WMbKkddRkG88fiqhPFafwhot7rRPZBlvJDRgJx/Vky68gPEgKj5gk4jNWDQOF0WqmADQSliN2RmQ/9sZO1+LZ0SbBiFOyYg4qHGEwlE2CqD4IAJRDRii9a5xpKSF/6gniHTl12yd4fioqjWtpdQQ0AhcVE/WDmYazGF9QQC+v1Q/QiYYPcyTcX6sNdEMQ0TdLNZn8u05Wq2tH+FG542LS7YhK1MCsgbZGqOezDA4Zy28dcPgpYfYA4g+mxJUwYVh9Dyutc5br43aNygdE9ZqCxyjo7OsIeop6LDvzw7w/SkKUKV4+Nl7HzxbYcIQ2lrZA5iw9YRKuWMVerZMMIyLVkxi6Vc6IIhlI8Vb452dOAthEstWKRQ6IEiZHD84rkRrg+5rKWugQ0JtWsdRSYBV3gYbxsjXGCWF6DcNyyDsGvIUNGfTeK2190a2Lf1GKEufikZxAtYMmpQXUSk4BkgNHBPVsMSjxEeHsgMQPdFQCJ7zb1wefwwclpjPPGg1AHHkYM6Em6KaNFuZ8oFuRTqqh6Vz18Jy3uc+jRP3J7aFj4hOzCJ94nbKMZYrQ09jKWp6TpCVnwjW5HyEkfXgqQeZ8IFml+UVQQejZ7l/PQUwoel+x+qzmyyhLpxEf2ool+MVJflvPS90M35tpp2G1QROg8srBAuZ5rrdEZ3TwO+pGhCTBifcJTqhQW4VKQsQhwk6Rag7dtonJrm94G8A/XxsRwWF7uRwBpAIUM1BTBwAiC5oQLOtLpsM0XkN/RnopIlVQz2cQR5D6BKhP8idV7BpwLainynlnZPdafeCgpWA7uQMukJ4iFoqLtJVQnMEuTaFQkBzYKPrhKYergIEYcklrgLo36PtK3qFIE5BLwDSLLaDIl4ALLMAXp1C9eEGgAmX23lPgFKXS3mXi5enIHygGwTcA6wa6BYBuAXIGugewd0EMIHuEv4DyXJgDPfCK6IAAAAASUVORK5CYII="},746:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAMAAAApUkr4AAAAZlBMVEVHcEz/oEn/r1H/iDz/oEn/oEn/oEn/t1X/iTz/oEn/hTr/ulf/slP/////iTz/jT3/tlX/kkD/p03/rVD/lkX/oUn/uVb/m0b/eSf/wJX/59f/t4v/hTL/9/H/zKX/2MD/nGP/rXlLrqcVAAAACnRSTlMAasPJIkef4uLi2v9OvAAAAnNJREFUOMt9lY1yqyAQhZM0sS0VEAvyK+r7v2QXUFnsvd1MJJkJX87uWZbbDcfz/vhE8V5ef0fXADqppdZaKTWqscT3Hj3EMAzTNH1NX028EOElhUwEYCSKqoy+3wkZAtsw5YkIAgiyQJRqGd9XRon06R1lIcQ/Gd9XxoQYALlXBBcHQ2vdFAQVo7/qwHl0/MrY4vA7lb2kiFHT4LwwjlSkpzSetmz0DA8MlEy19O1ACMFn2oQdR23r16yj5vKqIhjfIUy2BOpHJSJ1NoWjrhT1TOYUcWeJITLCQFjq4DnTaIKAqgZHY9IXZrr0TUkfNQ/GDh2ckWA8ndeQHkJqNepQNUWsAlvKIDhnSQZnbS3AXLmitJoWm05LX4QUCKggpCG4hJDW2xJxaNqjtmaXCUkH5wH+0qzOgavORLoobWPezTMixrNPIZdq6QchJwRKQBew0kAvOCij5rscUdYZIZClANgRjME/O4BY6x2FqmxiN3nZC+LwcamWklMFI2ahPtZdioMaY0CWTyv4XFt9QpaSzEgUHuDXm6feAGrd6CwhMZfqs0GvCEjKHuMDGNVSUiLJIAR0r0tRkSoqwkJnqAkV++rRqcWWngxikiEz9RAWhERhXKliKCutY2x4IEtPBiHG5942ub9BPofE3DJTx8o616NfRdwIQQyzek8CCArGLssmuPRWGm83afNq6xSrTfFsEMEYkts0HbcARyYEnt4CGlcCUOUJ1CfGrbUUx97q0CNpVx1k0Opa1UmIJvdbo6JYy84JlLbLY5ju0zQT0PXx/K3hypDobjkYzQVE/s+4QOrd0j3xLdh9/Bmf5YXjcW8Atx8kQWg3EVPZPwAAAABJRU5ErkJggg=="},747:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAdCAMAAAApUkr4AAAAkFBMVEVHcEwwq/svuf8wqvs0mfgxsP8xpfk1jPQsxv8yp/wxp/swqfstwf80mfk0kfYtwf8sxP8sxf81jfX///80kfYtwf81i/MuvP81lfcvt/8znvo0mfgyp/wws/8wrP4yo/sxsP/J4/6PxP0ll/mIuPkih/Rwyf9jtPxhqfnx+P8si/UbevGc0v6r1f7i8P8nn/vkthLYAAAAEXRSTlMASOIu4uIN4uLiHGriw56fyad8N28AAAKRSURBVDjLbZXrdqowEIXrsaeteuzFpBEBwdwgIJf3f7szCSGZ2G5/yFouPvfMzkyenrD2h+PO66/TH69/Xm8/9ZEA3vO8BpWgqqput9v1egGdrb4Xff3QBhG2RZ47hiWUDrEyLOX7/DtjHwmbolgZdbDhGcjII+ETeciAgHx4yBUxfCkp5RAIL1lWIEYdarn+9JEwtgHx7hColGFoqtXHdRib86Xx+koYL7EMqxVS17kipAEnrh1VSYi4VB1x4omPGOmRZnRB5EUxEKS2apYH+BqEmMiY9DREuqfUMSwk0xwjqll4Fhjg8NOQ5BLqOFCrBUG1UmoinbISopRmhDpAntngbGOkx9PKyKggiaZZj6TjomxNa9UkiBDpywm0IGhaBpifc+AQERrE8RELkW48Ahi9LQOMcOULaeeR8M4hoBUdmQY0Lm/xUDAgLAyqtb5DosJYtYWcjfvvThIy2n40F3TUY6SvjLGTbwelPetCGV0rs8W+WUNGc4siZQ4RalGxE2MtdQ+uuBRkMgZcLCfd+4iRWkJg0P7es/v9zqCvIq/zthWcdGL0zbygwUeRsoVBPQJC6UYF1SiZ53J5FTBja4DaoYmLkbJFa0t75XshgFBoeAseJzAweRuBEbbNZkX4WnooQjgKtwhzh4b2cWTi5H+iSFnwYY2ceg2tUGDaAEJKbUinbcRZQcgNbY/tYx0rw8pRjHKTX0jFB+lkOPcryBLiodgmhBOzDYGD3uueui1WSC2XZThLGVYhIEKiLlLMoOvI0XWLzbnf6nMZt2ksYzmaiMGYP+p+iRXJUo+XC7o+cCtcLJTFyUfbtEwvKHwBbdijoJTEB2Ksl8vHHt+C76+/69l+Vu2ed/GuPR4SwNN/LVuYVScuqLYAAAAASUVORK5CYII="},748:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAALVBMVEX5rD75rD75rD75rD75rD75rD/5rD/5rD/5rD75rD/5rD75rD/5rD/5rD/5rD5fyIAMAAAADnRSTlMCkdkQMMNUIvFFg+WsZNscE4cAAADBSURBVBjTY2BgYGAReqfowAAGbF0ODCwrEsDsQOYcpWMGoiAm0wS5d+/ePeRUALIjrd+BwOapQNUC+ybse/fO8jVjAgMH47tmi3fPLd4JNDB42b17xP7Oed+7x0sYRPLevQsoYXr37pkjg8K5d+/eMMQBCSaGB3rvdO8y37307hEfiC1ezlBeA2ID1TwNNQ+NA6kB6l0AtJELpBdo5rt35kAMNBNoF4QNtAvohnfvPN+9A7kB2W0obkb2C4of4X4HAPLQaUz8SV+2AAAAAElFTkSuQmCC"},749:function(t,e,o){"use strict";o(721)},770:function(t,e,o){"use strict";o(723)},771:function(t,e,o){"use strict";o(724)},772:function(t,e,o){},773:function(t,e,o){},790:function(t,e){function o(){return t.exports=o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,o.apply(this,arguments)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},792:function(t,e,o){"use strict";o.r(e);var n={name:"UserItem",props:{item:{type:Object,default:function(){}},show:{type:String,default:"all"},isFollow:{type:Boolean,default:!1}},data:function(){return{}},methods:{toUser:function(){this.$router.push("/user/".concat(this.item.id))}}},r=(o(849),o(11)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"user-item-container",class:{simple:"simple"===t.show}},[o("div",{staticClass:"flex user-item",on:{click:function(e){return e.stopPropagation(),t.toUser(e)}}},[o("avatar",{attrs:{user:t.item,size:"simple"===t.show?43:45}}),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"flex"},[o("span",{staticClass:"name text-hidden"},[t._v(t._s(t.item.username))]),t._v(" "),"all"===t.show&&t.item.groupName?o("span",{staticClass:"role"},[t._v(t._s(t.item.groupName))]):t._e()]),t._v(" "),o("div",{staticClass:"flex count"},["all"===t.show?o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.topic"))+" "+t._s(t.item.threadCount||0))]):t._e(),t._v(" "),"all"===t.show?o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.following"))+" "+t._s(t.item.followCount||0))]):t._e(),t._v(" "),o("div",{staticClass:"count-item"},[t._v(t._s(t.$t("profile.followers"))+" "+t._s(t.item.fansCount||0))])])])],1),t._v(" "),t.isFollow?o("el-button",{staticClass:"follow",attrs:{type:"text"}},[t._v("\n    "+t._s(t.$t("profile.following"))+"\n  ")]):t._e()],1)}),[],!1,null,"99f85d16",null);e.default=component.exports;installComponents(component,{Avatar:o(255).default})},795:function(t,e,o){var n=o(726).default,r=o(730);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?r(t):e},t.exports.default=t.exports,t.exports.__esModule=!0},796:function(t,e){function o(e){return t.exports=o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.default=t.exports,t.exports.__esModule=!0,o(e)}t.exports=o,t.exports.default=t.exports,t.exports.__esModule=!0},797:function(t,e,o){var n=o(714);t.exports=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},798:function(t,e,o){var n=o(714),r=o(732);function c(e,o,l){return r()?(t.exports=c=Reflect.construct,t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=c=function(t,e,o){var a=[null];a.push.apply(a,e);var r=new(Function.bind.apply(t,a));return o&&n(r,o.prototype),r},t.exports.default=t.exports,t.exports.__esModule=!0),c.apply(null,arguments)}t.exports=c,t.exports.default=t.exports,t.exports.__esModule=!0},799:function(t,e,o){var n=o(714);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)},t.exports.default=t.exports,t.exports.__esModule=!0},849:function(t,e,o){"use strict";o(772)},850:function(t,e,o){"use strict";o(773)},852:function(t,e,o){"use strict";o.r(e);o(13),o(24);var n=o(712),r={name:"RecommendUser",mixins:[o.n(n).a],props:{list:{type:Array,default:function(){return[]}}},data:function(){return{userList:[],loading:!1,pageNum:1,pageSize:4}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{list:{handler:function(t){this.userList=t},deep:!0}},mounted:function(){0===this.list.length?this.getList():this.userList=this.list},methods:{getList:function(){var t=this;this.userList=[],this.loading=!0;var e={include:"groups",limit:this.pageSize};this.$store.dispatch("jv/get",["users/recommended",{params:e}]).then((function(e){var data=e;e&&Array.isArray(e)&&data.forEach((function(t,i){data[i].groupName=t.groups[0]?t.groups[0].name:""})),t.userList=data}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},refresh:function(){this.getList()}}},c=(o(850),o(11)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"recommend-user-container"},[o("div",{staticClass:"recommend-user-title"},[t._v(t._s(t.$t("home.recommentUser")))]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"recommend-user-list"},[t._l(t.userList,(function(t,e){return o("user-item",{key:e,attrs:{item:t,show:"simple"}})})),t._v(" "),0===t.userList.length?o("div",{staticClass:"no-more"},[t._v(t._s(t.$t("discuzq.list.noData")))]):t._e()],2),t._v(" "),o("div",{staticClass:"refresh",on:{click:t.refresh}},[o("svg-icon",{staticClass:"icon",attrs:{type:"refresh"}}),t._v("\n    "+t._s(t.$t("home.refresh"))+"\n  ")],1)])}),[],!1,null,"3ec56a7b",null);e.default=component.exports;installComponents(component,{UserItem:o(792).default,SvgIcon:o(62).default})}}]);
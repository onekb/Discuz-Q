(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{519:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.title+" - "+this.forums.set_site.site_name:this.title}}}},528:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}));n(170),n(51);var r=function(time){var t=(window.currentTime||new Date)-new Date(time);return parseInt(parseInt(t/1e3,0)/60,0)<60?"".concat(Math.ceil(t/1e3/60)>0?Math.ceil(t/1e3/60):1,"分钟前"):parseInt(parseInt(parseInt(t/1e3,0)/60,0)/60,0)<16?"".concat(Math.ceil(t/1e3/60/60)>0?Math.ceil(t/1e3/60/60):1,"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),n=Math.round(new Date/1e3)-e,r=parseInt(n/86400,0);return r>365?parseInt(n/86400/365,0)+"年":r+"天"}},534:function(t,e,n){"use strict";n(39);var r=n(22),o=(n(37),n(29),n(19),n(11),n(36),n(502),n(170),n(51),n(503)),c=(n(505),n(172),n(504));function l(t,e){l=function(t,e){return new m(t,void 0,e)};var n=Object(c.a)(RegExp),d=RegExp.prototype,h=new WeakMap;function m(t,e,r){var o=n.call(this,t,e);return h.set(o,r||h.get(t)),o}function f(t,e){var g=h.get(e);return Object.keys(g).reduce((function(e,n){return e[n]=t[g[n]],e}),Object.create(null))}return Object(o.a)(m,n),m.prototype.exec=function(t){var e=d.exec.call(this,t);return e&&(e.groups=f(e,this)),e},m.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var n=h.get(this);return d[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+n[e]})))}if("function"==typeof e){var o=this;return d[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==Object(r.a)(t[t.length-1])&&t.push(f(t,o)),e.apply(this,t)}))}return d[Symbol.replace].call(this,t,e)},l.apply(this,arguments)}var d={topic:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="topic"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/topic/".concat(t);return'<a href="'.concat(e,'" class="content-topic a-blue">').concat(text,"</a> ")}))}))}},usermention:function(text){if(text){var t=l(/<[s\u017F]pan[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*id="member"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*value="([0-9A-Z_a-z\u017F\u212A]+)"[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*>((?:(?!<)[\s\S])+)<\/[s\u017F]pan>/gim,{value:1,string:2});return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){var e="/user/".concat(t);return'<a href="'.concat(e,'" class="content-member a-blue">').concat(text,"</a> ")}))}))}},parseHtml1:function(text){if(text){var t=/&lt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return"<"}))}))}},parseHtml2:function(text){if(text){var t=/&gt;/gim;return text.replace(t,(function(e){return e.replace(t,(function(content,t,text){return">"}))}))}}};e.a={parse:function(text){for(var t in d)text=d[t](text);return text}}},539:function(t,e,n){},598:function(t,e,n){"use strict";var r=n(539);n.n(r).a},599:function(t,e,n){"use strict";n.r(e);n(26),n(11);var r=n(518),o={name:"RecommendUser",mixins:[n.n(r).a],props:{list:{type:Array,default:function(){return[]}}},data:function(){return{userList:[],loading:!1,pageNum:1,pageSize:4}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},watch:{list:{handler:function(t){this.userList=t},deep:!0}},mounted:function(){0===this.list.length?this.getList():this.userList=this.list},methods:{getList:function(){var t=this;this.userList=[],this.loading=!0;var e={include:"groups",limit:this.pageSize};this.$store.dispatch("jv/get",["users/recommended",{params:e}]).then((function(e){var data=e;e&&Array.isArray(e)&&data.forEach((function(t,i){data[i].groupName=t.groups[0]?t.groups[0].name:""})),t.userList=data}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},refresh:function(){this.getList()}}},c=(n(598),n(13)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"recommend-user-container"},[n("div",{staticClass:"recommend-user-title"},[t._v(t._s(t.$t("home.recommentUser")))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"recommend-user-list"},[t._l(t.userList,(function(t,e){return n("user-item",{key:e,attrs:{item:t,show:"simple"}})})),t._v(" "),0===t.userList.length?n("div",{staticClass:"no-more"},[t._v(t._s(t.$t("discuzq.list.noData")))]):t._e()],2),t._v(" "),n("div",{staticClass:"refresh",on:{click:t.refresh}},[n("svg-icon",{staticClass:"icon",attrs:{type:"refresh"}}),t._v("\n    "+t._s(t.$t("home.refresh"))+"\n  ")],1)])}),[],!1,null,"f1a7d5f2",null);e.default=component.exports;installComponents(component,{UserItem:n(589).default,SvgIcon:n(67).default})},707:function(t,e,n){},708:function(t,e,n){},857:function(t,e,n){"use strict";var r=n(707);n.n(r).a},858:function(t,e,n){"use strict";var r=n(708);n.n(r).a},907:function(t,e,n){"use strict";n.r(e);var r=n(534),time=n(528),o=n(518),c={name:"TopicItem",filters:{formatDate:function(t){return Object(time.b)(t)}},mixins:[n.n(o).a],props:{item:{type:Object,default:function(){}},showShare:{type:Boolean,default:!0}},data:function(){return{loading:!1,showVideoPop:!1,showViewer:!1}},computed:{thread:function(){return this.item&&this.item.lastThread&&this.item.lastThread.length>0&&this.item.lastThread[0]||{}},unpaid:function(){return this.thread&&!(this.thread.paid||0===parseFloat(this.thread.price))}},methods:{toDetail:function(){this.canViewPostsFn()&&this.routerLink()},onClickImage:function(){this.thread&&!this.thread.unpaid||!this.canViewPostsFn()||this.routerLink()},openVideo:function(){this.canViewPostsFn()&&(this.thread&&this.thread.unpaid?this.routerLink():this.showVideoPop=!0)},routerLink:function(){window.open("/thread/".concat(this.thread&&this.thread._jv&&this.thread._jv.id),"_blank")},onClickContent:function(t){var e=t||window.event;"a"!==(e.target||e.srcElement).nodeName.toLocaleLowerCase()&&this.toDetail()},canViewPostsFn:function(){return!(this.thread&&!this.thread.canViewPosts)||(this.$message.error(this.$t("home.noPostingTopic")),!1)},formatTopicHTML:function(html){return r.a.parse(html)}}},l=(n(858),n(13)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic-container"},[n("div",{staticClass:"main-cont"},[n("div",{staticClass:"top-flex"},[n("div",{staticClass:"topic-title"},[t._v("\n        #"),n("span",{staticClass:"topic-name"},[t._v(t._s(t.item.content))]),t._v("#\n        "),1===t.item.recommended?n("svg-icon",{attrs:{type:"recommend"}}):t._e()],1),t._v(" "),n("div",{staticClass:"view-count"},[t._v(t._s(t.$t("home.topicViewCount",{total:t.item.view_count})))])]),t._v(" "),t.thread&&t.thread.firstPost?[n("div",{staticClass:"first-post",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},[n("div",{on:{click:t.onClickContent}},[n("div",{staticClass:"content"},[n("svg-icon",{directives:[{name:"show",rawName:"v-show",value:parseFloat(t.thread.price)>0,expression:"parseFloat(thread.price) > 0"}],staticClass:"icon-pay-yuan",attrs:{type:"pay-yuan"}}),t._v(" "),n("div",{class:{"content-block":parseFloat(t.thread.price)>0},domProps:{innerHTML:t._s(t.$xss(t.formatTopicHTML(t.thread.firstPost.summary)))}})],1)]),t._v(" "),t.thread?n("div",{directives:[{name:"viewer",rawName:"v-viewer",value:{url:"data-source"},expression:"{ url: 'data-source' }"}],staticClass:"images",on:{click:function(e){return e.target!==e.currentTarget?null:t.toDetail(e)}}},t._l(t.thread.firstPost.images.slice(0,3),(function(image,e){return n("el-image",{key:e,staticClass:"image",attrs:{src:image.thumbUrl,"data-source":t.unpaid?"":image.url,alt:image.filename,fit:"cover",lazy:""},on:{click:function(e){return e.target!==e.currentTarget?null:t.onClickImage(e)}}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"el-icon-loading"})])])})),1):t._e(),t._v(" "),t.thread.firstPost.images&&t.thread.firstPost.images.length>3?n("div",{staticClass:"image-count",on:{click:t.toDetail}},[t._v("\n          "+t._s(t.$t("home.total"))+" "+t._s(t.thread.firstPost.images.length)+"\n          "+t._s(t.$t("home.seeAllImage"))+"\n        ")]):t._e()])]:t._e(),t._v(" "),n("div",{staticClass:"thread-count"},[t._v(t._s(t.$t("home.topicCount",{total:t.item.thread_count})))])],2)])}),[],!1,null,"f5a32126",null);e.default=component.exports;installComponents(component,{SvgIcon:n(67).default})},954:function(t,e,n){"use strict";n.r(e);n(60),n(29),n(19),n(39);var r=n(85),o=(n(11),n(9)),c=(n(32),n(7)),l=n(518),d=n.n(l),h=n(173),head=n(519),m=n.n(head);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={layout:"custom_layout",name:"TopicList",mixins:[d.a,m.a],asyncData:function(t,e){return Object(c.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,d,m,f,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.store,h.a.isSpider||e(null,{}),o={include:"lastThread,lastThread.firstPost,lastThread.firstPost.images","page[limit]":10},c={include:"groups",limit:4},n.prev=4,l={},n.next=8,r.dispatch("jv/get",["topics",{params:o}]);case 8:return d=n.sent,n.next=11,r.dispatch("jv/get",["users/recommended",{params:c}]);case 11:m=n.sent,Array.isArray(d)?l.topicsData=d.slice(0,10):d&&d._jv&&d._jv.json&&((f=d._jv.json.data||[]).forEach((function(t,e){f[e]=v(v(v({},t),t.attributes),{},{_jv:{id:t.id}})})),l.topicsData=f),Array.isArray(m)?l.recommendUserData=m:m&&m._jv&&m._jv.json&&((_=m._jv.json.data||[]).forEach((function(t,e){_[e]=v(v({},t),t.attributes)})),l.recommendUserData=_),e(null,l),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(4),e(null,{});case 20:case"end":return n.stop()}}),n,null,[[4,17]])})))()},data:function(){return{title:this.$t("topic.topictitlelist"),loading:!1,topicsData:[],total:0,recommendUserData:[],pageNum:1,pageSize:10,hasMore:!1,filterSort:[{label:this.$t("topic.hot"),value:"-viewCount"},{label:this.$t("topic.contents"),value:"-threadCount"}],sort:""}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){this.getTopicList()},methods:{getTopicList:function(){var t=this;this.loading=!0;var e={include:"lastThread,lastThread.firstPost,lastThread.firstPost.images","page[number]":this.pageNum,"page[limit]":this.pageSize,sort:this.sort};this.$store.dispatch("jv/get",["topics",{params:e}]).then((function(e){t.hasMore=e.length===t.pageSize,1===t.pageNum?t.topicsData=e:t.topicsData=[].concat(Object(r.a)(t.topicsData),Object(r.a)(e)),t.pageNum+=1,e&&e._jv&&e._jv.json&&e._jv.json.meta&&(t.hasMore=t.topicsData.length<e._jv.json.meta.total,t.total=e._jv.json.meta.total)}),(function(e){t.handleError(e)})).finally((function(){t.loading=!1}))},loadMore:function(){this.getTopicList()},handleCommandSort:function(t){this.sort=t,this.pageNum=1,this.topicsData=[],this.getTopicList()}}},w=(n(857),n(13)),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic-content-container"},[n("div",{staticClass:"container"},[n("main",{staticClass:"cont-left"},[n("div",{staticClass:"header-filter"},[n("div",{staticClass:"title"},[t._v(t._s(t.total+t.$t("topic.topicCount")))]),t._v(" "),n("div",{staticClass:"filter"},[n("el-dropdown",{staticClass:"filter-dropdown",attrs:{placement:"bottom"},on:{command:t.handleCommandSort}},[n("span",{staticClass:"el-dropdown-link",class:{active:""!==t.sort}},[t._v("\n              "+t._s(t.$t("core.sort"))),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.filterSort,(function(e,r){return n("el-dropdown-item",{key:r,class:{active:e.value===t.sort},attrs:{command:e.value}},[t._v(t._s(e.label))])})),1)],1)],1)]),t._v(" "),n("div",{staticClass:"topic-list"},[t._l(t.topicsData,(function(t,e){return[n("topic-item",{key:e,attrs:{item:t}})]})),t._v(" "),n("list-load-more",{attrs:{loading:t.loading,"has-more":t.hasMore,"page-num":t.pageNum,length:t.topicsData.length},on:{loadMore:t.loadMore}})],2)]),t._v(" "),n("aside",{staticClass:"cont-right"},[n("div",{staticClass:"background-color"},[n("advertising")],1),t._v(" "),n("div",{staticClass:"recommend-user background-color"},[n("recommend-user",{attrs:{list:t.recommendUserData}})],1),t._v(" "),n("copyright",{attrs:{forums:t.forums}})],1)])])}),[],!1,null,"005b8c80",null);e.default=component.exports;installComponents(component,{TopicItem:n(907).default,ListLoadMore:n(558).default,Advertising:n(564).default,RecommendUser:n(599).default,Copyright:n(565).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1036:function(t,e,r){"use strict";var n=r(925);r.n(n).a},1194:function(t,e,r){"use strict";r.r(e);r(12),r(32);var n=r(8),o=r(751),c=r.n(o),head=r(752),d=r.n(head),time=r(758),f={layout:"center_layout",name:"SiteInfo",mixins:[c.a,d.a],data:function(){return{title:this.$t("manage.circleinfo"),userId:this.$store.state.user.info.id,groupsId:"",inputInfo:"",isModify:!1,loading:!1,permissionList:[]}},computed:{forums:function(){var t=this.$store.state.site.info.attributes;return t},userInfo:function(){return this.$store.state.user.info.attributes||{}}},mounted:function(){this.inputInfo=this.forums&&this.forums.set_site&&this.forums.set_site.site_introduction,this.groupsId=this.forums&&this.forums.user&&this.forums.user.groups&&this.forums.user.groups.length>0&&this.forums.user.groups[0].id,this.getPermissions(),this.reloadForums()},methods:{jump2ManagePage:function(){this.forums&&this.forums.other&&(this.forums.other.can_edit_user_group||this.forums.other.can_edit_user_status)&&this.$router.push("/manage")},reloadForums:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("site/getSiteInfo");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))()},handleModify:function(){this.isModify=!this.isModify,this.isModify&&(this.inputInfo=this.forums&&this.forums.set_site&&this.forums.set_site.site_introduction)},confirmModify:function(){var t=this;if(!this.loading){var e={data:[{attributes:{key:"site_introduction",value:this.inputInfo,tag:"default"}}]};this.loading=!0,this.$store.dispatch("jv/post",[{_jv:{type:"settings"}},{data:e}]).then(Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("site/getSiteInfo");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:t.isModify=!1,t.$message.success(t.$t("discuzq.msgBox.modifySuccess"));case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).catch((function(e){t.handleError(e)})).finally((function(){t.loading=!1}))}},getPermissions:function(){var t=this;this.$store.dispatch("jv/get",["groups",{params:{"filter[type]":"invite",include:["permission"]}}]).then((function(e){var r=t.forums&&t.forums.user&&t.forums.user.groups&&t.forums.user.groups.length>0&&t.forums.user.groups[0].id,n=[];e.forEach((function(t){+t._jv.id==+r&&(n=(n=t.permission).filter((function(t){return"createThread"!==t.permission})))})),t.permissionList=n.filter((function(t){return"user.edit"!==t.permission}))}))},handleExpiredAt:function(t){return t?t.substr(0,10):this.$t("site.permanent")},handleDays:function(t){var e=Math.round(new Date(t)/1e3);return Object(time.c)(e)}}},l=(r(1036),r(11)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-info-container"},[t.forums?n("div",[n("img",{staticClass:"logo",attrs:{src:t.forums.set_site&&t.forums.set_site.site_logo?t.forums.set_site.site_logo:r(185),alt:"logo"}}),t._v(" "),n("div",{staticClass:"site-info"},[n("div",{staticClass:"avatar"},[t.forums.set_site&&t.forums.set_site.site_author?n("avatar",{attrs:{user:{id:t.forums.set_site.site_author.id,username:t.forums.set_site.site_author.username,avatarUrl:t.forums.set_site.site_author.avatar},size:40,round:!0}}):n("avatar",{attrs:{user:{id:0,username:"无",avatarUrl:""},"prevent-jump":!0,size:40,round:!0}}),t._v(" "),t.forums.set_site&&t.forums.set_site.site_author?n("div",{staticClass:"right"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("site.circlemaster")))]),t._v(" "),n("div",{staticClass:"value name text-hidden"},[t._v("\n            "+t._s(t.forums.set_site&&t.forums.set_site.site_author.username)+"\n          ")])]):t._e()],1),t._v(" "),n("div",{staticClass:"member",on:{click:t.jump2ManagePage}},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("home.theme")))]),t._v(" "),n("div",{staticClass:"value"},[t._v("\n          "+t._s(t.forums.other&&t.forums.other.count_users)+"\n        ")])]),t._v(" "),n("div",{staticClass:"threads"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("manage.contents")))]),t._v(" "),n("div",{staticClass:"value"},[t._v("\n          "+t._s(t.forums.other&&t.forums.other.count_threads)+"\n        ")])]),t._v(" "),n("div",{staticClass:"create-time"},[n("div",{staticClass:"label"},[t._v(t._s(t.$t("manage.creationtime")))]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_install?n("div",{staticClass:"value"},[t._v("\n          "+t._s((t.forums.set_site&&t.forums.set_site.site_install).substr(0,10))+"\n        ")]):t._e()])]),t._v(" "),n("div",{staticClass:"site-detail"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title base-font-size"},[t._v("\n          "+t._s(t.$t("manage.siteintroduction"))+"\n        ")]),t._v(" "),1==+t.groupsId?n("div",{staticClass:"modify",on:{click:t.handleModify}},[t._v("\n          "+t._s(t.$t("profile.modify"))+"\n        ")]):t._e()]),t._v(" "),t.forums&&t.forums.set_site&&t.forums.set_site.site_introduction?n("div",{staticClass:"content base-font-size"},[t._v("\n        "+t._s(t.forums.set_site.site_introduction)+"\n      ")]):n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("modify.noSiteInfo"))+"\n      ")]),t._v(" "),n("el-dialog",{attrs:{title:t.$t("modify.modifySiteInfo"),visible:t.isModify,width:"620px","custom-class":"custom-dialog","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.isModify=e}}},[n("div",{staticClass:"dialog-main"},[n("el-input",{staticClass:"custom-input",attrs:{type:"textarea",rows:5,placeholder:t.$t("modify.siteInfoPlaceholder")},model:{value:t.inputInfo,callback:function(e){t.inputInfo=e},expression:"inputInfo"}})],1),t._v(" "),n("div",{staticClass:"dialog-footer"},[n("el-button",{attrs:{type:"primary",size:"medium",loading:t.loading},on:{click:t.confirmModify}},[t._v("\n            "+t._s(t.$t("discuzq.ok"))+"\n          ")]),t._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:function(e){t.isModify=!1}}},[t._v("\n            "+t._s(t.$t("discuzq.msgBox.cancel"))+"\n          ")])],1)])],1),t._v(" "),t.forums&&t.forums.set_site?n("div",{staticClass:"circlemode"},[n("div",{staticClass:"title base-font-size"},[t._v("\n        "+t._s(t.$t("site.circlemode"))+" \\ "+t._s(t.$t("site.price"))+"\n      ")]),t._v(" "),t.forums.set_site&&"public"===t.forums.set_site.site_mode?n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("site.publicmode"))+" \\ "+t._s(t.$t("post.free"))+"\n      ")]):n("div",{staticClass:"content base-font-size grey-color"},[t._v("\n        "+t._s(t.$t("site.paymentmode"))+" \\ "+t._s(t.$t("post.yuanItem"))+t._s(t.forums.set_site.site_price)+" （"+t._s(t.forums.set_site.site_expire?t.$t("site.periodvalidity")+t.forums.set_site.site_expire+t.$t("site.day"):t.$t("site.permanent"))+"）\n      ")])]):t._e(),t._v(" "),n("div",{staticClass:"permission"},[n("div",{staticClass:"title base-font-size"},[t._v("\n        "+t._s(t.$t("manage.myRole"))+" \\ "+t._s(t.$t("site.permission"))+"\n      ")]),t._v(" "),t.userInfo?n("div",{staticClass:"user-detail"},[n("div",{staticClass:"avatar"},[n("avatar",{attrs:{user:{id:t.userInfo.id,username:t.userInfo.username,avatarUrl:t.userInfo.avatarUrl},"prevent-jump":!0,size:50,round:!0}})],1),t._v(" "),n("div",{staticClass:"user-info"},[n("div",{staticClass:"name base-font-size"},[t._v(t._s(t.userInfo.username))]),t._v(" "),n("div",{staticClass:"role"},[t._v("\n            "+t._s(t.$t("site.role"))+"\n            "+t._s(t.forums.user&&t.forums.user.groups&&t.forums.user.groups.length>0&&t.forums.user.groups[0].name||"")+"\n          ")]),t._v(" "),t.userInfo.joinedAt?n("div",{staticClass:"join-time"},[t._v("\n            "+t._s(t.$t("manage.joinedTime"))+"\n            "+t._s(t.userInfo.joinedAt.substr(0,10))+"\n            "),t.forums&&"pay"===t.forums.set_site.site_mode?[t._v("\n              ,"+t._s(t.$t("site.periodvalidity")+t.$t("site.to")+t.handleExpiredAt(t.userInfo.expiredAt))+"\n              ")]:t._e()],2):t._e(),t._v(" "),n("div",{staticClass:"permission-list"},t._l(t.permissionList,(function(e,r){return n("div",{key:r,staticClass:"item"},[t._v("\n              \n              "+t._s(t.$t("permission."+e.permission.replace(/\./g,"_")))+"\n              \n              \n            ")])})),0)])]):t._e()])]):t._e()])}),[],!1,null,"22ca4e6c",null);e.default=component.exports;installComponents(component,{Avatar:r(270).default})},751:function(t,e,r){r(32);var n=r(733);r(51),t.exports={data:function(){var t=this;return{errorCodeHandler:{default:{model_not_found:function(){return t.$router.replace("/error")},not_authenticated:function(){return t.$router.push("/user/login")}},thread:{permission_denied:function(){return t.$router.replace("/error")}}}}},methods:{handleError:function(t){var e=arguments,r=this;return n(regeneratorRuntime.mark((function n(){var o,c,d,f,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.length>1&&void 0!==e[1]?e[1]:"",c=t.response.data.errors,!(Array.isArray(c)&&c.length>0)){n.next=17;break}if(d=c[0].code,f=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:c[0].code,l=c[0].detail&&c[0].detail.length>0?c[0].detail[0]:r.$t("core.".concat(f)),"site_closed"!==c[0].code){n.next=10;break}return n.next=9,r.siteClose(c);case 9:return n.abrupt("return",n.sent);case 10:if("need_ext_fields"!==c[0].code){n.next=14;break}return m=r.$store.getters["session/get"]("userId"),r.$router.push("/user/supple-mentary?id=".concat(m)),n.abrupt("return");case 14:"Permission Denied"===d?r.$message.error(r.$t("core.permission_denied2")):r.$message.error(l),r.errorCodeHandler.default[d]&&r.errorCodeHandler.default[d](),o&&r.errorCodeHandler[o][d]&&r.errorCodeHandler[o][d]();case 17:case"end":return n.stop()}}),n)})))()},siteClose:function(t){var e=this;return n(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$store.dispatch("forum/setError",{code:t[0].code,detail:t[0].detail&&t[0].detail.length>0&&t[0].detail[0]});case 3:return r.next=5,e.$router.push("/site/close");case 5:r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}}},752:function(t,e){t.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?"".concat(this.title," - ").concat(this.forums.set_site.site_name):this.title}}}},758:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}));r(180),r(51);var n=function(time){var t=((window.currentTime||new Date)-new Date(time))/1e3;return 0===parseInt(t)?"刚刚发布":parseInt(t)<60?"".concat(parseInt(t),"秒前"):parseInt(t/60)<60?"".concat(parseInt(t/60),"分钟前"):parseInt(t/60/60)<16?"".concat(parseInt(t/60/60),"小时前"):time.replace(/T/," ").replace(/Z/,"").substring(0,16)},o=function(t){var e=t-Math.round(new Date/1e3);return parseInt(e/86400,0)},c=function(t){var e=Math.round(new Date(t)/1e3),r=Math.round(new Date/1e3)-e,n=parseInt(r/86400,0);if(n>365){var o=parseInt(r/86400/365,0);return"".concat(o,"年")}return"".concat(n,"天")}},925:function(t,e,r){}}]);
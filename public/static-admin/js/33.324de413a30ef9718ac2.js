(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"2Adj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a("QbLZ"));a("lL+3");var s=i(a("9kjX"));function i(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"report-manage-view"},s.default)},"9kjX":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(a("Dt3C")),s=o(a("rWG0")),i=o(a("7qpD")),n=o(a("VVfg"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{searchData:{userName:"",reportType:null,reportTime:["",""],status:0},reportTypeData:[{name:"主题",id:1},{name:"评论/回复",id:2}],reportListAll:[],reportList:[],submitForm:[],pageData:{pageSize:10,pageCount:1,pageNumber:1,pageTotal:0},subLoading:!1}},methods:{radioChange:function(t,e){switch(t){case 0:this.submitForm[e].type=0;break;case 1:this.submitForm[e].type=1}},formatDate:function(t){return this.$dayjs(t).format("YYYY-MM-DD HH:mm")},getType:function(t){return 0===t?"个人主页":1===t?"主题":2===t?"评论/回复":void 0},getUrl:function(t,e,a){var r="";return{href:r=0===a?0===e?"/pagthreadIDes/profile/index?userId="+t:"/pages/topic/index?id="+e:"/pages/topic/comment?threadId="+e+"&commentId="+a,url:window.origin+r}},searchClick:function(){this.searchData.reportTime=null==this.searchData.reportTime?["",""]:this.searchData.reportTime,this.searchData.reportType=""===this.searchData.reportType?null:this.searchData.reportType,this.pageData.pageNumber=1,this.getReportList(1)},getReportList:function(t){var e=this,a=this.searchData;this.appFetch({url:"reports",method:"get",data:{"filter[username]":a.userName,"filter[status]":0,"filter[type]":a.reportType,"filter[start_time]":a.reportTime[0],"filter[end_time]":a.reportTime[1],"page[number]":t,"page[limit]":this.pageData.pageSize}}).then((function(t){t.errors?e.$message.error(t.errors[0].code):(e.reportList=t.readdata,e.pageData.pageTotal=t.meta.total,e.pageData.pageCount=t.meta.pageCount,e.reportListAll=[],e.submitForm=[],e.reportList.forEach((function(t){e.reportListAll.push(t._data.id),e.submitForm.push({radio:"",id:t._data.id,type:null})})))}))},handleCurrentChange:function(t){this.pageData.pageNumber=t,this.getReportList(t)},operationsSubmit:function(t,e,a){var r=[],s={status:1};if("delete"===t)switch(e){case 1:this.deleteOperation(a);break;case 2:this.deleteOperation(this.reportListAll.toString())}else{switch(e){case 1:r=[{type:"report",id:a,attributes:s}];break;case 2:this.reportListAll.forEach((function(t){r.push({type:"report",id:t,attributes:s})}))}this.HandledOperation(r)}},deleteOperation:function(t){var e=this;this.appFetch({url:"reportsBatch",splice:"/"+t,method:"delete"}).then((function(t){}));setTimeout((function(){e.subLoading=!1,e.$message({message:"删除成功",type:"success"}),e.getReportList(Number(n.default.getLItem("pageNumber"))||1)}),300)},HandledOperation:function(t){var e=this;this.appFetch({url:"reports",splice:"/batch",method:"patch",data:{data:t}}).then((function(t){t&&(e.subLoading=!1,e.$message({message:"操作成功",type:"success"}),e.getReportList(Number(n.default.getLItem("pageNumber"))||1))}))},submitClick:function(){if(this.submitForm.some((function(t){return 0===t.type||(1===t.type||void 0)}))){this.subLoading=!0;var t=[],e=[],a={status:1};this.submitForm.forEach((function(r){0===r.type&&t.push(r.id),1===r.type&&e.push({type:"report",id:r.id,attributes:a})})),t.length>0&&this.deleteOperation(t.join(",")),e.length>0&&this.HandledOperation(e)}else this.$message({showClose:!0,message:"操作举报列表为空，请选择举报信息",type:"warning"})},getCreated:function(t){t?this.getReportList(1):this.getReportList(Number(n.default.getLItem("pageNumber"))||1)}},created:function(){this.getUrl()},beforeRouteEnter:function(t,e,a){a((function(a){t.name!==e.name&&null!==e.name?a.getCreated(!0):a.getCreated(!1)}))},components:{ContArrange:r.default,Page:s.default,tableNoList:i.default}}},AZdf:function(t,e,a){"use strict";a.r(e);var r=a("DpYc"),s=a("nVfn");for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);var n=a("KHd+"),o=Object(n.a)(s.default,r.a,r.b,!1,null,null,null);e.default=o.exports},DpYc:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-manage-box"},[a("div",{staticClass:"report-manage-header"},[a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[t._v("举报人：")]),t._v(" "),a("el-input",{attrs:{size:"medium",clearable:""},model:{value:t.searchData.userName,callback:function(e){t.$set(t.searchData,"userName",e)},expression:"searchData.userName"}})],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title"},[t._v("举报类型：")]),t._v(" "),a("el-select",{attrs:{clearable:"",size:"medium"},model:{value:t.searchData.reportType,callback:function(e){t.$set(t.searchData,"reportType",e)},expression:"searchData.reportType"}},t._l(t.reportTypeData,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("span",{staticClass:"report-manage-header__section-title time-title"},[t._v("举报时间范围：")]),t._v(" "),a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"daterange",align:"right","unlink-panels":"",size:"medium","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.searchData.reportTime,callback:function(e){t.$set(t.searchData,"reportTime",e)},expression:"searchData.reportTime"}})],1),t._v(" "),a("div",{staticClass:"report-manage-header__section"},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),a("div",{staticClass:"report-manage-content"},[a("div",{staticClass:"report-manage-content__header"},[t._v("举报列表")]),t._v(" "),t._l(t.reportList,(function(e,r){return a("ContArrange",{key:e._data.id,staticClass:"report-manage-content__table",attrs:{establish:e.user?e.user._data.username:"该用户被删除",userId:e.user?e.user._data.id:"该用户被删除",time:t.formatDate(e._data.created_at),type:t.getType(e._data.type)}},[a("div",{staticClass:"report-manage-content__table-side",attrs:{slot:"side"},slot:"side"},[a("el-radio-group",{on:{change:function(e){return t.radioChange(e,r)}},model:{value:t.submitForm[r].radio,callback:function(e){t.$set(t.submitForm[r],"radio",e)},expression:"submitForm[index].radio"}},[a("el-radio",{attrs:{label:0}},[t._v("删除")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("已处理")])],1)],1),t._v(" "),a("div",{staticClass:"report-manage-content__table-main",attrs:{slot:"main"},slot:"main"},[a("p",[t._v("\n\t\t\t\t\t\t页面地址：\n\t\t\t\t\t\t"),a("a",{staticStyle:{color:"#3E4043"},attrs:{href:t.getUrl(e.user._data.id,e._data.thread_id,e._data.post_id).href,target:"_blank"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.getUrl(e.user._data.id,e._data.thread_id,e._data.post_id).url)+"\n\t\t\t\t\t\t")])]),t._v(" "),a("p",[t._v("举报时间："+t._s(t.formatDate(e._data.updated_at)))]),t._v(" "),a("p",[t._v("举报理由：")]),t._v(" "),a("p",[t._v(t._s(e._data.reason))])]),t._v(" "),a("div",{staticClass:"report-manage-content__table-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.operationsSubmit("delete",1,e._data.id)}}},[t._v("删除")]),t._v(" "),a("i"),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.operationsSubmit("handle",1,e._data.id)}}},[t._v("标记已处理")])],1)])})),t._v(" "),a("tableNoList",{directives:[{name:"show",rawName:"v-show",value:t.reportList.length<1,expression:"reportList.length < 1"}]}),t._v(" "),t.pageData.pageCount>1?a("Page",{attrs:{"current-page":t.pageData.pageNumber,"page-size":t.pageData.pageSize,total:t.pageData.pageTotal},on:{"current-change":t.handleCurrentChange}}):t._e()],2),t._v(" "),a("div",{staticClass:"report-manage-footer"},[a("el-button",{attrs:{size:"small",type:"primary",loading:t.subLoading},on:{click:t.submitClick}},[t._v("提交")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.operationsSubmit("delete",2)}}},[t._v("全部删除")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.operationsSubmit("handle",2)}}},[t._v("全部标记已处理")])],1)])},s=[]},nVfn:function(t,e,a){"use strict";a.r(e);var r=a("2Adj"),s=a.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);e.default=s.a}}]);
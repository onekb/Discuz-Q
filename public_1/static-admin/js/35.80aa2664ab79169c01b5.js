(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"KHd+":function(t,e,a){"use strict";function i(t,e,a,i,n,s,r,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=a,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}a.d(e,"a",(function(){return i}))},QWDk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(a("QbLZ"));a("z99J");var n=s(a("khy5"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,i.default)({name:"withdrawal-application-view"},n.default)},ethY:function(t,e,a){"use strict";a.r(e);var i=a("QWDk"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e.default=n.a},iV83:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"withdrawal-application-box"},[a("div",{staticClass:"withdrawal-application__search-box"},[a("div",{staticClass:"withdrawal-application__search-condition"},[a("span",{staticClass:"withdrawal-application__search-condition__title"},[t._v("流水号：")]),t._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"搜索流水号"},model:{value:t.cashSn,callback:function(e){t.cashSn=e},expression:"cashSn"}})],1),t._v(" "),a("div",{staticClass:"withdrawal-application__search-condition"},[a("span",{staticClass:"withdrawal-application__search-condition__title"},[t._v("申请时间：")]),t._v(" "),a("el-date-picker",{attrs:{clearable:"",type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},model:{value:t.applicationTime,callback:function(e){t.applicationTime=e},expression:"applicationTime"}})],1),t._v(" "),a("div",{staticClass:"withdrawal-application__search-condition"},[a("span",{staticClass:"withdrawal-application__search-condition__title"},[t._v("操作用户：")]),t._v(" "),a("el-input",{attrs:{clearable:"",placeholder:"搜索操作用户"},model:{value:t.operationUser,callback:function(e){t.operationUser=e},expression:"operationUser"}})],1),t._v(" "),a("div",{staticClass:"withdrawal-application__search-condition"},[a("span",{staticClass:"withdrawal-application__search-condition__title"},[t._v("状态：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.statusSelect,callback:function(e){t.statusSelect=e},expression:"statusSelect"}},t._l(t.statusOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("div",{staticClass:"withdrawal-application__search-condition"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),a("div",{staticClass:"withdrawal-application-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"_data.cash_sn",label:"流水号","min-width":"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"user._data.username",label:"操作用户",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:1==t._data.cash_type?"微信零钱":"人工打款",label:"提现方式",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(1==e.row._data.cash_type?t.type1:t.type2))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"_data.cash_apply_amount",label:"提现金额（元）",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{label:"收款账号",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.accountNumber(e.row)))]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"_data.created_at",label:"申请时间","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.formatDate(e.row._data.created_at)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.cashStatus(e.row._data.cash_status,e.row._data)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row._data.cash_status?a("div",[1===e.row._data.cash_type?a("el-popover",{ref:"popover-"+e.$index,attrs:{width:"100",placement:"top"}},[a("p",[t._v("确定通过该提现吗？")]),t._v(" "),a("div",{staticStyle:{"text-align":"right",margin:"10PX 0 0 0"}},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){t.noReviewClick(e.row._data.id),e._self.$refs["popover-"+e.$index].doClose()}}},[t._v("\n                  不通过\n                ")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.reviewClick(e.row._data.id),e._self.$refs["popover-"+e.$index].doClose()}}},[t._v("通过")])],1),t._v(" "),1===e.row._data.cash_type?a("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("审核")]):t._e()],1):a("div",[a("p",{staticClass:"toexaminebtn",on:{click:function(a){return t.noReviewClick(e.row._data.id)}}},[t._v("审核拒绝")]),t._v(" "),a("p",{staticClass:"toexaminebtn",on:{click:function(a){return t.reviewClicks(e.row._data.id)}}},[t._v("标记打款")])])],1):a("p",[t._v(t._s(t.auditstatus(e.row._data.cash_status)))])]}}])})],1),t._v(" "),t.pageCount>1?a("Page",{attrs:{"current-page":t.currentPaga,"page-size":10,total:t.total},on:{"current-change":t.handleCurrentChange}}):t._e()],1)])},n=[]},khy5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(a("4gYi")),n=r(a("rWG0")),s=r(a("VVfg"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{tableData:[],cashSn:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},applicationTime:["",""],operationUser:"",statusOptions:[{value:"1",label:"待审核"},{value:"2",label:"审核通过"},{value:"3",label:"审核不通过"},{value:"4",label:"待打款"},{value:"5",label:"已打款"},{value:"6",label:"打款失败"}],statusSelect:"1",visible:!1,total:0,pageCount:0,currentPaga:1,type1:"微信零钱",type2:"人工打款"}},methods:{cashStatus:function(t,e){switch(t){case 1:return e.error_message?"待审核，原因："+e.error_message:"待审核";case 2:return"审核通过";case 3:return"审核不通过，原因："+e.remark;case 4:return"待打款";case 5:return"已打款";case 6:return"打款失败，原因："+e.error_message;default:return"未知状态"}},accountNumber:function(t){return 1===t._data.cash_type?t.wechat?t.wechat._data.mp_openid||t.wechat._data.min_openid:"":t._data.cash_mobile},toexamine:function(t){return 1==t._data.cash_status&&1===t._data.cash_type||(1!=t._data.cash_status||0!==t._data.cash_type)&&void 0},noReviewClick:function(t){var e=this,a={id:[]};this.$MessageBox.prompt("","提示",{confirmButtonText:"提交",cancelButtonText:"取消",inputPlaceholder:"请输入不通过理由"}).then((function(i){a.id.push(t),a.status=3,a.remark=i.value,e.postReview(a)})).catch((function(t){}))},reviewClick:function(t){var e={id:[]};e.id.push(t),e.status=2,this.postReview(e)},reviewClicks:function(t){var e={id:[]};e.id.push(t),e.status=5,this.postReview(e)},auditstatus:function(t){switch(t){case 2:return"标记打款";case 3:return"审核拒绝";case 4:case 5:return"标记打款";case 6:return"打款失败";default:return"未知状态"}},searchClick:function(){null==this.applicationTime?this.applicationTime=["",""]:""!==this.applicationTime[0]&&""!==this.applicationTime[1]&&(this.applicationTime[0]=this.applicationTime[0]+"-00-00-00",this.applicationTime[1]=this.applicationTime[1]+"-24-00-00"),this.currentPaga=1,this.getReflectList()},handleCurrentChange:function(t){this.currentPaga=t,this.getReflectList()},formatDate:function(t){return this.$dayjs(t).format("YYYY-MM-DD HH:mm")},getReflectList:function(){var t=this;this.appFetch({url:"reflect",method:"get",data:{include:["user","userWallet","wechat"],"filter[cash_status]":this.statusSelect,"page[number]":this.currentPaga,"page[size]":10,"filter[cash_sn]":this.cashSn,"filter[username]":this.operationUser,"filter[start_time]":this.applicationTime[0],"filter[end_time]":this.applicationTime[1]}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.tableData=[],t.tableData=e.readdata,t.total=e.meta.total,t.pageCount=e.meta.pageCount)})).catch((function(t){}))},postReview:function(t){var e=this;this.appFetch({url:"review",method:"post",standard:!1,data:{ids:t.id,cash_status:t.status,remark:t.remark}}).then((function(a){a.errors?e.$message.error(a.errors[0].code):"success"===a.data.result[t.id]?(e.getReflectList(),e.$message({message:"提交成功！",type:"success"})):"failure"===a.data.result[t.id]?e.$message.error("提交错误！请重新提交"):e.$message.error("未知错误，请刷新页面后重新提交")})).catch((function(t){}))},getCreated:function(t){this.currentPaga=t?1:Number(s.default.getLItem("currentPag"))||1,this.getReflectList()}},created:function(){},beforeRouteEnter:function(t,e,a){a((function(a){t.name!==e.name&&null!==e.name?a.getCreated(!0):a.getCreated(!1)}))},components:{Card:i.default,Page:n.default}}},vxv5:function(t,e,a){"use strict";a.r(e);var i=a("iV83"),n=a("ethY");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("KHd+"),o=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=o.exports}}]);
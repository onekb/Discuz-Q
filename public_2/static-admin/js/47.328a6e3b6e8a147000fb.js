(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"2QyF":function(t,e,a){"use strict";a.r(e);var r=a("Dm6a"),i=a.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(s);e.default=i.a},Dm6a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(a("QbLZ"));a("lpfh");var i=s(a("wKmE"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)({name:"pay-config-wx-view"},i.default)},HCip:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{header:"微信支付配置"}}),t._v(" "),a("Card",{attrs:{header:"APPID："}},[a("CardRow",{attrs:{description:"appid是微信公众帐号或小程序的唯一标识"}},[a("el-input",{model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"微信支付的商户号（mch_id）："}},[a("CardRow",{attrs:{description:"商户申请微信支付后，由微信支付分配的商户收款帐号"}},[a("el-input",{model:{value:t.mchId,callback:function(e){t.mchId=e},expression:"mchId"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"API密匙（key）："}},[a("CardRow",{attrs:{description:"交易过程生成签名的密钥"}},[a("el-input",{model:{value:t.apiKey,callback:function(e){t.apiKey=e},expression:"apiKey"}})],1)],1),t._v(" "),a("Card",{attrs:{header:"已开通企业付款到零钱产品"}},[a("CardRow",{staticClass:"card-pay",attrs:{description:"开通后才可使用企业向个人付款，付款资金将直接进入用户零钱的功能。否则将采用提交手机号，人工打款到微信手机账号的方式。"}},[a("el-switch",{attrs:{"active-color":"#336699","inactive-color":"#bbbbbb"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),t._v(" "),a("Card",{staticClass:"footer-btn"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.submitConfiguration}},[t._v("提交")])],1)],1)},i=[]},cI1c:function(t,e,a){"use strict";a.r(e);var r=a("HCip"),i=a("2QyF");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var n=a("KHd+"),d=Object(n.a)(i.default,r.a,r.b,!1,null,null,null);e.default=d.exports},wKmE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(a("4gYi")),i=s(a("pNQN"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{appId:"",mchId:"",apiKey:"",appSecret:"",type:"",iOSPay:!1,value:!1}},created:function(){var t=this.$route.query.type;this.type=t,this.loadStatus()},methods:{loadStatus:function(){var t=this;this.appFetch({url:"forum",method:"get",data:{}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):(t.appId=e.readdata._data.paycenter.app_id,t.mchId=e.readdata._data.paycenter.mch_id,t.apiKey=e.readdata._data.paycenter.api_key,t.appSecret=e.readdata._data.paycenter.app_secret,t.iOSPay=e.readdata._data.paycenter.wxpay_ios,t.value=e.readdata._data.paycenter.wxpay_mchpay_close)})).catch((function(t){}))},submitConfiguration:function(){var t=this;this.appFetch({url:"settings",method:"post",data:{data:[{attributes:{key:"app_id",value:this.appId,tag:this.type}},{attributes:{key:"mch_id",value:this.mchId,tag:this.type}},{attributes:{key:"api_key",value:this.apiKey,tag:this.type}},{attributes:{key:"app_secret",value:this.appSecret,tag:this.type}},{attributes:{key:"wxpay_ios",value:this.iOSPay,tag:this.type}},{attributes:{key:"wxpay_mchpay_close",value:this.value,tag:this.type}}]}}).then((function(e){e.errors?t.$message.error(e.errors[0].code):t.$message({message:"提交成功",type:"success"})}))}},components:{Card:r.default,CardRow:i.default}}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2131d6"],{aaff:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.createOrder.apply(null,arguments)}}},[r("div",[e._v(" email "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.email,expression:"order.email"}],attrs:{type:"email"},domProps:{value:e.order.email},on:{input:function(t){t.target.composing||e.$set(e.order,"email",t.target.value)}}})]),r("div",[e._v("Amt "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.order.amt,expression:"order.amt",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.order.amt},on:{input:function(t){t.target.composing||e.$set(e.order,"amt",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[e._v(" ItemDesc "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.order.itemDesc,expression:"order.itemDesc"}],attrs:{type:"text"},domProps:{value:e.order.itemDesc},on:{input:function(t){t.target.composing||e.$set(e.order,"itemDesc",t.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("送出")])])},n=[],o=r("1da1"),i=(r("96cf"),r("d9e2"),r("d401"),{name:"OrderCreate",data:function(){return{order:{email:"",amt:100,itemDesc:"商品名稱"}}},created:function(){},methods:{createOrder:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$api.createOrder(e.order);case 4:if(r=t.sent,r.data&&"success"===r.status){t.next=7;break}throw new Error("建立訂單失敗");case 7:e.$router.push({path:"/order/".concat(r.data.merchantOrderNo,"/payment")}),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),e.$toasted.show(t.t0.message),e.isLoading=!1;case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),s=i,u=r("2877"),d=Object(u["a"])(s,a,n,!1,null,"6ac9da8d",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d2131d6.cba4f863.js.map
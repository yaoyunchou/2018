webpackJsonp([8],{WMkN:function(t,e){},xm7v:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Hmpo"),r=n.n(a),s=n("vYJH"),o=n.n(s),c=n("34v0"),i=n.n(c),u=n("EcfS"),l=n("NtYf"),m=n("MWhI"),d={};d[l.Cell.name]=l.Cell,d[l.Field.name]=l.Field,d[l.Button.name]=l.Button;var p={mixins:[m.a],components:i()({},d),metaInfo:{title:"发票订单信息"},data:function(){return{product:"加页VIP版",amount:20.9}},computed:i()({},Object(u.e)("make",["current","loading","loadingTip","order"])),methods:i()({},Object(u.b)("title",["getItem"]),Object(u.b)("make",["getOrder","setTitle","makInvoice"]),{save:function(){var t=this;return o()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push("/make-step2/"+t.$route.params.id);case 1:case"end":return e.stop()}},e,t)}))()}}),mounted:function(){var t=this;return o()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getItem(t.$route.params.id);case 2:n=e.sent,t.setTitle(n),t.getOrder();case 5:case"end":return e.stop()}},e,t)}))()}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"make-step1"},[n("mt-cell",{attrs:{title:"消费内容"}},[n("span",{staticClass:"product-name"},[t._v(t._s(t.order.goodsName))])]),t._v(" "),n("mt-cell",{attrs:{title:"开票金额"}},[n("span",{staticClass:"total"},[t._v("合计")]),n("span",{staticClass:"amount"},[t._v(t._s(t.order.money))]),t._v("元")]),t._v(" "),n("footer",[n("mt-button",{attrs:{size:"large"},on:{click:function(e){t.save()}}},[t._v("下一步")])],1)],1)},staticRenderFns:[]};var f=n("Aizv")(p,v,!1,function(t){n("WMkN")},null,null);e.default=f.exports}});
//# sourceMappingURL=8.3fa5698b6966f71d0762.js.map
webpackJsonp([11],{"1Oa9":function(t,e){},ArKR:function(t,e,r){"use strict";function n(){var t=window.location.href;return t.slice(0,t.indexOf("/",13))}Object.defineProperty(e,"__esModule",{value:!0}),e.getRoot=n,e.getRouteUrl=function(t){return n()+"/index.html#/"+t}},EjBA:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};r.d(n,"indexOf",function(){return k}),r.d(n,"remove",function(){return g}),r.d(n,"find",function(){return T});var o=r("FevL"),a=(r("1Oa9"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("transition",{attrs:{mode:"out-in",name:"fade"}},[e("router-view")],1)],1)])},staticRenderFns:[]});var i=r("Aizv")({name:"App"},a,!1,function(t){r("EjBA")},null,null).exports,u=r("1eSk"),p=r("csWR"),s=r.n(p),c=function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"MtBL"))},l=function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"weUL"))};o.default.use(u.a),o.default.use(s.a);var d=new u.a({routes:[{path:"/auth/:tempId",name:"auth",component:c},{path:"/share/:id/:name",name:"share",component:c},{path:"/title",name:"TitleList",component:function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"4eIG"))}},{path:"/title-add",name:"TitleAdd",component:l},{path:"/title-preview/:id",name:"TitlePreview",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"GZz6"))}},{path:"/title-edit",name:"TitleEdit",component:l},{path:"/preview/:id",name:"Preview",component:function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"kiYx"))}},{path:"/make-step1/:id",name:"MakeStep1",component:function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"xm7v"))}},{path:"/make-step2/:id",name:"MakeStep2",component:function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"5/uB"))}},{path:"/make-step3",name:"MakeStep3",component:function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"TLX1"))}},{path:"/error/:key",name:"error",component:function(){return r.e(9).then(r.bind(null,"iD/f"))}}]}),v=r("EcfS"),f=r("hs4R"),m=r.n(f);var h={assertHttp:function(t){if(0===t.data.code)return t.data.data;throw new Error(t.data.msg)},unpackError:function(t,e){"string"==typeof t?e(t):t instanceof Error&&e(t.message)},doThrow:function(t){throw"string"==typeof t?new Error(t):t instanceof Error?t:new Error(t)}},y=r("u6qr"),I=r.n(y);function k(t,e,r){var n=0;if(!t||!t.length||!e)return-1;var o=!0,a=!1,i=void 0;try{for(var u,p=I()(t);!(o=(u=p.next()).done);o=!0){if(u.value[e]===r)return n;n++}}catch(t){a=!0,i=t}finally{try{!o&&p.return&&p.return()}finally{if(a)throw i}}return-1}function g(t,e,r){var n=k(t,e,r);return-1===n?null:t.splice(n,1)}function T(t,e,r){var n=k(t,e,r);return-1===n?null:t[n]}var N,w={error:h,arr:n,url:r("ArKR")},E=r("EQ/o"),b=r.n(E),L=r("Hmpo"),O=r.n(L),R=r("vYJH"),A=r.n(R),_=r("ZhHC"),x=r.n(_),D=r("dbJu"),G=r.n(D),S=r("HFN4"),P=r.n(S),U=r("Lxvp"),z=r.n(U),C=r("i9+B"),H=r.n(C);function j(t,e,r){var n=this,o=r.value;t.mutations=t.mutations||{},t.mutations[e]&&console.warn("vuex Mutation 声明重名===>"+e),t.mutations[e]=function(e,r,a){return o.call(t,e,r,n,a)}}function M(t,e,r){var n=this,o=r.value;t.actions=t.actions||{},t.actions[e]&&console.warn("vuex Action 声明重名===>"+e),t.actions[e]=function(e,r,a){return o.call(t,e,r,n,a)}}function $(t,e,r,n,o){var a={};return Object.keys(n).forEach(function(t){a[t]=n[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}var q,B={Store:($((N=function(){function t(e){for(var r in G()(this,t),this.namespaced=!0,this.state={current:{},loading:!1,loadingTip:"加载中..."},e)this.state[r]=e[r]}return P()(t,[{key:"LOADING",value:function(t,e){t.loading=e}},{key:"LOADING_TIP",value:function(t,e){t.loadingTip=e}},{key:"setLoading",value:function(t,e){var r=t.commit,n=e.status,o=e.tip;r("LOADING",n),r("LOADING_TIP",o)}},{key:"assert",value:function(t,e){if(!t)throw new Error(e);return t}},{key:"assertHttp",value:function(t){return this.assert(0===t.data.code,t.data.msg),t.data.data}},{key:"throwError",value:function(t){w.error.doThrow(t)}},{key:"isnull",value:function(t,e){return null===t?e:t}}]),t}()).prototype,"LOADING",[j],b()(N.prototype,"LOADING"),N.prototype),$(N.prototype,"LOADING_TIP",[j],b()(N.prototype,"LOADING_TIP"),N.prototype),$(N.prototype,"setLoading",[M],b()(N.prototype,"setLoading"),N.prototype),N),mutation:j,action:M,getter:function(t,e,r){var n=r.value;t.getters=t.getters||{},t.getters[e]&&console.warn("vuex Getter 声明重名===>"+e),t.getters[e]=n}};function Z(t,e,r,n,o){var a={};return Object.keys(n).forEach(function(t){a[t]=n[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}var F,J=w.error,K=B.mutation,V=B.action,Y=new(Z((q=function(t){function e(){return G()(this,e),z()(this,(e.__proto__||x()(e)).call(this,{current:{},title:{},order:{}}))}return H()(e,t),P()(e,[{key:"CURRENT",value:function(t,e){t.current=e}},{key:"SET_ORDER",value:function(t,e){t.order=e}},{key:"SET_TITLE",value:function(t,e){t.title=e}},{key:"setTitle",value:function(t,e){var r=t.commit;t.dispatch;r("SET_TITLE",e)}},{key:"getOrder",value:function(){var t=A()(O.a.mark(function t(e){var r,n,o=e.commit,a=e.rootGetters;e.dispatch;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o("LOADING",!0),o("LOADING_TIP","加载中..."),t.next=5,m.a.get(this.ORDER_URL,{params:{orderNo:a.orderNo,appName:a.appName}});case 5:return r=t.sent,n=this.assertHttp(r),o("SET_ORDER",n),t.abrupt("return",n);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",w.error.doThrow(t.t0));case 14:return t.prev=14,o("LOADING",!1),t.finish(14);case 17:case"end":return t.stop()}},t,this,[[0,11,14,17]])}));return function(e){return t.apply(this,arguments)}}()},{key:"makInvoice",value:function(){var t=A()(O.a.mark(function t(e){var r,n,o=e.commit,a=e.state,i=e.rootGetters;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.assert(!a.loading,"不能重复提交！"),o("LOADING",!0),o("LOADING_TIP","开票中..."),t.next=6,m.a.post(this.INVOICE_URL,{account:this.isnull(a.title.account,""),address:this.isnull(a.title.address,""),appName:this.isnull(i.appName,""),bank:this.isnull(a.title.bank,""),email:this.isnull(a.title.email,""),goodsName:this.isnull(a.order.goodsName,""),mobile:this.isnull(a.title.mobile,""),money:this.isnull(a.order.money,""),xdrq:this.isnull(a.order.xdsj,""),openid:this.isnull(i.openid,""),orderNo:this.isnull(i.orderNo,""),taxnum:this.isnull(a.title.taxnum,""),telephone:this.isnull(a.title.telephone,""),ticketId:this.isnull(a.title.id,""),type:this.isnull(a.title.type,""),username:this.isnull(a.title.username,"")});case 6:return r=t.sent,n=J.assertHttp(r),o("SET_ORDER",n),t.abrupt("return",n);case 12:return t.prev=12,t.t0=t.catch(0),t.abrupt("return",w.error.doThrow(t.t0));case 15:return t.prev=15,o("LOADING",!1),t.finish(15);case 18:case"end":return t.stop()}},t,this,[[0,12,15,18]])}));return function(e){return t.apply(this,arguments)}}()},{key:"ORDER_URL",get:function(){return"/fp/ticket//getOrder"}},{key:"INVOICE_URL",get:function(){return"/fp/ticket//addOrder"}}]),e}(B.Store)).prototype,"CURRENT",[K],b()(q.prototype,"CURRENT"),q.prototype),Z(q.prototype,"SET_ORDER",[K],b()(q.prototype,"SET_ORDER"),q.prototype),Z(q.prototype,"SET_TITLE",[K],b()(q.prototype,"SET_TITLE"),q.prototype),Z(q.prototype,"setTitle",[V],b()(q.prototype,"setTitle"),q.prototype),Z(q.prototype,"getOrder",[V],b()(q.prototype,"getOrder"),q.prototype),Z(q.prototype,"makInvoice",[V],b()(q.prototype,"makInvoice"),q.prototype),q),Q={state:{},mutations:{},actions:{save:function(t){t.state,t.commit,t.rootState}},namespaced:!0},W=r("fjjs"),X=r.n(W);function tt(t,e,r,n,o){var a={};return Object.keys(n).forEach(function(t){a[t]=n[t]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce(function(r,n){return n(t,e,r)||r},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(t,e,a),a=null),a}var et=w.error,rt=B.mutation,nt=B.action,ot=B.getter;function at(t,e,r){var n=function(t,e){return{required:/\S+/,minLength:new RegExp("^.{"+e+",}$"),maxLength:new RegExp("^.{0,"+e+"}$"),number:/^\d{0,}$/,email:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,mobile:/(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/,tel:/(^\s{0}$)|((\d{3,4})-(\d{6,8}))|((\d{3,4})-(\d{6,8})-(\d{1,4}))/,taxNo:/^[0-9a-zA-Z-]{15,18}$/gi}[t]}(e,r);return n?n.test(t):(console.warn("validator ["+e+":"+r+"] is not found"),!0)}function it(t,e){var r={error:!1};e=e||"";var n=!0,o=!1,a=void 0;try{for(var i,u=I()(e.split("|"));!(n=(i=u.next()).done);n=!0){var p=i.value,s=p.split(":"),c=X()(s,2),l=c[0],d=c[1];r[p]=!at(t,l,d),r[p]?r.error=!0:r[p]=!1}}catch(t){o=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}var ut=new(tt((F=function(t){function e(){return G()(this,e),z()(this,(e.__proto__||x()(e)).call(this,{items:[],current:{},validators:{}}))}return H()(e,t),P()(e,[{key:"usernameInvalid",value:function(t){return it(t.current.username,"required|maxLength:100").error}},{key:"taxnumInvalid",value:function(t){return it(t.current.taxnum,"required|maxLength:20").error}},{key:"mobileInvalid",value:function(t){return it(t.current.mobile,"required|mobile").error}},{key:"emailInvalid",value:function(t){return it(t.current.email,"required|email").error}},{key:"addressInvalid",value:function(t){return it(t.current.address,"maxLength:50").error}},{key:"telInvalid",value:function(t){return it(t.current.telephone,"maxLength:50").error}},{key:"bankInvalid",value:function(t){return it(t.current.bank,"maxLength:50").error}},{key:"accountInvalid",value:function(t){return it(t.current.account,"maxLength:50").error}},{key:"isInvalid",value:function(t,e){var r=e.usernameInvalid||e.moblieInvalid||e.emailInvalid,n=r||e.taxnumInvalid||e.addressInvalid||e.telInvalid||e.bankInvalid||e.accountInvalid;return"company"===t.current.type?n:r}},{key:"ITEMS",value:function(t,e){t.items=e||[]}},{key:"UPDATE_CURRENT",value:function(t,e){t.current[e.key]=e.val}},{key:"getList",value:function(){var t=A()(O.a.mark(function t(e,r){var n,o,a=e.commit,i=(e.state,e.rootGetters);return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("LOADING",!0),a("LOADING_TIP","加载中..."),t.next=5,m.a.get(this.LIST_URI,{params:{openid:i.openid}});case 5:return n=t.sent,o=et.assertHttp(n),a("ITEMS",o),t.abrupt("return",o);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",w.error.doThrow(t.t0));case 14:return t.prev=14,a("LOADING",!1),t.finish(14);case 17:case"end":return t.stop()}},t,this,[[0,11,14,17]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"getItem",value:function(){var t=A()(O.a.mark(function t(e,r){e.state;var n,o,a=e.commit;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("LOADING",!0),a("LOADING_TIP","加载中..."),t.next=5,m.a.get(this.ITEM_URI,{params:{ticketId:r}});case 5:return n=t.sent,o=et.assertHttp(n),t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),w.error.doThrow(t.t0);case 13:return t.prev=13,a("LOADING",!1),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"saveNew",value:function(){var t=A()(O.a.mark(function t(e,r){var n,o,a=e.state,i=e.commit,u=e.rootGetters;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.assert(!a.loading,"不能重复提交！"),i("LOADING",!0),i("LOADING_TIP","保存中..."),r.openid=u.openid,t.next=7,m.a.post(this.CREATE_URI,r);case 7:return n=t.sent,o=et.assertHttp(n),t.abrupt("return",o);case 12:t.prev=12,t.t0=t.catch(0),w.error.doThrow(t.t0);case 15:return t.prev=15,i("LOADING",!1),t.finish(15);case 18:case"end":return t.stop()}},t,this,[[0,12,15,18]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"updateItem",value:function(){var t=A()(O.a.mark(function t(e,r){e.state;var n,o,a=e.commit;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("LOADING",!0),a("LOADING_TIP","保存中..."),t.next=5,m.a.put(this.UPDATE_URI,r);case 5:return n=t.sent,o=et.assertHttp(n),t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),w.error.doThrow(t.t0);case 13:return t.prev=13,a("LOADING",!1),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"deleteItem",value:function(){var t=A()(O.a.mark(function t(e,r){e.state;var n,o,a=e.commit;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("LOADING",!0),a("LOADING_TIP","正在删除"),t.next=5,m.a.delete(this.DELETE_URI,{params:{id:r}});case 5:return n=t.sent,o=et.assertHttp(n),t.abrupt("return",o);case 10:t.prev=10,t.t0=t.catch(0),w.error.doThrow(t.t0);case 13:return t.prev=13,a("LOADING",!1),t.finish(13);case 16:case"end":return t.stop()}},t,this,[[0,10,13,16]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"setCurrent",value:function(){var t=A()(O.a.mark(function t(e,r){var n=e.commit;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n("CURRENT",r);case 1:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"LIST_URI",get:function(){return"/fp/ticket//listByOpenid"}},{key:"CREATE_URI",get:function(){return"/fp/ticket//addTicket"}},{key:"ITEM_URI",get:function(){return"/fp/ticket//getTicketById"}}]),e}(B.Store)).prototype,"usernameInvalid",[ot],b()(F.prototype,"usernameInvalid"),F.prototype),tt(F.prototype,"taxnumInvalid",[ot],b()(F.prototype,"taxnumInvalid"),F.prototype),tt(F.prototype,"mobileInvalid",[ot],b()(F.prototype,"mobileInvalid"),F.prototype),tt(F.prototype,"emailInvalid",[ot],b()(F.prototype,"emailInvalid"),F.prototype),tt(F.prototype,"addressInvalid",[ot],b()(F.prototype,"addressInvalid"),F.prototype),tt(F.prototype,"telInvalid",[ot],b()(F.prototype,"telInvalid"),F.prototype),tt(F.prototype,"bankInvalid",[ot],b()(F.prototype,"bankInvalid"),F.prototype),tt(F.prototype,"accountInvalid",[ot],b()(F.prototype,"accountInvalid"),F.prototype),tt(F.prototype,"isInvalid",[ot],b()(F.prototype,"isInvalid"),F.prototype),tt(F.prototype,"ITEMS",[rt],b()(F.prototype,"ITEMS"),F.prototype),tt(F.prototype,"UPDATE_CURRENT",[rt],b()(F.prototype,"UPDATE_CURRENT"),F.prototype),tt(F.prototype,"getList",[nt],b()(F.prototype,"getList"),F.prototype),tt(F.prototype,"getItem",[nt],b()(F.prototype,"getItem"),F.prototype),tt(F.prototype,"saveNew",[nt],b()(F.prototype,"saveNew"),F.prototype),tt(F.prototype,"updateItem",[nt],b()(F.prototype,"updateItem"),F.prototype),tt(F.prototype,"deleteItem",[nt],b()(F.prototype,"deleteItem"),F.prototype),tt(F.prototype,"setCurrent",[nt],b()(F.prototype,"setCurrent"),F.prototype),F),pt=w.url,st={openid:function(t){var e=sessionStorage.getItem("openid")||t.openid||"";return e},appName:function(t){var e=sessionStorage.getItem("appName")||t.appName||"";return e},orderNo:function(t){var e=sessionStorage.getItem("orderNo")||t.orderNo||"";return e}},ct={token:function(t,e){t.token=e},setOpenid:function(t,e){sessionStorage.setItem("openid",e),sessionStorage.setItem("appId",t.appId),t.openid=e},setAppName:function(t,e){sessionStorage.setItem("appName",e),t.appName=e},setOrderNo:function(t,e){sessionStorage.setItem("orderNo",e),t.orderNo=e}},lt={getAuthInfo:function(t,e){t.state,t.commit;return m.a.get("/fp/oauth//getOauthInfo",{params:{id:e}})},oauth:function(t,e){var r=t.state,n=(t.commit,pt.getRouteUrl(e)),o={appId:r.appId,domain:encodeURIComponent(n)};m.a.get("/fp/oauth//getOauth2AuthorizationUrl",{params:o}).then(function(t){0===t.data.code&&(window.location.href=t.data.data)})},getUserInfo:function(t,e){}},dt={make:Y,preview:Q,title:ut};o.default.use(v.a);var vt=new v.a.Store({state:function(){return{appId:"wx6628d33ac319e694",openid:"",token:"",appName:"",orderNo:"",userInfo:null}},mutations:ct,actions:lt,modules:dt,getters:st,strict:!1});o.default.config.productionTip=!1,new o.default({el:"#app",router:d,components:{App:i},store:vt,template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.68bd7f54249eeb1f61fd.js.map
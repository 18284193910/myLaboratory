(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-server_explan-server_explan"],{"06c4":function(n,t,e){"use strict";e.r(t);var a=e("91ff"),r=e("7b5e");for(var o in r)"default"!==o&&function(n){e.d(t,n,(function(){return r[n]}))}(o);e("1921");var i,u=e("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"3bda5848",null,!1,a["a"],i);t["default"]=c.exports},1921:function(n,t,e){"use strict";var a=e("3e4a"),r=e.n(a);r.a},"2ee1":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/server_explan/server_explan.wxss */.main[data-v-3bda5848]{padding:%?20?%\n  /* min-height: 100vh; */}",""]),n.exports=t},"3e4a":function(n,t,e){var a=e("2ee1");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var r=e("4f06").default;r("bd539024",a,!0,{sourceMap:!1,shadowMode:!1})},"7b5e":function(n,t,e){"use strict";e.r(t);var a=e("d418"),r=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=r.a},"91ff":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"main"},[e("jyf-parser",{attrs:{html:n.article_content}})],1)],1)},o=[]},d418:function(n,t,e){"use strict";e("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("20f1"),r={data:function(){return{article_content:""}},components:{},props:{},onLoad:function(n){var t=n.type;switch(t=parseInt(t),uni.setNavigationBarTitle({title:0==t?"服务协议":1==t?"隐私政策":"售后保障"}),t){case 0:this.getServerProtoFun();break;case 1:this.getPrivatePolicyFun();break;case 2:this.getAfterSaleGuarFun();break;default:this.getServerProtoFun();break}},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{getServerProtoFun:function(){var n=this;(0,a.getServerProto)().then((function(t){1==t.code&&setTimeout((function(){n.article_content=t.data}),200)}))},getPrivatePolicyFun:function(){var n=this;(0,a.getPrivatePolicy)().then((function(t){1==t.code&&setTimeout((function(){n.article_content=t.data}),200)}))},getAfterSaleGuarFun:function(){var n=this;(0,a.getAfterSaleGuar)().then((function(t){1==t.code&&setTimeout((function(){n.article_content=t.data}),200)}))}}};t.default=r}}]);
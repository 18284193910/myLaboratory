(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news_list-news_list"],{"0055":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getCategoryList=r,e.getArticleList=o,e.getArticleDetail=s;var n=i(a("a8ca"));function r(t){var e=t.type,a=e?"help/category":"article/category";return delete t.type,n.default.get(a)}function o(t){var e=t.type,a=e?"help/lists":"article/lists";return delete t.type,n.default.get(a,{params:t})}function s(t){var e=t.type,a=e?"help/detail":"article/detail";return delete t.type,n.default.get(a,{params:{id:t.id}})}},"0c37":function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("d3b7"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("0055"),r=a("ffc2"),o=i(a("4ba9")),s=a("f262"),d={data:function(){return{active:0,showLoading:!0,categoryList:[],newsList:[],page:1,status:r.loadingType.LOADING,bannerList:[],type:0}},components:{swipers:o.default},props:{},onLoad:function(t){this.id=t.id,this.type=t.type||"",this.type?uni.setNavigationBarTitle({title:"帮助中心"}):uni.setNavigationBarTitle({title:"商城资讯"}),this.getCategoryListFun()},onReachBottom:function(){this.getArticleListFun()},methods:{changeActive:function(t){var e=this;this.active=t,this.page=1,this.newsList=[],this.status=r.loadingType.LOADING,setTimeout((function(){e.getArticleListFun()}),100)},getCategoryListFun:function(){var t=this;(0,n.getCategoryList)({type:this.type}).then((function(e){1==e.code&&(t.categoryList=e.data,t.getArticleListFun())}))},getArticleListFun:function(){var t=this,e=this.active,a=this.page,i=this.newsList,r=this.status;(0,s.loadingFun)(n.getArticleList,a,i,r,{type:this.type,id:e?e.toString():"",page_no:a}).then((function(e){e&&(t.page=e.page,t.newsList=e.dataList,t.status=e.status)}))},goPage:function(t){var e=t.currentTarget.dataset.id;uni.navigateTo({url:"/pages/news_details/news_details?id=".concat(e,"&type=").concat(this.type)})}}};e.default=d},"1f0b":function(t,e,a){"use strict";var i=a("882e"),n=a.n(i);n.a},"2cc9":function(t,e,a){"use strict";var i=a("663d"),n=a.n(i);n.a},"33b2":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.lists.length?a("v-uni-view",{staticClass:"swiper",style:{height:t.height,padding:t.padding,"border-radius":t.radius}},[a("v-uni-swiper",{attrs:{autoplay:t.autoplay,circular:t.circular},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.lists,(function(e,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-view",{staticStyle:{width:"100%",height:"100%"},attrs:{"data-item":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goPage(e)}}},[a("v-uni-image",{staticClass:"slide-image",style:{"border-radius":t.radius},attrs:{fit:"cover",src:e.image}})],1)],1)})),1),t.lists.length>1?a("v-uni-view",{staticClass:"dots"},t._l(t.lists,(function(e,i){return a("v-uni-view",{key:i,class:"dot "+(i==t.currentSwiper?"active":"")})})),1):t._e()],1):t._e()},r=[]},4583:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */.swiper[data-v-1bde1e48]{position:relative;overflow:hidden}.swiper uni-swiper[data-v-1bde1e48]{width:100%;height:100%;position:relative}.swiper uni-swiper .slide-image[data-v-1bde1e48]{width:100%;height:100%}.swiper .dots[data-v-1bde1e48]{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.swiper .dots .dot[data-v-1bde1e48]{width:%?8?%;height:%?8?%;-webkit-border-radius:50%;border-radius:50%;margin-right:%?10?%;background-color:#fff}.swiper .dots .dot.active[data-v-1bde1e48]{width:%?16?%;-webkit-border-radius:%?8?%;border-radius:%?8?%;background-color:#ff2c3c}',""]),t.exports=e},"45e1":function(t,e,a){"use strict";a("a630"),a("a9e3"),a("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{color:String,vertical:Boolean,type:{type:String,default:"spinner"},size:{type:Number,default:40},textSize:String},data:function(){return{array12:Array.from({length:12})}}};e.default=i},"4b56":function(t,e,a){"use strict";var i=a("4ea4");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("1da1")),r=a("b155"),o=a("f262"),s={data:function(){return{lists:[],currentSwiper:0}},components:{},props:{pid:{type:Number},circular:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},height:{type:String},radius:{type:String,default:"10rpx"},padding:{type:String,default:"0rpx"}},created:function(){this.getAdListFun()},watch:{pid:function(t){this.getAdListFun()}},methods:{getAdListFun:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getAdList)({pid:t.pid});case 2:a=e.sent,i=a.code,n=a.data,1==i&&(t.lists=n);case 6:case"end":return e.stop()}}),e)})))()},swiperChange:function(t){this.currentSwiper=t.detail.current},goPage:function(t){var e=t.link,a=t.link_type,i=(t.params,t.is_tab);switch(a){case 1:case 2:i?uni.switchTab({url:e}):uni.navigateTo({url:e+(0,o.paramsToStr)(args)});break;case 3:uni.navigateTo({url:"/pages/webview/webview?url="+e});break}}}};e.default=s},"4ba9":function(t,e,a){"use strict";a.r(e);var i=a("33b2"),n=a("cbe3");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("1f0b");var o,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1bde1e48",null,!1,i["a"],o);e["default"]=d.exports},5259:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={swipers:a("4ba9").default,tabs:a("bea5").default,tab:a("c3e3").default,loadingFooter:a("efda").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"news_list"},[a("v-uni-view",{staticClass:"contain"},[a("v-uni-view",{staticClass:"banner"},[a("swipers",{attrs:{pid:t.type?10:7,height:"300rpx",radius:"0rpx"}})],1),t.categoryList.length?a("tabs",{attrs:{active:t.active},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeActive.apply(void 0,arguments)}}},[a("tab",{attrs:{title:"全部"}}),t._l(t.categoryList,(function(t,e){return a("tab",{key:e,attrs:{title:t.name}})}))],2):t._e(),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"article-list"},t._l(t.newsList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"article-item bg-white",attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"title lg line2 mb20"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"lighter line2"},[a("v-uni-view",[t._v(t._s(e.synopsis))])],1)],1),a("v-uni-image",{staticClass:"img ml20",attrs:{width:"240rpx",height:"180rpx","lazy-load":!0,src:e.image}})],1),a("v-uni-view",{staticClass:"row-between mt20"},[a("v-uni-view",{staticClass:"xs muted"},[t._v("发布时间: "+t._s(e.create_time))]),a("v-uni-view",{staticClass:"row"},[a("v-uni-image",{staticClass:"icon-sm",attrs:{src:"/static/images/icon_see.png"}}),a("v-uni-view",{staticClass:"ml10 xs muted"},[t._v(t._s(e.visit)+"人浏览")])],1)],1)],1)})),1),a("loading-footer",{attrs:{status:t.status,slotEmpty:!0}},[a("v-uni-view",{staticClass:"column-center",staticStyle:{"padding-top":"100rpx"},attrs:{slot:"empty"},slot:"empty"},[a("v-uni-image",{staticClass:"img-null",attrs:{src:"/static/images/news_null.png"}}),a("v-uni-text",{staticClass:"nr muted"},[t._v("暂无数据～")])],1)],1)],1)],1)],1)],1)},r=[]},6178:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},components:{},props:{status:{type:String,default:"loading"},errorText:{type:String,default:"加载失败，点击重新加载"},loadingText:{type:String,default:"加载中..."},finishedText:{type:String,default:"我可是有底线的～"},slotEmpty:{type:Boolean,default:!1},color:{type:String,default:"#666"}},methods:{onRefresh:function(){this.$emit("refresh")}}};e.default=i},"663d":function(t,e,a){var i=a("d69b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("69c4634d",i,!0,{sourceMap:!1,shadowMode:!1})},"6be4":function(t,e,a){"use strict";a.r(e);var i=a("0c37"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"6de0":function(t,e,a){"use strict";a.r(e);var i=a("45e1"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},7101:function(t,e,a){"use strict";a.r(e);var i=a("6178"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},7512:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"loading "+(t.vertical?"loading--vertical":"")},[a("v-uni-view",{class:"loading__spinner loading__spinner--"+t.type,style:{color:t.color,width:t.size+"rpx",height:t.size+"rpx"}},t._l(t.array12,(function(e,i){return"spinner"===t.type?a("v-uni-view",{key:i,staticClass:"loading__dot"}):t._e()})),1),a("v-uni-view",{staticClass:"loading__text",style:{"font-size":t.textSize+"rpx",color:t.color}},[t._t("default")],2)],1)},r=[]},7617:function(t,e,a){"use strict";var i=a("9c58"),n=a.n(i);n.a},"799b":function(t,e,a){var i=a("ff92");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("ddd0660a",i,!0,{sourceMap:!1,shadowMode:!1})},"882e":function(t,e,a){var i=a("4583");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("72db5a6e",i,!0,{sourceMap:!1,shadowMode:!1})},"8f39":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={loading:a("b5bb").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"loading-footer row-center",style:"color: "+t.color},["loading"===t.status?a("v-uni-view",{staticClass:"loading row"},[a("loading",{staticClass:"mr20",attrs:{color:t.color}}),a("v-uni-text",{style:"color: "+t.color},[t._v(t._s(t.loadingText))])],1):t._e(),"finished"===t.status?a("v-uni-view",{staticClass:"finished"},[t._v(t._s(t.finishedText))]):t._e(),"error"===t.status?a("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onRefresh.apply(void 0,arguments)}}},[t._v(t._s(t.errorText))]):t._e(),"empty"===t.status?a("v-uni-view",{staticClass:"empty"},[t.slotEmpty?t._t("empty"):a("v-uni-text",[t._v("暂无数据")])],2):t._e()],1)},r=[]},"94d9":function(t,e,a){"use strict";a.r(e);var i=a("5259"),n=a("6be4");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("a714");var o,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"9c7b8094",null,!1,i["a"],o);e["default"]=d.exports},"9c58":function(t,e,a){var i=a("c011");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("26551ef0",i,!0,{sourceMap:!1,shadowMode:!1})},a714:function(t,e,a){"use strict";var i=a("799b"),n=a.n(i);n.a},b5bb:function(t,e,a){"use strict";a.r(e);var i=a("7512"),n=a("6de0");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("2cc9");var o,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"49a28488",null,!1,i["a"],o);e["default"]=d.exports},c011:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".loading-footer[data-v-1b4a51d1]{padding:%?30?% 0;color:#666}",""]),t.exports=e},cbe3:function(t,e,a){"use strict";a.r(e);var i=a("4b56"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},d69b:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'[data-v-49a28488]:host{font-size:0;line-height:1}.loading[data-v-49a28488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#c8c9cc}.loading__spinner[data-v-49a28488]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?45?%;max-width:100%;max-height:100%;height:%?45?%;-webkit-animation:rotate-data-v-49a28488 .8s linear infinite;animation:rotate-data-v-49a28488 .8s linear infinite}.loading__spinner--spinner[data-v-49a28488]{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.loading__spinner--circular[data-v-49a28488]{border:%?2?% solid transparent;border-top-color:initial;-webkit-border-radius:100%;border-radius:100%}.loading__text[data-v-49a28488]{margin-left:%?16?%;color:#969799;font-size:%?28?%;line-height:%?40?%}.loading__text[data-v-49a28488]:empty{display:none}.loading--vertical[data-v-49a28488]{-webkit-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.loading--vertical .loading__text[data-v-49a28488]{margin:%?16?% 0 0}.loading__dot[data-v-49a28488]{position:absolute;top:0;left:0;width:100%;height:100%}.loading__dot[data-v-49a28488]:before{display:block;width:%?4?%;height:25%;margin:0 auto;background-color:currentColor;-webkit-border-radius:40%;border-radius:40%;content:" "}.loading__dot[data-v-49a28488]:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.loading__dot[data-v-49a28488]:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.loading__dot[data-v-49a28488]:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.loading__dot[data-v-49a28488]:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.loading__dot[data-v-49a28488]:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.loading__dot[data-v-49a28488]:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.loading__dot[data-v-49a28488]:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.loading__dot[data-v-49a28488]:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.loading__dot[data-v-49a28488]:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.loading__dot[data-v-49a28488]:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.loading__dot[data-v-49a28488]:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.loading__dot[data-v-49a28488]:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}@-webkit-keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-49a28488{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},efda:function(t,e,a){"use strict";a.r(e);var i=a("8f39"),n=a("7101");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("7617");var o,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1b4a51d1",null,!1,i["a"],o);e["default"]=d.exports},ff92:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/information/information.wxss */.news_list .main .article-list[data-v-9c7b8094]{padding-top:%?20?%}.news_list .main .article-list .article-item[data-v-9c7b8094]{padding:%?20?%;border-bottom:var(--border);-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.news_list .main .article-list .article-item .info[data-v-9c7b8094]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.news_list .main .article-list .article-item .img[data-v-9c7b8094]{width:%?240?%;height:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.news_list .main .article-list[data-v-9c7b8094]:last-of-type{border:none}.news_list .footer[data-v-9c7b8094]{padding:%?30?% 0}uni-page-body .van-tabs .van-tab--active[data-v-9c7b8094]{color:#333}.news_list .van-tab[data-v-9c7b8094]{width:25%;-webkit-box-flex:0;-webkit-flex:none;flex:none}',""]),t.exports=e}}]);
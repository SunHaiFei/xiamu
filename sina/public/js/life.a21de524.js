(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["life"],{"25c6":function(t,e,n){"use strict";var s=n("8eb7e"),i=n.n(s);i.a},"8eb7e":function(t,e,n){},"9fd5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},t._l(t.lists,(function(e,s){return n("div",{key:s,staticClass:"item",attrs:{"data-i":e.lid},on:{mouseenter:t.enter,mouseleave:function(e){return t.leave(-1)}}},[n("img",{attrs:{src:"free/"+e.path}}),n("h3",[t._v(t._s(e.title))]),n("p",{staticClass:"count"},[n("span",[t._v("产品数量:"+t._s(e.count))]),n("span",[t._v("申请人数:"+t._s(e.userCount))])]),n("span",{staticClass:"item_s"},[t._v("火热进行中")]),n("div",{staticClass:"mb"}),n("router-link",{class:{details:t.num==e.lid},attrs:{to:{path:"/details",query:{num:t.num}}}})],1)})),0)},i=[],a={data:function(){return{lists:[],num:0}},created:function(){this.get()},methods:{enter:function(t){this.num=t.target.dataset.i,console.log(this.num)},leave:function(t){this.num=t},get:function(){var t=this;this.axios.get("/free/life").then((function(e){t.lists=e.data})).catch((function(t){console.log(errr)}))}}},c=a,u=(n("25c6"),n("2877")),o=Object(u["a"])(c,s,i,!1,null,"45c75e12",null);e["default"]=o.exports}}]);
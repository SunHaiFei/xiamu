(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dressDetails"],{"2e09":function(t,s,i){"use strict";var e=i("608c"),n=i.n(e);n.a},"608c":function(t,s,i){},cb12:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("nav",t._l(t.lists,(function(s,e){return i("router-link",{key:e,attrs:{to:s.to}},[t._v(t._s(s.name))])})),1),t.list[0]?i("div",{staticClass:"details"},[i("img",{attrs:{src:t.list[0].path}}),i("div",{staticClass:"right"},[i("span",[t._v(t._s(t.list[0].title))]),i("button",[t._v("申请试用")]),i("div",{staticClass:"wrap"},[i("h3",[t._v("详细信息")]),i("span",[t._v(t._s(t.list[0].detail))])])])]):t._e()])},n=[],a={data:function(){return{lists:[{to:"/",name:"首页/"},{to:"",name:"体验店加盟/"},{to:"",name:"门店展示"}],lid:this.$router.history.current.query.num,list:[]}},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;this.axios.get("/details/dress",{params:{lid:this.lid}}).then((function(s){t.list=s.data,console.log(t.list)})).catch((function(t){console.log(t)}))}}},l=a,o=(i("2e09"),i("2877")),r=Object(o["a"])(l,e,n,!1,null,"3b500e33",null);s["default"]=r.exports}}]);
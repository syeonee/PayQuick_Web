webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("UVEZ"),transition:"scale-transition",width:"40"}}),this._v(" "),e("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:a("S1BL"),width:"150"}})],1),this._v(" "),e("v-spacer")],1),this._v(" "),e("router-view")],1)},staticRenderFns:[]},r=a("VU/8")({name:"App",components:{},data:function(){return{}}},i,!1,null,null,null).exports,n=a("/ocq"),o={props:{source:String},data:function(){return{user:{userid:"",password:""}}},methods:{login:function(t){var e=this;this.$http.post("/api/users/login",{user:this.user}).then(function(t){alert(t.data.message),e.$router.push({name:"home",params:{id:e.user.userid}})}).catch(function(t){alert(t)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{href:t.source,icon:"",large:"",target:"_blank"}},s),[a("v-icon",[t._v("mdi-code-tags")])],1)]}}])},[t._v(" "),a("span",[t._v("Source")])])],1),t._v(" "),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"ID",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.user.userid,callback:function(e){t.$set(t.user,"userid",e)},expression:"user.userid"}}),t._v(" "),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},c=a("VU/8")(o,l,!1,null,null,null).exports,d={data:function(){return{users:[]}},created:function(){var t=this;this.$http.get("/api/users").then(function(e){console.log("users"),console.log(e.data),t.users=e.data})}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.users,function(e,s){return a("div",{key:s,staticClass:"user-wrap"},[a("h2",[t._v("No. "+t._s(s+1))]),t._v(" "),a("dl",[a("dt",[t._v("아이디")]),t._v(" "),a("dd",[t._v(t._s(e.cus_id))]),t._v(" "),a("dt",[t._v("이름")]),t._v(" "),a("dd",[t._v(t._s(e.cus_name))])])])}),0)},staticRenderFns:[]},u=(a("VU/8")(d,v,!1,null,null,null).exports,{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-container",{attrs:{"pa-1":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"grey--text"},[t._v(t._s(t.title))]),t._v(" "),a("h3",{staticClass:"headline"},[t._v(t._s(t.number))])])])],1),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-avatar",[a("v-icon",{attrs:{"x-large":"",color:t.tIconColor}},[t._v(t._s(t.tIcon))])],1)],1)],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-2"},[a("v-icon",{attrs:{small:"",color:t.bIconColor}},[t._v(t._s(t.bIcon))]),t._v(" "),a("span",{staticClass:"grey--text caption font-italic"},[t._v(" "+t._s(t.bText))]),t._v(" "),a("v-spacer")],1)],1)],1)},staticRenderFns:[]}),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{attrs:{height:"100%"}},[e("v-card-title",{attrs:{"primary-title":""}},[e("span",{staticClass:"grey--text"},[this._v(this._s(this.title))])]),this._v(" "),e("v-divider",{attrs:{light:""}}),this._v(" "),e("v-card-text",[e("trend",{attrs:{data:this.data,gradient:this.gradient,"auto-draw":"",smooth:""}})],1)],1)},staticRenderFns:[]},m={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/users/info/"+e).then(function(e){t.user=e.data}).catch(function(t){console.log(t)})},components:{countCard:a("VU/8")({props:["title","number","tIcon","tIconColor","bIcon","bIconColor","bText"]},u,!1,null,null,null).exports,chartCard:a("VU/8")({props:["title","data","gradient"]},p,!1,null,null,null).exports},props:{},data:function(){var t=this.$route.params.id;return{user:{},drawer:null,items:[{icon:"mdi-home-account",text:"Home",link:"/home/"+t},{icon:"mdi-credit-card-outline",text:"상품 결제 내역",link:"/pay/"+t},{icon:"mdi-calendar-multiple-check",text:"매출 관리",link:"/total/"+t},{icon:"mdi-hanger",text:"재고 관리",link:"/stock/"+t}]}},methods:{login:function(t){var e=this;this.$http.post("/api/users/login",{user:this.user}).then(function(t){alert(t.data.message),e.$router.push({name:"home",params:{id:e.user.userid}})}).catch(function(t){alert(t)})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-navigation-drawer",{attrs:{color:"secondary",permanent:"",app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.shopName))]),t._v(" "),a("v-list-item-subtitle",[t._v(t._s(t.user.userName))])],1)],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})],2)],1),t._v(" "),a("v-card",{staticClass:"pa-5"},[a("v-layout",{attrs:{wrap:"",row:"","justify-center":""}},[a("v-flex",{staticClass:"pb-2 ma-6",attrs:{xs12:"",sm6:"",md3:""}},[a("count-card",{attrs:{title:"일 매출",number:t.daySales,tIcon:"mdi-calculator",tIconColor:"warning",bIcon:"mdi-update",bIconColor:"success",bText:t.dayUpdate}})],1),t._v(" "),a("v-flex",{staticClass:"pb-2 ma-6",attrs:{xs12:"",sm6:"",md3:""}},[a("count-card",{attrs:{title:"일 판매량",number:t.daySalesRate,tIcon:"mdi-counter",tIconColor:"warning",bIcon:"mdi-update",bIconColor:"success",bText:t.rateUpdate}})],1),t._v(" "),a("v-flex",{staticClass:"pb-2 ma-6",attrs:{xs12:"",sm6:"",md3:""}},[a("count-card",{attrs:{title:"월 매출",number:t.monthSales,tIcon:"mdi-calculator",tIconColor:"warning",bIcon:"mdi-update",bIconColor:"success",bText:t.monthUpdate}})],1),t._v(" "),a("v-flex",{staticClass:"pb-2 ma-6",attrs:{xs12:"",sm4:""}},[a("chart-card",{attrs:{title:"주간 사용자 현황",data:[3,1,2,1,0,4,2],gradient:["#6fa8dc","#42b983","#2c3e50"]}})],1),t._v(" "),a("v-flex",{staticClass:"pb-2 ma-6",attrs:{xs12:"",sm4:""}},[a("chart-card",{attrs:{title:"주간 조회수 현황",data:[33,22,2,43,33,1,55],gradient:["#6fa8dc","#42b983","#2c3e50"]}})],1)],1)],1)],1)],1)},staticRenderFns:[]},_=a("VU/8")(m,h,!1,null,null,null).exports,f={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/users/info/"+e).then(function(e){t.user=e.data}).catch(function(t){console.log(t)}),this.$http.get("/api/pay/"+e).then(function(e){t.payInfos=e.data}).catch(function(t){console.log(t)})},props:{},data:function(){var t=this.$route.params.id;return{user:{},payInfos:[],search:"",headers:[{text:"결제번호",align:"start",value:"payNum"},{text:"결제일시",value:"payDate"},{text:"상품명",value:"prodName"},{text:"상품가격",value:"prodPrice"},{text:"구매자(ID)",value:"cusId"}],drawer:null,items:[{icon:"mdi-home-account",text:"Home",link:"/home/"+t},{icon:"mdi-credit-card-outline",text:"상품 결제 내역",link:"/pay/"+t},{icon:"mdi-calendar-multiple-check",text:"매출 관리",link:"/total/"+t},{icon:"mdi-hanger",text:"재고 관리",link:"/stock/"+t}]}},methods:{}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-navigation-drawer",{attrs:{color:"secondary",permanent:"",app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.shopName))]),t._v(" "),a("v-list-item-subtitle",[t._v(t._s(t.user.userName))])],1)],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})],2)],1),t._v(" "),a("v-card",[a("v-card-title",[t._v("\n    상품 결제 내역\n    "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.payInfos,search:t.search}})],1)],1)},staticRenderFns:[]},x=a("VU/8")(f,g,!1,null,null,null).exports,k={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/users/info/"+e).then(function(e){t.user=e.data}).catch(function(t){console.log(t)}),this.$http.get("/api/total/"+e).then(function(e){t.totalInfos=e.data}).catch(function(t){console.log(t)})},props:{},data:function(){var t=this.$route.params.id;return{user:{},totalInfos:[],search:"",headers:[{text:"날짜",align:"start",value:"date"},{text:"일 매출 금액",value:"total"}],drawer:null,items:[{icon:"mdi-home-account",text:"Home",link:"/home/"+t},{icon:"mdi-credit-card-outline",text:"상품 결제 내역",link:"/pay/"+t},{icon:"mdi-calendar-multiple-check",text:"매출 관리",link:"/total/"+t},{icon:"mdi-hanger",text:"재고 관리",link:"/stock/"+t}]}},methods:{}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-navigation-drawer",{attrs:{color:"secondary",permanent:"",app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.shopName))]),t._v(" "),a("v-list-item-subtitle",[t._v(t._s(t.user.userName))])],1)],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})],2)],1),t._v(" "),a("v-card",[a("v-card-title",[t._v("\n    매출 관리\n    "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.totalInfos,search:t.search}})],1)],1)},staticRenderFns:[]},y=a("VU/8")(k,b,!1,null,null,null).exports,w={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/users/info/"+e).then(function(e){t.user=e.data}).catch(function(t){console.log(t)}),this.$http.get("/api/stock/"+e).then(function(e){t.stockInfos=e.data}).catch(function(t){console.log(t)})},props:{},data:function(){var t=this.$route.params.id;return{user:{},stockInfos:[],search:"",headers:[{text:"제품 고유번호",align:"start",value:"stockId"},{text:"상품명",value:"prodName"},{text:"사이즈",value:"prodSize"},{text:"색상",value:"prodColor"},{text:"상품가격",value:"prodPrice"}],drawer:null,items:[{icon:"mdi-home-account",text:"Home",link:"/home/"+t},{icon:"mdi-credit-card-outline",text:"상품 결제 내역",link:"/pay/"+t},{icon:"mdi-calendar-multiple-check",text:"매출 관리",link:"/total/"+t},{icon:"mdi-hanger",text:"재고 관리",link:"/stock/"+t}]}},methods:{}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-navigation-drawer",{attrs:{color:"secondary",permanent:"",app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.user.shopName))]),t._v(" "),a("v-list-item-subtitle",[t._v(t._s(t.user.userName))])],1)],1),t._v(" "),a("v-divider"),t._v(" "),t._l(t.items,function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})],2)],1),t._v(" "),a("v-card",[a("v-card-title",[t._v("\n    재고 관리\n    "),a("v-spacer"),t._v(" "),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.stockInfos,search:t.search}})],1)],1)},staticRenderFns:[]},I=a("VU/8")(w,C,!1,null,null,null).exports;s.default.use(n.a);var $=new n.a({mode:"history",routes:[{path:"/login",name:"login",component:c},{path:"/",name:"user",component:c},{path:"/home/:id",name:"home",component:_},{path:"/pay/:id",name:"pay",component:x},{path:"/total/:id",name:"total",component:y},{path:"/stock/:id",name:"stock",component:I}]}),N=a("mtWM"),S=a.n(N),U=(a("csSS"),a("3EgV")),V=a.n(U),E=(a("7zck"),a("Ui3i"));s.default.use(V.a);var P=new V.a({theme:{themes:{light:{primary:E.a.deepPurple.lighten1,secondary:E.a.deepPurple.lighten4,accent:E.a.deepPurple.accent1,accent2:E.a.deepPurple.accent4}}},icons:{iconfont:"mdi"}}),R=(a("AYPi"),a("4Imv"));s.default.prototype.$http=S.a,s.default.use($),s.default.use(R.a),s.default.config.devtools=!0,s.default.config.productionTip=!1,new s.default({el:"#app",router:$,components:{App:r},vuetify:P,template:"<App/>"})},S1BL:function(t,e,a){t.exports=a.p+"static/img/PQName.b11cb19.png"},UVEZ:function(t,e,a){t.exports=a.p+"static/img/pq1.40485c8.png"},csSS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.0b6c7d87ca7defe1ec43.js.map
"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[149],{1981:function(t,e,r){r.d(e,{A:function(){return k}});var n=r(641),o=r(33);const c={class:"docker"},s=["innerHTML"],d={class:"docker_title"};function i(t,e,r,i,a,l){const u=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.dockerList,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,o.C4)([{docker_item:!0,"docker_item--active":e===r.currentIndex},"docker_item"]),key:t.icon},[(0,n.bF)(u,{to:t.to},{default:(0,n.k6)((()=>[(0,n.Lk)("div",{class:"iconfont",innerHTML:t.icon},null,8,s),(0,n.Lk)("div",d,(0,o.v_)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var a={name:"Docker",props:["currentIndex"],setup(){const t=[{icon:"&#xe630;",text:"首页",to:{name:"Home"}},{icon:"&#xe67b;",text:"购物车",to:{name:"CartList"}},{icon:"&#xe69e;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe639;",text:"我的",to:{name:"Home"}}];return{dockerList:t}}},l=r(6262);const u=(0,l.A)(a,[["render",i],["__scopeId","data-v-dd91850e"]]);var k=u},3263:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(641),o=r(33);const c=t=>((0,n.Qi)("data-v-16df9f53"),t=t(),(0,n.jt)(),t),s={class:"wrapper"},d=c((()=>(0,n.Lk)("div",{class:"title"},"我的订单",-1))),i={class:"orders"},a={class:"order_title"},l={class:"order_content"},u={class:"order_content_imgs"},k=["src"],v={class:"order_content_info"},_={class:"order_content_price"},p={class:"order_content_count"};function f(t,e,r,c,f,m){const L=(0,n.g2)("spen"),C=(0,n.g2)("Docker");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",s,[d,(0,n.Lk)("div",i,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.list,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"order",key:e},[(0,n.Lk)("div",a,[(0,n.eW)((0,o.v_)(t.name)+" ",1),(0,n.bF)(L,{class:"order_status"},{default:(0,n.k6)((()=>[(0,n.eW)((0,o.v_)(t.isCanceled?"已取消":"已下单"),1)])),_:2},1024)]),(0,n.Lk)("div",l,[(0,n.Lk)("div",u,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.products,((t,e)=>((0,n.uX)(),(0,n.CE)(n.FK,{key:e},[e<=3?((0,n.uX)(),(0,n.CE)("img",{key:0,src:t.products.img,class:"order_content_img"},null,8,k)):(0,n.Q3)("",!0)],64)))),128))]),(0,n.Lk)("div",v,[(0,n.Lk)("div",_,"￥ "+(0,o.v_)(t.totalPrice),1),(0,n.Lk)("div",p,"共 "+(0,o.v_)(t.totalNumber)+" 件",1)])])])))),128))])]),(0,n.bF)(C,{currentIndex:2})],64)}var m=r(953),L=r(5659),C=r(1981);const g=()=>{const t=(0,m.Kh)({list:[]}),e=async()=>{const t=await(0,L.J)("/api/order");if(0===t?.errno&&t?.data?.length){const e=t.data;e.forEach((t=>{const e=t.products||[];let r=0,n=0;e.forEach((t=>{n+=t?.orderSales||0,r+=t?.product?.price*t?.orderSales||0})),t.totalPrice=r,t.totalNumber=n})),console.log(e)}};e();const{list:r}=(0,m.QW)(t);return{list:r}};var x={name:"OrderList",components:{Docker:C.A},setup(){const t=g();return{list:t}}},E=r(6262);const X=(0,E.A)(x,[["render",f],["__scopeId","data-v-16df9f53"]]);var b=X}}]);
//# sourceMappingURL=OrderList.e6509475.js.map
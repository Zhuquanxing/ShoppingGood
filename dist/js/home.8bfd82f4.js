"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[962],{1981:function(e,t,n){n.d(t,{A:function(){return u}});var s=n(641),a=n(33);const c={class:"docker"},o=["innerHTML"],i={class:"docker_title"};function r(e,t,n,r,d,l){const m=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",c,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.dockerList,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,a.C4)([{docker_item:!0,"docker_item--active":t===n.currentIndex},"docker_item"]),key:e.icon},[(0,s.bF)(m,{to:e.to},{default:(0,s.k6)((()=>[(0,s.Lk)("div",{class:"iconfont",innerHTML:e.icon},null,8,o),(0,s.Lk)("div",i,(0,a.v_)(e.text),1)])),_:2},1032,["to"])],2)))),128))])}var d={name:"Docker",props:["currentIndex"],setup(){const e=[{icon:"&#xe630;",text:"首页",to:{name:"Home"}},{icon:"&#xe67b;",text:"购物车",to:{name:"CartList"}},{icon:"&#xe69e;",text:"订单",to:{name:"OrderList"}},{icon:"&#xe639;",text:"我的",to:{name:"Home"}}];return{dockerList:e}}},l=n(6262);const m=(0,l.A)(d,[["render",r],["__scopeId","data-v-dd91850e"]]);var u=m},2990:function(e,t,n){n.d(t,{A:function(){return k}});var s=n(641),a=n(33);const c={class:"shop"},o=["src"],i={class:"shop_content_title"},r={class:"shop_content_tags"},d={class:"shop_content_tag"},l={class:"shop_content_tag"},m={class:"shop_content_tag"},u={class:"shop_content_highlight"};function p(e,t,n,p,v,_){return(0,s.uX)(),(0,s.CE)("div",c,[(0,s.Lk)("img",{src:n.item.imgUrl,class:"shop_img"},null,8,o),(0,s.Lk)("div",{class:(0,a.C4)({shop_content:!0,"shop_content--bordered":!e.history})},[(0,s.Lk)("div",i,(0,a.v_)(n.item.name),1),(0,s.Lk)("div",r,[(0,s.Lk)("span",d,"月售："+(0,a.v_)(n.item.sales),1),(0,s.Lk)("span",l,"起送："+(0,a.v_)(n.item.expressLimit),1),(0,s.Lk)("span",m,"基础运费："+(0,a.v_)(n.item.expressPrice),1)]),(0,s.Lk)("p",u,(0,a.v_)(n.item.slogan),1)],2)])}var v={name:"ShopInfo",props:["item"]},_=n(6262);const g=(0,_.A)(v,[["render",p],["__scopeId","data-v-01524726"]]);var k=g},4498:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var s=n(641);const a={class:"wrapper"};function c(e,t,n,c,o,i){const r=(0,s.g2)("StaticPart"),d=(0,s.g2)("Nearby"),l=(0,s.g2)("Docker");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",a,[(0,s.bF)(r),(0,s.bF)(d)]),(0,s.bF)(l,{currentIndex:0})],64)}var o=n(33);const i=e=>((0,s.Qi)("data-v-1e643d96"),e=e(),(0,s.jt)(),e),r=(0,s.Fv)('<div class="position" data-v-1e643d96><span class="iconfont position_icon" data-v-1e643d96></span> 广东邮电职业技术学校 <span class="iconfont position_notice" data-v-1e643d96></span></div><div class="search" data-v-1e643d96><span class="iconfont" data-v-1e643d96></span><span class="search_text" data-v-1e643d96>山姆会员商店优惠商品</span></div><div class="banner" data-v-1e643d96><img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" data-v-1e643d96></div>',3),d={class:"icons"},l=["src"],m={class:"icons_item_desc"},u=i((()=>(0,s.Lk)("div",{class:"gap"},null,-1)));function p(e,t,n,a,c,i){return(0,s.uX)(),(0,s.CE)(s.FK,null,[r,(0,s.Lk)("div",d,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.iconsList,(e=>((0,s.uX)(),(0,s.CE)("div",{class:"icons_item",key:e.desc},[(0,s.Lk)("img",{class:"icons_item_img",src:`http://www.dell-lee.com/imgs/vue3/${e.imgName}.png`},null,8,l),(0,s.Lk)("p",m,(0,o.v_)(e.desc),1)])))),128))]),u],64)}var v={name:"StaticPart",setup(){const e=[{imgName:"超市",desc:"超市便利"},{imgName:"菜市场",desc:"菜市场"},{imgName:"签到",desc:"签到"},{imgName:"水果店",desc:"水果店"},{imgName:"鲜花",desc:"鲜花绿植"},{imgName:"医药健康",desc:"医药健康"},{imgName:"家居",desc:"家居时尚"},{imgName:"蛋糕",desc:"烘焙蛋糕"},{imgName:"大牌免运",desc:"大牌免运"},{imgName:"红包",desc:"红包套餐"}];return{iconsList:e}}},_=n(6262);const g=(0,_.A)(v,[["render",p],["__scopeId","data-v-1e643d96"]]);var k=g;const L=e=>((0,s.Qi)("data-v-3117c508"),e=e(),(0,s.jt)(),e),h={class:"nearby"},b=L((()=>(0,s.Lk)("h3",{class:"nearby title"},"附近店铺",-1)));function f(e,t,n,a,c,o){const i=(0,s.g2)("ShopInfo"),r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",h,[b,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.nearbyList,(e=>((0,s.uX)(),(0,s.Wv)(r,{to:`/shop/${e._id}`,key:e._id},{default:(0,s.k6)((()=>[(0,s.bF)(i,{item:e},null,8,["item"])])),_:2},1032,["to"])))),128))])}var y=n(953),N=n(5659),x=n(2990);const C=()=>{const e=(0,y.KR)([]),t=async()=>{const t=await(0,N.J)("/api/shop/hot-list");console.log("result: %@",t),console.log(t?.data),0===t?.data.errno&&t?.data?.data.length&&(e.value=t.data.data)};return{getNearbyList:t,nearbyList:e}};var I={name:"Nearby",components:{ShopInfo:x.A},setup(){const{getNearbyList:e,nearbyList:t}=C();return e(),{nearbyList:t}}};const F=(0,_.A)(I,[["render",f],["__scopeId","data-v-3117c508"]]);var X=F,w=n(1981),E={name:"Hemo",components:{StaticPart:k,Nearby:X,Docker:w.A}};const A=(0,_.A)(E,[["render",c],["__scopeId","data-v-0cb36cae"]]);var K=A}}]);
//# sourceMappingURL=home.8bfd82f4.js.map
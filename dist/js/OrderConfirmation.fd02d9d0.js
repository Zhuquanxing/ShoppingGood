"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[302],{9174:function(t,c,n){n.d(c,{K:function(){return a}});var s=n(6278),e=n(641);const a=t=>{const c=(0,s.Pj)(),n=c.state.cartList,a=(t,n,s,e)=>{c.commit("changeCartItemInfo",{shopId:t,productId:n,productInfo:s,num:e})},r=(0,e.EW)((()=>{const c=n[t]?.productList||{},s={};for(const t in c){const n=c[t];n.count>0&&(s[t]=n)}return s})),o=(0,e.EW)((()=>{const c=n[t]?.shopName||"";return c})),d=(0,e.EW)((()=>{const c=n[t]?.productList,s={total:0,price:0,allChecked:!0};if(c)for(const t in c){const n=c[t];s.total+=n.count,n.check&&(s.price+=n.count*n.price),n.count>0&&!n.check&&(s.allChecked=!1)}return s.price=s.price.toFixed(2),s}));return{cartList:n,changeCartItemInfo:a,productList:r,shopName:o,calculations:d}}},9350:function(t,c,n){n.r(c),n.d(c,{default:function(){return Y}});var s=n(641);const e={class:"wrapper"};function a(t,c,n,a,r,o){const d=(0,s.g2)("TopArea"),i=(0,s.g2)("ProductList"),l=(0,s.g2)("Order");return(0,s.uX)(),(0,s.CE)("div",e,[(0,s.bF)(d),(0,s.bF)(i),(0,s.bF)(l)])}const r=t=>((0,s.Qi)("data-v-7d24153c"),t=t(),(0,s.jt)(),t),o={class:"top"},d=r((()=>(0,s.Lk)("div",{class:"top_bgcor"},null,-1))),i={class:"top_header"},l=(0,s.Fv)('<div class="top_receiver" data-v-7d24153c><div class="top_receiver_title" data-v-7d24153c>收货地址</div><div class="top_receiver_address" data-v-7d24153c>北京理工大学国防科技园2号楼</div><div class="top_receiver_info" data-v-7d24153c><span class="top_receiver_info_name" data-v-7d24153c>瑶妹 （女士）</span><span class="top_receiver_info_name" data-v-7d24153c>1008611</span></div><div class="iconfont top_receiver_icon" data-v-7d24153c></div></div>',1);function u(t,c,n,e,a,r){return(0,s.uX)(),(0,s.CE)("div",o,[d,(0,s.Lk)("div",i,[(0,s.Lk)("div",{class:"iconfont top_header_back",onClick:c[0]||(c[0]=(...t)=>e.handleBackClick&&e.handleBackClick(...t))},""),(0,s.eW)(" 确认订单 ")]),l])}var p=n(5220),v={name:"TopArea",setup(){const t=(0,p.rd)(),c=()=>{t.back()};return{handleBackClick:c}}},_=n(6262);const m=(0,_.A)(v,[["render",u],["__scopeId","data-v-7d24153c"]]);var k=m,h=n(33);const C=t=>((0,s.Qi)("data-v-c4683e88"),t=t(),(0,s.jt)(),t),f={class:"products"},L={class:"products_title"},g={class:"products_wrapper"},b={class:"products_list"},I=["src"],w={class:"products_item_detail"},F={class:"products_item_title"},O={class:"products_item_price"},E=C((()=>(0,s.Lk)("span",{class:"products_item_yen"},"¥",-1))),j=C((()=>(0,s.Lk)("span",{class:"products_item_yen"},"¥",-1)));function A(t,c,n,e,a,r){const o=(0,s.g2)("spen");return(0,s.uX)(),(0,s.CE)("div",f,[(0,s.Lk)("div",L,(0,h.v_)(e.shopName),1),(0,s.Lk)("div",g,[(0,s.Lk)("div",b,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.productList,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:"products_item"},[(0,s.Lk)("img",{class:"products_item_img",src:t.imgUrl},null,8,I),(0,s.Lk)("div",w,[(0,s.Lk)("h4",F,(0,h.v_)(t.name),1),(0,s.Lk)("p",O,[(0,s.bF)(o,null,{default:(0,s.k6)((()=>[E,(0,s.eW)(" "+(0,h.v_)(t.price)+" x "+(0,h.v_)(t.count),1)])),_:2},1024),(0,s.bF)(o,{class:"products_item_total"},{default:(0,s.k6)((()=>[j,(0,s.eW)(" "+(0,h.v_)((t.price*t.count).toFixed(2)),1)])),_:2},1024)])])])))),128))])])])}var N=n(9174),W={name:"ProductList",setup(){const t=(0,p.lq)(),c=t.params.id,{shopName:n,productList:s}=(0,N.K)(c);return{productList:s,shopName:n}}};const y=(0,_.A)(W,[["render",A],["__scopeId","data-v-c4683e88"]]);var K=y,X=n(3751);const P=t=>((0,s.Qi)("data-v-4052dc0e"),t=t(),(0,s.jt)(),t),S={class:"order"},x={class:"order_price"},B=P((()=>(0,s.Lk)("h3",{class:"mask_content_title"},"确认离开收银台吗？",-1))),Q=P((()=>(0,s.Lk)("p",{class:"mask_content_desc"},"请尽快完成支付，否则将被取消！",-1))),T={class:"mask_content_btns"};function q(t,c,n,e,a,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",S,[(0,s.Lk)("div",x,[(0,s.eW)("实付金额 "),(0,s.Lk)("b",null,(0,h.v_)(e.calculations.price),1)]),(0,s.Lk)("div",{class:"order_btn",onClick:c[0]||(c[0]=()=>e.handleShowConfirmChange(!0))},"提交订单")]),(0,s.bo)((0,s.Lk)("div",{class:"mask",onClick:c[4]||(c[4]=()=>e.handleShowConfirmChange(!1))},[(0,s.Lk)("div",{class:"mask_content",onClick:c[3]||(c[3]=(0,X.D$)((()=>{}),["stop"]))},[B,Q,(0,s.Lk)("div",T,[(0,s.Lk)("div",{class:"mask_content_btn mask_content_btn--first",onClick:c[1]||(c[1]=()=>e.handleConfirmOrder(!0))},"取消订单"),(0,s.Lk)("div",{class:"mask_content_btn mask_content_btn--last",onClick:c[2]||(c[2]=()=>e.handleConfirmOrder(!1))},"确认支付")])])],512),[[X.aG,e.showConfirm]])],64)}n(4114);var D=n(953),G=n(6278),R=n(5659);const U=(t,c,n)=>{const s=(0,p.rd)(),e=(0,G.Pj)(),a=async a=>{const r=[];for(const t in n.value){const c=n.value[t];r.push({id:parseInt(c._id,10),num:c.count})}try{const n=await(0,R.b)("/api/order",{addressId:1,shopId:t,shopName:c.value,isCanceled:a,products:r});console.log(n),0===n?.errno&&(e.commit("clearCartData",t),s.push({name:"OrderList"}))}catch(o){}};return{handleConfirmOrder:a}},$=()=>{const t=(0,D.KR)(!1),c=async c=>{t.value=c};return{showConfirm:t,handleShowConfirmChange:c}};var z={name:"Order",setup(){const t=(0,p.lq)(),c=parseInt(t.params.id,10),{calculations:n,shopName:s,productList:e}=(0,N.K)(c),{handleConfirmOrder:a}=U(c,s,e),{showConfirm:r,handleShowConfirmChange:o}=$();return{calculations:n,handleConfirmOrder:a,showConfirm:r,handleShowConfirmChange:o}}};const H=(0,_.A)(z,[["render",q],["__scopeId","data-v-4052dc0e"]]);var J=H,M={name:"OrderConfirmation",components:{TopArea:k,ProductList:K,Order:J}};const V=(0,_.A)(M,[["render",a],["__scopeId","data-v-76379210"]]);var Y=V}}]);
//# sourceMappingURL=OrderConfirmation.fd02d9d0.js.map
"use strict";(self["webpackChunkjingdong"]=self["webpackChunkjingdong"]||[]).push([[491],{2981:function(s,e,a){a.d(e,{A:function(){return p},g:function(){return u}});var n=a(641),t=a(33);const o={class:"toast"};function r(s,e,a,r,l,i){return(0,n.uX)(),(0,n.CE)("div",o,(0,t.v_)(a.message),1)}var l=a(953),i={props:["message"]};const u=()=>{const s=(0,l.Kh)({show:!1,toastMessage:""}),e=e=>{s.show=!0,s.toastMessage=e,setTimeout((()=>{s.show=!1,s.toastMessage=""}),2e3)},{show:a,toastMessage:n}=(0,l.lW)(s);return{show:a,toastMessage:n,showToast:e}};var d=a(6262);const c=(0,d.A)(i,[["render",r],["__scopeId","data-v-0bfde95d"]]);var p=c},1221:function(s,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(641),t=a(3751);const o=s=>((0,n.Qi)("data-v-f7fd1018"),s=s(),(0,n.jt)(),s),r={class:"wrapper"},l=o((()=>(0,n.Lk)("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png"},null,-1))),i={class:"wrapper__input"},u={class:"wrapper__input"};function d(s,e,a,o,d,c){const p=(0,n.g2)("Toast");return(0,n.uX)(),(0,n.CE)("div",r,[l,(0,n.Lk)("div",i,[(0,n.bo)((0,n.Lk)("input",{class:"wrapper__input__content",placeholder:"用户名","onUpdate:modelValue":e[0]||(e[0]=s=>o.username=s)},null,512),[[t.Jo,o.username]])]),(0,n.Lk)("div",u,[(0,n.bo)((0,n.Lk)("input",{class:"wrapper__input__content",placeholder:"请输入密码","onUpdate:modelValue":e[1]||(e[1]=s=>o.password=s),autocomplete:"new-password"},null,512),[[t.Jo,o.password]])]),(0,n.Lk)("div",{class:"wrapper__login-button",onClick:e[2]||(e[2]=(...s)=>o.handleLogin&&o.handleLogin(...s))},"登录"),(0,n.Lk)("div",{class:"wrapper__login-link",onClick:e[3]||(e[3]=(...s)=>o.handleRegisterClick&&o.handleRegisterClick(...s))},"立即注册"),o.show?((0,n.uX)(),(0,n.Wv)(p,{key:0,message:o.toastMessage},null,8,["message"])):(0,n.Q3)("",!0)])}a(4114);var c=a(953),p=a(5220),g=a(5659),w=a(2981);const h=s=>{const e=(0,p.rd)(),a=(0,c.Kh)({username:"",password:""}),n=async()=>{try{const s=await(0,g.b)("/api/user/login",{username:"data.username",password:"data.password"});localStorage.isLogin=!0,e.push({name:"Home"}),print(s)}catch(a){s("请求失败")}},{username:t,password:o}=(0,c.QW)(a);return{handleLogin:n,username:t,password:o}},m=()=>{const s=(0,p.rd)(),e=()=>{s.push({name:"Register"})};return{handleRegisterClick:e}};var _={name:"Login",components:{Toast:w.A},setup(){const{show:s,toastMessage:e,showToast:a}=(0,w.g)(),{handleLogin:n,username:t,password:o}=h(a),{handleRegisterClick:r}=m();return{username:t,password:o,handleLogin:n,handleRegisterClick:r,show:s,toastMessage:e}}},k=a(6262);const v=(0,k.A)(_,[["render",d],["__scopeId","data-v-f7fd1018"]]);var f=v}}]);
//# sourceMappingURL=login_123.50fbabd6.js.map
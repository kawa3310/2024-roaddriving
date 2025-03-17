import{S as g}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{N as w}from"./NavbarComponents-PqOiXJBc.js";import{F as _}from"./FooterComponents-QyeJX-i-.js";import{_ as F,r as u,o as a,c as r,b as i,a as t,w as f,t as p,F as h,v as I,x as B,A as S,d as x,n as d,u as j}from"./index-5ALw-696.js";const N={data(){return{loginStates:!0,registrationStates:!1,forgotPassword:!1,enteremail:!0,certified:!1,code:"",codeItems:["","","",""],activeIndex:0}},methods:{forgotpassword(){this.forgotPassword!==!0?(this.forgotPassword=!0,this.loginStates=!1,this.enteremail=!0,this.certified=!1):(this.loginStates=!0,this.forgotPassword=!1)},registrationstates(){this.registrationStates!==!0?(this.registrationStates=!0,this.loginStates=!1):(this.loginStates=!0,this.registrationStates=!1)},getRaccount(){g.fire({toast:!0,position:"top-end",icon:"success",showConfirmButton:!1,timer:2500,title:"註冊成功"}),this.registrationstates()},getcertified(){this.certified!==!0?(this.certified=!0,this.enteremail=!1,g.fire({toast:!0,position:"top-end",icon:"success",showConfirmButton:!1,timer:2500,title:"已發送驗證碼至信箱"})):(this.enteremail=!0,this.certified=!1),g.fire({toast:!0,position:"top-end",icon:"success",showConfirmButton:!1,timer:2500,title:"已發送驗證碼至信箱"})},getResend(){this.certified!==!1&&g.fire({toast:!0,position:"top-end",icon:"success",showConfirmButton:!1,timer:2500,title:"已重新發送驗證碼至信箱"})},handleFocus(){this.updateActiveIndex()},handleBlur(){this.activeIndex=0},handleInput(){this.updateCodeItems(),this.updateActiveIndex()},updateCodeItems(){const y=this.code;this.codeItems=y.split("").concat(["","","",""]).slice(0,4)},updateActiveIndex(){this.activeIndex=this.code.length}},components:{NavbarComponents:w,FooterComponents:_},watch:{code(){this.updateCodeItems()}}},R={class:"container mt-3"},V={"aria-label":"breadcrumb"},D={class:"breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start"},P={class:"breadcrumb-item"},L={class:"breadcrumb-item"},q={class:"container mt-3 mb-lg-9"},A={key:0,class:"login d-flex justify-content-center mt-5"},J={class:"registration-form"},E={class:"mb-4"},M={class:"mb-4"},G={class:"d-flex justify-content-center align-items-center py-4"},z={class:"d-flex justify-content-between d-grid gap-3 mb-3"},O={key:1,class:"registration d-flex justify-content-center mt-5"},T={class:"registration-form"},U={class:"d-flex justify-content-center d-grid gap-3"},W={class:"mb-3"},Q={class:"mb-3"},X={class:"mb-3"},Y={class:"mb-3"},H={class:"d-flex justify-content-center align-items-center py-4"},Z={key:2,class:"forgot-password"},K={key:0,class:"d-flex justify-content-center my-5"},$={class:"registration-form"},ee={class:"mb-3"},te={class:"d-flex justify-content-center align-items-center py-4"},se={key:1,class:"d-flex justify-content-center my-5"},ie={class:"registration-form"},oe={class:"code-box"},le={class:"d-flex justify-content-center align-items-center py-4"},ne={class:"d-flex justify-content-between d-grid gap-3 mb-3"};function ae(y,e,re,de,n,o){const k=u("NavbarComponents"),b=u("RouterLink"),m=u("VField"),c=u("ErrorMessage"),v=u("VForm"),C=u("FooterComponents");return a(),r(h,null,[i(k),e[30]||(e[30]=t("div",{class:"empty-content"},null,-1)),t("div",R,[t("div",V,[t("ol",D,[t("li",P,[i(b,{class:"text-muted",to:"/"},{default:f(()=>e[11]||(e[11]=[x("首頁")])),_:1})]),t("li",L,[i(b,{to:"/login"},{default:f(()=>e[12]||(e[12]=[x("會員登入")])),_:1})])])])]),t("div",q,[e[29]||(e[29]=t("div",{class:"d-flex justify-content-center"},[t("div",{class:"logo-box"},[t("h5",null,"南南駕訓班"),t("div",{class:"login-logo"},[t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215881995.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Ti%2BPOwPUVod7CJEyYc%2F%2BGr9VmgOYvrPC%2BwyNTECd9hsR1lLIiifuLcQm0S%2Bu8nDlQFIoh7UnrpBM7zaJ%2FY%2B87h39RrDMQHdeuNXDipMcl8U%2Fjo7Ac66RJ2WIDZmnjPJga%2BjV1RlUiGnJyir5dfy7bhLGOAH6JF%2FPCckarXAcueceW7fl02WV5J77Caa3UA961dtfRO%2F9wC2gtyN8aeuQBeLXeLDuzxyrS69FbYPwycDqJsDEbNRLOPvdFGYum7qIFTfiI2gfbCA88e37WruqF2zD9NLXh1xvpkqZN1iGuya9eCRT57BPNM3s6HMHXiWIFmOKu7opJJGNoeaLWfQ1Dw%3D%3D",alt:"logo-sm"})])])],-1)),n.loginStates?(a(),r("div",A,[t("div",J,[e[17]||(e[17]=t("h5",{class:"text-center py-4"},"立即登入",-1)),i(v,{ref:"form"},{default:f(({errors:s})=>[t("div",E,[e[13]||(e[13]=t("label",{for:"email",class:"form-label"},"帳號",-1)),i(m,{id:"email",name:"email",type:"email",class:d(["form-control",{"is-invalid":s.email}]),placeholder:"輸入帳號",rules:"email|required"},null,8,["class"]),i(c,{name:"email",class:"invalid-feedback"})]),t("div",M,[e[14]||(e[14]=t("label",{for:"email",class:"form-label"},"密碼",-1)),i(m,{ref:"password",name:"密碼",type:"text",rules:"required|min:9|max:10",class:d(["form-control",{"is-invalid":s.密碼}]),placeholder:"輸入密碼"},null,8,["class"]),i(c,{name:"密碼",class:"invalid-feedback"})]),e[16]||(e[16]=t("div",{class:"mb-3 form-check"},[t("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),t("label",{class:"form-check-label",for:"exampleCheck1"},"記住密碼")],-1)),t("div",G,[i(b,{to:"/member",class:"btn btn-outline-dark px-8"},{default:f(()=>e[15]||(e[15]=[x("登入")])),_:1})]),t("div",z,[t("a",{onClick:e[0]||(e[0]=(...l)=>o.registrationstates&&o.registrationstates(...l))},"註冊"),t("a",{class:"text-muted",onClick:e[1]||(e[1]=(...l)=>o.forgotpassword&&o.forgotpassword(...l))},"忘記密碼")])]),_:1},512)])])):p("",!0),n.registrationStates?(a(),r("div",O,[t("div",T,[e[23]||(e[23]=t("h5",{class:"text-center py-3"},"立即註冊",-1)),t("div",U,[e[18]||(e[18]=t("p",null,"已經有帳號了？",-1)),t("a",{onClick:e[2]||(e[2]=(...s)=>o.registrationstates&&o.registrationstates(...s))}," 登入 ")]),i(v,{ref:"form"},{default:f(({errors:s})=>[t("div",W,[e[19]||(e[19]=t("label",{for:"email",class:"form-label"},"姓名",-1)),i(m,{id:"name",name:"姓名",type:"text",class:d(["form-control",{"is-invalid":s.姓名}]),placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),i(c,{name:"姓名",class:"invalid-feedback"})]),t("div",Q,[e[20]||(e[20]=t("label",{for:"email",class:"form-label"},"聯絡電話",-1)),i(m,{id:"tel",name:"電話",type:"text",class:d(["form-control",{"is-invalid":s.電話}]),placeholder:"請填入聯絡電話",rules:"required|min:9|max:10"},null,8,["class"]),i(c,{name:"電話",class:"invalid-feedback"})]),t("div",X,[e[21]||(e[21]=t("label",{for:"email",class:"form-label"},"信箱",-1)),i(m,{id:"email",name:"email",type:"email",class:d(["form-control",{"is-invalid":s.email}]),placeholder:"請填入信箱",rules:"email|required"},null,8,["class"]),i(c,{name:"email",class:"invalid-feedback"})]),t("div",Y,[e[22]||(e[22]=t("label",{for:"email",class:"form-label"},"密碼",-1)),i(m,{ref:"password",name:"密碼",type:"text",rules:"required|min:9|max:10",class:d(["form-control",{"is-invalid":s.密碼}]),placeholder:"請填入6-15字密碼"},null,8,["class"]),i(c,{name:"密碼",class:"invalid-feedback"})]),t("div",H,[t("a",{class:"btn btn-outline-dark px-8",onClick:e[3]||(e[3]=(...l)=>o.getRaccount&&o.getRaccount(...l))},"註冊")])]),_:1},512)])])):p("",!0),n.forgotPassword?(a(),r("div",Z,[n.enteremail?(a(),r("div",K,[t("div",$,[e[25]||(e[25]=t("h5",{class:"text-center py-3"},"忘記密碼",-1)),i(v,{ref:"form"},{default:f(({errors:s})=>[t("div",ee,[e[24]||(e[24]=t("label",{for:"email",class:"form-label"},"信箱",-1)),i(m,{id:"email",name:"email",type:"email",class:d(["form-control",{"is-invalid":s.email}]),placeholder:"請填入已註冊信箱",rules:"email|required"},null,8,["class"]),i(c,{name:"email",class:"invalid-feedback"})]),t("div",te,[t("button",{type:"submit",class:"btn btn-outline-dark px-8",onClick:e[4]||(e[4]=(...l)=>o.getcertified&&o.getcertified(...l))},"送出")])]),_:1},512)])])):p("",!0),n.certified?(a(),r("div",se,[t("div",ie,[e[27]||(e[27]=t("h5",{class:"text-center py-3"},"輸入驗證碼",-1)),e[28]||(e[28]=t("p",{class:"text-center"},"已透過Email將驗證碼傳送至您的的信箱",-1)),t("div",oe,[(a(!0),r(h,null,I(n.codeItems,(s,l)=>(a(),r("div",{key:l,class:d(["code-item",{active:l===n.activeIndex}])},j(s),3))),128)),B(t("input",{type:"text",class:"code-input","onUpdate:modelValue":e[5]||(e[5]=s=>n.code=s),onFocus:e[6]||(e[6]=(...s)=>o.handleFocus&&o.handleFocus(...s)),onBlur:e[7]||(e[7]=(...s)=>o.handleBlur&&o.handleBlur(...s)),onInput:e[8]||(e[8]=(...s)=>o.handleInput&&o.handleInput(...s)),maxlength:"4"},null,544),[[S,n.code]])]),t("div",le,[t("button",{type:"submit",class:"btn btn-outline-dark px-8",onClick:e[9]||(e[9]=(...s)=>o.forgotpassword&&o.forgotpassword(...s))},"確認")]),t("div",ne,[e[26]||(e[26]=t("p",{class:"text-muted"},"沒收到驗證碼嗎？",-1)),t("a",{onClick:e[10]||(e[10]=(...s)=>o.getResend&&o.getResend(...s))},"重新發送")])])])):p("",!0)])):p("",!0)]),i(C)],64)}const pe=F(N,[["render",ae],["__scopeId","data-v-4868d23c"]]);export{pe as default};

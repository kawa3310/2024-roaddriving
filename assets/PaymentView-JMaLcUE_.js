import{a as b}from"./axios-G2rPRu76.js";import{_ as x,L,r as a,o as s,c as r,b as i,w as _,a as t,u as l,F as m,v as y,t as c,d as B}from"./index-eerWs9JT.js";import{S as w}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{L as V}from"./LoadingSvg--DEgaz8D.js";import{B as S}from"./BreadcrumbComponents-wpADV7DG.js";var k={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"rei",BASE_URL:"/2024-roaddriving/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_PATH:T}=k,I={data(){return{orderId:"",order:{},pageBreadcrumbList:["purchase","payment"],isloading:!1}},methods:{getOrder(){this.orderId=this.$route.params.id,this.isloading=!0,b.get(`${E}/api/${T}/order/${this.orderId}`).then(n=>{this.isloading=!1,this.order=n.data.order}).catch(n=>{this.isloading=!1,w.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:n.response.data.message})})}},components:{Breadcrumb:S,Loading:L,LoadingSvg:V},mounted(){this.getOrder()}},R={class:"container"},N={class:"row d-flex flex-column justify-content-center align-items-center"},$={class:"col-6 order-table"},C={class:"text-center"},D={class:"fs-4 text-danger"},O={class:"mb-lg-8 my-8 shadow-lg"},P={class:"table order-table"},A={scope:"row"},U={key:0},j={key:1},F={key:2},H={class:"d-flex justify-content-end"};function z(n,e,M,q,d,G){var u,p;const g=a("LoadingSvg"),f=a("Loading"),h=a("Breadcrumb"),v=a("RouterLink");return s(),r(m,null,[i(f,{active:d.isloading,"z-index":1060},{default:_(()=>[i(g)]),_:1},8,["active"]),e[7]||(e[7]=t("div",{class:"empty-content"},null,-1)),i(h,{class:"container mt-3","page-breadcrumb-list":d.pageBreadcrumbList},null,8,["page-breadcrumb-list"]),t("div",R,[t("div",N,[t("div",$,[e[6]||(e[6]=t("h2",{class:"text-center my-5"},"預約成功",-1)),t("div",C,[t("p",D,"預約編號："+l((u=d.order)==null?void 0:u.id),1),t("div",O,[t("table",P,[e[4]||(e[4]=t("caption",{class:"order-caption caption-top text-center border-bottom fw-normal"},"預定資訊",-1)),(s(!0),r(m,null,y((p=d.order)==null?void 0:p.products,o=>(s(),r("tbody",{key:o.id},[t("tr",null,[e[0]||(e[0]=t("th",{scope:"row"},"方案",-1)),t("td",A,l(o.product.title),1)]),t("tr",null,[e[1]||(e[1]=t("th",null,"上課地區",-1)),o.address==="吳三寶"?(s(),r("td",U,"北部")):c("",!0),o.address==="郝安銓"?(s(),r("td",j,"中部")):c("",!0),o.address==="甄卉葶"?(s(),r("td",F,"南部")):c("",!0)]),t("tr",null,[e[2]||(e[2]=t("th",null,"時段",-1)),t("td",null,l(o==null?void 0:o.time),1)]),t("tr",null,[e[3]||(e[3]=t("th",null,"總金額",-1)),t("td",null,"NT $"+l(o==null?void 0:o.total),1)])]))),128))])])]),t("div",H,[i(v,{to:"/login",class:"order-detailed rounded-0 text-danger"},{default:_(()=>e[5]||(e[5]=[B("訂單詳細 ")])),_:1})])])])])],64)}const Y=x(I,[["render",z]]);export{Y as default};

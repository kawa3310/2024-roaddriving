import{a as f}from"./axios-G2rPRu76.js";import{L as k}from"./index-G0JYQuIa.js";import{S as a}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{B}from"./BreadcrumbComponents-2FamV59x.js";import{_,c as r,b as u,a as t,F as c,v as L,w as C,B as T,r as p,o as l,d as m,u as o,t as d}from"./index-9b0SxjyI.js";var V={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"rei",BASE_URL:"/2024-roaddriving/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:w}=V,$={data(){return{cartData:{},form:{user:{name:"劉學車",email:"carman@gamil.com",tel:"0933768912",address:"801 高雄市前金區文武三街24號"}},pageBreadcrumbList:["purchase","checkout"],isloading:!1}},methods:{getCart(){this.isloading=!0,f.get(`${g}/api/${w}/cart`).then(n=>{this.cartData=n.data.data.carts,this.isloading=!1}).catch(n=>{a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:n.response.data.message}),this.isloading=!1})},sendOrder(){f.post(`${g}/api/${w}/order`,{data:this.form}).then(n=>{a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已送出預約訂單"}),this.$router.push(`/payment/${n.data.orderId}`)}).catch(n=>{a.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:n.response.data.message})})}},components:{Breadcrumb:B,Loading:k},mounted(){this.getCart()}},D={class:"container"},E={class:"row"},N={class:"col-12 d-flex flex-column justify-content-center align-items-center"},R={class:"order-table table-bg"},S={key:0,class:"my-4"},I={class:"text-danger"},O={class:"table shadow mb-3"},A={width:"70%"},P={key:0},U={key:1},j={key:2},F={class:"table my-lg-8 shadow-sm",key:"cart.id"},H={class:"d-flex justify-content-between py-8"};function M(n,e,z,q,i,b){const h=p("Loading"),x=p("Breadcrumb"),v=p("RouterLink");return l(),r(c,null,[u(h,{active:i.isloading,"z-index":1060},null,8,["active"]),e[18]||(e[18]=t("div",{class:"empty-content"},null,-1)),u(x,{class:"container mt-3","page-breadcrumb-list":i.pageBreadcrumbList},null,8,["page-breadcrumb-list"]),t("div",D,[t("div",E,[t("div",N,[t("div",R,[e[16]||(e[16]=t("h2",{class:"text-center my-5"},"預約資訊",-1)),(l(!0),r(c,null,L(i.cartData,(s,y)=>(l(),r("div",{key:s.id},[i.cartData!==0?(l(),r("h4",S,[e[1]||(e[1]=m(" 第")),t("span",I,o(y+1),1),e[2]||(e[2]=m("筆"))])):d("",!0),t("table",O,[t("tbody",null,[t("tr",null,[e[3]||(e[3]=t("th",{width:"30%",scope:"row"},"方案",-1)),t("td",A,o(s.product.title),1)]),t("tr",null,[e[4]||(e[4]=t("th",{scope:"row"},"內容",-1)),t("td",null,o(s.product.content),1)]),t("tr",null,[e[5]||(e[5]=t("th",{scope:"row"},"堂數",-1)),t("td",null,o(s.product.lesson),1)]),t("tr",null,[e[6]||(e[6]=t("th",{scope:"row"},"時數",-1)),t("td",null,o(s.product.unit),1)]),t("tr",null,[e[7]||(e[7]=t("th",{scope:"row"},"上課地區",-1)),s.address==="吳三寶"?(l(),r("td",P,"北部")):d("",!0),s.address==="郝安銓"?(l(),r("td",U,"中部")):d("",!0),s.address==="甄卉葶"?(l(),r("td",j,"南部")):d("",!0)]),t("tr",null,[e[8]||(e[8]=t("th",{scope:"row"},"授課老師",-1)),t("td",null,o(s.address)+" 教練",1)]),t("tr",null,[e[9]||(e[9]=t("th",{scope:"row"},"日期",-1)),t("td",null,o(s.date),1)]),t("tr",null,[e[10]||(e[10]=t("th",{scope:"row"},"時段",-1)),t("td",null,o(s.time),1)]),t("tr",null,[e[11]||(e[11]=t("th",{scope:"row"},"總金額",-1)),t("td",null,"NT $"+o(s.total),1)])])]),t("table",F,[t("tbody",null,[e[14]||(e[14]=t("tr",null,[t("th",{width:"50%",scope:"row"},"付款方式"),t("th",{scope:"row"},"訂金"),t("th",{scope:"row"},"餘額")],-1)),t("tr",null,[e[12]||(e[12]=t("td",null,"信用卡",-1)),e[13]||(e[13]=t("td",null,"NT $1000",-1)),t("td",null,"NT $"+o(s.total-1e3),1)])])])]))),128)),e[17]||(e[17]=t("p",{class:"text-end text-danger"},"※預約課程並選擇日期時段後本站將與您電聯後確認實際上課時間",-1)),t("div",H,[u(v,{to:"/reservation",class:"btn btn-outline-dark rounded-1 d-flex align-items-center"},{default:C(()=>e[15]||(e[15]=[t("i",{class:"bi bi-caret-left d-flex"},null,-1),m(" 上一步 ")])),_:1}),t("a",{onClick:e[0]||(e[0]=T(s=>b.sendOrder(),["prevent"])),class:"btn btn-danger text-white rounded-1 px-4 d-flex align-items-center"}," 確認付款 ")])])])])])],64)}const X=_($,[["render",M]]);export{X as default};

import{a as f}from"./axios-G2rPRu76.js";/* empty css              */import{L as v}from"./index-G0JYQuIa.js";import{S as y}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{P as _}from"./PaginationModal-JdJL41KI.js";import{_ as w,c as n,b,a as t,F as r,v as p,d as D,r as c,o as e,u as o}from"./index-9b0SxjyI.js";var P={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"rei",BASE_URL:"/2024-roaddriving/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:E,VITE_PATH:x}=P,L={data(){return{prodModal:null,catchData:[],products:[],teacherData:[],teacherAreaData:"",pagination:{},pages:{},isloading:!1}},methods:{getData(a=1){this.isloading=!0,f.get(`${E}/api/${x}/admin/products?page=${a}`).then(s=>{this.catchData=s.data.products,this.pages=s.data.pagination,this.isloading=!1,this.filterData(this.catchData)}).catch(s=>{this.isloading=!1,y.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:s.response.data.message})})},filterData(a){const s=[],u=[];a.forEach(i=>{i.category==="地區"?(s.push(i),this.teacherData=s):i.category==="課程"&&(u.push(i),this.products=u)})}},mounted(){this.getData()},components:{PaginationModal:_,Loading:v}},M={class:"container px-6"},V={class:"mt-9"},k={class:"admin-table"},T={class:"table mt-4 table-bordered"},O={class:"d-flex justify-content-center pt-1"},U=["src"],C={class:"mt-9"},I={class:"admin-table"},S={class:"table mt-4 table-bordered"},A=["src"],B={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},R={class:"modal-dialog modal-xl"},N={class:"modal-content border-0"},$={class:"modal-body"},F={class:"row"},H={class:"col-3"},j={class:"mb-3"};function z(a,s,u,i,d,q){const m=c("Loading"),h=c("PaginationModal");return e(),n(r,null,[b(m,{active:d.isloading,"z-index":1060},null,8,["active"]),t("div",M,[t("div",V,[s[4]||(s[4]=t("h4",{class:"mb-9"},"課程方案",-1)),t("button",{type:"button",class:"btn fs-4 plus",onClick:s[0]||(s[0]=(...l)=>a.modelOpen&&a.modelOpen(...l))},s[3]||(s[3]=[t("i",{class:"bi bi-plus-circle"},null,-1)]))]),t("div",k,[t("table",T,[s[6]||(s[6]=t("thead",null,[t("tr",{class:"tr"},[t("th",{width:"5"}," 方案 "),t("th",{width:"5"},"堂數"),t("th",{width:"5"}," 1堂 "),t("th",{width:"5"}," 價格 "),t("th",{width:"5"}," 標語 "),t("th",{width:"60"}," 內容 "),t("th",{width:"5"},"推薦指數"),t("th",{width:"5"},"圖片"),t("th",{width:"5"}," 編輯 ")])],-1)),t("tbody",null,[(e(!0),n(r,null,p(d.products,l=>(e(),n("tr",{key:l.id,class:"tr"},[t("td",null,o(l.title),1),t("td",null,o(l.lesson),1),t("td",null,o(l.unit),1),t("td",null,o(l.price),1),t("td",null,o(l.description),1),t("td",null,o(l.content),1),t("td",null,[t("div",O,[(e(!0),n(r,null,p(l.stars,g=>(e(),n("i",{key:g,class:"bi bi-star-fill"}))),128))])]),t("td",null,[t("img",{src:l.imageUrl,alt:"img"},null,8,U)]),s[5]||(s[5]=t("td",null,[t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 編輯 "),t("button",{type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ")])],-1))]))),128))])])]),t("div",C,[s[8]||(s[8]=t("h4",{class:"mb-9"},"師資",-1)),t("button",{type:"button",class:"btn fs-4 plus",onClick:s[1]||(s[1]=(...l)=>a.modelOpen&&a.modelOpen(...l))},s[7]||(s[7]=[t("i",{class:"bi bi-plus-circle"},null,-1)]))]),t("div",I,[t("table",S,[s[10]||(s[10]=t("thead",null,[t("tr",{class:"tr"},[t("th",{width:"70"}," 教練名單 "),t("th",{width:"10"},"地區"),t("th",{width:"10"},"照片"),t("th",{width:"10"}," 編輯 ")])],-1)),t("tbody",null,[(e(!0),n(r,null,p(d.teacherData,l=>(e(),n("tr",{key:l.id,class:"tr"},[t("td",null,o(l.title),1),t("td",null,o(l.area),1),t("td",null,[t("img",{src:l.imageUrl,alt:"teacherImg"},null,8,A)]),s[9]||(s[9]=t("td",null,[t("div",{class:"btn-group"},[t("button",{type:"button",class:"btn btn-outline-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," 編輯 "),t("button",{type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ")])],-1))]))),128))])]),b(h,{pages:d.pages,onEmitPages:a.getOrders},null,8,["pages","onEmitPages"])])]),t("div",B,[t("div",R,[t("div",N,[s[13]||(s[13]=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"productModalLabel",class:"modal-title"},[t("span",null,"新增產品"),t("span",null,"編輯產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",$,[t("div",F,[t("div",H,[s[12]||(s[12]=t("div",{class:"mb-3"},[t("label",{for:"imageUrl",class:"form-label"},"主要圖片"),t("input",{id:"imageUrl",type:"text",class:"form-control",placeholder:"請輸入圖片連結"})],-1)),t("div",j,[s[11]||(s[11]=t("label",{for:"file",class:"form-label"},[D("上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1)),t("input",{type:"file",class:"form-control mb-4",id:"file",ref:"fileInput",onChange:s[2]||(s[2]=(...l)=>a.uploadPhotos&&a.uploadPhotos(...l))},null,544)])])])]),s[14]||(s[14]=t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 "),t("button",{type:"button",class:"btn btn-primary"}," 確認 ")],-1))])])])],64)}const Y=w(L,[["render",z]]);export{Y as default};

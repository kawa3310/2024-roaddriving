import{a as x}from"./axios-G2rPRu76.js";import{S as f}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{_ as U,L as j,r as p,o as a,c as d,b as h,w as C,a as t,F as m,t as w,u as r,d as _,v as g,x as n,y as k,n as E,z as b,A as N}from"./index-eerWs9JT.js";import{L as O}from"./LoadingSvg--DEgaz8D.js";import{B as A}from"./BreadcrumbComponents-wpADV7DG.js";var R={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"rei",BASE_URL:"/2024-roaddriving/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:V,VITE_PATH:D}=R,F={data(){return{due_date:"",courseCard:[],products:[],teacherData:[],form:{product_id:"-O8uWyxkwFrCVqMWH7hz",address:"",date:"",time:"上午時段（09:30 ~ 13:30）",payment:"信用卡",qty:1},isloading:!1,pageBreadcrumbList:["reservation"]}},methods:{getCourseData(){this.isloading=!0,x.get(`${V}/api/${D}/products/All`).then(l=>{this.products=l.data.products,this.filterData(this.products),this.isloading=!1}).catch(l=>{f.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:l.response.data.message})})},filterData(l){const e=[],c=[];l.forEach(u=>{u.category==="地區"?(e.push(u),this.teacherData=e):u.category==="課程"&&(c.push(u),this.courseCard=c)})},sendOutOrder(){this.$router.push("/checkout")},addCart(){this.form.product_id&&this.form.address&&this.form.date&&this.form.time!==""?x.post(`${V}/api/${D}/cart`,{data:this.form}).then(()=>{f.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"success",title:"已成功填寫預約表單"}),this.sendOutOrder()}).catch(l=>{f.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:l.response.data.message})}):f.fire({toast:!0,position:"top-end",showConfirmButton:!1,timer:1500,icon:"error",title:"請確實填寫預約表單"})}},computed:{changeCourse(){const l={title:"",text:"",price:"",start:'<i class="bi bi-star-fill"><i class="bi bi-star-fill">',content:"",hours:"",imageUrl:""};return this.courseCard.filter(c=>c.id===this.form.product_id)[0]||l},clickAreaCardData(){return this.teacherData[this.teacherAreaData-1]||{}}},watch:{due_date(){const l=new Date(this.emitVoucher.due_date*1e3).toISOString().split("T");[this.due_date]=l}},components:{Breadcrumb:A,Loading:j,LoadingSvg:O},mounted(){this.getCourseData()}},I={class:"container my-lg-9 mt-5 mb-9"},M={class:"my-lg-10"},z={class:"row d-flex flex-reverse justify-content-center"},P={class:"col-lg-4 col-md-6 d-lg-block d-md-block d-none"},H={id:"hot-1",class:"hot-card shadow"},q={key:0,class:"hot-logo"},W={class:"hot-card-img"},G=["src"],J={class:"hot-card-title"},K={class:"hot-course"},Q={class:"fw-semibold pt-5"},X={class:"d-flex justify-content-between align-items-center p-4 pb-5"},Y={class:"price"},Z={class:"d-flex align-items-center fw-bold"},$={class:"d-flex justify-content-center pt-1"},tt={class:"col-lg-4 col-md-6 bg-card select-card d-flex flex-column justify-content-between p-5"},et=["value","id"],st={class:"d-grid gap-4"},ot={class:"price text-end"},it={class:"d-lg-none d-md-none mt-3"},lt={id:"hot-1",class:"hot-card shadow"},rt={key:0,class:"hot-logo"},at={class:"hot-card-img"},dt=["src"],nt={class:"hot-card-title"},ct={class:"hot-course"},ut={class:"fw-semibold pt-5"},mt={class:"d-flex justify-content-between align-items-center p-4 pb-5"},ft={class:"price"},pt={class:"d-flex align-items-center fw-bold"},ht={class:"d-flex justify-content-center pt-1"},_t={class:"my-lg-10 mt-5"},gt={class:"row"},vt=["for"],bt=["value","id"],yt={class:"teachers-img"},xt=["src"],Ct={class:"area"},wt={class:"text-center pt-lg-4 pb-4"},kt={class:"my-lg-10 mt-5"},Vt={class:"container"},Dt={class:"row justify-content-center mb-5"},Tt={class:"col-lg-7"},Bt={class:"select-card bg-card p-5"},Lt={class:""},St={class:"mb-4 date"},Ut={class:"d-flex justify-content-between d-grid gap-4"},jt={for:"am",class:"form-check-label"},Et={for:"pm",class:"form-check-label"},Nt={class:"row justify-content-center"},Ot={class:"col-lg-7"},At={class:"select-card p-5 d-flex flex-column justify-content-between bg-card"},Rt={class:"payment d-flex justify-content-center mb-lg-0 mb-4"},Ft={class:"d-flex justify-content-center mb-lg-9 mt-4"},It=["disabled"];function Mt(l,e,c,u,o,i){const T=p("LoadingSvg"),B=p("Loading"),L=p("Breadcrumb"),S=p("VForm");return a(),d(m,null,[h(B,{active:o.isloading,"z-index":1060},{default:C(()=>[h(T)]),_:1},8,["active"]),e[23]||(e[23]=t("div",{class:"reservation-bg mb-3"},[t("h2",{class:"bg-banner"},"預約報名")],-1)),h(L,{class:"navigation container mt-3","page-breadcrumb-list":o.pageBreadcrumbList},null,8,["page-breadcrumb-list"]),t("main",null,[t("div",I,[e[22]||(e[22]=t("div",{class:"text-center text-primary pb-8"},[t("p",{class:"main-title fs-1 fw-bold"},"開始預約")],-1)),h(S,{ref:"form",onSubmit:e[6]||(e[6]=y=>i.addCart())},{default:C(({meta:y})=>[t("div",M,[e[11]||(e[11]=t("h2",{class:"text-center my-lg-10 my-4"},"1. 選擇課程",-1)),t("div",z,[t("div",P,[t("div",H,[i.changeCourse.title==="課程二"?(a(),d("div",q)):w("",!0),t("div",null,[t("div",W,[t("img",{src:i.changeCourse.imageUrl,alt:"hot-course-img"},null,8,G)]),t("div",J,[t("p",K,r(i.changeCourse.title),1),t("h4",Q,r(i.changeCourse.title),1),t("div",X,[t("span",Y,"NT$ "+r(i.changeCourse.price),1),t("span",Z,[e[7]||(e[7]=_("推薦指數： ")),t("div",$,[(a(!0),d(m,null,g(i.changeCourse.stars,s=>(a(),d("i",{key:s,class:"bi bi-star-fill"}))),128))])])])])])])]),t("div",tt,[n(t("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.product_id=s),name:"field",as:"select",class:"form-select w-100"},[e[8]||(e[8]=t("option",{value:"",selected:"",disabled:""},"請選擇課程",-1)),(a(!0),d(m,null,g(o.courseCard,(s,v)=>(a(),d("option",{key:v.id,value:s.id,id:`course${s.id}`},r(s.title),9,et))),128))],512),[[k,o.form.product_id]]),t("div",st,[e[9]||(e[9]=t("h5",{class:"my-3 fw-bold"},"課程內容：",-1)),t("p",null,r(i.changeCourse.content),1),t("p",null,r(i.changeCourse.hours),1)]),t("div",ot,"$NT "+r(i.changeCourse.price),1)]),t("div",it,[t("div",lt,[i.changeCourse.title==="課程二"?(a(),d("div",rt)):w("",!0),t("div",null,[t("div",at,[t("img",{src:i.changeCourse.imageUrl,alt:"hot-course-img"},null,8,dt)]),t("div",nt,[t("span",ct,r(i.changeCourse.title),1),t("h4",ut,r(i.changeCourse.title),1),t("div",mt,[t("h6",ft,"$NT "+r(i.changeCourse.price),1),t("span",pt,[e[10]||(e[10]=_("推薦指數： ")),t("div",ht,[(a(!0),d(m,null,g(i.changeCourse.stars,s=>(a(),d("i",{key:s,class:"bi bi-star-fill"}))),128))])])])])])])])])]),t("div",_t,[e[12]||(e[12]=t("h2",{class:"text-center my-lg-10 my-4"},"2. 選擇上課地區",-1)),t("div",gt,[(a(!0),d(m,null,g(o.teacherData,s=>(a(),d("div",{class:"col-lg-4",key:s.id,name:"terms",type:"radio",as:"radio",value:!0,"unchecked-value":!1},[t("label",{class:E(["business-card",{selected:s.title===o.form.address}]),for:`teacher${s.id}`},[n(t("input",{type:"radio",as:"radio",name:"teacher-card","onUpdate:modelValue":e[1]||(e[1]=v=>o.form.address=v),value:s.title,id:`teacher${s.id}`,placeholder:"",class:"form-check-input"},null,8,bt),[[b,o.form.address]]),t("div",yt,[t("img",{src:s.imageUrl,alt:"teacher",class:"img"},null,8,xt),t("p",Ct,r(s.area),1)])],10,vt),t("div",wt,[t("span",null,r(s.title)+" 教練",1)])]))),128))])]),t("section",kt,[t("div",Vt,[e[20]||(e[20]=t("h2",{class:"text-center my-lg-10 my-4"},"3. 選擇日期 / 時段",-1)),t("div",Dt,[t("div",Tt,[t("div",Bt,[t("div",Lt,[t("div",St,[e[13]||(e[13]=t("label",{class:"d-block pb-2",for:"due_date"},"年／月／日",-1)),n(t("input",{type:"date",value:"2024-09-23",min:"2024-09-23",max:"2028-09-17",class:"form-select mb-4 p-2","onUpdate:modelValue":e[2]||(e[2]=s=>o.form.date=s)},null,512),[[N,o.form.date]]),e[14]||(e[14]=t("div",{class:"border-top"},null,-1))])]),t("div",Ut,[t("label",jt,[n(t("input",{type:"radio",name:"time",class:"form-check-input",id:"am",value:"上午時段（09:30 ~ 13:30）","onUpdate:modelValue":e[3]||(e[3]=s=>o.form.time=s)},null,512),[[b,o.form.time]]),e[15]||(e[15]=_(" 上午時段（09:30 ~ 13:30） "))]),t("label",Et,[n(t("input",{type:"radio",name:"time",id:"pm",class:"form-check-input",value:"下午時段（15:30 ~ 20:30）","onUpdate:modelValue":e[4]||(e[4]=s=>o.form.time=s)},null,512),[[b,o.form.time]]),e[16]||(e[16]=_(" 下午時段（15:30 ~ 20:30） "))])])])])]),e[21]||(e[21]=t("h2",{class:"text-center my-lg-10 mb-4"},"4. 付款方式",-1)),t("div",Nt,[t("div",Ot,[t("div",At,[t("div",null,[t("div",Rt,[n(t("select",{class:"form-select w-100 mb-4 p-2","onUpdate:modelValue":e[5]||(e[5]=s=>o.form.payment=s)},e[17]||(e[17]=[t("option",{value:"信用卡"},"信用卡",-1)]),512),[[k,o.form.payment]])])]),e[18]||(e[18]=t("div",{class:"text-end"},[t("span",{class:"fw-semibold"},"NT$ 1000／預繳訂金")],-1)),e[19]||(e[19]=t("p",{class:"text-end text-danger mt-3"},"※需先預繳訂金 NT 1000 元，上課後補差價",-1))])])])])]),t("div",Ft,[t("button",{type:"submit",class:"btn btn-lg btn-danger px-4 text-white",disabled:!y.valid},"立刻預約",8,It)])]),_:1},512)])])],64)}const Gt=U(F,[["render",Mt]]);export{Gt as default};

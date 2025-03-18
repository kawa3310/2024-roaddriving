import{a as b}from"./axios-G2rPRu76.js";import{S as m}from"./sweetalert2.esm.all-HDkAWA8Y.js";import{_ as v,M as $,o as l,c as o,a as t,u as d,t as c,F as f,v as O,x as w,D as k,L,r as p,b as h,w as E}from"./index-uwIAAm4H.js";import{L as P}from"./LoadingSvg-jFYfzcfE.js";import{D as V}from"./DelProductModal-OYL9G8a4.js";import{P as N}from"./PaginationModal-pcQzl1uy.js";const B={data(){return{orderModal:null,emitOrder:{},is_paid:!1}},props:["tempOrder","isNew","addOrderStates"],emits:["addOrderStates"],methods:{modelOpen(){this.orderModal.show()},modalClose(){this.orderModal.hide(),document.body.focus(),document.activeElement.blur()},date(i){return new Date(i*1e3).toLocaleDateString()}},mounted(){this.orderModal=new $(this.$refs.orderModal),this.emitOrder=this.tempOrder},watch:{tempOrder(){this.emitOrder=this.tempOrder}}},A={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},I={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},T={class:"modal-content border-0"},U={class:"modal-body"},R={class:"row"},F={class:"col-md-16"},H={class:"table"},j={key:0},z={class:"table"},q={key:0},G={key:1},J={key:2},K={key:0},Q={key:1},W={class:"d-flex justify-content-end"},X={class:"form-check"},Y={class:"form-check-label",for:"flexCheckDefault"},Z={key:0},tt={key:1},et={class:"modal-footer"};function st(i,e,y,M,s,a){return l(),o("div",A,[t("div",I,[t("div",T,[e[19]||(e[19]=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{id:"orderModalLabel",class:"modal-title"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",U,[t("div",R,[t("div",F,[e[16]||(e[16]=t("h3",{class:"mb-4"},"訂單資料",-1)),t("table",H,[s.emitOrder.user?(l(),o("tbody",j,[t("tr",null,[e[2]||(e[2]=t("th",{style:{width:"100px"}},"訂單編號",-1)),t("td",null,d(s.emitOrder.id),1)]),t("tr",null,[e[3]||(e[3]=t("th",null,"訂單時間",-1)),t("td",null,d(a.date(s.emitOrder.create_at)),1)]),t("tr",null,[e[4]||(e[4]=t("th",{style:{width:"100px"}},"預約人",-1)),t("td",null,d(s.emitOrder.user.name),1)]),t("tr",null,[e[5]||(e[5]=t("th",null,"Email",-1)),t("td",null,d(s.emitOrder.user.email),1)]),t("tr",null,[e[6]||(e[6]=t("th",null,"聯絡電話",-1)),t("td",null,d(s.emitOrder.user.tel),1)])])):c("",!0)]),e[17]||(e[17]=t("h3",{class:"my-4"},"預約內容",-1)),t("table",z,[e[15]||(e[15]=t("thead",null,[t("tr")],-1)),(l(!0),o(f,null,O(s.emitOrder.products,r=>(l(),o("tbody",{key:r.id},[t("tr",null,[e[7]||(e[7]=t("th",null,"預約課程",-1)),t("td",null,d(r.product.title),1)]),t("tr",null,[e[8]||(e[8]=t("th",null,"教練",-1)),t("td",null,d(r.address),1)]),t("tr",null,[e[9]||(e[9]=t("th",null,"上課地區",-1)),r.address==="吳三寶"?(l(),o("td",q,"北部")):c("",!0),r.address==="郝安銓"?(l(),o("td",G,"中部")):c("",!0),r.address==="甄卉葶"?(l(),o("td",J,"南部")):c("",!0)]),t("tr",null,[e[10]||(e[10]=t("th",null,"上課時間",-1)),t("td",null,d(r.date),1)]),t("tr",null,[e[11]||(e[11]=t("th",null,"上課時段",-1)),t("td",null,d(r.time),1)]),t("tr",null,[e[12]||(e[12]=t("th",null,"付款狀態",-1)),t("td",null,[s.emitOrder.paid_date?(l(),o("span",K,"已繳訂金")):(l(),o("span",Q,"尚未付款"))])]),t("tr",null,[e[13]||(e[13]=t("th",null,"未繳金額",-1)),t("td",null,"$"+d(s.emitOrder.total-1e3),1)]),t("tr",null,[e[14]||(e[14]=t("th",null,"訂單總金額",-1)),t("td",null,"$"+d(s.emitOrder.total),1)])]))),128))]),t("div",W,[t("div",X,[w(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":e[0]||(e[0]=r=>s.emitOrder.is_paid=r)},null,512),[[k,s.emitOrder.is_paid]]),t("label",Y,[s.emitOrder.is_paid?(l(),o("span",Z,"已付款")):(l(),o("span",tt,"未付款"))])])])])])]),t("div",et,[e[18]||(e[18]=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1)),t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=r=>i.$emit("addOrderStates",s.emitOrder))}," 修改狀態 ")])])])],512)}const lt=v(B,[["render",st]]);var ot={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"rei",BASE_URL:"/2024-roaddriving/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:g}=ot,dt={data(){return{orderData:{},tempOrder:{},pagination:{},pages:{},isloading:!1,isNew:!1}},methods:{getOrders(i=1){this.isloading=!0,b.get(`${_}/api/${g}/admin/orders?page=${i}`).then(e=>{this.orderData=e.data.orders,this.pages=e.data.pagination,this.isloading=!1}).catch(e=>{this.isloading=!1,m.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:e.response.data.message})})},addOrderStates(i){this.isloading=!0;const e={is_paid:i.is_paid};b.put(`${_}/api/${g}/admin/order/${i.id}`,{data:e}).then(()=>{this.isNew=!1,this.isloading=!1,this.$refs.orderModal.modalClose(),this.getOrders(),m.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"編輯成功"})}).catch(()=>{this.isloading=!1,m.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:"編輯失敗"})})},delOrder(){this.isNew=!0,this.isloading=!0,b.delete(`${_}/api/${g}/admin/order/${this.tempOrder.id}`).then(()=>{this.isNew=!1,this.isloading=!1,this.getOrders(),m.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"success",title:"刪除成功"}),this.$refs.delModal.modalClose()}).catch(i=>{this.isloading=!1,m.fire({toast:!0,position:"center",showConfirmButton:!1,timer:1500,icon:"error",title:i.response.data.message})})},openModel(i,e){this.isNew=!0,i==="look"?(this.isNew=!1,this.tempOrder={...e},this.$refs.orderModal.modelOpen()):i==="dele"&&(this.tempOrder={...e},this.$refs.delModal.modelOpen())}},mounted(){this.getOrders()},components:{OrderModal:lt,DelProductModal:V,PaginationModal:N,Loading:L,LoadingSvg:P}},it={class:"container px-6"},rt={class:"admin-table"},nt={class:"table mt-4 table-bordered"},at={class:"form-check form-switch"},ut=["onUpdate:modelValue","id","onChange"],mt=["for"],pt={class:"btn-group"},ht=["onClick"],ct=["onClick"];function ft(i,e,y,M,s,a){const r=p("LoadingSvg"),C=p("Loading"),D=p("PaginationModal"),S=p("OrderModal"),x=p("DelProductModal");return l(),o(f,null,[h(C,{active:s.isloading,"z-index":1060},{default:E(()=>[h(r)]),_:1},8,["active"]),t("div",it,[e[2]||(e[2]=t("div",{class:"mt-9"},[t("h4",{class:"mb-9"},"已預約")],-1)),t("div",rt,[t("table",nt,[e[1]||(e[1]=t("thead",null,[t("tr",{class:"tr"},[t("th",{width:""}," 預約編號 "),t("th",{width:""},"預約人資料"),t("th",{width:""}," 預約課程 "),t("th",{width:""}," 預約狀態 "),t("th",{width:""}," 訂單詳細 "),t("th",{width:"100"}," 訂單狀態 ")])],-1)),t("tbody",null,[(l(!0),o(f,null,O(s.orderData,n=>(l(),o("tr",{key:n.id,class:"tr"},[t("td",null,d(n.id),1),t("td",null,d(n.user.name),1),t("td",null,[(l(!0),o(f,null,O(n.products,u=>(l(),o("ul",{key:u.id},[t("li",null,d(u.product.title),1)]))),128))]),t("td",null,[t("div",at,[w(t("input",{class:"form-check-input","onUpdate:modelValue":u=>n.is_paid=u,type:"checkbox",role:"switch",id:`paidSwitch${n.id}`,onChange:u=>a.addOrderStates(n)},null,40,ut),[[k,n.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${n.id}`},d(n.is_paid?"已完課":"未完課"),9,mt)])]),e[0]||(e[0]=t("td",null,[t("a",{href:"#"},"看詳細")],-1)),t("td",null,[t("div",pt,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:u=>a.openModel("look",n)}," 查看 ",8,ht),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:u=>a.openModel("dele",n)}," 刪除 ",8,ct)])])]))),128))])]),h(D,{pages:s.pages,onEmitPages:a.getOrders},null,8,["pages","onEmitPages"]),h(S,{"temp-Order":s.tempOrder,ref:"orderModal",onAddOrderStates:a.addOrderStates},null,8,["temp-Order","onAddOrderStates"]),h(x,{"temp-products":s.tempOrder,onDelItem:a.delOrder,ref:"delModal"},null,8,["temp-products","onDelItem"])])])],64)}const kt=v(dt,[["render",ft]]);export{kt as default};

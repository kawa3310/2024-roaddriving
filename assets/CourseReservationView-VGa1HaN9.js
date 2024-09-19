import{_ as f,c as o,a as e,b as g,w as h,v as _,x as i,d,y as v,z as F,F as u,A as b,u as y,r as x,o as l,n as B,B as k}from"./index-bF9jAefw.js";const w={data(){return{courseData:"",teacherAreaData:"",due_date:"",courseCard:[{id:1,title:"課程一",text:"推薦給初學者的你",price:"NT$ 4500",start:'<i class="bi bi-star-fill"><i class="bi bi-star-fill">',content:"安全行車知識、路邊停車、倒車入庫、市郊區。",hours:"共一堂，每堂 4 小時",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D"},{id:2,title:"課程二",text:"開課至今最受歡迎的課程！",price:"NT$ 8500",start:'<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',content:"安全行車知識、路邊停車、倒車入庫、市郊區、高速公路、山路過彎。",hours:"共三堂，分為三天上課。分別為 2 小時/堂、3 小時/堂、4 小時/堂",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D"},{id:3,title:"課程三",text:"推薦給想客製化加強的你",price:"NT$ 3000",start:'<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',content:"路邊停車、倒車入庫、高速公路、山路過彎四項中擇三項教學",hours:"共一堂，每堂 2.5 小時",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132467692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mrmXZ3GzWLorlqmUfwqlj%2FPJir5S%2FqTcrP3%2FazZF791h5nEt2iUI74Kyblf4PWaRv2NilEGrFPrTDwiHfrxmE6%2FhXEFo7OI1%2BW%2BAsV9QXhJ3WCATjTK6loW%2BxWQFNA0i5NmPJKtHBythECkwOYfet5Q%2BwQ7DlGdaCd4eByI45HX5AoUwnp7IrkuRmqV2JXwFI8M0uF1z9YVOvYXTRFYLy40HYEKL4nxMP44jkiAhnebIbCWtd%2FVmx%2FBrIpTfxUOVLyf%2BOD0JsvKdOPxQicJ8aYGl0lYG51HimNKcdIGPDiPVXcKZNh5p0uvRiQFzfh8wrIqYqqC76APYOidG4sq8rw%3D%3D"}],teacherData:[{id:1,name:"吳三寶",area:"北",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181000114.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ULspeUkNFmbPwqvNkURLO2xc09xiKJKUlgDzPwtks5lpt6ckLZQcXj8O%2Fy%2Be7UjGWrn28if9SdDKC3xAfO3nFNc%2F7ft9sqE%2BJpfDaV4z%2F8RNq40V5%2F6gpJqVbH4QUuOnZr5kg36H2g5mpn0np1gTld8TEiWUo08XuDqilA7FYIzfBv2X2YtJYyg4T7o2nsejqtsgQCTgjrP8e9k3y1p2TFuu%2F557fyyy8KMgu64218YbBf0efZkOR6%2BDXTDsggeSdlUB3sxeUPi7xAcWkQVkUM4eerLAUB0%2BXUKc%2Flkm15N3Cbnxth%2Btzhj%2FWGkcCYTPW5mVYWSE%2F2oAhB0KKu2Q9w%3D%3D"},{id:2,name:"郝安銓",area:"中",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181044785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sy9N8e1n8zeM%2FHGv%2Bba0cc4fdRQ4EW%2B8G6dFyY6f0vIVkKKzz12QVjdoengkHBsYVjUInnv1cGnHmzkkbzPrSDu%2FVJwx4oO7NyoSjJu6S%2FHC9sm1V0OAwUgdXURCumCItfG4NDLd%2Fm8Lc7%2FlgbQk0ep9yU7A0E4Wai9sOYkLpqIBy6Ec4DpAVCi7rnCWqaaRnXQjnsLWkD6flqFHRjfXBipdQxD%2FARCBZ7wlwJ9GWRcemMdbl8ctpqAJscGKSgfuA%2FnuVvGZhQiLvg%2B%2FVvZtO0jHWm9JzkkyAtCyZiKzgTxg28ogWueFtMf%2BNQ6DAbTzwiFwdvMRM5VOwAg%2BqZWykw%3D%3D"},{id:3,name:"甄卉葶",area:"南",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181024527.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ei13M0Q3AEd7DeG5o%2Bc%2FVa1eQ63u9li%2BjaImCzVcU6DIcJRk6UDYPQQJsL%2B27xhXyqKlsl4qBlJLWiSna8Qq1aL3zTiPYfJqB8A1MCW2xKygD3kqb51RbzCJ97%2BL%2BMLanpTSgiRLltXa0lelX8JwiVUlPNE8Mwm%2FB7SC7s315bs0XdFhttfzGXtsCHCd6GGA2L13jQZtzetvZPq3Op21wJeIlTqEJLkEr3464PhypbOOS3U5CHTL5Hgy%2Bal5ScZd4sFGmz0TUZs%2FDtdtpngB1n5uEmaqBKbzYzJExzJijfor1OAv%2BPCEdm56GmVF5sXs8hJXu1zw0eHP0ywBArrnjg%3D%3D"}]}},methods:{checkout(){this.$router.push("/checkout")}},computed:{changeCourse(){const r={title:"課程一",text:"推薦給初學者的你",price:"NT$ 4500",start:'<i class="bi bi-star-fill"><i class="bi bi-star-fill">',content:"安全行車知識、路邊停車、倒車入庫、市郊區。",hours:"共一堂，每堂 4 小時",img:"https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D"};return this.courseCard.filter(p=>p.id===this.courseData)[0]||r},clickAreaCardData(){return this.teacherData[this.teacherAreaData-1]||{}}},watch:{due_date(){const r=new Date(this.emitVoucher.due_date*1e3).toISOString().split("T");[this.due_date]=r}}},C=e("div",{class:"empty-content"},null,-1),D={class:"container mt-3"},A={"aria-label":"breadcrumb"},V={class:"breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start"},z={class:"breadcrumb-item"},J={class:"breadcrumb-item"},q={class:"container my-lg-9"},W=e("h1",{class:"text-center mb-lg-9"},"開始預約",-1),Y={action:"",class:"bg-card"},P={class:"mb-lg-8"},E=e("h2",{class:"text-center mb-lg-9"},"1. 選擇課程",-1),O={class:"row d-flex flex-reverse justify-content-center"},Q={class:"col-4"},G={id:"hot-1",class:"hot-card"},N={key:0,class:"hot-logo"},U={class:"hot-card-img"},j=["src"],I={class:"hot-card-title"},T={class:"course-side"},L={class:"pt-3"},R={class:"d-flex justify-content-between align-items-center p-4"},S={class:"price"},X={class:"d-flex align-items-center fw-bold"},K=["innerHTML"],H={class:"col-4 select-card d-flex flex-column justify-content-between p-5"},M=["value","id"],Z={class:"d-grid gap-4"},$=e("p",null,"課程內容：",-1),ee={class:"price text-end"},se={class:"my-lg-9"},te=e("h2",{class:"text-center mb-lg-9"},"2. 選擇上課地區",-1),ie={class:"row"},ce=["for"],ae=["value","id"],oe={class:"teachers-img"},le=["src"],re={class:"area"},ne={class:"text-center pt-4"},de=y('<section class="my-lg-9"><div class="container"><div class="row"><p class="text-end text-danger mb-3">※需先預繳訂金 NT 1000 元，上課後補差價</p><div class="col-6"><div class="select-card p-3"><h2 class="text-center">3. 選擇日期 / 時段</h2><div class="d-flex justify-content-center mt-4"><div class="w-50 mb-4 date"><label class="d-block pb-2" for="due_date">年／月／日</label><input type="date" value="2024-09-17" min="2024-09-17" max="2028-09-17" class="w-100 mb-4"><div class="border-top"></div></div></div><div class="d-flex justify-content-center d-grid gap-4"><label for="checkbox"><input type="checkbox" name="timeAM" value="AM" checked> 上午時段（09:30 ~ 13:30） </label><label for="checkbox"><input type="checkbox" name="timePM" value="PM"> 下午時段（15:30 ~ 20:30） </label></div></div></div><div class="col-6"><div class="select-card h-100 p-3 d-flex flex-column justify-content-between"><h2 class="text-center">4. 付款方式</h2><div class="w-100"><div class="payment d-flex justify-content-center"><select class="w-50"><option value="信用卡">信用卡</option></select></div></div><div class="text-end"><span class="fw-semibold">NT$ 1000／預繳訂金</span></div></div></div></div></div></section>',1),ue={class:"d-flex justify-content-center mb-lg-9"};function pe(r,c,p,me,a,t){const m=x("RouterLink");return l(),o(u,null,[C,e("section",D,[e("div",A,[e("ol",V,[e("li",z,[g(m,{class:"text-muted",to:"/"},{default:h(()=>[d("首頁")]),_:1})]),e("li",J,[g(m,{class:"d-flex align-items-center",to:"/reservation"},{default:h(()=>[d("預約報名")]),_:1})])])])]),e("main",null,[e("div",q,[W,e("form",Y,[e("div",P,[E,e("div",O,[e("div",Q,[e("div",G,[t.changeCourse.title==="課程二"?(l(),o("div",N)):_("",!0),e("div",null,[e("div",U,[e("img",{src:t.changeCourse.img,alt:"hot-course-img"},null,8,j)]),e("div",I,[e("span",T,i(t.changeCourse.title),1),e("h6",L,i(t.changeCourse.title),1),e("div",R,[e("span",S,i(t.changeCourse.price),1),e("span",X,[d("推薦指數： "),e("p",{class:"d-flex",innerHTML:t.changeCourse.start},null,8,K)])])])])])]),e("div",H,[v(e("select",{"onUpdate:modelValue":c[0]||(c[0]=s=>a.courseData=s)},[(l(!0),o(u,null,b(a.courseCard,(s,n)=>(l(),o("option",{key:n.id,value:s.id,id:`course${s.id}`},i(s.title),9,M))),128))],512),[[F,a.courseData]]),e("div",Z,[$,e("p",null,i(t.changeCourse.content),1),e("p",null,i(t.changeCourse.hours),1)]),e("div",ee,i(t.changeCourse.price),1)])])]),e("div",se,[te,e("ul",ie,[(l(!0),o(u,null,b(a.teacherData,s=>(l(),o("li",{class:"col-4",key:s.id},[e("label",{class:B(["business-card",{selected:s.id===a.teacherAreaData}]),for:`teacher${s.id}`},[v(e("input",{type:"radio",name:"teacher-card",value:s.id,id:`teacher${s.id}`,"onUpdate:modelValue":c[1]||(c[1]=n=>a.teacherAreaData=n),class:"form-check-input"},null,8,ae),[[k,a.teacherAreaData]]),e("div",oe,[e("img",{src:s.img,alt:"teacher",class:"img"},null,8,le),e("p",re,i(s.area),1)])],10,ce),e("div",ne,[e("span",null,i(s.name)+" 教練",1)])]))),128))])]),de,e("div",ue,[e("button",{type:"submit",class:"btn btn btn-danger px-4 text-white",onClick:c[2]||(c[2]=(...s)=>t.checkout&&t.checkout(...s))},"立刻預約")])])])])],64)}const he=f(w,[["render",pe]]);export{he as default};

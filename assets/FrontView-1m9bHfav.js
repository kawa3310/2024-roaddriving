import{_ as d,r as i,o as c,c as u,a as s,b as e,w as n,d as a,n as F,F as p}from"./index-5ALw-696.js";import{F as w}from"./FooterComponents-QyeJX-i-.js";const y={data(){return{navbarClass:["bg-primary, py-md-3"]}},methods:{changeNavbarClass(){const l=window.scrollY,o=document.querySelector(".navigation");l>o.offsetTop-120?this.navbarClass=["bg-primary"]:this.navbarClass=[""]},backTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",this.changeNavbarClass),this.backTop()},unmounted(){window.removeEventListener("scroll",this.changeNavbarClass)}},_={class:"d-lg-none d-md-none navbar navbar-expand-lg bg-primary"},x={class:"container-fluid"},B={class:"dropdown"},C={class:"dropdown-menu dropdown-menu-end"},h={class:"dropdown-item"},N={class:"dropdown-item"},k={class:"dropdown-item"},A={class:"dropdown-item"},I={class:"dropdown-item"},V={class:"container d-flex justify-content-center"},q={class:"nav-link-pc d-flex align-items-center d-grid gap-8"},D={class:"login-btn"},P={type:"button",class:"btn btn-outline-white"};function j(l,o,m,g,r,b){const t=i("RouterLink");return c(),u(p,null,[s("nav",_,[s("div",x,[e(t,{class:"navbar-brand text-white d-flex align-items-center fw-bold fs-3 d-grid gap-2 logo-sm",to:"/"},{default:n(()=>o[0]||(o[0]=[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218008577.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=lMTBXrRdKVm8LKkT8bMJ7E1nKISVeM2pWLC%2F%2FB74jmjFOPKfT99%2FvmH3NFwO5nC36H17PE1BbyoI6NOuXPRaOV5weyy6xB0mWE1iFWj3MiPBZ4I66SsYVtiQwqkhBt3Cvok8uuPbFVKwIm%2BoMeeKaKcMCuD%2BsF%2B4gpE3Gy%2FZOHiqclZSZPizq5NnXEPPtaC0aH5h2UvT2qvcDnikY4X9l3uHsvwtkgc8CJ3VZDDql8rrYHdyzdqBdcPhCs28g1NVVA%2FYROZLnYLZM3XAYkxoGC7JJpOwdN1o1VPbcs4eeCuICkxJIHP1M7v%2FY0%2F%2FudHPnFKValAE7PDyIyc4kuIx5A%3D%3D",alt:"logo-sm"},null,-1),a(" 南南道路駕駛")])),_:1}),s("div",B,[o[6]||(o[6]=s("button",{class:"navbar-toggler",type:"button",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218833828.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=ZrXy9anAxUM6ykA%2BQEq9p7O3mI1O1ATlAM77Y9b1OhzFxV39Whqu1v0S98Ntp%2FFv4zNB4Q%2BNk6iM6tmgaXcnqxCjqDr0WcEc%2BWd0s3yEFw%2BnpNQcnb5lhi4jcICIXHymIqjN203ByddUs7%2FNpzWzJfo%2BkZO0rBiybiCA%2BaRhx%2FdGFUVy4rvFqJm05swVSl8GhQmMTjxGhPUcsjdYu3UJNAsn6uq5RANlNgl1MA5hrziiFj51E9Ibd9BqyhCbaeiR%2FcdN%2Ba8YDMAmYBLin30%2F0AVhAADDYIDZgSOqreItNi0WW%2BoIRAaUHEGuyNySn%2FCelY5ryWiblR986CWO%2FWgOgA%3D%3D",alt:"hanburger"})],-1)),s("ul",C,[s("li",h,[e(t,{to:"/purchase"},{default:n(()=>o[1]||(o[1]=[s("i",{class:"bi bi-cart"},null,-1),a(" 購買課程 ")])),_:1})]),s("li",N,[e(t,{to:"/reservation"},{default:n(()=>o[2]||(o[2]=[s("i",{class:"bi bi-calendar-event"},null,-1),a(" 預約報名 ")])),_:1})]),s("li",k,[e(t,{to:"/question"},{default:n(()=>o[3]||(o[3]=[s("i",{class:"bi bi-patch-question"},null,-1),a(" 常見問題 ")])),_:1})]),s("li",A,[e(t,{to:"/contact"},{default:n(()=>o[4]||(o[4]=[s("i",{class:"bi bi-envelope"},null,-1),a(" 聯絡我們 ")])),_:1})]),s("li",I,[e(t,{to:"/login"},{default:n(()=>o[5]||(o[5]=[s("i",{class:"bi bi-person-circle"},null,-1),a(" 登入 / 註冊 ")])),_:1})])])])])]),s("nav",{class:F(["d-lg-flex d-md-flex d-none fixed-top navbar navbar-pc fw-bold",r.navbarClass])},[s("div",V,[e(t,{class:"navbar-brand nav-hover d-flex align-items-center justify-content-center fs-3 d-grid gap-2",to:"/"},{default:n(()=>o[7]||(o[7]=[s("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217987514.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Iyv090JhhD2kiOsFnF5c3ublnU%2BnHmmzilhZ4L64dx3yJgW%2BEiKR8PM9mas1YV1v36qb8Oza0ZcJBb84X1P0dAUseI%2FHDuS90UzxbwullPAtKWR8V4nTNcWaCeSdhpyDk1jPKggKeSwt3Q5KIRmFkc%2FsqlQ%2BiAYPap8lOePtBOXJx7SUZgS9C3ehs%2BSBwgnVQD34kjGAJRi5lso9j%2FfVxIpfakSynV4jRTPbklDiXal9pxIevcAcKe4jGr9ZrGJyM%2BgAxyQDLdxN8jgTivUAj5J7GasOmkIZq5Mw8cnwBN90VRJ0kTd4YjK07B7mIUsQFpN6T2%2FQfnuU2tiKaxTcLw%3D%3D",alt:"logo-sm",class:"pc-logo"},null,-1),a(" 南南道路駕駛 ")])),_:1}),s("ul",q,[s("li",null,[e(t,{class:"nav-hover",to:"/purchase"},{default:n(()=>o[8]||(o[8]=[a("購買課程")])),_:1})]),s("li",null,[e(t,{class:"nav-hover",to:"/reservation"},{default:n(()=>o[9]||(o[9]=[a("預約報名")])),_:1})]),s("li",null,[e(t,{class:"nav-hover",to:"/question"},{default:n(()=>o[10]||(o[10]=[a("常見問題")])),_:1})]),s("li",null,[e(t,{class:"nav-hover",to:"/contact"},{default:n(()=>o[11]||(o[11]=[a("聯絡我們")])),_:1})]),s("li",D,[s("button",P,[e(t,{to:"/login"},{default:n(()=>o[12]||(o[12]=[a("登入 / 註冊")])),_:1})])])])])],2)],64)}const E=d(y,[["render",j],["__scopeId","data-v-6d9525af"]]),O={components:{HomeNavbar:E,FooterComponents:w}};function T(l,o,m,g,r,b){const t=i("HomeNavbar"),v=i("RouterView"),f=i("FooterComponents");return c(),u(p,null,[e(t),e(v),e(f)],64)}const Y=d(O,[["render",T]]);export{Y as default};

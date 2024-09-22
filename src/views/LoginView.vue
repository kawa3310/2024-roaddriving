<template>
  <NavbarComponents/>
  <RouterView/>
  <div class="empty-content"></div>
  <div class="container mt-3">
    <div aria-label="breadcrumb">
      <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
        <li class="breadcrumb-item">
          <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/login">會員登入</RouterLink>
        </li>
      </ol>
    </div>
  </div>
  <div class="container mb-lg-9">
    <div class="d-flex justify-content-center">
      <div class="logo-box">
        <h5>南南駕訓班</h5>
        <div class="login-logo">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726839355641.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bk5w3NWE1BAoGu6RWYl0ULJLFCMkyZRvwcaxcTN4VDKgpkIItforaMikz9aqPob2nTbe13PaqiJwpAwJrsur3FFYvWVlllamspml%2F2W0F4RJB4ggIMzDhhOjOKA5jDzXKZFQyCnAtonVhOotlYV9nANXTyvE2o2nRvBK1prBN9DqQKxdaT1%2Fn0UkWqP1UOcafmrOS0GMI784eNEs21Qm9Lb%2Fm0AUDrp94x8PZD3Xc9eUNk%2BaZOKE9mZwG7xd%2BmnlUHMcdMb8Catg7JcEwxOd%2FnRDcSMWNkAkQeNeMQICYPEwZw9JQojVMQ4nNoZEKjMjE8HnMdIbXe7MbAmUgu8fRQ%3D%3D" alt="logo-sm">
        </div>
      </div>
    </div>
    <div class="login d-flex justify-content-center mt-5" v-if="loginStates">
      <div class="registration-form">
        <h5 class="text-center py-3">立即登入</h5>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>
            <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="輸入帳號">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"></label>
            <input type="password" class="form-control" id="exampleInputPassword1"
            placeholder="輸入密碼">
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">記住密碼</label>
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <RouterLink to="/contact" class="btn btn-outline-dark px-8">登入</RouterLink>
          </div>
          <div class="d-flex justify-content-between d-grid gap-3 mb-3">
            <a @click="registrationstates">註冊</a>
            <a class="text-muted" @click="forgotpassword">忘記密碼</a>
          </div>
        </form>
      </div>
    </div>
    <div class="registration d-flex justify-content-center mt-5" v-if="registrationStates">
      <div class="registration-form">
        <h5 class="text-center py-3">立即註冊</h5>
        <div class="d-flex justify-content-center d-grid gap-3">
          <p>已經有帳號了？</p>
          <RouterLink to="/contact">
            登入
          </RouterLink>
        </div>
        <form>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">姓名</label>
            <input type="name" class="form-control"
            d="exampleInputName" aria-describedby="name" placeholder="請填入姓名">
          </div>
          <div class="mb-3">
            <label for="exampleInputTel" class="form-label">聯絡電話</label>
            <input type="name" class="form-control"
            d="exampleInputTel" aria-describedby="Tel" placeholder="請填入聯絡電話">
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">信箱</label>
            <input type="email" class="form-control" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="請填入信箱">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密碼</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
            placeholder="請填入6-15字密碼">
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <a class="btn btn-outline-dark px-8" @click="registrationstates">註冊</a>
          </div>
        </form>
      </div>
    </div>
    <div class="forgot-password" v-if="forgotPassword">
      <div class="d-flex justify-content-center my-5" v-if="enteremail">
        <div class="registration-form">
          <h5 class="text-center py-3">忘記密碼</h5>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">信箱</label>
              <input type="email" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="請填入已註冊信箱">
            </div>
            <div class="d-flex justify-content-center align-items-center py-4">
              <button type="submit" class="btn btn-outline-dark px-8"
              @click="getcertified">送出</button>
            </div>
          </form>
        </div>
      </div>
      <div class="d-flex justify-content-center my-5" v-if="certified">
        <div class="registration-form">
          <h5 class="text-center py-3">輸入驗證碼</h5>
          <p class="text-center">已透過Email將驗證碼傳送至您的的信箱</p>
          <div class="code-box">
            <div class="code-item"></div>
            <div class="code-item"></div>
            <div class="code-item"></div>
            <div class="code-item"></div>
            <input type="text" class="code-input" maxlength="4">
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <button type="submit" class="btn btn-outline-dark px-8">確認</button>
          </div>
          <div class="d-flex justify-content-between d-grid gap-3 mb-3">
            <p class="text-muted">沒收到驗證碼嗎？</p>
            <a href="#">重新發送</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="mt-7 mb-3 mb-lg-4 mt-lg-8">
    <div class="container">
      <div class="d-flex justify-content-start justify-content-lg-between
      align-items-center d-grid gap-3 mb-4">
        <div class="d-flex justify-content-start align-items-center">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180420751.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GklhkUuD6Ur0vIqY3rnQGa2woUnl2YWwQrXQ3CUCcK0tRg5lPWMjfs9VEUYJZqM9K3TDbAbxNbhknJ7zMaGzz2M1S95XsS96SFuURt1vw3845%2FDqnoUjEq6iiLsg%2B72inxrCArwo%2Bmp5ip1riXIEShkQ8r2QpULNM51xQwFLbBNw3B%2BLJmG89FG2T2Axr58x1L7pvpoNV8rjn%2FedHU%2BigKM8SQduZAL7D%2Fatp9gh1y%2FgF4T%2FCFiCtyxshmZppWf62zbJgeVMIk7zU4%2B3nEhplM03JgSwMvdulqBcukvdmNx%2Fv5wYGiL5hk5WLr9OicksGsVN9dI9l0wodblATub%2B0A%3D%3D" class="footer-logo" alt="footer-logo">
          <h2 class="text-primary ps-lg-3 ps-2">南南道路駕訓</h2>
        </div>
        <ul class="community d-lg-flex
        d-none justify-content-center align-items-center d-grid gap-3 pt-3">
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193180155.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XMYtEjBF4Y7Z1LArnwmSBlIsW7qvsz1%2BLeMreMI5I%2BvwtXgjrfporGbIqStTFurDyiguSgAMOKdCTODWYwQDEw5cdP%2B6DcZ%2BSLgDeFOK%2Fi%2Fz422ODfKyE4%2BDCJyczoAxkMCucKRMI525qQhuMw6GYkfa7Q33t%2BdTBGLMsCdmY%2B66P8hmSeq9F%2Fg5AxH08nyuU0Kc3Hcv2Y2AHZIKwcAXNL3%2Ft6GAGEMCqKL%2FxdOvs1ou4HIxbBU1CnxZF9FnrlzVoNPDQGcQN%2Bo52B5q4cgBI53dpU6JzBQYp0td%2BguC%2F1%2BlCuZHdqLjcE%2B43wIuQbeV8778QZ4Fw65k0330YJSLxQ%3D%3D" alt="facebook-icon" class="community-icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193204073.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=flSD9%2Fw1I255ysDeYznpTlqUsiZemABYGJJ9GupAFfqThKP%2FWKXPh%2F01NX6ad4ILQUrWQAI3k46VgSwWLVJJ%2Bd2OMwW0eoun4z7YnsCK7f78rA1ct14o%2Bpg9AOKWhENEtd1I960wb0YbK5HxA%2F%2FJnarUEidH6phJ4%2Bkdd4G%2BSm7iqLjFbi2pUCzYLcoZ%2Buzt5H%2B1MyMPgQ8IosbyASHpcC94pyUj5%2BvoK%2FtugYFZUkZYx3QCIjNBjbyeI%2B1trF3aKl3Q8Po2%2FBh%2BGbbVAKTsFQoA%2FB%2BscvosQ8aiAu2k2oYY463HEX807K8%2FKfgiQmpk%2BJkrTLbklIJpcMFFqftuZg%3D%3D" alt="instagram-icon" class="community-icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193225623.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SaarVV82Nzp41uF0gTADC2zwIDTV2iV4882wZIx3StPDApMoT56pLBlp%2BOEk%2FSCUmAgVuZNvf3k9ZsdmAnu1Z%2Bs4CMrMGl3ORQfpacxSa73b0x6s3Ihn3grw4uV0PF9KzmWubni0OW8aQE%2F7nEkj0e5KcqqRu%2BHtMGKUTUzChSW1caMP93wxBVyufOyfrvINMnqIFBphXvlkCGHuOLn%2FXqo2for9mGuAOXOzQsBqIBAKX3wmCku5B8p2mobvNvYee2Qvxj4plubVLFSnEm9B4HvAMfT%2BZEf08osTvUmYtSFOVIZ6TBJDzCUfoAu4SWjF9112tLkL2B%2FPGZXaspVqPw%3D%3D" alt="twitter-icon" class="community-icon">
            </a>
          </li>
        </ul>
      </div>
      <ul class="contact d-grid gap-3 gap-lg-4 pb-3">
        <li class="d-flex align-items-center d-grid gap-2">
          <i class="bi bi-telephone"></i>
          <a href="tel:+07-4569477">07-4569477</a>
        </li>
        <li class="d-flex align-items-center d-grid gap-2">
          <i class="bi bi-geo-alt"></i>
          <a href="mailto:roaddining@gmail.com">roaddining@gmail.com</a>
        </li>
      </ul>
      <ul class="community d-lg-none d-flex
      justify-content-center align-items-center d-grid gap-3 pt-3">
        <li>
          <a href="#">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193180155.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XMYtEjBF4Y7Z1LArnwmSBlIsW7qvsz1%2BLeMreMI5I%2BvwtXgjrfporGbIqStTFurDyiguSgAMOKdCTODWYwQDEw5cdP%2B6DcZ%2BSLgDeFOK%2Fi%2Fz422ODfKyE4%2BDCJyczoAxkMCucKRMI525qQhuMw6GYkfa7Q33t%2BdTBGLMsCdmY%2B66P8hmSeq9F%2Fg5AxH08nyuU0Kc3Hcv2Y2AHZIKwcAXNL3%2Ft6GAGEMCqKL%2FxdOvs1ou4HIxbBU1CnxZF9FnrlzVoNPDQGcQN%2Bo52B5q4cgBI53dpU6JzBQYp0td%2BguC%2F1%2BlCuZHdqLjcE%2B43wIuQbeV8778QZ4Fw65k0330YJSLxQ%3D%3D" alt="facebook-icon" class="community-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193204073.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=flSD9%2Fw1I255ysDeYznpTlqUsiZemABYGJJ9GupAFfqThKP%2FWKXPh%2F01NX6ad4ILQUrWQAI3k46VgSwWLVJJ%2Bd2OMwW0eoun4z7YnsCK7f78rA1ct14o%2Bpg9AOKWhENEtd1I960wb0YbK5HxA%2F%2FJnarUEidH6phJ4%2Bkdd4G%2BSm7iqLjFbi2pUCzYLcoZ%2Buzt5H%2B1MyMPgQ8IosbyASHpcC94pyUj5%2BvoK%2FtugYFZUkZYx3QCIjNBjbyeI%2B1trF3aKl3Q8Po2%2FBh%2BGbbVAKTsFQoA%2FB%2BscvosQ8aiAu2k2oYY463HEX807K8%2FKfgiQmpk%2BJkrTLbklIJpcMFFqftuZg%3D%3D" alt="instagram-icon" class="community-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193225623.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SaarVV82Nzp41uF0gTADC2zwIDTV2iV4882wZIx3StPDApMoT56pLBlp%2BOEk%2FSCUmAgVuZNvf3k9ZsdmAnu1Z%2Bs4CMrMGl3ORQfpacxSa73b0x6s3Ihn3grw4uV0PF9KzmWubni0OW8aQE%2F7nEkj0e5KcqqRu%2BHtMGKUTUzChSW1caMP93wxBVyufOyfrvINMnqIFBphXvlkCGHuOLn%2FXqo2for9mGuAOXOzQsBqIBAKX3wmCku5B8p2mobvNvYee2Qvxj4plubVLFSnEm9B4HvAMfT%2BZEf08osTvUmYtSFOVIZ6TBJDzCUfoAu4SWjF9112tLkL2B%2FPGZXaspVqPw%3D%3D" alt="twitter-icon" class="community-icon">
          </a>
        </li>
      </ul>
      <span class="d-lg-block d-none text-light text-end my-7">隱私權政策</span>
      <p class="statement text-center mt-5">Copyright © 2024 road driving serivices.</p>
    </div>
  </footer>
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';

export default {
  data() {
    return {
      loginStates: true,
      registrationStates: false,
      forgotPassword: false,
      enteremail: true,
      certified: false,
    };
  },
  methods: {
    forgotpassword() {
      this.forgotPassword = true;
      this.loginStates = false;
    },
    registrationstates() {
      if (this.registrationStates !== true) {
        this.registrationStates = true;
        this.loginStates = false;
      } else {
        this.loginStates = true;
        this.registrationStates = false;
      }
    },
    getcertified() {
      if (this.certified !== true) {
        this.certified = true;
        this.enteremail = false;
      } else {
        this.enteremail = true;
        this.certified = false;
      }
    },
  },
  components: {
    NavbarComponents,
  },
};
</script>

<style scoped lang="scss">
  .logo-box{
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #eef0f1;
  }
  .login-logo{
    width: 20%;
  }
  .registration-form{
    max-width: 100%;
    align-items: center;
    border-radius: 40px;
    padding: 10px 75px;
    background-color: #eef0f1;
    .underline{
      color: rgb(62, 62, 174);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    form{
      margin-top: 10px;
      width: 100%;
    }
  }
  .code-box {
    display: flex;
    justify-content: space-between;
    width: 230px;
    margin: 30px auto;
    position: relative;
  }
  .code-item {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 5px 5px;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    color: #000;
    font-weight: bold;
    border: 1px solid rgb(209, 209, 209);
    transition: border 0.3s;
    box-sizing: border-box;
    }
    .code-box .code-input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    }
</style>

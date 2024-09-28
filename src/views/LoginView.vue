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
        <h5 class="text-center py-4">立即登入</h5>
        <VForm ref="form" v-slot="{ errors }">
          <div class="mb-4">
            <label for="email" class="form-label">帳號</label>
            <VField id="email" name="email" type="email" class="form-control"
            placeholder="輸入帳號"
            :class="{ 'is-invalid': errors['email'] }"
            rules="email|required">
            </VField>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="email" class="form-label">密碼</label>
            <VField ref="password" name="密碼" type="text"
            rules="required|min:9|max:10" class="form-control"
            placeholder="輸入密碼"
            :class="{ 'is-invalid': errors['密碼'] }">
            </VField>
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">記住密碼</label>
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <RouterLink to="/member" class="btn btn-outline-dark px-8">登入</RouterLink>
          </div>
          <div class="d-flex justify-content-between d-grid gap-3 mb-3">
            <a @click="registrationstates">註冊</a>
            <a class="text-muted" @click="forgotpassword">忘記密碼</a>
          </div>
        </VForm>
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
        <VForm ref="form" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">姓名</label>
            <VField id="name" name="姓名" type="text" class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required">
            </VField>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">聯絡電話</label>
            <VField id="tel" name="電話" type="text" class="form-control"
              :class="{ 'is-invalid': errors['電話'] }" placeholder="請填入聯絡電話"
              rules="required|min:9|max:10">
            </VField>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">信箱</label>
            <VField id="email" name="email" type="email" class="form-control"
            :class="{ 'is-invalid': errors['email'] }" placeholder="請填入信箱"
              rules="email|required"></VField>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">密碼</label>
            <VField ref="password" name="密碼" type="text"
            rules="required|min:9|max:10" class="form-control"
            placeholder="請填入6-15字密碼"
            :class="{ 'is-invalid': errors['密碼'] }">
            </VField>
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <a class="btn btn-outline-dark px-8" @click="registrationstates">註冊</a>
          </div>
        </VForm>
      </div>
    </div>
    <div class="forgot-password" v-if="forgotPassword">
      <div class="d-flex justify-content-center my-5" v-if="enteremail">
        <div class="registration-form">
          <h5 class="text-center py-3">忘記密碼</h5>
          <VForm ref="form" v-slot="{ errors }">
            <div class="mb-3">
              <label for="email" class="form-label">信箱</label>
              <VField id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }" placeholder="請填入已註冊信箱"
                rules="email|required"></VField>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="d-flex justify-content-center align-items-center py-4">
              <button type="submit" class="btn btn-outline-dark px-8"
              @click="getcertified">送出</button>
            </div>
          </VForm>
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
            <button type="submit" class="btn btn-outline-dark px-8"
            @click="forgotpassword">確認</button>
          </div>
          <div class="d-flex justify-content-between d-grid gap-3 mb-3">
            <p class="text-muted" @click="registrationstates">沒收到驗證碼嗎？</p>
            <a href="#">重新發送</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponents />
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';
import FooterComponents from '@/components/FooterComponents.vue';

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
      if (this.forgotPassword !== true) {
        this.forgotPassword = true;
        this.loginStates = false;
      } else {
        this.forgotPassword = false;
        this.loginStates = true;
      }
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
    FooterComponents,
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
    .form-control:focus {
      border-color: #939799 ;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) ;
    };
</style>

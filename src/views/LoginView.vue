<template>
  <NavbarComponents/>
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
  <div class="container mt-3 mb-lg-9">
    <div class="d-flex justify-content-center">
      <div class="logo-box">
        <h5>南南駕訓班</h5>
        <div class="login-logo">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215881995.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Ti%2BPOwPUVod7CJEyYc%2F%2BGr9VmgOYvrPC%2BwyNTECd9hsR1lLIiifuLcQm0S%2Bu8nDlQFIoh7UnrpBM7zaJ%2FY%2B87h39RrDMQHdeuNXDipMcl8U%2Fjo7Ac66RJ2WIDZmnjPJga%2BjV1RlUiGnJyir5dfy7bhLGOAH6JF%2FPCckarXAcueceW7fl02WV5J77Caa3UA961dtfRO%2F9wC2gtyN8aeuQBeLXeLDuzxyrS69FbYPwycDqJsDEbNRLOPvdFGYum7qIFTfiI2gfbCA88e37WruqF2zD9NLXh1xvpkqZN1iGuya9eCRT57BPNM3s6HMHXiWIFmOKu7opJJGNoeaLWfQ1Dw%3D%3D" alt="logo-sm">
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
          <a @click="registrationstates">
            登入
          </a>
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
            <a class="btn btn-outline-dark px-8" @click="getRaccount">註冊</a>
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
            <div
              v-for="(item, index) in codeItems"
              :key="index"
              class="code-item"
              :class="{ active: index === activeIndex }"
            >
              {{ item }}
            </div>
            <input
              type="text"
              class="code-input"
              v-model="code"
              @focus="handleFocus"
              @blur="handleBlur"
              @input="handleInput"
              maxlength="4"
            />
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <button type="submit" class="btn btn-outline-dark px-8"
            @click="forgotpassword">確認</button>
          </div>
          <div class="d-flex justify-content-between d-grid gap-3 mb-3">
            <p class="text-muted">沒收到驗證碼嗎？</p>
            <a @click="getResend">重新發送</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponents />
</template>

<script>
import Swal from 'sweetalert2';
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
      code: '',
      codeItems: ['', '', '', ''],
      activeIndex: 0,
    };
  },
  methods: {
    forgotpassword() {
      if (this.forgotPassword !== true) {
        this.forgotPassword = true;
        this.loginStates = false;
        this.enteremail = true;
        this.certified = false;
      } else {
        this.loginStates = true;
        this.forgotPassword = false;
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
    getRaccount() {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
        title: '註冊成功',
      });
      this.registrationstates();
    },
    getcertified() {
      if (this.certified !== true) {
        this.certified = true;
        this.enteremail = false;
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
          title: '已發送驗證碼至信箱',
        });
      } else {
        this.enteremail = true;
        this.certified = false;
      }
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
        title: '已發送驗證碼至信箱',
      });
    },
    getResend() {
      if (this.certified !== false) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 2500,
          title: '已重新發送驗證碼至信箱',
        });
      }
    },
    handleFocus() {
      this.updateActiveIndex();
    },
    handleBlur() {
      this.activeIndex = 0;
    },
    handleInput() {
      this.updateCodeItems();
      this.updateActiveIndex();
    },
    updateCodeItems() {
      const inputValue = this.code;
      this.codeItems = inputValue.split('').concat(['', '', '', '']).slice(0, 4);
    },
    updateActiveIndex() {
      this.activeIndex = this.code.length;
    },
  },
  components: {
    NavbarComponents,
    FooterComponents,
  },
  watch: {
    code() {
      this.updateCodeItems();
    },
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

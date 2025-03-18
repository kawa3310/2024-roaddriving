<template>
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid d-flex justify-content-around">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217987514.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Iyv090JhhD2kiOsFnF5c3ublnU%2BnHmmzilhZ4L64dx3yJgW%2BEiKR8PM9mas1YV1v36qb8Oza0ZcJBb84X1P0dAUseI%2FHDuS90UzxbwullPAtKWR8V4nTNcWaCeSdhpyDk1jPKggKeSwt3Q5KIRmFkc%2FsqlQ%2BiAYPap8lOePtBOXJx7SUZgS9C3ehs%2BSBwgnVQD34kjGAJRi5lso9j%2FfVxIpfakSynV4jRTPbklDiXal9pxIevcAcKe4jGr9ZrGJyM%2BgAxyQDLdxN8jgTivUAj5J7GasOmkIZq5Mw8cnwBN90VRJ0kTd4YjK07B7mIUsQFpN6T2%2FQfnuU2tiKaxTcLw%3D%3D
          " alt="logo-sm">
        南南道路駕駛</RouterLink>
    </div>
  </nav>
  <div class="container mt-3 my-lg-9">
    <div class="d-flex justify-content-center">
      <div class="logo-box">
        <h5>南南駕訓班</h5>
        <div class="login-logo">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218008577.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=lMTBXrRdKVm8LKkT8bMJ7E1nKISVeM2pWLC%2F%2FB74jmjFOPKfT99%2FvmH3NFwO5nC36H17PE1BbyoI6NOuXPRaOV5weyy6xB0mWE1iFWj3MiPBZ4I66SsYVtiQwqkhBt3Cvok8uuPbFVKwIm%2BoMeeKaKcMCuD%2BsF%2B4gpE3Gy%2FZOHiqclZSZPizq5NnXEPPtaC0aH5h2UvT2qvcDnikY4X9l3uHsvwtkgc8CJ3VZDDql8rrYHdyzdqBdcPhCs28g1NVVA%2FYROZLnYLZM3XAYkxoGC7JJpOwdN1o1VPbcs4eeCuICkxJIHP1M7v%2FY0%2F%2FudHPnFKValAE7PDyIyc4kuIx5A%3D%3D" alt="logo-sm">
        </div>
      </div>
    </div>
    <div class="login d-flex justify-content-center mt-5">
      <div class="registration-form">
        <h5 class="text-center py-4">管理員登入</h5>
        <form id="form" @submit.prevent="login">
          <div class="mb-4">
            <label for="username" class="form-label">電子信箱</label>
            <input id="username" name="email" type="email" class="form-control"
            v-model="user.username"
            placeholder="輸入電子信箱"/>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">密碼</label>
            <input id="password" name="密碼" type="password" class="form-control"
            placeholder="輸入密碼" v-model="user.password">
          </div>
          <div class="d-flex justify-content-center align-items-center py-4">
            <button type="submit" class="btn btn-outline-dark px-8">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios.post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `drivingToken=${token}; expires = ${new Date(expired)}; path=/`;
          this.$router.push('/products');
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
        });
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

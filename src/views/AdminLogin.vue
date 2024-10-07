<template>
    <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid d-flex justify-content-around">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180377010.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CrvuyoINRFF8s%2BmbJ4CChhjRwC0pPEqk1uqzAuOCzrgsFtjA58P7HAzuLW0azYNsZMTKgkYVMfkYhYvDg2RQxKVh%2F7UmnCLHgIVmDgxlS%2BjZ2F5mTmQYCODXSwAZd22JZstU1UPLWaug0pLYunx52pcTKYdxMg4PNinS%2FbnxS3vlT7UnBCjNZV5bkf4kR5zSFTKC4N2vdlqrNDzlC%2BxUHqpcAWjxSqh3ydZJ6yOdPnxTlbUVb5YcDra4ymLgS8KQ7kdB%2BZE4Vj7PDqcDevKBsiXzGKU3xvYBPupfxf9qYub%2FgkCWq3WNNtSZ84b62zJ8g%2Fi1Nl8VXpv2DTsXRkWPNg%3D%3D
          " alt="logo-sm">
        南南道路駕駛</RouterLink>
    </div>
  </nav>
  <div class="container mt-3 my-lg-9">
    <div class="d-flex justify-content-center">
      <div class="logo-box">
        <h5>南南駕訓班</h5>
        <div class="login-logo">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726839355641.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bk5w3NWE1BAoGu6RWYl0ULJLFCMkyZRvwcaxcTN4VDKgpkIItforaMikz9aqPob2nTbe13PaqiJwpAwJrsur3FFYvWVlllamspml%2F2W0F4RJB4ggIMzDhhOjOKA5jDzXKZFQyCnAtonVhOotlYV9nANXTyvE2o2nRvBK1prBN9DqQKxdaT1%2Fn0UkWqP1UOcafmrOS0GMI784eNEs21Qm9Lb%2Fm0AUDrp94x8PZD3Xc9eUNk%2BaZOKE9mZwG7xd%2BmnlUHMcdMb8Catg7JcEwxOd%2FnRDcSMWNkAkQeNeMQICYPEwZw9JQojVMQ4nNoZEKjMjE8HnMdIbXe7MbAmUgu8fRQ%3D%3D" alt="logo-sm">
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

<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid d-flex justify-content-around">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218008577.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=lMTBXrRdKVm8LKkT8bMJ7E1nKISVeM2pWLC%2F%2FB74jmjFOPKfT99%2FvmH3NFwO5nC36H17PE1BbyoI6NOuXPRaOV5weyy6xB0mWE1iFWj3MiPBZ4I66SsYVtiQwqkhBt3Cvok8uuPbFVKwIm%2BoMeeKaKcMCuD%2BsF%2B4gpE3Gy%2FZOHiqclZSZPizq5NnXEPPtaC0aH5h2UvT2qvcDnikY4X9l3uHsvwtkgc8CJ3VZDDql8rrYHdyzdqBdcPhCs28g1NVVA%2FYROZLnYLZM3XAYkxoGC7JJpOwdN1o1VPbcs4eeCuICkxJIHP1M7v%2FY0%2F%2FudHPnFKValAE7PDyIyc4kuIx5A%3D%3D
          " alt="logo-sm" class="logo-sm">
        南南道路駕駛</RouterLink>
      <div class="dropdown">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218833828.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=ZrXy9anAxUM6ykA%2BQEq9p7O3mI1O1ATlAM77Y9b1OhzFxV39Whqu1v0S98Ntp%2FFv4zNB4Q%2BNk6iM6tmgaXcnqxCjqDr0WcEc%2BWd0s3yEFw%2BnpNQcnb5lhi4jcICIXHymIqjN203ByddUs7%2FNpzWzJfo%2BkZO0rBiybiCA%2BaRhx%2FdGFUVy4rvFqJm05swVSl8GhQmMTjxGhPUcsjdYu3UJNAsn6uq5RANlNgl1MA5hrziiFj51E9Ibd9BqyhCbaeiR%2FcdN%2Ba8YDMAmYBLin30%2F0AVhAADDYIDZgSOqreItNi0WW%2BoIRAaUHEGuyNySn%2FCelY5ryWiblR986CWO%2FWgOgA%3D%3D" alt="hanburger">
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav admin-item">
            <li class="nav-item">
              <RouterLink
              to="/accounts">
              所有已註冊帳號
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/order">
                所有預約
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products">
                所有課程列表
              </RouterLink>
            </li>
            <li class="d-lg-none nav-item">
              <a href="#" class="nav-hover" @click.prevent="loginOut">登出</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-lg-flex d-none">
        <a href="#" class="nav-hover" @click.prevent="loginOut">登出</a>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const { VITE_URL } = import.meta.env;
export default {
  data() {
    return {
    };
  },
  methods: {
    loginOut() {
      axios.post(`${VITE_URL}/logout`)
        .then(() => {
          document.cookie = 'drivingToken=; expires=Thu, 18 Dec 2003 12:00:00 UTC; path=/natural/dist;';
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已登出',
          });
          this.$router.push('/AdminLogin');
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
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

<style>
  @import '/src/assets/default/_navbar.scss';
  .admin-item{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: #5BAADF;
  padding: 12px 0px;
  li{
    a{
      color: white;
      &:hover{
        color: #242a2f;
      }
    }
  }
}
</style>

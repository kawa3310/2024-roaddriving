<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid d-flex justify-content-around">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2" to="/products">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180377010.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CrvuyoINRFF8s%2BmbJ4CChhjRwC0pPEqk1uqzAuOCzrgsFtjA58P7HAzuLW0azYNsZMTKgkYVMfkYhYvDg2RQxKVh%2F7UmnCLHgIVmDgxlS%2BjZ2F5mTmQYCODXSwAZd22JZstU1UPLWaug0pLYunx52pcTKYdxMg4PNinS%2FbnxS3vlT7UnBCjNZV5bkf4kR5zSFTKC4N2vdlqrNDzlC%2BxUHqpcAWjxSqh3ydZJ6yOdPnxTlbUVb5YcDra4ymLgS8KQ7kdB%2BZE4Vj7PDqcDevKBsiXzGKU3xvYBPupfxf9qYub%2FgkCWq3WNNtSZ84b62zJ8g%2Fi1Nl8VXpv2DTsXRkWPNg%3D%3D
          " alt="logo-sm">
        南南道路駕駛</RouterLink>
      <div class="dropdown">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725246017460.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pGmK%2FgSnuPV4iYVfzC3tfdxqjKKcod4oillqZknFexNrWZYjbFFrtu9bugwoaWBMwVX1hw9EN%2ByfREXFk1CKpCU2%2BAfbMQK%2FcGmJy37kQNbDiq48h4%2BgrMxPnVSnop8DtgZkwGg9UmHNgccipVk%2FR5Hq3HIx8kdhPeLTgpPD8CzlGO2RW0LiXEpilduyqmu3jcr%2BAIv3ePIHwQg7TMV%2FZIc0Q02h5f4J3mYRpTs6mqsqQ7LPwIpX6SBHdyLZOaNtTp%2BfDmm0IChAOnJ2ghev4JWgREQZoVsGeFj8%2Fhz3tt3OqIsZ2C91GRri1GbFeuPQZuLKt7YxaTMpvtaYF5ngMA%3D%3D" alt="hanburger">
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

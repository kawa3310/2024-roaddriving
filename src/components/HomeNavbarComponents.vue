<template>
  <nav class="d-lg-none d-md-none navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2 logo-sm" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218008577.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=lMTBXrRdKVm8LKkT8bMJ7E1nKISVeM2pWLC%2F%2FB74jmjFOPKfT99%2FvmH3NFwO5nC36H17PE1BbyoI6NOuXPRaOV5weyy6xB0mWE1iFWj3MiPBZ4I66SsYVtiQwqkhBt3Cvok8uuPbFVKwIm%2BoMeeKaKcMCuD%2BsF%2B4gpE3Gy%2FZOHiqclZSZPizq5NnXEPPtaC0aH5h2UvT2qvcDnikY4X9l3uHsvwtkgc8CJ3VZDDql8rrYHdyzdqBdcPhCs28g1NVVA%2FYROZLnYLZM3XAYkxoGC7JJpOwdN1o1VPbcs4eeCuICkxJIHP1M7v%2FY0%2F%2FudHPnFKValAE7PDyIyc4kuIx5A%3D%3D" alt="logo-sm">
        南南道路駕駛</RouterLink>
      <div class="dropdown">
        <button class="navbar-toggler" type="button"
        role="button" data-bs-toggle="dropdown" aria-expanded="false"
        aria-label="Toggle navigation">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218833828.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=ZrXy9anAxUM6ykA%2BQEq9p7O3mI1O1ATlAM77Y9b1OhzFxV39Whqu1v0S98Ntp%2FFv4zNB4Q%2BNk6iM6tmgaXcnqxCjqDr0WcEc%2BWd0s3yEFw%2BnpNQcnb5lhi4jcICIXHymIqjN203ByddUs7%2FNpzWzJfo%2BkZO0rBiybiCA%2BaRhx%2FdGFUVy4rvFqJm05swVSl8GhQmMTjxGhPUcsjdYu3UJNAsn6uq5RANlNgl1MA5hrziiFj51E9Ibd9BqyhCbaeiR%2FcdN%2Ba8YDMAmYBLin30%2F0AVhAADDYIDZgSOqreItNi0WW%2BoIRAaUHEGuyNySn%2FCelY5ryWiblR986CWO%2FWgOgA%3D%3D" alt="hanburger" >
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li class="dropdown-item">
            <RouterLink
            to="/purchase">
              <i class="bi bi-cart"></i>
              購買課程
            </RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink to="/reservation">
              <i class="bi bi-calendar-event"></i>
              預約報名
            </RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink to="/question">
            <i class="bi bi-patch-question"></i>
            常見問題
            </RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink to="/contact">
            <i class="bi bi-envelope"></i>
            聯絡我們
            </RouterLink>
          </li>
          <li class="dropdown-item">
            <RouterLink to="/login">
              <i class="bi bi-person-circle"></i>
              登入 / 註冊
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav class="d-lg-flex d-md-flex d-none fixed-top
  navbar navbar-pc fw-bold" :class="navbarClass">
    <div class="container d-flex justify-content-center">
      <RouterLink class="navbar-brand nav-hover d-flex align-items-center
      justify-content-center fs-3
      d-grid gap-2" to="/">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217987514.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Iyv090JhhD2kiOsFnF5c3ublnU%2BnHmmzilhZ4L64dx3yJgW%2BEiKR8PM9mas1YV1v36qb8Oza0ZcJBb84X1P0dAUseI%2FHDuS90UzxbwullPAtKWR8V4nTNcWaCeSdhpyDk1jPKggKeSwt3Q5KIRmFkc%2FsqlQ%2BiAYPap8lOePtBOXJx7SUZgS9C3ehs%2BSBwgnVQD34kjGAJRi5lso9j%2FfVxIpfakSynV4jRTPbklDiXal9pxIevcAcKe4jGr9ZrGJyM%2BgAxyQDLdxN8jgTivUAj5J7GasOmkIZq5Mw8cnwBN90VRJ0kTd4YjK07B7mIUsQFpN6T2%2FQfnuU2tiKaxTcLw%3D%3D" alt="logo-sm" class="pc-logo">
        南南道路駕駛
      </RouterLink>
      <ul class="nav-link-pc d-flex align-items-center d-grid gap-8">
        <li>
          <RouterLink class="nav-hover" to="/purchase">購買課程</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-hover" to="/reservation">預約報名</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-hover" to="/question">常見問題</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-hover" to="/contact">聯絡我們</RouterLink>
        </li>
        <li class="login-btn">
          <button type="button" class="btn btn-outline-white">
            <RouterLink to="/login">登入 / 註冊</RouterLink>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarClass: ['bg-primary, py-md-3'],
    };
  },
  methods: {
    changeNavbarClass() {
      const windowY = window.scrollY;
      const navigation = document.querySelector('.navigation');

      if (windowY > navigation.offsetTop - 120) {
        this.navbarClass = ['bg-primary'];
      } else {
        this.navbarClass = [''];
      }
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavbarClass);
    this.backTop();
  },
  unmounted() {
    window.removeEventListener('scroll', this.changeNavbarClass);
  },
};
</script>

<style leng="scss" scoped>
@import '/src/assets/default/_navbar.scss';
</style>

<template>
  <nav class="d-lg-none d-md-none navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2 logo-sm" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218008577.png" alt="logo-sm">
        南南道路駕駛</RouterLink>
      <div class="dropdown">
        <button class="navbar-toggler" type="button"
        role="button" data-bs-toggle="dropdown" aria-expanded="false"
        aria-label="Toggle navigation">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218833828.png" alt="hanburger" >
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
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217987514.png" alt="logo-sm" class="pc-logo">
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

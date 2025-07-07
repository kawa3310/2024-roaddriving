<template>
  <footer class="mt-7 mb-3 mb-lg-4 mt-lg-8">
    <div class="container">
      <div class="d-flex justify-content-start justify-content-lg-between
      align-items-center d-grid gap-3 mb-4">
        <div class="d-flex justify-content-start align-items-center">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742216815747.png" class="footer-logo" alt="footer-logo">
          <h2 class="text-primary ps-lg-3 ps-2">南南道路駕訓</h2>
        </div>
        <ul class="community d-lg-flex
        d-none justify-content-center align-items-center d-grid gap-3 pt-3">
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217242746.png" alt="facebook-icon" class="community-icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217404993.png" alt="instagram-icon" class="community-icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217321107.png" alt="twitter-icon" class="community-icon">
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
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217242746.png" alt="facebook-icon" class="community-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217404993.png" alt="instagram-icon" class="community-icon">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742217321107.png" alt="twitter-icon" class="community-icon">
          </a>
        </li>
      </ul>
      <RouterLink class="nav-hover d-lg-block d-none
      text-light text-end my-7" to="/privacy">隱私權政策</RouterLink>
      <p class="statement text-center mt-5">Copyright © 2024 road driving serivices.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer-logo{
    width: 48px;
  }
  .community-icon{
    max-width: 40px;
  }
  .statement{
    font-size: 14px;
  }
</style>

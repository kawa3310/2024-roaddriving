<template>
  <nav class="d-lg-none d-md-none navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand text-white
        d-flex align-items-center fw-bold fs-3 d-grid gap-2" to="/">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180377010.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CrvuyoINRFF8s%2BmbJ4CChhjRwC0pPEqk1uqzAuOCzrgsFtjA58P7HAzuLW0azYNsZMTKgkYVMfkYhYvDg2RQxKVh%2F7UmnCLHgIVmDgxlS%2BjZ2F5mTmQYCODXSwAZd22JZstU1UPLWaug0pLYunx52pcTKYdxMg4PNinS%2FbnxS3vlT7UnBCjNZV5bkf4kR5zSFTKC4N2vdlqrNDzlC%2BxUHqpcAWjxSqh3ydZJ6yOdPnxTlbUVb5YcDra4ymLgS8KQ7kdB%2BZE4Vj7PDqcDevKBsiXzGKU3xvYBPupfxf9qYub%2FgkCWq3WNNtSZ84b62zJ8g%2Fi1Nl8VXpv2DTsXRkWPNg%3D%3D
          " alt="logo-sm">
        南南道路駕駛</RouterLink>
      <div class="dropdown">
        <button class="navbar-toggler" type="button"
        role="button" data-bs-toggle="dropdown" aria-expanded="false"
        aria-label="Toggle navigation">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725246017460.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pGmK%2FgSnuPV4iYVfzC3tfdxqjKKcod4oillqZknFexNrWZYjbFFrtu9bugwoaWBMwVX1hw9EN%2ByfREXFk1CKpCU2%2BAfbMQK%2FcGmJy37kQNbDiq48h4%2BgrMxPnVSnop8DtgZkwGg9UmHNgccipVk%2FR5Hq3HIx8kdhPeLTgpPD8CzlGO2RW0LiXEpilduyqmu3jcr%2BAIv3ePIHwQg7TMV%2FZIc0Q02h5f4J3mYRpTs6mqsqQ7LPwIpX6SBHdyLZOaNtTp%2BfDmm0IChAOnJ2ghev4JWgREQZoVsGeFj8%2Fhz3tt3OqIsZ2C91GRri1GbFeuPQZuLKt7YxaTMpvtaYF5ngMA%3D%3D" alt="hanburger">
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

  <nav class="d-lg-flex d-md-flex d-none
  navbar navbar-pc bg-primary fw-bold fixed-top">
    <div class="container d-flex justify-content-center">
      <RouterLink class="navbar-brand nav-hover d-flex align-items-center
      justify-content-center fs-3
      d-grid gap-2" to="/">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180420751.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GklhkUuD6Ur0vIqY3rnQGa2woUnl2YWwQrXQ3CUCcK0tRg5lPWMjfs9VEUYJZqM9K3TDbAbxNbhknJ7zMaGzz2M1S95XsS96SFuURt1vw3845%2FDqnoUjEq6iiLsg%2B72inxrCArwo%2Bmp5ip1riXIEShkQ8r2QpULNM51xQwFLbBNw3B%2BLJmG89FG2T2Axr58x1L7pvpoNV8rjn%2FedHU%2BigKM8SQduZAL7D%2Fatp9gh1y%2FgF4T%2FCFiCtyxshmZppWf62zbJgeVMIk7zU4%2B3nEhplM03JgSwMvdulqBcukvdmNx%2Fv5wYGiL5hk5WLr9OicksGsVN9dI9l0wodblATub%2B0A%3D%3D" alt="logo-sm" class="pc-logo">
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
</script>

<style leng="scss" scoped>
.dropdown-menu-end{
  top: 160%;
  right: -25%;
  padding: 0 ;
  border: 0;
}
</style>

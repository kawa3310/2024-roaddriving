<template>
  <HomeNavbar/>
  <div class="banner">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">
        <div class="banner-title text-center text-white">
          <h2 class="pb-7">不再害怕上路</h2>
          <h2>道路駕駛陪你一起<span class="ps-2 text-secondary">上山下海</span></h2>
        </div>
      </div>
    </div>
  </div>
  <section class="carousel">
    <div class="container">
      <div class="text-center text-primary mt-5 mt-lg-9 mb-9">
        <p class="main-title fs-1 fw-bold">
          你害怕的是什麼
        </p>
      </div>
      <div class="d-lg-none d-md-none d-grid gap-5">
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>01</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180627238.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pwc3d1xBc1aw9U%2BbU8hHeLL6ibHWQbPvseEtO7hQsZgeTJrNj1hUKLblvA0ZEUlHYDr%2BMMXKhtrUrxsTLtNBQNM8FxJGoB7jzxjZtUtj04YCss6Sd7qNvb24W8xuFK6xm7dUAD8o76BPifs5pC7Ma%2BgCiG9Lig2Lo%2Fqq1E%2FM7yg2F44zaDPCYx2empFqLpxPHn7ST2ASOQ6eHOUh2c67%2BBrSG%2Fogvj9q6UB5QC6w%2BwjJUtxDnZztXWJK9D8hpxdq7curxR0ozdA%2FN%2F2eYYJ%2BWrbcnrTTpauU7XoFqVDEewh%2FAb3pQ57%2BxbYPFpCY2JHQqga7PbHIUx%2B0QjEE4wwzzQ%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>不會抓車距 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>02</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180654119.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OV5j1zOf4DM%2Bs2SWKL8K3XGGKIZ9IEOM8Qfyy4smQpyfjp4aY16y0OyuplkRdyCz4LQ4rIQ%2FYik%2BUwAHMzqAQz5fUz4QbrCfld1vluTVYZ%2BnL964ZplwDebdgyL879ZSa3IEZTM1H50%2BghkRUUiK%2F4L%2FDLR9Vi2QsPbPX2Mghb9nxLKc3Yu%2FuHGLBHOYMs8xK6wthRk3y09qLxAQA8xOFIzetYnVIAA1FYNmrt0sc2eXj%2FfWLRNxWvY%2BNgYwUBp%2FbkyVgWsEAxmk%2BUnszYMmCXREMwXnyzjI%2FqWV3KpzalZBK9jedRBH04SbD7bOLB4FLrzA3JhEFjEMn3mlmcciyQ%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>不會路邊停車 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>03</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725688273094.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JCROyXT7bmaIeIffsVXh2nsWtSZghl5XfIEf6lCvy%2B55wfAQ%2BP3DQBmEv1sWsh6%2BFx9IluN6Q7st7e8DA0SjLhvoSbSDPTIB%2FCg2d6usKyy0nNXYN9F87PXNEq71nG2HrIdJeyHGbAMuFkTjqy%2F%2BQXXagmksxxpVRUSivUIy%2FFN43xHWjTrXc68EqjF8rENq7SHU1orYxE5AJ93mbcksIbidfmj2mQu%2Bc9erDg0Ik9p5cSlwGKjX%2F9sMzLnJLqxmmb08gxH2%2FsOVApGdz37O1Hu3I7sTMDmhAUSSR2j3hbJ4A4KjKL%2B2Dcs0CgBXPTgUXeqkrh3aNU8WmdqfPWtbIw%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>不會變換車道 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>04</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180717725.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YXUzCzEDoZlZX%2FpDhv4Zw3WNy2YZtVG51Wg%2BnWbqRNvY706c29IuDHkAt2vQvE6OnuWpvpf9B3VZipW%2FY%2BaymRZ7fkXwMyXcRyvd737DTzRhFW%2B9KF%2FWHIdP8XtpR0Tf9ZzFRinBCTcQ0IGK0Qxi%2FHAUeajaAyaVXHq%2FC6P4sJJzCCI%2F11UDWp2ferOPP44fyakfVTMg2q0PBAqUmcB58nQs4iSXb2ARnwsHQlP7zg2HGdkYV9l%2BUfsm9xmupfdma2ksBiHYNcOVm1Pd%2Fwbr6CpOvR7IW0DVSGMCxf6ZB7M71QW7a2ejS3gqAxR0m8PYaj%2B66Df2R6oefqjsXDY9zA%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>不敢上高速公路 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>05</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180744282.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MSqX6zM%2BmzPdXM5FMzWGQ%2F9cGXNqUOHUzzwTiW2kJI%2FEj7ZONGBmkupFt7wUSaTnLJPfy1FY6PICga%2FKokLjEOMkyG3KlXgDnadaYR81rfcDexs%2FaA9SaQ3xuwb3%2BNjyRuTGqGjGmoYcmi%2FKgvtquevGjtTor5MTsIMIFJ853LuyetpwJvUkF2NBBM6PV697IvUrY90N8D3peaLmJE93d39x94O7tdZKu8fdvIiCA3bQ4fcclsEIO%2BJKhu5Ot3zaDRk4UJ3Zcrpj4hDbjcvFKJrbbjLQLDd9TIQuJxcWdundcQ6zfihi0leyhz5lTYm9WvujhIiDINKEnmBvNnWdTg%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>不敢開山路 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>06</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180760925.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AOoQmcST%2BsTWOJ%2Fu8Q5DNCooIt%2BadsMQcfVJ1Oj47LyQYADhCX9ZApSMd3PYpqVlf1RcQohluol6%2BQVUaJ%2BFarvokk%2FJtNBGXjziOZ6ZNqYnybBYbl6xdsdQTulitoEMMlniGf44xmpY5bbxygnJlraLOwiKxBKM4KeEjOSES0ZhmzgXub0HjORF3rp9vFULhOJVoRhJEvXBjLH5m6mOh6U1VQR2V%2FdZ8Qf5%2B5ZQ6D%2FhqWOTklE%2FA6ozMULveQ466Ag2J5m65NWBWpA467CGmddFYOeNJbhiD4%2F0SWeWEzBBXwTH%2Fzms9Rdpoz6EJHNyxBcdLpr9bC20XVo%2B5tyw1g%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>擔心開的不好被戰鬥邀請 ?</h5>
          </li>
        </ul>
        <ul class="col-12 situation-group d-grid gap-7 pb-3">
          <li class="situation-item d-flex justify-content-center">
            <span>07</span>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180804234.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UPTEOgDp9Ydl1HRtTq2m64t5V%2B0jlP00A6qekPr93DsH4%2B1NPC22jetVtrKnUhefP%2F5b0GjI%2BVtrQeD1VsvRB5z9M9IQl9L0Rqr6WGrkQQ0JzF%2BMwdsWMq1QWDOpe5S4vPHNXiLOTmV13DofhtajcX8SelhkSRZcd0fmv5jconTKL1MtjpwcvI4FLWBWI7dYCCaFRyxAYuSXeCP3G5YTPA9Lyp5FUz8QxJvV1zmxGr91zo6eJVaCAzsCA6%2Fh%2BoNXKx1fg2bUzpr9qED4H%2F6xi6Ea9e2Xh5o1lR5gDAvtFLYIJ6LPnWJ5NFoVBm2ex%2BukaduedRlhgpd6Mz4ld3snWg%3D%3D" alt="situation" class="situation-img">
          </li>
          <li class="text-center">
            <h5>擔心旁邊有人碎碎念 ?</h5>
          </li>
        </ul>
      </div>
      <HomeSwiper class="d-lg-block d-md-block d-none"></HomeSwiper>
    </div>
  </section>
  <div class="banner2 mt-lg-9 mt-7">
    <div class="container">
      <div class="pt-9 d-lg-block d-md-block d-none">
        <p class="fs-1 fw-bold text-white">不用怕!</p>
        <p class="banner2-title fs-1 fw-bol text-end text-white">
          我們<span class="text-info px-2">手把手</span>教會你!</p>
      </div>
      <div class="banner2-title d-lg-none d-md-none text-center">
        <p class="fs-1 fw-bold text-white">不用怕!</p>
        <p class="fs-1 fw-bold text-white">
          我們<span class="text-info px-2">手把手</span>教會你!</p>
      </div>
    </div>
  </div>
  <main class="main my-7 mt-lg-9">
    <div class="container">
      <div class="text-center text-primary pb-7 pb-lg-9">
        <p class="main-title fs-1 fw-bold">
          一對一指導
        </p>
      </div>
      <div class="row">
        <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
          <li>
            <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2001.jpg?raw=true" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>擁擠混亂的市區</h2></li>
        </ul>
        <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
          <li>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180856099.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FiUboeylHhHRWESTDLGdDhBhQZaYC6e551i9V9cGzllN%2FFVOsmiet4MpUCJocUhaY8vaaFJWX%2FKOLDfmdxDCU5IMDrw9JMcm7dRt3xvQBuKWZg3%2BiMfP%2BTN4S5w835fdu9qU3JMYpCVUX7BL9BgxQuLPeANrod0cAIm6f%2B%2FYYkUfPufqJ%2FlEGXij5ZM4339vZzJDROO%2FCgQ89cS8v3yamD%2Fz1XuCS0Owy85%2F7zIa626ua38OInOy%2BgrubewYmi9AqYvnxJqoXkzbP4FL4KhoqflfRo2302MoQBa6qcHkT1d6t%2BPGDZk8LiVZaPyVMMCgQMbDjxaEJobVNS71WC4LCw%3D%3D" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>很快的高速公路</h2></li>
        </ul>
        <ul class="col-12 col-lg-4 d-grid gap-3 my-3 mb-lg-9">
          <li>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180898178.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Eyc6ktvITVfvTF8BSXNRExs9TecQcP0ReE%2BNaZzuYv9Cfpwf%2F5Qp5K4DHfUDKMK9NUEhE9vW87mC1cMMMxAEYU1GcciFUFJPeaT47SoCZUxNUa5o%2FfgavuTcam4SsmNylZ1TrYvNJyMoL3GmiycEdW%2FxQxzyA7%2B5X7JDtOJa12gynmL1UdFfoOkdhNx65KlpB6KXauG32w8E7m2rRZpiUUnz8Re8cbilWdEPq8TbtNt1GOTGGlQaAP3JaqN5bjQ4dBv3BruZ5tzpxMycN2eW9IVb5zAHPD%2BlWmAd8izeQ7d8NXzQT4nnIzll%2B42AqdPFmrTF0Lk4Z%2BmU8RJFtN7hYA%3D%3D" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>蜿蜒崎嶇的山路</h2></li>
        </ul>
        <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
          <li>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725366278045.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ffLeFMh%2FLaKmySQ5epvw84i4Ic0e6eXNfcYVUH%2Fd0ngznBugXTfOpS4N43niDA61U5TYMmSBzpl63w4EPGWj%2F%2B77FmyUAqFYSNeWkU8LAcTE0ajRWGE8mZKjW7k8p%2F8feAxaCHktE1EqtXjANr%2Byc8On1jHRTbXChUn1kQw1NM0uefNEGR5hO7QNLhj5wq%2BJ5DCx%2FsqLkXZUujy%2FhbQx%2BVllbLu844SKsGtmxY78%2F5MzmU9%2BO84Uf%2By8hGLkCRNc0Cx%2BZh3gmhMyqoD1HvvGEPSoHiaFfo%2B2W3nTsQxG%2BdsmNnslcRx0iNZwVSSOzBbLUIZJUVwaRlCfIUIbycQWeQ%3D%3D" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>路邊停車大魔王</h2></li>
        </ul>
        <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
          <li>
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725366870154.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ecD7c1mgHLneiFIEwrFI8RshcJs1H%2F6wMi2mHUUoAmB5hXRZIcZy1W8B16vhlgd86%2BL9TTRxv5lY4naMUe8VPIfH4JdiYLyHwQm74kHRWyEkDIFqD8vbs9QQTgOlNhfDL3QTsxT6RMINF8BUN0kAhxoovD6t3xxma85xenvg9dcuZX1b1z905227bxOWK1eHfGDjBZdiPY7pb1aEasqq%2FgI50jEvQ%2BntASCbDg0CW%2Fqt6gbED0kQp42NQRhCNvWphUn4fzGKCiU6Zv6QDjeMUvEwkIpQfKgju9jnmgArHZSTygO%2BfNvtzncgCzhRkV30SoaZSMgRQwk1iOyOuYw9Gw%3D%3D" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>倒車入庫二魔王</h2></li>
        </ul>
        <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
          <li>
            <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2006.jpg?raw=true" alt="carousel" class="carousel-img">
          </li>
          <li class="text-center"><h2>抓不準變化車道的時機</h2></li>
        </ul>
        <div class="button d-flex justify-content-center justify-content-lg-end mt-3 mb-5 my-lg-8">
          <button type="button" class="btn btn-primary d-flex justify-content-center
          align-items-center text-white">
            還想看更多<i class="bi bi-arrow-right-circle ps-2"></i>
          </button>
        </div>
      </div>
    </div>
  </main>
  <section class="tips mt-9">
    <div class="container">
      <div class="text-center text-primary pb-8">
        <p class="main-title fs-1 fw-bold">課程特色</p>
      </div>
    </div>
    <div class="carousel-feature">
      <div class="container">
        <div class="feature-sm d-lg-none">
          <ul class="feature-card d-grid gap-3 py-7">
            <li class="card-img">
              <span class="problem rotate">這些都不是問題!</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180929544.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JVmVQUkZmpTViCaXd%2BZnfqdww0rWbWT%2BWwt8dK%2BN2McjrQoO%2B4lj26cE7X6AG6ShiNBh6w%2F4LNe2pF7uH8tC3E2tECmk0VfDjSU8NfhUdc7W1e%2BCADiadP7FJf7fI7x1kadehA7moVuUdyrOA7mob8i5ZbhMmNcC7qkQLUwv2eQZPNf4MD%2BU06iz5CltoRaKRTCOwPdMNBpua%2BFlBlSv2n29enWa819ImtT3T0qehAw3YYblKEAfTb84oq5LOJ34BU5LOgMOA%2BQgD9Np%2FC0J2J34GYR1Q0oD0L9eZRYC3g7xtdEsDq%2BJu1rQtS%2BY%2FYTGNTYdZVgs%2FXfcx%2B3jstgQag%3D%3D" alt="feature">
            </li>
            <li><h3 class="fw-bold text-center">教練一對一細心教學</h3></li>
            <li class="text-center text-white fw-normal d-grid gap-2">
              <p>還在因為不會抓車距導致偏離車道?</p>
              <p>右轉時機車貼好近讓你膽戰心驚?</p>
              <p>老是抓不到左轉的時機?</p>
              <p>掌握不到停車的訣竅讓你頭好痛?</p>
            </li>
          </ul>
          <ul class="feature-card d-grid gap-3 py-7">
            <li class="card-img">
              <span class="straightway rotate">立即預約</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180956787.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OJjlo8kiL%2F2H4eveDxEEYuITnPrCrTZfW%2B8MndZXpQcFUc%2BIBwKXZwnkcVCGFvIFFQ3kFl%2BDSdieQGXIYzBboI0MvJXt0lVOFX0m4Vy%2BdrJruRGqJ0xX9Iptt2uuSIk4Wq3A99anVA%2FQf9VFxDF7QotHyrURh0BJ0aQqmWsNVO8yHKe2OuPdD45bn8%2FvMZ46u9dsjhnNWRHxJiz6x3XNbMuGho55VMSGuMKG285uhTKs0EHhTJ2iXjxUJHmvzsojCHMxESuB1RiYpPwNLyCm%2BOEC1ZSTCPEpdLjSBhex0sYgpEJ9%2BgK6LuTLfcuiTcuTeLtiYCUaBMwRc5v%2BWpRmvg%3D%3D" alt="feature">
            </li>
            <li><h3 class="fw-bold text-center">彈性的上課時間</h3></li>
            <li class="text-center text-white fw-normal d-grid gap-2">
              <p>時間有限</p>
              <p>工作排班制休假不固定</p>
              <p>上班族朝九晚五</p>
            </li>
          </ul>
          <ul class="feature-card d-grid gap-3 py-7">
            <li class="card-img">
              <span class="complete rotate">內容最完整</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180986228.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AzioSbDAlckkgWTDJmr5sho0ywY6XR6lH54CWB%2Ftm9Ic2yRECNoWAhnu6k3FCVAZAw6lnhutQXYXe9flWu%2BxX7VkgC3F6KyzCCl2iovVUs4WJ%2BZgb2Mgl%2FuHmpfLMec9L8Jcd1NOFNuFuZvX3AF0%2BvCuvCx%2FC5%2BRkwk4JkIO4hg9WUS3%2B92Vg34%2Fc3VPPBlsZBHcFeg%2F6h8eqNN1SKMlen3jK6YNFbbBi6Jgd0PQPruZ64DW5t%2BjogidaJyODFtlxOuZS32SetAs36a6qH63LlUG4lKZ8ppLyWiePMlxri8jdi4FBZLsSXMVB467kVTLm2%2FUs2Ia6e4URe9YiszZew%3D%3D" alt="feature">
            </li>
            <li><h3 class="fw-bold text-center">客製化課程</h3></li>
            <li class="text-center text-white fw-normal d-grid gap-2">
              <p>無論是從零開始的初學者</p>
              <p>還是想要針對弱點進修的老手</p>
              <p>我們都提供內容豐富可客製化的課程</p>
            </li>
          </ul>
        </div>
        <div class="feature-pc d-lg-block d-none">
          <div class="d-flex flex-column justify-content-center">
            <div class="feature-card d-flex
            justify-content-center align-items-center d-grid gap-3">
              <div class="feature-top">
                <div class="card-img">
                  <span class="problem rotate">這些都不是問題!</span>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180929544.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JVmVQUkZmpTViCaXd%2BZnfqdww0rWbWT%2BWwt8dK%2BN2McjrQoO%2B4lj26cE7X6AG6ShiNBh6w%2F4LNe2pF7uH8tC3E2tECmk0VfDjSU8NfhUdc7W1e%2BCADiadP7FJf7fI7x1kadehA7moVuUdyrOA7mob8i5ZbhMmNcC7qkQLUwv2eQZPNf4MD%2BU06iz5CltoRaKRTCOwPdMNBpua%2BFlBlSv2n29enWa819ImtT3T0qehAw3YYblKEAfTb84oq5LOJ34BU5LOgMOA%2BQgD9Np%2FC0J2J34GYR1Q0oD0L9eZRYC3g7xtdEsDq%2BJu1rQtS%2BY%2FYTGNTYdZVgs%2FXfcx%2B3jstgQag%3D%3D" alt="feature">
                </div>
                <h3 class="fw-bold text-center pt-3">教練一對一細心教學</h3>
              </div>
              <div class="text-white fw-normal d-grid gap-3">
                <p>還在因為不會抓車距導致偏離車道?</p>
                <p>右轉時機車貼好近讓你膽戰心驚?</p>
                <p>老是抓不到左轉的時機?</p>
                <p>掌握不到停車的訣竅讓你頭好痛?</p>
              </div>
            </div>
            <ul class="feature-card d-flex justify-content-between d-grid gap-lg-3 mt-5">
              <li class="d-flex justify-content-center align-items-center">
                <div class="text-white text-end fw-normal d-grid gap-3 pe-3">
                  <p>時間有限</p>
                  <p>工作排班制休假不固定</p>
                  <p>上班族朝九晚五</p>
                </div>
                <div class="pyramid">
                  <div class="card-img">
                    <span class="straightway rotate">立即預約</span>
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180956787.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OJjlo8kiL%2F2H4eveDxEEYuITnPrCrTZfW%2B8MndZXpQcFUc%2BIBwKXZwnkcVCGFvIFFQ3kFl%2BDSdieQGXIYzBboI0MvJXt0lVOFX0m4Vy%2BdrJruRGqJ0xX9Iptt2uuSIk4Wq3A99anVA%2FQf9VFxDF7QotHyrURh0BJ0aQqmWsNVO8yHKe2OuPdD45bn8%2FvMZ46u9dsjhnNWRHxJiz6x3XNbMuGho55VMSGuMKG285uhTKs0EHhTJ2iXjxUJHmvzsojCHMxESuB1RiYpPwNLyCm%2BOEC1ZSTCPEpdLjSBhex0sYgpEJ9%2BgK6LuTLfcuiTcuTeLtiYCUaBMwRc5v%2BWpRmvg%3D%3D" alt="feature">
                  </div>
                  <h3 class="fw-bold text-center pt-3">彈性的上課時間</h3>
                </div>
              </li>
              <li class="d-flex justify-content-center align-items-center">
                <div>
                  <div class="card-img">
                    <span class="complete rotate">內容最完整</span>
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180986228.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AzioSbDAlckkgWTDJmr5sho0ywY6XR6lH54CWB%2Ftm9Ic2yRECNoWAhnu6k3FCVAZAw6lnhutQXYXe9flWu%2BxX7VkgC3F6KyzCCl2iovVUs4WJ%2BZgb2Mgl%2FuHmpfLMec9L8Jcd1NOFNuFuZvX3AF0%2BvCuvCx%2FC5%2BRkwk4JkIO4hg9WUS3%2B92Vg34%2Fc3VPPBlsZBHcFeg%2F6h8eqNN1SKMlen3jK6YNFbbBi6Jgd0PQPruZ64DW5t%2BjogidaJyODFtlxOuZS32SetAs36a6qH63LlUG4lKZ8ppLyWiePMlxri8jdi4FBZLsSXMVB467kVTLm2%2FUs2Ia6e4URe9YiszZew%3D%3D" alt="feature">
                  </div>
                  <h3 class="fw-bold text-center pt-3">客製化課程</h3>
                </div>
                <div class="text-white fw-normal d-grid gap-3 ps-3">
                  <p>無論是從零開始的初學者</p>
                  <p>還是想要針對弱點進修的老手</p>
                  <p>提供內容豐富可客製化的課程</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="teachers mt-7 mb-7 mt-lg-9">
    <div class="container pt-8">
      <div class="teachers-sm d-lg-none d-md-none">
        <div class="text-center text-primary pb-4">
          <p class="main-title fs-1 fw-bold">
            北中南最優秀的師資
          </p>
        </div>
        <div>
          <div class="area pt-8">
            <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="teachers-img">
                <div class="bg-yellow">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181000114.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ULspeUkNFmbPwqvNkURLO2xc09xiKJKUlgDzPwtks5lpt6ckLZQcXj8O%2Fy%2Be7UjGWrn28if9SdDKC3xAfO3nFNc%2F7ft9sqE%2BJpfDaV4z%2F8RNq40V5%2F6gpJqVbH4QUuOnZr5kg36H2g5mpn0np1gTld8TEiWUo08XuDqilA7FYIzfBv2X2YtJYyg4T7o2nsejqtsgQCTgjrP8e9k3y1p2TFuu%2F557fyyy8KMgu64218YbBf0efZkOR6%2BDXTDsggeSdlUB3sxeUPi7xAcWkQVkUM4eerLAUB0%2BXUKc%2Flkm15N3Cbnxth%2Btzhj%2FWGkcCYTPW5mVYWSE%2F2oAhB0KKu2Q9w%3D%3D" alt="teacher">
                </div>
              </div>
              <div class="teachers-body pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h3 class="teachers-title">吳三寶 教練</h3>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>小台北駕訓班 5 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>新北竹駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>開運駕訓班 主任 5 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="area pt-8">
            <button type="button" class="btn btn-primary text-white fs-4 fw-bold">中部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="teachers-img">
                <div class="bg-blue">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181044785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sy9N8e1n8zeM%2FHGv%2Bba0cc4fdRQ4EW%2B8G6dFyY6f0vIVkKKzz12QVjdoengkHBsYVjUInnv1cGnHmzkkbzPrSDu%2FVJwx4oO7NyoSjJu6S%2FHC9sm1V0OAwUgdXURCumCItfG4NDLd%2Fm8Lc7%2FlgbQk0ep9yU7A0E4Wai9sOYkLpqIBy6Ec4DpAVCi7rnCWqaaRnXQjnsLWkD6flqFHRjfXBipdQxD%2FARCBZ7wlwJ9GWRcemMdbl8ctpqAJscGKSgfuA%2FnuVvGZhQiLvg%2B%2FVvZtO0jHWm9JzkkyAtCyZiKzgTxg28ogWueFtMf%2BNQ6DAbTzwiFwdvMRM5VOwAg%2BqZWykw%3D%3D" alt="teacher">
                </div>
              </div>
              <div class="teachers-body  d-lg-none d-md-none pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h3 class="teachers-title">郝安銓 教練</h3>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>台中中駕訓班 2 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>彰化圓駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>開開駕訓班 4 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="area pt-8">
            <button type="button" class="btn btn-secondary fs-4 fw-bold">南部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="teachers-img">
                <div class="bg-yellow">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181024527.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ei13M0Q3AEd7DeG5o%2Bc%2FVa1eQ63u9li%2BjaImCzVcU6DIcJRk6UDYPQQJsL%2B27xhXyqKlsl4qBlJLWiSna8Qq1aL3zTiPYfJqB8A1MCW2xKygD3kqb51RbzCJ97%2BL%2BMLanpTSgiRLltXa0lelX8JwiVUlPNE8Mwm%2FB7SC7s315bs0XdFhttfzGXtsCHCd6GGA2L13jQZtzetvZPq3Op21wJeIlTqEJLkEr3464PhypbOOS3U5CHTL5Hgy%2Bal5ScZd4sFGmz0TUZs%2FDtdtpngB1n5uEmaqBKbzYzJExzJijfor1OAv%2BPCEdm56GmVF5sXs8hJXu1zw0eHP0ywBArrnjg%3D%3D" alt="teacher">
                </div>
              </div>
              <div class="teachers-body d-lg-none d-md-none pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h3 class="card-title">甄卉葶 教練</h3>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>大高雄駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>南台駕訓班 1 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>墾丁駕訓班 6 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="teachers-pc d-lg-block d-md-block d-none">
        <div class="text-center text-primary pb-4">
          <p class="main-title fs-1 fw-bold">
            北中南最優秀的師資
          </p>
        </div>
        <div>
          <div class="area pt-8">
            <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="col-7 teachers-img">
                <div class="bg-yellow">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181000114.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ULspeUkNFmbPwqvNkURLO2xc09xiKJKUlgDzPwtks5lpt6ckLZQcXj8O%2Fy%2Be7UjGWrn28if9SdDKC3xAfO3nFNc%2F7ft9sqE%2BJpfDaV4z%2F8RNq40V5%2F6gpJqVbH4QUuOnZr5kg36H2g5mpn0np1gTld8TEiWUo08XuDqilA7FYIzfBv2X2YtJYyg4T7o2nsejqtsgQCTgjrP8e9k3y1p2TFuu%2F557fyyy8KMgu64218YbBf0efZkOR6%2BDXTDsggeSdlUB3sxeUPi7xAcWkQVkUM4eerLAUB0%2BXUKc%2Flkm15N3Cbnxth%2Btzhj%2FWGkcCYTPW5mVYWSE%2F2oAhB0KKu2Q9w%3D%3D" alt="teacher">
                </div>
              </div>
              <div class="col-4 teachers-body pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h2 class="teachers-title">吳三寶 教練</h2>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>小台北駕訓班 5 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>新北竹駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>開運駕訓班 主任 5 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="area pt-8">
            <button type="button" class="btn btn-primary text-white fs-4 fw-bold">中部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="col-4 teachers-body pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h2 class="teachers-title">郝安銓 教練</h2>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>台中中駕訓班 2 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>彰化圓駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>開開駕訓班 4 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-7 teachers-img">
                <div class="bg-blue">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181044785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sy9N8e1n8zeM%2FHGv%2Bba0cc4fdRQ4EW%2B8G6dFyY6f0vIVkKKzz12QVjdoengkHBsYVjUInnv1cGnHmzkkbzPrSDu%2FVJwx4oO7NyoSjJu6S%2FHC9sm1V0OAwUgdXURCumCItfG4NDLd%2Fm8Lc7%2FlgbQk0ep9yU7A0E4Wai9sOYkLpqIBy6Ec4DpAVCi7rnCWqaaRnXQjnsLWkD6flqFHRjfXBipdQxD%2FARCBZ7wlwJ9GWRcemMdbl8ctpqAJscGKSgfuA%2FnuVvGZhQiLvg%2B%2FVvZtO0jHWm9JzkkyAtCyZiKzgTxg28ogWueFtMf%2BNQ6DAbTzwiFwdvMRM5VOwAg%2BqZWykw%3D%3D" alt="teacher">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="area pt-8 pb-4">
            <button type="button" class="btn btn-secondary fs-4 fw-bold">南部</button>
          </div>
          <div class="mt-5">
            <div class="row justify-content-center align-items-center">
              <div class="col-7 teachers-img">
                <div class="bg-yellow">
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181024527.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ei13M0Q3AEd7DeG5o%2Bc%2FVa1eQ63u9li%2BjaImCzVcU6DIcJRk6UDYPQQJsL%2B27xhXyqKlsl4qBlJLWiSna8Qq1aL3zTiPYfJqB8A1MCW2xKygD3kqb51RbzCJ97%2BL%2BMLanpTSgiRLltXa0lelX8JwiVUlPNE8Mwm%2FB7SC7s315bs0XdFhttfzGXtsCHCd6GGA2L13jQZtzetvZPq3Op21wJeIlTqEJLkEr3464PhypbOOS3U5CHTL5Hgy%2Bal5ScZd4sFGmz0TUZs%2FDtdtpngB1n5uEmaqBKbzYzJExzJijfor1OAv%2BPCEdm56GmVF5sXs8hJXu1zw0eHP0ywBArrnjg%3D%3D" alt="teacher">
                </div>
              </div>
              <div class="col-4 teachers-body pt-4">
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3">
                    <div class="d-flex">
                    <h2 class="card-title">甄卉葶 教練</h2>
                    </div>
                    <div class="d-flex">
                      <span class="text-light text-end">資歷</span>
                    </div>
                    <div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>大高雄駕訓班 3 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>南台駕訓班 1 年</p>
                      </div>
                      <div class="d-flex justify-content-start">
                        <div class="car-icon"></div>
                        <p>墾丁駕訓班 6 年</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="textbook mt-7">
    <div class="text-center text-primary py-7 py-lg-9">
      <p class="main-title fs-1 fw-bold text-center">上課使用車種</p>
    </div>
    <div class="textbook-sm container d-lg-none d-md-none mt-4">
      <p class="fs-5 text-center pt-3">Honda HR-V</p>
      <div class="py-7">
        <div class="pb-3">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181077626.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JG17zc0oAag%2F8uCYeWU945y%2FWLoawYGKhS90erH5f45xXLUBjWTAMIj9XFE3nquKR6SlZo7YAd3tbKTdQ%2FRTlrq59rRHZB8IXSuPAXFo7OTUbhPeAlwDQHZ06R%2BuGgipoPFDROHiymvGQS8NBD%2BpQhlIL%2FjE9pPWIHcqkYKsxOJR07fv2RC88LuoAeWzB1g9t8rx5D4wk7Z5kxuDBddCHRPCNz1B5StLMhw7sCCjC%2Fp9yYDkQk93WVIuiukPud2%2FnPdYN8s0bvh40Rz2nFydAjviwOoY65hbEDyWcneiyyKu2HOVxAXjE9H1abFXkhwJaAmNTv8C4%2BSHYOZJlQMtBQ%3D%3D" alt="textbook-car" class="textbook-car-img">
        </div>
        <div class="py-3">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725625497932.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sfg64VSxfZzaPdofM0W2vP5iOURwzMFOCtAM22e6Zuq4g3nRAvfJ3e9bI1O%2B3q5lxUTbdLdjn%2FxFPx0yVXROHe6F0Ilj72WqbYDK9xFoz7DCBp0%2FH6iTsAxOcXZRdMRknzxdN1tZtyoh5qqpv29agHpuCwg%2FWHwmu7ukEmnE3HIGiOHMXu1b1UNzVWBwuHGoMt7578%2BjhplqksfguAQI0pz%2FknQuaj5dfZSK82qNeMH0Wdmvx1J7qauYXb43NkkstPOMumb7fy%2F5Mw7ZRH3DPNlIMfB2FrM5EgPAH5F05X4hS5OT98mG8gcfP6RaKyFuoTI7mqUdCWIi1LSTSR0UCw%3D%3D" alt="textbook-car" class="textbook-car-img">
          <div class="d-flex justify-content-center py-3">
            <div class="car-icon"></div>
            <p>每款車輛搭配副駕駛座煞車</p>
          </div>
        </div>
        <div class="py-3">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725625716596.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q8TPbkasrAEaZ0hryGGampcOEdTjpbsQGjF9YtO9bCMj8ErTwwdw5a0S%2BToGqHchehHLKFyJmMvpkRV6E6Jo4j4MtUV%2Feo5%2FEPKLhNbn4IGPYZYFEa0fleonHs8qq5g7e1p7%2B6n3wRGPSS2pH26MgjXHFkYtvzu0BBuxeD%2BYgjPBv7r%2B6m9k%2Fl3CUYgKXavO0QCBfmjTMQWdFUe3SBz84Ayfaax6Wns%2F%2F9oyBIkI55ujD38vIx%2B62%2FxGmmPWI7TXBdfvS7EeSuduH3xi7xZ41kPaRgVGjSL0FM06AMwj%2F3DlRrEedcZQ1SRlAhymETH4V0viIA9IOqbiu5ft0z0GXg%3D%3D" alt="textbook-car" class="textbook-car-img">
          <div class="d-flex justify-content-center py-3">
            <div class="car-icon"></div>
            <p>車輛搭載 ACC 車道置中</p>
          </div>
        </div>
        <div class="py-3">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181148069.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jjEP26BrdWaZ%2BhgeUCnT%2FqFMf2VxIb%2BLgxDQPIDYgl8uAnULdt9RHeiggASzOoUgpGwj%2BuomqDJiXquN03ird4mLLTi5Q7aR%2FjnDhp9B%2BiSYazzzsD16jIf3boJo60wl%2BXsYL9eThUQSVCffrw0AlDEHKXQ%2BcT%2Fpim%2B0rBjX5TaGX4MpuyvAykfnWQVEI9cMXxBdbDXW9e1v%2FEneD4Kqay9%2B%2BFQYPuDWtvAB2E1LRXTtm%2B3Ri7%2BXn2x5xrGbZTVPLuz5uJ18%2FgYYspG4LtKkFnn234EbwehpuVZn3ePwDXAvgqSlfrnuGzFcuB01SJagg4yqakc7Q36k5vPzzk%2BX3A%3D%3D" alt="textbook-car" class="textbook-car-img">
          <div class="d-flex justify-content-center py-3">
            <div class="car-icon"></div>
            <p>倒車顯影</p>
          </div>
        </div>
      </div>
    </div>
    <div class="textbook-pc d-lg-block d-md-block d-none">
      <p class="fs-5 text-center pt-3">Honda HR-V</p>
      <div class="mt-4">
        <div class="bg-wave">
          <div class="container">
          <div class="d-flex">
            <div class="position-relative pb-9">
              <div class="d-flex justify-content-center">
                  <div class="textbook-card bg-white">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725611300231.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V430yT8eMALqA%2Fhf7FXv9ksTdfNFHV0X6f7%2FDhfBfRQD0BlgWpU%2F2tAwHouPf4el9HrWpnpL3wVQHw%2BV7mTDRHOr%2BOOk2xZb%2BdGZCa88jD08muJ0EgYbBkhVzGgs45KwcFvH6DSpyKBNxlIfVgCeC%2FdSUOeaE1lrIAhTi%2BFEGxcvc4MWc%2FR7fxlIgl6A1MQmIq4%2FyloEZmS1cQ1CpP2OnPrzzoaguRiXec4L%2Bd9O8gogAiHJzb3SzXgnnIonb1ccU8Hzcw96ajQZPf9Ne9cYJ8HIjMjcEQle6Qk13vsFF5gu%2FwRSCcWb%2FMOojks0S7XhHMVOwXbmTBEa7m71f4PYHw%3D%3D" alt="textbook-car" class="card-img">
                  </div>
                </div>
                <div class="row pt-7">
                  <div class="col-4">
                    <div class="card">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725625497932.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sfg64VSxfZzaPdofM0W2vP5iOURwzMFOCtAM22e6Zuq4g3nRAvfJ3e9bI1O%2B3q5lxUTbdLdjn%2FxFPx0yVXROHe6F0Ilj72WqbYDK9xFoz7DCBp0%2FH6iTsAxOcXZRdMRknzxdN1tZtyoh5qqpv29agHpuCwg%2FWHwmu7ukEmnE3HIGiOHMXu1b1UNzVWBwuHGoMt7578%2BjhplqksfguAQI0pz%2FknQuaj5dfZSK82qNeMH0Wdmvx1J7qauYXb43NkkstPOMumb7fy%2F5Mw7ZRH3DPNlIMfB2FrM5EgPAH5F05X4hS5OT98mG8gcfP6RaKyFuoTI7mqUdCWIi1LSTSR0UCw%3D%3D" alt="textbook-car" class="card-img">
                      <div class="card-body d-flex justify-content-center">
                        <div class="car-icon"></div>
                        <p>每款車輛搭配副駕駛座煞車</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725625716596.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=q8TPbkasrAEaZ0hryGGampcOEdTjpbsQGjF9YtO9bCMj8ErTwwdw5a0S%2BToGqHchehHLKFyJmMvpkRV6E6Jo4j4MtUV%2Feo5%2FEPKLhNbn4IGPYZYFEa0fleonHs8qq5g7e1p7%2B6n3wRGPSS2pH26MgjXHFkYtvzu0BBuxeD%2BYgjPBv7r%2B6m9k%2Fl3CUYgKXavO0QCBfmjTMQWdFUe3SBz84Ayfaax6Wns%2F%2F9oyBIkI55ujD38vIx%2B62%2FxGmmPWI7TXBdfvS7EeSuduH3xi7xZ41kPaRgVGjSL0FM06AMwj%2F3DlRrEedcZQ1SRlAhymETH4V0viIA9IOqbiu5ft0z0GXg%3D%3D" alt="textbook-car" class="card-img">
                      <div class="card-body d-flex justify-content-center">
                        <div class="car-icon"></div>
                        <p>車輛搭載 ACC / 車道置中</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="card">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181148069.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jjEP26BrdWaZ%2BhgeUCnT%2FqFMf2VxIb%2BLgxDQPIDYgl8uAnULdt9RHeiggASzOoUgpGwj%2BuomqDJiXquN03ird4mLLTi5Q7aR%2FjnDhp9B%2BiSYazzzsD16jIf3boJo60wl%2BXsYL9eThUQSVCffrw0AlDEHKXQ%2BcT%2Fpim%2B0rBjX5TaGX4MpuyvAykfnWQVEI9cMXxBdbDXW9e1v%2FEneD4Kqay9%2B%2BFQYPuDWtvAB2E1LRXTtm%2B3Ri7%2BXn2x5xrGbZTVPLuz5uJ18%2FgYYspG4LtKkFnn234EbwehpuVZn3ePwDXAvgqSlfrnuGzFcuB01SJagg4yqakc7Q36k5vPzzk%2BX3A%3D%3D" alt="textbook-car" class="card-img">
                      <div class="card-body d-flex justify-content-center">
                        <div class="car-icon"></div>
                        <p>倒車顯影</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeNavbar from '@/components/HomeNavbarComponents.vue';
import HomeSwiper from '@/components/SwiperComponents.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    HomeNavbar,
    HomeSwiper,
  },
};
</script>

<style lang="scss" scoped>
  .banner{
    background: url('https://github.com/kawa3310/2024-roaddriving/blob/main/public/Banner.jpg?raw=true') no-repeat center center / cover;
    width: 100%;
    padding: 173px 0;
    .banner-title{
      h2{
        font-size: 5vw;
      }
    }
  }
  .banner2{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725347170911.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nRB5Gha%2BcqVusHB51s99Hmg%2FE77qtWlMrM3Mt0Y29lpT%2FFCI%2BrkXa2mEVdtEGHIJyKWRKp1IE3lxSe2utmPy6sM6n1SPAhndtHsy19avYLk74Um9dDLP2FtYW6HfZ55piwOMBUYz52qODUXSslMzeBpD0ba3K9%2Fpvc1AsAyt%2FQeDDofC3BY8Le%2BrppWhRGeWUPPEdmUADAf7a7FZoFz4Eei3U6E8SiwsTbKhOpsBTHhD1Q5a54bgiQh3HTxfQNQ1zkfjufY6OpztNtwE1rmgUV86grnC%2BiS64b%2BSKbFsYttwMZ0JaI4HE9Q8flqTBlrqxg1Euzvyzm2TrpRMtMBteA%3D%3D') no-repeat center center / cover;
    width: 100%;
  }
  .banner2-title{
    padding: 160px 0 86px 0;
  }
  .main-title{
    position: relative;
      &::before{
        content: "";
        width: 100px;
        border-bottom: 8px solid #F6E6AF;
        border-radius: 50px;
        left: 46%;
        bottom: -30%;
        position: absolute;
    }
  }
  .carousel-img{
    height: 360px;
    border-radius: 16px;
  }
  .button{
    button{
      padding: 12px 24px 12px 20px;
      border-radius: 12px;
    }
    i{
      font-size: 20px;
    }
  }
  .carousel-feature{
    background-color: rgb(91 170 223 / 70%);
  }
  .feature-card{
    justify-content: center;
    margin-bottom: 51px;
    .card-img{
      max-width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 16px solid #5BAADF;
      border-radius: 500px;
      background-color: #fff;
      position: relative;
    }
    span{
      position: absolute;
    }
    .problem{
      top: -8%;
      left: -15%;
      transform: rotate(5deg);
    }
    .straightway{
      top: -3%;
      left: -9%;
      transform: rotate(15deg);
    }
    .complete{
      top: -8%;
      right: -15%;
      transform: rotate(-15deg);
    }
  }
  .rotate{
    font-size: 24px;
    font-weight: 700;
    background-color: #F6E6AF;
    border-radius: 8px;
    padding: 8px 16px;
  }
  .car-icon{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193336922.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rEt%2F%2Bx%2FdZV2tA3XgYP39vzI%2BkKGba8P1BjY%2BJh45ZtoM%2Fepy0MDovdG%2FFQUe0ATRqb9SnvDsv7igrrUpohi25iwXOLhjLcTuPA5Hi4yaMKlqHAXtBh4G45v1%2FbbHFfuwpVfdUHHeKUFd2ypMVAllQ5P4BiJhWf087%2F6zOkBUi8svBGN4xSFfxkfcbyayRzOLJZD1Eq6GSoJmR2JssEZJN%2Fc6rOF51d9IoLmW8ULfsIKBmW6gEAWJSjDkKU6HDKLgC5E0ay7Jko9sMPUmGwYDFMqd3jFuNwMGygIqUXU1PS278R%2Bda4dXjz032UIQEPExMIyIB31cJTmC%2BI7KsoE1%2Fg%3D%3D') no-repeat;
    width: 32px;
    height: 32px;
  }
  .bg-yellow{
    display: flex;
    justify-content: center;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725457534402.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dsoti3GD4I300gaDrBc%2BwBb5NDvj2wnSYWqMYBGafXZU9RSyIg9uvc0TQB3rrS%2FQPHOL7sJzRUqqKBsXVFC8Hp5i%2BOw06HWjn3A1eNtX1bLtnMp2IGInKNvWd5MfXie0jWeDtsaRpjS27WUJ6nSphi6gVhkjRrTnSdEcF5nFcaYHZNgYchKcvzTptDf5AT2oKYjGjI4KmJRAn8jGiAWUpGP%2Bhndc1VQogxA%2Fr6KHmo7ZOTGM2%2FP4uPZQV8NNyfTlSRvYqyJY5gUv%2BA2tOFwc4Uiii9JzEZeReVkaOZcEAfJUlQhQLZd%2Bkq%2BMXa1FYb8ZmxI4kw6lI76%2F6TnJoiZIAg%3D%3D') no-repeat bottom center / 100% 100%;
      width: 80%;
      height: 83%;
      bottom: 0%;
      border-radius: 16px 16px;
    }
    & img{
      position: relative;
    }
  }
  .bg-blue{
    display: flex;
    justify-content: center;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725457559562.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=THwU6x01t94Tk%2Bo0NxFyWB6vPqECVO57oX0TgcEgGalaUt1j0eYt%2BNAM1dURw8JH9d4GmR7YQvK%2FkhT3CnZAoVJw83Pj%2FkK3KdIak5bmhv0B66GkP44cjHCqSwu8MxzeS1UV9vBuTgiUfuJxJFa0aZj0kI1HXYUT%2F7anfg7Al%2B3wYHKconsJmvso%2FrGQ2nuvM1zbm6NG6YTrq%2BKawX7BUzfq1MsjSXUWsAeiDTlEUiO8ortCnFfa%2BY3zAsL2HmJktXyfy2etSC%2B1LtJT2%2BbsK1EN0vUV0%2B%2FrDyAOi9%2Bp5IcDCT%2BIL4Y%2BEzNQqkxo2bnPORlpnSjuDFUiB7dohNTWmg%3D%3D') no-repeat bottom center / 100% 100%;
      width: 80%;
      height: 83%;
      bottom: 0%;
      border-radius: 16px 16px;
    }
    & img{
      position: relative;
      align-items: center;
    }
  }
  .textbook{
    .main-title{
      &::before{
        left: 47.5%;
      }
    }
  }
  .textbook-sm{
    background-color: #FBE4B5;
    border-radius: 50px 50px 0 0;
    & .textbook-car-img{
      max-width: 343px;
      height: 428px;
      border-radius: 16px;
    }
  }
  .bg-wave{
    position: relative;
    overflow: hidden;
    &::before{
      position: absolute;
      content: "";
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181185428.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OteIVLcUQiZj1fNdjz9qJ493nkSvpaIZBQuEmHw4GR6VTlw79Wt5orZn%2BMGDVwyNDBZC0ID2q3ovftqhV%2FIdYyTWwEC%2FJibEUv3ATSXp6p1isF6sZ%2FNVFqK0h345t%2FL8wOzkc14CPfhk7qkqVlVFLGHY8MGSNy4JPVZvGcI2Qp41674sXxaBgfvea3v2I6MBlI0rUKOUTySqFJrYRIbeePZE7AIrgApaLzYlHDEUy9n92KENscE5%2FI2MmsENmtFevyVdJV9NUQ9i6IPlpxFAbmTo2ZlLrGBgiJ%2Ft0COsRg%2BHg7AxiIjqO%2BaWjyBUmrdUWvU6Ahqaa44i5yI%2FhytVRg%3D%3D') no-repeat top left / 100% 100%;
      width: 100%;
      height: 1045px;
      top: 5%;
    }
  }
  .textbook-pc{
    & .card{
      height: 460px;
      border-radius: 16px;
      padding: 16px 16px 0;
      border: 0;
      .card-img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }
    }
  }
  .textbook-card{
    width: 970px;
    border-radius: 16px;
    & .card-img{
      width: 95%;
      height: 90%;
      margin: 0 auto;
      margin-top: 24px;
      border-radius: 16px;
    }
  }
  @media (min-width: 768px) {
    .banner{
      padding: 400px 0 400px 0;
    }
    .carousel-feature{
      position: relative;
      background-color: transparent;
      width: 100%;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725452499118.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lxXd04mtxBC0bY86rZ879mpKp950HQ0R7J8%2FY9SZOzFoYIy7elQs6RLDI32enwGcpZzX85B29dWLPAW01oDLr%2F1gpIi%2F6BGaOZEWAdSLnKxwck%2FizRZZmyvgVnC4kqDJ2bGtvo4lh5H1c3QyOfijrIU7awPtf9%2Fwtc1tvBBX1YfqGGHrpz94pY%2B1xL5tz97yh2EXFUh8wnH%2Be5JnXM1oiBGHMBCxzU9gSDMrAho%2F3vnNVtuEgMIfYMqwutB1rwuSYcbcSdVvhPN7qpwu0%2F3TYTnfweRuQ%2BXoz5lX2%2FNHawnnBDeEk9%2BcEvOGBUmmpNbYDNtbpCSBoi1CBRSiBgbK0w%3D%3D') no-repeat top left / 100% 100%;
      padding: 80px 0;
      .feature-top{
        margin-left: 250px;
      }
    }
    .straightway{
      top: -5%;
      left: -24%;
      transform: rotate(15deg);
    }
    .feature-top{
    position: relative;
      &::before{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725886459407.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aHPbXSaX1lSxH8MoFsODyyA6rkfja0DKuSL0b%2FdsCXdYOfT0o6oCgOo5yHh0B0l63aHz538VzjRAM40AfU6Z8WbAsavfSkdO55904ItYfbxOINd9Pi1j%2Bb0%2BUclHF6TBZUj1fyRwW4SLRoYyJaibu%2BPqvXM%2B9cHtRJPc%2BCGqMflVhGYmP1J2zGVDCzWV3Hk%2Bc9HHb77BCOX92d5bXIdIV5jMZiwVPk3rfXBIWzuIM9CHITQVr%2BN8bEVuMnHuGkU7KbWylz5HfU6NkYYq4oSNl%2BdVPcHMrUZ%2FD%2FGFBhKhAVr%2Bw5hR0a3nt6D%2BpiQ3jgMLsXBeWdmW6NjLlrR4akxnqw%3D%3D') no-repeat center center / contain;
        width: 75%;
        height: 100%;
        left: 90%;
        top: 50%;
        position: absolute;
        transform: rotate(50deg);
      }
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725886459407.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aHPbXSaX1lSxH8MoFsODyyA6rkfja0DKuSL0b%2FdsCXdYOfT0o6oCgOo5yHh0B0l63aHz538VzjRAM40AfU6Z8WbAsavfSkdO55904ItYfbxOINd9Pi1j%2Bb0%2BUclHF6TBZUj1fyRwW4SLRoYyJaibu%2BPqvXM%2B9cHtRJPc%2BCGqMflVhGYmP1J2zGVDCzWV3Hk%2Bc9HHb77BCOX92d5bXIdIV5jMZiwVPk3rfXBIWzuIM9CHITQVr%2BN8bEVuMnHuGkU7KbWylz5HfU6NkYYq4oSNl%2BdVPcHMrUZ%2FD%2FGFBhKhAVr%2Bw5hR0a3nt6D%2BpiQ3jgMLsXBeWdmW6NjLlrR4akxnqw%3D%3D') no-repeat center center / contain;
        width: 75%;
        height: 100%;
        right: 90%;
        top: 50%;
        position: absolute;
        transform: rotate(-50deg);
      }
    }
    .pyramid{
      position: relative;
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725886459407.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=aHPbXSaX1lSxH8MoFsODyyA6rkfja0DKuSL0b%2FdsCXdYOfT0o6oCgOo5yHh0B0l63aHz538VzjRAM40AfU6Z8WbAsavfSkdO55904ItYfbxOINd9Pi1j%2Bb0%2BUclHF6TBZUj1fyRwW4SLRoYyJaibu%2BPqvXM%2B9cHtRJPc%2BCGqMflVhGYmP1J2zGVDCzWV3Hk%2Bc9HHb77BCOX92d5bXIdIV5jMZiwVPk3rfXBIWzuIM9CHITQVr%2BN8bEVuMnHuGkU7KbWylz5HfU6NkYYq4oSNl%2BdVPcHMrUZ%2FD%2FGFBhKhAVr%2Bw5hR0a3nt6D%2BpiQ3jgMLsXBeWdmW6NjLlrR4akxnqw%3D%3D') no-repeat center center / contain;
        width: 85%;
        height: 100%;
        left: 101%;
        top: 0%;
        position: absolute;
      }
    }
  }
  @media (max-width: 768px) {
    .main-title{
      &::before{
        left: 35%;
      }
    }
    .textbook{
      .main-title{
      &::before{
        left: 35.5%;
      }
    }
    }
    .banner2{
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725347170911.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nRB5Gha%2BcqVusHB51s99Hmg%2FE77qtWlMrM3Mt0Y29lpT%2FFCI%2BrkXa2mEVdtEGHIJyKWRKp1IE3lxSe2utmPy6sM6n1SPAhndtHsy19avYLk74Um9dDLP2FtYW6HfZ55piwOMBUYz52qODUXSslMzeBpD0ba3K9%2Fpvc1AsAyt%2FQeDDofC3BY8Le%2BrppWhRGeWUPPEdmUADAf7a7FZoFz4Eei3U6E8SiwsTbKhOpsBTHhD1Q5a54bgiQh3HTxfQNQ1zkfjufY6OpztNtwE1rmgUV86grnC%2BiS64b%2BSKbFsYttwMZ0JaI4HE9Q8flqTBlrqxg1Euzvyzm2TrpRMtMBteA%3D%3D') no-repeat center center / cover;
      border-radius: 8px;
    }
    .banner2-title{
      padding: 83px 0 83px 0;
    }
  }
</style>

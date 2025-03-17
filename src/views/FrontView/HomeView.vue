<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="overflow-hidden">
    <div class="banner">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="banner-title text-center text-white">
            <h2 class="pb-7" data-aos="fade-right"
            data-aos-delay="1000">不再害怕上路</h2>
            <h2 data-aos="fade-left" data-aos-delay="1000">
              道路駕駛陪你一起<span class="ps-2 text-secondary">上山下海</span></h2>
          </div>
        </div>
      </div>
    </div>
    <section class="navigation">
      <div class="container">
        <div class="text-center text-primary mt-8 mt-lg-9 mb-9">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">
            你害怕的是什麼
          </p>
        </div>
        <div class="d-lg-none d-md-none d-grid gap-5">
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>01</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218942343.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=BVp%2B5Fjk%2FqL8ca1CgvN5DeuS5KbxfGlaLhHWWVPsUJm0pX1W1zkb68OHBWALLIc0eybNM0s0%2BOMrHNIbyDb1VC2hRs2xQ5mACcM3fNT%2BNJIDbAYC2LvfkZeyGDWOoMa%2F%2FJtgUJTxvNApsHg41HuJkCR0aLwdVpd3j26jzVU9DzS6mm9HAO9KEzxULAhKkj%2FRgApoGSqVaLlWxc4%2FxyiXrwxcG%2BhJjXFQvwET1rxT1V1BQnhC2R6jIvU8zMN%2BKOcckr3YE86%2FW6UV8JMAVZSgspE7AsQMunES%2FNYc03jXgpSYgE8HXnQopDfsS6IGASL5Ov7WFCv1lwRDRuSJ7I6seA%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會抓車距 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>02</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218974443.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=EpDdhmtLkaltU49i0a9wNlpecl6svC64dYDlaqkQZYsTXy7rQVdYf2aPGdipNP5LpPJum4B0kslBCLbXHGvNbzOEm%2BA4VdtL6%2Fl28BHTvjb7nka9VAAk8xrI37sr1EYTYmDInItsheVVCVGisD3GVO90n%2F1MvPIKwpgdTbp88Wbw7e3QMvdn1MHB65ObGpTzsKWwGA%2BY0LI%2FzlKnqXsq1mQkXPKFE1demyWbruOpMMo9SdMdZh2d0tZGLB%2Fe%2BblbY%2FHonR9RHttEIdRgYKpW2X4Ajnd%2BusdjdqG%2BvClBb9nDup0f87l9gOokkUSkYRbYS8KdCVIgLmCCBhi53kuZoA%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會路邊停車 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>03</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218989788.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=i%2FCaXoAXmtoxaxqXKofSkdcB48kvXajP4J8I5fu1hekJ6dzWXIde6W%2BuvkXT7X6gSerfKIDmdzEi3fGY9Eg1opYPixMZySfuZhD3G5ZHmV1c9QKt6k%2BbQxtyhLcbcqhQM%2FrDbHlBcsrnQIxsmvEMWwZIawsPnXmh8qvzeor9dBhNoUyLb6elCagSv%2BXf3n5f1Ulia5gJg8d2oh%2BF813ieWaBmoUxGw2HFR5OFV5TqlaPL%2BOStz0xY3ExBjtPIt1viOLT7RgnbE3C3hLWuFUD%2BHG8pnIp1baDVrbXsIG%2FZpqL35mIjgAGoIJiBOexeGcZ4pprJnbP%2BPeXANfWoT8tUA%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會變換車道 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>04</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219013792.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=IYth7rga%2FJHCpNUIMLlCSwijIyhsqDrRwDHFCPvLWOSswFx8GgInSFrRN7K%2Fiqhm5n%2Bc536vXsjC74bYNpOiotqob7c%2FfEzZcm5qzg6mDNHmgaI9rclEGdHZ921zOuifGaZ5jpZNEJPqIiggMCO%2B1gEesDGIRfeR2qC3%2FsmI2uoOyO8%2ByEaShkzUjSdoJAQ00oH1nYHvn8yCWeakaKlfKCx64QgtaW4xC%2FoShoAIrrplYEWVYdq4U1VAcHvax4rjASw72fOhngPQT0MZr%2BakOimEGN1BEc5p0n%2F8aOvp8Ym%2FP4Slh4Z8Ju66fwlKxKktFzoNFZDPI4Yp0HPhXEG6EQ%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不敢上高速公路 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>05</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219030088.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=KcKm3BdCuRFiaQ6ISrdgCwQbiYeG5kBxM42xjGO67nxEUt7Mg4ilBMKQxvSrFwcpLlRVbST9H40o8mr66gMzBY5iGKAg4Xias0hrq%2BR%2FyUTWNiCqlnM1ULWVljMU%2BqlHwRoxGt1tEuryzO69af2VRxNDC0MrDs8tshQjVCxefF2y%2Fu8jURfjrHhbixv%2BGwB9FxRCGqkx8e0xWNjPjwob%2Fdf4GeJYNQolptZwrJzhBcT5%2B%2BfH%2FAOjMxHCR%2Fn8dv6gCNCJN48p4yxkMsC%2Bacj5uZqFgDi9HrPwkxy%2FRzXuMsAuD%2BK2qhIJtLJEi3JqxQTqrNMz5DntY8%2FXGHHve%2Bao9w%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不敢開山路 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>06</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219170401.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=d2%2BkKGrKHwje3vYQ3yWIS2ITtIemXUARU7A5xsChvVKyyzjUV%2BX0WDwzF4PdRcEeEjHg2v%2BfQ6mbg7Y0im6s09nHuROhyv%2BMtjL0sHb%2BFI3jLLvHc1TGptxYPiRch6f3c8RBjxt1FenBXaHMMeyHlnDs1lu9ywDV8fkOXtzrVbliZG%2FF8ljwr6TOvosixMueA2Tf2xLgtduTn8P%2BIpC4ENaThPbpaRpVZwMARLWaDQyBDJZmvsLsUa7sXFyFzk5FD8Y%2Fd5%2Bb3LoJgn%2BwVOVqz%2FjarqzDn66nVrSOtvtGRW24fXWGoaR6bTXHBqwgN4TbNdotgDQ9cj68yerA9pSMaA%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>擔心開的不好被戰鬥邀請 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>07</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219066887.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=fO0STfDOjuwK0D84ipnNvs6Q%2BA3mLI45PIjSOt09nORxqM6sx7QIqCxlbMs08hUnxcqqUz3jZwaXyh3YJ%2Fx4qOyibfiSrBPy6xWPDw4pimFZ3qJ1WocVxkt0XqZR26gzwiGdaYAgxo%2BS96uZ7p3aFkJ96qTpMlfPf6BJIhZKGiKooVT1PNFJk36LCCdc0hYO7Awt3ahzDM2FydcoCrlS2FMdlKqg62OG4hlXjiBshImAaegkaRGrRQctuEICRmMAnCjO%2BnQ5rugLtRzqa5dhgA%2FegWBxsdfmL%2BNiBziy1T85CFggH3IRm4qgxcDwAv6T%2BZfKmhWCyMgFfcCsTQQcbg%3D%3D" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>擔心旁邊有人碎碎念 ?</h5>
            </li>
          </ul>
        </div>
        <HomeSwiper class="d-lg-block d-md-block d-none" data-aos="flip-down"
        data-aos-delay="100"></HomeSwiper>
      </div>
    </section>
    <div class="banner2 mt-8" data-aos="zoom-in" >
      <div class="container">
        <div class="banner-word pt-9 d-lg-block d-md-block d-none">
          <p class="fs-1 fw-bold text-white">不用怕!</p>
          <p class="banner2-title fs-1 fw-bol text-end text-white">
            我們<span class="text-info px-2">手把手</span>教會你!</p>
        </div>
        <div class="banner-word banner2-title d-lg-none d-md-none text-center" >
          <p class="fs-1 fw-bold text-white">不用怕!</p>
          <p class="fs-1 fw-bold text-white">
            我們<span class="text-info px-2">手把手</span>教會你!</p>
        </div>
      </div>
    </div>
    <main class="main pt-lg-9 py-8">
      <div class="container">
        <div class="text-center text-primary pb-7 pb-lg-9">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">
            一對一指導
          </p>
        </div>
        <div class="row" data-aos="flip-left"
          data-aos-duration="500" data-aos-easing="ease-in-sine">
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2001.jpg?raw=true" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>擁擠混亂的市區</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220349322.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=hZe0s%2FZ6tjXeb3OGMau%2B7ala%2FWbmV1q8ECl9szop%2Bj93NF%2F9k%2Fq0dYDklz6CaiuXM6xEVo9oe8DT4lcB%2F3NIF5nUyE1N6G6thWsL3WDEYD5tKHZP8mqU%2BBE7evLsRuvk917YrxbvhQZWd6tplIUKymCUuJbNs%2Fi8qti4LyZadHpRBFg8sjxRDS%2FESpK%2Fq%2BNbSz0jng8BSz%2B8gdNpuFJeglVMiEurdnXpwlJ%2BOWYLQ9oV7QUMik5CurzJRONKFTdp6%2F3Oe69cl21aUMDxZYf%2BTCv4hYLB8P82wOHug51vzKyM4iRSQGz6R%2FlJb%2BSGt7vAl5w23R%2FdD9ZRfHEUeYQa%2FQ%3D%3D" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>很快的高速公路</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220384963.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=S%2FgbZYZw444T2cm82b4d4qIS9PfDVvD6lI%2BiTZerZdwlppau80O4FmZ8dcgUNxZbv9O2lT8a%2BYBt3DO32XSkk%2BmoKOKxB5CHJ%2BpYf9nmRrh%2BrMW9Z0%2FjT6KHQPKvzrf9RYpas3TCoBT5UpNqwIh1hl%2FlUKniSE2QyURjNqx2BD0GkyZealWXJzyqrmcLfjKExaDQkTEUELro9OXH5uU5U6cFdJFhrzJRGMjmeC17QwcjtUmjW6JJUauT%2FiPNkzLzl1f%2BkxO5M7AjtlASD8dpAvMDyCQ2Ft0ZOA0wA8RFwaxn7rCSTRzMksM%2FmTMK7X%2FBjhhR2lvN4tyxwBtxptjaJA%3D%3D" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>蜿蜒崎嶇的山路</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220407603.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Nno%2BQIdIPnsde%2BQ8KzukHP8cSLBI4PgYrqaeLl3ALFKwUG%2B7tzGPsiIhAJIoGJMNkwI8k5yQi%2Btd3WUVm3EckxftbWhA8Znl%2BG9iSe%2FpggZqxMWWGdJwWZWu00NR2AXytILgnjSAJYUzaBcymPunIPi0BlofUfWm32csRGyht5oNdds7FbMqRjUxsdZnVo0iA5i7ijq6c6oBXSEBTR3cVpyhPzd9NsYopBbTiUtzNORsxBJJFwbc9WQtPWlhwb9ExBuPQOrYDuWFHxCNVk2AYBHrlLw4XszIE1NNzS5REa8ptbuooz7nNR0XUjIr2SUTTpyh9CwRLqYtKSW3HovCZA%3D%3D" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>路邊停車大魔王</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220452624.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=fWE%2Fw2GuZ5HxjRw2%2FUf6oQEcdD0w4ztB5tTgWyL9A8%2FA2BNgFi2B79pW16HwfWf18I7Nafh0qKvu%2FXstn6Y5Ic5lwR%2FPQR%2BfDCbg6zU9KDNtcoVKa7jH11A4iYnF1oE9i5E1%2FXBD9H1MH9ASk7pro%2BBZFvC%2Fz7GlWL2un%2FKeRyHTtUoA33rJv0u7HbomwIF5anLCWwFHcP2YYzHn%2BHacZ%2Fw81d0HrbhOnPmLIvl7rzCYAodM%2FpQN6Zj5y%2FKibhERiphnQBvHHhEGCvN5L7dApW6nIcIitATf3PSKWbsXX7YSWLB11bwcCnREKkPQw9VgxAP8BE7xltFrzClhdEQ5%2FQ%3D%3D" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>倒車入庫二魔王</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2006.jpg?raw=true" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>抓不準變化車道的時機</h2></li>
          </ul>
          <div class="purchase d-flex justify-content-center justify-content-lg-end mt-3">
            <RouterLink class="btn btn-primary d-flex justify-content-center
            align-items-center text-white" to="/purchase">
            還想看更多<i class="bi bi-arrow-right-circle ps-2"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
    <section class="tips my-lg-9 mt-8">
      <div class="container">
        <div class="text-center text-primary pb-8">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">課程特色</p>
        </div>
      </div>
      <div class="carousel-feature">
        <div class="container">
          <div class="feature-sm d-lg-none">
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-left" data-aos-delay="100">
              <li class="card-img">
                <span class="problem rotate">這些都不是問題!</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222043426.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Gjri%2FI9Wu5%2BORbRDhjN11P2G152iDdBIHOYhD%2B6rRQ8m4oShUqj3245yyyrIiniWZb2S%2FveLy3TH3xhsMNVWNIXzAez0H7RCi3ScGAH6B%2B2b8FPk%2BllgHiBrUngA8zVmbc8cXqkmVaUTrUlqggy32JgDb9Y4HMJhC92fk1HRR2CMPH3Dl8PqrxGyVF24vkbd80LYkoYsteqpwjeZbMg7DlOmhhKo1UR9qUfDwf59KPDvqu4QNvsi5LvyG07JETnqvK14nkbPgElzBM40r1QT7Q3UvWITqwK3DvgeCuTcz2dhKnWV%2B%2BhSdLvQJUsHLXEuBU6Hr56rBAhn5hws6b0Qpw%3D%3D" alt="feature">
              </li>
              <li><h3 class="fw-bold text-center">教練一對一細心教學</h3></li>
              <li class="text-center text-white fw-normal d-grid gap-2">
                <p>還在因為不會抓車距導致偏離車道?</p>
                <p>右轉時機車貼好近讓你膽戰心驚?</p>
                <p>老是抓不到左轉的時機?</p>
                <p>掌握不到停車的訣竅讓你頭好痛?</p>
              </li>
            </ul>
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-right" data-aos-delay="100">
              <li class="card-img">
                <span class="straightway rotate">立即預約</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222108843.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=RwXd1xw4%2BYn0%2B0dzhBRn5hblvhbcrOfRWbfPvwXZ6j0thYH5L1oR%2FIRs2loGnVSSErXBKZHFyerDgFRnU17Vhp9XVOTOT3aaO9SWgrpc4nA1u0zIkw6qS0ntORp1rn51nczEnZSfGuVTfO%2BqgYOkH%2Fl107eMmrEc2M%2Bcz3oLhkT1rv13WKY2pw%2F2fJLMIHvW9R2WT%2FBlPOJxos5iWr5Mn8CSwE2prrUiF1xLH%2FyeecVQAyFPIFNNVDvxrjYlVLlhOls13VTUJCuFaSCKAu0%2BTE%2Fe1jpe%2FLBIZeXU0xnEHHlGHTdUlEHQKbnhUJamDDy0DNcVMOBg3A4dKOixgi8G%2Bg%3D%3D" alt="feature">
              </li>
              <li><h3 class="fw-bold text-center">彈性的上課時間</h3></li>
              <li class="text-center text-white fw-normal d-grid gap-2">
                <p>時間有限</p>
                <p>工作排班制休假不固定</p>
                <p>上班族朝九晚五</p>
              </li>
            </ul>
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-left" data-aos-delay="100">
              <li class="card-img">
                <span class="complete rotate">內容最完整</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222122711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=nwmiAOIsQoaglmXxGsv%2B1fJdyVhYp7CM2kTzjZUK1VqkaxbtChrRXh%2BDmqPWDTKzBN4hd1oRb%2FEWqzsb%2FuxDmnr%2FsijcaMnU7hc94sGUm2eP5r5FK8gEe3DuiUazdw%2BDOJr42AmECxzhbo1yLgPEQccgnJlTPwp0IPaackxkwexSm5awBqhTmSF44ArpOrS5wGgD32Fc3TYSz7qXj7GijeHumTuJeOyWN0Yat7ss5ugXVYEhOCkZQa1LcseXXLzCXwe%2FN4Q8%2Ff4H8ECzMt5l7T1%2BsKOeidsDul5HEfH4itPfBL%2FEb%2FdZVOKGUIjn%2B0JXqa%2BIVEhq%2FGI7lmb2P4PzgQ%3D%3D" alt="feature">
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
              justify-content-center align-items-center d-grid gap-3"
              data-aos="fade-down" data-aos-delay="100">
                <div class="feature-top">
                  <div class="card-img">
                    <span class="problem rotate">這些都不是問題!</span>
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222186346.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Lvl00VJsSlk2XiCVn0ARqqu6EAN8V9aoMlPZnP4CnKRs0xJIkMNwvE3JbRnWZymw%2F9ldckPcHvP%2Bh65zoWdtd2j95F2PZSCkXtC7WsRtm9e8tBpXhicLKLPh56vhKhhoyN2YN1hakF%2F6McUhJCf2gJMOMuZ9w%2Bqn91KHsMPR55oyZ1Ijsw2zfcSMN5sAb%2F1SH23gIt%2BNng6HH5llqtO%2FWOp1j7WffcsupJRAnWBgsEK3TbORwySPr%2BjoH1pBpZ9bRo7L2pK0UPi%2Fs7v%2BWTEHiOUN8qszBl45uv9QpU9Wuhf8TcO8XRTiLPzdtaHMfN%2FvO3OoPny39kEPosYnseag5A%3D%3D" alt="feature">
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
                <li class="d-flex justify-content-center align-items-center"
                data-aos="fade-right" data-aos-delay="100">
                  <div class="text-white text-end fw-normal d-grid gap-3 pe-3">
                    <p>時間有限</p>
                    <p>工作排班制休假不固定</p>
                    <p>上班族朝九晚五</p>
                  </div>
                  <div class="pyramid">
                    <div class="card-img">
                      <span class="straightway rotate">立即預約</span>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222172557.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=YkGIPBJ%2BU6VmM2DeRRmTMXHD9euNeTj1sVNeC%2BIBqqg97G50jQVyU%2B%2FXhDVCYCV1UUNsIfBjW7EIXICmIf4SGLCl4olFEFlOb7BKIalDo7zA164U6FpHscViXTDZi63Y2SSbbY8QX3ik%2Bg9vIVCzUWkVCl%2BmTdMbTlt1zd2aSaAlioy3uuZLbk2almROklgSIEkgKTkKKW2eC%2FebG1b4cR4Jx5kR853Y9J3BvL%2BVwu0QaVd8Y9Mev0vaxXlhsotjg1KYvJ%2FFAAPECMId2DWYXKtxk4QTWcR2z71S7NVirphxxsSI%2FrjLkVH4T0XgRGCA2iYIb6Seg3SfNuPSex0zGA%3D%3D" alt="feature">
                    </div>
                    <h3 class="fw-bold text-center pt-3">彈性的上課時間</h3>
                  </div>
                </li>
                <li class="d-flex justify-content-center align-items-center"
                data-aos="fade-left" data-aos-delay="100">
                  <div>
                    <div class="card-img">
                      <span class="complete rotate">內容最完整</span>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222122711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=nwmiAOIsQoaglmXxGsv%2B1fJdyVhYp7CM2kTzjZUK1VqkaxbtChrRXh%2BDmqPWDTKzBN4hd1oRb%2FEWqzsb%2FuxDmnr%2FsijcaMnU7hc94sGUm2eP5r5FK8gEe3DuiUazdw%2BDOJr42AmECxzhbo1yLgPEQccgnJlTPwp0IPaackxkwexSm5awBqhTmSF44ArpOrS5wGgD32Fc3TYSz7qXj7GijeHumTuJeOyWN0Yat7ss5ugXVYEhOCkZQa1LcseXXLzCXwe%2FN4Q8%2Ff4H8ECzMt5l7T1%2BsKOeidsDul5HEfH4itPfBL%2FEb%2FdZVOKGUIjn%2B0JXqa%2BIVEhq%2FGI7lmb2P4PzgQ%3D%3D" alt="feature">
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
    <section class="teachers py-lg-9">
      <div class="container">
        <div class="teachers-sm d-lg-none d-md-none">
          <div class="text-center text-primary pb-4 pb-lg-8">
            <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="200">
              北中南最優秀的師資
            </p>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
            </div>
            <div class="mt-2" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215342143.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=QJUX1ymX3DqdO4MW%2FWQ2rDL12Q5R9WXmW%2FR31Odlv%2FacdzDbE63SHkcF5tecmDAPLns2p6Ii6ejGXyJ%2BQW22TkbMddqDfbEboGLIr5fyj0tgYKE8HSVF9f3DEpYIrOMprRgA1Z5ZhwoTwbdQI2s7Bixc8pknTWwo1Tp3GsSJRp2KGh1bp8nbKQU4MLjdgnxhubH34FrJeeSnWA8dWjzBTLxV3Lj9%2FlTLPERBBswO%2BdVpfmaYF7zpwI3gSePDNSFGco9Lux0NXYNKBPyXwxGLh8wSUo%2F%2BUQKqwmI09OykBtwjNmpzj8DnK%2FoRDmCSRR50ip8Ri2AAVI%2Bie60C6pmL7g%3D%3D" alt="teacher">
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
            <div class="mt-2" data-aos="fade-left" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-blue">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215333622.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Idacn99XxmH%2Blr7ZPY02nVGevC6fUwzw2PJTI1aXbhoMoc5RpEdagDcjnJoUKec2Wx4E33U4eXlO4qVAA3kMidnnBWBIl1PyT5eKByQYx955uSb%2B913x9M2BZSZx4P1x0N4dsMNqyLf0%2BT0UhKaWIxTJHGtfJ0q0bu%2F2k8pZ6xiVmlYP3ZeqN8LkBL4jeum343weROIU76Lh46LY0DlrSXV%2BbLUi%2BQ%2B3UY5%2BbblnWulMS5PEKwyUGvB%2B0U0Z5VpD%2FbCdSMTDYPh89c1TjRa1ZRr%2Faiu0To6lKpyE%2B4k5AfMgKwKUWd2dJCiwwHzfb%2BcJc9XjqXRAa7WFZANvAGVa5w%3D%3D" alt="teacher">
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
            <div class="mt-2" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215324062.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Hy3TGxrUq9lF%2FsxMXlDYF6qCOePSBE9VI3AzdqBUD4FTl40AnqiHsy4bTCFvKbZeV5qniQyNzMRRV%2FR03vNxBGJJQ4VU7shleqi5%2FZujl6UqCAOJ9Y6DdZ%2FBBeZD4Eh9TLevr8sizLPUbdTlJQCBDW8XG6KHHRbci%2BXsUpa%2FvwSXVt1nRHOQc0amCf8jSMP35nmh8%2FjRUQVRl0qaQP2z58kSQ5qlahy5JcSwp2veromtoMtOHVopzySSUclTVf2L5LDXd0subLbvUBeJzNSkmy99bLJpNo2SDC6V%2BQC5InyE22iW%2B%2BKKzmkzx9HWPNl%2BBDimNWcYXeYlS7x%2BsPg8IQ%3D%3D" alt="teacher">
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
            <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="200">
              北中南最優秀的師資
            </p>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
            </div>
            <div class="mt-5" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="col-7 teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215342143.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=QJUX1ymX3DqdO4MW%2FWQ2rDL12Q5R9WXmW%2FR31Odlv%2FacdzDbE63SHkcF5tecmDAPLns2p6Ii6ejGXyJ%2BQW22TkbMddqDfbEboGLIr5fyj0tgYKE8HSVF9f3DEpYIrOMprRgA1Z5ZhwoTwbdQI2s7Bixc8pknTWwo1Tp3GsSJRp2KGh1bp8nbKQU4MLjdgnxhubH34FrJeeSnWA8dWjzBTLxV3Lj9%2FlTLPERBBswO%2BdVpfmaYF7zpwI3gSePDNSFGco9Lux0NXYNKBPyXwxGLh8wSUo%2F%2BUQKqwmI09OykBtwjNmpzj8DnK%2FoRDmCSRR50ip8Ri2AAVI%2Bie60C6pmL7g%3D%3D" alt="teacher">
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
            <div class="area pt-8 text-end">
              <button type="button" class="btn btn-primary text-white fs-4 fw-bold">中部</button>
            </div>
            <div class="mt-5" data-aos="fade-left" data-aos-delay="200">
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
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215333622.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Idacn99XxmH%2Blr7ZPY02nVGevC6fUwzw2PJTI1aXbhoMoc5RpEdagDcjnJoUKec2Wx4E33U4eXlO4qVAA3kMidnnBWBIl1PyT5eKByQYx955uSb%2B913x9M2BZSZx4P1x0N4dsMNqyLf0%2BT0UhKaWIxTJHGtfJ0q0bu%2F2k8pZ6xiVmlYP3ZeqN8LkBL4jeum343weROIU76Lh46LY0DlrSXV%2BbLUi%2BQ%2B3UY5%2BbblnWulMS5PEKwyUGvB%2B0U0Z5VpD%2FbCdSMTDYPh89c1TjRa1ZRr%2Faiu0To6lKpyE%2B4k5AfMgKwKUWd2dJCiwwHzfb%2BcJc9XjqXRAa7WFZANvAGVa5w%3D%3D" alt="teacher">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="area pt-8 pb-4">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">南部</button>
            </div>
            <div class="mt-5" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="col-7 teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215324062.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Hy3TGxrUq9lF%2FsxMXlDYF6qCOePSBE9VI3AzdqBUD4FTl40AnqiHsy4bTCFvKbZeV5qniQyNzMRRV%2FR03vNxBGJJQ4VU7shleqi5%2FZujl6UqCAOJ9Y6DdZ%2FBBeZD4Eh9TLevr8sizLPUbdTlJQCBDW8XG6KHHRbci%2BXsUpa%2FvwSXVt1nRHOQc0amCf8jSMP35nmh8%2FjRUQVRl0qaQP2z58kSQ5qlahy5JcSwp2veromtoMtOHVopzySSUclTVf2L5LDXd0subLbvUBeJzNSkmy99bLJpNo2SDC6V%2BQC5InyE22iW%2B%2BKKzmkzx9HWPNl%2BBDimNWcYXeYlS7x%2BsPg8IQ%3D%3D" alt="teacher">
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
    <section class="textbook mt-8">
      <div class="text-center text-primary py-7 py-lg-9">
        <p class="main-title fs-1 fw-bold text-center"
        data-aos="fade-up" data-aos-delay="100">上課使用車種</p>
      </div>
      <div class="textbook-sm container d-lg-none mt-4">
        <div class="pt-7">
          <div class="py-3" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222553006.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=qApELMKfDb0eZ1%2Fvifem5LrNZQIPUtZk%2Bl5RmJrHniEv6HBsiO6KslaLD0%2BmkI%2Bwf3ocKjbYoBFe3tVLOMqVny0Gy4RaDbX%2F1NcSxo50wyHngJ6DrT%2BX%2FDk3J9Koj6XAp7rhI%2FBGwjP2vXJQpX26Vllp5jMvJxnmf%2BgHTL3j2%2FIjJ1usPhJbXMQsHlXNfDlY82Pt%2BArmKN1y6Fj5fh0wlq7txi%2Be7VxKyav8kp8TB47zHln%2F4MMweIMpfNV22XmGR5Z1Jwl3Aix1B9Gy5yRjjjs92jFRbp1KxVEPKD%2BbogvZG4M0NdG7joN%2FLOcfjzuE%2FvBjO1Z9wNA9kFTpBA18CA%3D%3D" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <p class="fw-medium">Honda HR-V</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222623507.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=MU6C7zDDkYUMDryxrdggf8BpWP8AQh4YJM%2F0x6hMHmyHCqLhPmNxYhzXfgUQtGe%2F5Wht1W0ohoHPhR9bWIc1C%2B5WPUZ0pmN1HfQifFt3A2i4tnC4O8rTJ1HeroE%2FFzval6RxhpTPCbrQz8GZxBT%2Ba%2FEQQSwrBlLN%2BDyFp8osqhs3WuPebNPh1L3We3gpX4iEE9U3QnxaDozE1hLZ7wRoP%2FTuGfKelAwiJnmLJmkWbC%2BDPew%2B9fTjlLDZUW9r%2BkHf5AW8kmg39ngtkrc5NBZo70xG6BeKUvzt1xsyDYJS3eM3dfbcUPMV3wJ8HMSelZ2%2BjJOgZ299eS24yRjOJZjJTw%3D%3D" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>每款車輛搭配副駕駛座煞車</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222651478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=atUulah1Gzk1bOrHBAWnfh%2BsWoWqfYp2k3u6FHAffEHgN87mA23X5D47QKmCz%2BleISOENcN2RrMJmZUshAxhYgiuxpFOZMDFMtesnKMj0M8KAl%2B9Iu%2Bh5XXEtjIObvMf7A7943Hfe1ljM43CyuLcWG9m4IFREWRUGfmVgJc1oIk4Ozovf57FKlRfSwVBXAP3bhbh3%2BYRYrSzzvdinz7TLG8AdKKiEktS9Ftwwy%2BKVgT%2FvQ3CVUwyYIgnHTzQ5xGcWlfD3yuxUYoWIXZ6DktN2yKP3R1J4SvjYby3h6EMm6vqEDz1TDmDKG1lDCP5nTduowMJg4AP3zYvaTrXqUr7Vg%3D%3D" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>車輛搭載 ACC 車道置中</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222651478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=atUulah1Gzk1bOrHBAWnfh%2BsWoWqfYp2k3u6FHAffEHgN87mA23X5D47QKmCz%2BleISOENcN2RrMJmZUshAxhYgiuxpFOZMDFMtesnKMj0M8KAl%2B9Iu%2Bh5XXEtjIObvMf7A7943Hfe1ljM43CyuLcWG9m4IFREWRUGfmVgJc1oIk4Ozovf57FKlRfSwVBXAP3bhbh3%2BYRYrSzzvdinz7TLG8AdKKiEktS9Ftwwy%2BKVgT%2FvQ3CVUwyYIgnHTzQ5xGcWlfD3yuxUYoWIXZ6DktN2yKP3R1J4SvjYby3h6EMm6vqEDz1TDmDKG1lDCP5nTduowMJg4AP3zYvaTrXqUr7Vg%3D%3D" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>倒車顯影</p>
            </div>
          </div>
        </div>
      </div>
      <div class="textbook-pc d-lg-block d-none">
        <p class="fs-5 text-center pt-3">Honda HR-V</p>
        <div class="mt-4">
          <div class="bg-wave">
            <div class="container">
            <div class="d-flex">
              <div class="position-relative pb-9">
                <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300">
                    <div class="textbook-card bg-white">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222553006.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=qApELMKfDb0eZ1%2Fvifem5LrNZQIPUtZk%2Bl5RmJrHniEv6HBsiO6KslaLD0%2BmkI%2Bwf3ocKjbYoBFe3tVLOMqVny0Gy4RaDbX%2F1NcSxo50wyHngJ6DrT%2BX%2FDk3J9Koj6XAp7rhI%2FBGwjP2vXJQpX26Vllp5jMvJxnmf%2BgHTL3j2%2FIjJ1usPhJbXMQsHlXNfDlY82Pt%2BArmKN1y6Fj5fh0wlq7txi%2Be7VxKyav8kp8TB47zHln%2F4MMweIMpfNV22XmGR5Z1Jwl3Aix1B9Gy5yRjjjs92jFRbp1KxVEPKD%2BbogvZG4M0NdG7joN%2FLOcfjzuE%2FvBjO1Z9wNA9kFTpBA18CA%3D%3D" alt="textbook-car" class="card-img">
                    </div>
                  </div>
                  <div class="row pt-7">
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222623507.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=MU6C7zDDkYUMDryxrdggf8BpWP8AQh4YJM%2F0x6hMHmyHCqLhPmNxYhzXfgUQtGe%2F5Wht1W0ohoHPhR9bWIc1C%2B5WPUZ0pmN1HfQifFt3A2i4tnC4O8rTJ1HeroE%2FFzval6RxhpTPCbrQz8GZxBT%2Ba%2FEQQSwrBlLN%2BDyFp8osqhs3WuPebNPh1L3We3gpX4iEE9U3QnxaDozE1hLZ7wRoP%2FTuGfKelAwiJnmLJmkWbC%2BDPew%2B9fTjlLDZUW9r%2BkHf5AW8kmg39ngtkrc5NBZo70xG6BeKUvzt1xsyDYJS3eM3dfbcUPMV3wJ8HMSelZ2%2BjJOgZ299eS24yRjOJZjJTw%3D%3D" alt="textbook-car" class="card-img">
                        <div class="card-body d-flex justify-content-center">
                          <div class="car-icon"></div>
                          <p>每款車輛搭配副駕駛座煞車</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222651478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=atUulah1Gzk1bOrHBAWnfh%2BsWoWqfYp2k3u6FHAffEHgN87mA23X5D47QKmCz%2BleISOENcN2RrMJmZUshAxhYgiuxpFOZMDFMtesnKMj0M8KAl%2B9Iu%2Bh5XXEtjIObvMf7A7943Hfe1ljM43CyuLcWG9m4IFREWRUGfmVgJc1oIk4Ozovf57FKlRfSwVBXAP3bhbh3%2BYRYrSzzvdinz7TLG8AdKKiEktS9Ftwwy%2BKVgT%2FvQ3CVUwyYIgnHTzQ5xGcWlfD3yuxUYoWIXZ6DktN2yKP3R1J4SvjYby3h6EMm6vqEDz1TDmDKG1lDCP5nTduowMJg4AP3zYvaTrXqUr7Vg%3D%3D" alt="textbook-car" class="card-img">
                        <div class="card-body d-flex justify-content-center">
                          <div class="car-icon"></div>
                          <p>車輛搭載 ACC / 車道置中</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222651478.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=atUulah1Gzk1bOrHBAWnfh%2BsWoWqfYp2k3u6FHAffEHgN87mA23X5D47QKmCz%2BleISOENcN2RrMJmZUshAxhYgiuxpFOZMDFMtesnKMj0M8KAl%2B9Iu%2Bh5XXEtjIObvMf7A7943Hfe1ljM43CyuLcWG9m4IFREWRUGfmVgJc1oIk4Ozovf57FKlRfSwVBXAP3bhbh3%2BYRYrSzzvdinz7TLG8AdKKiEktS9Ftwwy%2BKVgT%2FvQ3CVUwyYIgnHTzQ5xGcWlfD3yuxUYoWIXZ6DktN2yKP3R1J4SvjYby3h6EMm6vqEDz1TDmDKG1lDCP5nTduowMJg4AP3zYvaTrXqUr7Vg%3D%3D" alt="textbook-car" class="card-img">
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
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import HomeSwiper from '@/components/SwiperComponents.vue';

export default {
  data() {
    return {
      isloading: false,
    };
  },
  mounted() {
    this.isloading = true;
    setTimeout(() => {
      this.isloading = false;
    }, 1000);
  },
  components: {
    HomeSwiper,
    Loading,
    LoadingSvg,
  },
};
</script>

<style lang="scss" scoped>

  .banner{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215383027.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=lnHjrYysXkxGgv1JN0u8PW%2B42kvFiHxJ0qRSbenfDgD6QON8SnF9lIew%2BZJWIeaFWB4EPkLUOFr8uTBwWh2ZOXZ5w1rWZpIjfV2KKkSKaj8vtlF8obM39ndwXsoCQWwfG2C1anH18yn9cXGtKlDuHFE1cMAxu1sL5kNFJ73qAEDQVqD8BhcPgbbzD16AiWOvn6J1OL%2B2xd%2BgpBuYnfH0%2BrceItrAjC36InxeEhmDWpFFLhetOL4szKgMT907TEoFsThwm5%2F3X%2Fsp3imUnsKfWaeXqrOj9BWChpdfOzZyen7dcdiSxzHzyGHp%2Fqn4KevyebQhr097GnYHkSwlv%2B6dCQ%3D%3D') no-repeat center center / cover;
    width: 100%;
    padding: 173px 0;
    .banner-title{
      h2{
        font-size: 4.9vw;
        @media (max-width: 468px ) {
          font-size: 7vw;
        }
      }
    }
  }
  .banner2{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219612831.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=ZZKH43RCo3mFTF9JCQp3QIc46v8QGCRVmghXX2pLZg9InZ%2F4IbsayuMv2XMAKDwCswWh4PNHZKD1GtSWNc%2FhgQHp222x3Fpoq%2FSOSMN2JndeBOCkg6cBKnERw8W74AopmsBagLorBjAYIQpNqi2blCCr%2B3%2F7yexOPzyanX4Cd63advfy1GiYQca1j6tNb%2F5Zv6p%2BxVc9nXX5ijYrzavbppGk20kcSyLkApdvhq18qSrGfa1xYm2m5%2BcoU0VhH0yq%2BUW5VDGNSY1qNTYeGRShGPm21JjNn7NBsij5o0R9cva7i%2FF0MXKEtE82LuY3mpHjTEorg9EbaxoTN5maSn11Cw%3D%3D') no-repeat center center / cover;
    width: 100%;
  }
  .banner-word{
    text-shadow: 0px 0.3px 1px black;
  }
  .banner2-title{
    padding: 160px 0 86px 0;
  }
  .carousel-img{
    height: 360px;
    border-radius: 16px;
  }
  .purchase{
    a{
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
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222472827.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=nCjp%2BWXQhUtD0KpNd8TJqLzsmHb%2Fu3pfgl68RXxhS7evMnRlbDzboWyVitBruR%2Bev5%2B8WU1uyWYoOghmqvenYmL8t3NzfRK%2Bi9u4efWbrvPSzzyvxWSTtX3jbwGr4vv5YmI%2FsxXRUEnZ3POpiipODTX7k3cvnoqb6D24IjlvQEo7LwMY5p3P8MUCnJ5F39F0PpndokqyBbjbW%2B2flIpBl4NJktKg%2BQSW5hjkgnxIvmCfs9Gv5YuqmXL4WYnAwqCeq75u1uoQOG7zNe4XBz0duO7zHs92BcQMskhj0XXeBkGtBCC0B7oCS8uJZHlYBrjMFXrl2Q2N6rStRBXOyoNTKg%3D%3D') no-repeat bottom center / 100% 100%;
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
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223029512.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Cohkw1CxtzKilYXOcx9eqgZhFGnu0nXTO1%2FG1%2F1z9CSzZohlEOGXjs6L7xjbMV%2ByuxAAx7P3mWttHQ9iwwWHDuun76lxq3tcCASqyjngfmKu7lESTCzO0qQNAVNIdkIl2g4cr4ujwsGJF9Ozz71o7QFntKf5pXxpJ2LgnG2%2FLk7G8aMGyc4mY8ByxiALAJzjEj87mt9itWEtPLFA2MWe4pPq9GIGuEfcG0%2B0Up8wVUuqG7HuyDwlg0nRvxcvkabgmtyEnyh5Y%2BGSzkD4P1YTpYyvOIwADNQvWMyQYFqjyqaRe2H9yM%2FPNsxAq%2Fm8o1n9adFocnYsNiwGgeHuEAQIlg%3D%3D') no-repeat bottom center / 100% 100%;
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
      margin: auto;
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
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222511308.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=QgYDTqfqXpSyvj%2FtxXMoR5v9GdT%2BlLBxSydyy36VXUNqOSGgs36IIokjBWrfpMe58E5Rw%2FKjv6ZamXDtpOLKYSoZcv08fJA6bQoZ016uQ8knqIcFG6RgNdZmVu3mDVlmRlKGMrS2vJwZ%2BTVfWuxwuFo%2FRAo6WC505TB06LLa1LNW91OK4NEuB44Xu0IBDlB2GgsJuHqd1W67bD0wfnEBiSL1iReYLZwbVflgy6b78F%2FZ8XQWG5JRsJjWo7q9%2BRlo8YkWs4szqcUJw%2Fdq%2BLZsf0trMu9gnqcWlfQy07L0la25UNmlu4pJFdJQ1FftVH61KOEfYgIoj%2F841JJBAJnKbQ%3D%3D') no-repeat top left / 100% 100%;
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
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223150747.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=p69ZzCdzmubQaZtubBgYsv4CLlVNrIRaGAk7myM5wBWo7O9qG9lIQOiGABwWt%2B0bSjU%2F85JGE%2B9UmHOT7jWmCK9AfoTD9%2Flynh%2Br%2BairizYOy5KRdEXU3a93WskZ8kRjwDenlcE0cunKGoS9s%2Fyu6QSSt2zbryZEpxb9HOI3OM6DSbzl0wZoILn8hJzfCaZoJD8O77TrZved53tY18fkA%2BsJepVw36NBbbk9cI0SljaRGVmgA8oj%2FuTMhnHEtpaLIssjEw7fLyV8Iov2V6mTbsC5OqbpRQJ%2BsJ3rodVcS45PKszEE7naGHY68PvkUrYaN%2Ft3dwLnxFmItW64CFzNoA%3D%3D') no-repeat top left / 100% 100%;
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
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=aZlTInSRGA6XQYPM7EfXCwQwO0u1rfD3kptEpRyqUVjLzv6A8M5mGbWsUjECJWFr6ntdcYpDjt5oUbwA6UNlaXnFrX8WZNyOYo2U0Q5E3rnq8nmsk2ndLtkViyvD3TNYscf1NH%2B1qDPlKvzWfjqb%2FHdyEPXlJqJxOUbYGwodsgLVR6Y%2FRI4OU8EpnsJevKFAyEfT0g5lReESfZPce6P2To6BQpkjui8iVOlfelNzYLffy0DDvwbCaZnTAKy6mVZHMNA6nJjetzynJ5voYIAqQvxOnHZJ%2FUXEzTjCrnKRy8VmaInyg7ol3Pl9PB6hgvWhRZOJuZiBtieZZg0ojCv06Q%3D%3D') no-repeat center center / contain;
        width: 75%;
        height: 100%;
        left: 90%;
        top: 50%;
        position: absolute;
        transform: rotate(50deg);
      }
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=aZlTInSRGA6XQYPM7EfXCwQwO0u1rfD3kptEpRyqUVjLzv6A8M5mGbWsUjECJWFr6ntdcYpDjt5oUbwA6UNlaXnFrX8WZNyOYo2U0Q5E3rnq8nmsk2ndLtkViyvD3TNYscf1NH%2B1qDPlKvzWfjqb%2FHdyEPXlJqJxOUbYGwodsgLVR6Y%2FRI4OU8EpnsJevKFAyEfT0g5lReESfZPce6P2To6BQpkjui8iVOlfelNzYLffy0DDvwbCaZnTAKy6mVZHMNA6nJjetzynJ5voYIAqQvxOnHZJ%2FUXEzTjCrnKRy8VmaInyg7ol3Pl9PB6hgvWhRZOJuZiBtieZZg0ojCv06Q%3D%3D') no-repeat center center / contain;
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
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=aZlTInSRGA6XQYPM7EfXCwQwO0u1rfD3kptEpRyqUVjLzv6A8M5mGbWsUjECJWFr6ntdcYpDjt5oUbwA6UNlaXnFrX8WZNyOYo2U0Q5E3rnq8nmsk2ndLtkViyvD3TNYscf1NH%2B1qDPlKvzWfjqb%2FHdyEPXlJqJxOUbYGwodsgLVR6Y%2FRI4OU8EpnsJevKFAyEfT0g5lReESfZPce6P2To6BQpkjui8iVOlfelNzYLffy0DDvwbCaZnTAKy6mVZHMNA6nJjetzynJ5voYIAqQvxOnHZJ%2FUXEzTjCrnKRy8VmaInyg7ol3Pl9PB6hgvWhRZOJuZiBtieZZg0ojCv06Q%3D%3D') no-repeat center center / contain;
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
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1742223515784.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=O1dWwPrsoaLC2LI5varGwKKGmek%2B2ihQnH3DiTOe7LiKzv%2FYx8%2F6DvERXSxocZZ9QGHRIGrv5CT%2F3zJr6%2BIaP%2BkQP8ygqe%2FKtg%2FMH3DaKKCv%2FPLPUYEI3T9nr%2FYO6bRk3dWpaxR8PQytXqdpIcYR2SzlRcebHv9kMhOBICR34pBByd0zFLoxsmmr6CF5%2FKsqYrry%2BLDbiJeH7c4ws15netTssVWMZ48H8UF5NY7BS%2F5fK8PEgjaggCZBqRejsdfuriazbUVxB4kvqIT%2BON5uDV3hc2fAVUyQ%2B93hKsQ9yDbHNFrwaDI61HM2gq%2F7l6p1PoOcexPCZZnz2OHhxegvIA%3D%3D') no-repeat center center / cover;
      border-radius: 8px;
    }
    .banner2-title{
      padding: 83px 0 83px 0;
    }
  }
</style>

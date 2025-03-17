<!-- eslint-disable no-irregular-whitespace -->
<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    :slides-per-group="3"
    :pagination="{'clickable': true}"
    :loop="true"
    :autoplay="{
      delay: 3000}"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218942343.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=BVp%2B5Fjk%2FqL8ca1CgvN5DeuS5KbxfGlaLhHWWVPsUJm0pX1W1zkb68OHBWALLIc0eybNM0s0%2BOMrHNIbyDb1VC2hRs2xQ5mACcM3fNT%2BNJIDbAYC2LvfkZeyGDWOoMa%2F%2FJtgUJTxvNApsHg41HuJkCR0aLwdVpd3j26jzVU9DzS6mm9HAO9KEzxULAhKkj%2FRgApoGSqVaLlWxc4%2FxyiXrwxcG%2BhJjXFQvwET1rxT1V1BQnhC2R6jIvU8zMN%2BKOcckr3YE86%2FW6UV8JMAVZSgspE7AsQMunES%2FNYc03jXgpSYgE8HXnQopDfsS6IGASL5Ov7WFCv1lwRDRuSJ7I6seA%3D%3D" alt="situation" class="situation-img">
          <span>01</span>
        </div>
        <div class="text-center">
          <h5 class="fw-bold">不會抓車距 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>02</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218974443.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=EpDdhmtLkaltU49i0a9wNlpecl6svC64dYDlaqkQZYsTXy7rQVdYf2aPGdipNP5LpPJum4B0kslBCLbXHGvNbzOEm%2BA4VdtL6%2Fl28BHTvjb7nka9VAAk8xrI37sr1EYTYmDInItsheVVCVGisD3GVO90n%2F1MvPIKwpgdTbp88Wbw7e3QMvdn1MHB65ObGpTzsKWwGA%2BY0LI%2FzlKnqXsq1mQkXPKFE1demyWbruOpMMo9SdMdZh2d0tZGLB%2Fe%2BblbY%2FHonR9RHttEIdRgYKpW2X4Ajnd%2BusdjdqG%2BvClBb9nDup0f87l9gOokkUSkYRbYS8KdCVIgLmCCBhi53kuZoA%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">不會路邊停車 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>03</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218989788.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=i%2FCaXoAXmtoxaxqXKofSkdcB48kvXajP4J8I5fu1hekJ6dzWXIde6W%2BuvkXT7X6gSerfKIDmdzEi3fGY9Eg1opYPixMZySfuZhD3G5ZHmV1c9QKt6k%2BbQxtyhLcbcqhQM%2FrDbHlBcsrnQIxsmvEMWwZIawsPnXmh8qvzeor9dBhNoUyLb6elCagSv%2BXf3n5f1Ulia5gJg8d2oh%2BF813ieWaBmoUxGw2HFR5OFV5TqlaPL%2BOStz0xY3ExBjtPIt1viOLT7RgnbE3C3hLWuFUD%2BHG8pnIp1baDVrbXsIG%2FZpqL35mIjgAGoIJiBOexeGcZ4pprJnbP%2BPeXANfWoT8tUA%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">不會變換車道 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>04</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219013792.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=IYth7rga%2FJHCpNUIMLlCSwijIyhsqDrRwDHFCPvLWOSswFx8GgInSFrRN7K%2Fiqhm5n%2Bc536vXsjC74bYNpOiotqob7c%2FfEzZcm5qzg6mDNHmgaI9rclEGdHZ921zOuifGaZ5jpZNEJPqIiggMCO%2B1gEesDGIRfeR2qC3%2FsmI2uoOyO8%2ByEaShkzUjSdoJAQ00oH1nYHvn8yCWeakaKlfKCx64QgtaW4xC%2FoShoAIrrplYEWVYdq4U1VAcHvax4rjASw72fOhngPQT0MZr%2BakOimEGN1BEc5p0n%2F8aOvp8Ym%2FP4Slh4Z8Ju66fwlKxKktFzoNFZDPI4Yp0HPhXEG6EQ%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">不敢上高速公路 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>05</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219030088.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=KcKm3BdCuRFiaQ6ISrdgCwQbiYeG5kBxM42xjGO67nxEUt7Mg4ilBMKQxvSrFwcpLlRVbST9H40o8mr66gMzBY5iGKAg4Xias0hrq%2BR%2FyUTWNiCqlnM1ULWVljMU%2BqlHwRoxGt1tEuryzO69af2VRxNDC0MrDs8tshQjVCxefF2y%2Fu8jURfjrHhbixv%2BGwB9FxRCGqkx8e0xWNjPjwob%2Fdf4GeJYNQolptZwrJzhBcT5%2B%2BfH%2FAOjMxHCR%2Fn8dv6gCNCJN48p4yxkMsC%2Bacj5uZqFgDi9HrPwkxy%2FRzXuMsAuD%2BK2qhIJtLJEi3JqxQTqrNMz5DntY8%2FXGHHve%2Bao9w%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">不敢開山路 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>06</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219170401.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=d2%2BkKGrKHwje3vYQ3yWIS2ITtIemXUARU7A5xsChvVKyyzjUV%2BX0WDwzF4PdRcEeEjHg2v%2BfQ6mbg7Y0im6s09nHuROhyv%2BMtjL0sHb%2BFI3jLLvHc1TGptxYPiRch6f3c8RBjxt1FenBXaHMMeyHlnDs1lu9ywDV8fkOXtzrVbliZG%2FF8ljwr6TOvosixMueA2Tf2xLgtduTn8P%2BIpC4ENaThPbpaRpVZwMARLWaDQyBDJZmvsLsUa7sXFyFzk5FD8Y%2Fd5%2Bb3LoJgn%2BwVOVqz%2FjarqzDn66nVrSOtvtGRW24fXWGoaR6bTXHBqwgN4TbNdotgDQ9cj68yerA9pSMaA%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">擔心開的不好被戰鬥邀請 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>07</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219066887.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=fO0STfDOjuwK0D84ipnNvs6Q%2BA3mLI45PIjSOt09nORxqM6sx7QIqCxlbMs08hUnxcqqUz3jZwaXyh3YJ%2Fx4qOyibfiSrBPy6xWPDw4pimFZ3qJ1WocVxkt0XqZR26gzwiGdaYAgxo%2BS96uZ7p3aFkJ96qTpMlfPf6BJIhZKGiKooVT1PNFJk36LCCdc0hYO7Awt3ahzDM2FydcoCrlS2FMdlKqg62OG4hlXjiBshImAaegkaRGrRQctuEICRmMAnCjO%2BnQ5rugLtRzqa5dhgA%2FegWBxsdfmL%2BNiBziy1T85CFggH3IRm4qgxcDwAv6T%2BZfKmhWCyMgFfcCsTQQcbg%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5 class="fw-bold">擔心旁邊有人碎碎念 ?</h5>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
  .situation-group{
    margin: 80px 0 100px 0;
  }
  :deep(.swiper-pagination-bullet-active){
    color: #fff;
    background: #5BAADF;
  }
</style>

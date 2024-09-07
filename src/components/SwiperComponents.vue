<!-- eslint-disable no-irregular-whitespace -->
<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    :slides-per-group="3"
    :navigation="{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'}"
    :pagination="{'clickable': true}"
    :loop="true"
    :autoplay="{
      delay: 3000}"
    :modules="modules"
    class="mySwiper">
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180627238.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pwc3d1xBc1aw9U%2BbU8hHeLL6ibHWQbPvseEtO7hQsZgeTJrNj1hUKLblvA0ZEUlHYDr%2BMMXKhtrUrxsTLtNBQNM8FxJGoB7jzxjZtUtj04YCss6Sd7qNvb24W8xuFK6xm7dUAD8o76BPifs5pC7Ma%2BgCiG9Lig2Lo%2Fqq1E%2FM7yg2F44zaDPCYx2empFqLpxPHn7ST2ASOQ6eHOUh2c67%2BBrSG%2Fogvj9q6UB5QC6w%2BwjJUtxDnZztXWJK9D8hpxdq7curxR0ozdA%2FN%2F2eYYJ%2BWrbcnrTTpauU7XoFqVDEewh%2FAb3pQ57%2BxbYPFpCY2JHQqga7PbHIUx%2B0QjEE4wwzzQ%3D%3D" alt="situation" class="situation-img">
          <span>01</span>
        </div>
        <div class="text-center">
          <h5>不會抓車距 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>02</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180654119.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OV5j1zOf4DM%2Bs2SWKL8K3XGGKIZ9IEOM8Qfyy4smQpyfjp4aY16y0OyuplkRdyCz4LQ4rIQ%2FYik%2BUwAHMzqAQz5fUz4QbrCfld1vluTVYZ%2BnL964ZplwDebdgyL879ZSa3IEZTM1H50%2BghkRUUiK%2F4L%2FDLR9Vi2QsPbPX2Mghb9nxLKc3Yu%2FuHGLBHOYMs8xK6wthRk3y09qLxAQA8xOFIzetYnVIAA1FYNmrt0sc2eXj%2FfWLRNxWvY%2BNgYwUBp%2FbkyVgWsEAxmk%2BUnszYMmCXREMwXnyzjI%2FqWV3KpzalZBK9jedRBH04SbD7bOLB4FLrzA3JhEFjEMn3mlmcciyQ%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>不會路邊停車 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>03</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725688273094.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JCROyXT7bmaIeIffsVXh2nsWtSZghl5XfIEf6lCvy%2B55wfAQ%2BP3DQBmEv1sWsh6%2BFx9IluN6Q7st7e8DA0SjLhvoSbSDPTIB%2FCg2d6usKyy0nNXYN9F87PXNEq71nG2HrIdJeyHGbAMuFkTjqy%2F%2BQXXagmksxxpVRUSivUIy%2FFN43xHWjTrXc68EqjF8rENq7SHU1orYxE5AJ93mbcksIbidfmj2mQu%2Bc9erDg0Ik9p5cSlwGKjX%2F9sMzLnJLqxmmb08gxH2%2FsOVApGdz37O1Hu3I7sTMDmhAUSSR2j3hbJ4A4KjKL%2B2Dcs0CgBXPTgUXeqkrh3aNU8WmdqfPWtbIw%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>不會變換車道 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>04</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180717725.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YXUzCzEDoZlZX%2FpDhv4Zw3WNy2YZtVG51Wg%2BnWbqRNvY706c29IuDHkAt2vQvE6OnuWpvpf9B3VZipW%2FY%2BaymRZ7fkXwMyXcRyvd737DTzRhFW%2B9KF%2FWHIdP8XtpR0Tf9ZzFRinBCTcQ0IGK0Qxi%2FHAUeajaAyaVXHq%2FC6P4sJJzCCI%2F11UDWp2ferOPP44fyakfVTMg2q0PBAqUmcB58nQs4iSXb2ARnwsHQlP7zg2HGdkYV9l%2BUfsm9xmupfdma2ksBiHYNcOVm1Pd%2Fwbr6CpOvR7IW0DVSGMCxf6ZB7M71QW7a2ejS3gqAxR0m8PYaj%2B66Df2R6oefqjsXDY9zA%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>不敢上高速公路 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>05</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180744282.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MSqX6zM%2BmzPdXM5FMzWGQ%2F9cGXNqUOHUzzwTiW2kJI%2FEj7ZONGBmkupFt7wUSaTnLJPfy1FY6PICga%2FKokLjEOMkyG3KlXgDnadaYR81rfcDexs%2FaA9SaQ3xuwb3%2BNjyRuTGqGjGmoYcmi%2FKgvtquevGjtTor5MTsIMIFJ853LuyetpwJvUkF2NBBM6PV697IvUrY90N8D3peaLmJE93d39x94O7tdZKu8fdvIiCA3bQ4fcclsEIO%2BJKhu5Ot3zaDRk4UJ3Zcrpj4hDbjcvFKJrbbjLQLDd9TIQuJxcWdundcQ6zfihi0leyhz5lTYm9WvujhIiDINKEnmBvNnWdTg%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>不敢開山路 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>06</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180760925.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AOoQmcST%2BsTWOJ%2Fu8Q5DNCooIt%2BadsMQcfVJ1Oj47LyQYADhCX9ZApSMd3PYpqVlf1RcQohluol6%2BQVUaJ%2BFarvokk%2FJtNBGXjziOZ6ZNqYnybBYbl6xdsdQTulitoEMMlniGf44xmpY5bbxygnJlraLOwiKxBKM4KeEjOSES0ZhmzgXub0HjORF3rp9vFULhOJVoRhJEvXBjLH5m6mOh6U1VQR2V%2FdZ8Qf5%2B5ZQ6D%2FhqWOTklE%2FA6ozMULveQ466Ag2J5m65NWBWpA467CGmddFYOeNJbhiD4%2F0SWeWEzBBXwTH%2Fzms9Rdpoz6EJHNyxBcdLpr9bC20XVo%2B5tyw1g%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>擔心開的不好被戰鬥邀請 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="situation-group d-grid gap-7">
        <div class="situation-item d-flex justify-content-center">
          <span>07</span>
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725180804234.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UPTEOgDp9Ydl1HRtTq2m64t5V%2B0jlP00A6qekPr93DsH4%2B1NPC22jetVtrKnUhefP%2F5b0GjI%2BVtrQeD1VsvRB5z9M9IQl9L0Rqr6WGrkQQ0JzF%2BMwdsWMq1QWDOpe5S4vPHNXiLOTmV13DofhtajcX8SelhkSRZcd0fmv5jconTKL1MtjpwcvI4FLWBWI7dYCCaFRyxAYuSXeCP3G5YTPA9Lyp5FUz8QxJvV1zmxGr91zo6eJVaCAzsCA6%2Fh%2BoNXKx1fg2bUzpr9qED4H%2F6xi6Ea9e2Xh5o1lR5gDAvtFLYIJ6LPnWJ5NFoVBm2ex%2BukaduedRlhgpd6Mz4ld3snWg%3D%3D" alt="situation" class="situation-img">
        </div>
        <div class="text-center">
          <h5>擔心旁邊有人碎碎念 ?</h5>
        </div>
      </div>
    </swiper-slide>
    <button class="swiper-button-next"></button>
    <button class="swiper-button-prev"></button>
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
  :deep(.swiper-pagination-bullet-active){
    color: #fff;
    background: #5BAADF;
  }
  :deep(.swiper-button-next ,.swiper-button-prev){
    border: 0;
    background: url("https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193204073.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=flSD9%2Fw1I255ysDeYznpTlqUsiZemABYGJJ9GupAFfqThKP%2FWKXPh%2F01NX6ad4ILQUrWQAI3k46VgSwWLVJJ%2Bd2OMwW0eoun4z7YnsCK7f78rA1ct14o%2Bpg9AOKWhENEtd1I960wb0YbK5HxA%2F%2FJnarUEidH6phJ4%2Bkdd4G%2BSm7iqLjFbi2pUCzYLcoZ%2Buzt5H%2B1MyMPgQ8IosbyASHpcC94pyUj5%2BvoK%2FtugYFZUkZYx3QCIjNBjbyeI%2B1trF3aKl3Q8Po2%2FBh%2BGbbVAKTsFQoA%2FB%2BscvosQ8aiAu2k2oYY463HEX807K8%2FKfgiQmpk%2BJkrTLbklIJpcMFFqftuZg%3D%3D") no-repeat center;
    background-size: 40px 40px;
    text-indent: 150%;
    white-space: nowrap;
    overflow: hidden;
    width: 40px;
    height: 40px;
  }
</style>

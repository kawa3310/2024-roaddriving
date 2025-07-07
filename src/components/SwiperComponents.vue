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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218942343.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218974443.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218989788.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219013792.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219030088.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219170401.png" alt="situation" class="situation-img">
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
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219066887.png" alt="situation" class="situation-img">
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

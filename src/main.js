import './assets/all.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import { Swiper, SwiperSlide } from 'swiper/vue';

import App from './App.vue';
import router from './router';
// import VueAwesomeSwiper from 'vue-aweome-swiper';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VueAwesomeSwiper);

app.mount('#app');

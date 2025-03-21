import './assets/all.scss';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons';
import 'vue-loading-overlay/dist/css/index.css';
import 'aos/dist/aos.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import { all as rules } from '@vee-validate/rules';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from 'vue-loading-overlay';
import AOS from 'aos';
import App from './App.vue';
import router from './router';

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

AOS.init();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('VueLoading', Loading);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');

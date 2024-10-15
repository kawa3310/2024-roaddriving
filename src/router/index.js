import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/FrontView/HomeView.vue'),
      },
      {
        path: 'purchase',
        component: () => import('../views/FrontView/CoursePurchaseView.vue'),
      },
      {
        path: 'reservation',
        component: () => import('../views/FrontView/CourseReservationView.vue'),
      },
      {
        path: 'question',
        component: () => import('../views/FrontView/QuestionView.vue'),
      },
      {
        path: 'contact',
        component: () => import('../views/FrontView/ContactUsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import('../views/UserView.vue'),
    children: [
      {
        path: '/checkout',
        component: () => import('../views/FrontView/CheckOutView.vue'),
      },
      {
        path: '/payment/:id',
        component: () => import('../views/FrontView/PaymentView.vue'),
      },
      {
        path: '/privacy',
        component: () => import('../views/FrontView/PrivacyView.vue'),
      },
      {
        path: '/member',
        component: () => import('../views/FrontView/UserMemberView.vue'),
      },
      {
        path: '/userReservation',
        component: () => import('../views/FrontView/UserReservationView.vue'),
      },
      {
        path: '/userOrder/:id',
        component: () => import('../views/FrontView/UserOrderView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: '/products',
        component: () => import('../views/Background/AdminProductsView.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/Background/AdminOrderView.vue'),
      },
      {
        path: '/accounts',
        component: () => import('../views/Background/AdminAccountsView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { top: 0 }; // 每次切換頁面時滾動到最上面
  },
});

export default router;

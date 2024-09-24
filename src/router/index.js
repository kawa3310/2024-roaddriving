import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/FrontView/HomeView.vue'),
  },
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'purchase',
        component: () => import('../views/FrontView/CoursePurchaseView.vue'),
      },
      {
        path: 'reservation',
        component: () => import('../views/FrontView/CourseReservationView.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/FrontView/CheckOutView.vue'),
      },
      {
        path: 'question',
        component: () => import('../views/FrontView/QuestionView.vue'),
      },
      {
        path: 'contact',
        component: () => import('../views/FrontView/ContactUsView.vue'),
      },
      {
        path: 'payment',
        component: () => import('../views/FrontView/PaymentView.vue'),
      },
      {
        path: 'member',
        component: () => import('../views/FrontView/UserMemberView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
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
});

export default router;

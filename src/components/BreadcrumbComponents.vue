<template>
  <div>
    <div aria-label="breadcrumb">
        <ol class="breadcrumb px-0 mb-5 py-2 fs-7 justify-content-start">
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
          </li>
          <li v-for="(breadcrumbItem, index) in breadcrumbList"
            :key="`${index}_${breadcrumbItem.path}`"
            class="breadcrumb-item"
          >
            <RouterLink :to="`${breadcrumbItem.path}`"
              :class="{'text-muted' : index !== breadcrumbList.length - 1}"
            >
              {{ breadcrumbItem.name }}
            </RouterLink>
          </li>
        </ol>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbBaseList: {
        purchase: {
          path: '/purchase',
          name: '購買課程',
        },
        reservation: {
          path: 'reservation',
          name: '預約報名',
        },
        checkout: {
          path: '/checkout',
          name: '確認訂單',
        },
        payment: {
          path: '/payment',
          name: '完成預約',
        },
        question: {
          path: '/question',
          name: '常見問題',
        },
        contact: {
          path: '/contact',
          name: '聯絡我們',
        },
        privacy: {
          path: '/privacy',
          name: '隱私權政策',
        },
        login: {
          path: '/login',
          name: '會員登入',
        },
        member: {
          path: '/member',
          name: '會員中心',
        },
        memberInfo: {
          path: '/member',
          name: '會員資料',
        },
        userReservation: {
          path: '/userReservation',
          name: '預約紀錄',
        },
        userOrder: {
          path: '/userOrder',
          name: '訂單詳細',
        },
      },
    };
  },
  props: {
    pageBreadcrumbList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: [],
  computed: {
    breadcrumbList() {
      const newBreadcrumbListForRender = [];
      this.pageBreadcrumbList.forEach((breadcrumbName) => {
        newBreadcrumbListForRender.push(this.breadcrumbBaseList[breadcrumbName]);
      });

      return newBreadcrumbListForRender;
    },
  },
  mounted() {
  },
};
</script>

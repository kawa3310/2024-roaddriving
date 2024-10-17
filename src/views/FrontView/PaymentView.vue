<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="empty-content"></div>
  <Breadcrumb class="container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
  <div class="container">
    <div class="row d-flex flex-column justify-content-center align-items-center">
      <div class="col-6 order-table">
        <h2 class="text-center my-5">預約成功</h2>
        <div class="text-center">
          <p class="fs-4 text-danger">預約編號：{{ order?.id }}</p>
          <div class="mb-lg-8 my-8 shadow-lg">
            <table class="table order-table">
              <caption class="order-caption caption-top text-center border-bottom
              fw-normal">預定資訊</caption>
              <tbody v-for="item in order?.products" :key="item.id">
                <tr>
                  <th scope="row">方案</th>
                  <td scope="row">{{ item.product.title }}</td>
                </tr>
                <tr>
                  <th>上課地區</th>
                  <td v-if="item.address === '吳三寶'">北部</td>
                  <td v-if="item.address === '郝安銓'">中部</td>
                  <td v-if="item.address === '甄卉葶'">南部</td>
                </tr>
                <tr>
                  <th>時段</th>
                  <td>{{ item?.time }}</td>
                </tr>
                <tr>
                  <th>總金額</th>
                  <td>NT ${{ item?.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <RouterLink :to="`/login`"
            class="order-detailed rounded-0 text-danger">訂單詳細
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderId: '',
      order: {},
      pageBreadcrumbList: ['purchase', 'payment'],
      isloading: false,
    };
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.id;
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.isloading = false;
          this.order = res.data.order;
        })
        .catch((err) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
  components: {
    Breadcrumb,
    Loading,
    LoadingSvg,
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style lang="scss">
  .order-detailed{
    border-bottom: 1px solid #DC3444;
  }
  .order-caption{
    color: black;
    font-weight: bold;
    font-size: 24px;
    padding: 10px 0;
  }
</style>

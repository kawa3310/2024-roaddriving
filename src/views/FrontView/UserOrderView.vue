<template>
  <Loading :active="isloading" :z-index="1060"/>
  <div class="empty-content"></div>
  <div class="body">
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <MemberCenterLayout>
            <template v-slot:breadcrumb>
              <Breadcrumb class="mt-3"
              :page-breadcrumb-list="pageBreadcrumbList" />
            </template>
            <div class="course-materials"  v-if="orderData.products">
              <div v-for="order in orderData.products" :key="order.id">
                <div class="mt-4 mt-lg-0">
                  <div class="reservation-state my-lg-5 my-3">
                    <p>預約編號：{{ orderData.id }}</p>
                    <p>預約日期：{{ date(orderData.create_at) }}</p>
                  </div>
                  <div class="order mt-4 mt-lg-0">
                    <div class="py-3">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img :src="order.product?.imageUrl"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <div class="order-bd">
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>預約方案</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.product?.title }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>預約方案</p>
                                  </div>
                                  <div class="col-lg-9 col-6">
                                    <p>{{ order.product?.content }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>總堂數</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.product?.lesson }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>時數</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.product?.unit }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>地區</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p v-if="order.address === '吳三寶'">北部</p>
                                    <p v-if="order.address === '郝安銓'">中部</p>
                                    <p v-if="order.address === '甄卉葶'">南部</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>授課老師</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.address }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>日期</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.date }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>時段</p>
                                  </div>
                                  <div class="col-lg-9 col-6">
                                    <p>{{ order.time }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>付款方式</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ order.payment }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>已繳金額</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>NT $ 1000</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>未繳金額</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>NT $ {{ order.product?.price - 1000 }}</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>訂單狀態：</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>{{ orderData.is_paid ? '已完課' : '未完課' }}</p>
                                  </div>
                                </div>
                                <p class="text-end fw-bold pt-9">總金額
                                  <span class="ps-3">NT $ {{ orderData.total }}</span>
                                </p>
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
          </MemberCenterLayout>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import MemberCenterLayout from '@/layout/MemberCenterLayout.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderData: {},
      pageBreadcrumbList: ['member', 'userReservation', 'userOrder'],
      isloading: false,
    };
  },
  methods: {
    getOrder() {
      const { id } = this.$route.params;
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/order/${id}`)
        .then((res) => {
          this.isloading = false;
          this.orderData = res.data.order;
        })
        .catch((error) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: error.response.data.message,
          });
        });
    },
    date(time) {
      const localDate = new Date(time * 1000);
      return localDate.toLocaleDateString();
    },
  },
  mounted() {
    this.getOrder();
  },
  components: {
    Breadcrumb,
    MemberCenterLayout,
    Loading,
  },
};

</script>

<style scoped lang="scss">
  .reservation-state{
    display: flex;
    justify-content: space-between;
    position: relative;
    @media (max-width: 375px) {
      font-size: 14px;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    &::after{
      position: absolute;
      content: "";
      width: 100%;
      bottom: -20%;
      left: 0%;
      border-bottom: 1px solid #d7d4d4;
      padding-bottom: 10px;
    }
  }
  .order{
    background-color: #ffffff;
    border: 1px solid #e2e2e3;
    border-radius: 10px;
    padding: 15px;
    .order-bd{
      border-radius: 10px;
      padding: 15px;
    }
  }
</style>

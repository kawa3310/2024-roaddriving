<template>
  <Loading :active="isloading" :z-index="1060"/>
  <div class="empty-content"></div>
  <div class="body">
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <MemberCenterLayout>
            <template v-slot:breadcrumb>
              <Breadcrumb :page-breadcrumb-list="pageBreadcrumbList" class="mt-3" />
            </template>
            <div class="course-materials my-lg-0 my-9">
              <ul class="nav nav-pills mb-lg-4" id="pills-tab" role="tablist">
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link active" id="pills-home-tab"
                  data-bs-toggle="pill" data-bs-target="#all-appointments" type="button"
                  role="tab" aria-controls="pills-home" aria-selected="true">所有預約</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728385674797.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JPFGKyMH7S8BlXkscaVvOyYWRs2ulhap5Vq0kScyCZiyGI%2BndFVDKo%2FGGWE6%2B5GviKrHp6uTJpC7X7re5tCRyTY2eNcqJsKCJOwUoWvEW46t5VzvF%2F3yIgL4CwqGPy%2B2V2gJOAreYAFeegrBjtzyiMDr66TinM9Ej%2BTAJ89sYfkAieDgS%2FqF8S6%2FHDjUd6mrQ3dJnSzyAa4%2B964W3%2FkVUwYRg%2FTLL6QbvzJJk649ap3psLIh1rn2%2FFtx%2BeHgW0sZf3qz0h8zeCv3RifbOmpluf8ZV80XDWhmjUeQ94eYtPPm4uVZMvy%2BdwWjnUTNWNrAeT2PEswM%2FR%2FLJ71KbIkO4g%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-profile-tab"
                  data-bs-toggle="pill" data-bs-target="#appointed" type="button"
                  role="tab" aria-controls="pills-profile" aria-selected="false">已預約</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728389357057.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EhhEYx3ligf05vKGyWK2TAL%2Fllpguk7RGzogCFpTvGPTxBOm4vfZBkScmGo2LYYwujJdAyVoFFFTtjMjA%2BAs3dGj2JL4XAMgi33DQo9vDAtBv%2Ffdy0P6HnQLbOwxQGEezLDqXVUnj7fpsJwxw5CViqzCQqRfy3KFSW%2F21fyhfhhmNj3%2FKjk4X91027DhNaKNg%2Fq2Xd%2F1QTHWd37JCtTz3vydtTDOvOE71MUaGnfVgaYILW1wnqgANN9RixbCUoBAIpSGVG36UtOsPf37HidctOFGRHtslPmGaOyLuIs6qoY1alo8wgUfLyOAuBs0X0GZ6OmuPLVYSGNOL%2BTurjo%2Bow%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab"
                  data-bs-toggle="pill" data-bs-target="#finished" type="button"
                  role="tab" aria-controls="pills-contact" aria-selected="false">已完課</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728389393887.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sn8tMkZUwL1sl5G5hTfojFC3XwRaqVOXRdX2IehXodj0DfzziBx1Hp1x6Rt8um34sqi3rz8bSIVsLi%2BEX6Zl1lNEE7a875lZqjMPGmcxIgFgPJ14gW6UA5MIditd6RNQC8fbHFiNgzonJ6Nykq8Etqr43b8E9uScLqtNJfzHni2RFvLtvc8195%2BF2L%2Fvt5Gb3EpMorKeYOiKk9I3xHxjmtiy1P49NlteykDQlp%2FHUEYTTB9BxDXeTBb7NmsVQtKF%2Bf9AtzPSfc3xmRYEQy%2BTyRGcLGkHVrG%2FeHi7rLmFSa%2FiHZrdhNM9PQWUnzDEQPo8pF%2FcRynYu4NjYWSkyd85RQ%3D%3D" alt="icon" class="carIcon">
                </li>
              </ul>
              <div class="tab-content d-flex flex-column align-items-center
              justify-content-between
              pt-5">
                <div id="all-appointments" class="tab-pane fade show active order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <div class="py-3 border-top border-bottom"
                    v-for="order in orderData" :key="order.id">
                      <div class="row"
                      v-for="item in order.products" :key="item.id">
                        <div class="col-12 col-md-4">
                          <img :src="item.product.imageUrl"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>{{ item.product.title }}</h6>
                              <p>預約編號：{{ order.id }}</p>
                              <p>預約狀態：{{ order.is_paid ? '已完課' : '未完課' }}</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" :to="`/userOrder/${order.id}`"
                              >看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="appointed" class="tab-pane fade order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <template v-for="order in orderData" :key="order.id">
                      <div v-if="!order.is_paid" class="py-3 border-top border-bottom">
                        <div class="row"
                      v-for="item in order.products" :key="item.id">
                          <div class="col-12 col-md-4">
                            <img :src="item.product.imageUrl"
                            alt="商品圖片" class="rounded-2 bg-body-secondary">
                          </div>
                          <div class="col-12 col-md-8">
                            <div class="p-4">
                              <div class="d-flex flex-column d-grid gap-3">
                                <h6>{{ item.product.title }}</h6>
                                <p>預約編號：{{ order.id }}</p>
                                <p>預約狀態：{{ order.is_paid ? '已完課' : '未完課' }}</p>
                              </div>
                              <div class="text-end">
                                <RouterLink class="order-routerLink"
                                :to="`/userOrder/${order.id}`">看詳細</RouterLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                <div id="finished" class="tab-pane fade order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <template v-for="order in orderData" :key="order.id">
                      <div v-if="order.is_paid" class="py-3 border-top border-bottom">
                        <div class="row"
                      v-for="item in order.products" :key="item.id">
                          <div class="col-12 col-md-4">
                            <img :src="item.product.imageUrl"
                            alt="商品圖片" class="rounded-2 bg-body-secondary">
                          </div>
                          <div class="col-12 col-md-8">
                            <div class="p-4">
                              <div class="d-flex flex-column d-grid gap-3">
                                <h6>{{ item.product.title }}</h6>
                                <p>預約編號：{{ order.id }}</p>
                                <p>預約狀態：{{ order.is_paid ? '已完課' : '未完課' }}</p>
                              </div>
                              <div class="text-end">
                                <RouterLink class="order-routerLink"
                                :to="`/userOrder/${order.id}`">看詳細</RouterLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>
                <PaginationModal :pages="pages" @emit-Pages="getOrder"></PaginationModal>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Swal from 'sweetalert2';

import MemberCenterLayout from '@/layout/MemberCenterLayout.vue';
import PaginationModal from '@/components/PaginationModal.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderData: {},
      pagination: {},
      pages: {},
      pageBreadcrumbList: ['member', 'userReservation'],
      isloading: false,
    };
  },
  methods: {
    getOrder(page = 1) {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/orders?page=${page}`)
        .then((res) => {
          this.isloading = false;
          this.orderData = res.data.orders;
          this.pages = res.data.pagination;
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
  mounted() {
    this.getOrder();
  },
  components: {
    Breadcrumb,
    MemberCenterLayout,
    PaginationModal,
    Loading,
  },
  watch: {
    '$route.query': {
      handler() {
        this.getOrder();
      },
      deep: true,
    },
  },
};

</script>

<style scoped lang="scss">
.course-materials{
  .nav-link{
    text-align: center;
    border: 1px solid #e2e2e3;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 0px;
    color: rgb(106, 106, 106);
    font-size: 20px;
  }
  ul{
    display: flex;
    justify-content: space-between;
    li{
      position: relative;
      width: 30%;
      .active{
        background-color: #5CAADF;
        color: #fff;
      }
    }
    .carIcon{
      display: none;
      position: absolute;
      width: 40px;
      height: 30px;
      top: -30px;
      transform: rotateY(180deg) rotate(-15deg);
    }
    & .nav-link.active + .carIcon{
      display: flex;
    }
  }
}
</style>

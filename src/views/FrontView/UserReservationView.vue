<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
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
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742260995165.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742515200&Signature=U7nj9GcCI5GefszLxRP1I3KwfSSJEsLFZ7yo1l77cnvvyxWdwp5%2BTQjeAz3mxmzdVvbqYlV7ZQS0jXj%2Bfu5yAGVIGbPaIMo2oCr02YoeZmvB992YLPUEwhKg9VdLmZ97ppuwqJcVAeX1HlEP6%2F7FJfw4h96nRoO%2BsGWkN7uQ8lLdurewkeaWqEqcFVOLVGK7IDHfpQ4GUUZJjMI%2Bk20Y5HcqUfexxItVEj1DiaI3XEgcgJN1J%2BTfrKE7LewPCudreelA67qaaTcGUjDxUcez%2BGyivld79QtY0XrZc3FI8kxSxmoouAQgzNbFqX9Em%2BK7vS3%2BISxkO9gzbDc1WIqLag%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-profile-tab"
                  data-bs-toggle="pill" data-bs-target="#appointed" type="button"
                  role="tab" aria-controls="pills-profile" aria-selected="false">已預約</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742261014063.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742515200&Signature=bkflQT3%2Bng9Foyh7jbMmCOM6Tzyw5PJR8ltV6XQ%2B9HXAV%2B%2Bg%2Bpa9Z6HEstGr85F9lMBuc%2BrmknacR8ocSRKUFPkK0tq1P%2Fs%2BwC2AbiwYXpya%2F2gxeF4JWTXebhbQCCaNgabG6%2FsK1lX8Br0xQP8vFKzMJ1i8yZyxXuxzkStAbuiOccW0IJqVjjCCRFmvESUQLX7alP2by8%2FNmEMXT7qCchALSWSuXtzXzKX8BTuyS9S4CcZlFKfStbNN9CnL%2FxZFaqLB2%2BXijCH45ttj%2B3WqQ55n0VxKIg4efqbm9s0ScL8WfkyMcZQS49C3Wogw6r5dQxYBsIZdZWxmzJTUQYalWw%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab"
                  data-bs-toggle="pill" data-bs-target="#finished" type="button"
                  role="tab" aria-controls="pills-contact" aria-selected="false">已完課</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742261034689.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742515200&Signature=on9Nc%2F%2BQ%2BvJ4xhPZR8psS6HTtPlbXFYhMsYHBHR7mTqE%2FBmAR3JPblJM3hMEcIMjeZA9L3DTd2FVJ8ZL2DwaGMqRxcxh5n%2FiVOx54U2yuUvggONIZvQ7A9A9n5D%2FcNaAshxNw3fYkw69cZkywHZ6TmOOgRPRkGR8zVJ%2FujKsstE0LfTU7ByzxfLZFVIO5th5gLIpK0mYkE%2FbMry4dIQ7iMhGxxFn3jdA7QhihwuboazvCdTJhlta0rUz6nxc8V6fFUtLseXwKS5tx28WuFJMvgTvSw4lpNdnU0KZho%2BZg6zwZ7y5JzFzxeEPHVY4V232Xry00YwNVaq398q7loxTvw%3D%3D" alt="icon" class="carIcon">
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
import Swal from 'sweetalert2';

import LoadingSvg from '@/loading/LoadingSvg.vue';
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
    LoadingSvg,
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

<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="empty-content"></div>
    <Breadcrumb class="container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <div class="order-table table-bg">
            <h2 class="text-center my-5">預約資訊</h2>
            <div v-for="(cart, index) in cartData" :key="cart.id">
              <h4 v-if="cartData !== 0" class=" my-4">
                第<span class=" text-danger">{{ index+1 }}</span>筆</h4>
              <table class="table shadow mb-3">
                <tbody>
                  <tr>
                    <th width="30%" scope="row">方案</th>
                    <td width="70%">{{ cart.product.title }}</td>
                  </tr>
                  <tr>
                    <th scope="row">內容</th>
                    <td>{{ cart.product.content }}</td>
                  </tr>
                  <tr>
                    <th scope="row">堂數</th>
                    <td>{{ cart.product.lesson }}</td>
                  </tr>
                  <tr>
                    <th scope="row">時數</th>
                    <td>{{ cart.product.unit }}</td>
                  </tr>
                  <tr>
                    <th scope="row">上課地區</th>
                    <td v-if="cart.address === '吳三寶'">北部</td>
                    <td v-if="cart.address === '郝安銓'">中部</td>
                    <td v-if="cart.address === '甄卉葶'">南部</td>
                  </tr>
                  <tr>
                    <th scope="row">授課老師</th>
                    <td>{{ cart.address }} 教練</td>
                  </tr>
                  <tr>
                    <th scope="row">日期</th>
                    <td>{{ cart.date }}</td>
                  </tr>
                  <tr>
                    <th scope="row">時段</th>
                    <td>{{ cart.time }}</td>
                  </tr>
                  <tr>
                    <th scope="row">總金額</th>
                    <td>NT ${{ cart.total }}</td>
                  </tr>
                </tbody>
              </table>
              <table class="table my-lg-8 shadow-sm" key="cart.id">
                <tbody>
                  <tr>
                    <th width="50%" scope="row">付款方式</th>
                    <th scope="row">訂金</th>
                    <th scope="row">餘額</th>
                  </tr>
                  <tr>
                    <td>信用卡</td>
                    <td>NT $1000</td>
                    <td>NT ${{ cart.total - 1000 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-end text-danger">※預約課程並選擇日期時段後本站將與您電聯後確認實際上課時間</p>
            <div class="d-flex justify-content-between py-8">
              <RouterLink :to="`/reservation`"
              class="btn btn-outline-dark rounded-1 d-flex align-items-center">
                <i class="bi bi-caret-left d-flex"></i> 上一步
              </RouterLink>
              <a @click.prevent="sendOrder()"
              class="btn btn-danger text-white rounded-1 px-4 d-flex align-items-center">
              確認付款
              </a>
            </div>
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
      cartData: {},
      form: {
        user: {
          name: '劉學車',
          email: 'carman@gamil.com',
          tel: '0933768912',
          address: '801 高雄市前金區文武三街24號',
        },
      },
      pageBreadcrumbList: ['purchase', 'checkout'],
      isloading: false,
    };
  },
  methods: {
    getCart() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data.carts;
          this.isloading = false;
        })
        .catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
          this.isloading = false;
        });
    },
    sendOrder() {
      axios.post(`${VITE_URL}/api/${VITE_PATH}/order`, { data: this.form })
        .then((res) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已送出預約訂單',
          });
          this.$router.push(`/payment/${res.data.orderId}`);
        })
        .catch((err) => {
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
    this.getCart();
  },
};
</script>

<style lang="scss">
  .color{
    color: #6a6767;
  }
  .table-bg{
    th{
    background-color: #f3f0f0;
    }
  }
  .captionl{
    text-align: center;
  }
</style>

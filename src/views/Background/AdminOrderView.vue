<template>
    <Loading :active="isloading" :z-index="1060"/>
  <div class="container px-6">
    <div class="mt-9">
      <h4 class="mb-9">已預約</h4>
    </div>
    <div class="admin-table">
      <table class="table mt-4 table-bordered">
        <thead>
          <tr class="tr">
            <th width="">
              預約編號
            </th>
            <th width="">預約人資料</th>
            <th width="">
              預約課程
            </th>
            <th width="">
              預約狀態
            </th>
            <th width="">
              訂單詳細
            </th>
            <th width="100">
              訂單狀態
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orderData" :key="order.id" class="tr">
            <td>{{ order.id }}</td>
            <td>{{ order.user.name }}</td>
            <td>
              <ul v-for="item in order.products" :key="item.id">
                <li>
                  {{ item.product.title }}
                </li>
              </ul>
            </td>
            <td>{{ order.is_paid ? '已完課' : '未完課'  }}</td>
            <td>
              <a href="#">看詳細</a>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <nav class="py-5 d-flex flex-column
      align-items-center" aria-label="...">
        <ul class="pagination pagination-sm">
          <li class="page-item active" aria-current="page">
            <a href="#" class="d-flex align-items-center">1
              <i class="bi bi-caret-right-fill ms-3"></i></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderData: {},
      isloading: false,
    };
  },
  methods: {
    getOrders() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders`)
        .then((res) => {
          this.orderData = res.data.orders;
          this.isloading = false;
        })
        .catch((err) => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },
  },
  mounted() {
    this.getOrders();
  },
  components: {
    Loading,
  },
};
</script>

<style>
  td{
    vertical-align: middle;
  }
</style>

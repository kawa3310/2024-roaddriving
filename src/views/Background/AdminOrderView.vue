<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
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
            <td>
              <div class="form-check form-switch">
                  <input class="form-check-input" v-model="order.is_paid" type="checkbox"
                  role="switch"
                    :id="`paidSwitch${order.id}`" @change="addOrderStates(order)">
                  <label class="form-check-label" :for="`paidSwitch${order.id}`">
                    {{ order.is_paid ? '已完課' : '未完課'  }}
                  </label>
                </div>
              </td>
            <td>
              <a href="#">看詳細</a>
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModel('look', order)">
                  查看
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModel('dele', order)">
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationModal :pages="pages" @emit-Pages="getOrders"></PaginationModal>
      <OrderModal :temp-Order="tempOrder" ref="orderModal"
      @add-Order-States="addOrderStates"/>
      <DelProductModal :temp-products="tempOrder" @del-item="delOrder" ref="deModal">
      </DelProductModal>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from 'vue-loading-overlay';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import OrderModal from '@/components/AdminOrderComponents.vue';
import DelProductModal from '@/components/DelProductModal.vue';
import PaginationModal from '@/components/PaginationModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orderData: {},
      tempOrder: {},
      pagination: {},
      pages: {},
      isloading: false,
      isNew: false,
    };
  },
  methods: {
    getOrders(page = 1) {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orderData = res.data.orders;
          this.pages = res.data.pagination;
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
    addOrderStates(item) {
      this.isloading = true;
      const paid = {
        is_paid: item.is_paid,
      };
      axios.put(`${VITE_URL}/api/${VITE_PATH}/admin/order/${item.id}`, { data: paid })
        .then(() => {
          this.isNew = false;
          this.isloading = false;
          this.$refs.orderModal.modalClose();
          this.getOrders();
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '編輯成功',
          });
        })
        .catch(() => {
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: '編輯失敗',
          });
        });
    },
    delOrder() {
      this.isNew = true;
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`)
        .then(() => {
          this.isNew = false;
          this.isloading = false;
          this.getOrders();
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '刪除成功',
          });
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
    openModel(states, item) {
      this.isNew = true;
      if (states === 'look') {
        this.isNew = false;
        this.tempOrder = { ...item };
        this.$refs.orderModal.modelOpen();
      } else if (states === 'dele') {
        this.tempOrder = { ...item };
        this.$refs.deModal.modelOpen();
      }
    },
  },
  mounted() {
    this.getOrders();
  },
  components: {
    OrderModal,
    DelProductModal,
    PaginationModal,
    Loading,
    LoadingSvg,
  },
};
</script>

<style>
  td{
    vertical-align: middle;
  }
</style>

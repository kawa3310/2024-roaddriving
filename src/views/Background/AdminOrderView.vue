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
                data-bs-toggle="modal" data-bs-target="#orderModal"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="delOrder(order)">
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
      <div class="modal fade" id="orderModal"
        tabindex="-1" aria-labelledby="orderModal" aria-hidden="true">
        <div class="modal-dialog modal-xl">
              <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                  <h5 id="productModalLabel" class="modal-title">
                    <span >新增產品</span>
                    <span >編輯產品</span>
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"
                  aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-3">
                      <div class="mb-3">
                        <label for="imageUrl" class="form-label">主要圖片</label>
                        <input id="imageUrl" type="text"
                        class="form-control"
                          placeholder="請輸入圖片連結">
                        </div>
                        <div class="mb-3">
                          <label for="file" class="form-label">上傳圖片
                            <i class="fas fa-spinner fa-spin"></i>
                          </label>
                          <input type="file" class="form-control mb-4" id="file" ref="fileInput"
                          @change="uploadPhotos"/>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                    取消
                  </button>
                  <button type="button" class="btn btn-primary">
                    確認
                  </button>
                </div>
              </div>
        </div>
      </div>
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
      isNew: false,
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
    delOrder(order) {
      this.isNew = true;
      this.isloading = true;
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/order/${order.id}`)
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

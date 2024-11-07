<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="container px-6">
    <div class="mt-9">
      <h4 class="mb-9">課程方案</h4>
      <button type="button" class="btn fs-4 plus"
      @click="openModel('new', 'course')">
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
    <div class="admin-table">
      <table class="table mt-4 table-bordered">
        <thead>
          <tr class="tr">
            <th width="5">
              方案
            </th>
            <th width="5">堂數</th>
            <th width="5">
              1堂
            </th>
            <th width="5">
              價格
            </th>
            <th width="5">
              標語
            </th>
            <th width="60">
              內容
            </th>
            <th width="5">推薦指數</th>
            <th width="5">圖片</th>
            <th width="5">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id" class="tr">
            <td>{{ item.title }}</td>
            <td>{{ item.lesson }}</td>
            <td>{{ item.unit }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.content }}</td>
            <td>
              <div class="d-flex justify-content-center pt-1">
                <i v-for="star in item.stars"
                :key="star" class="bi bi-star-fill"></i>
              </div>
            </td>
            <td>
              <img :src="item.imageUrl" alt="img">
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModel('edit', 'course', item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="openModel('dele', 'products', item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-9">
      <h4 class="mb-9">師資</h4>
      <button type="button" class="btn fs-4 plus"
      @click="openModel('new', 'teacher')">
        <i class="bi bi-plus-circle"></i>
      </button>
    </div>
    <div class="admin-table">
      <table class="table mt-4 table-bordered">
        <thead>
          <tr class="tr">
            <th width="70">
              教練名單
            </th>
            <th width="10">地區</th>
            <th width="10">照片</th>
            <th width="10">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in teacherData" :key="item.id" class="tr">
            <td>{{ item.title }}</td>
            <td>{{ item.area }}</td>
            <td><img :src="item.imageUrl" alt="teacherImg"></td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModel('edit', 'teacher' , item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModel('dele', 'products', item)">
                  刪除
              </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationModal :pages="pages" @emit-Pages="getData"></PaginationModal>
    </div>
  </div>

  <CourseModal :temp-products="tempProducts" :add-product="addProducts" :is-new="isNew"
  :add-img="addImg" ref="course">
  </CourseModal>

  <TeacherProductsModal :temp-products="tempProducts" :add-product="addProducts" :is-new="isNew"
  :add-img="addImg" ref="teacher">
  </TeacherProductsModal>

  <DelProductModal :temp-products="tempProducts" @del-item="deleteProducts" ref="deModal">
  </DelProductModal>

</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import PaginationModal from '@/components/PaginationModal.vue';
import CourseModal from '@/components/CourseProductsModal.vue';
import TeacherProductsModal from '@/components/TeacherProductsModal.vue';
import DelProductModal from '@/components/DelProductModal.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      prodModal: null,
      catchData: [],
      products: [],
      teacherData: [],
      teacherAreaData: '',
      pagination: {},
      pages: {},
      isloading: false,
      tempProducts: {
        imageUrl: [],
      },
      isNew: false,
    };
  },
  methods: {
    getData(page = 1) {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.catchData = res.data.products;
          this.pages = res.data.pagination;
          this.isloading = false;
          this.filterData(this.catchData);
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
    filterData(data) {
      const filterTeacher = [];
      const filterProducts = [];
      data.forEach((item) => {
        if (item.category === '地區') {
          filterTeacher.push(item);
          this.teacherData = filterTeacher;
        } else if (item.category === '課程') {
          filterProducts.push(item);
          this.products = filterProducts;
        }
      });
    },
    openModel(states, category, item) {
      if (states === 'new') {
        this.tempProducts = {
          imagesUrl: [],
        };
        this.isNew = true;
        if (category === 'course') {
          this.$refs.course.modelOpen();
        } else if (category === 'teacher') {
          this.$refs.teacher.modelOpen();
        }
      } else if (states === 'edit') {
        this.isNew = false;
        this.tempProducts = { ...item };
        if (category === 'course') {
          this.$refs.course.modelOpen();
        } else if (category === 'teacher') {
          this.$refs.teacher.modelOpen();
        }
      } else if (states === 'dele' || category === 'products') {
        this.tempProducts = { ...item };
        this.$refs.deModal.modelOpen();
      }
    },
    addProducts() {
      let url = `${VITE_URL}/api/${VITE_PATH}/admin/product`;
      let http = 'post';
      if (!this.isNew) {
        url = `${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProducts.id}`;
        http = 'put';
      }
      this.isloading = true;
      axios[http](url, { data: this.tempProducts })
        .then(() => {
          this.getData();
          this.isloading = false;
          this.$refs.course.modalClose();
          this.$refs.teacher.modalClose();
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '編輯成功',
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
    deleteProducts() {
      this.isloading = true;
      this.$refs.deModal.modalClose();
      axios.delete(`${VITE_URL}/api/${VITE_PATH}/admin/product/${this.tempProducts.id}`)
        .then(() => {
          this.getData();
          this.isloading = false;
          Swal.fire({
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已刪除',
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
    addImg() {
      this.tempProducts.imagesUrl = [];
      this.tempProducts.imagesUrl.push('');
    },
  },
  mounted() {
    this.getData();
  },
  components: {
    CourseModal,
    TeacherProductsModal,
    DelProductModal,
    PaginationModal,
    Loading,
    LoadingSvg,
  },
};
</script>

<style lang="scss">
  .plus{
    border: 0;
    &:hover{
      color: #5CAADF;
    }
  }
  .admin-table{
    color: #1E60A5;
    text-align: center;
    .table{
      border: 1px solid #565555;
      .tr{
        th{
          background-color: #857b7b;
          color: #fff;
        }
        td{
          vertical-align: middle;
        }
      }
    }
  }
</style>

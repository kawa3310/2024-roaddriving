<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="container px-6">
    <div class="mt-9">
      <h4 class="mb-9">課程方案</h4>
      <button type="button" class="btn fs-4 plus"
      @click="openModel('new')">
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
                @click="openModel('edit', item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="openModel('dele', item)"
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
      @click="openModel('new')">
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
                @click="openModel('edit', item)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModel('dele', item)"
                >
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
  <!-- Modal -->

  <!-- <div class="modal fade" id="courseModal"
  tabindex="-1" aria-labelledby="courseModal" aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-3">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input id="imageUrl" type="text" v-model="tempProducts.imageUrl"
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
                <img class="img-fluid" :src="tempProducts.imageUrl" :alt="tempProducts.imageUrl">
            </div>
            <div class="col-9">
              <VForm ref="form" class="col-6" v-slot="{ errors }">
                <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <VField id="title" name="標題" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['標題'] }" placeholder="請輸入標題"
                        rules="required"
                        v-model="tempProducts.title"></VField>
                    <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="row">
                  <div class="mb-3 col-12">
                    <label for="category" class="form-label">種類</label>
                    <VField id="category" name="種類" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['分類'] }" placeholder="請輸入分類"
                        rules="required"
                        v-model="tempProducts.category"></VField>
                    <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="lesson" class="form-label">堂數</label>
                    <VField id="lesson" name="堂數" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['堂數'] }" placeholder="請輸入單位"
                        rules="required"
                        v-model="tempProducts.lesson"></VField>
                    <ErrorMessage name="堂數" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="unit" class="form-label">1堂</label>
                    <VField id="unit" name="1堂" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['1堂'] }" placeholder="請輸入單位"
                        rules="required"
                        v-model="tempProducts.unit"></VField>
                    <ErrorMessage name="1堂" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
                <div class="row">
                  <div class="mb-3 col-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField id="origin_price" name="原價"
                    type="number" min="0" class="form-control"
                        :class="{ 'is-invalid': errors['原價'] }" placeholder="請輸入原價"
                        rules="required"
                        v-model.number="tempProducts.origin_price"></VField>
                    <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="price" class="form-label">售價</label>
                    <VField id="price" name="售價" type="number" min="0" class="form-control"
                        :class="{ 'is-invalid': errors['售價'] }" placeholder="請輸入售價"
                        rules="required"
                        v-model.number="tempProducts.price"></VField>
                    <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-12">
                    <label for="stars" class="form-label">推薦指數</label>
                    <VField id="stars" name="推薦指數" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['推薦指數'] }" placeholder="請輸入推薦指數"
                        rules="required"
                        v-model="tempProducts.stars"></VField>
                    <ErrorMessage name="推薦指數" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
              </VForm>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea v-model="tempProducts.description" id="description" type="text"
                class="form-control"
                  placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea v-model="tempProducts.content" id="content" type="text"
                class="form-control"
                placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input v-model="tempProducts.is_enabled" id="is_enabled" class="form-check-input"
                  type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addProducts">
            確認
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="modal fade" id="teacherModal"
  tabindex="-1" aria-labelledby="teacherModal" aria-hidden="true">
  <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-3">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input id="imageUrl" type="text" v-model="tempProducts.imageUrl"
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
                <img class="img-fluid" :src="tempProducts.imageUrl" :alt="tempProducts.imageUrl">
            </div>
            <div class="col-9">
              <VForm ref="form" class="col-6" v-slot="{ errors }">
                <div class="row">
                  <div class="mb-3 col-12">
                    <label for="category" class="form-label">種類</label>
                    <VField id="category" name="種類" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['分類'] }" placeholder="請輸入分類"
                        rules="required"
                        v-model="tempProducts.category"></VField>
                    <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">教練名字</label>
                    <VField id="name" name="教練名字" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['教練名字'] }" placeholder="請輸入標題"
                        rules="required"
                        v-model="tempProducts.title"></VField>
                    <ErrorMessage name="教練名字" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">地區</label>
                    <VField id="name" name="地區" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['地區'] }" placeholder="請輸入地區"
                        rules="required"
                        v-model="tempProducts.area"></VField>
                    <ErrorMessage name="地區" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="mb-3 col-6">
                  <label for="unit" class="form-label">1堂</label>
                  <VField id="unit" name="1堂" type="text" class="form-control"
                      :class="{ 'is-invalid': errors['1堂'] }" placeholder="請輸入單位"
                      rules="required"
                      v-model="tempProducts.unit"></VField>
                  <ErrorMessage name="1堂" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="row">
                  <div class="mb-3 col-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <VField id="origin_price" name="原價"
                    type="number" min="0" class="form-control"
                        :class="{ 'is-invalid': errors['原價'] }" placeholder="請輸入原價"
                        rules="required"
                        v-model.number="tempProducts.origin_price"></VField>
                    <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="price" class="form-label">售價</label>
                    <VField id="price" name="售價" type="number" min="0" class="form-control"
                        :class="{ 'is-invalid': errors['售價'] }" placeholder="請輸入售價"
                        rules="required"
                        v-model.number="tempProducts.price"></VField>
                    <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
              </VForm>
              <hr>
              <div class="mb-3">
                <div class="form-check">
                  <input v-model="tempProducts.is_enabled" id="is_enabled" class="form-check-input"
                  type="checkbox"
                    :true-value="1" :false-value="0">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="addProducts">
            確認
          </button>
        </div>
      </div>
    </div>
  </div> -->

  <CourseModal :temp-products="tempProducts" :add-product="addProducts" :is-new="isNew"
  :add-img="addImg" ref="course">
  </CourseModal>

  <DelProductModal :temp-products="tempProducts" @del-item="deleteProducts" ref="deModal">
  </DelProductModal>

</template>

<script>
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import Swal from 'sweetalert2';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import PaginationModal from '@/components/PaginationModal.vue';
import CourseModal from '@/components/CourseModal.vue';
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
          console.log(res);
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
    openModel(states, item) {
      if (states === 'new') {
        this.tempProducts = {
          imagesUrl: [],
        };
        this.isNew = true;
        this.$refs.course.modelOpen();
      } else if (states === 'edit') {
        this.isNew = false;
        this.tempProducts = { ...item };
        this.$refs.course.modelOpen();
      } else if (states === 'dele') {
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

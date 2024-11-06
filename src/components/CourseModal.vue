<template>
<div ref="courseModal" class="modal fade" id="courseModal"
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
                <input id="imageUrl" type="text" v-model="emitProduct.imageUrl"
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
                <img class="img-fluid" :src="emitProduct.imageUrl" :alt="emitProduct.imageUrl">
            </div>
            <div class="col-9">
              <VForm ref="form" class="col-6" v-slot="{ errors }">
                <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <VField id="title" name="標題" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['標題'] }" placeholder="請輸入標題"
                        rules="required"
                        v-model="emitProduct.title"></VField>
                    <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="row">
                  <div class="mb-3 col-12">
                    <label for="category" class="form-label">種類</label>
                    <VField id="category" name="種類" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['分類'] }" placeholder="請輸入分類"
                        rules="required"
                        v-model="emitProduct.category"></VField>
                    <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="lesson" class="form-label">堂數</label>
                    <VField id="lesson" name="堂數" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['堂數'] }" placeholder="請輸入單位"
                        rules="required"
                        v-model="emitProduct.lesson"></VField>
                    <ErrorMessage name="堂數" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="unit" class="form-label">1堂</label>
                    <VField id="unit" name="1堂" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['1堂'] }" placeholder="請輸入單位"
                        rules="required"
                        v-model="emitProduct.unit"></VField>
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
                        v-model.number="emitProduct.origin_price"></VField>
                    <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="price" class="form-label">售價</label>
                    <VField id="price" name="售價" type="number" min="0" class="form-control"
                        :class="{ 'is-invalid': errors['售價'] }" placeholder="請輸入售價"
                        rules="required"
                        v-model.number="emitProduct.price"></VField>
                    <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-3 col-12">
                    <label for="stars" class="form-label">推薦指數</label>
                    <VField id="stars" name="推薦指數" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['推薦指數'] }" placeholder="請輸入推薦指數"
                        rules="required"
                        v-model="emitProduct.stars"></VField>
                    <ErrorMessage name="推薦指數" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
              </VForm>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea v-model="emitProduct.description" id="description" type="text"
                class="form-control"
                  placeholder="請輸入產品描述">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea v-model="emitProduct.content" id="content" type="text"
                class="form-control"
                placeholder="請輸入說明內容">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input v-model="emitProduct.is_enabled" id="is_enabled" class="form-check-input"
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
          <button type="button" class="btn btn-primary" @click.prevent="addProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';

import Swal from 'sweetalert2';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      courseModal: null,
      emitProduct: {},
      status: {},
    };
  },
  props: ['tempProducts', 'addProduct', 'addImg', 'isNew'],
  methods: {
    modelOpen() {
      this.courseModal.show();
    },
    modalClose() {
      this.courseModal.hide();
    },
    uploadPhotos() {
      const file = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.status.flie = true;
      axios.post(`${VITE_URL}/api/${VITE_PATH}/admin/upload`, formData)
        .then((res) => {
          this.status.flie = false;
          this.emitProduct.imageUrl = res.data.imageUrl;
          this.$refs.fileInput.value = '';
        })
        .catch((err) => {
          this.status.flie = false;
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
    this.courseModal = new Modal(this.$refs.courseModal);
    this.emitProduct = this.tempProducts;
  },
  watch: {
    tempProducts() {
      this.emitProduct = this.tempProducts;
    },
  },
};
</script>

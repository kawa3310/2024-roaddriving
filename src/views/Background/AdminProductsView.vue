<template>
  <Loading :active="isloading" :z-index="1060"/>
  <div class="container px-6">
    <div class="mt-9">
      <h4 class="mb-9">課程方案</h4>
      <button type="button" class="btn fs-4 plus" @click="modelOpen">
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
    </div>
    <div class="mt-9">
      <h4 class="mb-9">師資</h4>
      <button type="button" class="btn fs-4 plus" @click="modelOpen">
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
            <td>{{ item.description }}</td>
            <td><img :src="item.imageUrl" alt="teacherImg"></td>
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
    </div>
  </div>
  <!-- Modal -->
<div class="modal fade" id="exampleModal"
tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</template>

<script>
import axios from 'axios';
import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      prodModal: null,
      catchData: [],
      products: [],
      teacherData: [],
      teacherAreaData: '',
      tempProducts: {
        imagesUrl: [],
      },
      isloading: false,
    };
  },
  methods: {
    getData() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products`)
        .then((res) => {
          this.catchData = res.data.products;
          this.isloading = false;
          console.log(this.catchData);
          this.filterData(this.catchData);
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
  },
  mounted() {
    this.getData();
  },
  components: {
    Loading,
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

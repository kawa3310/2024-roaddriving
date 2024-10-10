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
            <td>{{ item.is_enabled }}</td>
            <td>{{ item.unit }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.content }}</td>
            <td>
              <div class="d-flex justify-content-center pt-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <div v-if="item.title === '課程三'">
                  <i class="bi bi-star-fill"></i>
                </div>
                <div v-if="item.title === '課程二'">
                  <div v-for="index in starData" :key="index.num" class="d-flex">
                    <i v-for="star in index.reta"
                    :key="star" class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <img :src="item.imageUrl" alt="img">
            </td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm"
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
      products: [],
      starData: [
        {
          name: '',
          reta: 2,
        },
      ],
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
          this.products = res.data.products;
          this.isloading = false;
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

<template>
  <div class="container px-6">
    <div class="text-end mt-4">
      <button type="button"
      class="btn btn-outline-secondary">
        建立新的產品
      </button>
    </div>
    <div class="admin-table">
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="">
              方案
            </th>
            <th>堂數</th>
            <th width="">
              1堂
            </th>
            <th width="">
              價格
            </th>
            <th width="">
              標語
            </th>
            <th>
              內容
            </th>
            <th>推薦指數</th>
            <th>圖片</th>
            <th width="" class="text-center">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id" class="">
            <td>{{ item.title }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.num }}小時</td>
            <td>{{ item.price }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.content }}</td>
            <td class="d-flex justify-content-center align-items-center mt-1">
              <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
            </td>
            <td width="60">
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
import ProductModal from '@/components/ProductModalComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getData() {
      axios.get(`${VITE_URL}/api/${VITE_PATH}/admin/products`)
        .then((res) => {
          this.products = res.data.products;
        });
    },
  },
  mounted() {
    this.getData();
  },
  components: [
    ProductModal,
  ],
};
</script>

<style lang="scss">
  .admin-table{
    align-items: center;
    .table{
      border: 0!important;
      td{
        margin: 0;
        padding: 16px;
        align-items: center;
      }
    }
  }
</style>

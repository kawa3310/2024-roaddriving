<template>
  <div class="container px-6">
    <div class="text-end mt-4">
      <button type="button"
      class="btn btn-outline-secondary">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120" class="text-center">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
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
    <ProductModal>
    </ProductModal>
  </div>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';

export default {
  deta() {},
  components: [
    ProductModal,
  ],
};
</script>

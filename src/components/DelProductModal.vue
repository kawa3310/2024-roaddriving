<template>
  <div id="delProductModal" ref="delProductModal"
  class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel"
  aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <strong class="text-danger"></strong> 刪除後將無法恢復。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
            </button>
            <button type="button" class="btn btn-danger" @click="$emit('del-item')">
                確認刪除
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      delModal: null,
    };
  },
  props: {
    item: Object,
  },
  emits: ['del-item'],
  methods: {
    modelOpen() {
      this.delModal.show();
    },
    modalClose() {
      this.delModal.hide();
      document.body.focus();
      document.activeElement.blur();
    },
  },
  mounted() {
    this.delModal = new Modal(this.$refs.delProductModal);
  },
};
</script>

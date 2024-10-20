<template>
  <nav class="py-5 d-flex flex-column
    align-items-center" aria-label="Page navigation example">
    <ul class="pagination pagination-sm d-flex align-items-center">
      <li v-if="pages?.current_page?.length > 0"
        class="page-item" :class="{ disabled: !pages.has_pre }">
        <a href="#"
        aria-label="Previous" @click.prevent="updatePage(pages.current_page - 1)">
        <i class="bi bi-caret-left-fill me-3" aria-hidden="true"></i>
      </a>
      </li>
      <li class="text-light" :class="{ pagesNav: page === pages.current_page
      }" v-for="page in pages.total_pages" :key="page + 123">
        <a href="#"
        @click.prevent="updatePage(page)">{{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }" v-if="has_next">
        <a href="#"
        aria-label="Next" @click.prevent="updatePage(pages.current_page + 1)">
          <i class="bi bi-caret-right-fill ms-3"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emitPages', page);
    },
  },
};
</script>

<style>
  .pagesNav{
    color: #000000;
  }
</style>

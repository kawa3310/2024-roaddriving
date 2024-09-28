<template>
  <div>
    <slot name="breadcrumb"></slot>
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <SideMenu class="col-lg-3 col-12" />
          <div class="col-lg-9 col-12 course-materials">
            <slot></slot>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenuComponents.vue';

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    SideMenu,
  },
};
</script>

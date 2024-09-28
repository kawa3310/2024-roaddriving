<template>
  <NavbarComponents/>
  <RouterView/>
  <FooterComponents />
</template>

<script>
import NavbarComponents from '@/components/NavbarComponents.vue';
import FooterComponents from '@/components/FooterComponents.vue';

export default {
  components: {
    NavbarComponents,
    FooterComponents,
  },
};
</script>

<style scoped lang="scss">
</style>

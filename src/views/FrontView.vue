<template>
  <HomeNavbar/>
    <RouterView/>
  <FooterComponents />
</template>

<script>
import HomeNavbar from '@/components/HomeNavbarComponents.vue';
import FooterComponents from '@/components/FooterComponents.vue';

export default {
  components: {
    HomeNavbar,
    FooterComponents,
  },
};
</script>

<style lang="scss" scoped>
</style>

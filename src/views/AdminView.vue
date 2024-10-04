<template>
  <AdminNavbar />
  <RouterView/>
</template>

<script>
import AdminNavbar from '@/components/AdminNavbarComponents.vue';

export default {
  components: {
    AdminNavbar,
  },
};
</script>

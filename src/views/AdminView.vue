<template>
  <AdminNavbar />
  <RouterView v-if="checkSuccess"/>
</template>

<script>
import axios from 'axios';
import AdminNavbar from '@/components/AdminNavbarComponents.vue';

const { VITE_URL } = import.meta.env;
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkSignIn() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)drivingToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const config = {
        headers: { Authorization: token },
      };
      axios.post(`${VITE_URL}/api/user/check`, {}, config)
        .then(() => {
          axios.defaults.headers.common.Authorization = token;
          this.checkSuccess = true;
        }).catch(() => {
          this.$router.push('/AdminLogin');
        });
    },
  },
  components: {
    AdminNavbar,
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)kawaToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkSignIn();
  },
};
</script>

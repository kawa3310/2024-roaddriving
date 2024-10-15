<template>
  <AdminNavbar />
  <RouterView v-if="checkSuccess"/>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
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
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'success',
            title: '已登入',
          });
          this.checkSuccess = true;
          console.log(token);
        }).catch((err) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: err.response.data.message,
          });
          this.$router.push('/AdminLogin');
        });
    },
  },
  components: {
    AdminNavbar,
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)drivingToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkSignIn();
  },
};
</script>

<template>
  <div class="col-3">
    <div class="side ">
      <div class="side-menu nav flex-column nav-pills me-3 active"
      id="v-pills-tab" role="tablist"
      aria-orientation="vertical">
        <p class="fs-6 fw-bold active mb-2">我的帳戶</p>

        <RouterLink to="/member">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1
            0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9
            8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1
            4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567
            7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
          </svg>
          會員資料
        </RouterLink>

        <RouterLink to="/userReservation">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298
              1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335
              1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5
              0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0
              1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1
              .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3
              10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1
              0 0 0 0 2h4a11 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17
              4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691
              3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
          </svg>
          預約記錄
        </RouterLink>

        <RouterLink class="d-flex align-items-center" :to="`/login`">
          <i class="bi bi-box-arrow-left fs-5 pe-1"></i>
          登出
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberInfo: true,
      reserve: false,
    };
  },
  emits: ['memberInfo, reserve', 'changeStates', 'changeState'],
};
</script>

<style scoped lang="scss">
  .side{
    background-color: #f3f1f1;
    border-radius: 10px;
    padding: 48px 48px 48px 24px;
    text-align: start;
    .side-menu{
      font-size: 16px;
      gap: 24px;
      .active{
        font-weight: 500;
      }
    }
  }
</style>

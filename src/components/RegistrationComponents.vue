<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="registration-form">
      <h5 class="text-center py-3">立即註冊</h5>
      <div class="d-flex justify-content-center d-grid gap-3">
        <p>已經有帳號了？</p>
        <RouterLink to="/contact">
          登入
        </RouterLink>
      </div>
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">姓名</label>
          <input type="name" class="form-control"
          d="exampleInputName" aria-describedby="name" placeholder="請填入姓名">
        </div>
        <div class="mb-3">
          <label for="exampleInputTel" class="form-label">聯絡電話</label>
          <input type="name" class="form-control"
          d="exampleInputTel" aria-describedby="Tel" placeholder="請填入聯絡電話">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">信箱</label>
          <input type="email" class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp" placeholder="請填入信箱">
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">密碼</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
          placeholder="請填入6-15字密碼">
        </div>
        <div class="d-flex justify-content-center align-items-center py-4">
          <RouterLink to="/contact" class="btn btn-outline-dark px-8">註冊</RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/src/assets/default/loginSet';
</style>

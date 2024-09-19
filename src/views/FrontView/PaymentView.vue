<template>
  <div class="empty-content"></div>
    <div class="container">
      <div class="row d-flex flex-column justify-content-center align-items-center">
        <div class="col-6 order-table">
          <h2 class="text-center my-5">預約成功</h2>
          <div class="text-center">
            <p class="fs-4 text-danger">預約編號：ATR443213</p>
            <div class="order_block mb-lg-8 my-8">
              <table class="table">
                <caption class="order-caption caption-top text-center border-bottom">預定資訊</caption>
                <tbody>
                  <tr>
                    <th scope="row">方案</th>
                    <td scope="row"> 課程一</td>
                  </tr>
                  <tr>
                    <th>上課地區</th>
                    <td>台中</td>
                  </tr>
                  <tr>
                    <th>時段</th>
                    <td>下午(15:30 ~ 20:30)</td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>NT $4500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <RouterLink :to="`/login`"
              class="order-detailed rounded-0 text-danger">訂單詳細
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  .order-detailed{
    border-bottom: 1px solid #DC3444;
  }
  .order-caption{
    color: black;
    font-weight: bold;
    font-size: 24px;
    padding: 10px 0;
  }
</style>

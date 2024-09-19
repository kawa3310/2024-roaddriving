<template>
  <div class="empty-content"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column justify-content-center align-items-center">
          <div class="order-table table-bg">
            <h2 class="text-center my-5">預約資訊</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th width="30%" scope="row">方案</th>
                  <td width="70%">課程一</td>
                </tr>
                <tr>
                  <th scope="row">內容</th>
                  <td>安全行車知識、路邊停車、倒車入庫。
                  實際上路：市郊區。</td>
                </tr>
                <tr>
                  <th scope="row">堂數</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">時數</th>
                  <td>4小時</td>
                </tr>
                <tr>
                  <th scope="row">堂數</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">上課地區</th>
                  <td>台中</td>
                </tr>
                <tr>
                  <th scope="row">授課老師</th>
                  <td>郝安銓 教練</td>
                </tr>
                <tr>
                  <th scope="row">日期</th>
                  <td>2024/09/23</td>
                </tr>
                <tr>
                  <th scope="row">時段</th>
                  <td>下午(15:30 ~ 20:30)</td>
                </tr>
                <tr>
                  <th scope="row">總金額</th>
                  <td>NT $4500</td>
                </tr>
              </tbody>
            </table>
            <table class="table my-lg-8">
              <tbody>
                <tr>
                  <th width="50%" scope="row">付款方式</th>
                  <th scope="row">訂金</th>
                  <th scope="row">餘額</th>
                </tr>
                <tr>
                  <td>信用卡</td>
                  <td>NT $1000</td>
                  <td>NT $3500</td>
                </tr>
              </tbody>
            </table>
            <p class="text-end text-danger">※預約課程並選擇日期時段後本站將與您電聯後確認實際上課時間</p>
            <div class="d-flex justify-content-between py-8">
              <RouterLink :to="`/reservation`"
              class="btn btn-outline-dark rounded-1 d-flex align-items-center">
                <i class="bi bi-caret-left d-flex"></i> 上一步
              </RouterLink>
              <RouterLink :to="`/payment`"
              class="btn btn-danger text-white rounded-1 px-4 d-flex align-items-center">
              確認付款
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  .table-bg{
    th{
    background-color: #f3f0f0;
    }
  }
</style>

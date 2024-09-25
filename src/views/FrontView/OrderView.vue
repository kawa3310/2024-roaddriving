<template>
  <div class="empty-content"></div>
  <div>
    <header class="container mt-3">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb px-0 mb-5 py-2 fs-7 justify-content-start">
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" to="/contact">會員中心</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" to="/member">預約記錄</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/member">訂單詳細</RouterLink>
          </li>
        </ol>
      </div>
    </header>
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div class="side ">
              <div class="side-menu nav flex-column nav-pills me-3 active"
              id="v-pills-tab" role="tablist"
              aria-orientation="vertical">
                <p class="fs-6 fw-bold active mb-2">我的帳戶</p>
                <a class="active" id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target="#v-information" role="tab" aria-controls="v-information"
                aria-selected="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-vcard" viewBox="0 0 16 16">
                  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1
                  0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9
                  8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1
                  4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567
                  7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
                </svg>
                會員資料</a>
                <a href="#" id="v-pills-profile-tab" data-bs-toggle="pill"
                data-bs-target="#v-reserve" type="button" role="tab"
                aria-controls="v-pills-profile" aria-selected="false">
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
                預約記錄</a>
                <RouterLink class="d-flex align-items-center" :to="`/login`">
                  <i class="bi bi-box-arrow-left fs-5 pe-1"></i>
                  登出
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-9 course-materials">
            <div class="">
              <div class="d-flex justify-content-between border px-5">
                <p>預約編號：ATR443213</p>
                <p>預約日期：2024-09-12</p>
              </div>
              <div class="border">
                <table>
                  <tbody>
                    <tr>
                      <td>預約方案</td>
                      <td>課程一</td>
                    </tr>
                    <tr>
                      <td>課程內容</td>
                      <td>安全行車知識、路邊停車、倒車入庫、市郊區。</td>
                    </tr>
                    <tr>
                      <td>總堂數</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>時數</td>
                      <td>4小時</td>
                    </tr>
                    <tr>
                      <td>上課地區</td>
                      <td>台中</td>
                    </tr>
                    <tr>
                      <td>授課老師</td>
                      <td>郝安銓 教練</td>
                    </tr>
                    <tr>
                      <td>日期</td>
                      <td>2024/09/23</td>
                    </tr>
                    <tr>
                      <td>時段</td>
                      <td>下午（15:30 ~ 20:30）</td>
                    </tr>
                    <tr>
                      <td>付款方式</td>
                      <td>信用卡</td>
                    </tr>
                    <tr>
                      <td>訂金</td>
                      <td>NT $1000</td>
                    </tr>
                    <tr>
                      <td>餘額</td>
                      <td>NT $3500</td>
                    </tr>
                    <tr>
                      <td>訂單狀態：</td>
                      <td>未完課</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-end fw-bold">總金額<span class="ps-3">NT$ 4500</span></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

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

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
          <li class="breadcrumb-item" v-if="this.personal">
            <RouterLink to="/contact">會員資料</RouterLink>
          </li>
          <li class="breadcrumb-item" v-if="this.reserve">
            <RouterLink to="/contact">預約記錄</RouterLink>
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
                aria-selected="true" @click="changeStates">
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
                data-bs-target="#v-reserve" type="button" role="tab" @click="changeState"
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
            <div class="tab-content border-0
            d-flex flex-column align-items-center justify-content-between">
              <div id="v-information" class="tab-pane fade show active w-100">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="col-4 nav-item" role="presentation">
                    <a class="nav-link active"
                    type="button">會員資料</a>
                  </li>
                </ul>
                <div class="tab-content d-flex justify-content-start pt-5">
                  <div class="tab-pane fade show active information-table w-75">
                    <table class="table mt-4 text-center">
                      <tbody>
                        <tr>
                          <th class="th">姓名</th>
                          <td>陳xx</td>
                        </tr>
                        <tr>
                          <th class="th">聯絡電話</th>
                          <td>0924568092</td>
                        </tr>
                        <tr>
                          <th class="th">帳號</th>
                          <td>roun@gmail.com</td>
                        </tr>
                        <tr>
                          <th class="th">密碼</th>
                          <td>url*******</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div id="v-reserve" class="row tab-pane fade w-100">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link active" id="pills-home-tab"
                      data-bs-toggle="pill" data-bs-target="#all-appointments" type="button"
                      role="tab" aria-controls="pills-home" aria-selected="true">所有預約</a>
                    </li>
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link" id="pills-profile-tab"
                      data-bs-toggle="pill" data-bs-target="#appointed" type="button"
                      role="tab" aria-controls="pills-profile" aria-selected="false">已預約</a>
                    </li>
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link" id="pills-contact-tab"
                      data-bs-toggle="pill" data-bs-target="#finished" type="button"
                      role="tab" aria-controls="pills-contact" aria-selected="false">已完課</a>
                    </li>
                  </ul>
                  <div class="tab-content d-flex flex-column align-items-center
                  justify-content-between
                  pt-5">
                    <div id="all-appointments" class="tab-pane fade show active order-table w-75">
                      <table class="table mt-4 text-center table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">預約編號</th>
                            <th scope="col">預約課程</th>
                            <th scope="col">預約狀態</th>
                            <th scope="col">訂單詳細</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>ATR443213</td>
                            <td>課程二</td>
                            <td>已完課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                          <tr>
                            <td>BGA56523</td>
                            <td>課程一</td>
                            <td>未開課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                          <tr>
                            <td>JHU78913</td>
                            <td>課程三</td>
                            <td>未開課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="appointed" class="tab-pane fade order-table w-75">
                      <table class="table mt-4 text-center table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">預約編號</th>
                            <th scope="col">預約課程</th>
                            <th scope="col">預約狀態</th>
                            <th scope="col">訂單詳細</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>BGA56523</td>
                            <td>課程一</td>
                            <td>未開課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                          <tr>
                            <td>JHU78913</td>
                            <td>課程三</td>
                            <td>未開課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div id="finished" class="tab-pane fade order-table w-75">
                      <table class="table mt-4 text-center table-bordered">
                        <thead>
                          <tr>
                            <th scope="col">預約編號</th>
                            <th scope="col">預約課程</th>
                            <th scope="col">預約狀態</th>
                            <th scope="col">訂單詳細</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>ATR443213</td>
                            <td>課程二</td>
                            <td>已完課</td>
                            <td><a href="#">看詳細</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <nav class="py-5 d-flex flex-column " aria-label="...">
                      <ul class="pagination pagination-sm">
                        <li class="page-item active" aria-current="page">
                          <a href="#" class="d-flex align-items-center">1
                            <i class="bi bi-caret-right-fill ms-3"></i></a>
                        </li>
                      </ul>
                    </nav>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      personal: true,
      reserve: false,
    };
  },
  methods: {
    changeState() {
      if (this.reserve !== true) {
        this.reserve = true;
        this.personal = false;
      } else {
        this.reserve = true;
      }
    },
    changeStates() {
      if (this.personal !== true) {
        this.personal = true;
        this.reserve = false;
      } else {
        this.personal = true;
      }
    },
  },
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
  .information-table{
    th, td{
      border: 0;
    }
    td{
      text-align: start;
    }
    .th{
      padding-bottom: 48px;
      position: relative;
      &::after{
        position: absolute;
        content: "";
        width: 15%;
        height: 50px;
        bottom: 55%;
        right: 42%;
        border-bottom: 1px solid #848383;
      }
    }
  }
  .course-materials{
    .nav-link{
      text-align: center;
      border: 1px solid #848383;
      border-radius: 10px;
      padding: 16px 0;
      color: black;
    }
    li .active{
      background-color: #948c8c;
    }
  }
  .tab-content{
    height: 600px;
    border: 1px solid #848383;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    .table{
      background-color: #1f1919;
      a{
        color: #1E60A5;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
</style>

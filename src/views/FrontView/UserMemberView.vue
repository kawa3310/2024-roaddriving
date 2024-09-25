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
            <RouterLink class="text-muted" to="/member">會員中心</RouterLink>
          </li>
          <li class="breadcrumb-item" v-if="this.personal">
            <RouterLink to="/member">會員資料</RouterLink>
          </li>
          <li class="breadcrumb-item" v-if="this.reserve">
            <RouterLink to="/member">預約記錄</RouterLink>
          </li>
        </ol>
      </div>
    </header>
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <SideMenu :personal="personal" :reserve="reserve"/>
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
                            <td><RouterLink to="/order">看詳細</RouterLink></td>
                          </tr>
                          <tr>
                            <td>BGA56523</td>
                            <td>課程一</td>
                            <td>未開課</td>
                            <td><RouterLink to="/order">看詳細</RouterLink></td>
                          </tr>
                          <tr>
                            <td>JHU78913</td>
                            <td>課程三</td>
                            <td>未開課</td>
                            <td><RouterLink to="/order">看詳細</RouterLink></td>
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
import SideMenu from '@/components/SideMenuComponents.vue';

export default {
  data() {
    return {
      personal: '',
      reserve: '',
    };
  },
  components: {
    SideMenu,
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

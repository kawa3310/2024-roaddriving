<template>
  <div class="empty-content"></div>
  <div>
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <MemberCenterLayout>
            <template v-slot:breadcrumb>
              <Breadcrumb :page-breadcrumb-list="pageBreadcrumbList" class="mt-3"/>
            </template>
            <div class="course-materials my-lg-0 my-3">
              <div class="border-0
              d-flex flex-column align-items-center justify-content-between">
                <div class="w-100">
                  <ul>
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link active"
                      type="button">會員資料</a>
                    </li>
                  </ul>
                  <div class="tab-content d-flex justify-content-start pt-5">
                    <div class="information-table w-75">
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
              </div>
            </div>
          </MemberCenterLayout>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import MemberCenterLayout from '@/layout/MemberCenterLayout.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

export default {
  data() {
    return {
      pageBreadcrumbList: ['member', 'memberInfo'],
    };
  },
  components: {
    Breadcrumb,
    MemberCenterLayout,
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

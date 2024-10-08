<template>
  <div class="empty-content"></div>
  <div class="body">
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
                  <ul class="mb-4">
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link active"
                      type="button">會員資料</a>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728390628124.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D80aq0vl2qR3O2GMby3%2FG7opcHAKAkrQlKO9shZ6o3h0tcv5mM6al8f3HNNkt98tWs6o3%2Ft3RlKXyAdiJEEMsMwZaFvARFAIqFJsUs%2FwDqh2%2Fh1wL2iTk1PEL6AiKo9ebN0Q85zAtf7dfC0BvWkQn%2FgrD3yrpNUhN3M8fwoIg1pN1kPGIpeVUPxYO%2FtJ0YdXbQSiBxlQN2FI2%2Ba%2FyZXq1VOZLVuwJ15APS0a59IN67TpjRD%2FqsF7B2bRDtSp9hM%2FZjximMEJDkXAJmhCoZhhV0zy5dGsQQWFew0yobxk6yP2YWZHUcAONklhx1mUHw0exJ5%2BGYh4RnLAuhiSxH7vDw%3D%3D" alt="icon" class="carIcon">
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
.course-materials{
  .nav-link{
    text-align: center;
    border: 1px solid #e2e2e3;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 0px;
    color: rgb(106, 106, 106);
    font-size: 20px;
  }
  ul{
    display: flex;
    justify-content: space-between;
    li{
      position: relative;
      width: 30%;
      .active{
        background-color: #5CAADF;
        color: #fff;
      }
    }
    .carIcon{
      position: absolute;
      width: 40px;
      height: 30px;
      top: -30px;
      transform: rotateY(180deg) rotate(-15deg);
    }
  }
}
</style>

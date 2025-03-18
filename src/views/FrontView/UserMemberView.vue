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
            <div class="course-materials my-lg-0 my-9">
              <div class="border-0
              d-flex flex-column align-items-center justify-content-between">
                <div class="w-100">
                  <ul class="mb-4">
                    <li class="col-4 nav-item" role="presentation">
                      <a class="nav-link active"
                      type="button">會員資料</a>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742260924998.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742515200&Signature=fjx9CvMeH21KCnfbLubXRe0kF7FhsMq42fGpz6YTOlMZWwxWZ20Vl83ahlMPh5x3PbciW5V5X1H%2B2rFGfGB42fbRbjPa12PlHBq47%2FE3%2FuSdYqgH4UYUPGlEG1TZBZkmd5RQoeikvAdl38fs7GagioBL0FhfMBJfjwtMZV%2B0ILt0vZlhInVWgJVebhhWnpqGr2%2Br2%2BklB1XdESUI66eYS5HNIZubAT%2BAZnDVg8qHXaYirHoFaN7D9FGX9pdsJp68I9HEJ4O7VjFrcdRD71yJ0VM1Ab8jQPvnByWYp0EfwiNE5rfZlfqWumaaNFaePjFTY9cxES59UIBD6a%2FRQ3oQiw%3D%3D" alt="icon" class="carIcon">
                    </li>
                  </ul>
                  <div class="tab-content d-flex justify-content-start pt-5">
                    <div class="information-table w-75">
                      <table class="table mt-4 text-center">
                        <tbody>
                          <tr>
                            <th class="th">姓名</th>
                            <td>劉學車</td>
                          </tr>
                          <tr>
                            <th class="th">聯絡電話</th>
                            <td>0933768912</td>
                          </tr>
                          <tr>
                            <th class="th">帳號</th>
                            <td>carman@gamil.com</td>
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

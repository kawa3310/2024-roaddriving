<template>
  <div class="empty-content"></div>
  <div class="body">
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <MemberCenterLayout>
            <template v-slot:breadcrumb>
              <Breadcrumb class="mt-3"
              :page-breadcrumb-list="pageBreadcrumbList" />
            </template>
            <div class="course-materials">
              <SideMenu :personal="personal" :reserve="reserve"  />
              <div>
                <div class="mt-4 mt-lg-0">
                  <div class="reservation-state my-lg-5 my-3">
                    <p>預約編號：ATR443213</p>
                    <p>預約日期：2024-09-12</p>
                  </div>
                  <div class="order mt-4 mt-lg-0">
                    <div class="py-3">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <div class="order-bd">
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>預約方案</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>課程一</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>預約方案</p>
                                  </div>
                                  <div class="col-lg-9 col-6">
                                    <p>安全行車知識、路邊停車、倒車入庫、市郊區。</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>總堂數</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>1堂</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>時數</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>4小時</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>地區</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>台中</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>授課老師</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>郝安銓 教練</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>日期</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>2024/09/23</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>時段</p>
                                  </div>
                                  <div class="col-lg-9 col-6">
                                    <p>下午（15:30 ~ 20:30）</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>付款方式</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>信用卡</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>已繳金額</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>NT $1000</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>未繳金額</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>NT $3500</p>
                                  </div>
                                </div>
                                <div class="row mb-4">
                                  <div class="col-lg-3 col-6 fw-bold">
                                    <p>訂單狀態：</p>
                                  </div>
                                  <div class="col-lg-3 col-6">
                                    <p>未完課</p>
                                  </div>
                                </div>
                                <p class="text-end fw-bold pt-9">總金額
                                  <span class="ps-3">NT$ 4500</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
      pageBreadcrumbList: ['member', 'userReservation', 'userOrder'],
    };
  },
  components: {
    Breadcrumb,
    MemberCenterLayout,
  },
};

</script>

<style scoped lang="scss">
  .reservation-state{
    display: flex;
    justify-content: space-between;
    position: relative;
    @media (max-width: 375px) {
      font-size: 14px;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    &::after{
      position: absolute;
      content: "";
      width: 90%;
      bottom: -20%;
      left: 5%;
      border-bottom: 1px solid #d7d4d4;
      padding-bottom: 10px;
    }
  }
  .order{
    background-color: #ffffff;
    border: 1px solid #e2e2e3;
    border-radius: 10px;
    padding: 15px;
    .order-bd{
      border-radius: 10px;
      padding: 15px;
    }
  }
</style>

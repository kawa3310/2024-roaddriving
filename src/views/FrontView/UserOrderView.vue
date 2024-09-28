<template class="">
  <div class="empty-content"></div>
  <div>
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
              <div class="course-materials">
                <div>
                  <div class="reservation-state d-flex justify-content-between px-5 my-lg-5 my-3">
                    <p>預約編號：ATR443213</p>
                    <p>預約日期：2024-09-12</p>
                  </div>
                  <div class="order">
                    <div class="order-bd">
                      <div class="row">
                        <div class="col-lg-3 col-6 d-grid gap-3 fw-bold">
                          <p>預約方案</p>
                          <p>課程內容</p>
                          <p>總堂數</p>
                          <p>時數</p>
                          <p>台中</p>
                          <p>授課老師</p>
                          <p>日期</p>
                          <p>時段</p>
                          <p>付款方式</p>
                          <p>訂金</p>
                          <p>餘額</p>
                          <p>訂單狀態：</p>
                        </div>
                        <div class="col-lg-4 col-6 d-grid gap-3">
                          <p>課程一</p>
                          <p>安全行車知識、路邊停車、倒車入庫、市郊區。</p>
                          <p>1</p>
                          <p>4小時</p>
                          <p>台中</p>
                          <p>郝安銓 教練</p>
                          <p>2024/09/23</p>
                          <p>下午（15:30 ~ 20:30）</p>
                          <p>信用卡</p>
                          <p>NT $1000</p>
                          <p>NT $3500</p>
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
    position: relative;
    &::after{
      position: absolute;
      content: "";
      width: 90%;
      bottom: 0%;
      border-bottom: 1px solid #F3F1F1;
      padding-bottom: 10px;
    }
  }
  .order{
    background-color: #F3F1F1;
    border-radius: 10px;
    padding: 15px;
    .order-bd{
      border-radius: 10px;
      padding: 15px;
    }
  }
</style>

<template>
  <div>
    <div class="quesiton-bg mb-3">
      <h2 class="bg-banner">常見問題</h2>
    </div>
      <Breadcrumb class="navigation container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
    <div class="container pb-lg-9">
      <div class="quesiton-shadow">
        <div>
          <button class="quesiton quesiton-buttom
          " type="button" data-bs-toggle="collapse"
          href="#schooltime" role="button" aria-expanded="false" aria-controls="schooltime">
            上課時間？
          </button>
          <div class="collapse.show" id="schooltime">
            <div class="quesiton collapse-Content">
              <p>課程分為上下午兩個時段。</p>
              <p>上午時段：09：30～13：30</p>
              <p>下午時段：15：30～20：30</p>
              <span class="text-danger">※預約課程並選擇日期時段後本站將與您電聯後確認實際上課時間</span>
            </div>
          </div>
        </div>
        <div>
          <button class="quesiton quesiton-buttom
          collapsed" type="button" data-bs-toggle="collapse"
          href="#mode" role="button" aria-expanded="false" aria-controls="mode">
            上課方式？
          </button>
          <div class="collapse" id="mode">
            <div class="quesiton collapse-Content">
              <p>課程提供教練車，可預約接送服務，將由上課教練開到指定地點接送。</p>
              <span class="text-danger">※電聯時客服人員會一併詢問需不需要此項服務。</span>
            </div>
          </div>
        </div>
        <div>
          <button class="quesiton quesiton-buttom
          collapsed" type="button" data-bs-toggle="collapse"
          href="#Additional" role="button" aria-expanded="false" aria-controls="Additional">
            我想要加強課程裡的某個項目可以嗎？
          </button>
          <div class="collapse" id="Additional">
            <div class="quesiton collapse-Content">
              <p>可以。</p>
              <p>
              可在電聯確認上課時間時一併告知客服人員欲加強的項目，將為您告知上課教練。</p>
            </div>
          </div>
        </div>
        <div>
          <button class="quesiton quesiton-buttom
          collapsed" type="button" data-bs-toggle="collapse"
          href="#Payment" role="button" aria-expanded="false" aria-controls="Payment">
          如何報名課程？如何付款？
          </button>
          <div class="collapse" id="Payment">
            <div class="quesiton collapse-Content">
              <p>註冊帳號之後就可以依照網站流程報名課程囉。</p>
              <p>
              報名時須先繳交NT<span class="text-danger">1000元</span>訂金，剩餘課程費用將由第一次上課時以現金或者轉帳繳清。
              </p>
            </div>
          </div>
        </div>
        <div>
          <button class="quesiton quesiton-buttom
          collapsed" type="button" data-bs-toggle="collapse"
          href="#car" role="button" aria-expanded="false" aria-controls="car">
          是否能使用自家車練習？
          </button>
          <div class="collapse" id="car">
            <div class="quesiton collapse-Content rounded-bottom-2">
              <p>可以。</p>
              <p>
                除了提供的教練車之外，也會提供教練用活動輔助煞車器供學生使用。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

export default {
  data() {
    return {
      pageBreadcrumbList: ['question'],
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped lang="scss">
  .quesiton-bg{
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223680790.jpg') no-repeat center center / cover;
  width: 100%;
  }
  .quesiton{
    width: 100%;
    text-align: start;
    padding: 30px 30px 30px 50px;
    border: 1px solid #f2f0f0;
    @media (max-width: 375px) {
      padding-left: 15px;
    }
  }
  .quesiton-buttom{
    position: relative;
    background-color: #fff;
    font-size: 24px;
    @media (max-width: 375px) {
      font-size: 20px;
    }
    &::after{
      content: "\F13A";
      font-family: 'bootstrap-icons';
      font-size: 1.5rem;
      position: absolute;
      right: 5%;
      transition: transform .2s ease-in-out;
    }
  }
  .quesiton-buttom:not(.collapsed){
    background-color: #e7f5ff;
    border: 0;
    &::after{
      content: "\F13A";
      font-family: 'bootstrap-icons';
      transform: rotate(180deg);
    }
  }
  .quesiton-shadow {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .collapse-Content{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }
</style>

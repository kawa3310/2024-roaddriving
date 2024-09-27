<template>
  <div>
    <div class="empty-content"></div>
      <div class="quesiton-bg mb-3">
        <h2 class="quesiton-banner">常見問題</h2>
      </div>
      <header class="container mt-3">
        <div aria-label="breadcrumb">
          <ol class="breadcrumb px-0 mb-5 py-2 fs-7 justify-content-start">
            <li class="breadcrumb-item">
              <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink class="fw-bol" to="/question">常見問題</RouterLink>
            </li>
          </ol>
        </div>
      </header>
      <div class="container pb-9">
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

<style scoped lang="scss">
  .quesiton-bg{
  background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1727402768143.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pegcfHLYwlbHfIeG%2FN7vc003gK0PuNJso%2BFjFlZYqRb878AtjH0kNGpzR%2ByigZm9KzbNzyYDB7YyQSTwI%2B6vdsdr%2Fq0iKOh9vH5jiE62uHZDZYdr%2FLAXXYjtOC6kxSVXA6WTtqX9KdQxo0MNlGmz%2FR8dzDiVlzSb5QG8R9KbyNWFy5wzd4%2B8Q87tBqTQOyKNaPMNm1WcCw3DR5KR5NRXkW4YcPsBURaZOQwyaf0%2BNyxDYzJmbx%2BSHZqIK0T6I0K%2F8c%2FtpmAhJLACm3hCQjXq0g8eK6emHJVPM9mXMqoyFmLTNyEmP1to%2Fgrf4J%2FdMHQFrsjTUnHBIs1YJLsoN3A5sg%3D%3D') no-repeat center center / cover;
  width: 100%;
  }
  .quesiton-banner{
    padding: 200px;
    border: 1px solid #fff7f7;
    background: rgba(73, 70, 70, 0.5);
    color: white;
    text-align: center;
    @media (max-width: 468px) {
      padding: 100px;
    }
  }
  .quesiton{
    width: 100%;
    text-align: start;
    padding: 30px 30px 30px 50px;
    border: 1px solid #f2f0f0;
  }
  .quesiton-buttom{
    background-color: #fff;
    font-size: 24px;
  }
  .quesiton-buttom:not(.collapsed){
    background-color: #e7f5ff;
    border: 0;
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
  }
</style>

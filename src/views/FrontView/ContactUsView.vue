<template>
    <div class="contact-bg mb-3">
      <h2 class="bg-banner">聯絡我們</h2>
    </div>
    <header class="container mt-3">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb px-0 mb-5 py-2 fs-7 justify-content-start">
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink class="fw-bol" to="/contact">聯絡我們</RouterLink>
          </li>
        </ol>
      </div>
    </header>
    <main class="navigation">
      <div class="container pb-lg-9">
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <ul class="contact-card fs-5">
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-smartwatch fs-1"></i>
                <p class="fw-bolder">上課時間：</p>
                週一至週日 09：30 ～20：30</li>
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-headset fs-1"></i>
                <p class="fw-bolder">聯絡電話：</p>
                <a href="tel:+07-4569477">07-456-9477</a>
              </li>
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-envelope fs-1"></i>
                <p class="fw-bolder">聯絡信箱：</p>
                <a href="mailto:roaddriving@gmail.com">
                  roaddriving@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2364080377192!2d120.30722387366365!3d22.6449726794402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04efc2198341%3A0xfa16e57ba06ee98b!2zODA36auY6ZuE5biC5LiJ5rCR5Y2A5Y2B5YWo6LevMTMz6Jmf!5e0!3m2!1szh-TW!2stw!4v1727423774714!5m2!1szh-TW!2stw" width="800" height="600" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </main>
</template>

<style scoped lang="scss">
  .contact-bg{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1727421553168.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YvVQxLiOos5GCVz7UepfTK2iBWxNKwFFBYig2cOna%2FTap7pY3jBGZVAi9KzbPl1xZHC4WLAVoBB%2BE2pv4Ti9Wab8%2FZTEHymPWVn%2Fk18qTKwWg0jt2BW5xiiPMYL9LlfmPAPWAEvhVUu%2BmUnWvMUY2CHDjzaZ9O89kQZWt0mJYK62hrtJqpSL%2FWnrDx9sTUhyHCeZfSDTFhFsNHPTYkqR%2FRjaDDJjrRV50%2BQq4H%2Bytcc0d582JNZhUkNkA6pKeeUoOXOoGBas2cNEYQDppCBDJsSsqgXB4ueCj0bvPHERpXBVpZNP35z1b5%2Fv5wGr6qTVJ0P0ZbVvqHzVBZsfaWivKw%3D%3D') no-repeat center center / cover;
    width: 100%;
  }
  .contact-card{
    border-top: 1px solid #000;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 24px;
    margin: 24px 0;
  }
</style>

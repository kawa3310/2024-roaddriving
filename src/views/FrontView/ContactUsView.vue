<template>
    <div class="contact-bg mb-3">
      <h2 class="bg-banner">聯絡我們</h2>
    </div>
    <Breadcrumb class="navigation container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
    <main>
      <div class="container pb-lg-9">
        <div class="row">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <ul class="contact-card fs-5">
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-smartwatch"></i>
                <p class="fw-bolder">上課時間：</p>
                週一至週日 09：30 ～20：30</li>
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-headset"></i>
                <p class="fw-bolder">聯絡電話：</p>
                <a href="tel:+07-4569477">07-456-9477</a>
              </li>
              <li class="d-flex align-items-center d-grid gap-3">
                <i class="bi bi-envelope"></i>
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

<script>
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

export default {
  data() {
    return {
      pageBreadcrumbList: ['contact'],
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style scoped lang="scss">
  .contact-bg{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223617589.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=XmJpUR%2FlUNwpfwX%2BR7VTL2gO6in2Wr3z%2FPZJm7Qn1ln%2FRYCn9NJuQ%2BYy0Hx2TA1k%2F9rdOX6SMNFkiwVXXxB12Sp8V9q39GEmXomAHw1GNI%2FPrfzOtCE8QCH%2F1yfVggqmeddU0UL%2FG%2FElXwCkKVQLVGLELAVygJXkG8gy9NaQHuq7NgUL0PwVVc1Hbba155xyJ5oiL3wgY1kP2GCkfHbUXYl2HOf%2Bg2QBr0R8G77a8noCbpD5%2BN4TKLaNpA8fV9ep64wox4IzMv1%2F2GtDWzZgG9ROYC4gbN7YDx3KGTjU82qU36CD%2BOL9DA7cOKwlGQcatf2ENGoUI1osTfHU1%2FxRJQ%3D%3D') no-repeat center center / cover;
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
    li{
      font-size: 24px;
    }
    @media (max-width : 768px) {
      li{
        font-size: 20px;
      }
    }
    @media (max-width : 576px) {
      li{
        font-size: 14px;
      }
    }
  }
</style>

<template>
  <div class="overflow-hidden">
    <main>
      <div class="course-bg mb-3">
        <h2 class="bg-banner">課程內容</h2>
      </div>
      <Breadcrumb class="navigation container" :page-breadcrumb-list="pageBreadcrumbList"/>
      <div class="container my-lg-9 my-4">
        <div class="text-center d-grid gap-7">
          <div class="text-primary pb-lg-8 pb-4">
            <p class="main-title fs-1 fw-bold" data-aos="fade-up">安全行車知識</p>
          </div>
          <h2 data-aos="fade-up">無論是車前檢查或者是起步前注意事項</h2>
          <h2 data-aos="fade-up">所有行車眉角一步一步教會你</h2>
        </div>
      </div>
      <div class="container my-lg-10 my-4">
        <div class="row">
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-right" data-aos-delay="100">
            <div class="traffic1">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223961671.png" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-right" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223977917.png" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-left" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223995808.png" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-left" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742225054753.png" alt="traffic-img">
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="my-lg-10 my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224527303.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p class="text-nowrap">行車前檢查</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224575444.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>行車知識</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224610031.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>路邊停車</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224633111.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>倒車入庫</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224650285.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>市區實戰</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224663980.jpg" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>山路實戰</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hot-course my-lg-10 my-5">
      <div class="container">
        <div class="text-center text-primary pb-lg-8 pb-3 my-lg-5 my-4">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up">熱門課程</p>
        </div>
          <div class="row justify-content-center">
            <div class="col-lg-3 col-12 mb-5 me-lg-3 course-box" data-aos="zoom-out-down"
            data-aos-delay="200">
                <div class="hot-card shadow">
                  <div class="hot-card-img">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215283283.png" alt="hot-cours-img">
                  </div>
                  <div class="hot-card-title">
                    <span class="hot-course">課程一</span>
                    <h6 class="pt-5">推薦給<span class="fs-6 text-success">初學者</span>的你</h6>
                    <div class="d-flex justify-content-between align-items-center p-4 pb-5">
                      <span class="price">NT$ 4500</span>
                      <span class="d-flex align-items-center fw-bold">推薦指數：
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-12 mb-5 me-lg-3 course-box" data-aos="zoom-out-down"
            data-aos-delay="300">
                <div class="hot-card shadow">
                  <div class="hot-logo"></div>
                  <div class="hot-card-img">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215266489.png" alt="hot-cours-img">
                  </div>
                  <div class="hot-card-title">
                    <span class="hot-course">課程二</span>
                    <h6 class="pt-5">開課至今最<span class="fs-6 text-danger">受歡迎</span>的課程！</h6>
                    <div class="d-flex justify-content-between align-items-center p-4 pb-5">
                      <span class="price">NT$ 8500</span>
                      <span class="d-flex align-items-center fw-bold">推薦指數：
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-lg-3 col-12 course-box" data-aos="zoom-out-down"
            data-aos-delay="400">
                <div class="hot-card shadow">
                  <div class="hot-card-img">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215255614.png" alt="hot-cours-img">
                  </div>
                  <div class="hot-card-title">
                    <span class="hot-course">課程三</span>
                    <h6 class="pt-5">推薦給想<span class="fs-6 text-primary">客製化</span>加強的你</h6>
                    <div class="d-flex justify-content-between align-items-center p-4 pb-5">
                      <span class="price">NT$ 3000</span>
                      <span class="d-flex align-items-center fw-bold">推薦指數：
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    <section class="plan my-lg-10 my-5">
      <div class="container">
        <div class="text-center text-primary pb-lg-8 pb-3 my-lg-5 my-4">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">課程方案</p>
        </div>
        <div data-aos="flip-down" data-aos-delay="300">
          <div class="d-lg-flex d-md-flex d-none">
            <table class="table mt-4 text-center table-bordered">
              <thead>
                <tr class="table-primary">
                  <th width="15%" scope="col" class="py-3">方案</th>
                  <th width="10%" scope="col">堂數</th>
                  <th width="30%" scope="col">1堂</th>
                  <th width="15%" scope="col">價格</th>
                  <th width="30%" scope="col">內容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">課程一</th>
                  <td>1</td>
                  <td>4小時</td>
                  <td class="fw-medium">NT $4500</td>
                  <td>安全行車知識、路邊停車、倒車入庫
                    <br>實際上路：<span class="text-tomato">市郊區</span></td>
                </tr>
                <tr>
                  <div class="medal d-lg-flex d-md-flex d-none"></div>
                  <th scope="row">課程二</th>
                  <td>3</td>
                  <td>分別為 2 小時/堂、
                    3 小時/堂、4 小時/堂</td>
                  <td class="fw-medium">NT $8500</td>
                  <td>安全行車知識、路邊停車、倒車入庫
                    <br>實際上路：<span class="text-tomato">市郊區、高速公路、山路過彎</span></td>
                </tr>
                <tr>
                  <th scope="row">課程三</th>
                  <td>1</td>
                  <td>2.5小時</td>
                  <td class="fw-medium">NT $3000</td>
                  <td>路邊停車、倒車入庫、高速公路、山路過彎
                    <br><span class="text-tomato">四項中擇三項教學</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table class="d-lg-none d-md-none table mt-4 text-center table-bordered">
              <thead>
                <tr class="table-primary">
                  <th width="20%" scope="col" class="py-3">方案</th>
                  <th class="fw-normal" scope="col">課程一</th>
                  <th class="fw-normal" scope="col">課程二</th>
                  <th class="fw-normal" scope="col">課程三</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">堂數</th>
                  <td>1</td>
                  <td>3</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">1堂</th>
                  <td>4小時</td>
                  <td>分別為 2 小時/堂、
                    3 小時/堂、4 小時/堂</td>
                  <td>2.5小時</td>
                </tr>
                <tr>
                  <th scope="row">價格</th>
                  <td>NT $4500</td>
                  <td>NT $8500</td>
                  <td>NT $3000</td>
                </tr>
                <tr class="course-style">
                  <th scope="row">內容</th>
                  <td>安全行車知識、路邊停車、倒車入庫
                    實際上路：<span class="text-tomato">市郊區。</span></td>
                  <td>安全行車知識、路邊停車、倒車入庫
                    實際上路：<span class="text-tomato">市郊區、高速公路、山路過彎。</span></td>
                  <td>路邊停車、倒車入庫、高速公路、山路過彎。<br/>
                    <span class="text-tomato">四項中擇三項教學</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="reservation-button d-flex justify-content-end mt-4">
            <RouterLink class="btn btn-lg shadow-sm
            btn-tomato d-flex align-items-center" to="/reservation"
            >我要上課
              <i class="bi bi-chevron-double-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

export default {
  data() {
    return {
      pageBreadcrumbList: ['purchase'],
    };
  },
  components: {
    Breadcrumb,
  },
};
</script>

<style lang="scss">
  .course-bg{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742303957364.jpg') no-repeat center bottom / cover;
    width: 100%;
  }
  .main-title{
    @media (max-width: 375px) {
      &::before{
        left: 37%;
      }
    }
  }
  .card{
    border-radius: 20px;
    border: 0!important;
    .card-img{
      width: 100%;
      height: 400px;
      position: relative;
      @media (max-width: 376px) {
        height: 250px;
      }
    }
    .card-title{
      position: absolute;
      font-size: 1.8vw;
      margin: 0;
      top: 40%;
      left: 50%;
      transform: translate(-50%, 150%);
      color: #565555;
      font-weight: 900;
      @media (max-width: 992px) {
        font-size: 4vw;
      }
      @media (max-width: 768px) {
        top: 30%;
        font-size: 5vw;
      }
      p{
        border-radius: 60px;
        padding: 16px 20px;
        background-color: #ffffff;
      }
    }
  }
  .hot-logo{
    position: absolute;
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726142978878.png') no-repeat center center / cover;
    height: 44px;
    width: 44px;
    top: 0%;
    left: 0%;
    transform: rotate(340deg);
    @media (max-width: 594px) {
      top: -10%;
      left: -3%;
    }
  }
  .course-box{
    .hot-card{
      border-radius: 10px 10px 10px 10px;
      position: relative;
      background-color: #6BC3C0;
      transition: .1s;
      &:hover {
          transform: scale(1.05);
        }
    }
  }
  .plan{
    position: relative;
    table td,table ,th{
      margin: 0;
      vertical-align: middle;
    }
    td{
      align-items: center;
      line-height: 2;
    }
    .medal{
      position: relative;
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726213800865.png') no-repeat center center / cover;
        width: 60px;
        height: 60px;
        top: 53%;
        right: 0%;
        position: absolute;
      }
    }
  }
  .reservation-button{
    .btn-tomato{
      background-color: #ffffff;
      color: #E96463;
      border: 1px solid #E96463;
      transition: .1s;
      &:hover {
        transform: scale(1.05);
        background-color: #E96463;
        color: #ffffff;
        .bi-chevron-double-right{
          transform: translateX(3px);
        }
      }
      &:active {
        transform: scale(1);
        background-color: #E96463;
        color: #ffffff;
      }
    }
  }
  .text-tomato{
    color: #E96463;
  }
</style>

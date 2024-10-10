<template>
  <Loading :active="isloading" :z-index="1060"/>
  <div class="reservation-bg mb-3">
    <h2 class="bg-banner">預約報名</h2>
  </div>
  <Breadcrumb class="navigation container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
  <main>
    <div class="container my-lg-9 mt-5 mb-9">
      <div class="text-center text-primary pb-8">
        <p class="main-title fs-1 fw-bold">開始預約</p>
      </div>
      <VForm v-slot="{ meta }" ref="form" @submit="sendOutOrder">
          <div class="my-lg-10">
            <h2 class="text-center my-lg-10 my-4">1. 選擇課程</h2>
            <div class="row d-flex flex-reverse justify-content-center">
              <div class="col-lg-4 col-md-6 d-lg-block d-md-block d-none">
                <div id="hot-1" class="hot-card shadow">
                  <div v-if="changeCourse.title === '課程二'" class="hot-logo"></div>
                  <div>
                    <div class="hot-card-img">
                      <img :src="changeCourse.imageUrl" alt="hot-course-img">
                    </div>
                    <div class="hot-card-title">
                      <p class="hot-course">{{ changeCourse.title }}</p>
                      <h4 class="fw-semibold pt-5">{{ changeCourse.title }}</h4>
                      <div class="d-flex justify-content-between align-items-center p-4 pb-5">
                        <span class="price">NT$ {{ changeCourse.price }}</span>
                        <span class="d-flex align-items-center fw-bold">推薦指數：
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <div v-if="changeCourse.title === '課程三'">
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <div v-if="changeCourse.title === '課程二'">
                            <div v-for="item in starData" :key="item.num" class="d-flex">
                              <i v-for="star in item.reta"
                              :key="star" class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 bg-card
              select-card d-flex flex-column justify-content-between
              p-5">
                <select v-model="courseData" name="title" as="select" class="form-select w-100">
                  <option value="" selected disabled>請選擇課程</option>
                  <template v-for="(course, index) in courseCard" :key="index.id">
                    <option
                    :value="course.id"
                    :id="`course${course.id}`">{{ course.title }}</option>
                  </template>
                </select>
                <div class="d-grid gap-4">
                  <h5 class="my-3 fw-bold">課程內容：</h5>
                  <p>{{ changeCourse.content }}</p>
                  <p>{{ changeCourse.hours }}</p>
                </div>
                <div class="price text-end">$NT {{ changeCourse.price }}</div>
              </div>
              <div class="d-lg-none d-md-none mt-3">
                <div id="hot-1" class="hot-card shadow">
                  <div v-if="changeCourse.title === '課程二'" class="hot-logo"></div>
                  <div>
                    <div class="hot-card-img">
                      <img :src="changeCourse.imageUrl" alt="hot-course-img">
                    </div>
                    <div class="hot-card-title">
                      <span class="hot-course">{{ changeCourse.title }}</span>
                      <h4 class="fw-semibold pt-5">{{ changeCourse.title }}</h4>
                      <div class="d-flex justify-content-between align-items-center p-4 pb-5">
                        <h6 class="price">$NT {{ changeCourse.price }}</h6>
                        <span class="d-flex align-items-center fw-bold">推薦指數：
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <div v-if="changeCourse.title === '課程三'">
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <div v-if="changeCourse.title === '課程二'">
                            <div v-for="item in starData" :key="item.num" class="d-flex">
                              <i v-for="star in item.reta"
                              :key="star" class="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-lg-10 mt-5">
            <h2 class="text-center my-lg-10 my-4">2. 選擇上課地區</h2>
            <div class="row">
              <div class="col-lg-4" v-for="(teacher) in teacherData" :key="teacher.id"
              name="terms" type="radio"
              :value="true" :unchecked-value="false">
                <label class="business-card"
                :for="`teacher${teacher.id}`" :class="{'selected': teacher.id === teacherAreaData}">
                  <input type="radio" name="teacher-card" :value="teacher.id"
                  :id="`teacher${teacher.id}`" placeholder=""
                  v-model="teacherAreaData" class="form-check-input">
                  <div class="teachers-img">
                    <img :src="teacher.img" alt="teacher" class="img">
                    <p class="area">{{ teacher.area }}</p>
                  </div>
                </label>
                <div class="text-center pt-lg-4 pb-4">
                  <span>{{ teacher.name }} 教練</span>
                </div>
              </div>
            </div>
          </div>
          <section class="my-lg-10 mt-5">
            <div class="container">
              <h2 class="text-center my-lg-10 my-4">3. 選擇日期 / 時段</h2>
              <div class="row justify-content-center mb-5">
                <div class="col-lg-7">
                  <div class="select-card bg-card p-5">
                    <div class="">
                      <div class="mb-4 date">
                        <label class="d-block pb-2" for="due_date">年／月／日</label>
                        <input type="date" value="2024-09-23" min="2024-09-23"
                        max="2028-09-17" class="form-select mb-4 p-2"/>
                        <div class="border-top"></div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between d-grid gap-4">
                      <label for="am" class="form-check-label">
                        <input type="radio" name="time" value="AM"
                        checked="" class="form-check-input" id="am" />
                        上午時段（09:30 ~ 13:30）
                      </label>
                      <label for="pm" class="form-check-label">
                        <input type="radio" name="time" value="PM"
                        id="pm" class="form-check-input" />
                        下午時段（15:30 ~ 20:30）
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <h2 class="text-center my-lg-10 mb-4">4. 付款方式</h2>
                <div class="row justify-content-center">
                  <div class="col-lg-7">
                    <div class="select-card p-5 d-flex flex-column
                    justify-content-between bg-card">
                      <div>
                        <div class="payment d-flex justify-content-center mb-lg-0 mb-4">
                          <select class="form-select w-100 mb-4 p-2">
                            <option value="信用卡">信用卡</option>
                          </select>
                        </div>
                      </div>
                      <div class="text-end">
                        <span class="fw-semibold">NT$ 1000／預繳訂金</span>
                      </div>
                      <p class="text-end text-danger mt-3">※需先預繳訂金 NT 1000 元，上課後補差價</p>
                    </div>
                  </div>
                </div>
            </div>
          </section>
          <div class="d-flex justify-content-center mb-lg-9 mt-4">
            <button type="submit" class="btn btn-lg btn-danger px-4 text-white"
            :disabled="!meta.valid">立刻預約</button>
          </div>
      </VForm>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import 'vue-loading-overlay/dist/css/index.css';
import Loading from 'vue-loading-overlay';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      courseData: '-O8bHmvb-SauLw7a86bW',
      teacherAreaData: '',
      due_date: '',
      courseCard: [
      ],
      teacherData: [
        {
          id: 1,
          name: '吳三寶',
          area: '北',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181000114.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ULspeUkNFmbPwqvNkURLO2xc09xiKJKUlgDzPwtks5lpt6ckLZQcXj8O%2Fy%2Be7UjGWrn28if9SdDKC3xAfO3nFNc%2F7ft9sqE%2BJpfDaV4z%2F8RNq40V5%2F6gpJqVbH4QUuOnZr5kg36H2g5mpn0np1gTld8TEiWUo08XuDqilA7FYIzfBv2X2YtJYyg4T7o2nsejqtsgQCTgjrP8e9k3y1p2TFuu%2F557fyyy8KMgu64218YbBf0efZkOR6%2BDXTDsggeSdlUB3sxeUPi7xAcWkQVkUM4eerLAUB0%2BXUKc%2Flkm15N3Cbnxth%2Btzhj%2FWGkcCYTPW5mVYWSE%2F2oAhB0KKu2Q9w%3D%3D',
        },
        {
          id: 2,
          name: '郝安銓',
          area: '中',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181044785.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sy9N8e1n8zeM%2FHGv%2Bba0cc4fdRQ4EW%2B8G6dFyY6f0vIVkKKzz12QVjdoengkHBsYVjUInnv1cGnHmzkkbzPrSDu%2FVJwx4oO7NyoSjJu6S%2FHC9sm1V0OAwUgdXURCumCItfG4NDLd%2Fm8Lc7%2FlgbQk0ep9yU7A0E4Wai9sOYkLpqIBy6Ec4DpAVCi7rnCWqaaRnXQjnsLWkD6flqFHRjfXBipdQxD%2FARCBZ7wlwJ9GWRcemMdbl8ctpqAJscGKSgfuA%2FnuVvGZhQiLvg%2B%2FVvZtO0jHWm9JzkkyAtCyZiKzgTxg28ogWueFtMf%2BNQ6DAbTzwiFwdvMRM5VOwAg%2BqZWykw%3D%3D',
        },
        {
          id: 3,
          name: '甄卉葶',
          area: '南',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725181024527.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ei13M0Q3AEd7DeG5o%2Bc%2FVa1eQ63u9li%2BjaImCzVcU6DIcJRk6UDYPQQJsL%2B27xhXyqKlsl4qBlJLWiSna8Qq1aL3zTiPYfJqB8A1MCW2xKygD3kqb51RbzCJ97%2BL%2BMLanpTSgiRLltXa0lelX8JwiVUlPNE8Mwm%2FB7SC7s315bs0XdFhttfzGXtsCHCd6GGA2L13jQZtzetvZPq3Op21wJeIlTqEJLkEr3464PhypbOOS3U5CHTL5Hgy%2Bal5ScZd4sFGmz0TUZs%2FDtdtpngB1n5uEmaqBKbzYzJExzJijfor1OAv%2BPCEdm56GmVF5sXs8hJXu1zw0eHP0ywBArrnjg%3D%3D',
        },
      ],
      starData: [
        {
          name: '',
          reta: 2,
        },
      ],
      form: {
        user: {
          name: '',
          address: '',
          tel: '',
        },
      },
      isloading: false,
      pageBreadcrumbList: ['reservation'],
    };
  },
  methods: {
    getCourseData() {
      this.isloading = true;
      axios.get(`${VITE_URL}/api/${VITE_PATH}/products/All`)
        .then((res) => {
          this.courseCard = res.data.products;
          this.isloading = false;
        })
        .catch((error) => {
          Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            icon: 'error',
            title: error.response.data.message,
          });
        });
    },
    sendOutOrder() {
      this.$router.push('/checkout');
    },
  },
  computed: {
    changeCourse() {
      const defaultCourseData = {
        title: '',
        text: '',
        price: '',
        start: '<i class="bi bi-star-fill"><i class="bi bi-star-fill">',
        content: '',
        hours: '',
        imageUrl: '',
      };
      const courseData = this.courseCard.filter((course) => course.id === this.courseData);
      return courseData[0] || defaultCourseData;
    },
    clickAreaCardData() {
      return this.teacherData[this.teacherAreaData - 1] || {};
    },
  },
  watch: {
    due_date() {
      const dateTime = new Date(this.emitVoucher.due_date * 1000).toISOString().split('T');
      [this.due_date] = dateTime;
    },
  },
  components: {
    Breadcrumb,
    Loading,
  },
  mounted() {
    this.getCourseData();
  },
};
</script>

<style lang="scss">
  .main-title{
    @media (max-width: 375px) {
      &::before{
        left: 35%;
        bottom: -30%;
        position: absolute;
      }
    }
  }
  .reservation-bg{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1727699785736.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AZzRJrQbv7lUBDBeNY35Y2X%2FxyQBspe1n3RCJCUNUJ0h1NtMqpihwcgAmTf6%2BLo7IB8LJyZJA7w7S4K2q49sw431fePgAzVDk0P9nl%2BJscnjjTGrbTKjDcU0o6OfylHNy2xfiU1KqC9JDfG3wueOrLZfhNpHV5DIrWPRpjNJUnBvDyAWlhaQxxvJkZgN2mcVCnrzOD%2BGYfiPCmt1DNGx6TMAMK69A3tDFNVwpMNYo078pYELh0qFo%2FR%2Fzl27XubMy160CyZvXC04NsSgDjIMYWXDMzHWTXaWAxIxs8Y0ddKFkYVWP7rG7bwKir%2BC5lgt3N5lXIYHFHotUU164WiuPA%3D%3D') no-repeat center bottom / cover;
    width: 100%;
  }
  .bg-card{
    background-color: #f0efef;
    border-radius: 10px;
  }
  .hot-card{
    border-radius: 10px 10px 10px 10px;
    position: relative;
    background-color: #6BC3C0;
  }
  .hot-logo{
    position: absolute;
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726142978878.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iZGnbzjaDhronILtnC%2BG48C1w%2Bf%2FxZCQJdSvMNXLm8hE0Bznafply7uNr8dV8ZHBPpwBsARZilT5uZY05PXNzZqiyqXRd9ndRQe2X2rZSOcWj2YOFS%2FHk293PKqy0EWRL%2FKz0VOssNG0eHTor2pd9e0gZvnr2hwggnE%2FuKuzuG8QRNjjUXftCBblSWtVNF8MUKYNQKcv7yAIxI7WOl7unF0klr%2BsVPp1dK%2BP84eSWn75w%2FSZ50upYIUTYunWjKpoE5HNOVxDlO2sGfWC4zbXBVy%2BcwNbDno4R3g53R1SqP1fDzo241vTnx8ikc5cMBmOCV5bAGQvrpALhvqj0Spzpw%3D%3D') no-repeat center center / cover;
    height: 44px;
    width: 44px;
    top: 0%;
    left: 2%;
    transform: rotate(340deg);
  }
  form{
  padding: 20px;
  }
  .teachers-img{
    position: relative;
    .img{
      opacity: 0.3;
      transition-duration: 0.2s;
    }
    .area{
      position: absolute;
      bottom: -10%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4vw;
      font-weight: 800;
      color: #444040;
      padding: 0 20px;
      opacity: 3;
      @media (max-width: 988px) {
        font-size: 17vw;
      }
    }
  }
  .business-card {
    border-radius: 20%;
    background-color: #f0efef;
    border: 8px solid transparent;
    &.selected {
      border: 8px solid #5BAADF;
      .img{
      opacity: 1;
      }
    }
    &:hover {
      border: 8px solid #5BAADF;
      cursor: pointer;
      .img{
      opacity: 1;
      }
    }
    // 把 input 藏起來
    & .form-check-input {
      position: absolute;
      display: none;
    }
  }
  .date{
    label{
      font-size: 12px;
    }
  }
  input, option{
    padding: 5px;
    text-align: center;
    letter-spacing: 1.5px;
  }
  .select-card{
    select{
      width: 50%;
      padding: 5px;
    }
  }
</style>

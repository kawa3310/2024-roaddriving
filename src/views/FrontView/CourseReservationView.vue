<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="reservation-bg mb-3">
    <h2 class="bg-banner">預約報名</h2>
  </div>
  <Breadcrumb class="navigation container mt-3" :page-breadcrumb-list="pageBreadcrumbList"/>
  <main>
    <div class="container my-lg-9 mt-5 mb-9">
      <div class="text-center text-primary pb-8">
        <p class="main-title fs-1 fw-bold">開始預約</p>
      </div>
      <VForm v-slot="{ meta }" ref="form" @submit="addCart()">
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
                          <div class="d-flex justify-content-center pt-1">
                            <i v-for="star in changeCourse.stars"
                            :key="star" class="bi bi-star-fill"></i>
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
                <select v-model="form.product_id" name="field"
                as="select" class="form-select w-100">
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
                          <div class="d-flex justify-content-center pt-1">
                            <i v-for="star in changeCourse.stars"
                            :key="star" class="bi bi-star-fill"></i>
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
              name="terms" type="radio" as="radio"
              :value="true" :unchecked-value="false">
                <label class="business-card"
                :for="`teacher${teacher.id}`" :class="{'selected': teacher.title === form.address}">
                  <input type="radio" as="radio" name="teacher-card"
                  v-model="form.address" :value="teacher.title"
                  :id="`teacher${teacher.id}`" placeholder=""
                  class="form-check-input">
                  <div class="teachers-img">
                    <img :src="teacher.imageUrl" alt="teacher" class="img">
                    <p class="area">{{ teacher.area }}</p>
                  </div>
                </label>
                <div class="text-center pt-lg-4 pb-4">
                  <span>{{ teacher.title }} 教練</span>
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
                        max="2028-09-17" class="form-select mb-4 p-2" v-model="form.date"/>
                        <div class="border-top"></div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between d-grid gap-4">
                      <label for="am" class="form-check-label">
                        <input type="radio" name="time"
                        class="form-check-input" id="am"
                        value="上午時段（09:30 ~ 13:30）" v-model="form.time"/>
                        上午時段（09:30 ~ 13:30）
                      </label>
                      <label for="pm" class="form-check-label">
                        <input type="radio" name="time"
                        id="pm" class="form-check-input"
                        value="下午時段（15:30 ~ 20:30）"
                        v-model="form.time"/>
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
                          <select class="form-select w-100 mb-4 p-2" v-model="form.payment">
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
import Loading from 'vue-loading-overlay';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

const { VITE_URL, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      due_date: '',
      courseCard: [
      ],
      products: [],
      teacherData: [],
      form: {
        product_id: '-O8uWyxkwFrCVqMWH7hz',
        address: '',
        date: '',
        time: '上午時段（09:30 ~ 13:30）',
        payment: '信用卡',
        qty: 1,
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
          this.products = res.data.products;
          this.filterData(this.products);
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
    filterData(data) {
      const filterTeacher = [];
      const filterProducts = [];
      data.forEach((item) => {
        if (item.category === '地區') {
          filterTeacher.push(item);
          this.teacherData = filterTeacher;
        } else if (item.category === '課程') {
          filterProducts.push(item);
          this.courseCard = filterProducts;
        }
      });
    },
    sendOutOrder() {
      this.$router.push('/checkout');
    },
    addCart() {
      if (this.form.product_id && this.form.address && this.form.date && this.form.time !== '') {
        axios.post(`${VITE_URL}/api/${VITE_PATH}/cart`, { data: this.form })
          .then(() => {
            Swal.fire({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              icon: 'success',
              title: '已成功填寫預約表單',
            });
            this.sendOutOrder();
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
      } else {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          icon: 'error',
          title: '請確實填寫預約表單',
        });
      }
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
      const courseData = this.courseCard.filter((course) => course.id
      === this.form.product_id);
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
    LoadingSvg,
  },
  mounted() {
    this.getCourseData();
  },
};
</script>

<style lang="scss">
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

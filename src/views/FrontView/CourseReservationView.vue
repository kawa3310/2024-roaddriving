<template>
  <div class="empty-content"></div>
  <section class="container mt-3">
    <div aria-label="breadcrumb">
      <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
        <li class="breadcrumb-item">
          <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink class="d-flex align-items-center" to="/reservation">預約報名</RouterLink>
        </li>
      </ol>
    </div>
  </section>
  <main>
    <div class="container my-lg-9">
      <h1 class="text-center mb-lg-9">開始預約</h1>
      <form action="">
        <h2 class="text-center mb-lg-9">1. 選擇課程</h2>
        <div class="row d-flex flex-reverse">
          <select class="col-4" v-model="courseData">
            <template v-for="(course) in courseCard" :key="course.id">
              <option :value="course.id"
              :id="`course${course.id}`">{{ course.title }}</option>
            </template>
          </select>
          <p>{{ courseData }}</p>
            <div class="col-3 card">
              <div id="hot-1" class="hot-card">
                <div v-if="courseData.title === '課程二'" class="hot-logo"></div>
                <div class="hot-card-img">
                  <img :src="courseData.img" alt="hot-cours-img">
                </div>
                <div class="hot-card-title">
                  <span class="course-side">{{ courseData.title }}</span>
                  <h6 class="pt-3">{{ courseData.title }}</h6>
                  <div class="d-flex justify-content-between align-items-center p-4">
                    <span class="price">{{ courseData.price }}</span>
                    <span class="d-flex align-items-center fw-bold">推薦指數：
                      <p class="d-flex" v-html="courseData.start"></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="mt-9">
          <h2 class="text-center">2. 選擇上課地區</h2>
          <ul class="row mt-5">
            <li class="col-4" v-for="(teacher) in teacherData" :key="teacher.id">
              <label class="business-card"
              :for="`teacher${teacher.id}`" :class="{'selected': teacher.id === teacherAreaData}">
                <input type="radio" name="teacher-card" :value="teacher.id"
                :id="`teacher${teacher.id}`"
                v-model="teacherAreaData" class="form-check-input">
                <div class="teachers-img">
                  <img :src="teacher.img" alt="teacher" class="img">
                  <p class="area">{{ teacher.area }}</p>
                </div>
              </label>
              <div class="text-center pt-4">
                <span>{{ teacher.name }} 教練</span>
              </div>
            </li>
          </ul>
          <input type="submit" class="submit" value="送出">
        </div>
      </form>
    </div>
  </main>
  <section class="mt-4">
    <div class="container">
      <div class="row">
        <p class="text-end text-danger mb-3">※需先預繳訂金 NT 1000 元，上課後補差價</p>
        <div class="col-6">
          <div class="select-card p-3">
            <h2 class="text-center">3. 選擇日期 / 時段</h2>
            <div class="d-flex justify-content-center mt-4">
              <div class="w-50 mb-4 date">
                <label class="d-block pb-2" for="due_date">年／月／日</label>
                <input type="date" value="2024-09-17" min="2024-09-17"
                max="2028-09-17" class="w-100 mb-4"/>
                <div class="border-top"></div>
              </div>
            </div>
            <div class="d-flex justify-content-center d-grid gap-4">
              <label for="checkbox">
                <input type="checkbox" name="timeAM" value="AM" checked />
                上午時段（09:30 ~ 13:30）
              </label>
              <label for="checkbox">
                <input type="checkbox" name="timePM" value="PM" />
                下午時段（15:30 ~ 20:30）
              </label>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="select-card h-100 p-3 d-flex flex-column justify-content-between">
            <h2 class="text-center">4. 付款方式</h2>
            <div class="w-100">
              <div class="payment d-flex justify-content-center">
                <select class="w-50">
                  <option value="信用卡">信用卡</option>
                </select>
              </div>
            </div>
            <div class="text-end">
              <span class="fw-semibold">NT$ 1000／預繳訂金</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-center mt-9">
    <button type="button" class="btn btn-outline-danger">立刻預約</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseData: '',
      teacherAreaData: '',
      due_date: '',
      courseCard: [
        {
          id: 1,
          title: '課程一',
          text: '推薦給初學者的你',
          price: 'NT$ 4500',
          start: '<i class="bi bi-star-fill"><i class="bi bi-star-fill">',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D',
        },
        {
          id: 2,
          title: '課程二',
          text: '開課至今最受歡迎的課程！',
          price: 'NT$ 8500',
          start: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D',
        },
        {
          id: 3,
          title: '課程三',
          text: '推薦給想客製化加強的你',
          price: 'NT$ 3000',
          start: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132467692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mrmXZ3GzWLorlqmUfwqlj%2FPJir5S%2FqTcrP3%2FazZF791h5nEt2iUI74Kyblf4PWaRv2NilEGrFPrTDwiHfrxmE6%2FhXEFo7OI1%2BW%2BAsV9QXhJ3WCATjTK6loW%2BxWQFNA0i5NmPJKtHBythECkwOYfet5Q%2BwQ7DlGdaCd4eByI45HX5AoUwnp7IrkuRmqV2JXwFI8M0uF1z9YVOvYXTRFYLy40HYEKL4nxMP44jkiAhnebIbCWtd%2FVmx%2FBrIpTfxUOVLyf%2BOD0JsvKdOPxQicJ8aYGl0lYG51HimNKcdIGPDiPVXcKZNh5p0uvRiQFzfh8wrIqYqqC76APYOidG4sq8rw%3D%3D',
        },
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
    };
  },
  methods: {
  },
  computed: {
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
};
</script>

<style lang="scss">
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
  .hot-card-img{
    border-radius: 10px 10px 10px 10px;
  }
  .hot-card-title{
    text-align: center;
    border: 1px solid #969191;
    border-radius: 10px 10px 10px 10px;
    background-color: #fff;
    position: relative;
    .bi-star-fill{
      color: #fad54f;
    }
    .course-side{
      position: absolute;
      font-size: 10px;
      top: 3%;
      left: 2%;
      border: 1px solid #93463f;
      background-color: #db7369;
      color: white;
      border-radius: 20px;
      padding: 5px;
    }
  }
  form{
  border:3px solid gold;
  padding: 20px;
  }
  .teachers-img{
    position: relative;
    .img{
      opacity: 0.7;
    }
    .area{
      position: absolute;
      bottom: -10%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4vw;
      color: #444040;
      padding: 0 20px;
      opacity: 3;
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
    border: 1px solid #000;
    border-radius: 10px;
    select{
      padding: 5px;
    }
  }
</style>

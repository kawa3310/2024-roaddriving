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
        <div class="row">
          <select class="col-4" v-model="selOption" @change="changeVal($event)">
            <template v-for="(course, index) in courseCard" :key="index">
              <option :value="course.id">{{ course.title }}</option>
            </template>
          </select>
          <div>選{{ selOption }}</div>
          <template>
            <div class="col-3 card">
              <div id="hot-1" class="hot-card">
                <div class="hot-card-img">
                  <img src=".img" alt="hot-cours-img">
                </div>
                <div class="hot-card-title">
                  <h6 class="pt-5">{{  }}</h6>
                  <div class="d-flex justify-content-between align-items-center p-4">
                    <span class="price">{{  }}</span>
                    <span class="d-flex align-items-center fw-bold">推薦指數：
                      <p class="d-flex"></p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="mt-9">
          <h2 class="text-center">2. 選擇上課地區</h2>
          <ul class="row mt-5">
            <li class="col-4" v-for="(teacher) in teacherData" :key="teacher.id">
              <label class="business-card"
              :for="`${teacher.id}`" :class="{'selected': teacher.id === teacherArea}">
                <input type="radio" name="teacher-card" :value="teacher.id" :id="`${teacher.id}`"
                v-model="teacherArea" class="form-check-input">
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
  <div v-for="course in courseCard" :key="course.img">
    <div class="col-3 card">
      <div id="hot-1" class="hot-card">
        <div class="hot-card-img">
          <img id="change" :src="course.img" alt="hot-cours-img">
        </div>
        <div class="hot-card-title">
          <h6 class="pt-5">{{ course.text }}</h6>
          <div class="d-flex justify-content-between align-items-center p-4">
            <span class="price">{{ course.pirce }}</span>
            <span class="d-flex align-items-center fw-bold">推薦指數：
              <p class="d-flex" v-html="course.start"></p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selOption: '',
      teacherArea: '',
      courseCard: [
        {
          id: 1,
          title: '課程一',
          text: '推薦給初學者的你',
          pirce: 'NT$ 4500',
          start: '<i class="bi bi-star-fill"><i class="bi bi-star-fill">',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D',
        },
        {
          id: 2,
          title: '課程二',
          text: '開課至今最受歡迎的課程！',
          pirce: 'NT$ 8500',
          start: '<i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i>',
          img: 'https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D',
        },
        {
          id: 3,
          title: '課程三',
          text: '推薦給想客製化加強的你',
          pirce: 'NT$ 3000',
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
    changeVal(e) {
      this.selOption = e.target.value;
      console.log(e.target.value);
    },
  },
  computed: {
    clickAreaCardData() {
      return this.teacherData[this.teacherArea - 1] || {};
    },
  },
};
</script>

<style lang="scss">
  .hot-card{
    border-radius: 10px 10px 10px 10px;
    position: relative;
    background-color: #6BC3C0;
    transition-duration: 0.3s;
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

</style>

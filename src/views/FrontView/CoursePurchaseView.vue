<template>
  <div class="empty-content"></div>
  <main>
    <div class="course-bg mb-3">
      <h2 class="course-banner">課程內容</h2>
    </div>
    <div class="container">
      <div aria-label="breadcrumb">
        <ol class="breadcrumb px-0 mb-0 py-2 fs-7 justify-content-start">
          <li class="breadcrumb-item">
            <RouterLink class="text-muted" :to="`/`">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink class="d-flex align-items-center" to="/purchase">購買課程</RouterLink>
          </li>
        </ol>
      </div>
    </div>
    <div class="container">
      <div class="text-center d-grid gap-7 my-lg-9 my-5">
        <h2>安全行車知識</h2>
        <h2>無論是車前檢查或者是起步前注意事項</h2>
        <h2>所有行車眉角一步一步教會你</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975500350.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ll1yj1VvnhcdzltZ7Ko5fuhGdmV7IhEpMRjuUdi1bdMEMLCWCx9lwyErYAAyaNdjpTJwTtjRuYUzYtKVJ14qP6%2Fdm91CxAwFVWkzpJE4U8NjoomIfx%2FagDuANmcz7u%2Fz8u125jCKF6WZUt14Dc%2Bwq5xqWjIotz8sHdcd8bULI6TaugDIf3XiLU8ed2o2Y31LJgv%2B5hT8w13e7Q6Eu%2BkwB4fe6b0AafRzMfqgB7FdBNoX1FEb%2FU4n0xicTVKxYJqnEY5fl2Y3QV22liyswpbhLAYXQ16bMnvqLsRMcFGbuJkUsbZpF28KQTZk4g9c9bRdxE4jf9h%2BWSbO%2Brg0S2%2Fckg%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p class="text-nowrap">行車前檢查</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975657362.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OwcjYS%2BQjchxvHGhDXYp%2F2St6fd%2BQ8xZmoCSTzLKLvZAMANBh2VFSy4Ohz5SWooa4K0CV%2BPIj74Is9csHeV%2BhWcFcXER3ERC7%2FATynjqto9RWFaZya4OY6DLAl%2BheqSPlTpy1YGnhKKi%2BAoPQ6PFH8dCMb%2BD%2FCgVDQ9O7Yw1jbxITPyZTyOGlweZRTF9rILoo5yWMuFRy7vHqvVxpQVhmcAwIlnVZiYs%2BWgEgvnchEgIeaeafyq74zjK9TAN%2FzlWO7JEqyzszRUddpP3YTTrc%2FVsC8T7lwzGkpN2p1k2iVLfd02fbpxGB7HYHV5mf14wnEonguYCltdH%2FHwWbmz8bQ%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p>行車知識</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975612101.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bXyPFHcvNFXAz7j3Q67lsEOTOcxyZhgsMYNITmBkLieAoiRSsnmG0eW4BEdb0RkYo00BRY%2FxTuuXjikh79m1Uecd%2FMluAxo0RTrqvDHyqGt%2BsVDYbYqw8r34rHBpW8LoxGq428c4M9vk%2FBgrKqC%2BWccdJvVw47emZ25x8CxtzARu%2F8PCOx04UtG%2Fzibn7Dd4frL7W56Kp3MR7B0Bx5v66KRc%2FxsU%2BkSkaUtHdBJRtrx0Gx6dCleyRXLUIJ7Biz65HVx8rWHka0TFeeEraRhP49BgCuyAgpwY1NTaaGEZv0nbQd4bFwNncSrX9PLP5x0YZDhR94jPcli5S2MTNu9PfA%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p>路邊停車</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975632075.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mAC%2BjT3Qxj%2FIS0Z28xaqCtm68ekcJe6rXlXldkxyjO8janepsZxVblFl600Q%2Br7C%2F4oOc9KVCavIs%2B9KzSCLsjXlyIJp9WVjo7rqyUaPJxuyQE9Mkf8VX1OQLWaeP6CKJXvpE95ZfxsxwbQuaLOEFq%2FsqA4MIJHAi4sFU0Dtvh00cxjNAjtMnidLByJJzw2JkWH3dK%2BiK26RBhuc65%2BDCtXxaawZ%2Bgs6J9q89BRZ0X7JIl475WsXnbLEIUd%2BSzwNx7e%2FEoOzD%2FCDLfcruSB7zccoV3MA%2BZZwzex4TLYqGoOsBUdO0Va81vm1uz%2FOfLbTzcM9vaXluPRcOsjMk4S8Xg%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p>倒車入庫</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975681482.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=k0ZAciNmWARkpmSmMA%2BpSXCLcBwNNBHQUbHQw0BtLIq%2BVPYsAJLwSCSsRnalAaA4G8veBnZBV5Nkt0AU%2FsKZRabiVZmY6rzWnGx8F1xI0ymbqjjeitKaiZA7STL%2FCXhfIr4LETseUWbQLQZX3vvW8r65JCS0eKQx4OhW2RpvPRk1EBcUVxWtMotdxPGxsut1RHCVGyEVpnXNMZlEcxd6T6bThMPIE0g0bKIYfIf9XgmF5tpeHPTslNVqBmoR27GLmiJGgssP%2FAw5kl%2FiRihvF3S3HGg%2F6RUY%2BJBsUFTpzBKSfjNQFG1SjC6kio2rWB3KTDwXEMNZ1%2F9JeJdMX%2FBpjQ%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p>市區實戰</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-lg-9 mb-3">
          <div class="card border">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726061210888.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HBpRmTEpNWEbVaTdd4kEntRgtdjmWD%2BJUtUwhm4qDcIdD7fOiJDUdyMTO9xy3dVHNfbwXUgkBnMYNLvsMFpiPj232hvuzVPNWAFmXOY%2BSSuhuY09sGntZlmUf66Lq5Kyi7FjqbDTruM9oY3Ny8hG70M92Z1vp2qza6UKKEg4nJaSjil8j4CBcOcl0drPeTaBYuilBEj%2B63qYntoH5fymMBmrySDKT16U2iqyhXs8a8FaLuipnRYMedREawDmScsh0qazUNZ1sXHynR8chh%2BgPbrFlQJVOQF1vgOEb90ke2xqPXBTKHEUZjyPzoDXsgjwNe5NtXXQhcEuCIN0hUk8nQ%3D%3D" alt="course-img" class="card-img">
            <div class="card-title text-center">
              <p>山路實戰</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="hot-course my-lg-10 my-5">
    <div class="container">
      <h2 class="text-center">熱門課程</h2>
      <div class="row mt-lg-9 mt-4 justify-content-between">
        <div class="col-lg-3 col-12 mb-5">
          <div class="hot-card">
            <div class="hot-card-img">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D" alt="hot-cours-img">
            </div>
            <div class="hot-card-title">
              <span class="hot-course">課程一</span>
              <h6 class="pt-5">推薦給<span class="fs-6 text-success">初學者</span>的你</h6>
              <div class="d-flex justify-content-between align-items-center p-4">
                <span class="price">NT$ 4500</span>
                <span class="d-flex align-items-center fw-bold">推薦指數：
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12 mb-5">
          <div class="hot-card">
            <div class="hot-logo"></div>
            <div class="hot-card-img">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D" alt="hot-cours-img">
            </div>
            <div class="hot-card-title">
              <span class="hot-course">課程二</span>
              <h6 class="pt-5">開課至今最<span class="fs-6 text-danger">受歡迎</span>的課程！</h6>
              <div class="d-flex justify-content-between align-items-center p-4">
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
        <div class="col-lg-3 col-12">
          <div class="hot-card">
            <div class="hot-card-img">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132467692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mrmXZ3GzWLorlqmUfwqlj%2FPJir5S%2FqTcrP3%2FazZF791h5nEt2iUI74Kyblf4PWaRv2NilEGrFPrTDwiHfrxmE6%2FhXEFo7OI1%2BW%2BAsV9QXhJ3WCATjTK6loW%2BxWQFNA0i5NmPJKtHBythECkwOYfet5Q%2BwQ7DlGdaCd4eByI45HX5AoUwnp7IrkuRmqV2JXwFI8M0uF1z9YVOvYXTRFYLy40HYEKL4nxMP44jkiAhnebIbCWtd%2FVmx%2FBrIpTfxUOVLyf%2BOD0JsvKdOPxQicJ8aYGl0lYG51HimNKcdIGPDiPVXcKZNh5p0uvRiQFzfh8wrIqYqqC76APYOidG4sq8rw%3D%3D" alt="hot-cours-img">
            </div>
            <div class="hot-card-title">
              <span class="hot-course">課程三</span>
              <h6 class="pt-5">推薦給想<span class="fs-6 text-primary">客製化</span>加強的你</h6>
              <div class="d-flex justify-content-between align-items-center p-4">
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
  <section class="plan my-lg-10 mb-7">
    <div class="container">
      <h2>課程方案</h2>
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
                <br>實際上路：市郊區</td>
            </tr>
            <tr>
              <div class="medal d-lg-flex d-md-flex d-none"></div>
              <th scope="row">課程二</th>
              <td>3</td>
              <td>分別為 2 小時/堂、
                3 小時/堂、4 小時/堂</td>
              <td class="fw-medium">NT $8500</td>
              <td>安全行車知識、路邊停車、倒車入庫
                <br>實際上路：市郊區、高速公路、山路過彎</td>
            </tr>
            <tr>
              <th scope="row">課程三</th>
              <td>1</td>
              <td>2.5小時</td>
              <td class="fw-medium">NT $3000</td>
              <td>路邊停車、倒車入庫、高速公路、山路過彎
                <br>四項中擇三項教學</td>
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
            <tr>
              <th scope="row">內容</th>
              <td>安全行車知識、路邊停車、倒車入庫
                實際上路：市郊區。</td>
              <td>安全行車知識、路邊停車、倒車入庫
                實際上路：市郊區、高速公路、山路過彎。</td>
              <td>路邊停車、倒車入庫、高速公路、山路過彎
                四項中擇三項教學</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <RouterLink class="btn btn-outline-danger d-flex align-items-center" to="/reservation">我要上課
          <i class="bi bi-chevron-double-right"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .course-bg{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725975569922.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bc5lImlJZNhhnac0lvTuQIapo%2BQak3kb0H6IYsLjr1On4mwUBBExq3tvx6OR5BQilLdo%2B%2FNST7jkwMc554QexVIG2rW2z7TFjTebMQ%2FbfRdTF88pLG1fhsuOfUvSxHxiEKLsfVRt7sE7t%2F5zlJIOxEYpPyf6POQLNTxsVu%2Fg18O8rOhkGzrxZn0imRbFsEvWMGxWYH8fovBU%2F4xtHAlj9FJiZ8IHyD3qxoIlLQiC83qKEsB8qzoE5mPBleSznpJZ6bCnIIODHDIm5C6MXoDRjaWs4ZL5djdikthMUvHRSCsDzAiU9tPhRyLSGbrHfNVdljQPvBsTsS2PyqQxp5SnSQ%3D%3D') no-repeat center center / cover;
    width: 100%;
  }
  .course-banner{
    padding: 200px;
    border: 1px solid #fff7f7;
    background: rgba(73, 70, 70, 0.5);
    color: white;
    text-align: center;
    @media (max-width: 468px) {
      padding: 100px;
    }
  }
  .card{
    border-radius: 20px;
    border: 0!important;
    .card-img{
      width: 100%;
      height: 400px;
      position: relative;
      border-radius: 20px;
      @media (max-width: 376px) {
        height: 250px;
      }
    }
    .card-title{
      position: absolute;
      font-size: 3vw;
      margin: 0;
      bottom: 35%;
      left: 50%;
      transform: translate(-50%, 150%);
      color: #565555;
      font-weight: 900;
      @media (max-width: 992px) {
        font-size: 7vw;
      }
      @media (max-width: 376px) {
        font-size: 8vw;
      }
      p{
        border: 1px solid #a7a8a9;
        border-radius: 60px;
        padding: 8px 16px;
        background-color: #ffffff;
      }
    }
  }
  .hot-course{
    margin: 120px 0;
  }
  .hot-logo{
    position: absolute;
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726142978878.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iZGnbzjaDhronILtnC%2BG48C1w%2Bf%2FxZCQJdSvMNXLm8hE0Bznafply7uNr8dV8ZHBPpwBsARZilT5uZY05PXNzZqiyqXRd9ndRQe2X2rZSOcWj2YOFS%2FHk293PKqy0EWRL%2FKz0VOssNG0eHTor2pd9e0gZvnr2hwggnE%2FuKuzuG8QRNjjUXftCBblSWtVNF8MUKYNQKcv7yAIxI7WOl7unF0klr%2BsVPp1dK%2BP84eSWn75w%2FSZ50upYIUTYunWjKpoE5HNOVxDlO2sGfWC4zbXBVy%2BcwNbDno4R3g53R1SqP1fDzo241vTnx8ikc5cMBmOCV5bAGQvrpALhvqj0Spzpw%3D%3D') no-repeat center center / cover;
    height: 44px;
    width: 44px;
    top: -10%;
    left: -7%;
    transform: rotate(340deg);
    @media (max-width: 376px) {
      top: -10%;
      left: -4%;
    }
  }
  .hot-card{
    border-radius: 10px 10px 10px 10px;
    position: relative;
    background-color: #6BC3C0;
    transition-duration: 0.3s;
    &:hover{
      width: 320px;
      .hot-logo{
        width: 50px;
        height: 50px;
      }
    }
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
    .hot-course{
      position: absolute;
      font-size: 10px;
      bottom: -10%;
      left: 2%;
      border: 1px solid #93463f;
      background-color: #db7369;
      color: white;
      border-radius: 20px;
      padding: 5px;
    }
    span{
      font-size: 14px;
    }
    .bi-star-fill{
      color: #fad54f;
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
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726213800865.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fDBvqJMmpWC8gOS8ncgEBTN9HW%2BnBLj5d6nvEspKrWrwnDmWR4fGnoyDAIR2xnUJ5VCRISiFopLPAHsleGdNkh65Jk0qxc9NlDA7gqtVEYnOzo%2BLomxqJfOucm%2BBu4Of4krjAM5LcwBJMrCPYvwtmg1jy3rdfoWuGUOAl5EM69Y9xLaznXjVKsto3uLUdnC832liXbEtgtKjyRVT0R0tn9CQhw8cuyl29y2wpXtyHkfcJe2gHEhlK5Wz%2BfygGbj%2FYvcRJ5nBXZrUmZVnKwkYdzPK3X6To2PGYdZ8wh8PVhtRsHYCuqQnDuNvjOYdD2FRub4AUwA6Te%2FrLo5z3vb3Pg%3D%3D') no-repeat center center / cover;
        width: 60px;
        height: 60px;
        top: 53%;
        right: 0%;
        position: absolute;
      }
    }
  }
</style>

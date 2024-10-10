<template>
  <div class="empty-content"></div>
  <div class="body">
    <main class="pb-8">
      <div class="container">
        <div class="row">
          <MemberCenterLayout>
            <template v-slot:breadcrumb>
              <Breadcrumb :page-breadcrumb-list="pageBreadcrumbList" class="mt-3" />
            </template>
            <div class="course-materials my-lg-0 my-9">
              <ul class="nav nav-pills mb-lg-4" id="pills-tab" role="tablist">
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link active" id="pills-home-tab"
                  data-bs-toggle="pill" data-bs-target="#all-appointments" type="button"
                  role="tab" aria-controls="pills-home" aria-selected="true">所有預約</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728385674797.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JPFGKyMH7S8BlXkscaVvOyYWRs2ulhap5Vq0kScyCZiyGI%2BndFVDKo%2FGGWE6%2B5GviKrHp6uTJpC7X7re5tCRyTY2eNcqJsKCJOwUoWvEW46t5VzvF%2F3yIgL4CwqGPy%2B2V2gJOAreYAFeegrBjtzyiMDr66TinM9Ej%2BTAJ89sYfkAieDgS%2FqF8S6%2FHDjUd6mrQ3dJnSzyAa4%2B964W3%2FkVUwYRg%2FTLL6QbvzJJk649ap3psLIh1rn2%2FFtx%2BeHgW0sZf3qz0h8zeCv3RifbOmpluf8ZV80XDWhmjUeQ94eYtPPm4uVZMvy%2BdwWjnUTNWNrAeT2PEswM%2FR%2FLJ71KbIkO4g%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-profile-tab"
                  data-bs-toggle="pill" data-bs-target="#appointed" type="button"
                  role="tab" aria-controls="pills-profile" aria-selected="false">已預約</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728389357057.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EhhEYx3ligf05vKGyWK2TAL%2Fllpguk7RGzogCFpTvGPTxBOm4vfZBkScmGo2LYYwujJdAyVoFFFTtjMjA%2BAs3dGj2JL4XAMgi33DQo9vDAtBv%2Ffdy0P6HnQLbOwxQGEezLDqXVUnj7fpsJwxw5CViqzCQqRfy3KFSW%2F21fyhfhhmNj3%2FKjk4X91027DhNaKNg%2Fq2Xd%2F1QTHWd37JCtTz3vydtTDOvOE71MUaGnfVgaYILW1wnqgANN9RixbCUoBAIpSGVG36UtOsPf37HidctOFGRHtslPmGaOyLuIs6qoY1alo8wgUfLyOAuBs0X0GZ6OmuPLVYSGNOL%2BTurjo%2Bow%3D%3D" alt="icon" class="carIcon">
                </li>
                <li class="col-4 nav-item" role="presentation">
                  <a class="nav-link" id="pills-contact-tab"
                  data-bs-toggle="pill" data-bs-target="#finished" type="button"
                  role="tab" aria-controls="pills-contact" aria-selected="false">已完課</a>
                  <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1728389393887.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Sn8tMkZUwL1sl5G5hTfojFC3XwRaqVOXRdX2IehXodj0DfzziBx1Hp1x6Rt8um34sqi3rz8bSIVsLi%2BEX6Zl1lNEE7a875lZqjMPGmcxIgFgPJ14gW6UA5MIditd6RNQC8fbHFiNgzonJ6Nykq8Etqr43b8E9uScLqtNJfzHni2RFvLtvc8195%2BF2L%2Fvt5Gb3EpMorKeYOiKk9I3xHxjmtiy1P49NlteykDQlp%2FHUEYTTB9BxDXeTBb7NmsVQtKF%2Bf9AtzPSfc3xmRYEQy%2BTyRGcLGkHVrG%2FeHi7rLmFSa%2FiHZrdhNM9PQWUnzDEQPo8pF%2FcRynYu4NjYWSkyd85RQ%3D%3D" alt="icon" class="carIcon">
                </li>
              </ul>
              <div class="tab-content d-flex flex-column align-items-center
              justify-content-between
              pt-5">
                <div id="all-appointments" class="tab-pane fade show active order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <div class="py-3 border-top border-bottom">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程二</h6>
                              <p>預約編號：ATR443213</p>
                              <p>預約狀態：已完課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-3">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程一</h6>
                              <p>預約編號：BGA56523</p>
                              <p>預約狀態：未開課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-3 border-top border-bottom">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132467692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mrmXZ3GzWLorlqmUfwqlj%2FPJir5S%2FqTcrP3%2FazZF791h5nEt2iUI74Kyblf4PWaRv2NilEGrFPrTDwiHfrxmE6%2FhXEFo7OI1%2BW%2BAsV9QXhJ3WCATjTK6loW%2BxWQFNA0i5NmPJKtHBythECkwOYfet5Q%2BwQ7DlGdaCd4eByI45HX5AoUwnp7IrkuRmqV2JXwFI8M0uF1z9YVOvYXTRFYLy40HYEKL4nxMP44jkiAhnebIbCWtd%2FVmx%2FBrIpTfxUOVLyf%2BOD0JsvKdOPxQicJ8aYGl0lYG51HimNKcdIGPDiPVXcKZNh5p0uvRiQFzfh8wrIqYqqC76APYOidG4sq8rw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程三</h6>
                              <p>預約編號：JHU78913</p>
                              <p>預約狀態：未開課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="appointed" class="tab-pane fade order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <div class="py-3 border-top border-bottom">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726062500498.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=rAQXVb60pbAs%2FdZcqGASdoK3NPwyriCa3zlmqkwIYOmJhA%2FGBhWCSV4PyNMysWIO2geaJ70KW6Up1PvU2tlRNFPIBka1GCPY7PBm7fgucw3prJvKEw2%2FMAfo0JjY54yD3lBR2tF%2BgnoOJfXvHgStK5ryOYa5QJrytXfVXqFELVRuq%2FWZ3Bk%2FVjHl6syFQOFYvEEapZHx%2Fycu4%2Baxd1T4ljwbvN1i1o8YWMfxfDWUprWDCq%2BILN4DfE7ql4Jnel8%2FV%2FJybpeVYiFn8O2AnV7CVik5kCCQ9nkkpJnruwYOjpWHA2Glgh3bTvOBGLcbmwNhoqAec5m1ynU39QRTyRwCFw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程一</h6>
                              <p>預約編號：BGA56523</p>
                              <p>預約狀態：未開課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-3 border-top border-bottom">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132467692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mrmXZ3GzWLorlqmUfwqlj%2FPJir5S%2FqTcrP3%2FazZF791h5nEt2iUI74Kyblf4PWaRv2NilEGrFPrTDwiHfrxmE6%2FhXEFo7OI1%2BW%2BAsV9QXhJ3WCATjTK6loW%2BxWQFNA0i5NmPJKtHBythECkwOYfet5Q%2BwQ7DlGdaCd4eByI45HX5AoUwnp7IrkuRmqV2JXwFI8M0uF1z9YVOvYXTRFYLy40HYEKL4nxMP44jkiAhnebIbCWtd%2FVmx%2FBrIpTfxUOVLyf%2BOD0JsvKdOPxQicJ8aYGl0lYG51HimNKcdIGPDiPVXcKZNh5p0uvRiQFzfh8wrIqYqqC76APYOidG4sq8rw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程三</h6>
                              <p>預約編號：JHU78913</p>
                              <p>預約狀態：未開課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="finished" class="tab-pane fade order-table w-75">
                  <div class="d-flex flex-column justify-content-center">
                    <div class="py-3 border-top border-bottom">
                      <div class="row">
                        <div class="col-12 col-md-4">
                          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726132491711.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Nz4OBEKkRB9nt5Lj81xYgORzqZ1C28tS%2B5iZxKyyfg09qC2slpI109QRP9BqEGlg6OCqi%2F3SCGCT1q0396IF0%2F6FjlQFd9U2kkJUi0i0QrDcXbcib1ecY1WAsmArrwsoFr%2BCHuyQ79Ij1%2BvSTfSzVEd%2Fl64%2BFWQJ9RJnd6B03sWk%2BU49Yd7AA7TLDvrirknBVAUPVPr9VQrZw3i4jW%2FVp93dUPgQ3AcCB9wx7EWIzJy04KLa%2B%2BxVXQUIZX%2FEyWKJ2nroN%2FnN7ZzIz5siIYMJcDtHYcOkPj6waqwwK2yqgWARkWHPuxax2iY%2BXBAVYXtYL%2BzD9LeLO8WV3iPa2bMYfw%3D%3D"
                          alt="商品圖片" class="rounded-2 bg-body-secondary">
                        </div>
                        <div class="col-12 col-md-8">
                          <div class="p-4">
                            <div class="d-flex flex-column d-grid gap-3">
                              <h6>課程二</h6>
                              <p>預約編號：ATR443213</p>
                              <p>預約狀態：已完課</p>
                            </div>
                            <div class="text-end">
                              <RouterLink class="order-routerLink" to="/userOrder">看詳細</RouterLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <nav class="py-5 d-flex flex-column " aria-label="...">
                  <ul class="pagination pagination-sm">
                    <li class="page-item active" aria-current="page">
                      <a href="#" class="d-flex align-items-center">1
                        <i class="bi bi-caret-right-fill ms-3"></i></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </MemberCenterLayout>
          </div>
        </div>
      </main>
    </div>
</template>

<script>

import MemberCenterLayout from '@/layout/MemberCenterLayout.vue';
import Breadcrumb from '@/components/BreadcrumbComponents.vue';

export default {
  data() {
    return {
      pageBreadcrumbList: ['member', 'userReservation'],
    };
  },
  components: {
    Breadcrumb,
    MemberCenterLayout,
  },
};

</script>

<style scoped lang="scss">
.course-materials{
  .nav-link{
    text-align: center;
    border: 1px solid #e2e2e3;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 0px;
    color: rgb(106, 106, 106);
    font-size: 20px;
  }
  ul{
    display: flex;
    justify-content: space-between;
    li{
      position: relative;
      width: 30%;
      .active{
        background-color: #5CAADF;
        color: #fff;
      }
    }
    .carIcon{
      display: none;
      position: absolute;
      width: 40px;
      height: 30px;
      top: -30px;
      transform: rotateY(180deg) rotate(-15deg);
    }
    & .nav-link.active + .carIcon{
      display: flex;
    }
  }
}
</style>

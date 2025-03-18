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
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223961671.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=exNf%2FBHf8PxsS6px6tMuACyq%2FeMl%2Fia%2Fw6rRqyewTgxZm%2BsmiX%2FklTCIKM7Mh2bmlp0Vmu1EDmRn2mtY1aQKi%2BowLgh5DdfoMpNDykHCVK83tQDRpzIjsVkS%2F5MZ%2Fu2bbDqv66m5srm%2BqsMSbVWs6cVthtVJdF04xyXuFWhJ8phmTMYlrY%2BlcsAG5BhX26fKZ0eiT8xNPpKU0Y1RTZc5m3lKfJXVW3hB7okbHVIaBg9W3KsJ2bLfn0ZaYfGW10ajcLUx8C%2BnAwtZ1OFCktRGjlOOyD3K3oGnbNSoxJLj%2FOEA6mHqo%2FErsltp7Pama6ZXVaOUcde2ZDZMr6Sp72fXXQ%3D%3D" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-right" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223977917.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=Bqd8c1mQMYmLS32zbJxA7Dgqniaa3samfXuB8yErXywMWb55saO8vZSMWf7fjbyrqH2cGVRC3nzmp7pT80qPa8QrWWF9DZmQoT5Aqx095E%2FNZOIo%2BqmL41X%2FpEI%2BfXFBY9H7iay7x%2BZwujmeadWw3HGjeQ%2BkFzDofk%2B3k5Mq2tAOrypk%2FzWNqsFmbyXx32NR18JrkI3lJKZZXQL5gwwmPUNm4Xek8SqAU9gEowPMPQpy%2F01hu60YyPGxwxeD7gi1fZla37TXGPQoUWGAGZYFYKbwrZueFtReNLWou0uppJdPvk%2FHqzFelyV3mevN7eIxJ6j2%2FomiWWLcryY1n9pOlw%3D%3D" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-left" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223995808.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=XtEaox30v2C1MUHOkfWd8XNSetgmhb9%2BP3ZHWu1z8%2F%2BkXtRox26Y3zHRp%2FtszYaKeElDYu5cr19ZL%2FK7YCVRgMVQ6%2BiyMOEw0bT2k6N9rNmvjHpFqXy8xx%2BciqXgg9gIEhjoz1QBdFltvyLPu1T9RGBEeEOOSI9W2Tf9ocHFHLCRXwSeLaQitpR%2FyVcZ%2BTzY3FhnSGCMkAD8IWJwAm1iRv6%2FioNBKR%2FyxTxH7ODFKkvwv7ohn50FxMoRC3UMbcwcfD3yCVvM0L51kDm6sE8RHkweB9sD76vvTs5PNQYzFFLCOlPwG2dtAw18PWLBn9O%2BXukuziv1meASDsvSvT9DJg%3D%3D" alt="traffic-img">
            </div>
          </div>
          <div class="col-lg-3 mb-lg-0 mb-4" data-aos="fade-up-left" data-aos-delay="100">
            <div class="traffic">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742225054753.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=OZDB0Hc8Tx4GWCJtcKpZhSMa8DqL3J3FenCMP6JIm93rh0PVbANZLhekv7JAirqJD7k6JGmCz020l%2BmynrIPG5hvwrGvoN1cOnTCFgDswd1VEikPsYR6BFjXUTqMdnBDmFmXTplcKy2OcvCOT47SZFLUBOmKZB66QqFdE%2FlOB9z0OSagM%2B78PpJJkKNj%2BrOjZLx49QxzEa903SHSRevKL6MdxFjNjScf489GTbEfmAJnza4UviIdtoSf%2F5fgE%2Bg%2BdenR5yqul5sgWCaDezA3QMXORLCivlMTZgo6jrUCl3YqaK%2FjAPUV1fJgWsIx6XgDAsEispszM2dYkH%2BTP%2FjSRA%3D%3D" alt="traffic-img">
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
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224527303.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=e%2FjhGNku1qfQGMEgcP5Gk%2BHUEmvhmrBjmnVMwawaPxsnkmtZWfK0U%2BZD8HM2PO%2FfWazmFjLiiZlJPTHbIWPFXCkloGFU1cTlTZhghJX0jyt8eGvZALl7spmJ%2BHhHhSuEej5BAzFvWOAKVIPxUsONpjweUtNxJKYT8ndB8H1Vmy41AikSttON7TmsEutRReCCAneFTKSbDn%2Fbi8OV2eO9gurhN%2FBBfcwS1c3IWrSqMTs7wZKdMkGTkdkAu3zjt3IL99t21uymrxwv%2FFDWpZzgBlP4LqNd2tjGbw3B81odcAlbB%2FiKD7dQm5EqaeSy1XedhPq%2F%2BMi%2BEVozctEClernUQ%3D%3D" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p class="text-nowrap">行車前檢查</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224575444.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=PcIx4w%2BODMenotZUyr9MSJTdsxTPFm88UQCYYg2dH95DrfQrwacWAHgr1CE%2BSXHuslodmXUbXu%2FW8clMsNpfZTHDlqadMDKzfR%2FPjaJivj0VUC3iDcfnnIgHcT22iuL3nps1egSKR%2FBohVcES6QYqnhItvFLAQAClKRMwxph7QRqz2xjtWpwVEA4H19XGuBiNcW%2BmZJHbppEQQXEIh%2F8%2B%2Fyk%2F873PPYRlZK1Pm7RNP0E44kIM%2FuyXQNHUwP3tMlwsqTEOFoDyI%2FzizK5KqzdX%2BnSEyjhjh%2BgfH2EiYIx2hojeHmm%2BjzdbhA0rhjQR3DBG2TZFNOIXf5NYfx2tR1FHA%3D%3D" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>行車知識</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224610031.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=XoSYPwBCEC4%2BkfUbB%2F3a5fX1ErHsGNJy6PRsKgwBn1E%2FxKt4DsDCtYPUK1n%2Baq31NncKAKJ1n2qxJQ4LsyM7Dy%2BRkdbAlE8byn8uVtDOWXD7lxjsbS6Qhi8oVKrLkkoZh%2FWRuuhbx2HYNzAkqFLqzKBaY2BQG%2FqGVWooV0cYab1xLs1NqErmFQKAI%2F%2Bd01U69gHmhKhceHiJZe6V3SnzC9u32DqWJLtyrZx5NEauk%2FpoSnq0z3UOkxbQIe9JwoaE%2B%2FZV8RqOeN2r4teSTGtgYpgnYCAZR%2Fy42H23Q0TCz7EKkDtCETsj%2F%2FF9HSv7SNs1J4YmWdO75k8XcGKmqnXQaQ%3D%3D" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>路邊停車</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224633111.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=MpqYxOu3uf0la401CtZyb7B5KLE1pv5jUiZuY%2BSNBX9JQayAkri6JqOiv1noulvdPjkkvatXu9ssYfTBh31hTMcYsOli4LDpGhm6xKlk%2FSPN9A7oeUS0o%2Fwd5AIzgfCnvQhYpjgtstGWl7ByV68mNJwvix4oBwWrblyBdbCYfOUUll%2BP2r%2B%2FPSrR%2FbMzcyEoOkWJrCsoAHh7mSXALyXM87E9rdO8UxTcSKSBgAkdgBeUiwx5IFASGk1zt%2FKnWbG6PegCaWalz5Csb88Qd6ovbWO2voupTGZSf9JjXh1ECm5L1UywOwDJtR8bQH89AZzYQfgQ0DkutO9ibZDsvXJCOA%3D%3D" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>倒車入庫</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-left" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224650285.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=avsFP%2B%2BwBGzC6jHt%2FNKvPLHrTY5oBVfPmf4M80T%2FV%2By%2BTUwyePCwxua%2B3vEfSdyJk9QYNaaTO2XXvT7XNftYL5dmFkqqecP2wqAVUne%2Ft9BkcILfJkRFTyOu0%2FyEVqoK0MM6jMC8%2Bhys3CMz1ohKYLN9jejqqSJEcyuZjCp49S%2BMjAqqScVl7%2BrN7IoBlnKrl0dSb%2Bsn1pq%2Bdo3tKEC31xc1epKTIqRJXUyQQMEBFk5YtNOpwSe71Jx7XUErlVfSO8CUezW4XcGjgI%2FyA4zP7JG%2Btk7SO93Oq77w8KJvLbdOZKkj0ThCIS5X5d5teYmr5N%2BynKAXwf16mIHH42Oqwg%3D%3D" alt="course-img" class="card-img">
              <div class="card-title text-center">
                <p>市區實戰</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="flip-right" data-aos-delay="100">
            <div class="card mb-4">
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742224663980.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=WrsViJQarBhyC7CZjMSH6T%2B8EbiqQFrhBCtePO%2BHBdbPhuBIPkUF4qjzBTq0v%2FPZLDsdXcSmPx%2F791luoMWQZqDbyI88ZmPqq3P2n1hFHb3CVP463ZVc6L05gVbRkBcSeNPceVvYEWHX6T7e4pxMrU%2FQMuB2fQJ8oygoWvhHgDfs9BHkHkKXCAg%2B6b5uIGbgV%2FLEYCigHlag%2FCKwvBtraAMrAUeQEK%2BJPNU6bvS91%2B2iXEuppPnPzAaH%2FloPeaZSzv9iRtBc%2B931%2BxQKctwzM6nijStnm37%2BEL7aLrIVo4WhJl3pWMfWmjmB9YVAleMWs3y%2BmtjeKgzJRUCgtUNxLQ%3D%3D" alt="course-img" class="card-img">
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
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215283283.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=RQKiryiqjwqbN9L1MZcQVup%2BfR5BpnFOy1m7MP1VVBaIvWFGu45DBitJSUQ6hZ8Uwq0DB4pchqWwsLEQHMEqyFhs1EQG3UlAbWlumZQNP%2B7NSVItkoPL6lJpFXi%2FiaWlonUiH%2FmVEm3M%2B2NDvK1U%2Fyq3P7cL6T5LAjmmxFY8AdRI2EKMZ3CfthPs07O7pgO4CsI15QqxW5Yw6Scr5Kff2nebekZ6CSxdT5LjmJogM1unsm6GPzsT1rAaIVlNH6%2Fn51u8oSwacJ6kZyeEMUcDTrIq0byzlfjTgD1vRKa9LHu%2BtrVxBUznYfxzZzsoD2rjqKX0Kfk%2BU9bsF6ieaHT6Wg%3D%3D" alt="hot-cours-img">
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
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215266489.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=XrnFpAxdnZzw6217AEJPehnZ618F2kTqNLkFKB%2BRkt7mtrGfx2sIR9aGt3rV6bUxqJjqdqgNUKgZK9GfPbhf9J3WCxorAXPH66fG6B4Cb6j%2BGq6BvRFrO2Li%2Flv0mbqWtlHH4rAbVi0Y%2Fj%2Fcl1ol81nVDAAdYRujhyyetMyjGuLtTsUZj2eEt95HKE8IEDsbeW6MagVbAkFRTuCqrrYpPJYVLxF112ZrobXOc%2Bpk3fXSBJLw2HIsF9ajF7qVeHwaR%2F5d38vyooafnaf6eUpwToepPyv66kwUfUG2OVSHTy6%2Bq4OlkUkTqNrE5d2pE2UGCYIsv8%2F67PmD6OOSHoo6PA%3D%3D" alt="hot-cours-img">
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
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215255614.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742428800&Signature=fvi8QofrieWt0YFVW8QEaaOmjOYYK5H6nfpShbibwPNZopPLzy7jTmRDQ6B6y96mf0bFA2ym7Jjx3PohbkOOWeHkV809tAQAbsKwAU07PriQBXXQLYJswV8lLWOaFfhbz98sdqVb8m%2F5K6VsTqImOSTs%2BxBtIp76I0sjHSgD7suml6OuN1RGFSJ7o%2BowQfaMskCe8Wh%2FvZrsqZdkwYcM7Lbbsz5ZZ2WBe0xRoZcekt6QBhO6ASWaSaYrOJT2POzsTqfia5rHVa9X1TyXUbcF0V9UsK3MmTN0aHhkVS2FyYrGpBwzGkvzXdvz0UFPMT%2BFWrdw%2Fe89FXMULRn810DoWA%3D%3D" alt="hot-cours-img">
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
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742303957364.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742515200&Signature=DPdWZ8hvICRU34TBe21HAXPjg6p%2FnntLwYb8PwTUmwOO%2Bhh%2Bi9HOrCm35MQCWuMw5KWenIkWFwKIY9lDK4xtxHyvhW78hyAsRUrRjaVkAK8ziDKevSh6d1aCwcqUddZPW%2B93lAXNDDDBWfRoYafWguM5qsNV60KKLNDSkJNhrWfLaPrjgJojSUfjjViKfw9J8%2BJ3eUKlsiX7as5OFcaafe5Nz5CT1KgkU5aKbZZyYIsXZdEyIGpojjvBkZ9U8FLTq3mBpKmM4UudIGMYjHLQ%2BqFoRc7CUzJ%2FzYiRHHeGyibXgPHt9OIs4MzIWusgkskKEkA5YvKgLF808zg5z0apSg%3D%3D') no-repeat center bottom / cover;
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
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726142978878.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iZGnbzjaDhronILtnC%2BG48C1w%2Bf%2FxZCQJdSvMNXLm8hE0Bznafply7uNr8dV8ZHBPpwBsARZilT5uZY05PXNzZqiyqXRd9ndRQe2X2rZSOcWj2YOFS%2FHk293PKqy0EWRL%2FKz0VOssNG0eHTor2pd9e0gZvnr2hwggnE%2FuKuzuG8QRNjjUXftCBblSWtVNF8MUKYNQKcv7yAIxI7WOl7unF0klr%2BsVPp1dK%2BP84eSWn75w%2FSZ50upYIUTYunWjKpoE5HNOVxDlO2sGfWC4zbXBVy%2BcwNbDno4R3g53R1SqP1fDzo241vTnx8ikc5cMBmOCV5bAGQvrpALhvqj0Spzpw%3D%3D') no-repeat center center / cover;
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
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1726213800865.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fDBvqJMmpWC8gOS8ncgEBTN9HW%2BnBLj5d6nvEspKrWrwnDmWR4fGnoyDAIR2xnUJ5VCRISiFopLPAHsleGdNkh65Jk0qxc9NlDA7gqtVEYnOzo%2BLomxqJfOucm%2BBu4Of4krjAM5LcwBJMrCPYvwtmg1jy3rdfoWuGUOAl5EM69Y9xLaznXjVKsto3uLUdnC832liXbEtgtKjyRVT0R0tn9CQhw8cuyl29y2wpXtyHkfcJe2gHEhlK5Wz%2BfygGbj%2FYvcRJ5nBXZrUmZVnKwkYdzPK3X6To2PGYdZ8wh8PVhtRsHYCuqQnDuNvjOYdD2FRub4AUwA6Te%2FrLo5z3vb3Pg%3D%3D') no-repeat center center / cover;
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

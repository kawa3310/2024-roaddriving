<template>
  <Loading :active="isloading" :z-index="1060">
    <LoadingSvg/>
  </Loading>
  <div class="overflow-hidden">
    <div class="banner">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="banner-title text-center text-white">
            <h2 class="pb-7" data-aos="fade-right"
            data-aos-delay="1000">不再害怕上路</h2>
            <h2 data-aos="fade-left" data-aos-delay="1000">
              道路駕駛陪你一起<span class="ps-2 text-secondary">上山下海</span></h2>
          </div>
        </div>
      </div>
    </div>
    <section class="navigation">
      <div class="container">
        <div class="text-center text-primary mt-8 mt-lg-9 mb-9">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">
            你害怕的是什麼
          </p>
        </div>
        <div class="d-lg-none d-md-none d-grid gap-5">
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>01</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218942343.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會抓車距 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>02</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218974443.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會路邊停車 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>03</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742218989788.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不會變換車道 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>04</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219013792.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不敢上高速公路 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>05</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219030088.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>不敢開山路 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>06</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219170401.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>擔心開的不好被戰鬥邀請 ?</h5>
            </li>
          </ul>
          <ul class="col-12 situation-group d-grid gap-7 pb-3" data-aos="zoom-out-down"
          data-aos-delay="100">
            <li class="situation-item d-flex justify-content-center">
              <span>07</span>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219066887.png" alt="situation" class="situation-img">
            </li>
            <li class="text-center">
              <h5>擔心旁邊有人碎碎念 ?</h5>
            </li>
          </ul>
        </div>
        <HomeSwiper class="d-lg-block d-md-block d-none" data-aos="flip-down"
        data-aos-delay="100"></HomeSwiper>
      </div>
    </section>
    <div class="banner2 mt-8" data-aos="zoom-in" >
      <div class="container">
        <div class="banner-word pt-9 d-lg-block d-md-block d-none">
          <p class="fs-1 fw-bold text-white">不用怕!</p>
          <p class="banner2-title fs-1 fw-bol text-end text-white">
            我們<span class="text-info px-2">手把手</span>教會你!</p>
        </div>
        <div class="banner-word banner2-title d-lg-none d-md-none text-center" >
          <p class="fs-1 fw-bold text-white">不用怕!</p>
          <p class="fs-1 fw-bold text-white">
            我們<span class="text-info px-2">手把手</span>教會你!</p>
        </div>
      </div>
    </div>
    <main class="main pt-lg-9 py-8">
      <div class="container">
        <div class="text-center text-primary pb-7 pb-lg-9">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">
            一對一指導
          </p>
        </div>
        <div class="row" data-aos="flip-left"
          data-aos-duration="500" data-aos-easing="ease-in-sine">
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2001.jpg?raw=true" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>擁擠混亂的市區</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220349322.jpg" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>很快的高速公路</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220384963.jpg" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>蜿蜒崎嶇的山路</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220407603.jpg" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>路邊停車大魔王</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742220452624.jpg" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>倒車入庫二魔王</h2></li>
          </ul>
          <ul class="col-12 col-lg-4 d-grid gap-3 gap-lg-4 my-3 mb-lg-9">
            <li>
              <img src="https://github.com/kawa3310/2024-roaddriving/blob/main/public/%E4%B8%80%E5%B0%8D%E4%B8%80%E6%8C%87%E5%B0%8E%2006.jpg?raw=true" alt="carousel" class="carousel-img">
            </li>
            <li class="text-center"><h2>抓不準變化車道的時機</h2></li>
          </ul>
          <div class="purchase d-flex justify-content-center justify-content-lg-end mt-3">
            <RouterLink class="btn btn-primary d-flex justify-content-center
            align-items-center text-white" to="/purchase">
            還想看更多<i class="bi bi-arrow-right-circle ps-2"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
    <section class="tips my-lg-9 mt-8">
      <div class="container">
        <div class="text-center text-primary pb-8">
          <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="100">課程特色</p>
        </div>
      </div>
      <div class="carousel-feature">
        <div class="container">
          <div class="feature-sm d-lg-none">
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-left" data-aos-delay="100">
              <li class="card-img">
                <span class="problem rotate">這些都不是問題!</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222043426.png" alt="feature">
              </li>
              <li><h3 class="fw-bold text-center">教練一對一細心教學</h3></li>
              <li class="text-center text-white fw-normal d-grid gap-2">
                <p>還在因為不會抓車距導致偏離車道?</p>
                <p>右轉時機車貼好近讓你膽戰心驚?</p>
                <p>老是抓不到左轉的時機?</p>
                <p>掌握不到停車的訣竅讓你頭好痛?</p>
              </li>
            </ul>
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-right" data-aos-delay="100">
              <li class="card-img">
                <span class="straightway rotate">立即預約</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222108843.png" alt="feature">
              </li>
              <li><h3 class="fw-bold text-center">彈性的上課時間</h3></li>
              <li class="text-center text-white fw-normal d-grid gap-2">
                <p>時間有限</p>
                <p>工作排班制休假不固定</p>
                <p>上班族朝九晚五</p>
              </li>
            </ul>
            <ul class="feature-card d-grid gap-3 py-7" data-aos="fade-left" data-aos-delay="100">
              <li class="card-img">
                <span class="complete rotate">內容最完整</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222122711.png" alt="feature">
              </li>
              <li><h3 class="fw-bold text-center">客製化課程</h3></li>
              <li class="text-center text-white fw-normal d-grid gap-2">
                <p>無論是從零開始的初學者</p>
                <p>還是想要針對弱點進修的老手</p>
                <p>我們都提供內容豐富可客製化的課程</p>
              </li>
            </ul>
          </div>
          <div class="feature-pc d-lg-block d-none">
            <div class="d-flex flex-column justify-content-center">
              <div class="feature-card d-flex
              justify-content-center align-items-center d-grid gap-3"
              data-aos="fade-down" data-aos-delay="100">
                <div class="feature-top">
                  <div class="card-img">
                    <span class="problem rotate">這些都不是問題!</span>
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222186346.png" alt="feature">
                  </div>
                  <h3 class="fw-bold text-center pt-3">教練一對一細心教學</h3>
                </div>
                <div class="text-white fw-normal d-grid gap-3">
                  <p>還在因為不會抓車距導致偏離車道?</p>
                  <p>右轉時機車貼好近讓你膽戰心驚?</p>
                  <p>老是抓不到左轉的時機?</p>
                  <p>掌握不到停車的訣竅讓你頭好痛?</p>
                </div>
              </div>
              <ul class="feature-card d-flex justify-content-between d-grid gap-lg-3 mt-5">
                <li class="d-flex justify-content-center align-items-center"
                data-aos="fade-right" data-aos-delay="100">
                  <div class="text-white text-end fw-normal d-grid gap-3 pe-3">
                    <p>時間有限</p>
                    <p>工作排班制休假不固定</p>
                    <p>上班族朝九晚五</p>
                  </div>
                  <div class="pyramid">
                    <div class="card-img">
                      <span class="straightway rotate">立即預約</span>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222172557.png" alt="feature">
                    </div>
                    <h3 class="fw-bold text-center pt-3">彈性的上課時間</h3>
                  </div>
                </li>
                <li class="d-flex justify-content-center align-items-center"
                data-aos="fade-left" data-aos-delay="100">
                  <div>
                    <div class="card-img">
                      <span class="complete rotate">內容最完整</span>
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222122711.png" alt="feature">
                    </div>
                    <h3 class="fw-bold text-center pt-3">客製化課程</h3>
                  </div>
                  <div class="text-white fw-normal d-grid gap-3 ps-3">
                    <p>無論是從零開始的初學者</p>
                    <p>還是想要針對弱點進修的老手</p>
                    <p>提供內容豐富可客製化的課程</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="teachers py-lg-9">
      <div class="container">
        <div class="teachers-sm d-lg-none d-md-none">
          <div class="text-center text-primary pb-4 pb-lg-8">
            <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="200">
              北中南最優秀的師資
            </p>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
            </div>
            <div class="mt-2" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215342143.png" alt="teacher">
                  </div>
                </div>
                <div class="teachers-body pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h3 class="teachers-title">吳三寶 教練</h3>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>小台北駕訓班 5 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>新北竹駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>開運駕訓班 主任 5 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-primary text-white fs-4 fw-bold">中部</button>
            </div>
            <div class="mt-2" data-aos="fade-left" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-blue">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215333622.png" alt="teacher">
                  </div>
                </div>
                <div class="teachers-body  d-lg-none d-md-none pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h3 class="teachers-title">郝安銓 教練</h3>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>台中中駕訓班 2 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>彰化圓駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>開開駕訓班 4 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">南部</button>
            </div>
            <div class="mt-2" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215324062.png" alt="teacher">
                  </div>
                </div>
                <div class="teachers-body d-lg-none d-md-none pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h3 class="card-title">甄卉葶 教練</h3>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>大高雄駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>南台駕訓班 1 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>墾丁駕訓班 6 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="teachers-pc d-lg-block d-md-block d-none">
          <div class="text-center text-primary pb-4">
            <p class="main-title fs-1 fw-bold" data-aos="fade-up" data-aos-delay="200">
              北中南最優秀的師資
            </p>
          </div>
          <div>
            <div class="area pt-8">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">北部</button>
            </div>
            <div class="mt-5" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="col-7 teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215342143.png" alt="teacher">
                  </div>
                </div>
                <div class="col-4 teachers-body pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h2 class="teachers-title">吳三寶 教練</h2>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>小台北駕訓班 5 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>新北竹駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>開運駕訓班 主任 5 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="area pt-8 text-end">
              <button type="button" class="btn btn-primary text-white fs-4 fw-bold">中部</button>
            </div>
            <div class="mt-5" data-aos="fade-left" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="col-4 teachers-body pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h2 class="teachers-title">郝安銓 教練</h2>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>台中中駕訓班 2 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>彰化圓駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>開開駕訓班 4 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-7 teachers-img">
                  <div class="bg-blue">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215333622.png" alt="teacher">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="area pt-8 pb-4">
              <button type="button" class="btn btn-secondary fs-4 fw-bold">南部</button>
            </div>
            <div class="mt-5" data-aos="fade-right" data-aos-delay="200">
              <div class="row justify-content-center align-items-center">
                <div class="col-7 teachers-img">
                  <div class="bg-yellow">
                    <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215324062.png" alt="teacher">
                  </div>
                </div>
                <div class="col-4 teachers-body pt-4">
                  <div class="d-flex justify-content-center">
                    <div class="d-grid gap-3">
                      <div class="d-flex">
                      <h2 class="card-title">甄卉葶 教練</h2>
                      </div>
                      <div class="d-flex">
                        <span class="text-light text-end">資歷</span>
                      </div>
                      <div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>大高雄駕訓班 3 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>南台駕訓班 1 年</p>
                        </div>
                        <div class="d-flex justify-content-start">
                          <div class="car-icon"></div>
                          <p>墾丁駕訓班 6 年</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="textbook mt-8">
      <div class="text-center text-primary py-7 py-lg-9">
        <p class="main-title fs-1 fw-bold text-center"
        data-aos="fade-up" data-aos-delay="100">上課使用車種</p>
      </div>
      <div class="textbook-sm container d-lg-none mt-4">
        <div class="pt-7">
          <div class="py-3" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264582134.png">
            <div class="d-flex justify-content-center py-3">
              <p class="fw-medium">Honda HR-V</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264428719.jpg" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>每款車輛搭配副駕駛座煞車</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264407998.jpg" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>車輛搭載 ACC 車道置中</p>
            </div>
          </div>
          <div class="py-3" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264362436.jpg" alt="textbook-car" class="textbook-car-img">
            <div class="d-flex justify-content-center py-3">
              <div class="car-icon"></div>
              <p>倒車顯影</p>
            </div>
          </div>
        </div>
      </div>
      <div class="textbook-pc d-lg-block d-none">
        <p class="fs-5 text-center pt-3">Honda HR-V</p>
        <div class="mt-4">
          <div class="bg-wave">
            <div class="container">
            <div class="d-flex">
              <div class="position-relative pb-9">
                <div class="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="300">
                    <div class="textbook-card bg-white">
                      <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222553006.jpg" alt="textbook-car" class="card-img">
                    </div>
                  </div>
                  <div class="row pt-7">
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264428719.jpg" alt="textbook-car" class="card-img">
                        <div class="card-body d-flex justify-content-center">
                          <div class="car-icon"></div>
                          <p>每款車輛搭配副駕駛座煞車</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264407998.jpg" alt="textbook-car" class="card-img">
                        <div class="card-body d-flex justify-content-center">
                          <div class="car-icon"></div>
                          <p>車輛搭載 ACC / 車道置中</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4" data-aos="zoom-in-up">
                      <div class="card">
                        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742264362436.jpg" alt="textbook-car" class="card-img">
                        <div class="card-body d-flex justify-content-center">
                          <div class="car-icon"></div>
                          <p>倒車顯影</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

import LoadingSvg from '@/loading/LoadingSvg.vue';
import HomeSwiper from '@/components/SwiperComponents.vue';

export default {
  data() {
    return {
      isloading: false,
    };
  },
  mounted() {
    this.isloading = true;
    setTimeout(() => {
      this.isloading = false;
    }, 1000);
  },
  components: {
    HomeSwiper,
    Loading,
    LoadingSvg,
  },
};
</script>

<style lang="scss" scoped>

  .banner{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742215383027.jpg') no-repeat center center / cover;
    width: 100%;
    padding: 173px 0;
    .banner-title{
      h2{
        font-size: 4.9vw;
        @media (max-width: 468px ) {
          font-size: 7vw;
        }
      }
    }
  }
  .banner2{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742219612831.png') no-repeat center center / cover;
    width: 100%;
  }
  .banner-word{
    text-shadow: 0px 0.3px 1px black;
  }
  .banner2-title{
    padding: 160px 0 86px 0;
  }
  .carousel-img{
    height: 360px;
    border-radius: 16px;
  }
  .purchase{
    a{
      padding: 12px 24px 12px 20px;
      border-radius: 12px;
    }
    i{
      font-size: 20px;
    }
  }
  .carousel-feature{
    background-color: rgb(91 170 223 / 70%);
  }
  .feature-card{
    justify-content: center;
    margin-bottom: 51px;
    .card-img{
      max-width: 300px;
      height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 16px solid #5BAADF;
      border-radius: 500px;
      background-color: #fff;
      position: relative;
    }
    span{
      position: absolute;
    }
    .problem{
      top: -8%;
      left: -15%;
      transform: rotate(5deg);
    }
    .straightway{
      top: -3%;
      left: -9%;
      transform: rotate(15deg);
    }
    .complete{
      top: -8%;
      right: -15%;
      transform: rotate(-15deg);
    }
  }
  .rotate{
    font-size: 24px;
    font-weight: 700;
    background-color: #F6E6AF;
    border-radius: 8px;
    padding: 8px 16px;
  }
  .car-icon{
    background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1725193336922.png') no-repeat;
    width: 32px;
    height: 32px;
  }
  .bg-yellow{
    display: flex;
    justify-content: center;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222472827.png') no-repeat bottom center / 100% 100%;
      width: 80%;
      height: 83%;
      bottom: 0%;
      border-radius: 16px 16px;
    }
    & img{
      position: relative;
    }
  }
  .bg-blue{
    display: flex;
    justify-content: center;
    position: relative;
    &::before{
      content: "";
      position: absolute;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223029512.png') no-repeat bottom center / 100% 100%;
      width: 80%;
      height: 83%;
      bottom: 0%;
      border-radius: 16px 16px;
    }
    & img{
      position: relative;
      align-items: center;
    }
  }
  .textbook{
    .main-title{
      &::before{
        left: 47.5%;
      }
    }
  }
  .textbook-sm{
    background-color: #FBE4B5;
    border-radius: 50px 50px 0 0;
    & .textbook-car-img{
      margin: auto;
      max-width: 343px;
      height: 428px;
      border-radius: 16px;
    }
  }
  .bg-wave{
    position: relative;
    overflow: hidden;
    &::before{
      position: absolute;
      content: "";
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742222511308.png') no-repeat top left / 100% 100%;
      width: 100%;
      height: 1045px;
      top: 5%;
    }
  }
  .textbook-pc{
    & .card{
      height: 460px;
      border-radius: 16px;
      padding: 16px 16px 0;
      border: 0;
      .card-img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
      }
    }
  }
  .textbook-card{
    width: 970px;
    border-radius: 16px;
    & .card-img{
      width: 95%;
      height: 90%;
      margin: 0 auto;
      margin-top: 24px;
      border-radius: 16px;
    }
  }
  @media (min-width: 768px) {
    .banner{
      padding: 400px 0 400px 0;
    }
    .carousel-feature{
      position: relative;
      background-color: transparent;
      width: 100%;
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223150747.png') no-repeat top left / 100% 100%;
      padding: 80px 0;
      .feature-top{
        margin-left: 250px;
      }
    }
    .straightway{
      top: -5%;
      left: -24%;
      transform: rotate(15deg);
    }
    .feature-top{
    position: relative;
      &::before{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png') no-repeat center center / contain;
        width: 75%;
        height: 100%;
        left: 90%;
        top: 50%;
        position: absolute;
        transform: rotate(50deg);
      }
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png') no-repeat center center / contain;
        width: 75%;
        height: 100%;
        right: 90%;
        top: 50%;
        position: absolute;
        transform: rotate(-50deg);
      }
    }
    .pyramid{
      position: relative;
      &::after{
        content: "";
        background: url('https://storage.googleapis.com/vue-course-api.appspot.com/rei/1742223189647.png') no-repeat center center / contain;
        width: 85%;
        height: 100%;
        left: 101%;
        top: 0%;
        position: absolute;
      }
    }
  }
  @media (max-width: 768px) {
    .main-title{
      &::before{
        left: 35%;
      }
    }
    .textbook{
      .main-title{
      &::before{
        left: 35.5%;
      }
    }
    }
    .banner2{
      background: url('https://storage.googleapis.com/vue-course-api.appspot.com/reirei/1742223515784.png') no-repeat center center / cover;
      border-radius: 8px;
    }
    .banner2-title{
      padding: 83px 0 83px 0;
    }
  }
</style>

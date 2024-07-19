<template>
  <div>
    <section class="banner position-relative">
      <div class="container">
        <div class="row">
          <div class="col-6 offset-1">
            <span class="fs-6">健身輕時尚</span>
            <h1>DOYOGA，做你的瑜珈</h1>
            <p class="fs-4 pb-3">多給自己一點時間享受靜謐，傾聽內心的聲音。</p>
            <div class="banner-btn-group d-flex align-items-center gap-3">
              <button class="btn btn-outline-primary" type="button">立即預約</button>
              <button class="btn btn-primary" type="button">課程介紹</button>
            </div>
          </div>
        </div>
      </div>
      <ul class="banner-media d-flex flex-column gap-2 translate-middle">
        <li>
          <a href="#"><i class="bi bi-facebook fs-1"></i></a>
        </li>
        <li>
          <a href="#"><i class="bi bi-instagram fs-1"></i></a>
        </li>
        <li>
          <a href="#"><i class="bi bi-line fs-1"></i></a>
        </li>
      </ul>
    </section>
    <section class="category">
      <div class="home-title text-center pt-40 pb-32">
        <h2>感受身心，活在當下</h2>
        <h3>DOYOGA 可以帶給你...</h3>
      </div>
      <div class="container">
        <ul class="d-flex justify-content-center flex-wrap gap-3">
          <li class="yoga-card yoga-card-1">
            <h4 class="fs-5 pb-1">整體健身</h4>
            <p class="fs-6 text-white">
              每一個動作，都融入運動解剖學的觀點強調以身體的中心線為出發點。
            </p>
          </li>
          <li class="yoga-card yoga-card-2">
            <h4 class="fs-5 pb-1">減壓放鬆</h4>
            <p class="fs-6 text-white">
              調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。
            </p>
          </li>
          <li class="yoga-card yoga-card-3">
            <h4 class="fs-5 pb-1">局部雕塑</h4>
            <p class="fs-6 text-white">
              幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="teacher">
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-6">
            <div class="bg-teacher"></div>
            <!-- <img class="img-fluid rounded" src="/public/images/yoga-4.jpeg" alt="yoga" /> -->
          </div>
          <div class="col-md-6">
            <div class="home-title pt-40 pb-4">
              <h2>頂尖師資、專業教學</h2>
              <h3>強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。</h3>
            </div>
            <ul class="list-unstyled teacher-list">
              <li class="teacher-card d-flex align-items-center gap-3 bg-white p-3 mb-3 rounded">
                <img src="/public/images/teacher-1.png" alt="Carol Tang 老師" class="teacher-img" />
                <div class="teacher-info">
                  <h4 class="fs-5 pb-1">Carol Tang 老師</h4>
                  <p>教學經歷 10 年<br />瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。</p>
                </div>
              </li>
              <li class="teacher-card d-flex justify-content-start gap-3 bg-white p-3 mb-3 rounded">
                <img src="/public/images/teacher-2.png" alt="Kanae 老師" class="teacher-img m-0" />
                <div class="teacher-info">
                  <h4 class="fs-5 pb-1">Kanae 老師</h4>
                  <p>教學經歷 10 年</p>
                </div>
              </li>
              <li class="teacher-card d-flex align-items-center gap-3 bg-white p-3 rounded">
                <img
                  src="/public/images/teacher-3.png"
                  alt="Asa Ifrit 老師"
                  class="teacher-img m-0"
                />
                <div class="teacher-info">
                  <h4 class="fs-5 pb-1">Asa Ifrit 老師</h4>
                  <p>教學經歷 10 年</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="workSpace">
      <div class="container">
        <div class="row" style="height: 444px">
          <div class="col-md-6">
            <div class="row h-100">
              <div class="col-md-7">
                <div class="bg-workSpace bg-workSpace-1"></div>
              </div>
              <div class="col-md-5 d-flex flex-column gap-3">
                <div class="bg-workSpace bg-workSpace-2"></div>
                <div class="bg-workSpace bg-workSpace-3"></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center h-100">
            <div class="home-title">
              <h2>舒適空間、靜心放鬆</h2>
              <h3 class="pb-4">
                我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
              </h3>
              <a>環境介紹 <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="classes">
      <div class="classes-display d-flex">
        <div class="w-50 d-flex align-items-center justify-content-end">
          <div class="home-title">
            <h2>精心設計、課程多元</h2>
            <h3 class="pb-4">教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。</h3>
            <a>課程介紹<i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
        <div class="w-50">
          <SwiperComponent></SwiperComponent>
        </div>
      </div>
    </section>
    <section class="planSelect">
      <div class="container">
        <div class="home-title text-center pt-40 pb-32">
          <h2>方案選擇</h2>
          <h3>DOYOGA 可以帶給你...</h3>
        </div>
        <div class="row d-flex">
          <div class="col-4 h-100">
            <div class="card">
              <div
                style="background-image: url(/doyoga/images/yoga-11.jpg)"
                class="img-cover"
              ></div>
              <div class="card-body">
                <h5 class="card-title text-center mb-1 fs-5">首次體驗</h5>
                <span class="d-block text-center mb-2 fs-5">NT $450 / 次</span>
                <p class="card-text fs-6">
                  分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。
                </p>
                <a href="#" class="btn btn-primary w-100">選擇課程</a>
              </div>
            </div>
          </div>
          <div class="col-4 h-100">
            <div class="card">
              <div
                style="background-image: url(/doyoga/images/yoga-12.jpg)"
                class="img-cover"
              ></div>
              <div class="card-body">
                <h5 class="card-title text-center mb-1 fs-5">短期體驗</h5>
                <span class="d-block text-center mb-2 fs-5">NT $1800 / 月</span>
                <p class="card-text fs-6">
                  分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。
                </p>
                <a href="#" class="btn btn-primary w-100">選擇課程</a>
              </div>
            </div>
          </div>
          <div class="col-4 h-100">
            <div class="card">
              <div
                style="background-image: url(/doyoga/images/yoga-13.jpg)"
                class="img-cover"
              ></div>
              <div class="card-body">
                <h5 class="card-title text-center mb-1 fs-5">長期體驗</h5>
                <span class="d-block text-center mb-2 fs-5">NT $5600 / 季</span>
                <p class="card-text fs-6">
                  分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。
                </p>
                <a href="#" class="btn btn-primary w-100">選擇課程</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  background: url(/images/header.jpeg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 190px;
  padding-bottom: 190px;
}
span,
p {
  color: var(--header-color);
}
.banner-btn-group .btn-outline-primary {
  color: var(--primary-color);
  border: var(--primary-color) 1px solid;
}
.banner-btn-group .btn-outline-primary:hover {
  background-color: var(--primary-color);
  color: #fff;
}
.banner-btn-group .btn-primary {
  background-color: var(--primary-color);
  border: var(--primary-color) 1px solid;
}
.banner-btn-group .btn-primary:hover {
  filter: brightness(85%);
  transition: opacity 0.2s ease-in-out;
}
.banner-btn-group button {
  padding: 8px 16px;
}
.banner-media {
  position: absolute;
  right: 16px;
  top: 50%;
}
.banner-media i {
  color: var(--primary-color);
}
.banner-media a:hover {
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
}

/* category */
.category {
  padding-bottom: 64px;
}
.pt-40 {
  padding-top: 40px;
}
.pb-32 {
  padding-bottom: 32px;
}
.category .yoga-card {
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 24px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 250px;
  min-height: 350px;
  flex: 1;
}
.category .yoga-card-1 {
  background-image: url('/public/images/yoga-1.jpeg');
}
.category .yoga-card-2 {
  background-image: url('/public/images/yoga-2.jpeg');
}
.category .yoga-card-3 {
  background-image: url('/public/images/yoga-3.jpeg');
}
/* teacher */
.teacher {
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: var(--background-primary);
}
.teacher .col-md-6 {
  flex: 1;
}
.teacher .bg-teacher {
  background-image: url(/public/images/yoga-4.jpeg);
  height: 100%;
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
}
.teacher-card h4,
p {
  color: #707070;
  margin-bottom: 0;
}
.teacher-card img {
  min-width: 68px;
  min-height: 68px;
}
.teacher-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.teacher-card:hover {
  transform: scale(1.2);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
/* workSpace */
.workSpace {
  padding-top: 64px;
  padding-bottom: 64px;
}
.bg-workSpace {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
}
.bg-workSpace-1 {
  height: 100%;
  background-image: url(/public/images/yoga-5.jpg);
}
.bg-workSpace-2 {
  height: 50%;
  background-image: url(/public/images/yoga-6.jpg);
}
.bg-workSpace-3 {
  height: 50%;
  background-image: url(/public/images/yoga-7.jpg);
}
.workSpace a {
  color: var(--primary-color);
  cursor: pointer;
}
.workSpace a:hover {
  opacity: 0.7;
  transition: opacity 0.4s ease-in-out;
}
/* classes */
.classes {
  padding-top: 64px;
  padding-bottom: 64px;
  background-color: var(--background-primary);
}
.classes a {
  color: var(--primary-color);
  cursor: pointer;
}
.classes a:hover {
  opacity: 0.7;
  transition: opacity 0.4s ease-in-out;
}
/* planSelect */
.planSelect {
  padding-bottom: 64px;
}
.planSelect .card {
  border: 1px solid var(--secondary-color);
  border-radius: 16px;
}
.planSelect .card .img-cover {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 250px;
}
.planSelect .card-body {
  padding: 24px;
}
.planSelect h5,
p {
  color: var(--primary-color);
}
.planSelect span {
  color: var(--secondary-color);
}
.planSelect .card-text {
  margin-bottom: 40px;
}
.planSelect .btn-primary {
  background-color: var(--secondary-color);
  border: var(--secondary-color);
}
.planSelect .btn-primary:hover {
  filter: brightness(85%);
  transition: opacity 0.2s ease-in-out;
}
</style>
<script>
import SwiperComponent from '@/components/SwiperComponent.vue';

export default {
  components: {
    SwiperComponent
  }
};
</script>

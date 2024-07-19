<template>
  <footer>
    <div class="container">
      <div class="row d-flex justify-content-between pt-32 pb-32">
        <div class="col-6">
          <h2>現在訂閱，獲得課程優惠碼！</h2>
        </div>
        <div class="col-5">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control input-subscribe"
              placeholder="輸入您的電子信箱"
              aria-label="User's email"
            />
            <button class="btn btn-subscribe" type="button">訂閱</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-white mt-0 mb-0" />
    <div class="container footer-main  pt-32 pb-32">
      <div class="row d-flex justify-content-between">
        <div class="col-5">
          <div class="d-flex flex-column align-items-start">
            <RouterLink class="pb-2" to="/"
              ><img src="/public/images/logo-white.png" width="126px" alt="logo"
            /></RouterLink>
            <ul class="d-flex flex-column justify-content-between align-items-center gap-2">
              <li>
                <a class="text-white fw-light" href="#"> 課程介紹 </a>
              </li>
              <li>
                <a class="text-white fw-light" href="#"> 瑜珈空間 </a>
              </li>
              <li>
                <a class="text-white fw-light" href="#"> 當月課表 </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-5 d-flex flex-column justify-content-between align-items-end">
          <ul class="d-flex gap-2">
            <li>
              <a href="#"
                ><i class="bi bi-facebook fs-4 text-white"></i></a>
            </li>
            <li>
              <a href="#"
                ><i class="bi bi-instagram fs-4 text-white"></i></a>
            </li>
            <li>
              <a href="#"
                ><i class="bi bi-line fs-4 text-white"></i></a>
            </li>
          </ul>
          <p class="text-white fs-6">© 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.pt-32 {
    padding-top: 32px;
}
.pb-32 {
    padding-bottom: 32px;
}
footer {
  background-color: var(--primary-color);
}
h2 {
  color: #fff;
}
.input-subscribe::placeholder {
  color: var(--primary-color);
}
.btn-subscribe {
  background-color: var(--secondary-color);
  color: #fff;
}
.footer-main a:hover i {
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
}
</style>

<script></script>

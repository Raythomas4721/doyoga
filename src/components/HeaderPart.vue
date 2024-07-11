
<!-- <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
</nav> -->
<template>
  <header class="pt-4 pb-4">
    <div class="container">
      <nav class="d-flex justify-content-between align-items-center">
        <RouterLink to="/"
          ><img src="../assets/images/logo.png" width="126px" alt="logo"
        /></RouterLink>
        <ul class="d-flex justify-content-between align-items-center gap-5">
          <li>
            <a href="#"> 課程介紹 </a>
          </li>
          <li>
            <a href="#"> 瑜珈空間 </a>
          </li>
          <li>
            <a href="#"> 當月課表 </a>
          </li>
        </ul>
        <ul class="header-btn-group d-flex justify-content-between align-items-center gap-3">
          <li><button class="btn btn-outline-primary">立即預約</button></li>
          <li><button class="btn btn-outline-primary">聯絡我們</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MyComponent'
}
</script>

<style scoped>
header {
  background-color: #f5f0e7;
}
.header-btn-group button {
  color: var(--primary-color);
  border: var(--primary-color) 1px solid;
}
.header-btn-group button:hover {
  background-color: var(--primary-color);
}
</style>

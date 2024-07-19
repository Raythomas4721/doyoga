<script>
// import Swiper js
import { Swiper, SwiperSlide } from 'swiper/vue';
// Swiper 10 這樣寫
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  data() {
    return {
      data: [
        '/doyoga/images/yoga-8.jpg',
        '/doyoga/images/yoga-9.jpg',
        '/doyoga/images/yoga-10.jpg'
      ],
      modules: [Autoplay, Pagination, Navigation]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<template>
  <Swiper
    :slidesPerView="1"
    :width="450"
    :centeredSlides="false"
    :spaceBetween="30"
    :breakpoints="{ 768: { slidesPerView: 1 } }"
    :pagination="{ clickable: true }"
    :speed="500"
    :loop="true"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false
    }"
    :modules="modules"
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
      <img :src="item" alt="yoga image" width="450px" />
    </swiper-slide>
  </Swiper>
</template>

<style>
</style>

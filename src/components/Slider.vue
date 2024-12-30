<script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  import PrevArrow from './icons/PrevArrow.vue';
  import NextArrow from './icons/NextArrow.vue';

  defineProps({
    title: String,
    para: String,
    image: String,
    image_alt: String,
    counters: {
      type: Array,
      default: () => []
    },
    slides: {
      type: Array,
      default: () => []
    }
  });
  const duration = 500;

  const swiperInstance = ref();
  function onSwiper(swiper) {
      swiperInstance.value = swiper
  }
  const swiperNextSlide = () => {
      swiperInstance.value.slideNext()
  };
  const swiperPrevSlide = () => {
      swiperInstance.value.slidePrev()
  };
</script>

<template>
  <section class="py-10 section" data-aos="fade">
    <div class="container px-4 lg:flex">

      <div class="w-full lg:w-5/12 content lg:flex content-center flex-wrap mt-6 lg:mt-0 lg:order-3">
        <h2 class="leading-none mb-4 lg:mb-8" v-html="title" data-aos="fade-up" data-aos-duration="500"></h2>
        <p v-html="para" class="text-lg md:text-xl" data-aos="fade-up" data-aos-duration="750"></p>

        <div class="counters flex flex-wrap">
          <div class="counter w-6/12 mt-6" v-for="(item,index) in counters" :key="index" :class="{'pl-6': index % 2 !== 0, 'pr-6': index % 2 == 0}" data-aos="fade-up" :data-aos-duration="duration + (index * 250)">
            <h5 class="h2" :data-count="item.number">{{ item.number }}</h5>
            <p v-html="item.para" class="text-lg md:text-xl"></p>
          </div>
        </div>
      </div>
      <div class="empty hidden lg:block w-1/12 order-2"></div>

      <div class="relative w-full lg:w-6/12 image lg:order-1 mt-10 lg:mt-0 relative" data-aos="fade-up" data-aos-duration="1000">
        <img :src="image" :alt="image_alt" :title="image_alt" />

        <div class="slider_holder lg:p-6 lg:absolute bottom-0 left-0 w-full">
          <div class="swiper_inner py-6 lg:p-6 bg-white">
            <swiper
              @swiper="onSwiper"
              :loop="true"
            >
              <swiper-slide v-for="(slide, index) in slides" :key="index" class="pr-5 pb-5">
                <p class="mb-2 text-lg">"{{ slide.content }}"</p>
                <h6 v-html="slide.person" class="text-lg"></h6>
              </swiper-slide>
            </swiper>

            <div class="flex justify-between items-center">
              <a href="#" class="text-lg underline font-semibold">All Personal Stories</a>

              <div class="buttons w-3/12 md:w-2/12 lg:w-3/12 2xl:w-2/12 flex flex-wrap justify-evenly">
                <button class="prev" @click="swiperPrevSlide"><PrevArrow /></button>
                <button class="next" @click="swiperNextSlide"><NextArrow /></button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.buttons svg{ width: 35px;}
a{ color: var(--primary); }
h5{font-weight: 400; color: #005464;}
.swiper h6{ font-weight: 600; }
.image img, .swiper_inner{border-radius: 10px; }

@media all and (min-width: 768px){
  .buttons svg{ width: 45px;}
}
</style>
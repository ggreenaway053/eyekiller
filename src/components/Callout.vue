<script setup>
  defineProps({
    title: String,
    para: String,
    background: String,
    button_class: String,
    button_text: String,
    button_link: String
  });
</script>

<template>
  <section class="md:py-10 lg:py-14 2xl:py-24 section" :style="{ backgroundColor: background }" data-aos="fade">
    <div class="container px-4 lg:flex py-10 md:py-8">

      <div class="w-full md:w-6/12 lg:w-5/12 2xl:w-6/12 mx-auto text-center content px-6">
        
        <img class="md:hidden mx-auto mb-8" src="/build/images/cta-callout-block-mobile-img.png" :alt="title" :title="title" data-aos="fade-in" data-aos-duration="750" />
        <h2 class="leading-none mb-4 lg:mb-8" data-aos="fade-in" data-aos-duration="500">{{ title }}</h2>
        <p v-html="para" class="text-white text-lg lg:text-2xl leading-relaxed" data-aos="fade-in" data-aos-duration="750"></p>

        <a :href="button_link" class="button mt-10 inline-block text-lg w-8/12 md:w-8/12 xl:w-4/12 2xl:w-3/12" :class="button_class" :style="{ color: background }" data-aos="fade-in" data-aos-duration="800">{{ button_text }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  h2{color: #B7E1ED;}
  .button{border: none;}
  .section{
    background-image: url('/build/images/cta-block-bg-mobile.png');
    background-size: cover;
    background-position: center;
  }

  @media all and (min-width: 768px){
    .section{
      background-image: url('/build/images/cta-block-bg-desktop.png');
    }
  }
</style>
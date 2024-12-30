<script setup>

defineProps({
  subtitle: String,
  title: String,
  background: String,
  ctas: {
    type: Array,
    default: () => []
  },
});

const duration = 750;
</script>

<template>
  <section class="py-10 ctas text-center flex flex-wrap relative" :style="{ backgroundColor: background }" data-aos="fade">
    <div class="container px-4">

      <div class="w-full relative">
        <div class="md:w-8/12 lg:w-6/12 mx-auto mb-4" data-aos="fade-up" data-aos-duration="500">
          <h4 class="mb-4">{{ subtitle }}</h4>
          <h3>{{ title }}</h3>
        </div>
      </div>

      <div class="cta w-2/4 lg:w-1/4 inline-block mt-2 lg:mt-4 px-2 lg:px-4 relative" v-for="(cta, index) in ctas" :key="index" data-aos="fade-up" :data-aos-duration="duration + (index * 250)">
        <a :href="cta.link" class="block relative">
          <img :src="cta.img" :alt="cta.title" :title="cta.title" />
          <h5 class="absolute bottom-0 left-0 text-white p-4 w-full font-bold text-lg md:text-xl lg:text-2xl leading-tight">{{ cta.title }}</h5>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ctas .cta img{ object-fit: cover; width: 100%; }
.ctas .cta a{ border-radius: 10px; overflow: hidden; transition: .3s; top:0; }
.ctas .cta a:before{content: ''; position: absolute; left: 0; bottom: 0; display: block; background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%); width:100%; height: 100%;}
.ctas .cta a:hover{ top: -5px; }
</style>
<script setup>

defineProps({
  title: String,
  para: String,
  background: String,
  ctas: {
    type: Array,
    default: () => []
  },
});


</script>

<template>
  <section class="py-10 ctas text-center flex flex-wrap relative" :style="{ backgroundColor: background }">
    <div class="container px-4">

      <div class="w-full relative">
        <div class="md:w-8/12 lg:w-6/12 mx-auto mb-4">
          <h2>{{ title }}</h2>
          <p>{{ para }}</p>
        </div>
      </div>

      <div class="cta w-full md:w-6/12 lg:w-4/12 inline-block mt-2 lg:mt-4 px-2 lg:px-4 relative" v-for="cta in ctas" :key="cta.link">
        <a :href="cta.link" class="block relative">
          <img :src="cta.img" :alt="cta.title" :title="cta.title" />
          <h5 class="absolute bottom-0 left-0 text-white p-6 w-full font-bold text-lg md:text-xl lg:text-3xl leading-tight">{{ cta.title }}</h5>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
p{font-size:18px;}
.ctas .cta img{ object-fit: cover; width: 100%; }
.ctas .cta a{ border-radius: 10px; overflow: hidden; transition: .3s; top:0; }
.ctas .cta a:before{content: ''; position: absolute; left: 0; bottom: 0; display: block; background: rgb(0,0,0); background: linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,.7) 100%); width:100%; height: 100%;}
.ctas .cta a:hover{ top: -5px; }
</style>
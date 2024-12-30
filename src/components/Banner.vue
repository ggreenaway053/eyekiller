<script setup>

defineProps({
  title: String,
  mob_img: String,
  desk_img: String,
  links: {
    type: Array,
    default: () => []
  },
})

const duration = 750;
</script>

<template>
  <section class="banner text-center flex flex-wrap relative" data-aos="fade">
    <picture class="w-screen">
      <source :srcset="mob_img" media="(max-width: 768px)" />
      <source :srcset="desk_img" media="(min-width: 769px)"/>
      <img :src="desk_img" :alt="title" :title="title" class="block w-full" />
    </picture>
    <div class="container absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
      <div class="w-10/12 lg:w-6/12 mx-auto">
        <h1 class="text-white headliner" data-aos="fade-up" data-aos-duration="500">{{ title }}</h1>
      </div>
    </div>

    <div class="w-full links container absolute bottom-0 left-2/4 -translate-x-1/2 px-4 lg:px-0">
      <div class="inner mx-auto flex items-center justify-center mb-4 lg:mb-10">
        <div class="link" v-for="(link, index) in links" :key="link.link" data-aos="fade-up" :data-aos-duration="duration + (index * 250)">
          <a class="block flex justify-center flex-wrap items-center" :class="{ 'me-6 md:me-20': index < links.length - 1 }" :href="link.link">
            <img :src="link.img" :alt="link.title" :title="link.title" class="mb-2 lg:me-4 lg:mb-0" />
            <h6 class="text-white underline font-bold">{{ link.title }}</h6>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner .links img{ max-width: 80px; border-radius: 50px; height: 80px; }
.banner .links h6{transition: .3s; }
.banner .links a:hover h6{ color: var(--primary); }
</style>

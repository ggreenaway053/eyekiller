<script setup>

defineProps({
  title: String,
  mob_img: String,
  tab_img: String,
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
      <source :srcset="mob_img" media="(max-width: 639px)" />
      <source :srcset="tab_img" media="(min-width: 640px) and (max-width: 1023px)" />
      <source :srcset="desk_img" media="(min-width: 1024px)"/>
      <img :src="desk_img" :alt="title" :title="title" class="block w-full" />
    </picture>
    <div class="container absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
      <div class="w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        <h1 class="text-white headliner" data-aos="fade-up" data-aos-duration="500">{{ title }}</h1>
      </div>
    </div>

    <div class="w-full md:w-8/12 lg:w-6/12 links container absolute bottom-0 left-2/4 -translate-x-1/2 px-4 lg:px-0">
      <div class="inner mx-auto flex items-center justify-between mb-10">
        <div class="link" v-for="(link, index) in links" :key="link.link" data-aos="fade-up" :data-aos-duration="duration + (index * 250)">
          <a class="block flex justify-center flex-wrap items-center" :href="link.link">
            <img :src="link.img" :alt="link.title" :title="link.title" class="mb-2 lg:mb-0 lg:mr-4" />
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

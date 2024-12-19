<script setup>

defineProps({
  title: String,
  mob_img: String,
  desk_img: String
})
</script>

<template>
  <section class="banner text-center flex flex-wrap relative">
    <picture class="w-screen">
      <source :src="mob_img" media="(max-width: 768px)" />
      <source :src="desk_img" media="(min-width: 769px)"/>
      <img :src="mob_img" :alt="title" :title="title" class="block w-full" />
    </picture>
    <div class="container absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2">
      <div class="w-10/12 lg:w-6/12 mx-auto">
        <h1 class="text-white headliner">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

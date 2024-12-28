<script setup>
  defineProps({
    subtitle: String,
    title: String,
    para: String,
    background: String,
    image: String,
    side: {
      type: String,
      validator: (value) => ['image_left', 'image_right'].includes(value) 
    },
    buttons: {
      type: Array,
      default: () => []
    },
  });
</script>

<template>
  <section class="py-10 section" :style="{ backgroundColor: background }">
    <div class="container px-4 lg:flex">

      <div class="relative w-full lg:w-6/12 image" :class="{
        'lg:order-4': side === 'image_right',
        'lg:order-1': side === 'image_left'
      }">
        <img :src="image" :alt="title" :title="title" />
      </div>

      <div class="hidden lg:block w-1/12 order-2"></div>

      <div class="w-full lg:w-5/12 content lg:flex content-center flex-wrap mt-6 lg:mt-0"
      :class="{
        'order-1': side === 'image_right',
        'order-3': side === 'image_left'
      }">
        <h4 class="mb-4" :class="{'hidden': subtitle === '' }">{{ subtitle }}</h4>
        <h2 class="leading-none mb-4 lg:mb-8">{{ title }}</h2>
        <p v-html="para"></p>

        <div class="buttons mt-8">
          <a v-for="item in buttons" :key="item.link" :href="item.link" class="button" :class="item.class">
            <img :src="item.img" v-if="item.img" class="inline mr-2.5" aria-hidden="true"/> {{ item.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section p{ font-size: 18px;}
.section .image img{ border-radius: 10px; }
.section .button img{ margin-top: -3px; }
h4{ color: #159BB4;}
</style>
<script setup>
  import { ref } from 'vue';
  defineProps({
    title: String,
    background: String
  });

  const postcode = ref('');
  const handleSubmit = () => {
    alert(`Postcode: ${postcode.value}`);
  }
</script>

<template>
  <section class="lg:py-6 section px-4">
    <div class="container p-8 lg:flex flex-wrap" :style="{ backgroundColor: background }">
      <div class="w-full lg:w-5/12 flex flex-wrap content-center justify-center px-12 lg:px-0 pb-8 lg:pb-0 content md:mb-8 lg:mb-0">
        <img src="/public/postcode-icon.svg" :alt="title" :title="title" class="lg:mr-8 mb-4 lg:mb-0" /> <h4 class="w-full lg:w-auto text-center leading-none">{{ title }}</h4>
      </div>
      <div class="w-full lg:w-7/12 input flex flex-wrap items-center lg:pl-8">
        <form class="w-full flex flex-wrap items-center justify-between" @submit.prevent="handleSubmit">
          <label for="postcode" class="w-full lg:w-3/12 text-center mb-4 lg:mb-0">Enter your postcode</label>
          <input type="text" id="postcode" name="postcode" required class="lg:mx-6 w-full lg:w-6/12 mb-4 lg:mb-0" v-model="postcode"/>
          <input type="submit" value="Find Services" class="button primary w-full lg:w-2/12" />
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container{border-radius:20px;}
h4{font-size: 30px;}
form label{ font-weight: 600; font-size: 18px; }
form input{border-radius: 5px; border: 1px solid #C8DEE4; transition: .3s; padding: .5rem .75rem; font-size: 18px;}

@media all and (min-width: 768px){
  .content{ border-bottom: 1px solid #C8DEE4;}
}
@media all and (min-width: 1024px){
  .content{ border-bottom: none}
  h4{ font-size: 36px;}
}
@media all and (min-width: 1920px){
  h4{ font-size: 48px;}
}
</style>
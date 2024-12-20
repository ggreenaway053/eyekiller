<script setup>

defineProps({
  charity_no: String,
  gutter_nav: {
    type: Array,
    default: () => []
  },
  nav: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <footer class="py-12 container px-4">
    <div class="main_footer flex flex-wrap pb-6">
      <div class="w-full md:w-1/2 lg:w-1/4 company pb-6 md:pb-0">
        <a href="/" class="logo inline-block mx-auto mb-4"><img src="/public/Logo_dark.svg" alt="Cancer Focus NI" title="Cancer Focus NI" /></a>

        <div class="details">
          <h5>Cancer Freephone Helpline</h5>
          <a href="tel:+448007833339" id="phone">0800 783 3339</a>
          <p>Monday, Wednesday & Friday 9am to 1pm</p>
        </div>

        <div class="socials flex">
          <a class="mr-4" href="#"></a>
        </div>
      </div>
      
      <div class="nav md:w-1/2">
        <ul class="flex flex-wrap">
          <li v-for="item in nav" :key="item.link" class="w-2/4 mb-4"><a :href="item.link">{{ item.title }}</a></li>
        </ul>
      </div>

    </div>

    <div class="gutter pt-6">
      <ul class="flex flex-wrap mb-6"><li class="mb-2 mr-4 lg:mb-0" v-for="item in gutter_nav" :key="item.link"><a :href="item.link">{{ item.title }}</a></li></ul>
      <p class="small m-0">{{ charity_no }}</p>
    </div>
  </footer>
</template>

<style scoped>
footer .details{ line-height: 40px; }
footer .details h5{ color: #666666; font-size: 21px;}
footer .details a{ color: var(--primary); font-size: 28px; font-weight: 600;}
footer .gutter{ border-top: 1px solid #E1E1E1; }
footer a:not(#phone){ text-decoration: underline; color: #1C1C1C; }
footer .gutter p{ color: #666666; }
</style>

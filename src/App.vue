<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
</script>

<template>
  <Header />
  <Banner title="Supporting local people on their cancer journey" desk_img="/banner-img-desktop.png" mob_img="/banner-img-mobile.png"/>

  <Footer charity_no="© 2024 Cancer Focus Northern Ireland. Charity Number: NIC 101307"
    :gutter_nav="[
      { link: '#', title: 'Terms & Conditions' },
      { link: '#', title: 'Privacy Policy' },
      { link: '#', title: 'Manage Cookies' },
      { link: '#', title: 'Accessibility Statement' }
    ]"
    :nav="[
      { link: '#', title: 'Get Support' },
      { link: '#', title: 'Support Finder' },
      { link: '#', title: 'Cancer Prevention' },
      { link: '#', title: 'Get Involved' },
      { link: '#', title: 'About Us' },
      { link: '#', title: 'Health Professionals' },
      { link: '#', title: 'Research' },
      { link: '#', title: 'Our Impact' },
      { link: '#', title: 'News' },
      { link: '#', title: 'Job Opportunities' },
      { link: '#', title: 'Contact Us' },
      { link: '#', title: 'Donate' }
    ]"
  />
</template>

<style scoped>
</style>

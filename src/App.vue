<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
import Ctas from './components/Ctas.vue';
import Flexi from './components/Flexi.vue';
</script>

<template>
  <Header />
  <Banner
    title="Supporting local people on their cancer journey"
    desk_img="/banner-img-desktop.png"
    mob_img="/banner-img-mobile.png"
    :links="[
      { link: '#', title: 'Visit a Centre', img: '/visit-centre-banner-link.png' },
      { link: '#', title: 'Get Support', img: '/get-support-banner-link.png' },
      { link: '#', title: 'Get Involved', img: '/get-involved-banner-link.png' }
    ]"
  />
  <Ctas
    title="We are here to reduce the risk, impact, and outcomes of all cancers"
    subtitle="How we support you"
    background="#E6F5F9"
    :ctas="[
      { link: '#', title: 'Recently diagnosed', img: '/recently-diagnosed-cta.jpg' },
      { link: '#', title: 'Living with cancer', img: '/living-with-cta.jpg' },
      { link: '#', title: 'Caring for someone', img: '/caring-cta.jpg' },
      { link: '#', title: 'Ways to prevent cancer', img: '/ways-to-prevent-cta.jpg' }
    ]"
  />
  <Flexi 
    subtitle=""
    title="Therapeutic Cancer Support Centres"
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet vulputate dolor ac luctus.<br><br> Maecenas quis facilisis tortor. Pellentesque nulla leo, faucibus eget lacinia id, vehicula at quam. Maecenas finibus massa vitae tortor bibendum, eu eleifend lacus ullamcorper. Sed sit amet pulvinar ligula."
    background="#fff"
    side="image_right"
    image="/therapeutic-supporting.jpg"
  />


  <Flexi 
    subtitle="What's Happening"
    title="Autumn Raffle 2024 - the Algarve is calling!"
    para="We’ve teamed up with Oasis Travel to offer an amazing Autumn Raffle top prize of a holiday to the glamorous Pestana Dom Joao II Beach & Golf Resort, for 2 people."
    background="#fff"
    side="image_left"
    image="/therapeutic-supporting.jpg"
  />

  <Footer charity_no="© 2024 Cancer Focus Northern Ireland. Charity Number: NIC 101307"
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

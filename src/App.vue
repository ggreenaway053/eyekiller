<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  import Banner from './components/Banner.vue';
  import Ctas from './components/Ctas.vue';
  import Flexi from './components/Flexi.vue';
  import Postcode from './components/Postcode.vue';
  import CtasAlt from './components/CtasAlt.vue';
  import Slider from './components/Slider.vue';
  import Callout from './components/Callout.vue';
</script>

<template>
  <Header />
  <Banner
    title="Supporting local people on their cancer journey"
    desk_img="/build/images/banner-img-desktop.png"
    mob_img="/build/images/banner-img-mobile.png"
    :links="[
      { link: '#', title: 'Visit a Centre', img: '/build/images/visit-centre-banner-link.png' },
      { link: '#', title: 'Get Support', img: '/build/images/get-support-banner-link.png' },
      { link: '#', title: 'Get Involved', img: '/build/images/get-involved-banner-link.png' }
    ]"
  />
  <Ctas
    title="We are here to reduce the risk, impact, and outcomes of all cancers"
    subtitle="How we support you"
    background="#E6F5F9"
    :ctas="[
      { link: '#', title: 'Recently diagnosed', img: '/build/images/recently-diagnosed-cta.jpg' },
      { link: '#', title: 'Living with cancer', img: '/build/images/living-with-cta.jpg' },
      { link: '#', title: 'Caring for someone', img: '/build/images/caring-cta.jpg' },
      { link: '#', title: 'Ways to prevent cancer', img: '/build/images/ways-to-prevent-cta.jpg' }
    ]"
  />
  <Flexi 
    subtitle=""
    title="Therapeutic Cancer Support Centres"
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet vulputate dolor ac luctus.<br><br> Maecenas quis facilisis tortor. Pellentesque nulla leo, faucibus eget lacinia id, vehicula at quam. Maecenas finibus massa vitae tortor bibendum, eu eleifend lacus ullamcorper. Sed sit amet pulvinar ligula."
    background="#fff"
    side="image_right"
    image="/build/images/therapeutic-supporting.jpg"
    :buttons="[
      { link: '#', text: 'Explore Support Centres', class: 'primary sm:mr-0 mr-4 mb-4 md:mb-0 lg:mb-0 w-full md:w-min block md:inline text-center' },
      { link: '#', text: 'Take a Tour', class: 'secondary video w-full md:w-min block md:inline text-center', img: '/build/images/video-icon.svg' },
    ]"
  />
  <Postcode title="Find services near you" background="#E6F5F9" />
  <Flexi 
    subtitle="What's happening"
    title="Autumn Raffle 2024 - the Algarve is calling!"
    para="We’ve teamed up with Oasis Travel to offer an amazing Autumn Raffle top prize of a holiday to the glamorous Pestana Dom Joao II Beach & Golf Resort, for 2 people."
    background="#fff"
    side="image_left"
    image="/build/images/autumn-raffle-supporting.jpg"
    :buttons="[
      { link: '#', text: 'Find out more', class: 'primary mr-4' },
      { link: '#', text: 'All Events', class: 'plain' },
    ]"
  />
  <CtasAlt
    title="Ways you can get involved"
    para="Lorem ipsum dolor sit amet, consectetur adipiscing fusce sed turpis at lacus convallis vulputate sit amet nec dui. Nulla eu dui massa."
    background="#E6F5F9"
    :ctas="[
      { link: '#', title: 'Fundraise with us', img: '/build/images/fundraise-cta.jpg' },
      { link: '#', title: 'Volunteer with us', img: '/build/images/volunteer-cta.jpg' },
      { link: '#', title: 'Shop with us', img: '/build/images/shop-cta.jpg' }
    ]"
  />
  <Slider 
    title="Together, we're <br class='hidden md:inline'> making a difference"
    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet vulputate dolor ac luctus."
    image="/build/images/making-diff-img.jpg"
    image_alt="Together, we're making a difference"
    :counters="[
      { number: '5000', para: 'Lorem ipsum dolor sit amet sed turpis at convallis.' },
      { number: '5000', para: 'Lorem ipsum dolor sit amet sed turpis at convallis.' },
      { number: '5000', para: 'Lorem ipsum dolor sit amet sed turpis at convallis.' },
      { number: '5000', para: 'Lorem ipsum dolor sit amet sed turpis at convallis.' }
    ]"
    :slides="[
      { content: 'The family support service helped me and my son become stronger and more able to get through this confusing and agonising time', person: 'Cancer patient Jo-Ann Grimley'},
      { content: 'Here is a second slide', person: 'Gareth'},
      { content: 'A third for good luck', person: 'Also Gareth'}
    ]"
  />

  <Callout 
    title="Your donation will help change lives"
    para="By donating today, you will be making a real difference to the life of someone or a family affected by cancer."
    background="#008097"
    button_link="#"
    button_text="Make a Donation"
    button_class="bg-white"
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

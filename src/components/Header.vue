<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Burger from './icons/Burger.vue';

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function toggleMenu(){
  var menu = document.getElementById("offcanvas_menu");
  menu.classList.toggle("show");
  document.body.classList.toggle('static')
}

function toggleSearch(){
  console.log('This function currently exists to showcase the @click feature. :) ');
}
</script>

<template>
  <header class="fixed w-full left-0 top-0 z-50" :class="{ stuck: isScrolled }">
    <div class="container flex py-4 px-4 2xl:px-0">
      <div class="mobile w-3/12 flex lg:hidden items-center">
        <button @click="toggleMenu" class="mr-5 search"><Burger /></button>
        <button @click="toggleSearch" class="search"><img src="/public/Search.svg" alt="Toggle Search" title="Toggle Search" /></button>
      </div>

      <div class="logo w-6/12 lg:w-2/12 text-center lg:text-left relative">
        <a href="/" class="logo inline-block mx-auto relative">
          <img src="/public/Logo_dark.svg" alt="Cancer Focus NI" title="Cancer Focus NI" id="dark_logo" />
          <img src="/public/logo.svg" alt="Cancer Focus NI" title="Cancer Focus NI" id="light_logo" />
        </a>
      </div>

      <div class="nav w-3/12 lg:w-10/12 flex relative">
        <ul class="hidden lg:flex justify-evenly items-center w-9/12">
          <li><a href="#">Get Support</a></li>
          <li><a href="#">Cancer Prevention</a></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">Explore</a></li>
        </ul>

        <div class="buttons flex w-full lg:w-3/12 items-center justify-end">
          <button class="search hidden lg:block" @click="toggleSearch"><img src="/public/Search.svg" alt="Search" title="Search" /></button>
          <a href="#" class="hidden lg:inline-block button text-white mx-4">Fundraise</a>
          <a href="#" class="inherit button primary"><img class="hidden md:inline mr-2.5" src="/public/heart.svg" aria-hidden="true" aria-disabled="true" /> Donate</a>
        </div>
      </div>
    </div>
    
  </header>

  <div id="offcanvas_menu" class="absolute t-0 pt-20 pb-4">
    <button id="close_menu" @click="toggleMenu"><img class="" src="/public/close-circle.svg" aria-hidden="true" aria-disabled="true" /></button>
    <div class="nav flex h-full">
      <ul class="menu_items w-full">
        <li class="p-4"><a href="#">Get Support</a></li>
        <li class="p-4"><a href="#">Cancer Prevention</a></li>
        <li class="p-4"><a href="#">Get Involved</a></li>
        <li class="p-4"><a href="#">Explore</a></li>
      </ul>

      <div class="buttons w-full mt-4 flex content-end justify-end px-4">
        <a href="#" class="button text-center mb-4 block w-full">Fundraise</a>
        <a href="#" class="button primary text-center block w-full"><img class="hidden md:inline mr-2.5" src="/public/heart.svg" aria-hidden="true" aria-disabled="true" /> Donate</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dark_logo{ opacity: 0; position: absolute; left: 0; top: 0; transition: .3s; width: 100%; }
#light_logo{ transition: .3s; }
#offcanvas_menu #close_menu{ position: absolute; right: 20px; top: 20px; width: 30px; height: 30px; }
#offcanvas_menu{
  width: calc(100vw - 20%);
  background: var(--secondary);
  z-index: 999999;
  height: 100vh;
  left: -9999px;
  transition: .5s all;
}
#offcanvas_menu.show{left: 0;}
#offcanvas_menu .nav li{ font-size: 18px; border-bottom: 1px solid rgba(0,0,0,0.4);}
#offcanvas_menu .nav, #offcanvas_menu .nav .buttons{ flex-flow: row wrap; }
header{ border-bottom: 1px solid rgba(255,255,255,0.2); transition: .5s; }

header .button{ font-size: 16px; }
header .button.primary img{ margin-top: -3px; }
header .nav li a{ color: var(--white); font-weight: 600; transition: .5s; position: relative; font-size: 18px; }
header .nav li a:before{ content: ''; display: block; width: 0px; height: 2px; background: var(--white); transition: .3s all; position: absolute; left: 0; bottom: -2px; }
header .nav li a:hover:before{ width: 100%; }

header .search{transition: .3s; }

header.stuck{ background: var(--white); }
header.stuck li a:before{ background: var(--black); }
header.stuck li a{ color: var(--black); }
header.stuck .button:not(.primary){color: var(--black);}
header.stuck .search{ filter: brightness(0.25); }
header.stuck #dark_logo{opacity: 1; }
header.stuck #light_logo{ opacity: 0; }

@media all and (min-width: 768px){
  header .button{ font-size: 18px; }
  #offcanvas_menu{ width: calc(100vw - 70%); }
}
</style>

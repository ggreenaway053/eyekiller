<script setup>
function toggleMenu(){
  alert('clicked');
}
</script>

<template>
  <header class="fixed w-full left-0 top-0 z-50">
    <div class="container flex py-4">
      <div class="mobile w-4/12 lg:hidden">
        <button @click="toggleMenu">Toggle Menu</button>
        <button @click="toggleSearch"><img src="/public/Search.svg" alt="Toggle Search" title="Toggle Search" /></button>
      </div>

      <div class="logo w-4/12 lg:w-2/12 text-center lg:text-left"><a href="/" class="logo"><img src="/public/logo.svg" alt="Cancer Focus NI" title="Cancer Focus NI" /></a></div>

      <div class="nav w-4/12 lg:w-10/12 flex relative">
        <ul class="hidden lg:flex justify-evenly items-center w-8/12">
          <li><a href="#">Get Support</a></li>
          <li><a href="#">Cancer Prevention</a></li>
          <li><a href="#">Get Involved</a></li>
          <li><a href="#">Explore</a></li>
        </ul>

        <div class="buttons flex w-3/12 left-1/12 justify-between items-center">
          <button class="hidden lg:block" @click="toggleSearch"><img src="/public/Search.svg" alt="Search" title="Search" /></button>
          <a href="#" class="hidden lg:block button trans white inherit">Fundraise</a>
          <a href="#" class="button primary inherit"><img class="mr-3.5" src="/public/heart.svg" aria-hidden="true" aria-disabled="true" /> Donate</a>
        </div>
      </div>
    </div>
    
  </header>
</template>

<style scoped>
header{ border-bottom: 1px solid rgba(255,255,255,0.2); }
header .button{ font-size: 18px; }
header .nav li a{ color: var(--white); font-weight: 600; transition: .5s; position: relative; font-size: 18px; }
header .nav li a:before{ content: ''; display: block; width: 0px; height: 1px; background: var(--white); transition: .3s all; position: absolute; left: 0; bottom: -2px; }
header .nav li a:hover:before{ width: 100%; }
</style>

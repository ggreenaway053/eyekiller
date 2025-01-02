<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Burger from './icons/Burger.vue';

  defineProps({
    links: {
      type: Array,
      default: () => []
    },
  })

  // checks if page has been scrolled
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

  // submenu scroll hover
  const activeIndex = ref(null);
  const showSubmenu = (index) => {
    activeIndex.value = index;
  };
  const hideSubmenu = () => {
    activeIndex.value = null;
  };
  const isActive = (index) => {
    return activeIndex.value === index;
  };

  // offcanvas menu
  function toggleMenu(){
    var menu = document.getElementById("offcanvas_menu");
    menu.classList.toggle("show");
    document.body.classList.toggle('static')
  }

  // show search offcanvas
  function toggleSearch(){
    alert('This currently does nothing. :) ');
  }
</script>

<template>
  <header class="fixed w-full left-0 top-0 z-50" :class="{ stuck: isScrolled }">
    <div class="container flex px-4 2xl:px-0">
      <div class="mobile w-2/12 flex lg:hidden items-center">
        <button @click="toggleMenu" class="mr-5 search"><Burger /></button>
        <button @click="toggleSearch" class="search"><img src="/build/images/Search.svg" alt="Toggle Search" title="Toggle Search" /></button>
      </div>

      <div class="logo w-7/12 lg:w-2/12 text-center lg:text-left relative py-4">
        <a href="/" class="logo inline-block mx-auto relative">
          <img src="/build/images/Logo_dark.svg" alt="Cancer Focus NI" title="Cancer Focus NI" id="dark_logo" />
          <img src="/build/images/logo.svg" alt="Cancer Focus NI" title="Cancer Focus NI" id="light_logo" />
        </a>
      </div>

      <div class="nav w-3/12 lg:w-10/12 flex relative">
        <ul class="hidden lg:flex justify-evenly items-center w-9/12">
          <li v-for="(item, index) in links" :key="index" class="relative h-full flex items-center" :class="{ 'active': isActive(index) }" @mouseover="showSubmenu(index)" @mouseleave="hideSubmenu">
            <a :href="item.link">
              <span>{{ item.title }}</span>
              <img class="inline ml-2" width="12px" height="12px" src="/build/images/chevron-down.svg" v-if="item.submenu" aria-hidden="true"/>
            </a>

            <div class="submenu absolute bottom-0 left-0 bg-white w-full overflow-hidden" v-if="item.submenu">
              <ul>
                <li class="p-4" v-for="(subitem, index) in item.submenu" :key="index"><a :href="subitem.link" class="text-dark"><span>{{ subitem.title }}</span></a></li>
              </ul>
            </div>
          </li>
        </ul>

        <div class="buttons flex w-full lg:w-3/12 items-center justify-end">
          <button class="search hidden lg:block" @click="toggleSearch"><img src="/build/images/Search.svg" alt="Search" title="Search" /></button>
          <a href="#" class="hidden lg:inline-block button text-white mx-4">Fundraise</a>
          <a href="#" class="inherit button primary"><img class="hidden md:inline mr-2.5" src="/build/images/heart.svg" aria-hidden="true" aria-disabled="true" /> Donate</a>
        </div>
      </div>
    </div>
    
  </header>

  <div id="offcanvas_menu" class="fixed t-0 pt-20 pb-4">
    <button id="close_menu" @click="toggleMenu"><img class="" src="/build/images/close-circle.svg" aria-hidden="true" aria-disabled="true" /></button>
    <div class="nav flex h-full">
      <ul class="menu_items w-full overflow-hidden relative">
        <li v-for="(item, index) in links" :key="index" :class="{ 'active': isActive(index) }">
          <span class="p-4 flex justify-between relative">
            <a :href="item.link">{{ item.title }}</a>
            <img class="inline ml-2 z-10" width="15px" height="15px" src="/build/images/chevron-down.svg" v-if="item.submenu" aria-hidden="true" @click="showSubmenu(index)"/>
          </span>

          <div class="submenu w-full overflow-hidden z-40" v-if="item.submenu">
            <ul>
              <li class="back p-4" @click="hideSubmenu(index)"><img class="inline mr-2" width="15px" height="15px" src="/build/images/chevron-down.svg" v-if="item.submenu" aria-hidden="true"/> <span>Go Back</span></li>
              <li class="p-4" v-for="(subitem, index) in item.submenu" :key="index"><a :href="subitem.link" class="text-dark"><span>{{ subitem.title }}</span></a></li>
            </ul>
          </div>
        </li>
      </ul>

      <div class="buttons w-full mt-4 flex content-end justify-end px-4">
        <a href="#" class="button text-center mb-4 block w-full">Fundraise</a>
        <a href="#" class="button primary text-center block w-full"><img class="hidden md:inline mr-2.5" src="/build/images/heart.svg" aria-hidden="true" aria-disabled="true" /> Donate</a>
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
#offcanvas_menu .nav li:not(.back){ font-size: 18px; border-bottom: 1px solid rgba(0,0,0,0.4);}
#offcanvas_menu .nav li.back{font-size: 14px; cursor: pointer;}
#offcanvas_menu .nav li img{ filter: brightness(0.4); transform: rotate(-90deg);}

#offcanvas_menu .nav li.back img{ transform: rotate(90deg); }

#offcanvas_menu .nav, #offcanvas_menu .nav .buttons{ flex-flow: row wrap; }
header{ border-bottom: 1px solid rgba(255,255,255,0.2); transition: .5s; }

#offcanvas_menu .submenu{
  right: -100%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
  background: var(--secondary);
}
#offcanvas_menu li.active .submenu{ right: 0; }
header .nav .submenu{
  transition: all .5s;
  height: 0;
  bottom: -168px;
  width: 150px;
  opacity: 0;
}
header .nav li.active .submenu{ height: auto; opacity: 1;}
header .nav .submenu li a{ color: var(--black); font-size: 16px; }
header .nav .submenu li a:before{ background: var(--black); }


header .button{ font-size: 16px; padding: .5rem .75rem;}
header .button.primary img{ margin-top: -3px; }
header .nav li a{ color: var(--white); font-weight: 600; transition: .5s; position: relative; font-size: 16px; }
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
  #offcanvas_menu{ width: calc(100vw - 70%); }
}

@media all and (min-width: 1440px){
  header .button, header .nav li a{ font-size: 18px; }
}
</style>

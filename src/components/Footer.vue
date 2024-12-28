<script setup>
  import { ref } from 'vue';

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
  });

  const firstname = ref('');
  const lastname = ref('');
  const email = ref('');
  const handleSubmit = () => {
    alert(`Data Entered: ${firstname.value} ${lastname.value} ${email.value}`);
  }
</script>

<template>
  <footer class="pt-12 pb-6 container px-4">
    <div class="main_footer flex flex-wrap pb-6">
      <div class="w-full md:w-1/2 lg:w-1/4 company pb-6 md:pb-0">
        <a href="/" class="logo inline-block mx-auto mb-4"><img src="/public/Logo_dark.svg" alt="Cancer Focus NI" title="Cancer Focus NI" /></a>

        <div class="details">
          <h5>Cancer Freephone Helpline</h5>
          <a href="tel:+448007833339" id="phone">0800 783 3339</a>
          <p>Monday, Wednesday & Friday 9am to 1pm</p>
        </div>

        <div class="socials flex mt-2">
          <a class="mr-2" href="#"><img src="/public/social/Facebook.svg" alt="Facebook" title="Facebook"/></a>
          <a class="mr-2" href="#"><img src="/public/social/Twitter.svg" alt="X" title="X"/></a>
          <a class="mr-2" href="#"><img src="/public/social/Linkedin.svg" alt="LinkedIn" title="LinkedIn"/></a>
          <a class="mr-2" href="#"><img src="/public/social/Instagram.svg" alt="Instragram" title="Instragram"/></a>
          <a class="mr-2" href="#"><img src="/public/social/Youtube.svg" alt="Youtube" title="Youtube"/></a>
          <a href="#"><img src="/public/social/TikTok.svg" alt="TikTok" title="TikTok"/></a>
        </div>

        <img src="/public/fundingreg.png" class="mt-5" alt="Funding Regulator" title="Funding Regulator" />
      </div>
      
      <div class="nav md:w-1/2">
        <ul class="flex flex-wrap">
          <li v-for="item in nav" :key="item.link" class="w-2/4 mb-4"><a :href="item.link">{{ item.title }}</a></li>
        </ul>
      </div>

      <div class="newsletter lg:w-1/4 md:pt-10 lg:pt-0">
        <h5>Join our mailing list</h5>
        <p>Sign up for our latest news and wasy to get involved.</p>

        <form class="w-full flex flex-wrap items-center justify-between mt-4" @submit.prevent="handleSubmit">
          <div class="w-6/12 md:w-4/12 lg:w-6/12 pr-1 mb-4">
            <label for="firstname" class="w-full mb-2 block">First Name</label>
            <input type="text" id="firstname" name="firstname" required class="w-full" v-model="firstname"/>
          </div>
          <div class="w-6/12 md:w-4/12 lg:w-6/12 pl-1 md:pr-1 lg:pr-0 mb-4">
            <label for="lastname" class="w-full mb-2 block">Last Name</label>
            <input type="text" id="lastname" name="lastname" required class="w-full" v-model="lastname"/>
          </div>

          <div class="w-full md:w-4/12 lg:w-full md:pl-1 lg:pl-0 mb-4">
            <label for="email" class="w-full mb-2 block">Email Address</label>
            <input type="email" id="email" name="email" required class="w-full" v-model="email"/>
          </div>
          
          <div class="w-full flex flex-wrap md:justify-between">
            <input type="submit" value="Sign Up" class="button primary w-full md:w-3/12 md:order-2" />
            <div class="md:order-1 mt-4 md:mt-0 w-full md:w-8/12 flex flex-wrap items-center"><p id="disclaimer">By signing up to the mailing list you agree to the <a href="#">Privacy Policy</a></p></div>
          </div>
        </form>
      </div>

    </div>

    <div class="gutter pt-6">
      <ul class="flex flex-wrap mb-6"><li class="mb-2 mr-4 lg:mb-0" v-for="item in gutter_nav" :key="item.link"><a :href="item.link">{{ item.title }}</a></li></ul>
      <p class="small m-0">{{ charity_no }}</p>
    </div>
  </footer>
</template>

<style scoped>
footer .newsletter form p{color: #666;}
footer .newsletter label{font-weight: 600; color: var(--primary);}
footer .newsletter form input{border-radius: 5px; border: 1px solid #C8DEE4; transition: .3s; padding: .5rem .75rem; font-size: 18px;}
footer .newsletter h5{color: var(--primary); font-weight: 600; font-size: 1.2rem; }
footer .newsletter p:not(#disclaimer){ font-size: 1.1rem; }

footer .socials a{ position: relative; top: 0; transition: .2s;}
footer .socials a:hover{ top: -2px; }
footer .details{ line-height: 40px; }
footer .details h5{ color: #666666; font-size: 21px;}
footer .details a{ color: var(--primary); font-size: 28px; font-weight: 600;}
footer .gutter{ border-top: 1px solid #E1E1E1; }
footer a:not(#phone){ text-decoration: underline; color: #1C1C1C; transition: .3s; }
footer a:not(#phone):hover{ color: var(--primary); }
footer .gutter p{ color: #666666; }
</style>

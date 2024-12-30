import { createApp } from 'vue'
import './main.css'
import App from './App.vue'

createApp(App).mount('#app')

// Count Up to Desired Number.
const counters = document.querySelectorAll('.counter h5[data-count]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      var value = counter.getAttribute('data-count');

      let start = 0;
      let increment = value / 100;
      const duration = 1000;

      const interval = setInterval(() =>{
        counter.textContent = Math.ceil(start);
        start += increment;
        if (start >= value) {
          clearInterval(interval);
          counter.textContent = value; 
        }
      }, duration / 100 );
    }
  })
});

counters.forEach(counter => {
  observer.observe(counter);
});

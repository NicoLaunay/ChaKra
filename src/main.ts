import './style.css'

import { createApp } from 'vue'
import router from './ui/router'

import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).use(router).mount('#app')

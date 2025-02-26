import './assets/main.css'
import router from './router/index'
import store from './store/index'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')

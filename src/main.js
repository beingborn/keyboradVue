import './assets/main.css'
import router from './router/index'
import store from './store/index'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')

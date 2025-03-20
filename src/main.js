import './assets/main.css'
import './assets/ui-script'
import router from './router/index'
import store from './store/index'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt()
let app = createApp(App)

app.config.globalProperties.emitter = emitter

app.component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')

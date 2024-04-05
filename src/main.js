import {
    createApp
} from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import store from './store/store'
import router from './router/router'
import VueCarousel from 'vue-carousel';


createApp(App)
    .use(router)
    .use(store)
    .use(VueCarousel)
    .mount('#app')
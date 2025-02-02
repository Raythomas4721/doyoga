import '@/assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios';

import App from '@/App.vue'
import 'swiper/swiper-bundle.css';
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios);

app.mount('#app')

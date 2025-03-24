import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//axios
import axios from 'axios';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//Material-Design-Icons
import '@mdi/font/css/materialdesignicons.css'

// Global CSS
import '@/assets/global.css'; // Add this line




const vuetify = createVuetify({ components, directives })
const app = createApp(App)
//axios
app.config.globalProperties.$axios = axios;


app.use(createPinia())
app.use(router)
app.use(vuetify);
app.mount('#app')

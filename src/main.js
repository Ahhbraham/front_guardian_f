import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


//axios

//import axios app,maybe scroll reveal too


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//Material-Design-Icons
import '@mdi/font/css/materialdesignicons.css'




const vuetify = createVuetify({ components, directives })
const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(vuetify);
app.mount('#app')

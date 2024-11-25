import { createApp } from 'vue'
import { pinia } from './providers'
import App from './App.vue'
import "./styles/base.scss"

const app = createApp(App).use(pinia)
app.mount('#app')

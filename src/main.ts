import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify, { toast, ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createPinia } from 'pinia'

function runApp() {
  const app = createApp(App)

  const pinia = createPinia()

  const toastConfig: ToastContainerOptions = {
    autoClose: 2000,
    limit: 8,
    containerId: toast.POSITION.BOTTOM_RIGHT,
    position: toast.POSITION.BOTTOM_RIGHT
  }
  app.use(pinia).use(router).use(Vue3Toastify, toastConfig).mount('#app')
}

runApp()

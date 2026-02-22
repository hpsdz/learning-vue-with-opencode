import { createApp } from 'vue'
import { createPinia } from 'pinia' // 导入 createPinia
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia() // 创建 Pinia 实例

app.use(pinia) // 挂载 Pinia

app.mount('#app')

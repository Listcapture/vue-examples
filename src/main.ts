
import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import './views/Exp03/Store/miragejs.config';
import './views/Exp03/types/ResultVo'
import './views/Exp03/service/authService'
import './views/Exp03/Store/fetch'

const app = createApp(App)
app.use(router)
app.mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
// import env from './env'

const MOCK = false
if (MOCK) {
  require('./mock/api') // require不是预加载，是由上至下执行才会加载，import会预加载，会一直存在于内存中
}
// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'// env.baseURL // 用mock要注释掉
axios.defaults.timeout = 8000
// 请求拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) { // 未登录
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

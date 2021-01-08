import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
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
    return Promise.reject(res)
  } else {
    Message.error(res.msg)
  }
}, (error) => {
  return Promise.reject(error)
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)
Vue.config.productionTip = false
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入全局样式表
import './assets/css/global.css'
//导入axios
import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

// 将axios挂载到Vue
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(elementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

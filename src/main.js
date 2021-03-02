import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Select from '@/components/Select'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(Select)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

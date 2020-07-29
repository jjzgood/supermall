import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'
import toast from "components/common/toast"

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
// 使用懒加载
Vue.use(vueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

// 解决移动端300m延迟问题
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

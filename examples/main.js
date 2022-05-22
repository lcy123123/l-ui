import Vue from 'vue'
import App from './App.vue'
import LUi from '../packages'
// Vue.config.productionTip = false
Vue.use(LUi)
new Vue({
  render: h => h(App)
}).$mount('#app')

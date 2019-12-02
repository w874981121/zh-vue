import Vue from 'vue'
import App from './App.vue'
// import {router} from './router/index.js'    //路由

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
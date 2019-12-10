import Vue from 'vue'
import App from './App.vue'
import router from './router/index' //路由

// 弹幕效果
import barrage from "./js/barrage/index"
Vue.use(barrage)
// vant 按需引入部分组件
import {
  Tabs,
  Tab,
  IndexBar,
  IndexAnchor,
  Swipe,
  SwipeItem
} from 'vant';
import 'vant/lib/tabs/style';
import 'vant/lib/tab/style';
import 'vant/lib/index-bar/style';
import 'vant/lib/index-anchor/style';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';

Vue.config.productionTip = false
Vue.use(Tabs).use(Tab).use(IndexBar).use(IndexAnchor).use(Swipe).use(SwipeItem);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
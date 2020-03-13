import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import ViewUI from 'view-design';
import store from './store'
import 'view-design/dist/styles/iview.css';
import './style/index.scss'

// 引入iview
Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

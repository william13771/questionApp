import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import iView from 'iview';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mock from './mock';
// import axios from './lib/axios'
import 'iview/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(iView);
Vue.use(ElementUI)
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Mock,
  render: h => h(App)
}).$mount('#app')

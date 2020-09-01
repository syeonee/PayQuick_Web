// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import VueAnalytics from 'vue-analytics'
import Trend from 'vuetrend'
Vue.prototype.$http = axios
Vue.use(router)
Vue.use(Trend)

Vue.config.devtools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})

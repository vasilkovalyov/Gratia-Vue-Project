import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import moment from 'moment'

Vue.config.productionTip = false;
Vue.use(Vuelidate, moment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

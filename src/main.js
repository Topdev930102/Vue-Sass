
import './assets/styles/main.scss'
import Vue from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.component('Paginate', Paginate)
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

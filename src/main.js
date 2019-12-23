import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import library from './library.json'

// importando modulo localmente
// import MyModule from './module'

// importando modulo compilado
import MyModule from '../module/mymodule.common'

Vue.config.productionTip = false
Vue.use(MyModule, router, store, library)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
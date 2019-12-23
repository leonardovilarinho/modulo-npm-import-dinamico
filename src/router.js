import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/Dashboard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/main.vue'
import Dashboard from '@/components/pages/dashboard.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})

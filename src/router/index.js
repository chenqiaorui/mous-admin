import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      component: (resolve) => require(['@/views/login'], resolve),
      hidden: true
    },
    {
      path: '',
      component: Layout,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: (resolve) => require(['@/views/index'], resolve),
          name: '首页',
          meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/components/Login'
import User from '@/components/UserList'
import Home from '@/components/Home'
import Pay from '@/components/Payment'
import Total from '@/components/TotalSales'
import Stock from '@/components/Stock'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'user',
      component: Login
    },
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    },
    {
      path: '/pay/:id',
      name: 'pay',
      component: Pay
    },
    {
      path: '/total/:id',
      name: 'total',
      component: Total
    },
    {
      path: '/stock/:id',
      name: 'stock',
      component: Stock
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/Index'
import re from '@/components/re'
import search from '@/components/search'
import register from '@/components/register'
import logn from '@/components/logn'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dsfsdf',
      name: 'Hello',
      component: HelloWorld
    },
        {
      path: '/',
      name: 'index',
      component: index
    },
        {
      path: '/re',
      name: 're',
      component: re
    },
     {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/logn',
      name: 'logn',
      component: logn
    }

  ]
})

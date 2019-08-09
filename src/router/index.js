import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JiaRui from '@/components/JiaRui'
import Jr from '@/components/Jr'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Userinfo from '@/components/Userinfo'
import Buycar from '@/components/Buycar'
import Buycartwo from '@/components/Buycartwo'
import Buycarthree from '@/components/Buycarthree'
import Goods from '@/components/Goods'
Vue.use(Router)
export default new Router({
  routes:[
    {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
    },
    {
      path: '/JiaRui',
      name: 'JiaRui',
      component: JiaRui
    },
    {
      path: '/Jr',
      name: 'Jr',
      component: Jr
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/Buycar',
      name: 'Buycar',
      component: Buycar
    },
    {
      path: '/Buycartwo',
      name: 'Buycartwo',
      component: Buycartwo
    },
    {
      path: '/Buycarthree',
      name: 'Buycarthree',
      component: Buycarthree
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
  ]



})

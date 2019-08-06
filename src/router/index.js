import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import JiaRui from '@/components/JiaRui'
import Jr from '@/components/Jr'
import Index from '@/components/Index'
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
    }
  ]



})

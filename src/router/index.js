import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import Index from '@/components/Index'
import Regist from '@/components/Regist'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  mode:'history',//加入此句话可以去掉默认访问路径后面的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },{
       path: '/Index',
      name: 'Index',
      component: Index
    },{
       path: '/Regist',
      name: 'Regist',
      component: Regist
    },{
       path: '/Register',
      name: 'Register',
      component: Register
    }


  ]
})

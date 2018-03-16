import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginRegister from '@/login&register'
import Test from '@/pages/user/test'
import Admin from '@/app.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'hollow',
          component: HelloWorld
        },
      ]
    },{
      path: '/login',
      name: 'LoginRegister',
      component: LoginRegister,
    },
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }
  ]
})

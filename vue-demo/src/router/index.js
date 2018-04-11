import Vue from 'vue'
import Router from 'vue-router'






const HelloWorld = () => import('@/components/HelloWorld');
const LoginRegister = () => import('@/login&register');
const Test = () => import('@/pages/user/test');
const Design = () => import('@/pages/design/design-detail');
const DesignList = () => import('@/pages/design/design-list');

const Home = () => import('@/pages/view/home');
const HDetail = () => import('@/pages/view/detail');
const Admin = () => import('@/app.js');
// const index = () => import('@/page/Index.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/hdetail/:id',
      name: 'hdetail',
      component: HDetail,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          name: 'design',
          path: 'design/:id',
          component: Design
        }, {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          name: 'designlist',
          path: 'designs',
          component: DesignList
        },
      ]
    },
    {
      path: '/login',
      name: 'LoginRegister',
      component: LoginRegister,
    }

  ]
})

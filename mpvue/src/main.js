import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main','pages/food_list/main', 'pages/food_detail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: "#2694d2",
      color: "#fff",
      selectedColor:"#fff",
      borderStyle: "#2694d2",
        list: [
          {
            pagePath: "pages/index/main",
            text: "首页",
            iconPath: "/static/images/index.png",
            selectedIconPath: "/static/images/index.png"
          },
          {
            pagePath: "pages/counter/main",
            text: "个人中心",
            iconPath: "/static/images/web.png",
            selectedIconPath: "/static/images/web.png"
          }
        ]
      }
  }
}

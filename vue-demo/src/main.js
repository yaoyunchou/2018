// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mainMixin  from './mixins/main.mixin'
import store  from './store/index.js'
import './style/common.scss'
import './directive'
Vue.config.productionTip = false
Vue.use(ElementUI);



// Vue.mixin(mainMixin);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

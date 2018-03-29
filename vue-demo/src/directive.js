import Vue from 'vue'

// 注册一个全局自定义指令 `v-focus`
var  basImagePath = 'http://p024s277s.bkt.clouddn.com/';
Vue.directive('src', {
  
    // 当被绑定的元素插入到 DOM 中时…
    inserted: function (el,binding) {
      // 聚焦元素
      el.src = basImagePath+binding.value;
    }
  })
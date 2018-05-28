// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../service/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    food:{}
  },
  mutations: {
    setFood: (state,data) => {
     state.food = data
    }
  },
  actions:{
    async getFoodInfo ({ commit,state },params) {
      let rs = await axios.get('foodInfo',params).catch(error => {
          throw '网络环境异常,请稍后再试';
      });
    
      if(rs.isSuccess){
          console.log(rs.data);
          commit('setFood',rs.data);
          return rs.data;
         
      } else {
          throw  rs.data
      }
  },
  }
})

export default store

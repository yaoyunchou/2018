// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../service/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foods:[]
  },
  mutations: {
    setFoods: (state,data) => {
     state.foods = data
    }
  },
  actions:{
    async searchFood ({ commit,state },params) {
      let rs = await axios.get('http://xfysj.vipgz1.idcfengye.com/api/searchfood',params).catch(error => {
          throw '网络环境异常,请稍后再试';
      });
    
      if(rs.isSuccess){
          console.log(rs.data.list);
          commit('setFoods',rs.data.list);
          return rs.data;
         
      } else {
          throw  rs.data.data
      }
  },
  }
})

export default store

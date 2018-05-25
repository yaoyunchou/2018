// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../service/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    foots:[]
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    setFoods: (state,data) => {
     state.foots = data
    }
  },
  actions:{
    async searchFood ({ commit,state },params) {
      console.log("@@@@")
      console.log(axios)
      params = {keyword:'苹'}
      let rs = await axios.get('http://localhost:8070/api/searchfood',params).catch(error => {
          throw '网络环境异常,请稍后再试';
      });
      if(rs.data.isSuccess){
          return rs.data.data;
          commit('setFoods',rs.data.data);
      } else {
          throw  rs.data.data
      }
  },
  }
})

export default store

// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../service/http'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    foods:[],
    pageNum:1,
    count:10,
  },
  mutations: {
    setFoods: (state,data) => {
     state.foods = data
    },
    setPageNum: (state,data) => {
      state.pageNum = data
     },
     setCount: (state,data) => {
      state.count = data
     }
  },
  actions:{
    async searchfood ({ commit,state },params) {
      params.pageSize = 10;
      params.pageNum = state.pageNum;
      let rs = await axios.get('search',params).catch(error => {
          throw '网络环境异常,请稍后再试';
      });
    
      if(rs.isSuccess){
          console.log(rs.data.list);
          let foods =  state.foods.concat(rs.data.list);
          commit('setFoods',foods);
          commit('setCount',rs.data.count)
          return rs.data;
         
      } else {
          throw  rs.data.data
      }
  },
  }
})

export default store

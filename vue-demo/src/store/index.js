import Vue from 'vue'
import Vuex from 'vuex'
import http from '../services/http.server'
import user from './modules/user'
import design from './modules/design'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,design
  },
  state:{
      access_token:''
  },
  actions:{
    
  },
  mutations:{

  }    
});
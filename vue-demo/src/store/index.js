import Vue from 'vue'
import Vuex from 'vuex'
import http from '../services/http.server'
import user from './modules/user'
import design from './modules/design'
import axios from 'axios'

Vue.use(Vuex)

var token = sessionStorage.getItem('token')||''
axios.defaults.headers.common['token'] = token;
export default new Vuex.Store({
  modules: {
    user,design
  },
  state:{
      token:token
  },
  actions:{
    
  },
  mutations:{
   
  }    
});
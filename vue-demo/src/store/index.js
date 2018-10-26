import Vue from 'vue'
import Vuex from 'vuex'
import http from '../services/http.server'
import user from './modules/user'
import design from './modules/design'
import gallery from './modules/gallery'
import axios from 'axios'

Vue.use(Vuex)

var token = sessionStorage.getItem('token')||''
var userId = sessionStorage.getItem('userId')||''
axios.defaults.headers.common['token'] = token;
export default new Vuex.Store({
  modules: {
    user,design,gallery
  },
  state:{
      token:token,
      userId:userId
  },
  actions:{
    
  },
  mutations:{
    setToken(state,token){
      axios.defaults.headers.common['token'] = token;
      sessionStorage.setItem('token',token)
      state.token = token;
    }
  }    
});
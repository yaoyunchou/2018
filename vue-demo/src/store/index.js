import Vue from 'vue'
import Vuex from 'vuex'
import http from '../services/http.server'
import user from './modules/user'


Vue.use(Vuex)

console.log(user);
export default new Vuex.Store({
  modules: {
    user
  },
  state:{
      access_token:''
  },
  actions:{
    async login({state},data){
        let body =  http.post('/api/user/login',data);
        return body;
    }
  },
  mutations:{

  }    
});
import http from '../../services/http.server'
import axios from 'axios'
// initial state
// shape: [{ id, quantity }]
const state = {

  checkoutStatus: null
}

// getters
const getters = {

}

// actions
const actions = {
  async rigister({ commit, state }, data) {
    let body = await http.post('/api/user',{data:data});
    if(body.isSuccess){
        return body.data;
    }else{
        return {
          isSuccess:false,
          data:body
        }
    }
    
  },
  async login({ commit, rootState, state }, data) {
    let body = await http.post('/api/user/login',{data:data});
    if(body.isSuccess){
      axios.defaults.headers.common['token'] = body.data.token;
      rootState.token = body.data.token;
      rootState.userId = body.data.userId;
      sessionStorage.setItem('token',body.data.token);
      sessionStorage.setItem('userId',body.data.userId);
        return body;
    }else{
        return body;
    }
    
  }
}

// mutations
const mutations = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

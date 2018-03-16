import http from '../../services/http.server'
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
    let body = await http.post('/api/user/user',{data:data});
    if(body.isSuccess){
        return body.data;
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

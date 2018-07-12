const { mutation, action, getter } = require('../base/_decorators')

class Store {
  constructor (state) {
    this.namespaced = true
    this.state = {
      current: {},
      loading: false,
      loadingTip: '加载中...'
    }

    // 扩展 state
    for (let key in state) {
      this.state[key] = state[key]
    }
  }

  @mutation
  LOADING (state, val) {
    state.loading = val
  }

  @mutation
  LOADING_TIP (state, val) {
    state.loadingTip = val
  }

  @action
  setLoading ({commit}, {status, tip}) {
    commit('LOADING', status)
    commit('LOADING_TIP', tip)
  }

  assert (val, error) {
    if (!val) {
      throw new Error(error)
    }
    return val
  }

  assertHttp (res) {
    this.assert(res.data.code === 0, res.data.msg)
    return res.data.data
  }

  throwError (err) {
    // utils.error.doThrow(err)
  }

  isnull (val, nullval) {
    return val === null ? nullval : val
  }
}

var mutationDemo = new Store().mutation()
console.log(mutationDemo)
export default {Store, mutation, action, getter}

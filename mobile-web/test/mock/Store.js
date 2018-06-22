export default class MockStore {
  constructor (store) {
    this.state = store.state
    this.getters = store.getters
    this.rootState = {}
    this.store = store
  }
  commit (type, playload) {
    return this.store.mutations[type].call(this, this.store.state, playload)
  }
  dispatch (type, playload) {
    return this.store.actions[type].call(this.store, {
      dispatch: this.dispatch.bind(this),
      commit: this.commit.bind(this),
      state: this.store.state,
      getters: this.store.getters,
      rootState: this.rootState2
    }, playload)
  }
}

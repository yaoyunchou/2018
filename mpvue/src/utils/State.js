const debug = process.env.NODE_ENV !== 'production'
export default class State {
  constructor () {
    this._items = []
    this._current = null
    this._primarykey = 'id'
  }

  get items () {
    return this._items
  }

  set items (val) {
    this._items = val
  }

  get currentItem () {
    return this._current
  }

  set currentItem (val) {
    this._current = val
  }

  get primaryKey () {
    return this._primarykey
  }

  set primaryKey (val) {
    this._primarykey = val
  }

  /**
   * 扩展生成state
   * 默认有 items, currentItem
   */
  static extend (options) {
    let stateObj = new State()
    for (let option of Object.keys(options)) {
      if (debug && stateObj[option]) {
        console.warn(`vuex State 属性被重写[${option}]`)
      }
      stateObj[option] = options[option]
    }
    return stateObj
  }
}

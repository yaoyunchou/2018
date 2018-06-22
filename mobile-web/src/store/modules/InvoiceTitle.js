import axios from 'axios'
import utils from '@/utils'
import base from '../base'

const {error} = utils
const {Store, mutation, action, getter} = base

function getValidePattern (name, param) {
  const patterns = {
    required: /\S+/,
    minLength: new RegExp(`^.{${param},}$`),
    maxLength: new RegExp(`^.{0,${param}}$`),
    number: /^\d{0,}$/,
    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    mobile: /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/,
    tel: /(^\s{0}$)|((\d{3,4})-(\d{6,8}))|((\d{3,4})-(\d{6,8})-(\d{1,4}))/,
    taxNo: /^[0-9a-zA-Z-]{15,18}$/ig
  }
  return patterns[name]
}

function doValidate (value, validator, param) {
  var pattern = getValidePattern(validator, param)
  if (!pattern) {
    console.warn(`validator [${validator}:${param}] is not found`)
    return true
  }

  return pattern.test(value)
}

function validate (value, validators) {
  const result = {error: false}
  validators = validators || ''
  for (let validator of validators.split('|')) {
    let [_validator, param] = validator.split(':')
    result[validator] = !doValidate(value, _validator, param)
    if (result[validator]) {
      result.error = true
    } else {
      result[validator] = false
    }
  }

  return result
}

class InvoiceTitle extends Store {
  constructor () {
    super({
      items: [],
      current: {},
      validators: {}
    })
  }

  /// URIS
  get LIST_URI () {
    return `${TICKET}/listByOpenid`
  }

  get CREATE_URI () {
    return `${TICKET}/addTicket`
  }

  get ITEM_URI () {
    return `${TICKET}/getTicketById`
  }

  @getter
  usernameInvalid (state) {
    return validate(state.current.username, 'required|maxLength:100').error
  }

  @getter
  taxnumInvalid (state) {
    return validate(state.current.taxnum, 'required|maxLength:20').error
  }

  @getter
  mobileInvalid (state) {
    return validate(state.current.mobile, 'required|mobile').error
  }

  @getter
  emailInvalid (state) {
    return validate(state.current.email, 'required|email').error
  }

  @getter
  addressInvalid (state) {
    return validate(state.current.address, 'maxLength:50').error
  }

  @getter
  telInvalid (state) {
    return validate(state.current.telephone, 'maxLength:50').error
  }

  @getter
  bankInvalid (state) {
    return validate(state.current.bank, 'maxLength:50').error
  }

  @getter
  accountInvalid (state) {
    return validate(state.current.account, 'maxLength:50').error
  }

  @getter
  isInvalid (state, getters) {
    let isUserInvalid = getters.usernameInvalid || getters.moblieInvalid || getters.emailInvalid
    let isCompanyInvalid = isUserInvalid || getters.taxnumInvalid || getters.addressInvalid || getters.telInvalid || getters.bankInvalid || getters.accountInvalid
    if (state.current.type === 'company') {
      return isCompanyInvalid
    } else {
      return isUserInvalid
    }
  }

  /// MUTATIONS
  @mutation
  ITEMS (state, val) {
    state.items = val || []
  }

  @mutation
  UPDATE_CURRENT (state, prop) {
    state.current[prop.key] = prop.val
  }
  /// ACTIONS
  @action
  async getList ({commit, state, rootGetters}, params) {
    try {
      commit('LOADING', true)
      commit('LOADING_TIP', '加载中...')
      let result = await axios.get(this.LIST_URI, {params: {openid: rootGetters.openid}})
      let data = error.assertHttp(result)
      commit('ITEMS', data)
      return data
    } catch (err) {
      return utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  @action
  async getItem ({state, commit}, ticketId) {
    try {
      commit('LOADING', true)
      commit('LOADING_TIP', '加载中...')
      let result = await axios.get(this.ITEM_URI, {params: {ticketId}})
      let data = error.assertHttp(result)
      return data
    } catch (err) {
      utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  @action
  async saveNew ({state, commit, rootGetters}, item) {
    try {
      this.assert(!state.loading, '不能重复提交！')
      commit('LOADING', true)
      commit('LOADING_TIP', '保存中...')
      item.openid = rootGetters.openid
      let result = await axios.post(this.CREATE_URI, item)
      let data = error.assertHttp(result)
      return data
    } catch (err) {
      utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  @action
  async updateItem ({state, commit}, item) {
    try {
      commit('LOADING', true)
      commit('LOADING_TIP', '保存中...')
      let result = await axios.put(this.UPDATE_URI, item)
      let data = error.assertHttp(result)
      return data
    } catch (err) {
      utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  @action
  async deleteItem ({state, commit}, id) {
    try {
      commit('LOADING', true)
      commit('LOADING_TIP', '正在删除')
      let result = await axios.delete(this.DELETE_URI, {params: {id}})
      let data = error.assertHttp(result)
      return data
    } catch (err) {
      utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  @action
  async setCurrent ({commit}, item) {
    commit('CURRENT', item)
  }
}

var store = new InvoiceTitle()
export default store

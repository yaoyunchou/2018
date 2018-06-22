import axios from 'axios'
import utils from '@/utils'
import base from '../base'

const {error} = utils
const { Store, mutation, action } = base

class InvoiceMake extends Store {
  constructor () {
    super({
      current: {},
      title: {},
      order: {}
    })
  }

  get ORDER_URL () {
    return `${TICKET}/getOrder`
  }

  get INVOICE_URL () {
    return `${TICKET}/addOrder`
  }

  @mutation
  CURRENT (state, item) {
    state.current = item
  }

  @mutation
  SET_ORDER (state, order) {
    state.order = order
  }

  @mutation
  SET_TITLE (state, title) {
    state.title = title
  }

  @action
  setTitle ({commit, dispatch}, title) {
    commit('SET_TITLE', title)
  }

  /**
   * 取得订单信息
   * 通过rootState获取订单号与应用名称
   * @param {*} param0
   */
  @action
  async getOrder ({commit, rootGetters, dispatch}) {
    try {
      commit('LOADING', true)
      commit('LOADING_TIP', '加载中...')
      let result = await axios.get(this.ORDER_URL, {
        params: {orderNo: rootGetters.orderNo, appName: rootGetters.appName}
      })
      let data = this.assertHttp(result)
      commit('SET_ORDER', data)
      return data
    } catch (err) {
      return utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }

  /**
   * 开票
   * @param {*} param0
   */
  @action
  async makInvoice ({commit, state, rootGetters}) {
    try {
      this.assert(!state.loading, '不能重复提交！')
      commit('LOADING', true)
      commit('LOADING_TIP', '开票中...')
      let result = await axios.post(this.INVOICE_URL, {
        'account': this.isnull(state.title.account, ''),
        'address': this.isnull(state.title.address, ''),
        'appName': this.isnull(rootGetters.appName, ''),
        'bank': this.isnull(state.title.bank, ''),
        'email': this.isnull(state.title.email, ''),
        'goodsName': this.isnull(state.order.goodsName, ''),
        'mobile': this.isnull(state.title.mobile, ''),
        'money': this.isnull(state.order.money, ''),
        'xdrq': this.isnull(state.order.xdsj, ''),
        'openid': this.isnull(rootGetters.openid, ''),
        'orderNo': this.isnull(rootGetters.orderNo, ''),
        'taxnum': this.isnull(state.title.taxnum, ''),
        'telephone': this.isnull(state.title.telephone, ''),
        'ticketId': this.isnull(state.title.id, ''),
        'type': this.isnull(state.title.type, ''),
        'username': this.isnull(state.title.username, '')
      })
      let data = error.assertHttp(result)
      commit('SET_ORDER', data)
      return data
    } catch (err) {
      return utils.error.doThrow(err)
    } finally {
      commit('LOADING', false)
    }
  }
}

export default new InvoiceMake()

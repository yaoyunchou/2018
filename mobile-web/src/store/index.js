import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import utils from '@/utils'
import make from './modules/InvoiceMake'
import preview from './modules/InvoicePreview'
import title from './modules/InvoiceTitle'
const {url} = utils
const state = function () { // state can be a method, or a raw object
  return {
    appId: 'wx6628d33ac319e694',
    openid: '' /* sessionStorage.getItem('openid') || '' 'odqwHuAoLi6YUVi07PVwPxHFii3w' */,
    token: '',
    appName: '' /* 'JY' */,
    orderNo: ''/* '99a2febea40e454989c92cebd484ab9f' */,
    userInfo: null
  }
}
const getters = {
  openid (state) {
    let openid = sessionStorage.getItem('openid') || state.openid || ''
    return openid
  },
  appName (state) {
    let appName = sessionStorage.getItem('appName') || state.appName || ''
    return appName
  },
  orderNo (state) {
    let orderNo = sessionStorage.getItem('orderNo') || state.orderNo || ''
    return orderNo
  }
}
const mutations = {
  token (state, token) {
    state.token = token
  },
  setOpenid (state, openid) {
    sessionStorage.setItem('openid', openid)
    sessionStorage.setItem('appId', state.appId)
    state.openid = openid
  },
  setAppName (state, appName) {
    sessionStorage.setItem('appName', appName)
    state.appName = appName
  },
  setOrderNo (state, orderNo) {
    sessionStorage.setItem('orderNo', orderNo)
    state.orderNo = orderNo
  }
}

const actions = {
  getAuthInfo ({state, commit}, tempId) {
    return axios.get(`${AUTH_API}/getOauthInfo`, {params: {id: tempId}})
  },
  oauth ({state, commit}, route) {
    let domain = url.getRouteUrl(route)
    let params = {
      appId: state.appId,
      domain: encodeURIComponent(domain)
    }
    axios.get(`${AUTH_API}/getOauth2AuthorizationUrl`, {
      params
    }).then(function (result) {
      if (result.data.code === 0) {
        window.location.href = result.data.data
      }
    })
  },
  getUserInfo (state, commit) {

  }
}

const modules = {make, preview, title}

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters,
  strict: debug
})

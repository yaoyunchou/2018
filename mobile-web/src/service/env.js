import axios from 'axios'
var env = {}
/**
 * 初始化环境参数
 * @param appId
 * @param openid
 */
export function setEnv (appId, openid) {
  env.appId = appId || 'wx6628d33ac319e694'
  env.openid = openid || env.openid
  sessionStorage.setItem('appId', env.appId)
  if (env.openid) {
    sessionStorage.setItem('openid', env.openid)
  } else {
    sessionStorage.removeItem('openid')
  }
  axios.defaults.headers.common['appId'] = env.appId
  axios.defaults.headers.common['openid'] = env.openid
}
export function getEnv () {
  env.appId = getAppId()
  env.openid = getOpenid()
  return env
}

export function getWxAuth () {
  env.appId = env.appId || sessionStorage.getItem('appId')
  let params = {
    appId: env.appId
  }
  axios.get('/wx/active/getOauth', {
    params
  }).then(function (res) {
    if (res.data.isSuccess) {
      window.location.href = res.data.data
    }
  })
}

export function getOauth (route) {
  let href = window.location.href
  let root = href.slice(0, href.indexOf('/', 13))
  route = route || window.location.hash
  let domain = root + '/' + 'index.html#/' + route

  let params = {
    appId: getAppId(),
    domain: encodeURIComponent(domain)
  }

  axios.get('fp/oauth/getOauth2AuthorizationUrl', {
    params
  }).then(function (result) {
    if (result.data.code === 0) {
      window.location.href = result.data.data
    }
  })
}

export function getAppId () {
  var appId = env.appId || sessionStorage.getItem('appId')
  return (appId !== 'undefined' && appId !== 'null') && appId
}
export function getOpenid () {
  var openid = env.openid || sessionStorage.getItem('openid')
  return (openid !== 'undefined' && openid !== 'null') && openid
}

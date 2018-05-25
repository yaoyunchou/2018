import axios from 'axios'
import {
  getRouteUrl
} from './url.js'

const context = {
  inited: false,
  signatured: false
}

const defaultData = {
  title: '牛商网最新课程表——网络营销学习干货大本营 ',
  desc: '实战派讲师团,理论+实操,易懂,易吸收,快速落地',
  imgUrl: 'http://www.nsw88.com/Skins/Default/NewPage/Img/Common/h_logo.gif'
}

export function initShare (appId) {
  return new Promise((resolve, reject) => {
    if (context.signatured) {
      resolve(true)
      return
    }
    axios.get('/wx/jsApi/ticket', {
      params: {
        appId: appId,
        domain: window.location.origin + window.location.pathname
      }
    }).then((res) => {
      if (res.data.isSuccess) {
        var options = {
          debug: false,
          appId: res.data.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.data.signature, // 必填，签名，见附录1
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems'
          ]
        }

        wx.config(options)
        wx.ready(function () {
          wx.hideMenuItems()
          context.signatured = true
          resolve(true)
        })
        wx.error(function (res) {
          // alert(res.errMsg);
          console.log('wx config error==>' + res.errMsg)
          reject(res.errMsg)
        })
      }
    })
  })
}

export async function setShareInfo (appId, path, title, desc, imgUrl) {
  context.inited = true
  await initShare(appId)
  // wx 可能还没有加载出来，因为这里会取context的数据，所以是安全
  let shareData = {
    title: title || defaultData.title,
    desc: desc || defaultData.desc,
    link: getRouteUrl(`auth/${appId}/${encodeURIComponent(path || 'home')}`),
    imgUrl: imgUrl || defaultData.imgUrl
  }
  console.log('set share===>' + JSON.stringify(shareData))
  wx.onMenuShareAppMessage(shareData)
  wx.onMenuShareTimeline(shareData)
}

<template>
  <div :class="$style.landingPage">
    <header></header>
    <div class="landing-page-item">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { mapState, mapActions, mapMutations } from 'vuex'
import {getRoot} from '../utils/url.js'
export default {
  metaInfo: {
    title: '牛商网电子发票'
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState([
      'appId',
      'openid'
    ])
  },
  methods: {
    ...mapActions(['getAuthInfo', 'oauth']),
    ...mapMutations(['setOpenid', 'setAppName', 'setOrderNo']),
    checkOpenid () {
      if (!this.openid || !sessionStorage.getItem('openid')) {
        this.oauth(`${this.$route.params.id}/${this.$route.params.name}`)
      } else {
        (!this.openid) && self.setOpenid(sessionStorage.getItem('openid'))
        // self.$router.push({
        //   path: '/' + 'title'
        // })
        window.location.replace(getRoot() + '/index.html#/title')
      }
    },
    getRoute (url) {
      var self = this
      let route = decodeURIComponent(url)
      let reg = getRoot() + '/index.html#/'
      route = route.replace(reg, '')
      let arr = route.split('/')
      self.setOrderNo(arr[0])
      arr.length > 1 && self.setAppName(arr[1])
    }

  },
  mounted () {
    let self = this
    try {
      if (process.env.NODE_ENV !== 'production') {
        self.setOpenid(process.env.openid)
        self.setAppName(process.env.appName)
        self.setOrderNo(process.env.orderNo)
        window.location.replace(getRoot() + '/index.html#/title')
        return
      }

      if (this.$route.name === 'auth') {
        let tempId = this.$route.params.tempId
        self.getAuthInfo(tempId).then(function (result) {
          self.setOpenid(result.data.data.openid)
          self.getRoute(result.data.data.callBackRedirectUrl)
          // self.$router.push({
          //   path: '/' + 'title'
          // })
          window.location.replace(getRoot() + '/index.html#/title')
        })
      } else {
        self.checkOpenid()
      }
    } catch (ex) {
      Toast(ex.message || ex)
    }
    // this.$router.replace('/title')
  }
}

</script>

<style module>
  @import "../assets/vars.css";
  .landingPage {
    font: var(--font);
    color: var(--vi);
  }

</style>

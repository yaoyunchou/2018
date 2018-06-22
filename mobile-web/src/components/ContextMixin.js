import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  computed: {
    ...mapGetters(['openid', 'appName', 'orderNo'])
  },
  created () {
    if (!this.openid && this.appName && this.orderNo) {
      this.$router.push(`/share/${this.orderNo}/${this.appName}`)
      Toast({
        message: '微信授权失败！',
        position: 'bottom',
        duration: 3000
      })
    } else if (!this.appName || !this.orderNo) {
      this.$router.push(`/error/no_order`)
      Toast({
        message: '订单信息缺失！',
        position: 'bottom',
        duration: 3000
      })
    }
  }
}

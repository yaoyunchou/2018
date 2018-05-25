import {
  getRouteUrl
} from '../service/url'
import {
  mapState,
  mapActions,
  mapMutations
} from 'vuex'
import {
  setShareInfo,
  initShare
} from '../service/wx-share'

let mixnin = {
  data() {
    return {
      isWxShared: false
    };
  },
  computed: {
    ...mapState({
      hdid: s => s.hdid,
      openid: s => s.openid,
      appId: s => s.appId,
      hdData: s => s.hdData,
      imageDomain: s => s.imageDomain
    })
  },
  methods: {
    ...mapActions(['loadHd']),
    qiniuSrc(src) {
      return /^https?/.test(src) ? src : this.imageDomain + src;
    },
    setShare(path, title, desc, imgUrl){
      title = title || this.hdData.share.title;
      desc = desc || this.hdData.share.desc;
      imgUrl = imgUrl || this.imageDomain + this.hdData.share.image.replace(/^\//, '');
      path = path || 'home'

      setShareInfo(this.appId, this.hdid, path, title, desc, imgUrl);
    }
  },
  async mounted() {
    //loading, 没有路由的页面也不用处理（组件也会响应mixin） 页面不需要进行分享
    if (!this.$options.enableShare || this.$route.name === 'loading') {
      return;
    }
    let appId = this.appId,
      openid = this.openid,
      hdid = this.hdid;
    if (process.env.NODE_ENV !== "production") {
      appId = process.env.APPID;
      openid = process.env.OPENID;
      hdid = process.env.VOTEID;

      this.$store.commit('setAppId', appId);
      this.$store.commit('setOpenid', openid);
      this.$store.commit('setHdid', hdid);

    } else {
      appId = sessionStorage.getItem('appId');
      openid = sessionStorage.getItem('openid');
      hdid = sessionStorage.getItem('hdid');

      this.$store.commit('setAppId', appId);
      this.$store.commit('setOpenid', openid);
      this.$store.commit('setHdid', hdid);

      if (!hdid) {
        //没有活动id，强制程序退出
        this.$router.push({
          name: 'error',
          params: {
            error: '活动id没有指定！'
          }
        });
        return;
      }
    }

    console.log('wx share===>' + this.$route.name);
    if (process.env.NODE_ENV === "production") {
      try {
        await initShare(this.appId);
      } catch (ex) {
        alert('微信授权失败:' + ex.message);
      }
    }

    try {
      await this.loadHd();
    } catch (ex) {
      alert('活动读取不成功:' + ex.message);
    }

    let shareSetting = this.$options.share ||{};
    this.setShare(shareSetting.path, shareSetting.title, shareSetting.desc, shareSetting.imgUrl);
    this.isWxShared = true;
  }
}

export default mixnin;

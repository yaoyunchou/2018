<template>
  <div>
    <div class="weui-panel weui-panel_access">
        <!-- <div class="weui-panel__hd">{{food.nikeName}}</div> -->
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg==" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">名称：{{food.nikeName}}</h4>
                    <p class="weui-media-box__desc">热量: {{food.calory}}</p>
                    <p class="weui-media-box__desc">评价：{{food.desc}}</p>
                </div>
            </div>
        </div>
        <!-- <div class="weui-panel__ft">
            <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                <div class="weui-cell__bd">查看更多</div>
                <span class="weui-cell__ft"></span>
            </a>    
        </div> -->
    </div>
    
    <div class="clearfix"></div>
    
    <div class="weui-form-preview">
          <div class="weui-form-preview__bd">
            <p>
               <label class="weui-form-preview__label">热量(大卡)</label>
              <em class="weui-form-preview__value">{{food.calory}}/100g</em>
            </p>
              <p>
                  <label class="weui-form-preview__label">碳水化合物(克)</label>
                  <em class="weui-form-preview__value">{{food.carbohydrate}}/100g</em>
              </p>
              <p>
                <label class="weui-form-preview__label">脂肪(克)</label>
              <em class="weui-form-preview__value">{{food.fat}}/100g</em>
              </p>
              <p>
                  <label class="weui-form-preview__label">蛋白质(克)</label>
                  <em class="weui-form-preview__value">{{food.protein}}/100g</em>
              </p>
               <p>
                  <label class="weui-form-preview__label">纤维素(克)</label>
                  <em class="weui-form-preview__value">{{food.cellulose}}/100g</em>
              </p>
               <p>
                  <label class="weui-form-preview__label">维生素A(微克)</label>
                  <em class="weui-form-preview__value">{{food.vitamin_A}}/100g</em>
              </p>
          </div>
         
      </div>
  </div>
    
</template>

<script>
import store from "./store";
export default {
  data() {
    return{
      keyword:'',
      ui:{
        isFoucs:false
      }
    }
  },
  computed: {
    food() {
      return store.state.food;
    }
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    goSearch() {
      this.ui.isFoucs = true;
    },
    closeSearch() {
      this.ui.isFoucs = false;
      store.commit("setFoods", []);
      this.keyword = "";
    },
    
  },

  created() {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
     //console.log('created'+this.$root.$mp.query)
  },
  onLoad (){
    store.dispatch('getFoodInfo',{id:this.$root.$mp.query.id}).then((data)=>{
      console.log('onLoad');
      console.log(this.food);
    })
  }
};
</script>

<style scoped>
@import "../../common/lib/weui.wxss";
.weui-grids {
  margin-top: 10px;
  clear: both;
}
#search_show {
  margin-top: 0px;
}
.weui-grid__icon img {
  width: 100%;
  height: 100%;
}
.icon-small {
  height: 38rpx;
}
.index-list .list-in {
  box-sizing: border-box;
  height: 240rpx;
  margin-bottom: 20rpx;
  padding: 20rpx 25rpx;
  font-family: "微软雅黑";
  background: #fff;
}
.end-line {
  text-align: center;
  background: #fff;
}
</style>




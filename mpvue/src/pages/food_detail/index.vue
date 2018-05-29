<template>
  <div>
    <div class="weui-panel weui-panel_access">
        <!-- <div class="weui-panel__hd">{{food.nikeName}}</div> -->
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd"  >
                    <comImage :url ='url'></comImage>
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
import comImage from '@/components/com-image'
export default {
  data() {
    return{
      keyword:'',
      ui:{
        isFoucs:false
      }
    }
  },
  components:{
    comImage
  },
  computed: {
    url(){
      return this.food.image?this.food.image.url:'';
    },
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
.weui-form-preview__bd p{ overflow: hidden; }
.weui-media-box__hd{
  width:500rpx;
  margin-right:10rpx;
}
</style>




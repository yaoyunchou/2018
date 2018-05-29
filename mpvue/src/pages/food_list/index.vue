<template>
<div>
     <scroll-view class="index-list" scroll-y style="height: 1100rpx;" @scrolltolower="lower"  >
      <div class="list-in"  v-for="food in foods" :key = "food._id" @click = goDetail(food)>
        <div class="list-in-left">
          <comImage :url ="food.image.url"></comImage>
        </div>
        <div class="list-in-right">
          <p class="title">{{food.nikeName}}</p>
          <div class="detail">
            <p>热量:{{food.calory}}卡/100g</p>
            <p class="desc">评价:{{food.desc}}</p>
          </div>
        </div>
        
      </div>
      <div  class="end-line">我是有底线的！</div>
    </scroll-view>
</div>
    
</template>

<script>
import store from "./store";
import comImage from '@/components/com-image'
export default {
  data() {},
  computed: {
    pageNum(){
      return store.state.pageNum;
    },
    count(){
      return store.state.count;
    },
    foods() {
      return store.state.foods;
    }
  },
  components:{
    comImage
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    getFoods(){
      let self = this;
      let options =  {
        category: self.$root.$mp.query.ctg,
      }
      store.dispatch('searchfood',options);
    },
    lower(){
      if(this.pageNum*10>=this.count){
        return;
      }
      let pageNum = this.pageNum+1;
      store.commit('setPageNum',pageNum);
      this.getFoods();
    },
    goDetail(food){
       let url = "/pages/food_detail/main?id="+food._id;
        wx.navigateTo({
          url: url
        })
    }
  },
 
  onLoad() {
    // 调用应用实例的方法获取全局数据
    this.getFoods();
  },
  onUnload(){
    store.commit('setPageNum',1);
    store.commit('setFoods',[]);
  }
};
</script>

<style scoped>
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
.desc{ display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;}

.title{
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.list-in-left image{ width:190rpx; height:190rpx;}
</style>




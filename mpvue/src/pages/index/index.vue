<template>
  <div>
    <div class="weui-search-bar" id="search_bar">
      <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input type="search" class="weui-search-bar__input" id="search_input" v-model="keyword" placeholder="请输入食物名称!" @input="searchTip" />
              <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
          </div>
          <label v-if="!ui.isFoucs"  @click="goSearch" for="search_input" class="weui-search-bar__label" id="search_text">
              <icon class="icon-small" type="search" size="14"></icon>
              <span>搜索</span>
          </label>
      </form>
      <a href="javascript:void(0)" v-if="ui.isFoucs" class="weui-search-bar__cancel-btn"  @click="closeSearch" id="search_cancel">取消</a>
    </div>
    <div class="weui-cells weui-cells_access search_show" id="search_show">
        <div class="weui-cell" v-for="food in foods">
            <div class="weui-cell__bd weui-cell_primary" @click="goDetail(food._id)">
                <p>{{food.nikeName}}</p>
            </div>
        </div>
    </div>
    <div class="weui-grids">
        <a  href="/pages/food_list/main?ctg=1" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/1.png" alt="">
            </div>
            <p class="weui-grid__label">
                谷薯芋、杂豆、主食
            </p>
        </a>
        <a href="/pages/food_list/main?ctg=2" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/2.png" alt="">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                蛋类、肉类及制品
            </p>
        </a>
          <a href="/pages/food_list/main?ctg=3" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/3.png" alt="">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                奶类及制品
            </p>
        </a>
          <a href="/pages/food_list/main?ctg=4" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/4.png" alt="">
            </div>
            <p class="weui-grid__label">
                蔬果和菌藻
            </p>
        </a>
        <a href="/pages/food_list/main?ctg=5" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/5.png" alt="">
            </div>
            <p class="weui-grid__label">
                坚果、大豆及制品
            </p>
        </a>
          <a href="/pages/food_list/main?ctg=6" class="weui-grid">
            <div class="weui-grid__icon">
               <img src="/static/images/6.png" alt="">
            </div>
            <p class="weui-grid__label">
                饮料
            </p>
        </a>
          <a href="/pages/food_list/main?ctg=7" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/7.png" alt="">
            </div>
            <p class="weui-grid__label">
                食用油、油脂及制品
            </p>
        </a>
          <a href="/pages/food_list/main?ctg=8" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/8.png" alt="">
            </div>
            <p class="weui-grid__label">
                调味品
            </p>
        </a>
        <a href="/pages/food_list/main?ctg=9" class="weui-grid">
            <div class="weui-grid__icon">
                <img src="/static/images/9.png" alt="">
            </div>
            <p class="weui-grid__label">
                零食、点心、冷饮
            </p>
        </a>
    </div>
    <h3>精品推荐</h3>
     <scroll-view class="index-list" scroll-y style="height: 1100rpx;" bindscrolltolower="lower"  >
      <div class="list-in"  >
        <div class="list-in-left">
          <img src="/static/images/1.png" mode="widthFix">
        </div>
        <div class="list-in-right">
          <p class="title"></p>
          <div class="detail">
            <p>作者:</p>
            <p>来源:</p>
          </div>
        </div>
        
      </div>
       <div class="list-in"  >
        <div class="list-in-left">
          <img src="/static/images/1.png" mode="widthFix">
        </div>
        <div class="list-in-right">
          <p class="title"></p>
          <div class="detail">
            <p>作者:</p>
            <p>来源:</p>
          </div>
        </div>
        
      </div>
       <div class="list-in"  >
        <div class="list-in-left">
          <img src="/static/images/1.png" mode="widthFix">
        </div>
        <div class="list-in-right">
          <p class="title"></p>
          <div class="detail">
            <p>作者:</p>
            <p>来源:</p>
          </div>
        </div>
        
      </div>
      <div  class="end-line">我是有底线的！</div>
    </scroll-view>
  </div>
</template>

<script>
import store from './store'
export default {
  data() {
    return {
      motto: "Hello World",
      keyword:'',
      userInfo: {},
      ui:{
        isFoucs:false
      }
    };
  },
   computed: {
    foods () {
      return store.state.foods
    }
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    },
    goSearch(){
      this.ui.isFoucs = true;
    },
    closeSearch(){
      this.ui.isFoucs = false;
      store.commit('setFoods',[]);
      this.keyword = '';
    },
    searchTip(){
      store.dispatch('searchFood',{keyword:this.keyword}).then(function(data){
        //console.log(data);
      });
    },
    goDetail(id){
      wx.redirectTo({
        url: '/pages/food_detail/main?id='+id
      })
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
@import "../../common/lib/weui.wxss";
.weui-grids{
  margin-top:10px;
  clear: both;
}
#search_show{
  margin-top:0px;
}
.weui-grid__icon img{ width:100%; height:100%;}
.icon-small{ height:38rpx;}
.index-list .list-in{
  box-sizing: border-box;
  height: 240rpx;
  margin-bottom: 20rpx;
  padding:20rpx 25rpx;
  font-family: "微软雅黑";
  background: #fff;
}
.end-line{
  text-align: center;
  background:#fff;
}

</style>




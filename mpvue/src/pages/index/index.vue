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
            <div class="weui-cell__bd weui-cell_primary">
                <p>{{food.nikeName}}</p>
            </div>
        </div>
    </div>
    <div class="weui-grids">
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_button.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                谷薯芋、杂豆、主食
            </p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                蛋类、肉类及制品
            </p>
        </a>
          <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                奶类及制品
            </p>
        </a>
          <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                蔬果和菌藻
            </p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                坚果、大豆及制品
            </p>
        </a>
          <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                饮料
            </p>
        </a>
          <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                食用油、油脂及制品
            </p>
        </a>
          <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                调味品
            </p>
        </a>
        <a href="javascript:;" class="weui-grid">
            <div class="weui-grid__icon">
                <!-- <img src="./images/icon_nav_cell.png" alt=""> -->
            </div>
            <p class="weui-grid__label">
                零食、点心、冷饮
            </p>
        </a>
    </div>
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
        console.log(data);
      });
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
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.weui-search-bar__label icon{
  height:38rpx;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.weui-grids{
  margin-top:10px;
  clear: both;
}
#search_show{
  margin-top:0px;
}
</style>




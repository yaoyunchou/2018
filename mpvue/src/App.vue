<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.index-list{
  line-height: 70rpx;
  background: #eae8e8;
  min-height: 100vh;
}
.index-list .list-in .list-in-left{
  width:200rpx;
  height: 200rpx;
  float: left;
}
.index-list .list-in .list-in-left image{
  width:100%;
}
.index-list .list-in .list-in-right{
  width:100%;
 /* // padding-left:25rpx; */
  float: left;
}

.index-list .list-in .list-in-right{
  width:475rpx;
  padding-left:25rpx;
  float: left;
}
.index-list .list-in .list-in-right .title{
  font-size: 28rpx;
  line-height: 50rpx;
  margin-bottom: 10rpx;
}

.index-list .list-in .list-in-right .detail{
  word-break: break-all;
  font-size: 24rpx;
  color:#6A6A6A;
  line-height: 45rpx;
}
</style>

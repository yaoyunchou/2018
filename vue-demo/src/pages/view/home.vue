<template>
  <div class="home">
    <div class="header">
      <header>
        <h1>
          <img src="../../assets/logo.png" alt="">
        </h1>
        <nav>
          <a href="#">个人首页</a>
          <a href="javascript:void(0)" v-on:click="goAnchor('userInfo')">个人简介</a>
          <a href="javascript:void(0)" v-on:click="goAnchor('list')">作品展示</a>
          <a href="javascript:void(0)" v-on:click="goAnchor('footer')">联系方式</a>
        </nav>
      </header>
    </div>
    <div class="user-info" id ='userInfo'>
      <h2 class="head">个人简介</h2>
      <div class="user-info-in">
        <div class="avarta">
          <img src="http://p024s277s.bkt.clouddn.com/home/avarta.png" alt="">
        </div>
        <div class="text-box">
          <h3>个人简介</h3>
          <p>性别:女 年龄：27岁  籍贯：湖北 学历：本科 英语：六级</p><br/>
          <p>自我评价：</p> <br/>
          <p> 可以独立完成整套网站设计以及app原型设计，界面设计。<br/>
              可以把握不同风格的设计。<br/>
              熟练运用：html/html5 css/css3 javascript/jguery<br/>
              能手写div+css以及交互效果，熟悉各种页面布局，<br/>
              能轻松将设计图转化成前端的静态页面，且符合W3C标准，兼容所有的主流浏览器<br/>
          </p>
          <br/>
          <br/>
          <p>

            可熟练运用以下工具<br/>
            设计工具：photoshop firework illustrator <br/>
            代码工具：dreamweaver <br/>
          </p>
           <br/>
          <br/>
          <p>我是一个性格开朗，积极乐观，做事认真负责的，追求更好的人！喜欢充满挑战的设计行业，喜欢学习新东西，知识不断更新，学无止境！</p>
        </div>
      </div>
    </div>
    <div class="list" id="list">
        <h2 class="head">作品展示</h2>
        <div class="tabs">
          <span  v-bind:class="{ on: type==='' }" v-on:click="search('')">全部</span>
          <span v-bind:class="{ on: type==='pc' }"  v-on:click="search('pc')">pc端</span>
          <span v-bind:class="{ on: type==='mc' }"  v-on:click="search('mc')">手机端</span>
          <span v-bind:class="{ on: type==='other' }"  v-on:click="search('other')">其他</span>
        </div>
        <ul class="list_in">
          <li v-for="value in tableData">
              <div class="img-box" v-on:click = "goDetail(value)">
                <img v-src="value.smImg" alt="">
              </div>
              <div class="text">
                  <h5>{{value.title}}</h5>
                  <p>设计</p>
                  <a href="javascript:void(0)" v-on:click = "goDetail(value)">detail</a>
              </div>
              
          </li>
        </ul>
       <div class="clearfix"></div>
       <el-pagination @current-change="goPage" :current-page.sync="pageNumber" :page-size="pageSize" layout="prev, pager, next, jumper"
       :total="total">
     </el-pagination>
        <h2 class="head">联系方式</h2>
    </div>
    <div id="footer">
        <div class="footer">
          <h4>联系方式 / contact me</h4>
            <div class="foot_in">
              
              <div class="code">
                <img src="../../assets/images/code.png" alt="">
              </div>
              <div class="icon">
                <img src="../../assets/images/icon2.png" alt="">
              </div>
              <p>
                邮箱：990509726@qq。com<br/>

                电话：15626232247<br/>
                
                Q Q：990509726
            </p>
            </div>
           
        </div>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import jquery from 'jquery';
export default {
  name: "Home",
  data() {
    return {
      type: "",
      tableData: [],
      pageSize: 20,
      pageNumber: 1,
      total: 0
    };
  },
  metaInfo: {
    title: "hcc设计"
  },
  methods: {
    ...mapActions("design", ["getList"]),
    updateRow(data) {
      let self = this;
      //console.log(data);
      this.updateItem({
        id: data.id,
        isEnable: data.isEnable
      }).then(function(back) {
        if (back.isSuccess) {
          self.$message("修改成功!");
        } else {
          self.$message("修改失败!");
        }
      });
    },
    deleteRow(data) {
      let self = this;
      //console.log(data);
      this.updateItem({
        id: data.id,
        isDeleted: "1"
      }).then(function(back) {
        if (back.isSuccess) {
          self.$message("修改成功!");
        } else {
          self.$message("修改失败!");
        }
      });
    },
    send(data) {
      this.sendMsg({ msgId: data.id }).then(function(back) {
        if (back.isSuccess) {
          self.$message("发送成功!");
        } else {
          self.$message("发送失败!");
        }
      });
    },
    goDetail(data) {
      console.log(data);
      this.$router.push({
        name: "hdetail",
        params: {
          id: data._id
        }
      });
    },
    search(data) {
      this.type = data;
      let options = {
        pageNumber: 1,
        pageSize: this.pageSize,
        query: {
          type: this.type
        }
      };
      this.getList(options).then(data => {
        if (data.isSuccess) {
          (this.pageNumber = data.data.pageNumber),
            (this.total = data.data.total);
          this.pageSize = data.data.page;
          this.tableData = data.data.dataList;
        } else {
        }
      });
    },
    goPage(data) {
      console.log(data);
      let options = {
        pageNumber: data,
        pageSize: this.pageSize
      };
      this.getList(options).then(data => {
        if (data.isSuccess) {
          (this.pageNumber = data.data.pageNumber),
            (this.total = data.data.total);
          this.pageSize = data.data.page;
          this.tableData = data.data.dataList;
        } else {
        }
      });
    },
    goAnchor(name){
      jquery('html, body').animate({scrollTop: jquery('#'+name).offset().top}, 1000)
    }
  },
  mounted: function() {
    this.getList({ pageSize: this.pageSize }).then(data => {
      if (data.isSuccess) {
        (this.pageNumber = data.data.pageNumber),
          (this.total = data.data.total);
        this.pageSize = data.data.page;
        this.tableData = data.data.dataList;
      } else {
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: #ededed;
  .head {
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    font-size: 20px;
    font-weight: 500;
  }
  .header {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background: url(http://p024s277s.bkt.clouddn.com/home/index_bg.png) no-repeat center top;
    z-index: 1000;
    header {
      width: 1200px;
      margin: 0 auto;
      h1 {
        height: 36px;
        margin: 20px 0 0 26px;
        float: left;
        img {
          height: 100%;
        }
      }
      nav {
        height: 70px;
        float: right;
        a {
          display: inline-block;
          padding: 0 30px;
          line-height: 70px;
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
  .user-info {
    width: 1200px;
    margin: 100px auto 0;
    .user-info-in {
      height: 630px;
      position: relative;
      background: #fff;
      padding: 20px;
      .avarta {
        width: 600px;
        height: 631px;
        img {
          width: 100%;
        }
      }
      .text-box {
        width: 561px;
        height: 495px;
        position: absolute;
        font-family: "黑体";
        font-size:14px;
        font-weight: bold;
        padding: 25px 25px 25px 60px;
        left: 527px;
        top: 43px;
        // background: #f5f5f5  url('../../assets/images/bg04.png') no-repeat left top;
        z-index: 1;
        border-radius: 5px;
        &::after{
          content:' ';
          display:block;
        
           position: absolute;
           bottom:0;
           left:0px;
           width:560x;
          height:90px;
          // background: url('../../assets/images/bg03.png') no-repeat bottom;
          z-index: 0;
        }
        h3 {
          text-align: center;
          margin: 10px 0 20px 0;
        }
        p {
          line-height: 24px;
        }
        label {
          float: left;
        }
      }
    }
  }
  .list {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .tabs {
      height: 50px;
      span {
        display: inline-block;
        padding: 0 50px;
        line-height: 50px;
        text-align: center;
        
        background: #fff;
        cursor: pointer;
        margin-right: 10px;
      }
      .on {
        background: #000;
        color: #fff;
      }
    }
    .list_in {
      margin-top: 37px;
      li {
        width: 380px;
        height: 425px;
        background: pink;
        float: left;
        margin-bottom: 30px;
        margin-right: 20px;
        .img-box {
          height: 280px;
          overflow: hidden;
          img {
            width: 100%;
            cursor: pointer;
          }
        }
        .text {
          padding: 17px;
          height: 111px;
          background: #fff;
          h5 {
            height: 35px;
            line-height: 35px;
            font-size: 16px;
            color: #333333;
          }
          p {
            line-height: 28px;
            margin-bottom: 10px;
          }
          a {
            display: block;
            height: 35px;
            line-height: 35px;
            border-top: 1px solid #cccc;
            background: url("../../assets/images/icon.png") no-repeat right
              center;
          }
        }
      }
    }
  }
  #footer {
    height: 610px;
    background: #2b2b2b;
    .footer {
      width: 740px;
      margin: 0 auto;
      overflow: hidden;
      padding:87px 230px;
       h4{ font-size:24px; text-align: center; line-height: 36px; margin-bottom: 68px; color:#fff; font-weight: normal;}
      .foot_in {
        position: relative;
        height:219px;
        padding-top:75px;
        padding-left:150px;
        border:4px solid #fff;
       
        .code{
          position: absolute; top:47px; left:-90px;
        }
        .icon{
          position: absolute; top:84px; right:-40px;
        }
         p {
        float: left;
        color: #fff;
        font-size: 18px;
        line-height: 48px;
        padding-left: 50px;
        background: url('../../assets/images/icon3.png') no-repeat left 20px;
      }
      }
     
    }
  }
}
</style>
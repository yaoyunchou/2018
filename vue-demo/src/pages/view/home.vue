<template>
  <div class="home">
    <div class="header">
      <header>
        <h1>
          <img src="../../assets/logo.png" alt="">
        </h1>
        <nav>
          <a href="#">个人首页</a>
          <a href="#">个人简介</a>
          <a href="#">作品展示</a>
          <a href="#">联系方式</a>
        </nav>
      </header>
    </div>
    <div class="user-info">
      <h2 class="head">个人简介</h2>
      <!-- <div class="user-info-in">
        <div class="avarta">
          <img src="/static/images/avarta.png" alt="">
        </div>
        <div class="text-box">
          <h3>个人简介</h3>
          <p><label>年龄</label>：27岁</p>
          <p><label>籍贯</label>：湖北</p>
          <p><label>学历</label>：本科</p>
          <p><label>英语</label>：六级</p>
          <p><label>自我评价</label>： 可以独立完成整套网站设计以及app原型设计，界面设计。 可以把握不同风格的设计。 熟练运用：html/html5 css/css3 javascript/jguery 能手写div+css以及交互效果，熟悉各种页面布局， 能轻松将设计图转化成前端的静态页面，且符合W3C标准，兼容所有的主流浏览器
            可熟练运用以下工具 设计工具：photoshop firework illustrator 代码工具：dreamweaver 我是一个性格开朗，积极乐观，做事认真负责的，追求更好的人！喜欢充满挑战的设计行业，喜欢学习新东西，知识不断更新，学无止境！
          </p>
        </div>
      </div> -->
      <img src="/static/images/person.png" alt="">
    </div>
    <div class="list">
        <h2 class="head">作品展示</h2>
        <div class="tabs">
          <span  v-bind:class="{ on: type==='' }" v-on:click="search('')">全部</span>
          <span v-bind:class="{ on: type==='pc' }"  v-on:click="search('pc')">pc端</span>
          <span v-bind:class="{ on: type==='mc' }"  v-on:click="search('mc')">手机端</span>
        </div>
        <ul class="list_in">
          <li v-for="value in tableData">
              <div class="img-box">
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
            <div class="foot_in">
              <img src="../../assets/images/code.png" alt="">
            </div>
            <p>
                邮箱：990509726@qq。com<br/>

                电话：15626232247<br/>
                
                Q Q：990509726
            </p>
        </div>
    </div>
    
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

  export default {
    name: "Home",
    data() {
      return {
        type:'',
        tableData: [],
        pageSize: 20,
        pageNumber: 1,
        total: 0
      };
    },
    metaInfo: {
      title: "首页"
    },
    methods: {
      ...mapActions("design", ["getList"]),
      updateRow(data) {
        let self = this;
        //console.log(data);
        this.updateItem({
          id: data.id,
          isEnable: data.isEnable
        }).then(function (back) {
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
        }).then(function (back) {
          if (back.isSuccess) {
            self.$message("修改成功!");
          } else {
            self.$message("修改失败!");
          }
        });
      },
      send(data) {
        this.sendMsg({ msgId: data.id }).then(function (back) {
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
      search(data){
        this.type = data;
        let options = {
          pageNumber:1,
          pageSize:this.pageSize,
          query:{
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
          pageSize:this.pageSize
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
      }
    },
    mounted: function () {
      this.getList({pageSize:this.pageSize}).then(data => {
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
    background:#ededed;
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
      position:fixed;
      top:0;
      background: url(/static/images/index_bg.png) no-repeat center top;
      header {
        width: 1200px;
        margin: 0 auto;
        h1 {
          height: 36px;
          margin:20px 0 0 26px;
          float: left;
          img {
            height: 100%;
          }
        }
        nav {
          height: 70px;
          float: right;
          a {
            display:inline-block;
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
        .avarta {
          width: 600px;
          height: 631px;
          margin-left: 20px;
          img {
            width: 100%;
          }
        }
        .text-box {
          width: 530px;
          height: 495px;
          position:absolute;
          padding: 25px;;
          left:572px;
          top:43px;
          background: #fff;
          h3{ text-align:center; margin:10px 0 20px 0;}
          p{line-height:32px;}
          label{float: left;}
        }
      }
    }
    .list{
      width:1200px; margin:0 auto; overflow: hidden;
      .tabs{ height: 50px;
        span{ display:inline-block; padding:0 50px; line-height: 50px; text-align: center; border-radius: 5px; background: #fff; cursor: pointer; margin-right:10px;}
        .on{ background: #000; color:#fff;}
      }
      .list_in{
        margin-top:37px;
        li{
          width:380px; height:425px; background:pink; float:left; margin-bottom:30px; margin-right:20px;
          .img-box{ heigth:280px; img{ width:100%;}}
          .text{ padding:17px; height: 111px; background: #fff;
            h5{ height: 35px; line-height:35px; font-size:16px; color:#333333;}  
            p{ line-height: 28px; margin-bottom: 10px;}
            a{ display:block; height: 35px; line-height: 35px; border-top:1px solid #cccc; background: url('../../assets/images/icon.png') no-repeat right center;}
          }
        }
      } 

    }
    #footer{
      height:610px; background:#454545;
      .footer{
      width:1200px; margin:0 auto;  overflow: hidden;
      .foot_in{
        margin:100px 0 0 250px; overflow: hidden; float: left;
      }
      p{ float:left; margin-top:260px; margin-left:50px; color:#fff; fonts-size:18px; line-height: 48px; font-weight: bold;}
    }
    }
   
  }
</style>
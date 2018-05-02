<template>
  <div class="msg-list">
    <div class="head">
      <el-button size="medium" v-on:click="addMsg()">添加</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label=" " width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="600"></el-table-column>
      <el-table-column  label="消息类型" width="500">
          <template slot-scope="scope">
            {{scope.row.type=='pc'?'pc作品':'手机作品'}}
          </template>
      </el-table-column>
      <el-table-column prop="author" label="作者" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small">删除</el-button>
          <el-button  @click="goDetail(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <ul>
      <li v-for = "image in images"> 
          <img v-src= "image.url" alt="">
          <p v-text="image.title"></p>
      </li>
    </ul>
    <el-pagination @current-change="goPage" :current-page.sync="pageNumber" :page-size="pageSize" layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>

</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Msglist",
  data() {
    return {
      tableData: [],
      pageSize: 10,
      pageNumber: 1,
      total: 0
    };
  },

  metaInfo: {
    title: "消息列表"
  },
  methods: {
    ...mapActions("gallery", ["getList", "updateItem", "sendMsg"]),
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
    addMsg() {
      this.$router.push({
        name: "design",
        params: {
          id: "create"
        }
      });
    },
    goDetail(data) {
      this.$router.push({
        name: "design",
        params: {
          id: data._id
        }
      });
    },
    goPage(data) {
      console.log(data);
      let options = {
        pageNumber: data
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
  mounted: function() {
    this.getList().then(data => {
      if (data.isSuccess) {
        (this.pageNumber = data.data.pageNumber),
          (this.total = data.data.total);
        this.pageSize = data.data.page;
        this.images = data.data.dataList;
      } else {
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.msg-list {
  .head {
    height: 100px;
  }
}
</style>

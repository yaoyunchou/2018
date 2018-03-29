<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="design">
    <el-form-item label="标题" prop="title">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="form.type" placeholder="请选择作品类型">
        <el-option label="pc作品" value='pc'></el-option>
        <el-option label="手机作品" value='mc'></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    
      <el-form-item label="图标">
     <el-upload
        class="avatar-uploader"
        action="api/upload/file?lib=hc"
        :show-file-list="false"
        :on-success="smImgSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="form.smImg" v-src="form.smImg" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="设计稿">
     <el-upload
        class="design-uploader"
        action="api/upload/file?lib=hc"
        :show-file-list="false"
        :on-success="fullImgSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="form.fullImg" v-src="form.fullImg" class="design">
        <i v-else class="el-icon-plus design-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')"> {{type=='create'?'立即创建':'提交'}}</el-button>

      <el-button v-on:click="goList">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "MsgDetail",
  data() {
    return {
      type: "create",
      imageUrl:'',
      fullscreenLoading: false,
      form: {
        title: "",
        desc: "",
        smImg: "",
        fullImg: "",
        type:'pc'
      },
      rules: {
        title: [
          {
            required: true,
            message: "请输入标题",
            trigger: "blur"
          },
          {
            min: 3,
            max: 64,
            message: "长度在 3 到 64 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  conpuntd: {},
  metaInfo: {
    title: "消息列表"
  },
  methods: {
    ...mapActions("design", ["createItem", "getItem", "updateItem"]),
    submitForm(name) {
      let self = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          let data = {
            ...self.form
          };
          if (self.type == "create") {
            self.createItem(data).then(function(back) {
              if (back.isSuccess) {
                self.$message("添加成功!");
                 self.$router.push({name:'designlist'});
              } else {
                self.$message("添加失败!");
              }
            });
          } else {
            self.updateItem(data).then(function(back) {
              if (back.isSuccess) {
                self.$message("修改成功!");
                self.$router.push({name:'designlist'});
              } else {
                self.$message("修改失败!");
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    goList() {
      this.$router.push({name:'designlist'});
    },
    smImgSuccess(res) {
      this.form.smImg = res.key;
      //this.imageUrl = URL.createObjectURL(file.raw);
    },
     fullImgSuccess(res) {
      this.form.fullImg = res.key;
      //this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted: function() {
    let self = this;
    this.type = this.$route.params.id;
    if (this.$route.params.id !== "create") {
      let loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      self
        .getItem({
          id: this.$route.params.id,
        })
        .then(function(data) {
          loading.close();
          if (data.isSuccess) {
            self.form.id = data.data._id;
            self.form.title = data.data.title;
            self.form.author = data.data.author;
            self.form.desc = data.data.desc;
            self.form.smImg = data.data.smImg;
            self.form.fullImg = data.data.fullImg;
          } else {
            self.$message(data.data);
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.design {
    max-width: 500px;
    .el-select,
    .el-textarea,
    .el-input {
      width: 360px;
      float: left;
    }
    .el-checkbox {
      float: left;
      margin-right: 15px;
      text-align: left;


    }
  }

</style>

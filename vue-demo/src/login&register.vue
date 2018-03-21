<template>
  <div>
    <header class="login-header">
      <div class="logo">小飞鱼设计</div>
      <router-link class="el-icon-arrow-left back_index" to="/admin">返回首页</router-link>
    </header>
    <el-form v-show="isLogin" :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm1.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm1.pass" auto-complete="off"></el-input>
      </el-form-item>
      <!-- <el-form-item label="验证码" prop="code">
        <el-row>
          <el-col :span="14"> <el-input v-model="ruleForm1.code"></el-input></el-col>
          <el-col :span="10"> <el-button class="code">获取验证</el-button></el-col>
        </el-row>          
      </el-form-item> -->
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm1')">登陆</el-button>
          <el-button @click="resetForm('ruleForm1')">重置</el-button>
          <span class="register fr" @click="regist()">{{isLogin?"注册":"登陆"}}</span>
      </el-form-item>
    </el-form>
    <el-form v-show="!isLogin" :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item> 
      <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm2.phone"></el-input>
      </el-form-item>
      <!-- 还没有开放这个功能 -->
      <!-- <el-form-item label="验证码" prop="code">
        <el-row>
          <el-col :span="14"> <el-input v-model="ruleForm2.code"></el-input></el-col>
          <el-col :span="10"> <el-button class="code">获取验证</el-button></el-col>
        </el-row>          
      </el-form-item> -->
      <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      
      <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm2.age"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
          <span class="register fr" @click="regist()">{{isLogin?"注册":"登陆"}}</span>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm1.validateField("checkPass");
        }
        callback();
      }
    };
    var checkcode = (rule, value, callback) => {
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm1: {
        name: "",
        pass: "",
        code: ""
      },
      ruleForm2: {
        name: "",
        phone: "",
        pass: "",
        checkPass: "",
        email: "",
        age: ""
      },
      rules1: {
        phone: [{ required: true, message: "请输入手机", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
        // code: [{ required: true, message: '请输入验证码', trigger: 'blur' },{ validator: checkcode, trigger: "blur" }]
      },
      rules2: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入手机", trigger: "blur" }],
       // code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      isLogin: true
    };
  },
  methods: {
    ...mapActions("user", ["rigister","login"]),
   //...mapActions(["login"]),
    submitForm(formName) {
      let self = this;
      console.log(self.$router);
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (formName === "ruleForm1") {
            self.login({
              nikeName: self.ruleForm1.name,
              psw: self.ruleForm1.pass
            }).then(function(data){
              if(data.isSuccess){
                 self.$router.push({name: 'Admin'})
              }
            });
          } else {
            self.rigister({
              nikeName: self.ruleForm2.name,
              psw: self.ruleForm2.pass,
              phone: self.ruleForm2.phone,
              age:self.ruleForm2.age
            }).then(function(data){
              console.log(data);
            });
          }

      
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    regist() {
      this.isLogin = !this.isLogin;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-header {
  height: 60px;
  background: #545c64;
  .back_index {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
    color: #fff;
    font-size: 16px;
  }
}
.demo-ruleForm {
  width: 30%;
  min-width: 400px;
  max-width: 520px;
  margin: 100px auto;
  .code {
    width: 80%;
    float: right;
  }
}
</style>

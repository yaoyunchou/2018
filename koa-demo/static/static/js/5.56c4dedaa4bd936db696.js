webpackJsonp([5],{"02k6":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=s("4YfN"),t=s.n(o),l=s("9rMa"),a={data:function(){var e=this;return{ruleForm1:{name:"",pass:"",code:""},ruleForm2:{name:"",phone:"",pass:"",checkPass:"",email:"",age:""},rules1:{phone:[{required:!0,message:"请输入手机",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}]},rules2:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],pass:[{required:!0,message:"请输入密码",trigger:"blur"}],checkPass:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:function(r,s,o){""===s?o(new Error("请再次输入密码")):s!==e.ruleForm2.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}],phone:[{required:!0,message:"请输入手机",trigger:"blur"}]},isLogin:!0}},methods:t()({},Object(l.b)("user",["rigister","login"]),{submitForm:function(e){var r=this;console.log(r.$router),this.$refs[e].validate(function(s){if(!s)return console.log("error submit!!"),!1;"ruleForm1"===e?r.login({nikeName:r.ruleForm1.name,psw:r.ruleForm1.pass}).then(function(e){e.isSuccess&&r.$router.push({name:"Admin"})}):r.rigister({nikeName:r.ruleForm2.name,psw:r.ruleForm2.pass,phone:r.ruleForm2.phone,age:r.ruleForm2.age}).then(function(e){console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},regist:function(){this.isLogin=!this.isLogin}})},i={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",[e._m(0),e._v(" "),s("el-form",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}],ref:"ruleForm1",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm1,"status-icon":"",rules:e.rules1,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"手机",prop:"phone"}},[s("el-input",{model:{value:e.ruleForm1.phone,callback:function(r){e.$set(e.ruleForm1,"phone",r)},expression:"ruleForm1.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm1.pass,callback:function(r){e.$set(e.ruleForm1,"pass",r)},expression:"ruleForm1.pass"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm1")}}},[e._v("登陆")]),e._v(" "),s("el-button",{on:{click:function(r){e.resetForm("ruleForm1")}}},[e._v("重置")]),e._v(" "),s("span",{staticClass:"register fr",on:{click:function(r){e.regist()}}},[e._v(e._s(e.isLogin?"注册":"登陆"))])],1)],1),e._v(" "),s("el-form",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"用户名",prop:"name"}},[s("el-input",{model:{value:e.ruleForm2.name,callback:function(r){e.$set(e.ruleForm2,"name",r)},expression:"ruleForm2.name"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机",prop:"phone"}},[s("el-input",{model:{value:e.ruleForm2.phone,callback:function(r){e.$set(e.ruleForm2,"phone",r)},expression:"ruleForm2.phone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"pass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(r){e.$set(e.ruleForm2,"pass",r)},expression:"ruleForm2.pass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(r){e.$set(e.ruleForm2,"checkPass",r)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"年龄",prop:"age"}},[s("el-input",{model:{value:e.ruleForm2.age,callback:function(r){e.$set(e.ruleForm2,"age",r)},expression:"ruleForm2.age"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm2")}}},[e._v("注册")]),e._v(" "),s("el-button",{on:{click:function(r){e.resetForm("ruleForm2")}}},[e._v("重置")]),e._v(" "),s("span",{staticClass:"register fr",on:{click:function(r){e.regist()}}},[e._v(e._s(e.isLogin?"注册":"登陆"))])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("header",{staticClass:"login-header"},[r("div",{staticClass:"logo"},[this._v("小飞鱼设计")])])}]};var n=s("Z0/y")(a,i,!1,function(e){s("xwcg")},"data-v-4b295bbb",null);r.default=n.exports},xwcg:function(e,r){}});
//# sourceMappingURL=5.56c4dedaa4bd936db696.js.map
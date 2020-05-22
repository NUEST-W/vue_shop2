<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avater_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFromRef" :model="loginFrom" :rules="loginFromRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="loginFrom.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" prefix-icon="el-icon-s-goods" v-model="loginFrom.password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginFrom">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //这里是登录表单的数据绑定对象
      loginFrom: {
        username: "",
        password: ""
      },
      loginFromRules: {
        //   验证用户名是否合法
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
    //   重置表单
      resetLoginFrom(){
        //   console.log(this.loginFrom)
        this.$refs.loginFromRef.resetFields();
      },
      login(){
         this.$refs.loginFromRef.validate(async valid => {
             if(valid){
                // promise   返回类型  用await修饰成think方法
               const { data: res } = await this.$http.post("login", this.loginFrom)
               if(res.meta.status !== 200)return this.$message.error('登录失败')
                this.$message.success("登录成功")
                //1 登录成功后将token 保存到客户端的sessionStroage中
                window.sessionStorage.setItem("token",res.data.token)
                //2 tokenSession只能崽网站打开的期间有效
                
                //3 通过编译式导航跳转到后台的主页，路由地址是 /home
                this.$router.push('/home')
             }
         }) 
      }
  }
};
</script>
<style lang="less" scoped>
.login_container {
  height: 100%;
  background: #2b4b6b;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #ffffff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avater_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eeeeee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #dddddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #eeeeee;
  }
}
.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
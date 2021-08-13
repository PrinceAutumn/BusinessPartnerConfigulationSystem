<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<template>
<div class="login-container">
  <el-form>
    status-icon
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-page">
    <h3 class="title">系统登录</h3>
    <el-form-item  >
      <el-input type="text"

                placeholder="用户名"
                v-model="username"
      ></el-input>
    </el-form-item>
    <el-form-item >
      <el-input type="password"
                auto-complete="off"
                placeholder="密码"
                v-model="password"
      ></el-input>
    </el-form-item>
    <el-checkbox
      class="rememberme"
    >记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:40%;"
                 @click.prevent="handleLogin" >登录</el-button>//定义一个函数
      <el-button type="primary" @click="handleRegister" style="width:40%;"
      >注册</el-button>
    </el-form-item>
  </el-form>
  <!--    <router-view></router-view>-->
</div>
</template>
<script>
  export default {
    name: "Login",
    data(){
      return{
        username:'',
        password:'',

      }
    },
    methods:{
      handleLogin:function(){
        if (this.userName===‘’)
          alert('用户名不能为空')
      }
           if(this.password===''){
             alert("密码不为空")
  }
     if(this.userName！=''&&this.password !='')
  {
    //跳转到首页
    this.$rounter.replace(location
  :
    '/Home'
  )
    ;
  }
  }
</script>


<style scoped>
  .login-container {
    width: 100%;
    height: 100%;
  }
  .login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 20px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
  }
</body>
</html>

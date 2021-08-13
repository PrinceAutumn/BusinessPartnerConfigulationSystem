<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Homework</title>
  export default {
  name: 'App',
  }
  </head>
  data() {
  return {
  itemList: [],
  }
  },
  mounted() {
  this.getAjax();
  },
  methods:{
  getAjax:function () {
  var successCallback =  (response) => {
  console.log('服务器请求成功了')
  console.log(response.data)
  }
  var errorCallback =  (response) => {
  console.log('服务器请求出错了')
  }
  this.$http.get('api/seller').then(successCallback,errorCallback);
  },
  }
  }

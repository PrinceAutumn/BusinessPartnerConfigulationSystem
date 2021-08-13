<template>
  <div>

  </div>
<div>
  后台管理主页
</div id="left">
  左侧菜单
  用户管理
  系统管理
  <div>
    <div>
      <div id="main">
        <router-view></router-view>
      </div>
</template>
<script>
export default {
  name: 'AdminIndex.vue'
}
</script>

<style scoped>

</style>

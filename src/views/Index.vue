<template>
  <el-container>
    <el-aside style="width: 230px; position: fixed">
      <side-bar></side-bar>
    </el-aside>
    <el-container style="margin-left: 240px; ">
      <el-header style="height: 80px; margin-bottom: 10px; padding: 0px;">
        <header-bar></header-bar>
      </el-header>
      <el-main style="padding: 0px">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import SideBar from '../components/SideBar'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: 'Home',
    components: {
      SideBar,HeaderBar
    }
  }
</script>

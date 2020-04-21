<template>
    <el-container>
      <el-header class="header-con" style="height: 80px">
        <header-bar></header-bar>
      </el-header>
      <el-container>
        <el-aside style="width: 230px;">
          <side-bar></side-bar>
        </el-aside>
        <el-main style="padding: 0px; margin-left: 10px">
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
<style>
  .header-con {
    width: 1200px;
    height: 80px;
    margin-bottom: 10px;
    padding: 0px;
  }
</style>

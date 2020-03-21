<template>
  <div id="app">
    <el-container>
        <div class="container">
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-aside width="100%" class="siderbar">
                        <side-bar></side-bar>
                    </el-aside>
                </el-col>
                <el-col :span="19">
                    <el-main>
                        <router-view/>
                    </el-main>
                </el-col>
            </el-row>
        </div>
    </el-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar'

import {Container, Aside, Main, Row, Col} from 'element-ui'

export default {
  name: 'App',
  components: {
      'SideBar': SideBar,
      [Container.name]: Container,
      [Aside.name]: Aside,
      [Main.name]: Main,
      [Row.name]: Row,
      [Col.name]: Col
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  width: 100%;
  border-top: solid 3px #222;
  margin: auto;
  background-color: #f5f7f9;
}

a {
    color: #000;
    text-decoration: none;
}

.container {
    width: 1200px;
    min-height: 800px;
    text-align: center;
    margin: auto;
}
</style>

<template>
  <div id="app">
    <el-container>
        <div class="container">
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-card body-style="padding:0px">
                        <el-aside width="100%" class="siderbar">
                            <top-title></top-title>
                        </el-aside>
                    </el-card>
                    <el-card class="user-info-card">
                        <user-info></user-info>
                    </el-card>
                </el-col>
                <el-col :span="19">
                    <el-card>
                        <el-main>
                            <router-view/>
                        </el-main>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </el-container>
  </div>
</template>

<script>
import TopTitle from './components/TopTitle'
import UserInfo from './components/UserInfo'

import {Container, Aside, Main, Row, Col, Card} from 'element-ui'

export default {
  name: 'App',
  components: {
      'TopTitle': TopTitle,
      'UserInfo': UserInfo,
      [Container.name]: Container,
      [Aside.name]: Aside,
      [Main.name]: Main,
      [Row.name]: Row,
      [Col.name]: Col,
      [Card.name]: Card
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  border-top: solid 3px #222;
  margin: auto;
  background-color: #f5f7f9;
}

a {
    text-decoration: none;
}

.container {
    width: 1200px;
    height: 100%;
    text-align: center;
    margin: auto;
}

.siderbar {
    overflow: hidden;
}
.el-menu {
    border-right: none;
}
.user-info-card {
    margin-top: 10px;
}
</style>

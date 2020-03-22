<template>
  <div id="app" style="margin-top: 5px">
    <div class="container">
      <el-row :gutter="12" style="height: 850px">
        <el-col :span="5">
          <el-aside width="100%" class="siderbar">
            <side-bar></side-bar>
          </el-aside>
        </el-col>
        <el-col :span="19">
          <el-main style="padding: 0px 5px">
            <router-view/>
          </el-main>
        </el-col>
      </el-row>
    </div>
    <div class="footer mt50">
      <el-row>
        <el-col>
          <el-footer height="100px" style="line-height: 100px; padding: 0px;">
            <footer-content></footer-content>
          </el-footer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import SideBar from './components/SideBar'
    import FooterContent from './components/Footer'

    import {Container, Aside, Main, Footer, Row, Col} from 'element-ui'

    export default {
        name: 'App',
        components: {
            SideBar, FooterContent,
            [Container.name]: Container,
            [Aside.name]: Aside,
            [Footer.name]: Footer,
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
    height: 1000px;
    text-align: center;
    margin: auto;
    padding-top: 2px;
  }

  .footer {
    background-color: #222;
    color: #fff;
  }

  .mt50 {
    margin-top: 50px;
  }
</style>

<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <el-footer class="footer" height="100px" style="line-height: 100px; padding: 0px;">
      <footer-content></footer-content>
    </el-footer>
  </div>
</template>

<script>
  import FooterContent from './components/Footer'

  export default {
    name: 'App',
    components: {
      FooterContent,
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
    margin-top: 5px;
    background-color: #f5f7f9;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 1200px;
    margin: auto;
    padding-top: 3px;
    margin-bottom: 50px;
  }

  .footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: #222;
    color: #fff;
  }

  .mt50 {
    margin-top: 50px;
  }
</style>

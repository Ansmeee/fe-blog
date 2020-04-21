<template>
  <div id="app">
    <router-view class="container"></router-view>
<!--    <footer-content class="footer"></footer-content>-->
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
    font-size: 15px;
    width: 100%;
    background-color: #f5f7f9;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 1200px;
    margin: 0px auto 100px;
  }

  .footer {
    height: 100px;
    line-height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background-color: #222;
    color: #fff;
  }

  .mr20 {
    margin-right: 20px;
  }
  .mr50 {
    margin-right: 50px;
  }
</style>

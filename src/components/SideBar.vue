<template>
  <div class="sidebar">
    <el-card shadow="never">
      <div class="user-img">
        <img height="150px" width="150px" src="../assets/images/logo.png" style="cursor: pointer">
      </div>
      <p>
        <router-link :to="{ name: 'blogger' }"><b>{{ info.name }}</b></router-link>
      </p>

      <p style="font-size: 14px">{{ info.sign }}</p>
      <p class="user-blog">
        <span
          class="user-blog-outline"
          v-for="(blog, index) in info.blogs"
          :key="index">
          <span>{{ blog.name }}</span>
          <span>{{ blog.total }}</span>
        </span>
      </p>
      <div class="user-github">
        <a href="https://github.com/Ansmee" target="_blank">
          <img src="../assets/icons/github.svg" height="35px" width="35px">
        </a>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style>
  .sidebar {
    position: fixed;
    width: 230px;
  }
  .user-img {
    overflow: hidden;
    text-align: center;
    margin: 20px auto;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: 1px solid #ddd;
  }

  .user-blog {
    overflow: hidden;
    text-align: center;
    font-size: 14px;
  }

  .user-blog-outline {
    display: inline-block;
    margin: 0px 5px;
  }

  .toptitle {
    border: none;
    margin-bottom: 90px;
  }

  .bloger-title {
    color: #fff;
  }

  .user-github {
    margin-bottom: 20px;
  }
</style>

<template>
  <div class="sidebar">
    <el-card style="margin-bottom: 10px">
      <div class="user-img">
        <img height="150px" width="150px" src="../assets/images/logo.png" style="cursor: pointer">
      </div>
      <p><b>{{ info.name }}</b></p>

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

    <el-card>
      <div class="about-me">
        <div>技术栈</div>
        <div>Vue + Element</div>
        <div>Golang + Gin</div>
        <div>powered by {{ info.name }}</div>
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

  .user-github {
    margin-bottom: 10px;
  }

  .about-me {
    line-height: 20px;
    color: #8590a6;
    font-size: 13px;
  }
</style>

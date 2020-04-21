<template>
  <el-card shadow="never" class="search-con" body-style="padding:0px;">
    <div style="display: flex;">
      <div class="blog-author">
        <router-link class="bloger-title" :to="info.myHost" style="font-size: 16px">
          <b>{{ info.name }}'s Blog</b>
        </router-link>
      </div>

      <el-menu class="el-menu-demo search-con-menu" mode="horizontal" router>
        <el-menu-item
          style="height: 80px; line-height: 80px"
          v-for="menu, index in info.menus"
          :key="index"
          :index="menu.index">
          <i :class="menu.icon" style="font-size: 15px;"></i>
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </el-menu>

      <el-input
        class="search-con-input"
        placeholder="搜索你感兴趣的内容..."
        size="medium"
        @change="blogSearchValueChange"
        @keyup.enter.native="clickSearchBtn">
      </el-input>

    </div>

  </el-card>
</template>

<script>
  export default {
    name: "SearchBar",
    props: {
      info: {
        type: Object,
        default() {
          return {
            name: 'Ansme',
            myHost: '/',
            menus: [
              {
                icon: 'el-icon-document',
                title: '日志分享',
                index: '/blog'
              },
              {
                icon: 'el-icon-edit',
                title: '学习笔记',
                index: '/note'
              },
              {
                icon: 'el-icon-picture-outline',
                title: '摄影日记',
                index: '/photo'
              }
            ]
          }
        }
      }
    },
    data() {
      return {
      }
    },
    components: {}
  }
</script>

<style scoped>
  .search-con {
    height: 80px;
    width: 1198px;
    line-height: 80px;
    text-align: left;
    position: fixed;
  }

  .blog-author {
    width: 229px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    /*margin-right: 30px;*/
    background-color: #222;
    color: #fff;
  }

  .search-con-input {
    width: 400px;
    margin-left: 90px;
  }

  .search-con-menu {
  }
</style>
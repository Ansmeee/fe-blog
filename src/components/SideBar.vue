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
  import {Card, Menu, MenuItem} from 'element-ui'
  import homeApi from '../api/home'

  export default {
    name: 'SideBar',
    components: {
      [Card.name]: Card,
      [Menu.name]: Menu,
      [MenuItem.name]: MenuItem
    },
    data() {
      return {
        info: {
          name: 'Ansme',
          sign: '心之所向，素履以往',
          icon: './logo.png',
          myHost: '/',
          myGithubHost: 'https://github.com/Ansmee',
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
          ],
          blogs: [
            {
              name: '日志',
              total: 0
            },
            {
              name: '笔记',
              total: 0
            },
            {
              name: '摄影',
              total: 0
            }
          ]
        }
      }
    },
    mounted() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        homeApi.info().then(response => {
          if (response.code == 200) {
            this.info.blogs = response.data.blogs
          } else {
            this.$notify.error(response.msg)
          }
        }, error => {
        })
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

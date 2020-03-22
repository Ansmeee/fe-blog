<template>
  <div class="sidebar">
    <el-card class="toptitle" body-style="padding:0px">
      <div class="blog-author">
        <router-link class="bloger-title" :to="info.myHost" style="font-size: 16px"><b>{{ info.name }}'s Blog</b>
        </router-link>
      </div>
      <div class="side-bar">
        <el-menu class="el-menu-vertical-demo" router>
          <el-menu-item v-for="menu in info.menus" :key="menu.id" :index="menu.index">
            <i :class="menu.icon" style="font-size: 15px;"></i>
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-card>

    <el-card class="userinfo">
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
          <span>{{ blog.amount }}</span>
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
    import {Http} from '../api/http.js'

    import {Card, Menu, MenuItem} from 'element-ui'

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
                            amount: 0
                        },
                        {
                            name: '笔记',
                            amount: 0
                        },
                        {
                            name: '摄影',
                            amount: 0
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
                Http('GET', 'bloggerInfo').then(res => {
                    this.info = res.data.info
                })
            }
        }
    }
</script>

<style>
  .siderbar {
    overflow: hidden;
  }

  .el-menu {
    border-right: none;
  }

  .user-info-card {
    margin-top: 10px;
  }

  .user-img {
    overflow: hidden;
    text-align: center;
    margin: auto;
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
    margin-bottom: 15px;
  }

  .bloger-title {
    color: #fff;
  }

  .blog-author {
    height: 80px;
    line-height: 80px;
    background-color: #222;
    color: #fff;
  }
</style>

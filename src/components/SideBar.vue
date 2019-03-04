<template>
    <div class="sidebar">
        <el-card class="toptitle" body-style="padding:0px">
            <div class="blog-author">
                <b><a class="bloger-title" v-if="info.name" :href="info.myHost">{{ info.name }}'s Blog</a></b>
            </div>
            <div class="side-bar">
                <el-menu class="el-menu-vertical-demo">
                    <router-link v-for="menu in info.menus" :key="menu.id" :to="{ name: menu.url }">
                        <el-menu-item index="1">
                            <i :class="menu.icon"></i>
                            <span slot="title">{{ menu.title }}</span>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </div>
        </el-card>

        <el-card class="userinfo">
            <div class="user-img">
                <router-link :to="{ name: 'blogger' }">
                    <img height="150px" width="150px" :src="info.icon">
                </router-link>
            </div>
            <p><router-link :to="{ name: 'blogger' }"><b>{{ info.name }}</b></router-link></p>
            <div class="user-blog">
                <router-link v-for="blog in info.blogs" :key="blog.id" class="user-blog-outline" :to="{ name: blog.url }">
                    <span>{{ blog.title }}</span>
                    <span>{{ blog.total }}</span>
                </router-link>
            </div>
        </el-card>
    </div>
</template>

<script>
import { Http } from '../api/http.js'

import { Card, Menu, MenuItem } from 'element-ui'
export default {
    name: 'SideBar',
    components: {
        [ Card.name ]: Card,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem
    },
    data () {
        return {
            info: {}
        }
    },
    mounted () {
      this.getInfo()
    },
    methods: {
        getInfo () {
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
    display: block;
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

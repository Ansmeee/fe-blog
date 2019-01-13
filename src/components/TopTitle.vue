<template>
    <div class="toptitle">
        <div class="blog-author">
            <b><a class="bloger-title" :href="myHost">{{ myTitle }}</a></b>
        </div>
        <div class="side-bar">
            <el-menu class="el-menu-vertical-demo">
                <router-link v-for="menu in menus" :key="menu.id" :to="{ name: menu.url }">
                    <el-menu-item index="1">
                        <i :class="menu.icon"></i>
                        <span slot="title">{{ menu.title }}</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </div>
    </div>
</template>

<script>
import {Menu, MenuItem} from 'element-ui'
export default {
    name: 'TopTitle',
    components: {
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem
    },
    data () {
        return {
            myTitle: "Ansme's Blog",
            myHost: 'http://blog.ansmee.cn',
            menus: [
                {
                    title: '首页',
                    url: 'home',
                    icon: 'el-icon-menu'
                },
                {
                    title: '分类',
                    url: 'class',
                    icon: 'el-icon-document'
                }
            ]
        }
    }
}
</script>

<style>
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

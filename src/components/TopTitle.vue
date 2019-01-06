<template>
    <div class="toptitle">
        <div class="blog-author">
            <b>Ansme's blog</b>
        </div>
        <div class="side-bar">
            <el-menu class="el-menu-vertical-demo">
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">分类</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">归档</span>
              </el-menu-item>
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
    }
}
</script>

<style>
.blog-author {
    height: 80px;
    line-height: 80px;
    background-color: #222;
    color: #fff;
}
</style>

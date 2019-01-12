<template>
  <div class="home">
      <el-card v-for="blog in blogs.list" :key="blog.id" class="blog-card">
          <p class="home-blog-title">{{ blog.title }}</p>
          <p class="home-blog-info">
              <span><i class="iconfont icon-rili font-14"></i></span>
              <span>发表于</span>
              <span>{{ blog.date }}</span>
              <span class="home-blog-info-split">|</span>
              <span><i class="iconfont icon-liebiao font-14"></i></span>
              <span>分类与</span>
              <span>{{ blog.type }}</span>
          </p>
          <div class="home-blog-summary" v-html="blog.summary">
              <p><router-link :to="{ name: 'blog', params: { id: blog.id } }">
                  <el-button type="info" size="medium">阅读全文</el-button>
              </router-link></p>
          </div>
      </el-card>
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="5"
          :total="blogs.total">
      </el-pagination>
  </div>
</template>

<script>
import { Card, Button, Pagination } from 'element-ui'

export default {
   name: 'Home',
   components: {
       [Card.name]: Card,
       [Button.name]: Button,
       [Pagination.name]: Pagination
   },
   data () {
       return {
           blogs: {
               total: 15,
               list: [
                   {
                       id: 1,
                       title: "Docker基础：镜像、容器、仓库",
                       date: "2018-03-01",
                       type: "Docker",
                       summary: "<h3>什么是Docker</h3> </br> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docker 是一个 开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。<strong>”一次封装，到处运行“</strong> </p><p>解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。</p>"
                   },{
                       id: 2,
                       title: "Docker基础：镜像、容器、仓库",
                       date: "2018-03-01",
                       type: "Docker",
                       summary: "什么是Docker Docker 是一个 开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。”一次封装，到处运行“解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。"
                   },{
                       id: 3,
                       title: "Docker基础：镜像、容器、仓库",
                       date: "2018-03-01",
                       type: "Docker",
                       summary: "什么是Docker Docker 是一个 开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。”一次封装，到处运行“解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。"
                   },{
                       id: 4,
                       title: "Docker基础：镜像、容器、仓库",
                       date: "2018-03-01",
                       type: "Docker",
                       summary: "什么是Docker Docker 是一个 开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。”一次封装，到处运行“解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。"
                   }
               ]
           }
       }
   }
}
</script>

<style>
.home {
    color: #555;
    margin: 60px auto;
}

.blog-card {
    margin: 20px auto;
    padding-bottom: 100px;
}

.font-14 {
    font-size: 14px;
}
.home-blog-title {
    font-size: 20px;
    color: #555;
}

.home-blog-info {
    font-size: 14px;
    color: #969696;
}

.home-blog-info-split {
    margin: auto 5px;
}

.home-blog-summary {
    text-align: left;
    height: 200px;
    width: 100%;
    opacity: 1;
    display: block;
    transform: translateY(0px);
}
</style>

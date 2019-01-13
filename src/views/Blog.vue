<template>
  <div class="blog">
      <el-card class="blog-card">
          <p class="blog-title">{{ blog.title }}</p>
          <p class="blog-info">
              <span><i class="iconfont icon-rili font-14"></i></span>
              <span>发表于</span>
              <span>{{ blog.date }}</span>
              <span class="blog-info-split">|</span>
              <span><i class="iconfont icon-liebiao font-14"></i></span>
              <span>分类与</span>
              <span>{{ blog.type }}</span>
          </p>
          <div class="blog-content" v-html="blog.content">
          </div>
          <p class="blog-comment">
              <el-popover
                placement="top"
                width="50"
                trigger="hover"
                content="Thanks for your encouragement">
                <el-button class="blog-comment-button" slot="reference" type="success" circle><i class="iconfont icon-good"></i></el-button>
              </el-popover>
              <el-popover
                placement="top"
                width="50"
                trigger="hover"
                content="I will keep working hard">
                <el-button class="blog-comment-button" slot="reference" type="danger" circle><i class="iconfont icon-bad"></i></el-button>
              </el-popover>
          </p>
      </el-card>
  </div>
</template>

<script>
import { Card, Button, Popover } from 'element-ui'

export default {
    name: 'Blog',
    components: {
        [Card.name]: Card,
        [Button.name]: Button,
        [Popover.name]: Popover
    },
    data () {
        return {
            blog: {
                id: 1,
                title: "Docker基础：镜像、容器、仓库",
                date: "2018-03-01",
                type: "Docker",
                content: "<h3>什么是Docker</h3> </br> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docker 是一个 开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。</p> <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。<strong>”一次封装，到处运行“</strong> </p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决了运行环境和配置问题软件容器，方便做持续集成并有助于整体发布的容器虚拟化技术。</p>"
            }
        }
    }
}
</script>

<style>
.blog-card {
    margin-top: 60px;
}

.blog-title {
    font-size: 20px;
}

.blog-info {
    font-size: 14px;
    color: #969696;
}

.blog-info-split {
    margin: auto 5px;
}

.blog-content {
    text-align: left;
}

.blog-comment {
    margin: 40px auto 20px auto;
}

.blog-comment-button {
    margin: auto 50px;
}
</style>

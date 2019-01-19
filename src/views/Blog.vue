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

import { Http } from '../api/http.js'
export default {
    name: 'Blog',
    components: {
        [Card.name]: Card,
        [Button.name]: Button,
        [Popover.name]: Popover
    },
    data () {
        return {
            blog: {}
        }
    },
    mounted () {
        let id = this.$route.params.id
        let params = {"id": id}
        Http('GET', 'blog', params).then ( res => {
            if (res.data.code === 200) {
                this.blog = res.data.content.blog
            } else {
                
            }
        })
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

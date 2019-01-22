<template>
  <div v-if="this.blogs.total" class="home">
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
          </div>
          <p class="home-blog-more"><router-link :to="{ name: 'blog', params: { id: blog.id } }">
              <el-button type="info" size="medium">
                  <span>阅读全文</span>
                  <span><i class="iconfont icon-xia"></i></span>
              </el-button>
          </router-link></p>
      </el-card>
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="5"
          :total="blogs.total"
          @current-change="this.currentPageChange"
       >
      </el-pagination>
  </div>
  <err-page v-else></err-page>
</template>

<script>
import { Card, Button, Pagination,Message } from 'element-ui'
import { Http } from '../api/http.js'
import ErrPage from '../components/ErrPage'

export default {
   name: 'Home',
   components: {
       'ErrPage': ErrPage,
       [Card.name]: Card,
       [Button.name]: Button,
       [Pagination.name]: Pagination,
       [Message.name]: Message
   },
   data () {
       return {
           blogs: {
               total: 0,
               list: []
           }
       }
   },
   mounted () {
      this.getBlogs()
  },
  methods: {
      showMgs(msg = '', type = '') {
          Message({
              message: msg,
              type: type,
              center: true,
              showClose: true
          })
      },

      currentPageChange ( currentPage ) {
          this.getBlogs(currentPage)
      },

      getBlogs (start = 1) {
          let perpage = 10
          let params = {
              "start": start,
              "perpage": perpage
          }

          Http('GET', 'blogList', params).then(res => {
              if (res.data.code === 200) {
                  this.blogs.total = res.data.content.total
                  this.blogs.list  = res.data.content.list
              } else {
                  let msg = res.data.msg || '请求错误，请重试'
                  this.showMgs(msg, 'error')
              }
          })
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
    padding-bottom: 20px;
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
}

.home-blog-more {
    margin-top: 40px;
}
</style>

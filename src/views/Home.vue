<template>
  <div class="home" :v-loading="loading">
    <div v-if="this.blog.id" class="blog-card">
      <el-card style="height: 100%;">
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
      </el-card>
      <div class="pagination">
        <el-button size="mini" type="primary" :disabled="!blog.hasLast" style="margin-right: 100px">上一篇</el-button>
        <el-button size="mini" type="primary" :disabled="!blog.hasNext">下一篇</el-button>
      </div>
    </div>
    <div v-else class="blog-card">
      <err-page></err-page>
    </div>
  </div>

</template>

<script>
    import {Card, Button, Pagination, Message} from 'element-ui'
    import ErrPage from '../components/ErrPage'
    import LoadingPage from '../components/LoadingPage'

    import blogApi from '../api/blog'

    export default {
        name: 'Home',
        components: {
            'ErrPage': ErrPage,
            'LoadingPage': LoadingPage,
            [Card.name]: Card,
            [Button.name]: Button,
            [Pagination.name]: Pagination,
            [Message.name]: Message
        },
        data() {
            return {
                loading: true,
                blog: {
                    id: 1,
                    title: '',
                    date: '',
                    type: '',
                    summary: '',
                    hasLast: false,
                }
            }
        },
        mounted() {
            this.getBlog()
        },
        methods: {
            getBlog() {
                let params = {
                    recently: true
                }
                this.loading = true
                blogApi.latestBlog(params).then((success) => {
                    console.log(success)
                })
            }
        }
    }
</script>

<style>
  .home {
    color: #555;
    height: 950px;
  }

  .blog-card {
    height: 850px;
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

  .pagination {
    margin-top: 50px;
  }
</style>

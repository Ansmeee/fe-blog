<template>
  <div class="home" :v-loading="loading">
    <div v-if="this.blog.id" class="blog-card">
      <blog-page :blog="blog"></blog-page>
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
  import BlogPage from '../components/BlogPage'
  import ErrPage from '../components/ErrPage'
  import LoadingPage from '../components/LoadingPage'

  import blogApi from '../api/blog'
  export default {
    name: 'Home',
    components: {
      BlogPage,
      ErrPage,
      LoadingPage
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
        this.loading = true
        blogApi.latestBlog().then(response => {
          this.blog = response.data.blog
        }, error => {
        })
      }
    }
  }
</script>

<style>
  .home {
    color: #555;
  }

  .blog-card {
    padding-bottom: 20px;
  }

  .font-14 {
    font-size: 14px;
  }

  .home-blog-title {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    color: #555;
  }

  .home-blog-info {
    margin-bottom: 40px;
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

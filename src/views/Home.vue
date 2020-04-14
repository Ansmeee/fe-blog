<template>
  <div class="home">
    <div v-if="loading">
      <loading-page></loading-page>
    </div>
    <div v-else-if="blogs.length > 0" class="blog-card">
      <blog-page
        v-for="blog, index in blogs"
        :key="index"
        :blog="blog">
      </blog-page>
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
        loading: false,
        blogs: []
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.loading = true
        blogApi.blogList().then(response => {
          if (response.code == 200) {
            this.blogs = response.data.blogs
          } else {
            this.$notify.error(response.msg || "请求失败了，再试一次吧")
          }

          this.loading = false
        }, error => {
          this.$notify.error("网络好像出现了一点小问题")
        })
      }
    }
  }
</script>

<style>
  .home {
    color: #555;
  }
</style>

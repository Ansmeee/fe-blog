<template>
  <div class="home">
    <div v-if="loading">
      <loading-page></loading-page>
    </div>
    <div v-else-if="blogs.length > 0" class="blog-card">
      <el-card shadow="never" body-style="padding: 0px">
        <blog-piece
          v-for="blog, index in blogs"
          :key="index"
          :blog="blog"
          @click="viewBlog(blog)">
        </blog-piece>
      </el-card>
    </div>
    <div v-else class="blog-card">
      <err-page></err-page>
    </div>
  </div>

</template>

<script>
  import BlogPage from '../components/BlogPage'
  import BlogPiece from '../components/BlogPiece'
  import ErrPage from '../components/ErrPage'
  import LoadingPage from '../components/LoadingPage'

  export default {
    name: 'Home',
    components: {
      BlogPage,
      BlogPiece,
      ErrPage,
      LoadingPage
    },
    data() {
      return {
        loading: false,
        blogs: []
      }
    },
    methods: {
      viewBlog(blog) {
        console.log(blog)
      }
    }
  }
</script>

<style>
  .home {
    color: #555;
  }
</style>

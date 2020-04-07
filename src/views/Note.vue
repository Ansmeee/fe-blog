<template>
  <div class="class">
    <search-bar></search-bar>
    <el-card v-if="list.length" class="blog-list" shadow="never">
        <blog-piece
          class="blog-item"
          v-for="item, index in list"
          :key="index"
          :item="item">
        </blog-piece>
    </el-card>
    <div v-else class="blog-list">
      <err-page></err-page>
    </div>

  </div>
</template>

<script>
  import blogApi from '../api/blog'

  import SearchBar from '../components/SearchBar'
  import ErrPage from '../components/ErrPage'
  import LoadingPage from '../components/LoadingPage'
  import BlogPiece from '../components/BlogPiece'

  export default {
    name: 'Note',
    data() {
      return {
        list:[]
      }
    },
    methods: {
      loadData() {
        let params = {
          type: 'study'
        }
        blogApi.blogList(params).then(response => {
          if (response.code == 200) {
            this.list = response.data.blogs
          } else {
            this.$notify.error({
              title: '错误',
              message: response.msg || '请求失败了'
            })
          }
        })
      }
    },
    components: {
      SearchBar, ErrPage, LoadingPage,BlogPiece
    },
    created() {
      this.loadData()
    }
  }
</script>

<style>
  .class {
    min-height: 450px;
  }

  .blog-list {
    margin: 15px auto;
  }

  .blog-item {
    text-align: left;
    color: #969696;
  }
</style>

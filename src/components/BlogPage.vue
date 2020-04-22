<template>
  <el-card shadow="never" style="min-height: 533px;">
    <div>
      <el-button
        style="float: left"
        size="mini"
        @click="backToList">
        返回列表
      </el-button>
    </div>
    <div class="home-blog-title">{{ blog.title }}</div>
    <div class="home-blog-info">
      <span><i class="iconfont icon-rili font-14"></i></span>
      <span>发表于</span>
      <span>{{ blog.ctime }}</span>
      <span class="home-blog-info-split">|</span>
      <span><i class="iconfont icon-liebiao font-14"></i></span>
      <span>分类与</span>
      <span>{{ blog.class }}</span>
    </div>
    <mark-down :html="blog.content"></mark-down>
  </el-card>
</template>

<script>
  import MarkDown from '../components/MarkDown'

  export default {
    name: "BlogPage",
    props: {
      blogVisiable: {
        type: Boolean,
        default: true
      },
      lastBlog: {
        type: Object,
        default: function () {
          return {}
        }
      },
      nextBlog: {
        type: Object,
        default: function () {
          return {}
        }
      },
      currentBlog: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data() {
      return {
        blog: {},
        next: {},
        last: {}
      }
    },
    methods: {
      backToList() {
        this.$emit('update:blogVisiable', false)
      },

      goToNext() {

      }
    },
    created() {
      this.blog = this.currentBlog
      this.next = this.nextBlog
      this.last = this.lastBlog
    },
    components: {
      MarkDown
    },
  }
</script>

<style scoped>
  .home-blog-title {
    margin-top: 50px;
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
</style>
<template>
  <div class="blog-piece">
    <div style="font-size: 18px" @click="viewBlog">
      <b>{{ blog.title }}</b>
    </div>
    <div style="margin: 10px 0px; line-height: 25px">
      {{ blog.summary }}
    </div>
    <div style="display: flex; color: #969696;">
      <el-button type="text" class="mr20" style="color: #969696;">
        <span><i class="iconfont icon-message_fill icon"></i></span>
        <span>评论</span>
      </el-button>
      <el-button type="text" class="mr50" style="color: #969696;">
        <span><i class="iconfont icon-like_fill icon"></i></span>
        <span>喜欢</span>
      </el-button>
      <div type="text" class="mr50 h-l-40">
        <span><i class="iconfont icon-liebiao icon"></i></span>
        <span>{{ blog.class }}</span>
      </div>
      <div type="text" class="h-l-40">
        <span><i class="iconfont icon-rili icon"></i></span>
        <span>{{ blog.ctime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogPiece",
    props: {
      blog: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      viewBlog() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  .blog-piece {
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid #f0f2f7;
    cursor: pointer;
  }
  .icon {
    font-size: 15px;
  }
  .h-l-40 {
    height: 40px;
    line-height: 40px;
  }
</style>
<template>
  <el-card shadow="never" class="search-content" body-style="padding:0px">
    <el-input
      class="blog-search-input"
      placeholder="输入你感兴趣的内容搜索"
      size="medium"
      @change="blogSearchValueChange"
      @keyup.enter.native="clickSearchBtn">
    </el-input>
  </el-card>
</template>

<script>
  export default {
    name: "SearchBar",
    components: {}
  }
</script>

<style scoped>
.search-content {
  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 0px 20px;
  margin-bottom: 15px;
}
</style>
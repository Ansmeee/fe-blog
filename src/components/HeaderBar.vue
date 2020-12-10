<template>
  <el-card class="search-con" body-style="padding:0px;">
    <div style="display: flex;">
      <div class="blog-author" @click="goHome">
        <router-link class="bloger-title" :to="info.myHost" style="font-size: 16px">
          <b>{{ info.name }}'s Blog</b>
        </router-link>
      </div>

      <el-menu class="el-menu-demo search-con-menu" mode="horizontal" router @select="menuChange">
        <el-menu-item
          style="height: 70px; line-height: 70px"
          v-for="menu, index in info.menus"
          :key="index"
          :index="menu.index">
          <i :class="menu.icon" style="font-size: 15px;"></i>
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </el-menu>

      <el-input
        suffix-icon="el-icon-search"
        class="search-con-input"
        placeholder="搜索你感兴趣的内容..."
        size="medium"
        v-model="keywords"
        @change="searchValueChange">

      </el-input>

    </div>

  </el-card>
</template>

<script>
  export default {
    name: "SearchBar",
    props: {
      info: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        keywords: ''
      }
    },
    methods: {
      goHome() {
        this.$emit('update:type', '')
        this.$emit('change')
      },

      menuChange(val) {
        this.$emit('update:type', val)
        this.$emit('change')
      },

      searchValueChange() {
        this.$emit('update:keywords', this.keywords)
        this.$emit('change')
      }
    },
    components: {}
  }
</script>

<style scoped>
  .search-con {
    height: 70px;
    width: 1198px;
    line-height: 70px;
    text-align: left;
    position: fixed;
    z-index: 20000;
  }

  .bloger-title {
    color: #fff;
  }

  .blog-author {
    width: 229px;
    height: 70px;
    text-align: center;
    line-height: 70px;
    margin-right: 10px;
    background-color: #222;
    color: #fff;
  }

  .search-con-input {
    width: 400px;
    margin-left: 150px;
  }

  .search-con-menu {
  }
</style>
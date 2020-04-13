<template>
  <div class="home">
    <el-aside style="width: 230px; position: fixed">
      <side-bar></side-bar>
    </el-aside>
    <el-main style="margin-left: 245px; padding: 0px">
      <router-view></router-view>
    </el-main>
  </div>

</template>

<script>
  import SideBar from '../components/SideBar'
  import blogApi from '../api/blog'

  export default {
    name: 'Home',
    components: {
      SideBar
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
</style>

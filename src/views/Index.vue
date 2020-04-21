<template>
    <el-container>
      <el-header class="header-con" style="height: 70px">
        <header-bar
          :info="info"
          :path.sync="filterForm.path"
          :keywords.sync="filterForm.keywords"
          @change="loadData">
        </header-bar>
      </el-header>
      <el-container>
        <el-aside style="width: 230px;">
          <side-bar :info="info"></side-bar>
        </el-aside>
        <el-main style="padding: 0px; margin-left: 10px">
          <router-view></router-view>
        </el-main>
      </el-container>

    </el-container>
</template>

<script>
  import homeApi from '../api/home'

  import SideBar from '../components/SideBar'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: 'Home',
    data() {
      return {
        filterForm: {
          keywords: '',
          path: ''
        },
        info: {
          name: 'Ansme',
          sign: '心之所向，素履以往',
          icon: './logo.png',
          myHost: '/',
          myGithubHost: 'https://github.com/Ansmee',
          menus: [
            {
              icon: 'el-icon-document',
              title: '日志分享',
              index: 'blog'
            },
            {
              icon: 'el-icon-edit',
              title: '学习笔记',
              index: 'note'
            },
            {
              icon: 'el-icon-picture-outline',
              title: '摄影日记',
              index: 'photo'
            }
          ],
          blogs: [
            {
              name: '日志',
              total: 0
            },
            {
              name: '笔记',
              total: 0
            },
            {
              name: '摄影',
              total: 0
            }
          ]
        }
      }
    },
    methods: {
      loadData() {
      },

      loadInfo() {
        homeApi.info().then(response => {
          if (response.code == 200) {
            this.info.blogs = response.data.blogs
          } else {
            this.$notify.error(response.msg || '请求失败了，请再试一次')
          }
        }, error => {
        })
      }
    },
    components: {
      SideBar,HeaderBar
    },
    created() {
      this.loadInfo()
    }
  }
</script>
<style>
  .header-con {
    width: 1200px;
    height: 80px;
    margin-bottom: 10px;
    padding: 0px;
  }
</style>

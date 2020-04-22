<template>
  <el-container>
    <el-header class="header-con" style="height: 70px">
      <header-bar
        :info="info"
        :type.sync="filterForm.type"
        :keywords.sync="filterForm.keywords"
        @change="filterFormChange">
      </header-bar>
    </el-header>
    <el-container>
      <el-aside style="width: 230px;">
        <side-bar :info="info"></side-bar>
      </el-aside>
      <el-main style="padding: 0px; margin-left: 10px; margin-bottom: 200px;">
        <div class="blog-con" v-if="showBlogCon">
          <div v-if="loading">
            <loading-page></loading-page>
          </div>
          <div v-else>
            <blog-page
              :current-blog.sync="blog"
              :next-blog.sync="nextBlog"
              :last-blog.sync="lastBlog"
              :blog-visiable.sync="showBlogCon">
            </blog-page>
          </div>
        </div>
        <div class="list-con" v-else>
          <div v-if="loading">
            <loading-page></loading-page>
          </div>
          <div v-else-if="blogs.length > 0" class="blog-card">
            <el-card shadow="never" body-style="padding: 0px">
              <blog-piece
                v-for="blog, index in blogs"
                :key="index"
                :blog="blog"
                @click="viewBlog(blog.id, index)">
              </blog-piece>
            </el-card>
          </div>
          <div v-else class="blog-card">
            <err-page></err-page>
          </div>
        </div>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
  import homeApi from '../api/home'
  import blogApi from '../api/blog'

  import BlogPage from '../components/BlogPage'
  import BlogPiece from '../components/BlogPiece'
  import ErrPage from '../components/ErrPage'
  import LoadingPage from '../components/LoadingPage'
  import SideBar from '../components/SideBar'
  import HeaderBar from '../components/HeaderBar'

  export default {
    name: 'Home',
    data() {
      return {
        showBlogCon: false,
        loading: false,
        filterForm: {
          keywords: '',
          type: ''
        },
        nextBlog: {},
        lastBlog: {},
        blog: {},
        blogs: [],
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
      viewBlog(id, index) {
        this.showBlogCon = true

        let lastIndex = index - 1
        let nextIndex = index + 1

        this.lastBlog = this.blogs[lastIndex]
        this.nextBlog = this.blogs[nextIndex]

        this.loadBlog(id)
      },

      loadBlog(id) {
        this.loading = true
        blogApi.blogDetail({id: id}).then(response => {
          if (response.code == 200) {
            this.blog = response.data.blog
          } else {
            this.$notify.error(response.msg || "请求失败了，再试一次吧")
          }
          this.loading = false
        }, error => {
          this.$notify.error("网络好像出现了一点小问题")
        })
      },

      filterFormChange() {
        this.showBlogCon = false
        this.loadData()
      },

      loadData() {
        this.loading = true

        let params = this.filterForm
        blogApi.blogList(params).then(response => {
          if (response.code == 200) {
            this.blogs = response.data.blogs
          } else {
            this.$notify.error(response.msg || "请求失败了，再试一次吧")
          }

          this.loading = false
        }, error => {
          this.$notify.error("网络好像出现了一点小问题")
        })
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
      BlogPage, BlogPiece,
      ErrPage, LoadingPage,
      SideBar, HeaderBar
    },
    created() {
      this.loadInfo()
      this.loadData()
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

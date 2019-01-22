<template>
  <div v-if="this.blogs.total" class="class">
      <el-card class="blog-search-bar">
          <el-input
            class="blog-search-input"
            placeholder="请输入内容"
            size="medium"
            @change="blogSearchValueChange"
            @keyup.enter.native="clickSearchBtn"
          >
          </el-input>
          <el-button
            type="primary"
            size="medium"
            native-type="submit"
            class="blog-search-btn"
            @click="clickSearchBtn"
            >
            <i class="iconfont icon-sousuo"></i>
          </el-button>
      </el-card>
      <el-card class="blog-list">
          <p class="blog-item" v-for="blog in blogs.list" :key="blog.id">
              <router-link :to="{ name: 'blog', params: { id: blog.id } }">
                  {{ blog.title }}
              </router-link>
          </p>
      </el-card>
      <el-pagination
          background
          layout="prev, pager, next"
          :page-size="5"
          :total="blogs.total"
          @current-change="this.currentPageChange">
      </el-pagination>
  </div>
  <err-page v-else></err-page>
</template>

<script>
import { Card, Menu, MenuItem, Pagination, Input, Button } from 'element-ui'

import { Http } from '../api/http.js'
import ErrPage from '../components/ErrPage'
export default {
    name: 'Class',
    components: {
        'ErrPage': ErrPage,
        [Card.name]: Card,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Pagination.name]: Pagination,
        [Input.name]: Input,
        [Button.name]: Button
    },
    data () {
        return {
            blogSearchValue: '',
            blogs: {
                total: 0,
                list: []
            }
        }
    },
    mounted () {
        this.getClassList()
    },
    methods: {
        blogSearchValueChange ( searchInputValue ) {
            this.blogSearchValue = searchInputValue
        },

        clickSearchBtn () {
            let keywords =  this.blogSearchValue
            this.getClassList(keywords)
        },

        currentPageChange ( currentPage ) {
            let keywords = this.blogSearchValue
            this.getClassList(keywords, currentPage)
        },

        getClassList(keywords = '', start = 1) {
            let perpage = 10
            let params = {
                'keywords': keywords,
                'start': start,
                'perpage': perpage
            }
            Http('GET', 'classList', params).then( res => {
                this.blogs.total = res.data.content.total
                this.blogs.list  = res.data.content.list
            })
        }
    }
}
</script>

<style >
.class {
    min-height: 450px;
}
.blog-search-bar {
    text-align: left;
}
.blog-search-input {
    width: 300px;
}
.blog-search-btn {
    margin-left: 20px;
}

.blog-list {
    margin: 20px auto;
}
.blog-item {
    text-align: left;
    color: #969696;
}
</style>

<template>
  <div class="class">
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
      <div v-if="this.blogs.total" class="blog-list">
        <el-card>
            <p class="blog-item" v-for="blog in blogs.list" :key="blog.id">
                <router-link :to="{ name: 'blog', params: { id: blog.id } }">
                    {{ blog.title }}
                </router-link>
            </p>
        </el-card>
        <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :page-size="5"
            :total="blogs.total"
            @current-change="this.currentPageChange">
        </el-pagination>
      </div>
      <div v-else-if="this.blogs.total == 0" class="blog-list">
        <err-page ></err-page>
      </div>
      <div v-else class="blog-list">
        <loading-page ></loading-page>
      </div>
  </div>
</template>

<script>
import { Card, Menu, MenuItem, Pagination, Input, Button } from 'element-ui'

import { Http } from '../api/http.js'
import ErrPage from '../components/ErrPage'
import LoadingPage from '../components/LoadingPage'
export default {
    name: 'Class',
    components: {
        'ErrPage': ErrPage,
        'LoadingPage': LoadingPage,
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
            blogs: {}
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
                this.blogs = res.data.content
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
.pagination {
    margin-top: 20px;
}
</style>

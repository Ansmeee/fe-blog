<template>
  <div class="class">
      <el-card class="blog-search-bar">
          <el-input
            class="blog-search-input"
            placeholder="请输入内容"
            size="medium"
          >
              <el-button class="blog-search-btn" slot="append"><i class="iconfont icon-sousuo blog-search-icon"></i></el-button>
          </el-input>
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
          :total="blogs.total">
      </el-pagination>
  </div>
</template>

<script>
import { Card, Menu, MenuItem, Pagination, Input } from 'element-ui'

export default {
    name: 'Class',
    components: {
        [Card.name]: Card,
        [Menu.name]: Menu,
        [MenuItem.name]: MenuItem,
        [Pagination.name]: Pagination,
        [Input.name]: Input
    },
    data () {
        return {
            activeIndex: 1,
            types: [
                {
                    id: 1,
                    name: 'nginx'
                },
                {
                    id: 2,
                    name: 'mysql'
                },
                {
                    id: 3,
                    name: 'php'
                },
                {
                    id: 4,
                    name: 'redis'
                }
            ],
            blogs: {
                total: 5,
                list: [
                    {
                        id: 1,
                        title: "docker 容器的使用"
                    },
                    {
                        id: 2,
                        title: "mysql 优化三步骤"
                    },
                    {
                        id: 3,
                        title: "Nginx 之反向代理"
                    }
                ]
            }
        }
    }
}
</script>

<style >
.blog-search-bar {
    text-align: left;
}
.blog-search-input {
    width: 300px;
}
.blog-search-btn {
    cursor: pointer;
    line-height: 33px;
}
.blog-search-icon {
    display: inline-block;
    height: 34px;
    width: 50px;
    text-align: center;
    margin: auto -20px;
}
.blog-list {
    margin: 20px auto;
}
.blog-item {
    text-align: left;
    color: #969696;
}
</style>

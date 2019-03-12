<template>
  <div v-if="this.blog" class="blog">
      <el-card class="blog-card">
          <p class="blog-title">{{ blog.title }}</p>
          <p class="blog-info">
              <span><i class="iconfont icon-rili font-14"></i></span>
              <span>发表于</span>
              <span>{{ blog.date }}</span>
              <span class="blog-info-split">|</span>
              <span><i class="iconfont icon-liebiao font-14"></i></span>
              <span>分类与</span>
              <span>{{ blog.type }}</span>
          </p>
          <div class="blog-content" v-html="blog.content">
          </div>
          <p class="blog-comment">
              <el-button
                class="blog-comment-button"
                type="success"
                circle
                @click="encourage()"
              >
                <i class="iconfont icon-good"></i>
              </el-button>
              <el-button
                class="blog-comment-button"
                type="danger"
                circle
                @click="workHard()"
              >
                <i class="iconfont icon-bad"></i>
              </el-button>
          </p>
      </el-card>
  </div>
  <err-page v-else></err-page>
</template>

<script>
import { Card, Button, Popover, Message } from 'element-ui'

import { Http } from '../api/http.js'
import ErrPage from '../components/ErrPage'
export default {
    name: 'Blog',
    components: {
        'ErrPage': ErrPage,
        [Card.name]: Card,
        [Button.name]: Button,
        [Popover.name]: Popover,
        [Message.name]: Message
    },
    data () {
        return {
            blog: {}
        }
    },
    methods: {
        encourage () {
            let id = this.$route.params.id
            let params = {"id": id}
            Http('PUT', 'like', params).then ( res => {
                if(res.data.code == 200) {
                    let msg = 'Thanks for your encouragement'
                    this.showMgs(msg, 'success')
                } else {
                    let msg = res.data.msg || '请求错误，请重试'
                    this.showMgs(msg, 'error')
                }
            })
        },

        workHard() {
            let id = this.$route.params.id
            let params = {"id": id}
            Http('PUT', 'dislike', params).then ( res => {
                if(res.data.code == 200) {
                    let msg = 'I will keep working hard'
                    this.showMgs(msg, 'success')
                } else {
                    let msg = res.data.msg || '请求错误，请重试'
                    this.showMgs(msg, 'error')
                }
            })
           
        },

        showMgs(msg = '', type = '') {
            Message({
                message: msg,
                type: type,
                center: true,
                showClose: true
            })
        }
    },
    mounted () {
        let id = this.$route.params.id
        let params = {"id": id}
        Http('GET', 'blog', params).then ( res => {
            if (res.data.code === 200) {
                this.blog = res.data.blog
                console.log(res.data.blog)
            } else {
                let msg = res.data.msg || '请求错误，请重试'
                this.showMgs(msg, 'error')
            }
        })
    }
}
</script>

<style>
.blog-card {
    margin-top: 60px;
}

.blog-title {
    font-size: 20px;
}

.blog-info {
    font-size: 14px;
    color: #969696;
}

.blog-info-split {
    margin: auto 5px;
}

.blog-content {
    text-align: left;
}

.blog-comment {
    margin: 40px auto 20px auto;
}

.blog-comment-button {
    margin: auto 50px;
}
</style>

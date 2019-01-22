<template>
  <div v-if="this.blogger.id" class="blogger">
      <el-card class="blogger-info">
          <p class="blogger-name"><b>{{ blogger.name }}</b><span></span></p>
          <p class="text-left entry-name">
              <span>个人介绍</span>
          </p>
          <div class="text-left">
              {{ blogger.motto }}
          </div>
          <p class="text-left entry-name">
              <span>兴趣爱好</span>
          </p>
          <div class="text-left">
              {{ blogger.hobby }}
          </div>
      </el-card>
      <el-card class="blogger-trips">
          <p class="text-left entry-name">我的足迹</p>
          <el-row class="blogger-trip" v-for="trip in blogger.trips" :key="trip.id">
              <el-col :span="9">
                  <div class="trip-img">
                      <img width="300px" height="200px" :src="trip.img">
                  </div>
              </el-col>
              <el-col :span="15">
                  <div class="trip-title">{{ trip.title }}</div>
                  <div class="trip-summary">
                      <span class="trip-date">
                          <span><i class="iconfont icon-rili font-14"></i></span>
                          <span>{{ trip.date }}</span>
                      </span>
                      <span class="trip-location">
                          <span><i class="iconfont icon-dingwei font-14"></i></span>
                          <span>{{ trip.location }}</span>
                      </span>
                  </div>
                  <div class="trip-content">{{ trip.content }}</div>
              </el-col>
          </el-row>
      </el-card>
  </div>
  <err-page v-else></err-page>
</template>

<script>
import { Card, Row, Col } from 'element-ui';

import { Http } from '../api/http.js'
import ErrPage from '../components/ErrPage'
export default {
    name: 'Blogger',
    components: {
        'ErrPage': ErrPage,
        [Card.name]: Card,
        [Row.name]: Row,
        [Col.name]: Col
    },
    data () {
        return {
            blogger: {}
        }
    },
    mounted () {
        Http('GET', 'blogger').then(res => {
            if (res.data.code === 200) {
                this.blogger = res.data.content
            } else {
                let msg = res.data.msg || '请求错误，请重试'
                this.showMgs(msg, 'error')
            }
        })
    },
    methods: {
        showMgs(msg = '', type = '') {
            Message({
                message: msg,
                type: type,
                center: true,
                showClose: true
            })
        }
    }
}
</script>

<style scoped>
.blogger-name {
    text-align: left;
    font-size: 24px;
}

.text-left {
    text-align: left;
}

.entry-name {
    color: #969696;
}

.blogger-trips {
    margin-top: 10px;
}

.blogger-trip {
    margin: 20px auto;
}

.trip-img {
    width: 300px;
    height: 200px;
    overflow: hidden;
}

.trip-title {
    text-align: left;
    margin: 10px auto;
    font-size: 20px;
}

.trip-summary {
    text-align: left;
    font-size: 14px;
    color: #969696;
    margin: 10px auto;
}

.trip-location {
    display: inline-block;
    margin-left: 15px;
}

.trip-content {
    text-align: left;
}

.font-14 {
    font-size: 14px;
}
</style>

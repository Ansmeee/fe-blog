<template>
  <div class="blogger">
      <el-card class="blogger-info">
          <p class="blogger-name"><b>{{ user.name }}</b><span></span></p>
          <p class="text-left entry-name">
              <span>个人介绍</span>
          </p>
          <div class="text-left">
              {{ user.motto }}
          </div>
          <p class="text-left entry-name">
              <span>兴趣爱好</span>
          </p>
          <div class="text-left">
              {{ user.hobby }}
          </div>
      </el-card>
      <el-card class="blogger-trips">
          <p class="text-left entry-name">我的足迹</p>
          <el-row class="blogger-trip" v-for="trip in user.trips" :key="trip.id">
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
</template>

<script>
import { Card, Row, Col } from 'element-ui';
export default {
    name: 'Blogger',
    components: {
        [Card.name]: Card,
        [Row.name]: Row,
        [Col.name]: Col
    },
    data () {
        return {
            user: {
                name: 'Ansme',
                motto: '人生短暂，别留遗憾',
                hobby: '热爱编程，喜欢旅游，喜欢摄影，喜欢享受生命中精彩的每个瞬间',
                trips: [
                    {
                        id: 1,
                        img: "https://upload-images.jianshu.io/upload_images/10524315-ee17d07390c435b7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000",
                        title: "灯光下的小单车",
                        date: "2018-12-06",
                        location: "天津",
                        content: "灯光下的小单车。。。"
                    },
                    {
                        id: 2,
                        img: "https://upload-images.jianshu.io/upload_images/10524315-7d61823092297748.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000",
                        title: "生活不止眼前的苟且",
                        date: "20180-11-18",
                        location: "天津",
                        content: "生活不止眼前的苟且，还有随手一拍的惊喜"
                    }
                ]
            }
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

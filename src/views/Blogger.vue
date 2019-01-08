<template>
  <div class="blogger">
      <el-card class="blogger-info">
          <p class="blogger-name"><b>{{ user.name }}</b><span></span></p>
          <p class="blogger-info-text-left entry-name">个人介绍</p>
          <div class="blogger-info-text-left">
              {{ user.motto }}
          </div>
          <p class="blogger-info-text-left entry-name">兴趣爱好</p>
          <div class="blogger-info-text-left">
              {{ user.hobby }}
          </div>
          <p class="blogger-info-text-left entry-name">我的足迹</p>
          <div class="blogger-info-text-left">
              {{ user.trips }}
          </div>
      </el-card>
  </div>
</template>

<script>
import { Card } from 'element-ui';
export default {
    name: 'Blogger',
    components: {
        [Card.name]: Card
    },
    data () {
        return {
            user: {
                name: 'Ansme',
                motto: '人生短暂，别留遗憾',
                hobby: '热爱编程，喜欢旅游，喜欢摄影，喜欢享受生命中精彩的每个瞬间',
                trips: '我的足迹'
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

.blogger-info-text-left {
    text-align: left;
}

.entry-name {
    color: #969696;
}
</style>

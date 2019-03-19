<template>
    <el-card class="loading-page">Loading . . .</el-card>
</template>

<script>
import { Card } from 'element-ui'
export default {
    name: 'LoadingPage',
    components: {
        [Card.name]: Card
    }
}
</script>

<style scoped>
.loading-page {
    min-height: 300px;
    line-height: 300px;
    font-size: 25px;
    color: #969696;
}
</style>

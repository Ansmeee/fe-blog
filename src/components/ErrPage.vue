<template>
    <el-card class="err-page">Loading . . .</el-card>
</template>

<script>
import { Card } from 'element-ui'
export default {
    name: 'ErrPage',
    components: {
        [Card.name]: Card
    }
}
</script>

<style scoped>
.err-page {
    min-height: 300px;
    line-height: 300px;
    font-size: 25px;
    color: #969696;
}
</style>

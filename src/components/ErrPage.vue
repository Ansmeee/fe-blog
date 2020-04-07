<template>
    <el-card class="err-page" shadow="never">Nothing . . .</el-card>
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
    height: 535px;
    line-height: 535px;
    font-size: 25px;
    color: #969696;
}
</style>

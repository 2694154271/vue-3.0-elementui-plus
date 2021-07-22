<template>
    <el-card class="card">one首页</el-card>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.card {
    /* 这里可以这样使用  也可以不加这行样式， 不加这行样式就是自动撑开，后续不会在card 上有滚动条
     * 滚动条就存在最右边的位置
     */
    height: calc(100vh - 116px);
}
</style>
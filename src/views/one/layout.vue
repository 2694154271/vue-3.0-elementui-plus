<template>
    <div class="wrap">
        <leftNav class="left" />
        <div class="content">
            <Crumbs />
            <router-view />
        </div>
    </div>
</template>

<script>
import leftNav from './components/leftNav.vue'
import  Crumbs from '@/components/Crumbs'
export default {
    components: { leftNav, Crumbs },
    setup() {
        
    },
}
</script>

<style scoped>
.wrap {
    display: flex;
    
}
.left {
    width: 200px;
}
.content {
    width: 100%;
    height: calc(100vh - 104px);
    background-color: #f5f5f5;
    padding: 20px;

}
</style>

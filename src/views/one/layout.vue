<template>
    <div class="wrap">
        <leftNav class="left" />
        <div>
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
</style>

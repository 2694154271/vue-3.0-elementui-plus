<template>
    <div class="app-wrapper">
        <div class="main-container">
            <div class="nav">
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>

<script>
import navbar from './components/navbar.vue'
import appMain from './components/appMain.vue'
export default {
    components: { navbar, appMain },
    setup() {
        
    },
}
</script>

<style scoped>
.app-wrapper {
    margin: 0;
    padding: 0;
    position: relative;
    height: 100%;
    width: 100%;
}
.nav {
    height: 56px;
}
</style>

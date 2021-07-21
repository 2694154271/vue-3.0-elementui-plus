<template>
    <section class="app-main page-bg">
        <div style="overflow-y: auto; height: 100%;">
            <transition name="fade-transform" mode="out-in">
                <router-view :key="key" />
            </transition>
        </div>
  </section>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>

</style>
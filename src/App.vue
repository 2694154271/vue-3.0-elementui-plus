<template>    
    <div id="app">
        <router-view></router-view>
        <!-- 下面的是缓存 可以选择缓存 使用上include -->
        <!-- <keep-alive>
            <router-view></router-view>
        </keep-alive> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  width: 50%;
}
.btn {
  margin-top: 100px;
}
</style>

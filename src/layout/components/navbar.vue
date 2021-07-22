<template>
    <div class="navbar">
        <div class="home" @click="toDashboard">本项目</div>
        <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            active-text-color="#f00"
            text-color="#333">
            <el-menu-item index="1" @click="tonav('1')">1</el-menu-item>
            <el-menu-item index="2" @click="tonav('2')">2</el-menu-item>
            <el-menu-item index="3" @click="tonav('3')">3</el-menu-item>
            <el-menu-item index="4" @click="tonav('4')">4</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
export default {
    data() {
      return {
        activeIndex: '0',
      };
    },
    setup() {
        const router = useRouter();
        const toDashboard = () => {
            router.push("/dashboard");
        }
        const tonav = (val) => {
            const obj = {
                '1': '/one',
                '2': '/two',
                '3': '/three',
                '4': '/four'
            }
            router.push(obj[val]);
        }
        return{
            toDashboard,
            tonav
        }
    },
}
</script>

<style scoped>
.navbar {
    display: flex;
}
.home {
    width: 200px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
}
</style>

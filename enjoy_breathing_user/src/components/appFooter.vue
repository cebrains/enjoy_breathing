<template>
    <div class="footer">
        <div class="footer-item" :class="{active: currentPath==='homePage'}" @click="handleClick('/homePage')">
            <img class="icon"  :src="currentPath==='homePage' ? require('@/assets/images/home.png') : require('@/assets/images/home.png')" alt="">
            <span>首页</span>
        </div>
        <div class="footer-item" :class="{active: currentPath==='inquiry'}" @click="handleClick('/inquiry')">
            <img class="icon" alt="" :src="currentPath==='inquiry' ? require('@/assets/images/inquiry1.png') : require('@/assets/images/inquiry.png')" >
            <span>问诊</span>
        </div>
        <div class="footer-item" :class="{active: currentPath==='mine'}" @click="handleClick('/mine')">
            <img class="icon" alt="" :src="currentPath==='mine' ? require('@/assets/images/personage1.png') : require('@/assets/images/personage.png')">
            <span>我的</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-footer',
    computed: {
        currentPath() {
            const arr = this.$route.path.split('/').filter(item => {
                return item;
            })
            return arr[0];
        }
    },
    methods: {
        handleClick(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss">


</style>


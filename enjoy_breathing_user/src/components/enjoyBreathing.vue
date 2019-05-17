<template>
    <div class="user-page">
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPath: '',
        }
    },
    created() {
        this.currentPath = this.$route.fullPath.split('/')[1];
    }
}
</script>

<style lang="scss">
.user-page {
    height: 100vh;
    .container {
        height: calc(100vh - 3.5rem);
        overflow: auto;
    }
}
.top-bar {
    position: relative;
    height: 3rem;
    line-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: .4rem;
    .text-btn {
        position: absolute;
        right: 1rem;
        font-size: .8rem;
    }
}
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3.1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: .2rem;
    box-shadow: 1px 0px 2px 0 rgba(201, 201, 201, 0.65);
    background: #fff;
    .footer-item {
        flex: 1;
        height: 3.1rem;
        font-size: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        span {
            line-height: 1;
        }
        .icon {
            width: 1.4rem;
        }
        &.active {
            color: #90b5ff;
        }
        &.disabled {
            cursor: not-allowed;
            color: #aaa;
        }
    }
}
</style>


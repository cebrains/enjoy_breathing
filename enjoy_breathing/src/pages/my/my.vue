<template>
    <div class="my">
        <div class="header">
            <div class="flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="info">
                    <div class="flex space-between">
                        <p>
                            <span class="user-name">李小小</span>
                            <span class="position">护士</span>
                        </p>
                        <p>学分： 20</p>
                    </div>
                    <p class="hospital">北京大学第一附属医院</p>
                </div>
            </div>
            <div class="wallet flex space-around" @click="$router.push('personalAccounts')">
                <div class="flex flex-column my-wallet">
                    <img class="icon" src="@/assets/images/wallet.png" alt="">
                    <p>我的钱包</p>
                </div>
                <p>2356.34</p>
            </div>
        </div>
        <div class="my-list-part">
            <ul class="my-list">
                <li class="my-item flex" @click="$router.push('myStudio')">
                    <img class="item-icon" src="@/assets/images/studio.png" alt="">
                    <span>我的工作室</span>
                </li>
                <li class="my-item flex">
                    <img class="item-icon" src="@/assets/images/attestation.png" alt="">
                    <span>资质认证</span>
                </li>
                <li class="my-item flex" @click="$router.push('invite')">
                    <img class="item-icon" src="@/assets/images/invite.png" alt="">
                    <span>邀请同行入驻</span>
                </li>
            </ul>
            <ul class="my-list">
                <li class="my-item flex">
                    <img class="item-icon" src="@/assets/images/enshrine.png" alt="">
                    <span>收藏</span>
                </li>
                <li class="my-item flex">
                    <img class="item-icon" src="@/assets/images/course.png" alt="">
                    <span>课程</span>
                </li>
                <li class="my-item flex">
                    <img class="item-icon" src="@/assets/images/case.png" alt="">
                    <span>病例</span>
                </li>
            </ul>
            <ul class="my-list">
                <li class="my-item flex">
                    <img class="item-icon" src="@/assets/images/set.png" alt="">
                    <span>设置</span>
                </li>
            </ul>
        </div>
        
        <div class="footer">
            <div class="footer-item" @click="handleClick('homePage')">
                <img class="icon" src="@/assets/images/home1.png" alt="">
                <span>首页</span>
            </div>
            <div class="footer-item disabled" disabled  @click="handleClick('course')">
                <img class="icon" src="@/assets/images/default.png" alt="">
                <span>课程</span>
            </div>
            <div class="footer-item active"  @click="handleClick('my')">
                <img class="icon" src="@/assets/images/mine.png" alt="">
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my',
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(path) {
            if (path === 'course') {
                const toast = this.$createToast({
                    time: 1000,
                    type: 'txt',
                    txt: '暂未开放'
                })
                toast.show()
                return;
            }
            this.$router.push(path)
        },
    }
}
</script>

<style lang="scss" scoped>
.my {
    background: #f4f4f4;
    .header {
        position: relative;
        padding: 3rem 2.8rem 0;
        height: 11.5rem;
        box-sizing: border-box;
        background: url('../../assets/images/bgwd.png') no-repeat;
        background-size: cover;
        color: #fff;
        margin-bottom: 1.8rem;
    }
    .avatar {
        width: 2.9rem;
        height: 2.9rem;
        margin-right: 1rem;
        background-color: #dbdbdb;
        box-shadow: 0rem 0rem 0.5rem 0rem 
            rgba(191, 191, 191, 0.15);
        border: solid 0.1rem #ffffff;
        border-radius: 50%;
    }
    .info {
        width: 100%;
        p {
            line-height: 1.6rem;
            font-size: .9rem;
        }
        .hospital {
            color: #a2cef7;
        }
        .user-name {
            font-size: 1.1rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6rem;
            letter-spacing: 0.1rem;
            color: #ffffff;
        }
    }
    .wallet {
        position: absolute;
        bottom: -0.9rem;
        left: 2.9rem;
        right: 2.9rem;
        height: 4.3rem;
        box-shadow: 0rem 0.2rem 1.1rem 0rem 
		rgba(11, 151, 248, 0.11);
	    border-radius: 0.2rem;
        background: #fff;
        color: #252525;
        .my-wallet {
            margin-right: 2rem;
            .icon {
                width: 1.3rem;
	            height: 1.3rem;
            }
        }
        p {
            line-height: 1.6rem;
        }
    }
    .my-list {
        margin-top: 0.4rem;
        .my-item {
            height: 2.5rem;
            padding: 0 1.2rem;
            border-bottom: 1px solid #f4f4f4;
            background: #fff;
            .item-icon {
                width: 1rem;
                height: 1rem;
                margin-right: 0.6rem;
            }
        }
    }
}

</style>

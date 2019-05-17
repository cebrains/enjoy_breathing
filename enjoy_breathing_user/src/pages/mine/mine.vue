<template>
    <div class="mine">
        <div class="top-bar">我的</div>
        <div class="user flex">
            <img class="avatar" src="@/assets/images/default.png" alt="">
            <span class="user-name">用户1233</span>
        </div>
        <div class="my-list-part">
            <ul class="my-list">
                <li class="my-item flex">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/income.png" alt="">
                        <span>收入</span>
                    </div>
                </li>
                <li class="my-item case-manage flex flex-column align-start"  @click="$router.push('/mine/caseManage')">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/case.png" alt="">
                        <span>案例管理</span>
                    </div>
                    <div class="info-list">
                        <span>张绍</span>
                        <span>性别：男</span>
                        <span>年龄：55岁</span>
                        <span>哮喘</span>
                    </div>
                    <p class="tips">完善度80%</p>
                </li>
                <li class="my-item flex" @click="$router.push('/mine/relativesManage')">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/friend.png" alt="">
                        <span>我的亲友</span>
                    </div>
                    
                </li>
                <li class="my-item flex" @click="$router.push('discounts')">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/discounts.png" alt="">
                        <span>优惠券</span>
                    </div>
                </li>
                <li class="my-item flex" @click="$router.push('/mine/equipmentManage')">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/facility.png" alt="">
                        <span>设备</span>
                    </div>
                </li>
                <li class="my-item flex">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/indent.png" alt="">
                        <span>订单管理</span>
                    </div>
                </li>
                <li class="my-item flex">
                    <div class="flex">
                        <img class="item-icon" src="@/assets/images/set.png" alt="">
                        <span>设置</span>
                    </div>
                </li>
            </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    name: 'mine',
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
.mine {
    background: #f8f9fd;
    .user {
        height: 4.1rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: .6rem;
        padding: 0 1.2rem;
    }
    .avatar {
        width: 2.9rem;
        height: 2.9rem;
        margin-right: 1rem;
        box-shadow: 0rem 0rem 0.5rem 0rem 
            rgba(191, 191, 191, 0.15);
        border: solid 0.1rem #ffffff;
        border-radius: 50%;
    }
    .my-list {
        margin-top: 0.4rem;
        .my-item {
            height: 2.5rem;
            padding: 0 1.2rem;
            margin-bottom: .2rem;
            background: #fff;
            .item-icon {
                width: 1rem;
                height: 1rem;
                margin-right: 0.6rem;
            }
        }
        .case-manage {
            position: relative;
            padding: .8rem 1.2rem;
            .info-list {
                font-size: 0.8rem;
                color: #b6b6b6;
                margin-left: 1.2rem;
            }
            .tips {
                position: absolute;
                right: 1.2rem;
                font-size: 0.8rem;
                color: #a3a3a3;   
            }
        }
    }
}

</style>

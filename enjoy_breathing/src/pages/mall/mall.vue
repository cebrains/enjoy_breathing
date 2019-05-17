<template>
    <div class="mall">
        <div class="top-bar">
            <span>设备商城</span>
        </div>
        <ul class="equipment-list">
            <li class="equipment-item flex" v-for="item in equipmentList" :key="item.id">
                <img class="equipment-img" src="@/assets/images/default.png" alt="">
                <div class="info flex flex-column align-start space-between">
                    <p class="name">{{item.name}}</p>
                    <p class="introduce">产品介绍</p>
                    <p class="flex space-between">
                        <span class="price">¥{{item.price}}</span>
                        <span class="view" v-if="!item.show" @click="item.show = !item.show">
                            查看收益
                        </span>
                        <span class="royalty" v-else  @click="item.show = !item.show">
                            提成 ¥ 52
                        </span>
                        <span class="flex">        
                            <img class="icon" src="@/assets/images/share.png" alt="">
                            <img class="icon" src="@/assets/images/qrcode.png" alt="">
                        </span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showIndex: -1,
            equipmentList: [{
                name: '呼吸家手持肺功能仪A1-蓝牙链接',
                show: false,
                price: 990,
                royalty: 52
            }, {
                name: '呼吸家手持肺功能仪A2-SIM连接',
                show: false,
                price: 990,
                royalty: 52
            }, {
                name: '百捷多功能分析仪',
                show: false,
                price: 990,
                royalty: 52
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.mall {
    background: #f4f4f4;
    .top-bar {
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 1.1rem;
        text-align: center;
        background: #fff;
    }
    .equipment-list {
        margin-top: .6rem;
        .equipment-item {
            height: 8rem;
            padding: 0 1.2rem;
            box-sizing: border-box;
            background-color: #fff;
            margin-bottom: .1rem;
            .equipment-img {
                width: 6.9rem;
                height: 6.9rem;
                border: solid 0rem #e0e0e0;
                margin-right: .5rem;
            }
            .icon {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
        .info {
            width: calc(100% - 7.4rem);
            height: 6.9rem;
            &>p {
                width: 100%;
                line-height: 1.6rem;
            }
            .name {
                font-size: .9rem;
                color: #383838;
            }
            .introduce {
                font-size: .8rem;
                color: #a3a3a3;
            }
            .price {
                font-size: 1.1rem;
                color: #ff3b3b;
                color: #ff3b3b;
            }
            .royalty {
                line-height: 1;
                border-radius: .3rem;
                border: solid 1px #0a9cf8;
                padding: 0.25rem .3rem;
                letter-spacing: 0rem;
                color: #0a9cf8;
            }
        }
    }
}
</style>


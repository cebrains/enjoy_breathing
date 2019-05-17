<template>
    <div class="mall">
        <div class="top-bar">
            设备商城
        </div>
        <div class="device-list flex space-around">
            <div class="device-item" v-for="item in dataList" :key="item.id" @click="$router.push('commodityDetails')">
                <img class="device-img" :src="item.image" alt="">
                <p class="device-name">{{item.name}}</p>
                <p class="price">{{item.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [{
                name: '呼吸家手持肺功能仪A1-蓝牙连接',
                price: '￥990',
                image: 'https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png'
            }, {
                name: '呼吸家手持肺功能仪A1-蓝牙连接',
                price: '￥990',
                image: 'https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.mall {
    min-height: 100vh;
    background: #f4f4f4;
    .device-list {
        flex-wrap: wrap;
        .device-item {
            width: 48%;
            padding: .8rem;
            box-sizing: border-box;
            background: #fff;
            .device-img {
                max-width: 100%;
                height: 10.3rem;
            }
            .device-name {
                font-size: 0.9rem;
                color: #383838;
                line-height: 1.1rem;
            }
            .price {
                font-size: 0.9rem;
                line-height: 1.1rem;
                margin-top: .6rem;
                color: #f61616;
            }
        }
    }
}
</style>


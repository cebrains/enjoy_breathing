<template>
    <div class="commodity-pay">
        <div class="top-bar">商品详情</div>
        <div class="image-preview">
            <cube-slide :data="items"/>
        </div>
        <div class="info">
            <p class="name">{{name}}</p>
            <p class="price">￥{{price}}</p>
        </div>
        <p class="selected">已选：X1</p>
        <div class="footer flex">
            <span>购物车</span>
            <span class="add">加入购物车</span>
            <span class="buy" @click="handlePay()">立即购买</span>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            name: '智能手持肺功能仪器',
            price: '1000.00',
            items: [
                {
                url: 'http://www.didichuxing.com/',
                image: 'https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png'
                },
                {
                url: 'http://www.didichuxing.com/',
                image: 'https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png'
                },
                {
                url: 'http://www.didichuxing.com/',
                image: 'https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png'
                }
            ]
        }
    },
    methods: {
        handlePay() {
            this.$router.push({
                path: 'commodityPay',
                query: {
                    name: this.name,
                    price: this.price
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.commodity-pay {
    .image-preview {
        height: 23.4rem;
    }
    .info {
        color: #383838;
        padding: .6rem;
        border-bottom: 1px solid #ededed;
        .price {
            color: #ff2020;
        }
    }
    .selected {
        padding: .6rem;
        color: #585858;
        border-bottom: 1px solid #ededed;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3.3rem;
        background-color: #ffffff;
	    box-shadow: 0rem 0rem 0.2rem 0rem rgba(187, 187, 187, 0.76);
        text-align: center;
        padding: 0;
        span {
            flex: 1;
            line-height: 3.3rem;
            &:first-child {
                flex: 2;
            }
        }
        .add {
            background-color: #ff9600;
            color: #fff;
            height: 100%;
        }
        .buy {
            background-color: #f9650a;
            color: #fff;
            height: 100%;
        }
    }
}
</style>

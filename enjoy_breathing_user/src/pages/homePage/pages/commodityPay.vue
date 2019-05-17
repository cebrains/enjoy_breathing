<template>
    <div class="commodity-pay">
        <div class="top-bar">确认订单</div>
        <div class="container">
            <div class="address">
                <p class="user-info">
                    <span class="name">{{addrInfo.name}}</span>
                    <span class="phone">{{addrInfo.phone}}</span>
                </p>
                <p>{{addrInfo.address}}</p>
            </div>
            <div class="order flex align-start">
               <img class="img-preview" src="https://org.modao.cc/uploads4/images/3295/32954778/v2_ppu7r0.png" alt="">
                <p class="name">{{commodity.name}}</p>
                <p class="price">{{commodity.price}}</p>
            </div>
            <rx-item label="支付方式" placeholder="微信支付" :value="payWay" show-icon @onClick="showPicker"></rx-item>
        </div>
        <div class="footer" @click="handlePay()">提交订单</div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'

export default {
    data() {
        return {
            addrInfo: {
                name: 'cc',
                phone: '13012345678',
                address: '江苏省南京市雨花台区xxxxxxx'
            },
            commodity: {
                name: '',
                price: ''
            },
            column: [{
                text: '微信支付',
                value: '微信支付'
            }],
            payWay: '',
        }
    },
    created() {
        this.commodity = this.$route.query;
    },
    methods: {
        handlePay() {
            // 进行支付签名
            // this.$api.get('/api/jssdk/pay', {amount: this.amount}).then((res)=>{
            //     wx.chooseWXPay({
            //         appId: res.appId,
            //         timestamp: res.timeStamp,
            //         nonceStr: res.nonceStr, // 支付签名随机串，不长于 32 位
            //         package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
            //         signType: res.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            //         paySign: res.paySign
            //     });
            // })
        },
        showPicker() {
            return;
            const picker = this.$createPicker({
                title: 'Picker',
                data: [this.column],
                onSelect: this.selectHandle
            })
            picker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            this.payWay = selectedVal[0]
        }
    }
}
</script>

<style lang="scss" scoped>
.commodity-pay {
    height: 100vh;
    background: #f8f9fd;
    .address {
        padding: .6rem;
        background: #fff;
        font-size: 1rem;
        .user-info {
            .name {
                font-size: 1.2rem;
            }
            .phone {
                color: #a3a3a3;
                font-size: .8rem;
            }
        }
    }
    .order {
        margin: .6rem 0;
        padding: .6rem;
        background: #fff;
        .img-preview {
            width: 6rem;
            height: 6rem;
        }
        .name {
            margin: 0 1rem;
        }
        .price {
            width: 6rem;
        }
    }
    .rx-item {
        padding: .6rem 1rem;
        border-top: 1px solid #e0e0e0;
        background: #fff;
    }
}
</style>


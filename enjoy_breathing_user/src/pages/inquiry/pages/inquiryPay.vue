<template>
    <div class="inquiry-pay">
        <div class="top-bar">支付</div>
        <div class="container">
            <info-bar :info="info">
                <span class="label">¥39</span>
            </info-bar>
            <ul class="list">
                <li class="item flex space-between">
                    <span>支付方式</span>
                    <p class="flex picker" @click="showPayPicker()">
                        <span class="non-value">{{payMethod}}</span>
                        <span class="icon"></span>
                    </p>
                </li>
                <li class="item flex space-between">
                    <span>优惠方式</span>
                    <p class="flex picker">
                        <span class="non-value">无可用优惠券</span>
                        <span class="icon"></span>
                    </p>
                </li>
                <li class="item flex space-between">
                    <span>回复问题</span>
                    <p class="flex">
                        <span class="non-value">超过24小时未回复自动退款</span>
                        <!-- <span class="icon"></span> -->
                    </p>
                </li>
                <li class="item flex flex-column">
                    <div class="item-title flex space-between">
                        <span>公开问题</span>
                        <cube-switch v-model="value"></cube-switch>
                    </div>
                    <p class="tips">帮助更多人，您的姓名头像会匿名处理，每次查看完你将获得0.5元奖励。</p>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="btn-item">
                <p class="total">合计： <span class="price">¥39</span></p>
                <p class="tips">可免费追问一次</p>
            </div>
            <div class="pay-btn btn-item flex flex-center" @click="handlePay()">立即支付</div>
        </div>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk'

export default {
    data() {
        return {
            info: {
                name: '罗辑',
                role: '主治医师',
                hospital: '郑州大学第一附属医院',
            },
            value: false,
            column: [{ text: '微信支付', value: '微信支付'}, { text: '支付宝支付', value: '支付宝支付'}],
            payMethod: '微信支付'
        }
    },
    methods: {
        showPayPicker() {
            if (!this.picker) {
                this.picker = this.$createPicker({
                    data: [this.column],
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                })
            }
            this.picker.show()
        },
        selectHandle(value) {
            this.payMethod = value[0]
        },
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
        }
    }
}
</script>

<style lang="scss" scoped>
.inquiry-pay {
    height: 100vh;
    background: #f4f4f4;
    .label {
        position: absolute;
        right: 1rem;
        color: #fe3737;
    }
    .list {
        margin-top: .4rem;
        background-color: #fff;
        .item {
            padding: .6rem 1rem;
            border-bottom: 1px solid #e0e0e0;
            .item-title {
                width: 100%;
                padding-bottom: .6rem;
            }
            .tips, .non-value {
                color: #a3a3a3;
                font-size: 0.8rem;
            }
            .picker {
                span {
                    line-height: 1;
                }
            }
            .icon {
                display: inline-block;
                width: 1rem;
                height: 1.3rem;
                background: url('../../../assets/images/arrow_right.png') no-repeat center center;
                background-size: cover;
            }
        }
    }
    .footer {
        padding: 0;
        .btn-item {
            flex: 1;
            height: 100%;
        }
        .tips {
            font-size: 0.8rem;
            color: #a3a3a3;
        }
        .total {
            font-size: 0.9rem;
            color: #585858;
            .price {
                color: #ff4e52;
                font-size: 1.1rem;
            }
        }
        .pay-btn {
            background-color: #ff4e52;
            font-size: .9rem;
            color: #fff;
        }
    }
}
</style>


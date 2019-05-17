<template>
    <div class="inquiry-price">
        <div class="top-bar">问诊价格</div>
        <ul class="price-list">
            <li class="price-item">
                <p class="title">图文问诊(含一次追问）</p>
                <div class="input-wrapper flex">
                    <div class="input">
                        <span>¥</span>
                        <input type="text" v-model="form.serviceMsgPrice">
                    </div>
                    <span>元</span>
                </div>
            </li>
            <li class="price-item">
                <p class="title">语音问诊(含一次追问）</p>
                <div class="input-wrapper flex">
                    <div class="input">
                        <span>¥</span>
                        <input type="text" v-model="form.serviceTelPrice">
                    </div>
                    <span>元</span>
                </div>
            </li>
        </ul>
        <p class="tips">
            分成说明：每完成一次问诊，工作室可获得每笔咨询费用-%,剩余-%为平台服务费用。
        </p>
        <div class="footer" @click="save()">
            保存
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                serviceMsgPrice: null,
                serviceTelPrice: null,
                studioId: null
            },
            studioInfo: null
        }
    },
    created() {
        this.studioInfo = JSON.parse(sessionStorage.getItem('studioInfo'))
        this.getPrice()
    },
    methods: {
        getPrice() {
            const toast = this.$createToast({
                txt: 'Loading...',
                time: 0,
                mask: true
            })
            toast.show()
            const params = {
                path: 'respiratory:findStudioServicePrice',
                params:  {
                    id: this.studioInfo.id
                }
            }
            const self = this;
            this.$api.polling(params).then(res => {
                toast.hide()
                if (res.items) {
                    this.form = res.items;
                }
                this.form.studioId = this.studioInfo.id;
            }, err => {
                toast.hide()
            })
        },
        save() {
            const toast = this.$createToast({
                txt: 'Loading...',
                time: 0,
                mask: true
            })
            toast.show()
            const params = {
                path: 'respiratory:updateStudioServicePrice',
                params: this.form
            }
            this.$api.polling(params).then(res => {
                toast.hide()
            }, err => {
                toast.hide()
                const toast2 = this.$createToast({
                    txt: err,
                    type: 'error',
                    mask: true
                })
                toast2.show()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.inquiry-price {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        background: #fff;
	    box-shadow: 0rem 0rem 0.1rem 0rem 
		rgba(201, 201, 201, 0.19);
    }
    .price-list {
        .price-item {
            margin: .6rem .9rem;
            background: #fff;
            padding: 1.1rem 1.2rem;
            .title {
                font-size: 0.9rem;
            }
            .input-wrapper {
                .input {
                    margin: 1rem 0;
                    border-bottom: 1px solid #e0e0e0;
                    input {
                        outline: none;
                        color: #0a9cf8;
                        text-align: center;
                    }
                }
            }
        }
    }
    .tips {
        color: #a3a3a3;
        font-size: 0.8rem;
        padding: 0 2.1rem;
        line-height: 1.2rem;
    }
    .footer {
        background: #0a9cf8;
        color: #fff;
    }
}
</style>


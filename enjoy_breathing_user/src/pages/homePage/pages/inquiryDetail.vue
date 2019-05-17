<template>
    <div class="inquiry-detail">
        <div class="top-bar">
            问题详情
        </div>
        <div class="content">
            <div class="reply-doctor flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="flex flex-column align-start">
                    <span class="name">王大锤</span>
                    <span class="date">六小时前</span>
                </div>
                <!-- <span class="label">语音问诊</span> -->
            </div>
            <div class="desc">
                希望懂的医生能帮我分析病情、谢谢一直头昏、颈部淋巴部位感觉很干、没劲、刚开始是说疱疹、打了几针以后头昏要好点了、但淋巴还是干的痛、在医院检查说是咽喉炎、但治疗了一个多星期感觉没效果、用手揉太阳穴以后就感觉好多了、淋巴处也感觉好多了、想问下我这症状是怎么回事啊？
                <div class="label-type">
                    <span class="label">咳嗽</span>
                    <span class="label">胸闷</span>
                </div>
                <div class="image-preview list-wrapper flex">
                    <img class="list-item" v-for="img in images" :key="img.id" :src="require(`@/assets/images/${img}.png`)" alt="">
                </div>
            </div>
            
            <div class="reply-list" >
                <div class="reply-doctor flex">
                    <img class="avatar" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p>
                            <span class="name">王大锤</span>
                            <span class="">主治医师</span>
                        </p>
                        <span class="date">郑州大学第一附属医院</span>
                    </div>
                </div>
                <div class="questioning-list" >
                    <p class="question-desc">
                        希望懂的医生能帮我分析病情、谢谢一直头昏、颈部淋巴部位感觉很干、没劲、刚开始是说疱疹、打了几针以后头昏要好点了、但淋巴还是干的痛、在医院检查说是咽喉炎、但治疗了一个多星期感觉没效果、用手揉太阳穴以后就感觉好多了、淋巴处也感觉好多了、想问下我这症状是怎么回事啊？
                    </p>
                    <span class="split-text">追问</span>
                    <p class="questioning">
                        <span class="text-label">追问：</span>希望懂的医生能帮我分析病情、谢谢一直头昏、颈部淋巴部位感觉很干、没劲、刚开始是说疱疹、打了几针以后头昏要好点了、但淋巴还是干的痛、在医院检查说是咽喉炎、但治疗了一个多星期感觉没效果、用手揉太阳穴以后就感觉好多了、淋巴处也感觉好多了、想问下我这症状是怎么回事啊？
                    </p>
                </div>
            </div>
            <div class="reply-list voice-reply" v-if="routeParam.type === '语音'">
                <div class="reply-doctor flex" v-if="!routeParam.isPending">
                    <img class="avatar" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p>
                            <span class="name">王大锤</span>
                            <span class="">主治医师</span>
                        </p>
                        <span class="date">郑州大学第一附属医院</span>
                    </div>
                </div>
                <div class="reply-info">
                    <p class="warning-text">待回复</p>
                    <p>请在2小时33分内回复</p>
                    <p>预计收入 ￥{{routeParam.income}}元</p>
                    <cube-button icon="cubeic-phone">立刻回电</cube-button>
                </div>
            </div>
        </div>
        <div class="footer" @click="showPopup()">
            1元查看医生回答
        </div>

        <cube-popup type="my-popup" position="bottom" :mask-closable="true" ref="myPopup">
            <div class="popup-wrapper">
                <div class="confirm-pay">
                    <div class="header flex flex-column flex-center">
                        <p class="title">支付方式</p>
                        <p class="subtitle">查看TA人问题</p>
                    </div>
                    <div class="pay-list">
                        <p class="pay-item flex space-between">
                            <span>支付金额</span>
                            <span>￥1.00</span>
                        </p>
                        <p class="pay-item flex space-between">
                            <span>支付方式</span>
                            <span class="pay-picker" @click="showPicker()">微信支付</span>
                        </p>
                    </div>
                </div>
                <div class="footer">确认支付</div>
            </div>
        </cube-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: ['default', 'default', 'default'],
            routeParam: null,
            column: [{ text: '微信支付', value: '微信支付'}, { text: '支付宝支付', value: '支付宝支付'}]
        }
    },
    created() {
        const data = this.$route.query;
        this.routeParam = data;
    },
    methods: {
        showPopup() {
            this.$refs.myPopup.show();
        },
        showPicker() {
            if (!this.picker) {
                this.picker = this.$createPicker({
                data: [this.column],
                onSelect: this.selectHandle,
                onCancel: this.cancelHandle
                })
            }
            this.picker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            console.log(selectedVal, selectedIndex, selectedText)
        }
    }
}
</script>

<style lang="scss" scoped>
.inquiry-detail {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        padding-top: .4rem;
        height: 2.8rem;
        line-height: 2.8rem;
        text-align: center;
        background: #fff;
        margin-bottom: .4rem;
    }
    .reply-doctor {
        position: relative;
        height: 3.1rem;
        background: #fff;
        border-bottom: 1px solid #f4f4f4;
        .avatar {
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 1.1rem;
            margin: 0 1.1rem;
        }
        .name {
            color: #383838;
        }
        .date {
            font-size: .8rem;
            color: #a3a3a3;
        }
        .label {
            position: absolute;
            right: 1.1rem;
            top: .2rem;
            color: #1386fc;
            font-size: .8rem;
        }
    }
    .content {
        height: calc(100vh - 7rem);
        overflow: auto;
        background: #fff;
        .desc {
            padding: .9rem 1.1rem;
            line-height: 1.3rem;
            background: #fff;
            color: #383838;
            font-size: 0.9rem;
            .label-type {
                margin-top: 1.1rem;
                .label {
                    height: 1.3rem;
                    line-height: 1.3rem;
                    border-radius: 0.1rem;
                    border: solid 1px #1386fc;
                    padding: .2rem .6rem;
                    color: #1386fc;
                    margin-right: .2rem;
                }
            }
            .image-preview {
                margin: .4rem -0.4rem;
                white-space: nowrap;
                overflow-x: auto;
                img {
                    width: 6.6rem;
                    height: 6.6rem;
                    margin: 0 .4rem;
                }
            }
        }
        .reply-list {
            padding-bottom: 2rem;
            .reply-doctor {
                border-bottom: 0;
            }
            .questioning-list {
                background: #fff;
                margin-left: 2.1rem;
                margin-top: .4rem;
                padding: 0rem 1.1rem;
                border-left: 1px solid #e0e0e0;
                font-size: .9rem;
                .split-text {
                    position: relative;
                    color: #a3a3a3;
                    font-size: 0.8rem;
                    &::before {
                        content: '';
                        position: absolute;
                        left: -1.3rem;
                        top: 0.25rem;
                        display: inline-block;
                        width: 0.4rem;
                        height: 0.4rem;
                        border-radius: 50%;
                        background-color: #1386fc;
                    }
                }
                .questioning {
                    .text-label {
                        color: #1386fc;
                    }
                }
            }
            .reply-info {
                text-align: center;
                font-size: 0.9rem;
                .warning-text {
                    font-size: 1rem;
                    color: #ff3d3d;
                }
                .cube-btn {
                    display: inline-block;
                    width: 11.7rem;
                    height: 1.9rem;
                    line-height: 1.9rem;
                    padding: 0;
	                border-radius: 0.2rem;
                    margin-top: .8rem;
                }
            }
        }
        .voice-reply {
            background: #f4f4f4;
            padding-top: 2.3rem;
        }
    }
    .footer {
        background: #1386fc;
        color: #fff;
        font-size: 0.9rem;
        height: 2.7rem;
    }
    .popup-wrapper {
        padding-bottom: 3rem;
        background: #fff;
        .confirm-pay {
            .header {
                height: 5rem;
                .title {
                    color: #1386fc;
                }
                .subtitle {
                    color: #a3a3a3;
                    font-size: 0.8rem;
                }
            }
            .pay-list {
                margin: .4rem 0;
                .pay-item {
                    height: 2.6rem;
                    padding: 0 1.4rem;
                    .pay-picker {
                        position: relative;
                        &::after {
                            content: '';
                            position: absolute;
                            top: .8rem;
                            margin-top: -.5rem;
                            width: 1rem;
                            height: 1rem;
                            background: url('../../../assets/images/arrow_right.png') no-repeat center;
                            background-size: cover;
                        }
                    }
                }
            }
        }
    }
}
</style>


<template>
    <div class="inquiry-detail">
        <div class="top-bar">
            问题详情
        </div>
        <div class="container">
            <div class="reply-doctor flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="flex flex-column align-start">
                    <span class="name">王大锤</span>
                    <span class="date">六小时前</span>
                </div>
                <span class="label">{{routeParam.replyStatus === '0' ? '待回复' : '已回复'}}</span>
            </div>
            <div class="desc">
                {{routeParam.symptomDescribe}}
                <div class="label-type">
                    <span class="label" v-for="tag in routeParam.symptomTag.split(',')" :key="tag">{{tag}}</span>
                </div>
                <div class="image-preview list-wrapper flex">
                    <img class="list-item" v-for="img in images" :key="img.id" :src="'http://192.168.1.240:8090/'+img" alt="">
                </div>
            </div>
            <div class="reply-list" v-if="routeParam.serviceType === '1'">
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
                <div class="questioning-list" v-for="(consultation,index) in routeParam.consultationList" :key="index">
                    <span v-if="consultation.consultationType === '1'">{{consultation.consultationContent}}</span>
                    <div v-if="consultation.consultationType === '2'">
                        <span class="split-text">追问</span>
                        <p class="questioning">
                            <span class="text-label">追问：</span>
                            {{consultation.consultationContent}}
                        </p>
                    </div>
                    <div v-if="consultation.consultationType === '3'">
                        <span class="split-text">追答</span>
                        <p class="questioning">
                            <span  class="text-label">追答：</span>
                            {{consultation.consultationContent}}
                        </p>
                    </div>
                </div>
                <div class="reply-input">
                    <cube-textarea v-if="!isEnded" placeholder="" :maxlength="1000" v-model="value" :indicator="false" :autoExpand="true"></cube-textarea>
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
        <div v-if="routeParam.serviceType === '1' && !isEnded" class="footer" @click="handleReply()">
            回复
        </div>
        <div v-if="isEnded && isEvaluated" class="footer star flex flex-column">
            患者已评价
            <cube-rate v-model="starValue"></cube-rate>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 回复类型 1:回复 2：追问 3:追答
            consultationType: '1',
            images: ['file/readImg?fileName=doctor_verify_img_1557906527088', 'file/readImg?fileName=doctor_verify_img_1557906527088', 'file/readImg?fileName=doctor_verify_img_1557906527088'],
            routeParam: null,
            value: '',
            isEnded: false,
            isEvaluated: false,
            starValue: 4
        }
    },
    created() {
        const data = JSON.parse(localStorage.getItem('inquiryDetail'))
        this.routeParam = data;
        console.log(data)
        // this.isEvaluated = true
        // this.isEnded =  true
    },
    methods: {
         getImgCodeApi(){
            this.$api.get("http://192.168.1.240:8090/file/readImg?fileName=doctor_verify_img_1557906527088", {
                responseType: "arraybuffer",
            }).then(function (response) {
            //将从后台获取的图片流进行转换
                return 'data:image/png;base64,' + btoa(
                    new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
            }).then(function (data) {
                //接收转换后的Base64图片
                    console.log(data)
                }).catch(function (err) {
            })
        },
        handleReply() {
            if (!this.value) {
                return;
            }
            this.consultationType = this.replyStatus === '0' ? '1' : '3'
            const httpParam = {
                path: 'respiratory:saveConsultation',
                params: {
                    billIdL: this.routeParam.id,
                    personId: '1',
                    consultationContent: this.value,
                    consultationType: this.consultationType,
                    personType: '1'  // 1:医生 2患者
                }
            }
            this.$api.polling(httpParam).then(res => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang="scss">
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
    .container {
        height: calc(100vh - 7.1rem);
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
                    pointer-events: none;
                }
            }
        }
        .reply-list {
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
        .reply-input {
            margin: 1rem 2rem;
        }
        .voice-reply {
            background: #f4f4f4;
            padding-top: 2.3rem;
        }
    }
    .star {
        background: #f8f9fd;
        .cube-rate-item {
            width: 1.2rem;
        }
    }
}
</style>


<template>
    <div class="inquiry-mode">
        <div class="top-bar">{{inquiryMode === 'voice' ? '语音问诊' : '图文问诊'}}</div>
        <div class="container">
            <div class="doctor-info flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div>
                    <p>
                        <span class="name">罗辑</span>
                        <span class="role">主治医师</span>
                    </p>
                    <p v-if='inquiryMode === "voice"' class="msg-card">请描述症状并留下电话号码，我会在3小时内回电</p>
                    <p v-else class="msg-card">请描述你的症状，我将竭诚为你治疗，并保证你的隐私安全。</p>
                </div>
            </div>
            <div class="form-item textarea">
                <cube-textarea v-model="desc" placeholder="请在此详细描述" :autoExpand="true" :maxlength='1000'></cube-textarea>
            </div>
            <div class="label-list flex">
                <cube-checker v-model="checkerValue" :options="options" />
            </div>
            <div class="form-item">
                <cube-checkbox v-model="checked">需要处方建议</cube-checkbox>
            </div>
            <div class="form-item flex" v-if='inquiryMode === "voice"'>
                <div class="upload flex flex-column flex-center">
                    <i class="icon">+</i>
                    添加图片/视频
                </div>
                <div class="image-preview">
                    你上传的附近仅对医生可见可上传9个
                </div>
            </div>
            <div v-else>
                <rx-input v-model="phone" placeholder="请输入您的手机号码"></rx-input>
            </div>
        </div>
        <div class="footer" @click="handleNext()">下一步</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inquiryMode: '',
            desc: '',
            checked: false,
            checkerValue: [],
            options: [{
                text: '咳嗽',
                value: '咳嗽'
            }, {
                text: '胸闷',
                value: '胸闷'
            }, {
                text: '喘息',
                value: '喘息'
            }, {
                text: '气短',
                value: '气短'
            }, {
                text: '夜间憋醒',
                value: '夜间憋醒'
            }, {
                text: '夜间憋醒',
                value: '夜间憋醒'
            }, {
                text: '夜间憋醒',
                value: '夜间憋醒'
            }],
            phone: '',
        }
    },
    created() {
        this.inquiryMode = this.$route.query.mode;
    },
    methods: {
        handleNext() {
            this.$router.push({
                path: 'selectPatien',
                query: {
                    inquiryMode: this.inquiryMode,
                }
            })
        }
    }
}
</script>

<style lang="scss" >
.inquiry-mode {
    .top-bar {
        box-shadow: 0rem 0rem 0rem 0rem 
		rgba(122, 122, 122, 0.14);
        border-bottom: 1px solid #e0e0e0;
    }
    .container {
        .doctor-info {
            padding: 1rem;
            border-bottom: 1px solid #e0e0e0;
            .avatar {
                width: 2.3rem;
                height: 2.3rem;
                border-radius: 1.2rem;
                margin-right: .6rem;
            }
            .role {
                font-size: 0.8rem;
            }
            .msg-card {
                position: relative;
                padding: .4rem 1.4rem;
                font-size: 0.8rem;
                color: #508bff;
                background-color: #e7f3ff;
                border-radius: 0.2rem;
                &::before {
                    content: '';
                    position: absolute;
                    left: -.25rem;
                    top: -0.8rem;
                    border-top: 1.2rem transparent solid;
                    border-right: .8rem #e7f3ff solid;
                    border-left: 1rem transparent solid;
                    border-bottom: 1rem transparent solid;
                    transform: rotate(120deg)

                }
            }
        }
        .form-item {
            padding: .4rem 1.6rem;
            font-size: 0.9rem;
            color: #a3a3a3;
            .cube-textarea_expanded {
                height: 100%;
            }
            .upload {
                width: 6.25rem;
                height: 6.25rem;
                background: #e0e0e0;
                .icon {
                    font-size: 3rem;
                    font-style: normal;
                }
            }
            .image-preview {
                padding: .6rem;
            }
        }
        .textarea {
            height: 10rem;
        }
        .label-list {
            .cube-checker-item {
                font-size: 0.8rem;
                padding: 0.2rem .4rem;
                margin: .2rem;
                span {
                    line-height: 1.1rem;
                }
            }
        }
        .cube-checkbox {
            font-size: .8rem;
            color: #a3a3a3;
            padding: 0;
        }
        .rx-input {
            color: #a3a3a3;
            font-size: 0.8rem;
        }
    }
    .footer {
        background-color: #4e89ff;
        border-radius: 0.2rem;
        color: #fff;
        height: 2.7rem;
        font-size: 0.9rem;
    }
}
</style>


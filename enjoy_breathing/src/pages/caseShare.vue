<template>
    <div class="case-share">
        <div class="top-bar">
            <span>病例分享</span>
            <span class="text-btn">发布</span>
        </div>
        <div class="content">
            <p class="tips">每上传一篇病例，可得5学分</p>
            <div class="title">
                <div class="header">
                    <span class="header-title">请输入病例标题</span>
                    <span class="tips">不少于6个字</span>
                </div>
                <div class="label-wrapper">
                    <rx-label :labelList="labelList"></rx-label>
                </div>
            </div>
            <div class="personal-info">
                <div class="info flex space-between">
                    <span>性别</span>
                    <div>
                        <cube-checker v-model="checkerValue" :options="options" type="radio" />
                    </div>
                </div>
                <div class="info flex space-between">
                    <span>出生年月</span>
                    <div class="picker" @click="showPicker()">
                        <span v-if="!selectedDate">请选择 ></span>
                        <span v-else>{{selectedDate}}</span>
                    </div>
                </div>
            </div>
            <div class="form-item">
                <p class="form-title">主诉 病史 <span class="required-text">（必填）</span>:</p>
                <div class="form-content">
                    <textarea></textarea>
                </div>
            </div>
            <div class="form-item">
                <p class="form-title">查体 辅查:</p>
                <div class="form-content">
                    <textarea></textarea>
                </div>
            </div>
            <div class="form-item">
                <p class="form-title">诊断 处理:</p>
                <div class="form-content">
                    <textarea></textarea>
                </div>
            </div>
            <div class="form-item">
                <p class="form-title">随访 讨论:</p>
                <div class="form-content">
                    <textarea></textarea>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelList: ['慢阻肺'],
            checkerValue: '',
            options: [
                {
                value: '1',
                text: '男'
                },
                {
                value: '0',
                text: '女'
                },
            ],
            selectedDate: '',
        }
    },
    methods: {
        showPicker() {
            if (!this.datePicker) {
                this.datePicker = this.$createDatePicker({
                min: new Date(2008, 7, 8),
                max: new Date(2020, 9, 20),
                value: new Date(),
                onSelect: this.selectHandle,
                onCancel: this.cancelHandle
                })
            }
            this.datePicker.show()
        },
        selectHandle(date, selectedVal, selectedText) {
            console.log(date, selectedVal, selectedText)
            this.selectedDate = selectedText.join('-')
        }
    }
}
</script>

<style lang="scss" >
.case-share {
    min-height: 100vh;
    background: #f8f9fd;
    .top-bar {
        height: 3rem;
        line-height: 3rem;
        position: relative;
        text-align: center;
        box-shadow: 0rem 0rem 0.1rem 0rem 
        rgba(201, 201, 201, 0.36);
        background: #fff;
        .text-btn {
            position: absolute;
            right: 1rem;
            line-height: 3rem;
            color: #1386fc;
            font-size: 0.9rem;
        }
    }
    .content {
        padding: 1rem;
        .tips {
            font-size: 0.9rem;
            color: #a3a3a3;
        }
        .title {
            background: #fff;
            margin: .7rem 0;
            .header {
                padding: 1rem 0.6rem;
                border-bottom: 1px solid #e0e0e0;
                .header-title {
                    .tips {
                        font-size: 0.7rem;
                    }
                }
            }
            .label-wrapper {
                padding: .6rem;
            }
        }
        .personal-info {
            margin-bottom: 1rem;
            .info {
                height: 2.5rem;
                background-color: #fff;
                border-radius: 0.2rem;
                margin: .3rem 0;
                padding: 0 1rem;
                font-size: 0.9rem;
                .cube-checker-item {
                    width: 1.6rem;
                    height: 1.6rem;
                    border-radius: 50%;
                    padding: 0;
                    font-size: 0.8rem;
                    &::after {
                        border-radius: 50%;
                    }
                }
                .picker {
                    color: #cfcfcf;
                }
            }
        }
        .form-item {
            margin-bottom: 1.2rem;
            font-size: 0.9rem;
            .form-title {
                font-size: 0.9rem;
            }
            .form-content {
                textarea {
                    resize: none;
                    width: 100%;
                    height: 8.9rem;
                }
            }
        }
    }
    .required-text {
        font-size: .7rem;
    }
}
</style>


<template>
    <div class="basic-info">
        <div class="wrapper">
            <h2 class="title" @click="test()">请填写患者基本情况</h2>
            <p class="subtitle">便于医生诊断病情</p>
            <div class="avatar flex">
                <div class="flex flex-column">
                    <img class="upload-avatar" src="@/assets/images/default.png" alt="">
                    <span class="explain-text">上传头像</span>
                </div>
            </div>
            <ul class="form">
                <li class="form-item">
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">患者姓名</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">身份证号</span>
                    </rx-input>
                </li>
                <li>
                    <rx-checker :styleObject="styleObject" @check="handleCheck" v-model="checkerValue" :options="options">
                        <span slot="prefix">性别</span>
                    </rx-checker>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">出生日期</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">身高</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">体重</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">所在地区</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">与我的关系</span>
                    </rx-input>
                </li>
            </ul>
        </div>
        <div class="footer" @click="handleNext()">下一步</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            styleObject: {
                'textAlign': 'right'
            },
            checkerValue: '',
            options: [{
                value: 0,
                text: '女'
            }, {
                value: 1,
                text: '男'
            }]
        }
    },
    methods: {
        handleCheck(vale) {
            console.log(this.vale)
        },
        handleNext() {
            this.$router.push('/diseaseTypes')
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./loginStep.scss');
.basic-info {
    .avatar {
        .upload-avatar {
            width: 4.4rem;
            height: 4.4rem;
        }
        .explain-text {
            font-size: 0.9rem;
            color: #aeaeae;
        }
    }
}
</style>


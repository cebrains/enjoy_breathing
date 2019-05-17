<template>
    <div class="auth-info">
        <div class="top-bar">认证信息</div>
        <div class="container">
            <div class="header">
                <p class="title">填写认证信息</p>
                <p class="subtitle">请根据真实情况填写，通过认证后享有全部功能</p>
            </div>
            <p class="title">基本信息</p>
            <ul class="form">
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">姓名</span>
                    </rx-input>
                </li>
                <li >
                    <rx-checker :styleObject="styleObject" @check="handleCheck" v-model="checkerValue" :options="options">
                        <span slot="prefix">性别</span>
                    </rx-checker>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">就职医院</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">科室</span>
                    </rx-input>
                </li>
                <li>
                    <rx-input :styleObject="styleObject">
                        <span slot="prefix">职称</span>
                    </rx-input>
                </li>
            </ul>
            <p class="title">认证资料</p>
            <cube-upload
                ref="upload"
                v-model="files"
                :action="action"
                name='name'
                @files-added="addedHandler"
                @file-error="errHandler">
                <div class="clear-fix upload-card">
                    <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
                    <cube-upload-btn>
                    <div>
                        <i  class="upload">＋</i>
                    </div>
                    </cube-upload-btn>
                </div>
            </cube-upload>
        </div>
        <div class="footer" @click="submit()">
            提交
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            action: {
                target: this.$config.serverBaseUrl + '/file/fileUpload',
            },
            files: [],
            styleObject: {
                'text-align': 'right',
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
    created() {
        console.log()
    },
    methods: {
        submit() {
            this.$router.push('/')
        },
        handleCheck(v) {
            console.log(v)
        },
        addedHandler() {
            const file = this.files[0];
            console.log(this.files)
        },
        errHandler(file) {
            // const msg = file.response.message
            this.$createToast({
                type: 'warn',
                txt: 'Upload fail',
                time: 1000
            }).show()
        }
    }
}
</script>

<style lang="scss" scoped>
.auth-info {
    height: 100vh;
    background: #f8f9fd;
    .container {
        height: calc(100vh - 6.9rem);
        >.title {
            padding: .6rem 1rem;
        }
    }
    .header {
        background: #fff;
        padding: 1rem;
        .title {
            font-size: 1.1rem
        }
        .subtitle {
            font-size: .8rem;
            color: #a3a3a3;
        }
    }
    .form {
        font-size: .8rem;
        padding: 1rem;
        background: #fff;
        .form-item {
            padding: .6rem .4rem .6rem 0;
            border-bottom: 1px solid #e0e0e0;
            .checker {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    .upload-card {
        background: #fff;
        padding: 1.2rem 2.8rem;
        .subtitle {
            font-size: .8rem;
            color: #a3a3a3;
        }
        .upload {
            margin-top: .4rem;
            display: inline-block;
            width: 7rem;
            height: 7rem;
            line-height: 7rem;
            text-align: center;
            font-size: 4rem;
            color: #e0e0e0;
            border: 1px dashed #e0e0e0;
            font-style: normal;
        }
    }
    .footer {
        background: #0a9cf8;
        color: #fff;
    }
}
</style>


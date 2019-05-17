<template>
    <div class="join-studio">
        <img class="logo" src="@/assets/images/default.png" alt="">
        <p class="title">Hi {{name}}邀请你加入TA的医生工作室</p>
        <div class="form-group">
            <rx-input placeholder="请输入手机号" v-model="phone"></rx-input>
            <rx-input placeholder="请输入验证码" v-model="code">
                <span class="code-btn" @click="getCode()" :class="{disabled: disabled}">{{btnText}}</span>
            </rx-input>
        </div>
        <div>
            <cube-button class="join-btn" @click="handleJoin()">注册并加入</cube-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '罗辑',
            disabled: false,
            sec: 60,
            timer: null,
            phone: '',
            code: '',
        }
    },
    computed: {
        btnText() {
            return this.disabled ? this.sec : '获取验证码'
        }
    },
    methods: {
        getCode() {
            if (!this.phone) {
                const toast = this.$createToast({
                    time: 1000,
                    type: 'text',
                    txt: '请输入手机号'
                })
                toast.show();
                return;
            }
            if (this.disabled) {
                return;
            }
            this.sec = 60;
            this.disabled = true;
            this.timerFunc();
            
        },
        timerFunc() {
            let timer = setTimeout(() => {
                this.sec -= 1;
                if (this.sec === 0) {
                    this.disabled = false;
                    clearTimeout(timer)
                    timer = null;
                    return;
                }
                this.timerFunc();
            }, 1000)
        },
        handleJoin() {
            console.log(this.phone, this.code)
        }
    }
}
</script>

<style lang="scss" scoped>
.join-studio {
    text-align: center;
    .logo {
        width: 4.1rem;
        height: 4.1rem;
        background-color: #ffffff;
        box-shadow: 0rem 0rem 0.8rem 0rem rgba(15, 143, 250, 0.3);
        border-radius: 2rem;
        margin: 2.3rem 0 1.5rem;
    }
    .title {
        color: #1a86c9;
        font-size: 0.9rem;
        margin-bottom: 3.7rem;
    }
    .form-group {
        display: inline-block;
        width: 16rem;
        .code-btn {
            width: 5rem;
            line-height: 1;
            border-radius: 0.7rem;
            border: solid 1px #099df6;
            padding: .2rem .45rem;
            color: #099df6;
            &.disabled {
                background: #ccc;
                border: solid 1px #ccc;
                color: #fff;
            }
        }
    }
    .join-btn {
        display: inline-block;
        margin-top: 3.7rem;
        width: 13.6rem;
        background-image: linear-gradient(82deg, 
            #04a9f4 0%, 
            #167efe 100%);
        box-shadow: 0rem 0rem 1.2rem 0rem 
            rgba(15, 143, 250, 0.3);
        border-radius: 2rem;
        }
}
</style>


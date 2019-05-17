<template>
    <div class="login flex flex-column ">
        <div class="title">    
            <h1>欢迎加入畅享呼吸</h1>
        </div>
        <div class="form-group" v-if="isNormalLogin">
            <div class="input flex">
                <cube-input v-model="phone" placeholder="请输入手机号"></cube-input>
            </div>
            <div class="input flex">
                <cube-input v-model="verifyCode" placeholder="请输入验证码"></cube-input>
                <span class="link-text">获取验证码</span>
            </div>
            <p class="tips">未注册的手机号完成验证后自动注册</p>
        </div>
        <div class="form-group" v-else>
            <div class="input flex">
                <cube-input v-model="phone" placeholder="请输入手机号"></cube-input>
            </div>
            <div class="input flex">
                <cube-input v-model="password" placeholder="请输入密码" type="password" :eye="eye"></cube-input>
                
            </div>
            <p class="tips">未注册的手机号完成验证后自动注册</p>
            <div class="login-method flex space-between">
                <p class="link-text" @click="isNormalLogin = !isNormalLogin">手机验证码登录</p>
                <p class="link-text">忘记密码？</p>
            </div>
        </div>
        <div class="login-confirm">
            <cube-button class="login-btn confirm" :disabled="!checked" @click="handleLogin()">登录</cube-button>
            <cube-button class="login-btn" @click="changeLogin()">{{isNormalLogin ? '账户密码登录' : '手机验证码登录'}}</cube-button>
            <!-- <cube-checkbox v-model="checked">
                同意《 <span class="link-text">用户使用协议</span> 》
            </cube-checkbox> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            checked: true,
            verifyCode: '',
            phone: '',
            password: '',
            isNormalLogin: true,
            eye: {
                open: false,
                reverse: false
            }
        }
    },
    methods: {
        handleLogin() {
            if (this.isNormalLogin) {
                if (!this.phone || !this.verifyCode) {
                    const toast = this.$createToast({
                        time: 1000,
                        txt: '请输入用户名或验证码',
                        type: 'text'
                    })
                    toast.show()
                    return;
                }
                
            } else {
                if (!this.phone || !this.password) {
                    const toast = this.$createToast({
                        time: 1000,
                        txt: '请输入用户名或密码',
                        type: 'text'
                    })
                    toast.show()
                    return;
                }
            }
            const param = {
                userName: '9',
                password: 'OQ=='
            }
            this.$api.getToken(param).then(res => {
                console.log(res)
                if (res.code === 0) {
                    sessionStorage.setItem('token', res.items);
                    this.$router.push('/authInfo')
                }
            })
        },
        changeLogin() {
            this.isNormalLogin = !this.isNormalLogin;
            console.log(this.isNormalLogin)
        }
    }

}
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    padding: 3.6rem 0;
    box-sizing: border-box;
    .title {
        text-align: center;
        h1 {
            font-size: 1.2rem;
            line-height: 2.6;
        }
    }
    .form-group {
        margin-top: 2.6rem;
        margin-bottom: 4.2rem;
        .input {
            margin: 2rem 0;
            border: 1px solid #bbb;
            border-radius: 2rem;
            overflow: hidden;
            padding: 0 1.6rem;
            .cube-input {
                flex: 1;
            }
            .cube-input::after {
                display: none;
            }
        }
        .tips {
            color: #bbb;
            font-size: 0.9rem;
            line-height: 2;
        }
    }
    .login-confirm {
        font-size: .9rem;
        .cube-btn.login-btn {
            padding: .6rem 2rem;
            border-radius: 2rem;
            margin-bottom: .5rem;
            &.cube-btn_disabled::after {
                display: none;
            }
            &.confirm {
                color: #fff;
                background: #0a9bf7;
            }
            &.cube-btn_disabled {
                background: #ccc;
            }
        }
    }
    .link-text {
        color: #0a9bf7;
        font-size: 0.9rem;
        cursor: pointer;
        line-height: 2;
    }
}
</style>


<template>
    <div class="invite">
        <div class="container">
            <div class="user-info flex">
                <img src="@/assets/images/default.png" alt="">
                <div>
                    <p>
                        <span class="name">逻辑</span>
                        <span>主治医师</span>
                    </p>
                    <p>北京大学第一附属医院</p>
                </div>
                
            </div>
            <div id="qrcode" class="flex flex-center"></div>
            <p class="tips">邀请您入驻畅享呼吸医生端在这里你可以开启自己的医生工作室为患者服务，还可以学习专业医学知识。</p>
        </div>
        
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'

export default {
    mounted() {
        this.qrcode();
    },
    methods: {
        qrcode() {
            let qrcode = new QRCode('qrcode', {
                width: 132,  
                height: 132,
                text: 'https://www.baidu.com', // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.invite {
    background: #e1edff;
    height: 100vh;
    padding: .8rem .9rem;
    box-sizing: border-box;
    .container {
        padding: 2rem;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        .user-info {
            img {
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 3rem;
                margin-right: .8rem;
            }
            p {
                font-size: 0.9rem;
                color: #a3a3a3;
                line-height: 1.6rem;
                .name {
                    font-size: 1rem;
                    margin-right: 1.8rem;
                }
                span {
                    color: #444;
                }
            }
        }
        #qrcode {
            margin-top: 3.6rem;
            margin-bottom: 2rem;
        }
        .tips {
            line-height: 1.6rem;
            line-height: 1.6rem;
            color: #444;
        }
    }
}
</style>

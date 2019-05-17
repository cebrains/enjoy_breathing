<template>
    <div class="invite-patients">
        <div class="card flex flex-column ">
            <p class="invite-code">邀请码： 25233</p>
            <div id="qrcode"></div>
            <div class="avatar">
                <img src="@/assets/images/default.png" alt="">
            </div>
            <div class="info">
                <p><span class="name">逻辑</span><span class="city">北京市</span></p>
                <p class="title">主治医师</p>
                <p>呼吸科 北京大学第一附属医院</p>
            </div>
        </div>
        <div class="btn-group flex space-between">
            <span class="button">分享</span>
            <span class="button">保存图片</span>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcodejs2'

export default {
    name: 'InvitePatients',
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
.invite-patients {
    padding: 1.5rem 3.6rem;
    height: 100vh;
    background: #f8f9fd;
    .card {
        background: #fff;
        padding: 2.8rem 0 1.8rem;
        .invite-code {
            margin: 0 1.6rem 2.8rem;
            font-size: 0.9rem;
            color: #0a9cf8;
        }
        .avatar {
            margin: 2rem 0 .8rem;
            img {
                width: 2.5rem;
	            height: 2.5rem;
                border-radius: 2rem;
            }
        }
        .info {
            text-align: center;
            p {
                line-height: 1.6rem;
                font-size: 0.9rem;
            }
            .name {
                font-size: 1.1rem;
                letter-spacing: 0.1rem;
                color: #383838;
                margin-right: .5rem;
            }
            .city {
                font-size: 0.9rem;
                color: #a3a3a3;
            }
        }
    }
    .btn-group {
        margin-top: 1.5rem;
        .button {
            width: 7.2rem;
            height: 2.2rem;
            line-height: 2.2rem;
            text-align: center;
            color: #fff;
            background-color: #0a9cf8;
            border-radius: 0.2rem;
        }
    }
}
</style>


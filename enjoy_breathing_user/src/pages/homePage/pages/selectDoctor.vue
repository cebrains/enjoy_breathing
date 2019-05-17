<template>
    <div class="select-doctor">
        <div class="top-bar">确认随访医生
            <span class="text-btn" @click="confirm()">确认</span>
        </div>
        <div class="container">
            <p class="title">选择TA作为随访医生？</p>
            <div class="card flex align-start" v-for="item in doctorList" :key="item.id">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="doctor-details">
                    <p>
                       <span class="name">{{item.name}}</span> 
                        <span class="city">{{item.city}}</span>
                        <span class="role">主治医师</span>
                    </p>
                    <p class="hospital">郑州大学第一附属医院</p>
                    <p class="desc">擅长：治疗慢性咳嗽，鼾症，发热性疾病，肺动脉高压，哮喘，肺癌，胸腔积液。</p>
                    <ul class="info-list flex">
                        <li>
                            <span class="star">5.0</span>
                        </li>
                        <li>9年从业</li>
                        <li>160次回复</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            doctorList: [{
                name: '逻辑',
                city: '郑州市',
            }]
        }
    },
    methods: {
        confirm() {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.select-doctor {
    height: 100vh;
    background: #f4f4f4;
    font-size: .8rem;
    .text-btn {
        color: #69b2fc;
    }
    .title {
        margin: .6rem 1rem;
        color: #393939;
        font-size: 0.9rem;
    }
    .card {
        margin: 0 1rem 1rem;
        padding: .6rem;
        background: #fff;
        box-shadow: 0rem 0rem 1.2rem 0rem rgba(173, 173, 173, 0.3);
        
    }
    .avatar {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 2rem;
        margin: .2rem 1rem .2rem 0;
    }
    .doctor-details {
        .name {
            font-size: 1rem;
        }
        .city  {
            color: #a4a4a4;
        }
        .role {
            color: #108cfb;
            margin-left: .4rem;
        }
        .hospital {
            color: #1a1a1a;
        }
        .desc {
            color: #7e7e7e;
        }
        .info-list {
            li {
                margin-right: 3.4rem;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: .4rem;
                    height: .4rem;
                    background: #45abff;
                    border-radius: .2rem;
                    top: calc(50% - 0.2rem);
                    left: -0.65rem;
                }
                &:first-child::before {
                    display: none;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
            .star {
                color: #ffbb44;
                font-size: .9rem;
            }
        }
    }
}

</style>


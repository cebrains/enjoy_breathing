<template>
    <div class="my-studio">
        <div class="container">
            <div class="header">
                <div class="doctor-info flex">
                    <img class="avatar" src="@/assets/images/default.png" alt="">
                    <div>
                        <div>
                            <span class="name">逻辑</span>
                            <span class="role">主治医师</span>
                        </div>
                        <div class="sub-text">
                            <span class="office">呼吸科</span>
                            <span class="hospital">郑州大学第一附属医院</span>
                        </div>
                    </div>
                </div>
                <p class="introduce">
                    擅长：治疗慢性咳嗽，鼾症，发热性疾病，肺动脉高压，哮喘，肺癌，胸腔积液。
                </p>
                <ul class="brief-card flex">
                    <li class="brief-item">
                        <span>评分：</span>
                        <span class="score">5.0</span>
                    </li>
                    <li class="brief-item">9年从业</li>
                    <li class="brief-item">160次回复</li>
                </ul>
            </div>
            <div class="tabs">
                <cube-tab-bar v-model="selectedLabel" show-slider>
                    <cube-tab v-for="label in tabs" :label="label" :key="label">
                    </cube-tab>
                </cube-tab-bar>
                <cube-tab-panels v-model="selectedLabel">
                    <cube-tab-panel label="医生动态">
                        <ul>
                            <li class="tab-panel-li doctor-activity flex flex-column align-start"
                                v-for="item in dataList" :key="item.id"
                                @click="handleClick(item)">
                                <p class="title">{{item.title}}</p>
                                <div class="flex align-start">
                                    <img class="avatar" src="@/assets/images/default.png" alt="">
                                    <div>
                                        <span class="name">{{item.userName}}</span>
                                        <p class="desc">{{item.desc}}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </cube-tab-panel>
                    <cube-tab-panel label="工作室成员">
                        <ul>
                            <li class="tab-panel-li my-studio-member flex " v-for="item in memberList" :key="item.id">
                                <img class="avatar" src="@/assets/images/default.png" alt="">
                                <div>
                                    <p>
                                        <span class="name">{{item.name}}</span>
                                        <span class="role">{{item.role}}</span>
                                    </p>
                                    <p class="hospital">郑州大学第一附属医院</p>
                                </div>
                            </li>
                        </ul>
                    </cube-tab-panel>
                </cube-tab-panels>
            </div>
        </div>
        <!-- <div class="footer" @click="$router.push('toInquiry')">
            立即咨询
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedLabel: '医生动态',
            tabs: ['医生动态','工作室成员'],
            dataList: [{
                title: '4个小时前回答了问题',
                desc: '医生您好!我的母亲，64岁持续咳嗽半个月，请问是怎么回事？',
                userName: '匿名用户',
                date: '2019-05-12'
            }, {
                title: '4个小时前回答了问题',
                desc: '医生您好!我的母亲，64岁持续咳嗽半个月，请问是怎么回事？',
                userName: '匿名用户',
                date: '2019-05-12'
            }],
            memberList: [{
                name: '罗辑',
                role: '主治医师'
            }, {
                name: '罗辑',
                role: '主治医师'
            }]
        }
    },
    created() {
        const studioInfo = JSON.parse(sessionStorage.getItem('studioInfo'))
        this.getMemberList(studioInfo.id);
        
    },
    methods: {
        getMemberList(id) {
            const params = {
                path: 'respiratory:findStudioMenbers',
                params: {
                    id,
                }
            }
            this.$api.polling(params).then(res => {
                this.memberList = res.items;
            })
        },
        handleClick(item) {
            console.log(item)
            this.$router.push('inquiryDetail')
        }
    }
}
</script>

<style lang="scss" scoped>
.my-studio {
    .header {
        position: relative;
        height: 12.8rem;
        padding: 2rem;
        box-sizing: border-box;
        background: url('../assets/images/bggzs.png') no-repeat;
        background-size: cover;
        .doctor-info {
            margin-bottom: .8rem;
            color: #fff;
            .avatar {
            	width: 3.3rem;
                height: 3.3rem;
                border-radius: 50%;
                margin-right: 1rem;
            }
            .name {
                font-size: 1.3rem;
                margin-right: 1.8rem;
            }
            .role {
                font-size: 0.8rem;
            }
            .sub-text {
                color: #c4d9ff;
                color: #c4d9ff;
            }
        }
        .introduce {
            line-height: 1.3rem;
            color: #d5f0ff;
        }
        .brief-card {
            position: absolute;
            left: 1.8rem;
            right: 1.8rem;
            height: 3.1rem;
            bottom: -1.6rem;
            background-color: #ffffff;
            color: #585858;
            box-shadow: 0rem 0.1rem 0.3rem 0rem 
                rgba(7, 161, 246, 0.15);
            border-radius: 0.2rem;
            font-size: 0.8rem;
            li {
                margin-right: 1.4rem;
                flex: 1;
                padding-left: .6rem;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: .4rem;
                    height: .4rem;
                    background: #1386fc;
                    border-radius: .2rem;
                    top: calc(50% - 0.2rem);
                    left: -0.2rem;
                }
                &:first-child::before {
                    display: none;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
            .score {
                color: #585858;
                font-size: 1.1rem;
            }
        }
    }
    .tabs {
        margin-top: 2.6rem;
        .tab-panel-li {
            padding: .6rem 1rem;
            border-bottom: 1px solid #f4f4f4;
        }
        .doctor-activity {
            .title {
                font-size: 0.7rem;
                color: #b3b3b3;
            }
            .avatar {
                margin: .1rem .4rem 0 0;
                width: 1.1rem;
                height: 1.1rem;
                border-radius: 1rem;
            }
            .name {
                color: #a3a3a3;
                font-size: 0.8rem;
            }
            .desc {
                font-size: 0.9rem;
                color: #585858;
            }
        }
        .my-studio-member {
            .avatar {
                width: 2.4rem;
                height: 2.4rem;
                border-radius: 1.2rem;
                margin-right: .4rem;
            }
            .name {
                font-size: 0.9rem;
                color: #383838;
            }
            .role {
                font-size: 0.8rem;
                color: #a3a3a3;
            }
            .hospital {
                font-size: 0.9rem;
                color: #585858;
            }
        }
    }
    .footer {
        background: #1386fc;
        color: #fff;
    }
}
</style>

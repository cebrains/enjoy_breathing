<template>
    <div>
        <div class="container">     
            <div class="home-page"> 
                <div class="header">
                    <div class="personal-info flex space-between">
                        <img class="avatar" src="@/assets/images/default.png" alt="">
                        <div class="info flex">
                            <p>更新时间 {{updateDate}}</p>
                            <img class="chart" @click="($router.push('/homePage/recordHistory'))" src="@/assets/images/chart.png" alt="">
                        </div>
                    </div>
                    <!-- 无设备 -->
                    <div v-if="bindStatus === '0'" class="no-device flex flex-column">
                        <p>+</p>
                        <p>暂无吹气数据</p>
                        <p>绑定设备同步测量数据</p>
                    </div>
                    <!-- 有设备未吹气 -->
                    <div v-if="bindStatus === '1'" class="no-device flex flex-column">
                        <p>+</p>
                        <p>对准气嘴吹气，即可查看呼吸数据</p>
                        <p>绑定设备同步测量数据</p>
                    </div>
                    <!-- 设备数据 -->
                    <ul v-if="bindStatus === '2'" class="record-list flex" @click="$router.push('/homePage/pulmonaryData')">
                        <li class="record-item">
                            <div class="record">
                                <p class="title">PEF L/min</p>
                                <p class="value">527</p>
                            </div>
                            <div class="sub-record-item">
                                <p class="title">PEF%</p>
                                <div class="sub-record">
                                    <span class="value">100.9</span>
                                    <span class="label">正常</span>
                                </div>
                            </div>
                        </li>
                        <li class="record-item">
                            <div class="record">
                                <p class="title">PEF L/min</p>
                                <p class="value">527</p>
                            </div>
                            <div class="sub-record-item">
                                <p class="title">PEF%</p>
                                <div class="sub-record">
                                    <span class="value">100.9</span>
                                    <span class="label">正常</span>
                                </div>
                            </div>
                        </li>
                        <li class="record-item">
                            <div class="record">
                                <p class="title">PEF L/min</p>
                                <p class="value">527</p>
                            </div>
                            <div class="sub-record-item">
                                <p class="title">PEF%</p>
                                <div class="sub-record">
                                    <span class="value">100.9</span>
                                    <span class="label">正常</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="doctor-card flex">
                        <div v-if="bindDoctor" class="flex" @click="$router.push('/homePage/studio')">
                            <img class="avatar" src="@/assets/images/default.png" alt="">
                            <div class="doctor-details">
                                <p>罗辑<span class="role">主治医师</span></p>
                                <p class="hospital">郑州大学第一附属医院</p>
                                <ul class="info-list flex">
                                    <li>
                                        <span class="star">5.0</span>
                                    </li>
                                    <li>9年从业</li>
                                    <li>160次回复</li>
                                </ul>
                            </div>
                        </div>
                        <div v-else class="no-bind-doctor" @click="$router.push('/homePage/selectDoctor')">
                            +
                        </div>
                    </div>
                </div>
                <ul class="menu-bar flex">
                    <li class="menu flex" @click="$router.push('/homePage/scaleAssessment')">
                        <img class="icon" src="@/assets/images/assess.png" alt="">
                        <div>
                            <p class="title">量表评估</p>
                            <p class="tips">辅助诊断治疗</p>
                        </div>
                    </li>
                    <li class="menu flex" @click="$router.push('/homePage/mall')">
                        <img class="icon" src="@/assets/images/shop.png" alt="">
                        <div>
                            <p class="title">设备在线商城</p>
                            <p class="tips">专科医生为您服务</p>
                        </div>
                    </li>
                </ul>
                <div class="tabs">
                    <cube-tab-bar v-model="selectedLabel" show-slider>
                        <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
                        </cube-tab>
                    </cube-tab-bar>
                    <cube-tab-panels v-model="selectedLabel">
                        <cube-tab-panel v-for="tab in tabs" :label="tab.label" :key="tab.label">
                        <ul>
                            <li class="tab-panel-li flex space-between" v-for="item in tab.data" :key="item.id">
                                <div>
                                    <p class="title">{{item.title}}</p>
                                    <p class="date">{{item.date}}</p>
                                </div>
                                <img class="image" src="@/assets/images/default.png" alt="">
                            </li>
                        </ul>
                        </cube-tab-panel>
                    </cube-tab-panels>
                </div>
            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            updateDate: '2月16日 09:13',
            selectedLabel: '健康科普',
            tabs: [{
                label: '健康科普',
                data: [{
                    title: '这些水果不甜但巨长胖！水果含糖的真相都在这了',
                    date: '2019-05-12'
                }, {
                    title: '这些水果不甜但巨长胖！水果含糖的真相都在这了',
                    date: '2019-05-12'
                }]
            }, {
                label: '医生动态',
                data: [{
                    title: '这些水果不甜但巨长胖！水果含糖的真相都在这了',
                    date: '2019-05-12'
                }]
            }],
            bindStatus: -1,
            bindDoctor: true
        }
    },
    created() {
        this.getDeviceBindStatus();
        // this.getLastTestData();
        // this.getPatientSystemSetting()
    },
    methods: {
        getPatientSystemSetting() {
            const httpParam = {
                path: 'respiratory_patient:findPatientSystemSetting',
                params: {
                    
                }
            }
            this.$api.polling(httpParam).then(res => {
                console.log(res)
            })
        },
        getLastTestData() {
            const httpParam = {
                path: 'respiratory_patient:findLastTestData',
                params: {
                    
                }
            }
            this.$api.polling(httpParam).then(res => {
                console.log(res)
            })
        },
        getDeviceBindStatus() {
            const httpParam = {
                path: 'device_test_data:findDeviceBindStatus',
                params: {
                    
                }
            }
            this.$api.polling(httpParam).then(res => {
                this.bindStatus = res.items.bind_satus;
            })
        }
    }
}
</script>

<style lang="scss">
.home-page {
    padding: 0 1rem;
    .header {
        .personal-info {
            height: 3.4rem;
            padding: 0 1rem;
            .avatar {
                width: 2.2rem;
                height: 2.2rem;
                border-radius: 1.1rem;
                box-shadow: 0rem 0rem 0.5rem 0rem rgba(150, 150, 150, 0.63);
            }
            .info {
                font-size: 0.8rem;
                color: #494949;
                .chart {
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-left: .4rem;
                }
            }
        }
    }
    .no-device {
        border: 1px dashed #e0e0e0;
        border-radius: .2rem;
        padding: .5rem 0 1.5rem;
        p:first-child {
            font-size: 2.8rem;
            line-height: 1;
            color: #1386fc;
        }
        p:last-child {
            color: #a3a3a3;
            font-size: .7rem;
        }
    }
    .record-list {
        .record-item {
            position: relative;
            flex: 1;
            padding: 0 .8rem;
            text-align: center;
            &::after {
                content: '';
                position: absolute;
                right: 0;
                top: 30%;
                bottom: 30%;
                width: 1px;
                border-left: 1px solid #333;
            }
            &:last-child::after {
                display: none;
            }
            .record {
                .title {
                    font-size: 0.8rem;
                    color: #585858;
                }
                .value {
                    font-size: 2.2rem;
                    color: #4d89ff;
                }
            }
            .sub-record-item {
                font-size: 0.6rem;
                color: #b7b7b7;
                .sub-record {
                    .label {
                        background-color: #04a6f3;
                        color: #fff;
                        font-size: 0.5rem;
                        padding: 0 .6rem;
                    }
                }
            }
        }
    }
    .doctor-card {
        height: 6.3rem;
        background-image: linear-gradient(90deg, 
            #4b88ff 0%, 
            #92b9ff 100%);
        border-radius: 0.5rem;
        margin-top: .8rem;
        .no-bind-doctor {
            width: 100%;
            font-size: 3.7rem;
            color: #fff;
            text-align: center;
            border-radius: 0.5rem;
        }
        .avatar {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 2rem;
            margin: 1rem;
        }
        .doctor-details {
            color: #fff;
            .role {
                color: #e1f3ff;
                font-size: .8rem;
                margin-left: .4rem;
            }
            .hospital {
                color: #e2f3ff;
                font-size: 0.8rem;
            }
            .info-list {
                font-size: 0.8rem;
                li {
                    margin-right: 1.4rem;
                    position: relative;
                    &::before {
                        content: '';
                        position: absolute;
                        width: .4rem;
                        height: .4rem;
                        background: #fff;
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
                    color: #ffcc73;
                }
            }
        }
    }
    .menu-bar {
        box-shadow: 0rem 0rem 0.4rem 0rem 
        rgba(0, 0, 0, 0.08);
        margin-top: .8rem;
        .menu {
            position: relative;
            padding: 1rem .6rem;
            flex: 1;
            &:first-child::after {
                content: '';
                position: absolute;
                width: 1px;
                display: inline-block;
                top: 1rem;
                bottom: 1rem;
                right: 0;
                background: #e8e8e8;
                opacity: .3;
            }
            .icon {
                height: 1.6rem;
                margin-right: 1rem;
            }
            .title {
                font-size: .8rem;
                color: #474447;
            }
            .tips {
                position: relative;
                color: #a3a3a3;
                font-size: .6rem;
                padding-left: .4rem;
                &::before {
                    content: '';
                    position: absolute;
                    width: .4rem;
                    height: .4rem;
                    background: #a3a3a3;
                    border-radius: .2rem;
                    top: calc(50% - 0.2rem);
                    left: -0.2rem;;
                }
            }
        }
    }
    .tabs {
        margin-top: 1.6rem;
        .tab-panel-li {
            border-bottom: 1px solid #f4f4f4;
            padding: 1.1rem 0;
            .image {
                width: 5.6rem;
                height: 4.7rem;
            }
            .title {
                color: #565656;
                font-size: .9rem;
                margin-bottom: 1.2rem;
            }
            .date {
                color: #bebebe;
                font-size: .7rem;
            }
        }
    }
}
</style>


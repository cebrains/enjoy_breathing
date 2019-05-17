<template>
    <div class="case-manage">
        <div class="top-bar">
            <span>病案管理</span>
            <!-- <span class="record" @click="$router.push('medicalRecord')">诊疗记录</span> -->
        </div>
        <div class="container">
            <div class="user-card">
                <div class="user-info flex">
                    <img class="avatar" src="@/assets/images/default.png" alt="">
                    <div>
                        <span class="name lh">李小小</span>
                        <div>
                            <span class="lh">男</span>
                            <span class="lh">北京</span>
                        </div>
                    </div>
                </div>
                <ul class="info-list flex space-around">
                    <li class="flex flex-column">
                        <span>{{user.age}}</span>
                        <span>年龄</span>
                    </li>
                    <li class="flex flex-column">
                        <span>{{user.weight}}</span>
                        <span>体重</span>
                    </li>
                    <li class="flex flex-column">
                        <span>{{user.height}}</span>
                        <span>身高</span>
                    </li>
                </ul>
                
                <span class="modify">编辑</span>
            </div>
            <div class="current-group flex space-between">
                <span>当前分组</span>
                <span class="group-name" @click="selectGroup()">哮喘分组 ></span>
            </div>
            <div class="record-pic user-card" @click="$router.push('recordPhoto')">
                <p class="title">案例档案照片</p>
                <div class="flex space-around">
                    <img class="pic" src="@/assets/images/default.png" alt="">
                    <img class="pic" src="@/assets/images/default.png" alt="">
                    <img class="pic" src="@/assets/images/default.png" alt="">
                </div>
            </div>
            <div class="report user-card" @click="$router.push('pulmonaryData')">
                <div class="title flex space-between">
                    <span>肺功能报告</span>
                    <span>测量于2019-02-27 18:02</span>
                </div>
                <report-list></report-list>
            </div>

            <div class="user-card medical-history">
                <p class="title">疾病情况</p>
                <ul>
                    <li class="flex space-between" v-for="item in medicalHistoryList" :key="item.id">
                        <span>{{item.label}}</span>
                        <span>{{item.value}}</span>
                    </li>
                </ul>
            </div>
            <div class="user-card">
                <p class="title">量表评估</p>
                <div class="phbo content flex space-between">
                    <div class="flex flex-column align-start">
                        <span class="title">CAT评分表</span>
                        <span class="date">最近评估：2019-03-22</span>
                    </div>
                    <span class="score">22分 ></span>
                </div>
                <div class="phbo content flex space-between">
                    <div class="flex flex-column align-start">
                        <span class="title">mMRC呼吸困难量表</span>
                        <span class="date">最近评估：2019-03-22</span>
                    </div>
                    <span class="score">22分 ></span>
                </div>
            </div>
        </div>

        <!-- <div class="contact flex flex-center" @click="contact()">
            联系患者
        </div>
        <cube-popup type="my-popup" position="bottom" :mask-closable="true"  ref="myPopup">
            <ul class="popup-list">
                <li class="pupuo-item flex flex-column ">
                    <img src="@/assets/images/default.png" alt="">
                    <span>诊疗建议</span>
                </li>
                <li class="pupuo-item flex flex-column">
                    <img src="@/assets/images/default.png" alt="">
                    <span>发送量表</span>
                </li>
                <li class="pupuo-item flex flex-column">
                    <img src="@/assets/images/default.png" alt="">
                    <span>复诊时间</span>
                </li>
                <li class="pupuo-item flex flex-column">
                    <img src="@/assets/images/default.png" alt="">
                    <span>知识库</span>
                </li>
                <li class="pupuo-item flex flex-column">
                    <img src="@/assets/images/default.png" alt="">
                    <span>用药提醒</span>
                </li>
            </ul>
        </cube-popup> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                age: 20,
                weight: 60,
                height: 170
            },
            medicalHistoryList: [{
                label: '疾病种类',
                value: '哮喘'
            }, {
                label: '吸烟史',
                value: '无'
            }, {
                label: '被动吸烟',
                value: '无'
            }, {
                label: '职业暴露',
                value: '无'
            }, {
                label: '疾病种类',
                value: '无'
            }],
            groupList: [{ text: '分组1', value: '分组1'}, { text: '分组2', value: '分组2' }, { text: '分组3', value: '分组3' }]
        }
    },
    methods: {
        selectGroup() {
            if (!this.picker) {
                this.picker = this.$createPicker({
                title: '选择分组',
                data: [this.groupList],
                onSelect: this.selectHandle
                })
            }
            this.picker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            console.log(selectedVal)
        },
        contact() {
            this.$refs.myPopup.show();
        }
    }
}
</script>

<style lang="scss" scoped>
.case-manage {
    min-height: 100vh;
    background: #f4f4f4;
    .top-bar {}
    .container {
        height: calc(100vh - 2.4rem - 2.8rem);
        overflow: auto;
        .user-card {
            position: relative;
            background: #fff;
            padding: .6rem 1.2rem;
            margin: .4rem 0;
            >.title {
                height: 1.9rem;
            }
            .user-info {
                .avatar {
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 1.1rem;
                    margin-right: .6rem;
                }
                span {
                    font-size: .8rem;
                }
                .name {
                    font-size: 0.9rem;
                }
            }
            .info-list {
                margin: 1rem 0;
                li span {
                    line-height: 1.6rem;
                }
            }
            .modify {
                position: absolute;
                right: 1rem;
                top: .8rem;
                font-size: .8rem;
                color: #1386fc;
            }
            .phbo {
                height: 3.1rem;
                .title {
                    font-size: .9rem
                }
                .date {
                    font-size: 0.7rem;
                    color: #a3a3a3;
                }
                .score {
                    font-size: .7rem;
                    color: #ff5959;
                }
            }
        }
        .current-group {
            height: 2.5rem;
            margin: .4rem 0;
            padding: 0 1rem;
            background: #fff;
        }
        .record-pic {
            background: #fff;
            .pic {
                width: 5.5rem;
                height: 3.9rem;
            }
        }
        .medical-history {
            .title {
                font-size: 0.9rem;
            }
            li {
                height: 2.5rem;
                font-size: 0.7rem;
            }
        }
    }
    .contact {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2.8rem;
        background: #1386fc;
        color: #fff;
        font-size: 0.9rem;
    }
    .lh {
        line-height: 1.6rem;
    }
    .popup-list {
        background: #fff;
        padding: 2rem 2rem 0;
        .pupuo-item {
            display: inline-block;
            text-align: center;
            width: 32%;
            margin-bottom: 2rem;
            img {
                width: 2.5rem;
                height: 2.5rem;
            }
            span {
                display: block;
            }
        }
    }
}
</style>



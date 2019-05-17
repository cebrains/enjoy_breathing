<template>
    <div class="doctor-home-page">
        <div v-if="studioInfoFlag === 1">
            <header class="doctor-home-page-header">
                <p class="user-title flex" @click="$router.push('myStudio')">
                    <span>{{studioInfo.studioName}} 的工作室</span>
                </p>
                <div class="header-card">
                    <div class="header-card-item info">
                        <div class="user-info">
                            <p class="user-name">HI, 李晓晓护士</p>
                            <p>
                                <span>问诊人数：{{dailySituation.inquiryNum}}人</span>
                                <span>新增患者：{{dailySituation.newPatientNum}}人</span>
                            </p>
                        </div>
                        <div class="income" @click="$router.push('personalAccounts')">
                            <p>{{dailySituation.todayIncome}}元</p>
                            <p>今日收入（元）</p>
                        </div>
                    </div>
                    <div class="header-card-item pending-reply">
                        <div class="reply-item" @click="handlePendingClick('consultation')">
                            <span>{{dailySituation.toReplyConsultationNum}}</span>
                            <span>待回复问诊</span>
                        </div>
                        <div class="reply-item" @click="handlePendingClick('followUp')">
                            <span>{{dailySituation.toReplyFloowUpVisitNum}}</span>
                            <span>待回复随访</span>
                        </div>
                    </div>
                </div>
            </header>
            <div class="function-list">
                <div class="function-item studio" @click="$router.push('studio')">
                    <img class="function-icon" src="@/assets/images/work.png" alt="">
                    <span>工作室</span>
                </div>
                <div class="function-item studio" @click="$router.push('mall')">
                    <img class="function-icon" src="@/assets/images/facility.png" alt="">
                    <span>设备出售</span>
                </div>
                <div class="function-item studio" @click="$router.push('invitePatients')">
                    <img class="function-icon" src="@/assets/images/member.png" alt="">
                    <span>邀请患者</span>
                </div>
                <div class="function-item studio" @click="$router.push('patientList')">
                    <img class="function-icon" src="@/assets/images/patient.png" alt="">
                    <span>患者管理</span>
                </div>
            </div>
            <div class="industry-news-container">
                <h4 class="industry-news-title">行业动态</h4>
                <div class="industry-news">
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                    <div class="news-item">
                        <img class="news-img" src="https://org.modao.cc/uploads4/images/3316/33162689/v2_pq3cw9.png" alt="">
                        <p class="news-title">2019年第29届呼吸学会（ERS)年会</p>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div v-else-if="studioInfoFlag === 0" class="container">
            <h2 class="item title">你还没有工作室</h2>
            <p class="item">一分钟创建，立即线上接诊</p>
            <cube-button class="item" @click="$router.push('editStudio')">创建医生工作室</cube-button>
            <p class="join-btn">加入已有工作室</p>
        </div>

        <div class="footer">
            <div class="footer-item" @click="handleClick('')" :class="{active: currentPath === ''}">
                <img class="icon" :src="!currentPath ? require('@/assets/images/home.png') : require('@/assets/images/home1.png')" alt="">
                <span>首页</span>
            </div>
            <div class="footer-item disabled" disabled  @click="handleClick('course')">
                <img class="icon" src="@/assets/images/default.png" alt="">
                <span>课程</span>
            </div>
            <div class="footer-item"  @click="handleClick('my')" :class="{active: currentPath === 'my'}">
                <img class="icon" :src="currentPath === 'my' ? require('@/assets/images/mine.png') : require('@/assets/images/mine1.png')" alt="">
                <span>我的</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homePage',
    data() {
        return {
            currentPath: '',
            tabLabel: {
                followUp: '患者随访',
                consultation: '问诊咨询'
            },
            studioInfoFlag: -1,
            dailySituation: {},
            studioInfo: {}
        }
    },
    created() {
        const studioInfo = JSON.parse(sessionStorage.getItem('studioInfo'))
        this.studioInfo = studioInfo;
        if (studioInfo) {
            this.studioInfoFlag = studioInfo.id ? 1 : 0;
        }
        this.getStudioInfo();
        this.getStudioDailySituation();
    },
    methods: {
        getStudioDailySituation() {
            const params = {
                path: 'respiratory:findStudioDailySituation',
                params: {}
            }
            this.$api.polling(params).then(res => {
                this.dailySituation = res.items;
            })
        },
        getStudioInfo() {
            const toast = this.$createToast({
                txt: 'Loading...',
                mask: true,
                time: 0
            })
            toast.show()
            const params = {
                path: "respiratory:findDoctorStudio",
                params: {}
            }
            this.$api.polling(params).then(res => {
                toast.hide()
                const studioInfo = res.items;
                this.studioInfoFlag = studioInfo.id ? 1 : 0;
                if (!studioInfo.profiles) {
                    studioInfo.profiles = '';
                }
                sessionStorage.setItem('studioInfo', JSON.stringify(studioInfo))
            })
        },
        handleClick(path) {
            if (path === 'course') {
                const toast = this.$createToast({
                    time: 1000,
                    type: 'txt',
                    txt: '暂未开放'
                })
                toast.show()
                return;
            }
            this.currentPath = path;
            this.$router.push(path)
        },
        handlePendingClick(label) {
            this.$router.push(`pendingReply?label=${this.tabLabel[label]}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.doctor-home-page {
    background: #f8f9fb;
    height: calc(100vh - 3.1rem);
    overflow: scroll;
    padding-bottom: 2rem;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >.item {
            color: #585858;
            font-size: .9rem;
            margin: 1rem 0;
            &.cube-btn {
                width: 13.1rem;
                color: #fff;
            }
            &.title {
                font-size: 1.3rem;
            }
        }
        .join-btn {
            margin-top: 14rem;
            color: #0a9cf8;
        }
    }
    .doctor-home-page-header {
        position: relative;
	    height: 12rem;
        padding: 3.2rem 0.9rem 0;
        box-sizing: border-box;
        background-image: linear-gradient(231deg,#6787f8 0%,#2890ff 100%);
        background: url('../../assets/images/bggzs.png') no-repeat;
        background-size: cover;
        .user-title {
            position: relative;
	        font-size: 1.3rem;
            font-weight: normal;
            font-stretch: normal;
            color: #d7e6ff;
            span {
                position: relative;
                line-height: 1.6rem;
                &::after {
                    width: .6rem;
                    height: .6rem;
                    display: inline-block;
                    content: '';
                    position: absolute;
                    right: -1rem;
                    top: .36rem;
                    border-top: 2px solid #d7e6ff;
                    border-right: 2px solid #d7e6ff;
                    transform: rotate(45deg)
                }
            }
        }
        .header-card {
            position: absolute;
            left: 0.9rem;
            right: 0.9rem;
            bottom: -25%;
            height: 9.2rem;
            display: flex;
            flex-direction: column;
            .header-card-item {
                display: flex;
                justify-content: space-between;
                .user-info {
                    p {
                        font-size: 0.9rem;
                        color: #b3cefd;
                        &:last-child {
                            font-size: 0.7rem;
                        }
                    }
                    .user-name {
                        margin-bottom: .3rem;
                    }
                }
                .income {
                    color: #fff;
                    P {
                        font-size: 1.7rem;
                        &:last-child {
                            font-size: 0.9rem;
                            margin-top: .3rem;
                        }
                    }
                }
            }
            .info {
                align-items: flex-end;
                padding-bottom: 1rem;
            }
            .pending-reply {
                display: flex;
                height: 4.7rem;
                justify-content: center;
                align-items: center;
                background: #fff;
                box-shadow: 1px 0px 4px 1px rgba(194, 194, 194, 0.61);
                border-radius: 0.1rem;
                .reply-item {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.9rem;
                    color: #1e1e1e;
                    &:first-child {
                        border-right: 1px solid #e0e0e0;
                    }
                    span:first-child {
                        color: #2c2c2c;
                    }
                }
            }
        }
    }
    .function-list {
        display: flex;
        justify-content: space-around;
        padding: 4.2rem 0 1rem;
        display: flex;
        background: #fff;
        font-size: 0.8rem;
        .function-item {
            height: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            color: #727272;
        }
        .function-icon {
            height: 1.7rem;
        }
    }
    .industry-news-container {
        padding: 1.2rem;
    }

    .industry-news-title {
        color: #2a2a2a;
        font-size: 0.9rem;
        margin: 0 .6rem .6rem;
    }
    .industry-news {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .news-item {
                min-width: 48%;
                max-width: 100%;
                flex: 1;
                margin: 0 1% .8rem;
            .news-img {
                width: 100%;
	            height: 6.8rem;
            }
            .news-title {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 0.9rem;
                font-weight: 500;
                line-height: 1.1rem;
            }
        }
    }
}
</style>

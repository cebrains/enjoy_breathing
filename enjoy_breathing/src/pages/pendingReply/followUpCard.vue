<template>
    <div class="follow-up-card">
        <div class="header flex space-between">
            <div class="flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="text-info flex flex-column align-start">
                    <p>{{followUpData.personName}}</p>
                    <p>
                        <span>{{followUpData.followUpDate}}</span>
                        <span class="record-text">{{followUpData.followUpType === '2' ? '你填写了评估量表' : '邀您填写评估量表'}}</span>
                    </p>
                </div>
            </div>
            <span class="state-text unread">{{followUpData.readStatus === '1' ? '已读' : '未读'}}</span>
        </div>
        <ul v-if="followUpData.followUpType === '1'" class="content flex">
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">PEF(L/min)</span>
                    <span class="record-value">{{followUpData.labDetails.pef || '--'}}</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">PEF%</span>
                    <span class="record-value">{{followUpData.labDetails.pefPercent || '--'}}</span>
                </div>
            </li>
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">FEV1(L)</span>
                    <span class="record-value">{{followUpData.labDetails.fev1 || '--'}}</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">FEV1%</span>
                    <span class="record-value">{{followUpData.labDetails.fev1Percent || '--'}}</span>
                </div>
            </li>
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">FVC(L)</span>
                    <span class="record-value">{{followUpData.labDetails.fvc || '--'}}</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">FEV1/FVC</span>
                    <span class="record-value">{{(followUpData.labDetails.fev1/followUpData.labDetails.fvc).toFixed(2)*100 + '%'}}</span>
                </div>
            </li>
        </ul>
        <div v-else-if="followUpData.followUpType === '2'" class="cat content flex space-between">
            <span>{{followUpData.questionnaireDetails ? followUpData.questionnaireDetails.questionnaireName : ''}}</span>
            <span>{{followUpData.questionnaireDetails ? followUpData.questionnaireDetails.questionnaireScore : ''}}分</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        followUpData: {
            type: Object,
            default() {
                return {
                   
                }
            }
        }
    },
    created() {
        if (!this.followUpData.labDetails) {
            this.followUpData.labDetails = {
                pef: '',
                pefPercent: '',
                fev1: '',
                fev1Percent: '',
                fvc: ''
            }
        }
        console.log()
    },
}
</script>

<style lang="scss">
    .follow-up-card {
        background: #fff;
        margin: .8rem 0;
        .header {
            padding: .4rem;
            border-bottom: 1px solid #CECDCD;
            font-size: .8rem;
            .avatar {
                width: 2rem;
                height: 2rem;
                border-radius: 2rem;
                margin-right: .6rem;
            }
            .text-info {
                p {
                    line-height: 1.5;
                }
            }
            .state-text {
            }
            .unread {
                color: #FF585E;
            }
            .record-text {
                color: #888;
            }
        }
        .content {
            padding: 1rem .4rem;
            .record-item {
                flex: 1;
                .record-value {
                    line-height: 2;
                }
                &:first-child {
                    .record-value {
                        color: #F7856A;
                    }
                }
                &:nth-child(2) {
                    .record-value {
                        color: #FF9800;
                    }
                }
                &:nth-child(3) {
                    .record-value {
                        color: #20BCAE;
                    }
                }
            }
        }
        .cat {
            padding: 1rem 2rem;
        }
    }
</style>


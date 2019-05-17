<template>
    <ul class="inquiry-list">
        <li class="inquiry-card" v-for="item in inquiryList" :key="item.id" @click="$emit('handleClick', item)">
            <p class="type" :class="{voice: item.serviceType === '2'}">{{serviceType[item.serviceType - 1]}}</p>
            <div class="user flex">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div class="flex flex-column align-start">
                    <span class="name">{{item.name}}</span>
                    <span class="date">提交于{{item.billDate}}</span>
                </div>
            </div>
            <div class="content">
                病情描述：{{item.symptomDescribe}}
            </div>
            <div class="foot flex space-between">
                <div class="state">
                    <p v-if="item.replyStatus === '0'">
                        <span class="state-text">待回复</span>
                        <span>请在23小时34分钟内回复</span>
                    </p>
                    <p v-else>
                        <span class="state-text">已回复</span>
                        <span>用时34分钟</span>
                    </p>
                </div>
                <div class="income">
                    <span v-if="item.replyStatus === '0'">预计收入：{{item.servicePrice}}</span>
                    <span v-else>已获得收入：{{item.servicePrice}}</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'inquiry-list',
    data() {
        return {
            serviceType: ['图文', '语音']
        }
    },
    props: {
        inquiryList: {
            type: Array,
            default() {
                return [{
                    name: '',
                    date: '',
                    description: '',
                    type: '图文',
                    income: '',
                }]
            }
        }
        
    }
}
</script>

<style lang="scss">
.inquiry-list {
    font-size: .9rem;
    .inquiry-card {
        position: relative;
        padding: .8rem 1.2rem;
        background: #fff;
        margin: .4rem 0;
        .type {
            position: absolute;
            top: 0;
            right: 2rem;
            width: 1.2rem;
            height: 2.4rem;
            word-wrap: break-word;
            font-size: 0.7rem;
            color: #fff;
            text-align: center;
            line-height: 1.1rem;
            background-image: linear-gradient(0deg, 
                #04a9f4 0%, 
                #167efe 100%);
        }
        .content {
            line-height: 1.1rem;
        }
        .user {
            margin-bottom: .8rem;
            .avatar {
                width: 1.7rem;
                height: 1.7rem;
                border-radius: 1.7rem;
                margin-right: .6rem;
            }
            .name {
                font-size: 0.8rem;
            }
            .date {
                font-size: 0.7rem;
                color: #a3a3a3;
            }
        }
        .foot {
            margin-top: .4rem;
            .state {
                color: #a3a3a3;
                font-size: .7rem;
                .state-text {
                    font-size: 0.9rem;
                    color: #108efa;
                }
            }
            .income {
                color: #fea635;
            }
        }
    }
}
</style>


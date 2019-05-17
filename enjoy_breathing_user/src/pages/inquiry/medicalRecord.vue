<template>
    <div class="medical-record">
        <div class="record-header">
            诊疗记录
        </div>
        <div class="container">
            <div class="header flex flex-column align-start space-around">
                <div class="flex">
                    <img class="avatar" src="@/assets/images/default.png" alt="">
                    <p>逻辑医生的工作室</p>
                </div>
                <ul class="flex">
                    <li class="label" v-for="(item, i) in typeList" :key="i"
                        :class="{active: currentLabel === i}"
                        @click="handleLabelClick(i)">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="view-wrapper">
                <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
                    <!-- tombstone 的作用域插槽 slot-scope 必须声明 -->
                    <template slot="tombstone" slot-scope="props">
                        <div class="item tombstone">
                            <div class="avatar"></div>
                            <div class="bubble">
                            <p></p>
                            <p></p>
                            <p></p>
                            <div class="meta">
                                <time class="posted-date"></time>
                            </div>
                            </div>
                        </div>
                    </template>
                    <template slot="item" slot-scope="{ data }">
                        <p>{{ data.followUpDate }}</p>
                        <!-- followUpType === '1' , 用户上传肺功能数据 -->
                        <div v-if="data.followUpType === '1'" class="item-wrapper">
                            <div :id="data.id" class="item" :class="{isUser: data.personType === '2'}">
                                <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || 'https://org.modao.cc/uploads4/images/3208/32085710/v2_porhs1.png') + ')'}"></div>
                                <div class="bubble"  @click="handleClick(data)">
                                    <report-list :data="data.labDetails"></report-list>
                                </div>
                            </div>
                        </div>
                        <!-- followUpType === '2' , 问卷 -->
                        <div v-if="data.followUpType === '2'" class="item-wrapper">
                            <div :id="data.id" class="item" :class="{isUser: data.personType === '2'}">
                                <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || 'https://org.modao.cc/uploads4/images/3208/32085710/v2_porhs1.png') + ')'}"></div>
                                <div class="bubble"  @click="handleClick(data)">
                                    <p>你填写了评估量表</p>
                                    <p>
                                        <p>{{data.questionnaireDetails ? data.questionnaireDetails.questionnaireName : ''}}</p>
                                        <p>{{data.questionnaireDetails ? data.questionnaireDetails.questionnaireScore  : ''}}</p>
                                    </p>
                                    <div class="meta">
                                        <time class="posted-date">{{ data.time }}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- followUpType === '3' , 咨询 -->
                        <div v-if="data.followUpType === '3'" class="item-wrapper">
                            <div :id="data.id" class="item" :class="{isUser: data.personType === '2'}">
                                <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || 'https://org.modao.cc/uploads4/images/3208/32085710/v2_porhs1.png') + ')'}"></div>
                                <div class="bubble"  @click="handleClick(data)">
                                    <p>你发起了咨询</p>
                                    <p>
                                       症状描述症状描述症状描述症状描述症状描述症状描述症状描…
                                    </p>
                                    <div class="meta">
                                        <span>咳嗽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- <div slot="spinner">Loading Data</div> -->
                    <!-- <div slot="noMore">没有更多数据了</div> -->
                </cube-recycle-list>
            </div>
        </div>
        <app-footer></app-footer>
        <span class="fix-btn" @click="toInquiry($event)">问</span>
    </div>
</template>

<script>
import Mock from './message.js'

const AVATAR_LENGTH = 6
export default {
    data() {
        return {
            initTime: new Date().getTime(),
            id: 0,
            size: 50,
            offset: 100,
            infinite: false,
            currentLabel: 0,
            typeList: ['全部', '量表', '数据', '咨询']
        }
    },
    created() {
    },
    methods: {
        getItem() {
            const httpParam = {
                path: 'respiratory:findClinicServiceDetail',
                params: {
                    studioId: '1',
                    patientId: '1'
                }
            }
            return this.$api.polling(httpParam)
        },
        onFetch() {
            return new Promise((resolve) => {
                let items = [];
                this.getItem().then(res => {
                    items = res.items;
                    items.forEach(obj => {
                        if (obj.followUpType === '1' && !obj.labDetails) {
                            obj.labDetails = {
                                pef: '',
                                pefPercent: '',
                                fev1: '',
                                fev1Percent: '',
                                fvc: ''
                            }
                        }
                    })
                    resolve(items)
                })
            })
        },
        handleClick(data) {
            console.log(data)
            this.$router.push('assessmentScale')
        },
        handleLabelClick(i) {
            this.currentLabel = i;
        },
        toInquiry(e) {
            this.$router.push('/homePage/toInquiry');
        }
    }
}
</script>

<style lang="scss" scoped>
.medical-record {
    height: 100vh;
    background-color: #7caaff;
    padding-top: .4rem;
    box-sizing: border-box;
    .record-header {
        height: 3.5rem;
        text-align: center;
        line-height: 4;
        color: #fff;
    }
    .container {
        background: #f8f9fd;
        border-radius: 1.3rem 1.3rem 0rem 0rem;
        padding: 1rem;
        box-sizing: border-box;
        height: calc(100vh - 7.2rem);
        .header {
            height: 3.5rem;
            font-size: 0.9rem;
            .avatar {
                width: 1.8rem;
                height: 1.8rem;
                border-radius: .9rem;
                margin-right: .6rem;
            }
            .label {
                height: 0.9rem;
                line-height: .9rem;
                border-radius: 1rem;
                font-size: 0.6rem;
                background-color: #fff;
                color: #1386fc;
                border: 1px solid #1386fc;
                padding: 0rem .4rem;
                margin-right: .4rem;
                &.active {
                    background-color: #1386fc;
                    color: #fff;
                }
            }
        }
    }
    .view-wrapper {
        height: calc(100% - 3.5rem);
        .list {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            padding: 0;
            list-style-type: none;
            text-align: center;
            .item-wrapper {
                width: 100%;
            }
            .item {
                display: flex;
                justify-content: space-between;
                padding: 1rem;
                width: 100%;
                text-align: left;
                box-sizing: border-box;
                .bubble {
                    padding: .4rem .8rem;
                    color: #333;
                    background: #fff;
                    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1);
                    position: relative;
                    width: 22rem;
                    margin: 0 1rem 0 1rem;
                    &:before {
                        content: '';
                        border-style: solid;
                        border-width: 12px 12px 12px 12px;
                        border-color: transparent #fff transparent transparent;
                        position: absolute;
                        top: 12px;
                        left: -22px;
                    }
                }
                &.isUser {
                    flex-direction: row-reverse;
                    .bubble {
                        &:before {
                            content: '';
                            border-style: solid;
                            border-width: 12px 12px 12px 12px;
                            border-color: transparent transparent transparent #fff ;
                            position: absolute;
                            top: 12px;
                            right: -22px;
                            left: unset;
                        }
                    }
                }
                .avatar {
                    border-radius: 50%;
                    min-width: 3rem;
                    width: 3rem;
                    height: 3rem;
                    background-size: cover;
                    outline: none;
                }
                p {
                    margin: 0;
                    word-wrap: break-word;
                    font-size: 14px;
                }
                &.tombstone {
                    p {
                        width: 100%;
                        height: 0.5em;
                        background-color: #ccc;
                        margin: 0.5em 0;
                    }
                }
                
                .meta {
                    font-size: 0.8rem;
                    color: #999;
                    margin-top: 3px;
                }
            }
        }
    }
    .fix-btn {
        position: fixed;
        bottom: 4.5rem;
        right: 1.7rem;
        width: 2.3rem;
        height: 2.3rem;
        background-image: linear-gradient(-37deg, #92b9ff 0%, #4b88ff 100%);
        box-shadow: 0rem 0.1rem 0.8rem 0rem rgba(4, 85, 236, 0.31);
        text-align: center;
        color: #fff;
        line-height: 2.3rem;
        border-radius: 2rem;
    }
}
</style>


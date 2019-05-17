<template>
    <div class="medical-record">
        <div class="top-bar flex">
            <img class="avatar" src="@/assets/images/default.png" alt="">
            <span>患者A   29岁  男</span>
        </div>
        <div class="view-wrapper">
            <cube-recycle-list class="list" :size="size" :offset="offset"  :on-fetch="onFetch">
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
</template>

<script>
import Mock from './message.js'

const AVATAR_LENGTH = 6
export default {
    data() {
        return {
            initTime: new Date().getTime(),
            id: 0,
            size: 10,
            offset: 100,
            infinite: true
        }
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
            return this.$api.polling(httpParam);
        },
        onFetch() {
            let items = []
            return new Promise((resolve) => {
                
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
        }
    }
}
</script>

<style lang="scss" scoped>
.medical-record {
    height: 100vh;
    background: #f8f9fd;
    padding-top: .4rem;
    box-sizing: border-box;
    .top-bar {
        height: 2.5rem;
        background-color: #fff;
        padding: 0 1.2rem;
        .avatar {
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 1rem;
            margin-right: .5rem;
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
}
</style>


<template>
    <div class="pending-reply">
        <cube-tab-bar v-model="selectedLabel" show-slider @change="handleTabClick">
            <cube-tab  label="患者随访">
                <p slot='default' class="tab-label">患者随访 <span v-if="followUpNum" class="badge">{{followUpNum}}</span> </p>
            </cube-tab>
            <cube-tab  label="问诊咨询">
                <p slot='default' class="tab-label">问诊咨询 <span  v-if="inquiryNum" class="badge">{{inquiryNum}}</span> </p>
            </cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="selectedLabel">
            <cube-tab-panel label="患者随访">
                <ul>
                    <li class="tab-panel-li" v-for="item in followUpList" :key="item.label" @click="handleClick(item)">
                        <follow-up-card :followUpData="item"></follow-up-card>
                    </li>
                </ul>
            </cube-tab-panel>
            <cube-tab-panel  label="问诊咨询">
                <inquiry-list :inquiryList="inquiryList" @handleClick="handleInquiryClick"></inquiry-list>
            </cube-tab-panel>
            
        </cube-tab-panels>
    </div>
</template>

<script>
import followUpCard from './followUpCard.vue';
import inquiryList from './inquiryList.vue';

export default {
    data() {
        return {
            inquiryNum: 0,
            followUpNum: 0,
            tabLabel: {
                followUp: '患者随访',
                consultation: '问诊咨询'
            },
            selectedLabel: '患者随访',
            followUpList: [],
            inquiryList: []
        }
    },
    created() {
        this.selectedLabel = this.$route.query.label;
        this.getFollowUpList();
        this.getInquiryList();
    },
    watch: {
        '$route.query'(newVal,oldVal) {
            this.selectedLabel = newVal.label;
        }
    },
    components: {
        followUpCard,
        inquiryList
    },
    methods: {
        getFollowUpList() {
            const toast = this.$createToast({
                txt: 'Loading...',
                mask: true,
                time: 0
            })
            toast.show()
            const params = {
                path: 'respiratory:findStudioFollowUpList',
                params: {
                    id: '1'
                }
            }
            this.$api.polling(params).then(res => {
                this.followUpList = res.items;
                toast.hide()
            })
        },
        getInquiryList() {
            const params = {
                path: 'respiratory:findConsultationByService',
                params: {
                    id: '1'
                }
            }
            
            this.$api.polling(params).then(res => {
                this.inquiryList = res.items;
            })
            
        },
        handleClick(item) {
            this.$router.push({
                path: 'medicalRecord',
                query: item
            })
        },
        handleInquiryClick(item) {
            this.$router.push({
                path: 'inquiryDetail'
            })
            localStorage.setItem('inquiryDetail', JSON.stringify(item))
        },
        handleTabClick(label) {
            this.$router.push({
                path: '',
                query: {
                    label
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.pending-reply {
    background: #EDEDED;
    height: 100vh;
    .cube-tab-bar {
        background: #fff;
        height: 3rem;
    }
    .cube-tab-panels {
        height: calc(100% - 3rem);
        overflow: scroll;
    }
    .tab-label {
        position: relative;
        padding: .6rem 0;
        .badge {
            position: absolute;
            top: -0.03rem;
        }
    }
}
.badge {
    background: red;
    display: inline-block;
    color: #fff;
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    border-radius: 1rem;
    font-size: .7rem;
}
</style>


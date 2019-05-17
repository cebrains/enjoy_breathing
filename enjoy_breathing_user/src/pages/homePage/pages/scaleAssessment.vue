<template>
    <div class="scale-assessment">
        <div class="top-bar">量表评估</div>
        <p class="title">请根据医生建议选择对应的量表，并尽可能如实回答，这将有助于诊断与治疗</p>
        <ul class="list">
            <li class="item flex space-between" v-for="item in dataList" :key="item.id" @click="$router.push('assessResult')">
                <p>{{item.text}}</p>
                <p class="flex">
                    <span class="value" v-if="item.value">{{item.value}}</span>
                    <span class="non-value" v-else>未评估</span>
                    <span class="icon"></span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [{
                text: '慢阻肺综合评估',
                value: 'A组'
            }, {
                text: 'ACT哮喘控制测试',
                value: '22分'
            }, {
                text: 'Epworth嗜睡量表',
                value: ''
            }]
        }
    }
}
</script>

<style lang="scss">
.scale-assessment {
    height: 100vh;
    background: #f4f4f4;
    .title {
        padding: .6rem 1.2rem;
        font-size: 0.9rem;
        line-height: 1.1rem;
        color: #a3a3a3;
    }
    .list {
        .item {
            height: 2.5rem;
            background-color: #fff;
            padding: 0 1rem 0 1.7rem;
            p, span {
                line-height: 1rem;
            }
            .value {
                font-size: 0.8rem;
                color: #1386fc;
            }
            .non-value {
                font-size: 0.8rem;
                color: #a3a3a3;
            }
            .icon {
                display: inline-block;
                width: 1rem;
                height: 1.6rem;
                margin-left: .4rem;
                background: url('../../../assets/images/arrow_right.png') center center  no-repeat;
                background-size: cover;
            }
        }
    }
}
</style>


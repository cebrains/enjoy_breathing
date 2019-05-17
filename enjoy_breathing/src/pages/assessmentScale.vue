<template>
    <div class="assessment-scale">
        <div class="top-bar flex flex-center">
            评估结果
            <span class="history" @click="$router.push('scaleHistory')">查看历史</span>
        </div>
        <div class="header flex space-between">
            <div class="flex flex-column align-start">
                <span class="title">ACQ-5（哮喘控制问卷）</span>
                <span class="date">最近评估：2019-03-22</span>
            </div>
            <span class="score">5分</span>
        </div>
        <div>
            <ul class="scale-list" v-for="(scale, index) in dataList" :key="scale.id">
                <li class="scale-item">
                    <p class="title">{{index + 1}}.{{scale.title}}? ({{scale.score}}) ({{scale.answer}})</p>
                    <div class="answer-list">
                        <p class="answer-item" v-for="(item, i) in scale.answerList" :key="item.id">
                            {{ANSWER_OPTIONS[i]}}. {{item}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [{
                title: '平均有多少次因哮喘在夜间醒来？',
                score: '1分',
                answer: 'a,b',
                answerList: ['从来没有', '几乎没有', '少数几次', '有几次', '许多次', '绝大多数时间', '无法入睡']
            }, {
                title: '平均有多少次因哮喘在夜间醒来？',
                score: '1分',
                answer: 'a,b',
                answerList: ['从来没有', '几乎没有', '少数几次', '有几次', '许多次', '绝大多数时间', '无法入睡']
            }],
            ANSWER_OPTIONS: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        }
    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
.assessment-scale {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        position: relative;
        height: 2.8rem;
        background: #fff;
        margin-bottom: .4rem;
        font-size: 1rem;
        color: #383838;
        .history {
            position: absolute;
            right: 1rem;
            font-size: .8rem;
        }
    }
    .header {
        height: 3.1rem;
        background: #fff;
        padding: 0 1.4rem;
        margin-bottom: 1px;
        .title {
            font-size: 1rem;
            color: #383838;
        }
        .date {
            font-size: .8rem;
            color: #a3a3a3;
        }
        .score {
            color: #1386fc;
        }
    }
    .scale-list {
        background: #fff;
        margin-bottom: 1px;
        .scale-item {
            padding: .8rem 1rem;
            .answer-list {
                padding: 1rem 1.8rem;
                font-size: 0.8rem;
                color: #a3a3a3;
            }
        }
    }
}
</style>


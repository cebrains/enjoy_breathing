<template>
    <div class="pulmonary-data">
        <div class="top-bar">
            肺功能数据
            <p class="text-btn">历史记录</p>
        </div>
        <div class="container">
            <div class="data-details">
                <div class="details-title flex space-between">
                    <p>测试时间  2019-03-24  9：00</p>
                </div>
                <div id="chart"></div>
                <report-list></report-list>
            </div>
            <div class="reply-content">
                <p class="title">医生回复</p>
                <ul class="reply-list">
                    <li class="reply-item">
                        <div class="doctor-info flex">
                            <img class="avatar" src="@/assets/images/default.png" alt="">
                            <div class="text-info">
                                <p>
                                    <span class="name">逻辑</span>
                                    <span class="role">主治医师</span>
                                </p>
                                <p class="hospital">郑州第一大学附属医院</p>
                            </div>
                        </div>
                        <div class="content">
                            现有病人某人经我院某科检查确诊患有某种疾病需入院治疗或停止工作多长时间以配合治疗，
                        </div>
                    </li>
                    <li class="reply-item">
                        <div class="doctor-info flex">
                            <img class="avatar" src="@/assets/images/default.png" alt="">
                            <div class="text-info">
                                <p>
                                    <span class="name">逻辑</span>
                                    <span class="role">主治医师</span>
                                </p>
                                <p class="hospital">郑州第一大学附属医院</p>
                            </div>
                        </div>
                        <div class="content">
                            现有病人某人经我院某科检查确诊患有某种疾病需入院治疗或停止工作多长时间以配合治疗，
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer" @click="$router.push('toInquiry')">咨询医生</div>
    </div>
</template>

<script>
import echarts from 'echarts'

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.createChart()
    },
    methods: {
        createChart() {
            const option = {
                color: ['#ffa619', '#3953fe'],
                title: {
                    subtext: '(L/min)'
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['1','2','3','4','5']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value}'
                        }
                    }
                ],
                series : [
                    {
                        type:'line',
                        data:[0, 221, 150, 100, 0],
                        markLine : {
                            data : [{
                                    name: 'Y 轴值为 100 的水平线',
                                    yAxis: 100,
                                    label : {
                                        formatter: 'PEF最佳值',
                                        position: 'end'
                                    }
                                },]
                        }
                    },
                    {
                        type:'line',
                        smooth: true,
                        data:[1, 160, 110, 85, 0],
                        markPoint : {
                            data : [
                                {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        areaStyle: {}
                    }
                ]
            };
            const myChart = echarts.init(document.getElementById('chart'));
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
.pulmonary-data {
    color: #383838;
    background: #f4f4f4;
    height: 100vh;
    .container {
        height: calc(100vh - 6.6rem);
    }
    .top-bar {
        .text-btn {
            position: absolute;
            right: .8rem;
            color: #a3a3a3;
            font-size: 0.9rem;
        }
    }
    .patient-bar {
        margin: .3rem 0;
        height: 2.5rem;
        background: #fff;
    }
    .data-details {
        background: #fff;
        .details-title {
            font-size: .8rem;
            color: #a3a3a3;
            padding: 0 1.4rem;
        }
        #chart {
            width: 100%;
            height: 16rem;
        }
    }
    .reply-content {
        .title {
            height: 1.9rem;
            line-height: 1.9rem;
            font-size: 0.9rem;
            margin-bottom: .2rem;
            background: #fff;
            padding: 0 1.3rem;
        }
        .reply-list {
            background: #fff;
            padding: 0 1.3rem 1.5rem;
            .reply-item {
                .doctor-info {
                    font-size: .8rem;
                    color: #a3a3a3;
                    .text-info>p {
                        line-height: 1.1rem;
                    }
                    .avatar {
                        width: 1.8rem;
	                    height: 1.8rem;
                        border-radius: 50%;
                        margin-right: .4rem;
                    }
                    .name {
                        font-size: .9rem;
                        color: #383838;
                    }
                }
                .content {
                    color: #585858;
                    font-size: .8rem;
                    line-height: 1.1rem;
                }
            }
        }
    }
    .footer {
        color: #fff;
        font-size: 0.9rem;
        background: #1386fc;
        padding: 0;
        height: 2.7rem;
    }
}
</style>


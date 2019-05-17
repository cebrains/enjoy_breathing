<template>
    <div class="record-history">
        <div class="top-bar">历史数据</div>
        <div class="container">
            <div class="chart-container">
                <p class="date">测试时间  2019-03-24  9：00</p>
                <div id="historyChart"></div>
            </div>
            <div class="report-list-item">
                <p class="title">3-22  10:33</p>
                <report-list></report-list>
            </div>
            <div class="report-list-item">
                <p class="title">3-21  11:33</p>
                <report-list></report-list>
            </div>
            
        </div>
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
        this.createChart();
    },
    methods: {
        createChart() {
            const option = {
                color: ['#ffa619', '#3953fe'],
                title: {
                    subtext: '(L/min)'
                },
                grid: {
                    
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
                                        position: 'middle'
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
            const myChart = echarts.init(document.getElementById('historyChart'));
            myChart.setOption(option);
        }
    }
}
</script>

<style lang="scss" scoped>
.record-history {
    min-height: 100vh;
    background: #f4f4f4;
    .chart-container {
        background: #fff;
        #historyChart {
            width: 100%;
            height: 16rem;
        }
        .date {
            font-size: 0.9rem;
            color: #a3a3a3;
            padding-left: 1.6rem;
        }
    }
    .report-list-item {
        margin-top: 1rem;
        .title {
            color: #585858;
            font-size: .8rem;
            padding-left: 1.6rem;
        }
        .follow-up-card {
            margin: 0;
            .content {
                padding: 0;
            }
        }
    }
}
</style>

<template>
    <div class="scale-history">
        <div class="top-bar">
            历史记录
        </div>
        <div class="table">
            <ul class="table-th flex">
                <li class="table-th-item">评估时间</li>
                <li class="table-th-item">量表类型</li>
                <li class="table-th-item">分值</li>
            </ul>
            <ul class="table-td">
                <li class="table-td-item flex" v-for="item in tableData" :key="item.id">
                    <span v-for="data in item" :key="data.id">{{data}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2019-03-12',
                type: 'ACQ',
                score: '5分'
            }, {
                date: '2019-03-12',
                type: 'ACQ',
                score: '5分'
            }, {
                date: '2019-03-12',
                type: 'ACQ',
                score: '5分'
            }, {
                date: '2019-03-12',
                type: 'ACQ',
                score: '5分'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.scale-history {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        height: 2.5rem;
        line-height: 2.5rem;
        background-color: #fff;
        margin-bottom: .6rem;
        text-align: center;
        font-size: 1rem;
    }
    .table {
        text-align: center;
        background-color: #fff;
        padding: 1rem;
        .table-th-item {
            flex: 1;
            height: 2.2rem;
        }
        .table-td-item {
            height: 2.2rem;
            span {
                flex: 1;
            }
        }
    }
}
</style>

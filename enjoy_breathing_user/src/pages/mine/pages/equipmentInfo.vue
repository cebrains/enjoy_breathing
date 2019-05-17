<template>
    <div class="equipment-info">
        <div class="top-bar">
            设备管理
            <span class="text-btn">添加</span>
        </div>
        <div class="container">
            <div class="equipment flex space-between">
                <div class="flex">
                    <img class="equipment-image" src="" alt="">
                    <div>
                        <p class="name">手持肺功能仪A1.2</p>
                        <p class="num">设备编号  A41455555</p>
                    </div>
                </div>
                <span class="label">SIM续卡</span>
            </div>
            <div class="content">
                <p class="title">当前绑定患者</p>
                <ul class="list">
                    <li class="item flex" v-for="item in dataList" :key="item.id">    
                        <img class="avatar" src="@/assets/images/default.png" alt="">
                        <div>
                            <p>{{item.name}}</p>
                            <p class="info">
                                <span>性别：{{item.sex}}</span>
                                <span>{{item.age}}}岁</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [{
                name: '李晓晓',
                sex: '男',
                age: '29'
            }, {
                name: '李晓晓',
                sex: '男',
                age: '29'
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.equipment-info {
    height: 100vh;
    background: #f4f4f4;
    .equipment {
        background: #fff;
        padding: .5rem 2.4rem .5rem 0;
        margin-bottom: .8rem;
        .equipment-image {
            width: 3.3rem;
            height: 3.3rem;
            background-color: #ffc532;
            margin: 0 .4rem 0 .8rem;
        }
        .name {
            font-size: .9rem;
            color: #585858;
        }
        .num {
            font-size: .8rem;
            color: #a3a3a3;
        }
        .label {
            border-radius: .6rem;
            border: solid 1px #5a92ff;
            padding: .15rem .45rem;
            line-height: 1;
        }
    }
    .content {
        .title {
            padding: .3rem .8rem;
            font-size: 0.8rem;
            color: #a3a3a3;
        }
        .list {
            background: #fff;
            .item {
                padding: .8rem 1.2rem;
                color: #383838;
                border-bottom: 1px solid #e0e0e0;
                .avatar {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    margin-right: .6rem;
                }
                .info {
                    font-size: 0.7rem;
                    color: #a3a3a3;
                }
            }
        }
    }
}
</style>


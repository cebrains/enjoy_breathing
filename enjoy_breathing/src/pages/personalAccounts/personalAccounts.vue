<template>
    <div class="personal-accounts">
        <div class="header flex">
            <div class="account-balance">
                <p>账户余额（元）</p>
                <p>2456.25</p>
            </div>
            <span class="button">提现</span>
        </div>
        <div class="record-tabs">
            <cube-tab-bar v-model="selectedLabel" show-slider>
                <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
                </cube-tab>
            </cube-tab-bar>
            <cube-tab-panels v-model="selectedLabel">
                <cube-tab-panel v-for="(item) in tabs" :label="item.label" :key="item.label">
                <ul>
                    <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
                        <div class="record-list flex space-between">
                            <div class="flex flex-column align-start">
                                <span class="record-item">设备出售分成</span>
                                <span class="record-item">2019-03-21 08:55</span>
                            </div>
                            <div>
                                + ¥16.00
                            </div>
                        </div>
                    </li>
                </ul>
                </cube-tab-panel>
            </cube-tab-panels>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalAccounts',
    data() {
        return {
            selectedLabel: '收入记录',
                tabs: [{
                label: '收入记录',
                heroes: ['敌法师', '卓尔游侠']
            }, {
                label: '提现记录',
                heroes: ['血魔', '影魔', '剃刀']
            }]
        }
    },
}
</script>

<style lang="scss" >
.personal-accounts {
    height: 100vh;
    background: #f4f4f4;
    .header {
        position: relative;
        background: #0d93f9;
        color: #fff;
        height: 12rem;
        .account-balance {
            padding-left: 2rem;
            font-size: 1.1rem;
            p {
                margin-bottom: .4rem;
                line-height: 1.6rem;
                font-size: 0.9rem;
            }
            p:last-child {
                font-size: 1.9rem;
                font-weight: 500;
            }
        }
        span.button {
            position: absolute;
            bottom: 1.1rem;
            right: 1.8rem;
            display: inline-block;
            padding: 0.34rem 1.2rem;
            border: 1px solid #fff;
            border-radius: 1.2rem;
        }
    }
    .record-tabs {
        .cube-tab-bar {
            padding: 1.2rem 3.6rem .6rem;
            .cube-tab_active {
                color: #1386fc;
            }
            .cube-tab-bar-slider {
                background-color: #1386fc;
            }
        }
        .cube-tab-panels {
            background: #fff;
            .cube-tab-panel {
                padding: 1.2rem;
                box-sizing: border-box;
                .record-list {
                    padding: .2rem 0;
                    border-bottom: 1px solid #eee;
                    .record-item {
                        line-height: 1.8;
                    }
                }
                .tab-panel-li:last-child {
                    .record-list {
                        border-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>

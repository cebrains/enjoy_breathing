<template>
    <div class="follow-up-card">
        <ul class="content flex">
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">PEF(L/min)</span>
                    <span class="record-value">259</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">PEF%</span>
                    <span class="record-value">46%</span>
                </div>
            </li>
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">FEV1(L)</span>
                    <span class="record-value">2.83</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">FEV1%</span>
                    <span class="record-value">72%</span>
                </div>
            </li>
            <li class="record-item">
                <div class="flex flex-column">
                    <span class="record-unit">FVC(L)</span>
                    <span class="record-value">3.03</span>
                </div>
                <div class="flex flex-column">
                    <span class="record-unit">FEV1/FVC</span>
                    <span class="record-value">88%</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: {
        type: {
            type: String,
            default: 'data'
        }
    }
}
</script>

<style lang="scss">
    .follow-up-card {
        background: #fff;
        margin: .8rem 0;
        .header {
            padding: .4rem;
            border-bottom: 1px solid #CECDCD;
            font-size: .8rem;
            .avatar {
                width: 2rem;
                height: 2rem;
                border-radius: 2rem;
                margin-right: .6rem;
            }
            .text-info {
                p {
                    line-height: 1.5;
                }
            }
            .state-text {
            }
            .unread {
                color: #FF585E;
            }
            .record-text {
                color: #888;
            }
        }
        .content {
            padding: 1rem .4rem;
            .record-item {
                flex: 1;
                .record-value {
                    line-height: 2;
                    font-size: 1.6rem;
                }
                &:first-child {
                    .record-value {
                        color: #F7856A;
                    }
                }
                &:nth-child(2) {
                    .record-value {
                        color: #FF9800;
                    }
                }
                &:nth-child(3) {
                    .record-value {
                        color: #20BCAE;
                    }
                }
                .record-unit {
                    font-size: 0.8rem;
                }
            }
        }
        .cat {
            padding: 1rem 2rem;
        }
    }
</style>


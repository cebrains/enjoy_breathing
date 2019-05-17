<template>
    <div class="select-patien">
        <div class="top-bar">患者信息</div>
        <div class="container">
            <p class="title">选择患者信息</p>
            <p class="subtitle">以便医生给出更准确的治疗，仅医生可见</p>
            <ul class="patien-list">
                <li class="patien-item flex" v-for="item in patienList" :key="item.id" @click="handleSelect(item)"
                    :class="{active: currentId === item.id}">
                    <img class="preview" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p class="name">{{item.name}}</p>
                        <p class="num">
                            <span>性别：{{item.sex}}</span>
                            <span>年龄：{{item.age}}</span>
                        </p>
                        <p class="owner">档案完善度{{item.degree}}</p>
                    </div>
                    <!-- <img class="icon" src="@/assets/images/arrow_right.png" alt=""> -->
                    <span class="label">{{item.relation}}</span>
                </li>
            </ul>
            <div class="add">
                <span>+</span>
                <p>添加患者</p>
            </div>
        </div>
        <div class="footer" @click="handleNext()">下一步</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            patienList: [{
                id: '1',
                name: '李名言',
                age: '29',
                sex: '男',
                degree: '40%',
                relation: '父亲'
            }, {
                id: '2',
                name: '李名言',
                age: '29',
                sex: '男',
                degree: '40%',
                relation: '父亲'
            }],
            currentId: '',
        }
    },
    methods: {
        handleSelect(item) {
            this.currentId = item.id
        },
        handleNext() {
            this.$router.push({
                path: 'inquiryPay'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.select-patien {
    padding: 0 .8rem;
    .subtitle {
        font-size: .8rem;
        color: #a3a3a3;
    }
    .container {
        height: calc(100vh - 6.9rem);
    }
    .patien-list {
        .patien-item {
            position: relative;
            padding: .6rem 1rem;
            margin-bottom: .4rem;
            background: #fff;
            font-size: 0.8rem;
            color: #a3a3a3;
            border: 1px solid #e0e0e0;
            &.active {
                border-color: #5c93ff;
                color: #5c93ff;
                .name, .label {
                    color: #5c93ff;
                }
            }
            p {
                line-height: 1.2rem;
            }
            img.preview {
                width: 3.3rem;
                height: 3.3rem;
                margin-right: 1rem;
            }
            .icon {
                height: 1.6rem;
                position: absolute;
                right: 1rem;
            }
            .name {
                line-height: 1.6rem;
                font-size: 0.9rem;
                color: #585858;
            }
            .label {
                font-size: 0.8rem;
                color: #a3a3a3;
                position: absolute;
                right: 1rem;
                top: .4rem;
            }
        }
    }
    .add {
        text-align: center;
        border: 1px solid #e0e0e0;
        padding: .6rem;
        margin-top: 1rem;
    }
    .footer {
        background: #5c93ff;
        color: #fff;
    }
}
</style>


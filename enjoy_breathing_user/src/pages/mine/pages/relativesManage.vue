
<template>
    <div class="relatives-manage">
        <div class="top-bar">亲友管理</div>
        <div class="container">
            <ul class="">
                <li class="relatives flex">
                    <img class="preview" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p class="name">李名言</p>
                        <p class="num">
                            <span>性别：男</span>
                            <span>年龄：29</span>
                        </p>
                        <p class="owner">档案完善度40%</p>
                    </div>
                    <img class="icon" src="@/assets/images/arrow_right.png" alt="">
                    <span class="label">父亲</span>
                </li>
                <li class="relatives flex">
                    <img class="preview" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p class="name">李名言</p>
                        <p class="num">
                            <span>性别：男</span>
                            <span>年龄：29</span>
                        </p>
                        <p class="owner">档案完善度40%</p>
                    </div>
                    <img class="icon" src="@/assets/images/arrow_right.png" alt="">
                    <span class="label">父亲</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.relatives-manage {
    background: #f4f4f4;
    .container {
        .relatives {
            position: relative;
            padding: .6rem 1rem;
            margin-bottom: .4rem;
            background: #fff;
            font-size: 0.8rem;
            color: #a3a3a3;
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
}
</style>


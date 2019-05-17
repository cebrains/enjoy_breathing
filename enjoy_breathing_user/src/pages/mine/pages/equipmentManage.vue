<template>
    <div class="equipment-manage">
        <div class="top-bar">设备管理</div>
        <div class="container">
            <ul class="">
                <li class="equipment flex" @click="$router.push('/mine/equipmentInfo')">
                    <img class="preview" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p class="name">手持肺功能仪A1.2</p>
                        <p class="num">设备编号  A41455555</p>
                        <p class="owner">绑定患者：李大大</p>
                    </div>
                    <img class="icon" src="@/assets/images/arrow_right.png" alt="">
                </li>
                <li class="equipment flex">
                    <img class="preview" src="@/assets/images/default.png" alt="">
                    <div class="flex flex-column align-start">
                        <p class="name">手持肺功能仪A1.2</p>
                        <p class="num">设备编号  A41455555</p>
                        <p class="owner">绑定患者：李大大</p>
                    </div>
                    <img class="icon" src="@/assets/images/arrow_right.png" alt="">
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
.equipment-manage {
    background: #f4f4f4;
    .container {
        .equipment {
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
        }
    }
}
</style>


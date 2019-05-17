<template>
    <div class="disease-types">
        <div class="wrapper">
            <h2 class="title">请选择患者疾病类型</h2>
            <p class="subtitle">后续可在档案中修改</p>
            <div class="checkbox-list">
                <cube-checkbox-group v-model="checkList" :options="options" />
            </div>
        </div>
        <div class="footer" @click="handleNext()">完成</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkList: ['1'],
            options: [{
                label: '哮喘',
                value: '1',
            }, {
                label: '慢阻肺',
                value: '2',
            }, {
                label: '肺癌',
                value: '3',
            }, {
                label: '其他',
                value: '4',
            }]
        }
    },
    methods: {
        handleNext() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('./loginStep.scss');
.disease-types {

}
</style>


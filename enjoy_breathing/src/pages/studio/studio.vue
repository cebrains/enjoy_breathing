<template>
    <div class="user-studio">
        <div class="top-bar">工作室设置</div>
        <ul class="user-studio-list">
            <li class="studio-item flex space-between" @click="$router.push('editStudio')">
                <span>编辑工作室信息</span>
                <img class="icon" src="@/assets/images/arrow_r.png" alt="">
            </li>
            <li class="studio-item flex space-between" @click="$router.push('memberManage')">
                <span>成员管理</span>
                <img class="icon" src="@/assets/images/arrow_r.png" alt="">
            </li>
            <li class="studio-item flex space-between" @click="$router.push('inquiryPrice')">
                <span>问诊价格</span>
                <img class="icon" src="@/assets/images/arrow_r.png" alt="">
            </li>
            <li class="studio-item flex space-between">
                <span>开始接诊</span>
                <cube-switch v-model="value" @input="handleInput"></cube-switch>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: false,
            studioId: '',
            initFlag: false
        }
    },
    created() {
        this.initFlag = false;
        this.getStudioInfo();
    },
    methods: {
        handleInput(value) {
            if (this.initFlag) {
                const params = {
                    path: 'respiratory:updateStudioClinicStatus',
                    params: {
                        id: this.studioId,
                        clinicStatus: value ? '1' : '0',
                    }
                }
                this.$api.polling(params).then(res => {
                    
                })
            }
        },
        getStudioInfo() {
            // const toast = this.$createToast({
            //     txt: 'Loading...',
            //     mask: true,
            //     time: 0
            // })
            // toast.show()
            const params = {
                path: "respiratory:findDoctorStudio",
                params: {}
            }
            this.$api.polling(params).then(res => {
                //toast.hide()
                const studioInfo = res.items;
                this.studioId = studioInfo.id;
                this.value = studioInfo.clinicStatus === '1' ? true : false;
                sessionStorage.setItem('studioInfo', JSON.stringify(studioInfo))
                this.initFlag = true;
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.user-studio {
    height: 100vh;
    background: #f4f4f4;
    .user-studio-list {
        background: #fff;
        .studio-item {
            padding: 0 1.2rem;
            height: 2.5rem;
            border-bottom: 1px solid #e6e6e6;
            .icon {
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
    .cube-switch-ui {
        height: 0.9rem;
    }
}
</style>


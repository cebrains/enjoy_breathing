<template>
    <div class="info-bar flex">
        <div class="flex">
            <img class="avatar" src="@/assets/images/default.png" alt="">
            <div>
                <p>
                    <span>{{info.name}}</span>
                    <span>{{info.role}}</span>
                </p>
                <p>{{info.hospital}}</p>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'infoBar',
    props: {
        info: {
            type: Object,
            default() {
                return {
                    name: '',
                    role: '',
                    hospital: ''
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.info-bar {
    background: #fff;
    height: 3.8rem;
    .avatar {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 50%;
        margin-right: .6rem;
    }
}
</style>


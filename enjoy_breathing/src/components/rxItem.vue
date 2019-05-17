<template>
    <div class="rx-item flex space-between">
        <span class="label">{{label}}</span>
        <div class="rx-item-content flex">
            <span v-if="value" @click="$emit('onClick')">{{value}}</span>
            <span v-else @click="$emit('onClick')">{{placeholder}}</span>
            <img class="icon" v-if="showIcon" :src="require('@/assets/images/arrow_r.png')" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'rxItem',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '请输入',
        },
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '@/assets/images/arrow_r.png',
        },
        showIcon: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss">
.rx-item {
    border-bottom: 1px solid #bbb;
    padding: .6rem .4rem .6rem 0;
    span {
        margin-right: .4rem;
        text-align: right;
        outline: none;
        color: #585858;
        font-size: 0.9rem;
    }
    .icon {
        width: .9rem;
        height: .9rem;
    }
}
</style>

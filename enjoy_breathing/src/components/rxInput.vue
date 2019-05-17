<template>
    <div class="rx-input flex space-between">
        <span v-if="label" class="label">{{label}}</span>
        <div class="rx-input-content flex space-between">
            <slot name="prefix"></slot>
            <input :type="type" :style="styleObject" :placeholder="placeholder" :value="value" @input="$emit('input',$event.target.value)" @focus="$emit('onFocus')">
            <img class="icon" v-if="showIcon" :src="require('@/assets/images/arrow_r.png')" alt="">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rxInput',
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
        },
        styleObject: {
            type: Object,
            default() {
                return {};
            }
        }
    },
}
</script>

<style lang="scss">
.rx-input {
    border-bottom: 1px solid #e0e0e0 ;
    padding: .6rem .4rem .6rem 0;
    input {
        text-align: left;
        outline: none;
        padding-left: .6rem;
        min-width: 50%;
    }
    .icon {
        width: .9rem;
        height: .9rem;
    }
    .rx-input-content {
        width: 100%;
        span {
            word-break: keep-all;
        }
    }
}
</style>

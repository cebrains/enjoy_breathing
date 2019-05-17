<template>
    <div class="rx-checker flex space-between">
        <div class="rx-checker-content flex space-between">
            <slot name="prefix"></slot>
            <cube-checker v-model="value" :options="options" type="radio" />
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rxInput',
    computed: {
        value: {
            get() {},
            set(val) {
                console.log(val)
                this.$emit('check', val)
                return this.checkerValue;
            }
        }
    },
    props: {
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        checkerValue: {
            type: String,
            default: '请输入',
        }
    },
}
</script>

<style lang="scss">
.rx-checker {
    border-bottom: 1px solid #e0e0e0 ;
    padding: .6rem .4rem .6rem 0;
    .cube-checker-item {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        padding: 0;
        font-size: 0.8rem;
        &::after {
            border-radius: 50%;
        }
    }
    .rx-checker-content {
        width: 100%;
    }
}
</style>

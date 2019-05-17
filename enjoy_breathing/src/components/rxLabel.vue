<template>
    <div class="rx-label">
        <span v-for="(item, index) in labelList" :key="item.id" class="label">
            {{item}}
            <i class="close" @click="close(index)">——</i>
        </span>
        <span class="label add-label" v-if="isEdit">
            <input type="text" @keyup.enter="add()" v-model="addValue">
            <i class="close" @click="isEdit=false">——</i>
        </span>
        <span class="text-btn" v-else @click="isEdit = true">+ 添加标签</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEdit: false,
            addValue: '',
        }
    },
    computed: {
        list: {
            get() {

            },
            set() {
                return this.labelList;
            }
        }
    },
    props: ['labelList'],
    methods: {
        handleClick() {
            
        },
        add() {
            this.labelList.push(this.addValue);
            this.addValue = '';
            this.isEdit = false;
        },
        close(index) {
            this.addValue = '';
            this.labelList.splice(index, 1);
        }
    }
}
</script>

<style lang="scss" scoped>
.rx-label {
    .label {
        position: relative;
        background-color: #1386fc;
        border-radius: 1rem;
        padding: .25rem .6rem;
        font-size: 0.7rem;
        color: #fff;
        margin-right: .8rem;
        white-space: nowrap;
        .close {
            position: absolute;
            width: .8rem;
            height: .8rem;
            line-height: .8rem;
            text-align: center;
            border-radius: 50%;
            background-color: #f2302f;
            color: #fff;
        }
    }
    .add-label {
        background-color: #eee;
        input {
            width: 3.8rem;
        }
    }
    .text-btn {
        font-size: 0.7rem;
        color: #4299fd;
        margin-left: .6rem;
        white-space: nowrap;
    }
}
</style>


<template>
    <div class="test">
        <div class="scroll-list-wrap">
            <cube-scroll
                ref="scroll"
                :data="items">
            </cube-scroll>
        </div>
        <cube-scroll
            ref="scroll"
            :data="items"
            direction="horizontal"
            class="horizontal-scroll-list-wrap">
            <ul class="list-wrapper">
                <li v-for="item in items" class="list-item">{{ item }}</li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]
export default {
    data() {
        return {
            items: _data,
        }
    },
    computed: {
        options() {
            return {
                // scrollbar: this.scrollbarObj,
                // startY: this.startY
            }
        },
        scrollbarObj: function() {
            return this.scrollbar ? { fade: this.scrollbarFade } : false
        }
    },
    created() {
        this.$api.test();
        console.log(this.$route)
    }
}
</script>

<style lang="scss">
.scroll-list-wrap {
    height: 350px
}

.horizontal-scroll-list-wrap {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    .cube-scroll-content {
        display: inline-block;
    }
  .list-wrapper {

      padding: 0 10px;
      line-height: 60px;
      white-space: nowrap;
  }
  .list-item {
      display: inline-block;
  }
}
</style>

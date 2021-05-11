<template>
  <div>
    <button class="btn"
            :type="htmlType"
            :class="btnClass"
            :disabled="disabled"
            @click="handleClick">
      <!-- @slot 按钮的内容 -->
      <slot />
      <!-- @slot 按钮的图标 -->
      <slot name="icon" />
    </button>
    <span>demo 测试</span>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: {
    /**
     * 按钮主题，有效值：
     */
    theme: {
      type: String,
      required: true
    },
    /**
     * 启用outline样式
     */
    outline: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮大小，有效值：lg sm
     */
    size: {
      type: String,
      default: ''
    },

    block: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮类型，有效值：button submit reset
     */
    htmlType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    handleClick (e) {
      /**
       * 单击事件
       * @type {Event}
       */
      this.$emit('click', e)
      return 1
    },
    btnClass () {
      return {
        [`btn-${this.theme}`]: !!this.theme && !this.outline,
        [`btn-outline-${this.theme}`]: this.outline,
        [`btn-${this.size}`]: !!this.size,
        'btn-block': this.block
      }
    }
  },
  methods: {
    /**
     * 单击事件
     * @param {Event} e
     * @public
     */
    handlerTest (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
</style>

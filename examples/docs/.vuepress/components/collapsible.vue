<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <slot></slot>
      </div>
      <div class="code-content"
           v-highlight
           style="height: 0;">
        <div class="code-content-height">
          <pre><code class="vue" >{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code"
           @click="showCode(0)"
           ref="xxx">
        <!-- <w-icon class="icon-down"
                :name="isShow[0] === false ? 'down' : 'up'"></w-icon> -->
        <i class="icon-down"
           :class="isShow[0]===false?'bt-icon-below-s':'bt-icon-top-s'"></i>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
 
<script>
import mixin from '../mixins/collapsible'
export default {
  name: 'demo',
  mixins: [mixin],
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    codeStr: {
      type: String,
      default: ''
    }
  }
}
</script>
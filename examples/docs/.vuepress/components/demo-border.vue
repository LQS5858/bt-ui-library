<template>
  <div class="demo-block-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "demo-border",
  data () {
    return {
    };
  }
}
</script>
<style lang="styl" scoped>
.demo-block-wrap {
  border: 1px solid #ebebeb;
}
</style>
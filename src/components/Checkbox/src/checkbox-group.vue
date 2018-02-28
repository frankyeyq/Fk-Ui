<template>
  <div class="fk-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'fk-checkbox-group',
    componentName: 'fk-checkbox-group',
    data() {
      return {
      }
    },
    props: {
      value: [Array]
    }
  }
</script>

<style scoped>

</style>
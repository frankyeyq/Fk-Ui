<template>
  <div class="fk-carousel-item" ref="item">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'

  export default {
    name: 'fk-carousel-item',
    componentName: 'fk-carousel-item',
    mixins: [Emitter],
    
    mounted() {
      this.dispatch('fk-carousel', 'addItem', this.$refs.item)
    }
    
  }
</script>

<style scoped>

</style>
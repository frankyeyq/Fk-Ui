<template>
  <form class="fk-form">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'fk-form',
    componentName: 'fk-form',
    data() {
      return {

      }
    },
    provide() {
      return {
        fkForm: this
      }
    },
    props: {
      labelWidth: String,
      rules: Object
    },
    created() {
      this.$on('addField', (field) => {
        console.log(field);
      })
    },
    mounted() {
    }
  }
</script>

<style scoped>
@import '../../../style/components/form.css';
</style>
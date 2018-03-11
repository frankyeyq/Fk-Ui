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
        fields: []
      }
    },
    provide() {
      return {
        fkForm: this
      }
    },
    props: {
      labelWidth: String,
      rules: Object,
      model: Object
    },
    methods: {
      validate(callback) {
        let result = this.fields.map(item => {
          return item.validate();
        });
        var validated = !result.some(item => item === false);
        callback(validated);
      }
    },
    created() {
      this.$on('addField', (field) => {
        this.fields.push(field);
      })
    },
    mounted() {
    }
  }
</script>

<style>
@import '../../../style/components/form.css';
</style>
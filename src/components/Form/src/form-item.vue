<template>
  <div class="fk-form-itme">
    <label 
      class="fk-form-item-label" 
      :class="[{
        'is-required' : required
      }]"
      :style="labelStyle">
      {{label}}
    </label>
    <div 
      class="fk-form-item-content"
      :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'
  export default {
    name: 'fk-form-item',
    componentName: 'fk-form-item',
    mixins: [Emitter],
    data() {
      return {
        rule: Array
      }
    },
    inject: ['fkForm'],
    computed: {
      labelStyle() {
        return {width: this.labelWidth || this.fkForm.labelWidth};
      },
      contentStyle() {
        return {marginLeft: this.labelWidth || this.fkForm.labelWidth};
      },
      getRules() {
        return this.fkForm.rules;
      }
    },
    methods: {
      validate() {

      }
    },
    props: {
      label: String,
      labelWidth: String,
      required: Boolean,
      prop: String
    },
    mounted() {
      if(this.prop) {
        this.dispatch('fk-form', 'addField', this);
        console.log(this.getRules[this.prop]);
      }
    }
  }
</script>

<style scoped>
@import '../../../style/components/form.css';
</style>
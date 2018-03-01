<template>
  <div class="fk-form-itme"
    :class="[{
      'is-error': validateState === 'error',
      'is-success': validateState === 'success'
    }]">
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
      <div v-show="validateState === 'error'" class="fk-form-item-error">
        {{validateMessage}}
      </div>
    </div>
  </div>
</template>

<script>
  import Emitter from '../../../mixins/emitter'
  import AsyncValidator from 'async-validator'
  
  export default {
    name: 'fk-form-item',
    componentName: 'fk-form-item',
    mixins: [Emitter],
    data() {
      return {
        rule: Array,
        validateState: String,
        validateMessage: String,
        itemValue: {}
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
        this.itemValue = this.fkForm.model[this.prop];
        if (!this.getRules[this.prop]) {
          return;
        }
        var descriptor = {
          [this.prop]: this.getRules[this.prop]
        }
        let validateValue = {
          [this.prop]: this.itemValue
        }
        var validator = new AsyncValidator(descriptor);
        validator.validate(validateValue, (errors, fields) => {
          this.validateState = errors ? 'error' : 'success';
          this.validateMessage = errors ? errors[0].message : '';
        });
      },
      validateFromField() {
        this.validate();
      },
      fieldBlur() {
        if (this.getTrigger() === 'blur') {
          this.validate();
        }
      },
      getTrigger() {
        let triggerName = '';
        this.getRules[this.prop].forEach(item => {
          if(item.trigger && !triggerName) {
            triggerName = item.trigger;
          }
        });
        return triggerName;
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
        this.$on('validateFromField', this.validateFromField);
        this.$on('fieldBlur', this.fieldBlur);
      }
    }
  }
</script>

<style>
@import '../../../style/components/form.css';
</style>
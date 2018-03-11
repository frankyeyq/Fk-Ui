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
      <div v-if="validateState === 'error'" class="fk-form-item-error">
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
        let res = false;
        this.itemValue = this.fkForm.model[this.prop];
        console.log(this.itemValue);
        if (!this.getRules[this.prop]) {
          return true;
        }
        var descriptor = {
          [this.prop]: this.getRules[this.prop]
        }
        let validateValue = {
          [this.prop]: this.itemValue
        }
        var validator = new AsyncValidator(descriptor);
        validator.validate(validateValue, (errors, fields) => {
          if (errors) {
            this.validateState = 'error';
            this.validateMessage = errors[0].message;
            res = false;
          } else {
            this.validateState = 'success';
            this.validateMessage = '';
            res = true;
          }
        });
        return res;
      },
      validateFromField() {
        this.validate();
      },
      fieldBlur() {
        if (this.getTrigger() === 'blur') {
          this.validate();
        }
      },
      fieldChange() {
        if (this.getTrigger() === 'change') {
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
        this.$on('fieldChange', this.fieldChange);
      }
    }
  }
</script>

<style>
@import '../../../style/components/form.css';
</style>
<template>
    <div class="fk-input" 
        @mouseenter="hovering = true"
        @mouseleave="hovering = false">
        <input 
            type="text" 
            class="fk-input__input" 
            :class="disabled?'fk-input__input--disabled':''" 
            :value="currentValue" 
            :placeholder="placeholder" 
            :readonly="readonly"
            @input="handleInput" 
            @focus="handleFocus"
            @blur="handleBlur"
            :disabled="disabled" 
            ref="input">
        <span v-if="clearable && currentValue && (hovering || focus)" class="fk-input__clearbtn" @click="clear">x</span>
    </div>
</template>

<script>
    import Emitter from '../../../mixins/emitter'

    export default {
        name: 'fk-input',
        componentName: 'fk-input',
        mixins: [Emitter],
        data() {
            return {
                hovering: false,
                focus: false,
                currentValue: this.value
            }
        },
        props: {
            placeholder: {
                type: String,
                default: '请输入内容'
            },
            value: [String, Number],
            disabled: Boolean,
            clearable: Boolean,
            readonly: Boolean
        },
        methods: {
            handleInput(event) {
                this.$emit('input', event.target.value);
                this.currentValue = event.target.value;
                if (this.isInForm()) {
                    this.dispatch('fk-form-item', 'validateFromField', this.currentValue);
                }
            },
            handleFocus(event) {
                this.$emit('focus', event);
            },
            handleBlur(event) {
                console.log('blur');
                this.$emit('blur', event);
                if (this.isInForm()) {
                    this.dispatch('fk-form-item', 'fieldBlur', this.currentValue);
                }
            },
            clear() {
                this.$emit('input', '');
                this.$emit('change', '');
                this.currentValue = '';
                this.$refs.input.focus();
            },
            isInForm() {
                let result = false;
                let parent = this.$parent;
                let count = 0;
                while (parent !== undefined) {
                    count++;
                    if (parent.$options.componentName === 'fk-form-item') {
                        result = true;
                        break;
                    } else {
                        parent = parent.$parent;
                    }
                }
               return result;
            }
        }
    }
</script>

<style>
@import '../../../style/components/input.css';
</style>
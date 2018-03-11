<template>
    <label class="fk-radio" :class="disabled?'fk-radio--disabled':''">
        <input 
            class="fk-radio__input"
            type="radio"
            :value="currentVal"
            :disabled="disabled"
            @change="change($event)"
            :checked="currentVal===value">
        <slot></slot>
        <template v-if="!$slots.default">{{value}}</template>
    </label>
</template>

<script>
    import Emitter from '../../../mixins/emitter';
    
    export default {
        name: 'fk-radio',
        componentName: 'fk-radio',
        mixins: [Emitter],
        model: {
            prop: 'checked',
            event: 'input'
        },
        data() {
            return {
            }
        },
        props: {
            checked: [String, Number],
            value: String,
            disabled: Boolean
        },
        computed: {
            isGroup() {
                if (this.$parent.$options.componentName === 'fk-radio-group') {
                    this._radioGroup = this.$parent;
                    return true;
                }
                return false;
            },
            currentVal: {
                set(val) {
                    this.checked;
                },
                get() {
                    if (this.isGroup) {
                        return this._radioGroup.value;
                    }
                    return this.checked;
                }
            }
        },
        methods: {
            change(e) {
                if(this.isGroup) {
                    this.dispatch('fk-radio-group', 'input', this.value)
                } else {
                    this.$emit('input', this.value)
                }
                if (this.isInForm()) {
                    this.dispatch('fk-form-item', 'fieldChange');
                } 
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
@import '../../../style/components/radio.css';
</style>
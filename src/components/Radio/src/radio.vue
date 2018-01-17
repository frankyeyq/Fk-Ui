<template>
    <label class="fk-radio" :class="disabled?'fk-radio--disabled':''">
        <input 
            class="fk-radio__input"
            type="radio"
            :value="value"
            :disabled="disabled"
            @change="change($event)"
            :checked="checked===value">
        <slot></slot>
        <template v-if="!$slots.default">{{value}}</template>
    </label>
</template>

<script>
    export default {
        name: 'fk-radio',
        model: {
            prop: 'checked',
            event: 'input'
        },
        props: {
            checked: String,
            value: String,
            disabled: Boolean
        },
        methods: {
            change(e) {
                this.$emit('input', e.target.value)
            }
        },
        computed: {
            isGroup() {
                let parent = this.$parent;
                while (parent) {
                if (parent.$options._componentTag !== 'fk-radio-group') {
                    parent = parent.$parent;
                } else {
                    this._radioGroup = parent;
                    return true;
                }
                }
                return false;
            }
        },
        mounted() {
            console.log(this.isGroup);
            console.log(this._radioGroup);
        }
    }
</script>

<style>
@import '../../../style/components/radio.css';
</style>
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
        mounted() {
            console.log(this.$parent.$options.value);
        }
    }
</script>

<style>
@import '../../../style/components/radio.css';
</style>
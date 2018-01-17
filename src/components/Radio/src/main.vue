<template>
    <label>
        <input 
            type="radio"
            :value="value"
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
            value: String
        },
        methods: {
            change(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style>
@import '../../../style/components/radio.css';
</style>
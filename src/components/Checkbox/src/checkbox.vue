<template>
    <label class="fk-checkbox"
        :class="[{'fk-checkbox--checked': isChecked}, {'fk-checkbox--disabled': isDisabled}]">
        <span class="fk-checkbox__faker"></span>
        <span><slot></slot></span>
        <input type="checkbox" class="fk-checkbox__input" :disabled="isDisabled" ref="checkboxInput" @change="change">
    </label>
</template>

<script>
    export default {
        name: 'fk-checkbox',
        data() {
            return {
                isChecked: false,
            }
        },
        props: {
            disabled: Boolean
        },
        computed: {
            isDisabled() {
                return this.disabled;
            }
        },
        methods: {
            change() {
                this.isChecked = this.$refs.checkboxInput.checked;
                this.$emit('input', this.$refs.checkboxInput.checked)
            }
        }
    }
</script>

<style>
@import '../../../style/components/checkbox.css';
</style>
<template>
    <div class="fk-input" 
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
        <input type="text" class="fk-input__input" :class="disabled?'fk-input__input--disabled':''" :value="currentValue" :placeholder="placeholder" @input="handleInput" :disabled="disabled" ref="input">
        <span v-if="clearable && currentValue && (hovering || focus)" class="fk-input__clearbtn" @click="clear">x</span>
    </div>
</template>

<script>
    export default {
        name: 'fk-input',
        data() {
            return {
                hovering: false,
                focus: false,
                currentValue: null
            }
        },
        props: {
            placeholder: {
                type: String,
                default: '请输入内容'
            },
            value: [String, Number],
            disabled: Boolean,
            clearable: Boolean
        },
        methods: {
            handleInput(event) {
                this.$emit('input', event.target.value)
                this.currentValue = event.target.value;
            },
            clear() {
                this.$emit('input', '')
                this.$emit('change', '');
                this.currentValue = '';
                this.$refs.input.focus();
            }
        }
    }
</script>

<style scoped>
@import '../../../style/components/input.css';
</style>
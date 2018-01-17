<template>
    <button class="fk-button"
    :disabled="disabled"
    :class="[type?'fk-button--'+type : '']"
    @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'fk-button',
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            disabled: Boolean
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    }
</script>

<style lang="postcss">
@import '../../../style/common/common.css';
@import '../../../style/components/button.scss';
</style>
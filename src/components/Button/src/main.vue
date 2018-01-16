<template>
    <button class="fk-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'fk-button'
    }
</script>

<style>
@import '../../../style/common/common.css';
@import '../../../style/components/button/button.css';
</style>
<template>
    <div class="fk-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'fk-radio-group',
        componentName: 'fk-radio-group',
        props: {
            value: [String, Number, Boolean]
        },
        data() {
            return {
             test: '2'
            }
        }
    }
</script>

<style scoped>

</style>
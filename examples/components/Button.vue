<template>
    <div>
        <fk-button @click="clickBtn">默认按钮</fk-button>
        <fk-button type="primary">主要按钮</fk-button>
    </div>
</template>

<script>
    export default {
        methods: {
            clickBtn(evt) {
                console.log(evt);
                window.alert('button clicked.')
            }
        }
    }
</script>

<style scoped>

</style>
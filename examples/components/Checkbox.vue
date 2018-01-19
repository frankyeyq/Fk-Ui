<template>
    <div>
        <h2>基础用法</h2>
        <fk-checkbox v-model="checked">选择1</fk-checkbox>
        选择状态: {{checked}}
        <h2>禁用状态</h2>
        <fk-checkbox disabled>选择1</fk-checkbox>

        <input type="text" v-model="inputVal">
        inputVal: {{inputVal}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked: false,
                inputVal: ''
            }
        }
    }
</script>

<style scoped>

</style>
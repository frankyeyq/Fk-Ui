<template>
    <div>
        <h2>基础用法</h2>
        <fk-radio v-model="radio" value="1">选项1</fk-radio>
        <fk-radio v-model="radio" value="2">选项2</fk-radio>
        <h2>禁用状态</h2>
        <fk-radio v-model="radio2" value="1" disabled>选项1</fk-radio>
        <fk-radio v-model="radio2" value="2" disabled>选项2</fk-radio>
        <h2>单选框组</h2>
        <fk-radio-group >
            <fk-radio v-model="radio3" value="1">选项1</fk-radio>
            <fk-radio v-model="radio3" value="2">选项2</fk-radio>
        </fk-radio-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: '',
                radio2: '',
                radio3: '1',
                gender: ''
            }
        },
        methods: {
            change(e) {
                console.log(e.target);
            },
            input(val) {
                console.log(val);
            },
            onchange() {
                console.log('onchange');
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
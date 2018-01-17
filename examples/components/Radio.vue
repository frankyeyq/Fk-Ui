<template>
    <div>
        <fk-radio v-model="radio" value="1" name="a">选项1</fk-radio>
        <fk-radio v-model="radio" value="2" name="a">选项2</fk-radio>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: '3',
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
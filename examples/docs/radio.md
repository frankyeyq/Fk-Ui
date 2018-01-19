## 基础用法
<fk-radio v-model="radio" value="1">选项1</fk-radio>
<fk-radio v-model="radio" value="2">选项2</fk-radio>
```html
<fk-radio v-model="radio" value="1">选项1</fk-radio>
<fk-radio v-model="radio" value="2">选项2</fk-radio>
```
## 禁用状态
<fk-radio v-model="radio2" value="1" disabled>选项1</fk-radio>
<fk-radio v-model="radio2" value="2" disabled>选项2</fk-radio>
```html
<fk-radio v-model="radio2" value="1" disabled>选项1</fk-radio>
<fk-radio v-model="radio2" value="2" disabled>选项2</fk-radio>
```
## 单选框组
<fk-radio-group v-model="radio3">
    <fk-radio value="1">选项1</fk-radio>
    <fk-radio value="2">选项2</fk-radio>
</fk-radio-group>

```html
<fk-radio-group v-model="radio3">
    <fk-radio value="1">选项1</fk-radio>
    <fk-radio value="2">选项2</fk-radio>
</fk-radio-group>
```

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
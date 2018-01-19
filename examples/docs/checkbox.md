## 基础用法
<fk-checkbox v-model="checked">选择1</fk-checkbox>
选择状态: {{checked}}
```html
<fk-checkbox v-model="checked">选择1</fk-checkbox>
```
## 禁用状态
<fk-checkbox disabled>选择1</fk-checkbox>
```html
<fk-checkbox disabled>选择1</fk-checkbox>
```
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
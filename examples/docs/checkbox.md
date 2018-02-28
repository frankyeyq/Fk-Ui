## 基础用法
<fk-checkbox v-model="checked">选择1</fk-checkbox>
选择状态: {{checked}}
```html
<fk-checkbox v-model="checked">选择1</fk-checkbox>
<script>
    export default {
        data() {
            return {
                checked: false
            }
        }
    }
</script>
```
## 禁用状态
<fk-checkbox disabled>选择1</fk-checkbox>
```html
<fk-checkbox disabled>选择1</fk-checkbox>
```

## 单选框组
<fk-checkbox-group v-model="checkboxList">
    <fk-checkbox label="选择1"></fk-checkbox>
    <fk-checkbox label="选择2"></fk-checkbox>
    <fk-checkbox label="选择3"></fk-checkbox>
    <fk-checkbox label="选择4"></fk-checkbox>
</fk-checkbox-group>

````html
<fk-checkbox-group v-model="checkboxList">
    <fk-checkbox label="选择1"></fk-checkbox>
    <fk-checkbox label="选择2"></fk-checkbox>
    <fk-checkbox label="选择3"></fk-checkbox>
    <fk-checkbox label="选择4"></fk-checkbox>
</fk-checkbox-group>
<script>
    export default {
        data() {
            return {
                checkboxList:['选择1', '选择3']
            }
        }
    }
</script>
````
<script>
    export default {
        data() {
            return {
                checked: false,
                inputVal: '',
                checkboxList:['选择1', '选择3']
            }
        }
    }
</script>
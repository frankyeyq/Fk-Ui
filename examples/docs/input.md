## 基础用法
<fk-input v-model="input"></fk-input>
输入的内容：{{input}}
```html
<fk-input v-model="input"></fk-input>
<script>
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>
```
## 禁用状态
<fk-input v-model="input2" disabled></fk-input>
```html
<fk-input v-model="input2" disabled></fk-input>
```
## 可清空
<fk-input v-model="input3" clearable></fk-input>
```html
<fk-input v-model="input3" clearable></fk-input>
```

<script>
    export default {
        data() {
            return {
                input: '',
                input2: '',
                input3: ''
            }
        }
    }
</script>
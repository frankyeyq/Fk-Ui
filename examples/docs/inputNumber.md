## 基础用法
<fk-input-number v-model="num" :min="0" :max="10" ></fk-input-number>
输入的值是：{{num}}
````html
<fk-input-number v-model="num" :min="0" :max="10"></fk-input-number>
data() {
    return {
        num: '1'
    }
}
````

## 步数
<fk-input-number v-model="num2" :min="0" :max="10" :step="2"></fk-input-number>
````html
<fk-input-number v-model="num2" :min="0" :max="10" :step="2"></fk-input-number>
data() {
    return {
        num2: '1'
    }
}
````
<script>
    export default {
        data() {
            return {
                num: '1',
                num2: '1'
            }
        }
    }
</script>
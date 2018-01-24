## 基础用法
<fk-select v-model="value">
    <fk-select-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </fk-select-option>
</fk-select>
选择的是：{{value}}
<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '选项1'
                }, {
                    value: '选项2',
                    label: '选项2'
                }, {
                    value: '选项3',
                    label: '选项3'
                }],
                value: ''
            }
        }
    }
</script>

```` html
<fk-select>
    <fk-select-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </fk-select-option>
</fk-select>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '选项1'
                }, {
                    value: '选项2',
                    label: '选项2'
                }, {
                    value: '选项3',
                    label: '选项3'
                }]
            }
        }
    }
</script>
````

## 禁用
<fk-select v-model="value" disabled>
    <fk-select-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </fk-select-option>
</fk-select>
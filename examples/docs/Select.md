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
                value: '',
                value2: '',
                value3: []
            }
        }
    }
</script>

```` html
<fk-select v-model="value">
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
                }],
                value: ''
            }
        }
    }
</script>
````

## 禁用
<fk-select v-model="value2" disabled>
    <fk-select-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </fk-select-option>
</fk-select>

## 多选
<fk-select v-model="value3" multiple>
    <fk-select-option 
        v-for="item in options" 
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </fk-select-option>
</fk-select>
选择的是：{{value3}}

````html
<fk-select v-model="value3" multiple>
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
                }],
                value3: ''
            }
        }
    }
</script>
````
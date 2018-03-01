## 基础用法
<fk-form :model="ruleForm" :rules="rules" ref="myForm">
  <fk-form-item label="用户名" required prop="input">
    <fk-input v-model="ruleForm.input"></fk-input>  
  </fk-form-item> 
<fk-form-item label="是否打包" prop="radio">
    <fk-radio-group v-model="ruleForm.radio">
      <fk-radio value="1">选项1</fk-radio>
      <fk-radio value="2">选项2</fk-radio>
    </fk-radio-group>
  </fk-form-item>
  <fk-form-item label="打包哪些东西" prop="checkbox">
    <fk-checkbox-group v-model="ruleForm.checkbox">
      <fk-checkbox label="选择1"></fk-checkbox>
      <fk-checkbox label="选择2"></fk-checkbox>
      <fk-checkbox label="选择3"></fk-checkbox>
      <fk-checkbox label="选择4"></fk-checkbox>
    </fk-checkbox-group>
  </fk-form-item>
  <fk-form-item label="打包方法" prop="select">
    <fk-select v-model="ruleForm.select">
      <fk-select-option 
          v-for="item in options" 
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </fk-select-option>
    </fk-select>
  </fk-form-item> 
  <fk-form-item label="打包时间" prop="date">
    <fk-date-picker v-model="ruleForm.date"></fk-date-picker>
  </fk-form-item> 
  <fk-form-item label="自动打包">
    <fk-switch v-model="ruleForm.switch"></fk-switch>
  </fk-form-item> 
  <fk-form-item>
    <fk-button type="primary" @click="submit">提交</fk-button>  
  </fk-form-item>
</fk-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          input: '',
          radio: '1',
          checkbox: ['选择1'],
          select: '',
          date: '',
          switch: true
        },
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
        rules: {
          input: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],
          select: [
            { required: true, message: '请选择'}
          ]
        }
      }
    },
    methods: {
      submit() {
        let res = this.$refs.myForm.validate();
      }
    }
  }
</script>

````html
<fk-form :model="ruleForm" :rules="rules" ref="myForm">
  <fk-form-item label="用户名" required prop="input">
    <fk-input v-model="ruleForm.input"></fk-input>  
  </fk-form-item> 
<fk-form-item label="是否打包" prop="radio">
    <fk-radio-group v-model="ruleForm.radio">
      <fk-radio value="1">选项1</fk-radio>
      <fk-radio value="2">选项2</fk-radio>
    </fk-radio-group>
  </fk-form-item>
  <fk-form-item label="打包哪些东西" prop="checkbox">
    <fk-checkbox-group v-model="ruleForm.checkbox">
      <fk-checkbox label="选择1"></fk-checkbox>
      <fk-checkbox label="选择2"></fk-checkbox>
      <fk-checkbox label="选择3"></fk-checkbox>
      <fk-checkbox label="选择4"></fk-checkbox>
    </fk-checkbox-group>
  </fk-form-item>
  <fk-form-item label="打包方法" prop="select">
    <fk-select v-model="ruleForm.select">
      <fk-select-option 
          v-for="item in options" 
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </fk-select-option>
    </fk-select>
  </fk-form-item> 
  <fk-form-item label="打包时间" prop="date">
    <fk-date-picker v-model="ruleForm.date"></fk-date-picker>
  </fk-form-item> 
  <fk-form-item label="自动打包">
    <fk-switch v-model="ruleForm.switch"></fk-switch>
  </fk-form-item> 
  <fk-form-item>
    <fk-button type="primary" @click="submit">提交</fk-button>  
  </fk-form-item>
</fk-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          input: '',
          radio: '1',
          checkbox: ['选择1'],
          select: '',
          date: '',
          switch: true
        },
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
        rules: {
          input: [
            { required: true, message: '请输入内容', trigger: 'blur' },
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
          ],
          select: [
            { required: true, message: '请选择'}
          ]
        }
      }
    },
    methods: {
      submit() {
        let res = this.$refs.myForm.validate();
      }
    }
  }
</script>
````
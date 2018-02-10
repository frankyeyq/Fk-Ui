# Switch 开关

<fk-switch v-model="value"></fk-switch>
是否选中:{{value}}
<script>
  export default {
    data() {
      return {
        value: false,
        value2: false
      }
    }
  }
</script>

````html
<fk-switch v-model="value"></fk-switch>
<script>
  export default {
    data() {
      return {
        value: false
      }
    }
  }
</script>
````

# 禁用
<fk-switch v-model="value2" disabled></fk-switch>

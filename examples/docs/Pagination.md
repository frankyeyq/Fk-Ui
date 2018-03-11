## 基础用法
<fk-pagination @currentChange="currentChange" :total="200" :pageSize="5" :defaultCurrentPage="3"></fk-pagination>
<script>
  export default {
    methods: {
      currentChange(page) {
        console.log(`点击了第${page}页`);
      }
    }
  }
</script>

```html
<fk-pagination @currentChange="currentChange" :total="200" :pageSize="5" :defaultCurrentPage="3"></fk-pagination>
<script>
  export default {
    methods: {
      currentChange(page) {
        console.log(`点击了第${page}页`);
      }
    }
  }
</script>
````
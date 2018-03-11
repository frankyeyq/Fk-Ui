## 基础用法
<fk-carousel width="500">
  <fk-carousel-item v-for="(i, index) in item" :key="index">
    <h3>{{ i }}</h3>
  </fk-carousel-item>
</fk-carousel>
<script>
  export default {
    data() {
      return {
        item: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  }
</script>

````html
<fk-carousel width="500">
  <fk-carousel-item v-for="(i, index) in item" :key="index">
    <h3>{{ i }}</h3>
  </fk-carousel-item>
</fk-carousel>
<script>
  export default {
    data() {
      return {
        item: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    }
  }
</script>
````
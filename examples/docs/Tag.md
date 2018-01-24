## 基本用法
<fk-tag>标签1</fk-tag>
<fk-tag type="success">标签2</fk-tag>
<fk-tag type="info">标签3</fk-tag>
<fk-tag type="warning">标签4</fk-tag>
<fk-tag type="danger">标签5</fk-tag>

````html
<fk-tag>标签1</fk-tag>
<fk-tag type="success">标签2</fk-tag>
<fk-tag type="info">标签3</fk-tag>
<fk-tag type="warning">标签4</fk-tag>
<fk-tag type="danger">标签5</fk-tag>
````

## 可移除标签
<fk-tag closeable @close="close">标签1</fk-tag>
<fk-tag closeable @close="close" type="success">标签2</fk-tag>
<fk-tag closeable @close="close" type="info">标签3</fk-tag>
<fk-tag closeable @close="close" type="warning">标签4</fk-tag>
<fk-tag closeable @close="close" type="danger">标签5</fk-tag>
<script>
    export default {
        methods: {
            close(tag) {
                console.log(tag)
            }
        }
    }
</script>

````html
<fk-tag closeable @close="close">标签1</fk-tag>
<fk-tag closeable @close="close" type="success">标签2</fk-tag>
<fk-tag closeable @close="close" type="info">标签3</fk-tag>
<fk-tag closeable @close="close" type="warning">标签4</fk-tag>
<fk-tag closeable @close="close" type="danger">标签5</fk-tag>
<script>
    export default {
        methods: {
            close(tag) {
                console.log(tag)
            }
        }
    }
</script>
````
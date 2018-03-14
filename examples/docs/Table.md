## 基础用法
<template>
  <fk-table
    :data="tableData"
    style="width: 100%;">
    <fk-table-column prop="date" label="日期">
      <template slot-scope="props">
        <div>自定义日期 <fk-tag>{{props.date}}</fk-tag></div>
      </template>
    </fk-table-column>
    <fk-table-column prop="name" label="名字"></fk-table-column> 
    <fk-table-column prop="address" label="地址">
      <template slot-scope="props">
        <div>自定义地址 {{props.address}}</div>
      </template>
    </fk-table-column>
  </fk-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2018-03-01',
            name: 'frank1',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-02',
            name: 'frank2',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-03',
            name: 'frank3',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-04',
            name: 'frank4',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-05',
            name: 'frank5',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-06',
            name: 'frank6',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-07',
            name: 'frank7',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-08',
            name: 'frank8',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-09',
            name: 'frank9',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          }
        ]
      }
    }
  }
</script>

```html
<template>
  <fk-table
    :data="tableData"
    style="width: 100%;">
    <fk-table-column prop="date" label="日期">
      <template slot-scope="props">
        <div>自定义日期 {{props.date}}</div>
      </template>
    </fk-table-column>
    <fk-table-column prop="name" label="名字"></fk-table-column> 
    <fk-table-column prop="address" label="地址">
      <template slot-scope="props">
        <div>自定义地址 {{props.address}}</div>
      </template>
    </fk-table-column>
  </fk-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2018-03-01',
            name: 'frank1',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-02',
            name: 'frank2',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-03',
            name: 'frank3',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-04',
            name: 'frank4',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-05',
            name: 'frank5',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-06',
            name: 'frank6',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-07',
            name: 'frank7',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-08',
            name: 'frank8',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          },
          {
            date: '2018-03-09',
            name: 'frank9',
            address: '宇宙银河系太阳系地球亚洲中国杭州恒生科技园'
          }
        ]
      }
    }
  }
</script>
```
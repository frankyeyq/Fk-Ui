<template>
  <div class="fk-table">
    <div class="fk-table-hidden-column">
      <slot></slot>
    </div>
    <table class="fk-table-container">
      <thead>
        <tr>
          <th v-for="(column, index) in tableColumns" :key="index">{{column.label}}</th>
        </tr>
      </thead>
      <table-body></table-body>
    </table>
  </div>
  
</template>

<script>
  import tableBody from './table-body';
  export default {
    name: 'fk-table',
    componentName: 'fk-table',
    data() {
      return {
        tableColumns: [],
        
      }
    },
    methods: {
      addColumn(column) {
        this.tableColumns.push({
            prop: column.prop,
            label: column.label,
            renderFn: column.column.renderFn
        });
      }
    },
    watch: {
      'tableColumns'(newVal, oldVal) {

      }
    },
    provide() {
      return {
        'tableColumns': this.tableColumns,
        'tableData': this.data
      }
    },
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    components: {
      tableBody
    },
    created() {
      this.$on('addColumn', this.addColumn);
    },
    mounted() {
    }
  }
</script>

<style>
@import '../../../style/components/table.css';
</style>
<script>
  export default {
    name: 'fk-table-body',
    componentName: 'fk-table-body',
    data() {
      return {
      }
    },
    render(h) {
      return (
        <tbody> {
          this._l(this.tableData, (data, $index) => 
            <tr>
              {this._l(this.tableColumns, (column, $index) => 
              <td>{column.renderFn(data)}</td>)}
            </tr>)}
        </tbody>
      )
    },
    inject: ['tableColumns', 'tableData'],
    mounted() {
      console.log(this.tableColumns);
    }
  }
</script>
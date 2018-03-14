

<script>
  import Emitter from '../../../mixins/emitter'
  
  export default {
    name: 'fk-table-column',
    componentName: 'fk-table-column',
    mixins: [Emitter],
    data() {
      return {
        column: {}
      }
    },
    props: {
      prop: String,
      label: String,
      width: String,
      items: Array
    },
    created() {
      this.$options.render = h => h('div', this.$slots.default);
    },
    mounted() {
      let _this = this;
      if (this.$scopedSlots.default !== undefined) {
        this.column.renderFn =  (data) => _this.$scopedSlots.default(data);
      } else {
        this.column.renderFn = function(data) {
          return data[this.prop];
        }
      }
      this.dispatch('fk-table', 'addColumn', this);
    }
  }
</script>

<style>

</style>
import Table from './src/table';
import TableColumn from './src/table-column';

Table.install = function (Vue) {
  Vue.component(Table.name, Table);
};

TableColumn.install = function (Vue) {
  Vue.component(TableColumn.name, TableColumn);
};

export {
  Table,
  TableColumn
};

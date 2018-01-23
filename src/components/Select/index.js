import Select from './src/select';
import SelectOption from './src/select-option';

Select.install = function (Vue) {
    Vue.component(Select.name, Select);
};
SelectOption.install = function (Vue) {
    Vue.component(SelectOption.name, SelectOption);
};

export {
    Select,
    SelectOption
};

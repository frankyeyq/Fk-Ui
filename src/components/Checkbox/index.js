import Checkbox from './src/checkbox';
import CheckboxGroup from './src/checkbox-group';

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
};

CheckboxGroup.install = function (Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};
export {
  Checkbox,
  CheckboxGroup
}

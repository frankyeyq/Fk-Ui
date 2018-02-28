import Radio from './src/radio';
import RadioGroup from './src/radio-group';

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio);
};

RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

export {
    Radio,
    RadioGroup
}

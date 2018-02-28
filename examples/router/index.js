import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Components from '../components/components';
import Button from '../docs/button.md';
import Radio from '../docs/radio.md';
import Checkbox from '../docs/checkbox.md';
import Input from '../docs/input.md';
import InputNumber from '../docs/inputNumber.md'
import Select from '../docs/select.md'
import Tag from '../docs/tag.md'
import Switch from '../docs/Switch.md'
import Slide from '../docs/Slide.md'
import DatePicker from '../docs/DatePicker.md'
import ColorPicker from '../docs/ColorPicker.md'
import Form from '../docs/Form.md'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components',
      name: 'Components',
      component: Components,
      children: [
        {path: '/components/button', name: 'Button 按钮', component: Button},
        {path: '/components/radio', name: 'Radio 单选框', component: Radio},
        {path: '/components/checkbox', name: 'Checkbox 多选框', component: Checkbox},
        // {path: '/components/input', name: 'Input 输入框', component: r => require.ensure([], () => r(require(`../docs/input.md`)))},
        {path: '/components/input', name: 'Input 输入框', component: Input},
        {path: '/components/inputNumber', name: 'InputNumber 计数器', component: InputNumber},
        {path: '/components/select', name: 'Select 选择器', component: Select},
        {path: '/components/tag', name: 'Tag 标签', component: Tag},
        {path: '/components/switch', name: 'Switch 开关', component: Switch},
        {path: '/components/slide', name: 'Slide 滑块', component: Slide},
        {path: '/components/datepicker', name: 'DatePicker 日期选择器', component: DatePicker},
        {path: '/components/colorpicker', name: 'ColorPicker 颜色选择器', component: ColorPicker},
        {path: '/components/form', name: 'Form 表单', component: Form}
      ]
    }
  ]
});

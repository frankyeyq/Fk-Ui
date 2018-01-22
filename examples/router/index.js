import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Components from '../components/components';
import Tab from '../components/Tab';
import Button from '../docs/button.md';
import Radio from '../docs/radio.md';
import Checkbox from '../docs/checkbox.md';
import Input from '../docs/input.md';
import InputNumber from '../docs/inputNumber.md'
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
                {path: '/components/inputNumber', name: 'InputNumber 计数器', component: InputNumber}
            ]
        }
    ]
});

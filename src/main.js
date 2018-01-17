import Tab from './components/Tab/index';
import Button from './components/Button/index';
import {Radio, RadioGroup} from './components/Radio/index';
// import './style/common/common.css';

const components = [
    Tab,
    Button,
    Radio,
    RadioGroup
];

const install = function (Vue) {
    if (install.installed) return;
    components.map((component) => {
        Vue.component(component.name, component);
    });
};

export default {
    version: '0.1.0',
    install
};

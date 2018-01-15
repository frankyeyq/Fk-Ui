import Tab from './src/main';

Tab.install = function (Vue) {
    Vue.component(Tab.name, Tab);
};

export default Tab;

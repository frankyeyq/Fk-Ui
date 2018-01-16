import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Components from '../components/components';
import Tab from '../components/Tab';
import Button from '../components/Button';

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
                {path: '/tab', name: 'Tab', component: Tab},
                {path: '/button', name: 'Button', component: Button}
            ]
        }
    ]
});

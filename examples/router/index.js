import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Components from '../components/components';
import Tab from '../components/Tab';
import Button from '../components/Button';
import Radio from '../components/Radio';

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
                {path: '/components/tab', name: 'Tab', component: Tab},
                {path: '/components/button', name: 'Button', component: Button},
                {path: '/components/radio', name: 'Radio', component: Radio}
            ]
        }
    ]
});

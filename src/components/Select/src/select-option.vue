<template>
    <li 
    class="fk-select-option" 
    :class="isSelected?'hover':''"
     @mouseenter="mouseenter" 
     @mouseleave="mouseleave"
     :label="label"
     @click="click">
        <slot>{{label}}</slot>
    </li>
</template>

<script>
    import Emitter from '../../../mixins/emitter'
    export default {
        name: 'fk-select-option',
        componentName: 'fk-select-option',
        mixins: [Emitter],
        data() {
            return {
                currentKey: null,
                isSelected: false
            }
        },
        inject: ['select'],
        props: {
            label: [String],
            value: [String, Number]
        },
        methods: {
            mouseenter() {
                this.isSelected = true;
            },
            mouseleave() {
                this.isSelected = false;
            },
            click() {
                this.dispatch('fk-select', 'handleTest', 'a');
                // this.select.methods.select(this.label)
            }
        },
        mounted() {
            // console.log(this.select);
        }
    }
</script>

<style scoped>

</style>
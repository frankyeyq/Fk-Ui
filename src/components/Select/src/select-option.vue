<template>
    <li 
    class="fk-select-option" 
    :class="[isHovered?'hover':'', isSelected?'selected':'']"
     @mouseenter="mouseenter" 
     @mouseleave="mouseleave"
     :label="label"
     @click="click"
     ref="selOpt">
        {{label}}
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
                isSelected: false,
                isHovered: false
            }
        },
        inject: ['multiple', 'selected'],
        watch: {
            selected(val, oldVal) {
                this.isSelected = val.includes(this.value);
            }
        },
        props: {
            label: [String],
            value: [String, Number]
        },
        methods: {
            mouseenter() {
                this.isHovered = true;
            },
            mouseleave() {
                this.isHovered = false;
            },
            click(event) {
                this.dispatch('fk-select', 'handleToggleSelect', this);
                this.isSelected = this.selected.includes(this.value);
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
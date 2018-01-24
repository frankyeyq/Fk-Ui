<template>
    <div class="fk-select" @mouseenter="mouseenter" @mouseleave="mouseleave" :class="disabled?'disabled':''" @click="click" v-clickoutside="handleClose">
        <div class="fk-select__input-div">
            <input ref="input" type="text" class="fk-select__input-div__input" @focus="focus" @blur="blur" :disabled="disabled">
            <i class="fk-select-arrow" :class="isFocused?'fk-select-arrow--up':'fk-select-arrow--down'"></i>
        </div>
        <transition name="fade" mode="out-in" appear>
            <ul v-if="isFocused" class="fk-select-options" @select="select">
                <slot></slot>
            </ul>
        </transition>
       
    </div>
</template>

<script>
    import Clickoutside from '../../../utils/clickoutside.js'
    export default {
        name: 'fk-select',
        componentName: 'fk-select',
        data() {
            return {
                isFocused: false,
                currentLabel: '',
                hover: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        directives: { Clickoutside },
        provide: {
            select: 'a'
        },
        created() {
            this.$on('handleSelect', this.handleSelect)
        },
        methods: {
            focus() {
                this.isFocused = true;
            },
            blur() {
                // this.isFocused = false;
            },
            select(val) {
                console.log(val);
            },
            click(evt) {
                if (evt.target.getAttribute('label')) {
                    this.currentLabel = evt.target.getAttribute('label');
                    this.$refs.input.value = this.currentLabel;
                    this.isFocused = false;
                }
            },
            handleClose() {
                this.isFocused = false;
            },
            handleSelect(val) {
                this.$emit('input', val);
                this.$emit('change', val);
            },
            mouseenter() {
                this.hover = true;
            },
            mouseleave() {
                this.hover = false;
            }
        }
    }
</script>

<style lang="postcss">
@import '../../../style/components/select.css';
</style>
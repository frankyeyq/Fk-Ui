<template>
    <div class="fk-select" :class="disabled?'disabled':''" @click="click" v-clickoutside="handleClose">
        <div class="fk-select__input-div">
            <input ref="input" type="text" class="fk-select__input-div__input" @focus="focus" @blur="blur">
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
                currentLabel: ''
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        directives: { Clickoutside },
        provide: {
            select: 'a'
        },
        created() {
            this.$on('handleTest', this.handleTest)
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
            handleTest() {
                console.log('handleTest');
            }
        }
    }
</script>

<style lang="postcss">
@import '../../../style/components/select.css';
</style>
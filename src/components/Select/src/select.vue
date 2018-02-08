<template>
    <div class="fk-select" @mouseenter="mouseenter" @mouseleave="mouseleave" :class="disabled?'disabled':''" @click="handleClick" v-clickoutside="handleClose">
        <div class="fk-select__input-div">
            <div class="fk-select__multipe"></div>
            <input readonly="readonly" ref="input" type="text" class="fk-select__input-div__input" @focus="focus" @blur="blur" :disabled="disabled">
            <i class="fk-select-arrow" :class="isFocused?'fk-select-arrow--up':'fk-select-arrow--down'"></i>
        </div>
        <div v-if="multiple" class="fk-selected-tag" ref="tagContainer" @click="focus">
            <template>
                <fk-tag closeable type="info" @close="delOptions(item)" v-for="(item, index) in selected" :key="index" >{{item}}</fk-tag>
            </template>
        </div>
        <transition name="fade" mode="out-in" appear>
            <ul v-show="isFocused" class="fk-select-options" @select="select">
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
                hover: false,
                selected: []
            }
        },
        props: {
            disabled: Boolean,
            multiple: Boolean
        },
        directives: { Clickoutside },
        provide() {
            return {
                multiple: this.multiple,
                selected: this.selected
            }
        },
        created() {
            this.$on('handleToggleSelect', this.handleToggleSelect)
        },
        methods: {
            focus() {
                this.isFocused = !this.isFocused;
            },
            blur() {
                // this.isFocused = false;
            },
            select(val) {
                console.log(val);
            },
            handleClick(evt) {
                let label = evt.target.getAttribute('label')
                if (label) {
                    if (!this.multiple) {
                        this.currentLabel = evt.target.getAttribute('label');
                        this.$refs.input.value = this.currentLabel;
                        this.isFocused = false;
                    }
                }
            },
            handleClose() {
                this.isFocused = false;
            },
            handleToggleSelect(selectedItem) {
                if (!this.multiple) {
                    this.$emit('input', selectedItem.label);
                    this.$emit('change', selectedItem.label);
                } else {
                    let selectedFlag = false;
                    this.selected.forEach((value, index) => {
                        if(value === selectedItem.value) {
                            this.selected.splice(index, 1);
                            selectedFlag = true;
                        }
                    });
                    if (!selectedFlag) {
                        this.selected.push(selectedItem.value);
                    }
                    this.$emit('input', this.selected);
                    this.$nextTick(function() {
                        this.computeInputHeight();
                    });
                }
            },
            mouseenter() {
                this.hover = true;
            },
            mouseleave() {
                this.hover = false;
            },
            delOptions(value) {
                this.selected.forEach((item, index) => {
                    if (item === value) {
                        this.selected.splice(index, 1);
                        this.$nextTick(function() {
                            this.computeInputHeight();
                        });
                    }
                })
            },
            computeInputHeight() {
                var height = this.$refs['tagContainer'].offsetHeight;
                this.$refs['input'].style.height = Math.max(height-5, 40) + 'px';
            }
        },
        mounted() {
        }
    }
</script>

<style lang="postcss">
@import '../../../style/components/select.css';
</style>
<template>
    <div ref="tag" @mouseenter="mouseenter" @mouseleave="mouseleave" class="fk-tag" :class="[type?'fk-tag--'+type:'', {'hover': hover}]">
        <slot></slot>
        <span v-if="closeable" class="fk-tag__close-btn" @click.stop="close">X</span>
    </div>
</template>

<script>
    export default {
        name: 'fk-tag',
        componentName: 'fk-tag',
        data() {
            return {
                hover: false
            }
        },
        props: {
            type: {
                type: String
            },
            closeable: {
                type: Boolean,
                defaule: false
            }
        },
        methods: {
            mouseenter() {
                this.hover = true;
            },
            mouseleave() {
                this.hover = false;
            },
            close() {
                this.$emit('close', this)
            }
        }
    }
</script>

<style scoped>
@import '../../../style/components/tag.css';

</style>
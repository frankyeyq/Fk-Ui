<template>
    <div ref="tag" v-if="!remove" @mouseenter="mouseenter" @mouseleave="mouseleave" class="fk-tag" :class="[type?'fk-tag--'+type:'', {'hover': hover}]">
        <slot></slot>
        <span v-if="closeable" class="fk-tag__close-btn" @click="close">X</span>
    </div>
</template>

<script>
    export default {
        name: 'fk-tag',
        componentName: 'fk-tag',
        data() {
            return {
                hover: false,
                remove: false
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
                this.remove = true;
                this.$emit('close', this.$refs.tag)
            }
        }
    }
</script>

<style scoped>
@import '../../../style/components/tag.css';

</style>
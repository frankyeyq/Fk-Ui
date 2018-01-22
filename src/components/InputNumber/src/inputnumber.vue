<template>
    <div class="fk-input-number">
        <span class="fk-input-number__min-btn" :class="disabledMin?'disabled':''"  @click="handleMin">-</span>
        <fk-input :value="currentVal" class="fk-input__number" @input="input" ref="input"></fk-input>
        <span class="fk-input-number__plus-btn" :class="disabledPlus?'disabled':''" @click="handlePlus">+</span>
    </div>
</template>

<script>
import FkInput from '../../Input/'
    export default {
        name: 'fk-input-number',
        data() {
            return {
                currentVal: Number(this.value),
                disabledPlus: this.currentVal <= this.min,
                disabledMin: this.currentVal >= this.max
            }
        },
        props: {
            value: [String, Number],
            min: [String, Number],
            max: [String, Number],
            step: {
                default: 1,
                type: [String, Number]
            }
        },
        computed: {
        },
        methods: {
            input(val) {
                val = Math.min(Math.max(val, this.min), this.max);
                this.currentVal = val;
                this.disabledPlus = this.currentVal >= this.max ? true : false;
                this.disabledMin = this.currentVal <= this.min ? true : false;
                this.$refs.input.$refs.input.value = this.currentVal;
                this.$emit('input', val);
            },
            handleMin() {
                if (this.disabledMin) {
                    return ;
                }
                this.currentVal -= Number(this.step);
                this.currentVal = Math.min(Math.max(this.currentVal, this.min), this.max);
                this.$emit('input', this.currentVal);
                this.$refs.input.$refs.input.value = this.currentVal;
                this.disabledPlus = this.currentVal >= this.max ? true : false;
                this.disabledMin = this.currentVal <= this.min ? true : false;
            },
            handlePlus() {
                if (this.disabledPlus) {
                    return ;
                }
                this.currentVal += Number(this.step);
                this.currentVal = Math.min(Math.max(this.currentVal, this.min), this.max);
                this.$emit('input', this.currentVal);
                this.$refs.input.$refs.input.value = this.currentVal;
                this.disabledPlus = this.currentVal >= this.max ? true : false;
                this.disabledMin = this.currentVal <= this.min ? true : false;
            }
        },
        components: {
            FkInput
        }
    }
</script>

<style scoped>
@import '../../../style/components/inputnumber.css';
</style>
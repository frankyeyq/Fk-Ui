<template>
    <label class="fk-checkbox"
        :class="[{'fk-checkbox--checked': isChecked}, {'fk-checkbox--disabled': isDisabled}]">
        <span class="fk-checkbox__faker"></span>
        <span><slot>{{isGroup?label:''}}</slot></span>
        <input type="checkbox" class="fk-checkbox__input" :disabled="isDisabled" ref="checkboxInput" @change="change">
    </label>
</template>

<script>
    import Emitter from '../../../mixins/emitter'
    export default {
			name: 'fk-checkbox',
			componentName: 'fk-checkbox',
        mixins: [Emitter],
			data() {
					return {
						isChecked: false,
						_checkboxGroup: []
					}
			},
			props: {
				disabled: Boolean,
				label: [String, Number, Boolean]
			},
			computed: {
					isDisabled() {
						return this.disabled;
					},
					isGroup() {
						if (this.$parent.$options.componentName === 'fk-checkbox-group') {
							this._checkboxGroup = this.$parent;
							return true;
						}
						return false;
					},
			},
			methods: {
				change() {
					if (this.isGroup) {
						let parentValue = this._checkboxGroup.$options.propsData.value;
						if (!this.isChecked) {
							this.isChecked = true							
							parentValue.push(this.label);
						} else {
							this.isChecked = false;
							parentValue.splice(parentValue.indexOf(this.label), 1);
						}
					} else {
						this.isChecked = this.$refs.checkboxInput.checked;
					}
					this.$emit('input', this.$refs.checkboxInput.checked);
					if (this.isInForm()) {
						this.dispatch('fk-form-item', 'fieldChange');
					}
				},
				isInForm() {
                let result = false;
                let parent = this.$parent;
                let count = 0;
                while (parent !== undefined) {
                    count++;
                    if (parent.$options.componentName === 'fk-form-item') {
                        result = true;
                        break;
                    } else {
                        parent = parent.$parent;
                    }
                }
               return result;
            }
			},
			mounted() {
				if (this.isGroup) {
					this.isChecked = this._checkboxGroup.$options.propsData.value.includes(this.label);
				}
			}
    }
</script>

<style>
@import '../../../style/components/checkbox.css';
</style>
<template>
  <div class="fk-switch" :class="{disabled: disabled}" @click="handleChange">
    <input class="fk-switch-input" :disabled="disabled" ref="input" type="checkbox" :checked="value" @click="handleClick">
    <span class="fk-switch-fake" :class="{checked: value}">
      <span class="fk-switch-fake-button"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'fk-switch',
    componentName: 'fk-switch',
    data() {
      return {

      }
    },
    props: {
      value: [Boolean],
      disabled: [Boolean]      
    },
    methods: {
      handleClick(event) {
        this.$emit('input', event.target.checked)
      },
      handleChange() {
        this.$refs.input.click();
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="postcss">
.fk-switch{
  position: relative;
  width: 40px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
  vertical-align: middle;
  .fk-switch-input{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
  .fk-switch-fake{
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(19, 206, 102);
    transition: background-color 0.3s;
    cursor: pointer;
    .fk-switch-fake-button{
      width: 16px;
      height: 16px;
      background: white;
      display: inline-block;
      position: absolute;
      margin-right: 2px;
      margin-left: 2px;
      transition: transform 0.3s;
      transform: translate(0, 0);
      top: 2px;
      border-radius: 50%;
    }
    &.checked{
      background-color: rgb(255, 73, 73);
      .fk-switch-fake-button{
        transform: translate(20px, 0);
      }
    }
  }
  &.disabled{
    .fk-switch-fake{
      cursor: not-allowed;
      background-color: #dcdfe6;
    }
  }
}
</style>
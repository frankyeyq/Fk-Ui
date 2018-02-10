<template>
  <div class="fk-slide" ref="slide">
    <div class="fk-slide-container" ref="container" @click="containerClick">
      <div class="fk-slide-bar" ref="bar"></div>
      <div class="fk-slide-button" ref="button"  @mousedown="handleMousedown"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fk-slide',
    componentName: 'fk-slide',
    data() {
      return {
        startX: 0,
        endX: 0,
        moveable: false,
        prevLeft: 0,
        maxLeft: 0
      }
    },
    props: {
      value: [Number],
      max: []
    },
    methods: {
      handleMousedown(event) {
        this.moveable = true;
        this.startX = event.clientX;
        let btn = this.$refs.button;
        this.prevLeft = parseInt(btn.style.left.replace('px', '') || 0);
        window.addEventListener('mousemove', this.handleMousemove);
        window.addEventListener('mouseup', this.handleMouseup);
      },
      handleMousemove(event) {
        if (!this.moveable) return;
        this.endX = event.clientX;
        let btn = this.$refs.button;
        let bar = this.$refs.bar;
        let computedLeft = Math.max(0, Math.min((this.prevLeft + this.endX - this.startX), this.maxLeft));
        bar.style.width = btn.style.left = computedLeft + 'px';
        this.$emit('input', computedLeft);
      },
      handleMouseup(event) {
        this.moveable = false;
      },
      setMaxLeft() {
        this.maxLeft = this.$refs.slide.offsetWidth;
      },
      containerClick(event) {
        let containerLeft = this.$refs.container.getBoundingClientRect().left;
        let mouseLeft = event.clientX;
        this.$refs.bar.style.width = this.$refs.button.style.left = mouseLeft - containerLeft + 'px';
        this.$emit('input', mouseLeft - containerLeft);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.setMaxLeft();
      })
    }
  }
</script>

<style scoped lang="postcss">
.fk-slide{
  position: relative;
  width: 100%;
  height: 40px;
  .fk-slide-container{
    width: 100%;
    height: 10px;
    border-radius: 4px;
    background-color: #e4e7ed;
    position: relative;
    cursor: pointer;
    .fk-slide-bar{
      background-color: #409eff;
      border-radius: 4px;
      width: 0%;
      height: 10px;
    }
    .fk-slide-button{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #409eff;
      position: absolute;
      top: 50%;
      left: 0%;
      cursor: pointer;
      transform: translateX(-50%);
      margin-top: -11px;
      z-index: 2;
      background-color: #fff;
    }
  }
}
</style>
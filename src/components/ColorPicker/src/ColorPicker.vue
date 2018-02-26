<template>
  <div class="fk-color-picker">
    <div class="test" ref="test" style="width: 30px;height: 30px;border: 1px solid black;margin-bottom: 10px;"></div>
    <div class="rgbhex">{{rgbHex}}</div>
    <div class="fk-color-picker-container" @click="containerClick" ref="container" :style="`background: ${background};`">
      <div class="fk-color-picker-containe-white"></div>
      <div class="fk-color-picker-containe-black"></div>
      <div class="fk-color-picker-containe-black-point" ref="point" @mousedown="pointMousedown"></div>
    </div>
    <div class="fk-color-picker-hue-container">
      <div class="fk-color-picker-hue" @click="hueClick" ref="hue"></div>
      <div class="fk-color-picker-hue-slide-bar" ref="slideBar" 
        @mousedown="mousedown"></div>
    </div>
  </div>
</template>

<script>
  import { hsv2rgb, rgb2hex } from './components/color.js'
  export default {
    name: 'fk-color-picker',
    componentName: 'fk-color-picker',
    data() {
      return {
        isDargging: false,
        slideDragOffsetX: 0,
        slideDragOffsetY: 0,
        slideBarTop: 0,
        color: [],
        background: 'red',
        pointDragOffsetX: 0,
        pointDragOffsetY: 0,
        pointTop: 0,
        pointLeft: 0,
        hue: 0,
        saturation: 100,
        value: 100,
        rgbHex: '#FF0000'
      }
    },
    methods: {
      mousedown(event) {
        this.isDargging = true;
        this.slideDragOffsetY = event.offsetY;
        window.addEventListener('mousemove', this.mousemove);
        window.addEventListener('mouseup', this.mouseup);
      },
      mousemove(event) {
        if (!this.isDargging) return;
        this.setSlideBar(event);
      },
      mouseup(event) {
        this.isDargging = false;
        window.removeEventListener('mousemove', this.mousemove);
        window.removeEventListener('mouseup', this.mouseup);
      },
      pointMousedown(event) {
        this.isDargging = true;
        this.slideDragOffsetX = event.offsetX;
        this.slideDragOffsetY = event.offsetY;
        window.addEventListener('mousemove', this.pointMousemove);
        window.addEventListener('mouseup', this.pointMouseup);
      },
      pointMousemove(event) {
        if (!this.isDargging) return;
        this.setPoint(event);
      },
      pointMouseup(event) {
        this.isDargging = false;
        window.removeEventListener('mousemove', this.pointMousemove);
        window.removeEventListener('mouseup', this.pointMouseup);
      },
      updateColor(hue, saturation, value) {
        return hsv2rgb(hue || this.hue, saturation || this.saturation, value || this.value);
      },
      containerClick(event) {
        this.setPoint(event);
      },
      setSlideBar(event) {
        let hueRect = this.$refs.hue.getBoundingClientRect();
        let slideBarRect = this.$refs.slideBar.getBoundingClientRect();
        this.slideBarTop = Math.min(Math.max(event.clientY - hueRect.top - this.slideDragOffsetY , - slideBarRect.height / 2), hueRect.height - slideBarRect.height / 2);
        this.$refs.slideBar.style.top = this.slideBarTop + 'px';
        this.hue = (this.slideBarTop + slideBarRect.height / 2) / hueRect.height * 360;
        let color = this.updateColor(this.hue, 100, 100);
        this.color = this.updateColor();
        this.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        this.rgbHex = '#' + rgb2hex(this.color).join('').toUpperCase();
        this.$refs.test.style.backgroundColor = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`
      },
      setPoint(event) {
        let containerRect = this.$refs.container.getBoundingClientRect();
        let pointRect = this.$refs.point.getBoundingClientRect();
        this.pointTop = Math.min(Math.max(event.clientY - containerRect.top - this.slideDragOffsetY, 0), containerRect.height);
        this.pointLeft = Math.min(Math.max(event.clientX - containerRect.left - this.slideDragOffsetX, 0), containerRect.width);
        this.$refs.point.style.top = this.pointTop + 'px';
        this.$refs.point.style.left = this.pointLeft + 'px';
        this.saturation = this.pointLeft / containerRect.width * 100;
        this.value = 100 - this.pointTop / containerRect.height * 100;
        let color = this.updateColor();
        this.rgbHex = '#' + rgb2hex(color).join('').toUpperCase();
        this.$refs.test.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
      },
      hueClick(event) {
        this.setSlideBar(event);
      }
    },
    mounted() {
      this.updateColor();
    }
  }
</script>

<style scoped>
@import '../../../style/components/colorpicker.css';
</style>
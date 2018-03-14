<template>
  <div class="fk-carousel"
     @mouseenter.self="mouseenter" 
     @mouseleave.self="mouseleave"
     :style="style">
    <slot></slot>
    <div class="fk-carousel-prevBtn" :class="[{'showBtn': showBtn}]" @click="goPrev"></div>
    <div class="fk-carousel-nextBtn" :class="[{'showBtn': showBtn}]" @click="goNext"></div>
    <div class="fk-carousel-pagination-buttons">
      <span class="fk-carousel-pagination-button" :class="[{'active': index === activeIndex}]" v-for="(i, index) in itemList" :key="index" @click="goPage(index)"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fk-carousel',
    componentName: 'fk-carousel',
    data() {
      return {
        itemList: [],
        itemNum: 0,
        activeIndex: 0,
        lastActiveIndex: 0,
        isAnimating: false,
        isHovering: false
      }
    },
    props: {
      width: {
        type: String,
        default: '400'
      },
      height: {
        type: String,
        default: '200'
      },
      arrow: {
        type: String,
        default: 'hover'
      }
    },
    computed: {
      style() {
        return `width: ${this.width}px;height: ${this.height}px;`
      },
      prevIndex() {
        if (this.activeIndex === 0) {
          return this.itemNum - 1
        } else {
          return this.activeIndex - 1
        }
      },
      nextIndex() {
        if (this.activeIndex === this.itemNum - 1) {
          return 0
        } else {
          return this.activeIndex + 1
        }
      },
      showBtn() {
        return ((this.arrow === 'hover' && this.isHovering) || (this.arrow === 'always'));
      }
    },
    methods: {
      mouseenter() {
        this.isHovering = true;
      },
      mouseleave() {
        this.isHovering = false;
      },
      addItem(item) {
        this.itemList.push(item);
      },
      goPrev() {
        if (this.isAnimating) return ;
        this.isAnimating = true;
        this.lastActiveIndex = this.activeIndex;
        if (this.activeIndex === 0) {
          this.activeIndex = this.itemNum - 1;
        } else {
          this.activeIndex -- ;
        }
        this.render();
      },
      goNext() {
        if (this.isAnimating) return ;
        this.isAnimating = true;
        this.lastActiveIndex = this.activeIndex;
        if (this.activeIndex === this.itemNum - 1) {
          this.activeIndex = 0;
        } else {
          this.activeIndex ++ ;
        }
        this.render();
      },
      goPage(index) {
        if (this.isAnimating) return ;
        this.isAnimating = true;
        this.lastActiveIndex = this.activeIndex;
        this.activeIndex = index;
        this.render();
      },
      render() {
        this.clearClass();
        this.itemList[this.lastActiveIndex].classList.add('is-animating');
        this.itemList[this.activeIndex].classList.add('is-animating');
        this.itemList[this.activeIndex].classList.add('active');
        this.itemList.forEach((item, index) => {
          item.style.transform = `translateX(${(index - this.activeIndex) * this.width}px)`
        });
        this.itemList[this.activeIndex].addEventListener('transitionend', () => {
          this.isAnimating = false;
        })
      },
      clearClass() {
        this.itemList.forEach(item => {
          item.classList.remove('active');
          item.classList.remove('is-animating');
        })
      }
    },
    created() {
      this.$on('addItem', this.addItem);
    },
    mounted() {
      this.itemNum = this.itemList.length;
      this.render();
    }
  }
</script>

<style>
@import '../../../style/components/carousel.css';
</style>
<template>
  <div class="fk-pagination">
    <div class="fk-pagination-prev-button" :class="[{'disable': innerCurrentPage === 1}]"></div>
    <div class="fk-pagination-number-buttons">
      <div class="fk-pagination-prev-five" v-show="showPrevFive" @click="prevFive"></div>
      <div class="fk-pagination-number-button" 
        :class="[{'current-page': page === innerCurrentPage}]" 
        v-for="(page, index) in pageNumber" 
        :key="index"
        @click="goPage(page)">{{page}}</div>
      <div class="fk-pagination-next-five" v-show="showNextFive" @click="nextFive"></div>
    </div>
    <div class="fk-pagination-next-button" :class="[{'disable': innerCurrentPage === totalPageNumber}]" @click="next"></div>
  </div>
</template>

<script>
  export default {
    name: 'fk-pagination',
    componentName: 'fk-pagination',
    data() {
      return {
        innerCurrentPage: 1,
        showPrevFive: false,
        showNextFive: false
      }
    },
    props: {
      defaultCurrentPage: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 102
      },
      pageSize: {
        type: Number,
        default: 10
      }
    },
    methods: {
      goPage(page) {
        this.innerCurrentPage = page;
        this.$emit('currentChange', this.innerCurrentPage);
      },
      prev() {
        this.innerCurrentPage = Math.max(this.innerCurrentPage - 1, 1);
        this.$emit('currentChange', this.innerCurrentPage);
      },
      next() {
        if (this.innerCurrentPage >= this.totalPageNumber) return;
        this.innerCurrentPage = Math.min(this.innerCurrentPage + 1, this.totalPageNumber);
        this.$emit('currentChange', this.innerCurrentPage);
      },
      prevFive() {
        this.innerCurrentPage = Math.max(this.innerCurrentPage - 5, 1);
        this.$emit('currentChange', this.innerCurrentPage);
      },
      nextFive() {
        this.innerCurrentPage = Math.min(this.innerCurrentPage + 5, this.totalPageNumber);
        this.$emit('currentChange', this.innerCurrentPage);
      }
    },
    computed: {
      totalPageNumber() {
        return Math.ceil(this.total / this.pageSize);
      },
      pageNumber() {
        let totalPageNumber = this.totalPageNumber;
        let array = [];
        for(var i = 1; i<totalPageNumber+1; i++) {
          array.push(i);
        }
        let left = Math.max(Math.min(this.innerCurrentPage - 2, totalPageNumber - 5), 2);
        let right = Math.min(this.innerCurrentPage + 2, totalPageNumber - 1);
        this.showPrevFive = left > 2 ? true : false;
        this.showNextFive = right < totalPageNumber - 2 ? true : false;
        if (totalPageNumber > 7) {
          array = array.filter(item => {
             return (item === 1 || item === totalPageNumber || (item >= left && item < left + 5));
          })
        }
        if (left > 2) {
          array.splice()
        } 
        return array;
      }
    },
    mounted() {
      this.innerCurrentPage = this.defaultCurrentPage
    }
  }
</script>

<style>
@import '../../../style/components/pagination.css';
</style>
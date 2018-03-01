<template>
  <div class="fk-date-picker" v-clickoutside="closeDatePickContainer" :value="value">
    <fk-input 
      v-model="input"
      ref="input"
      :placeholder="'请选择日期'"
      readonly
      @blur="handleBlur"
      @change="handleChange"
      @focus="pickDate"></fk-input>
    <div v-show="showDatePickContainer" class="fk-date-picker-container">
      <div class="fk-date-picker-container__header">
        <fk-button type="text" @click="prevYear" class="fk-date-picker-container__header__prevYearBtn"></fk-button>
        <fk-button type="text" @click="prevMonth" class="fk-date-picker-container__header__prevMonthBtn"></fk-button>
        <span class="fk-date-picker-container__header__context">{{year}}年{{month}}月</span>
        <fk-button type="text" @click="nextMonth" class="fk-date-picker-container__header__nextMonthBtn"></fk-button>
        <fk-button type="text" @click="nextYear" class="fk-date-picker-container__header__nextYearBtn"></fk-button>
      </div>
      <div class="fk-date-picker-content">
        <table>
          <tbody>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
            <template>
                <tr v-for="(item, index) in currentDateArray" :key="index">
                  <td @click="choseDate(day.year, day.month, day.day)" :class="day.class" v-for="(day, index2) in item" :key="index2">{{day.day}}</td>
                </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Clickoutside from '../../../utils/clickoutside.js'
  import { getMonthBeginDay, getMonthDays } from '../../../utils/date.js'
  import Emitter from '../../../mixins/emitter'
  
  export default {
    name: 'fk-date-picker',
    componentName: 'fk-date-picker',
    directives: { Clickoutside },
    mixins: [Emitter],
    
    data() {
      return {
        input: '',
        showDatePickContainer: false,
        currentDateArray: [[], [], [], [], [], []],
        year: 2018,
        month: 2,
        day: 23,
        currentDate: 1,
        currentMonth: 1,
        currentYear: 2018,
        chosedDate: {
          year: [Number],
          month: [Number],
          day: [Number]
        }
      }
    },
    props: {
      value: [Date, String]
    },
    methods: {
      handleBlur() {
      },
      handleChange() {
        console.log('handleChange');        
      },
      pickDate() {
        this.showDatePickContainer = true;
      },
      closeDatePickContainer() {
        this.showDatePickContainer = false;
      },
      prevYear() {
        this.year--;
        this.renderDate({
          year: this.year,
          month: this.month,
          day: this.day
        });
      },
      prevMonth() {
        --this.month <= 0 ? (this.month = 12, this.year--):this.month
        this.renderDate({
          year: this.year,
          month: this.month,
          day: this.day
        });
      },
      nextYear() {
        this.year++;
        this.renderDate({
          year: this.year,
          month: this.month
        });
      },
      nextMonth() {
        ++this.month >= 12 ? (this.month = 1, this.year++):this.month
        this.renderDate({
          year: this.year,
          month: this.month
        });
      },
      initDate() {
        this.currentDate = new Date().getDate();
        this.currentMonth = new Date().getMonth()+1;
        this.currentYear = new Date().getFullYear();
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth()+1;
        this.day = new Date().getDate();
        this.renderDate({
          year: this.year,
          month: this.month
        });
      },
      renderDate(opts) {
        let currentDate = [];
        let beginDay = getMonthBeginDay(opts.year, opts.month - 1);
        if (beginDay === 0) {
          beginDay = 7;
        }
        let prevMonth = (opts.month - 1 === 0) ? 12 : opts.month - 1;
        let prevYear = (opts.month - 1 === 0) ? opts.year - 1 : opts.year;
        let nextMonth = (opts.month === 12) ? 1 : opts.month+1;
        let nextYear = (opts.month === 12) ? opts.year + 1 : opts.year;
        let monthDays = getMonthDays(opts.year, opts.month);
        let lastMonthDays = getMonthDays(opts.year, opts.month - 1);
        let prevDays = [];
        let remainderDays = [];
        this.currentDateArray = [[], [], [], [], [], []];
        for(let i = lastMonthDays - beginDay + 1; i < lastMonthDays+1; i++) {
          prevDays.push({class: 'prev-month', year: prevYear, month: prevMonth, day: i});
        }
        currentDate = [...prevDays];
        for(let i = 1; i < monthDays + 1; i++) {
          let classList = ['current-month'];
          if (i === this.currentDate && opts.month === this.currentMonth && opts.year === this.currentYear) {
            classList.push('current-date');
          }
          if (this.chosedDate.year === opts.year && this.chosedDate.month === opts.month && this.chosedDate.day === i) {
            classList.push('chosed-day')
          }
          currentDate.push({class: classList.join(' '), year: opts.year, month: opts.month, day: i});
        }
        for(let i = 1; i < (42 - beginDay -  monthDays + 1); i++ ) {
          remainderDays.push({class: 'next-month', year: nextYear, month: nextMonth, day: i});
        }
        currentDate = [...currentDate, ...remainderDays];
        for(var i = 0; i < currentDate.length; i++) {
          this.currentDateArray[Math.floor(i/7)].push(currentDate[i]);
        }
      },
      choseDate(year, month, day) {
        this.chosedDate = {
          year,
          month,
          day
        }
        let value = `${year}年${month}月${day}日`
        this.$refs.input.$refs.input.value = value;
        let dateTypeValue = new Date(year, month, day);
        this.$emit('input', dateTypeValue);
        if (this.isInForm()) {
          this.dispatch('fk-form-item', 'validateFromField', dateTypeValue);
        }
        this.renderDate({year, month});
        this.closeDatePickContainer();
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
      this.initDate();
    }
  }
</script>

<style>
@import '../../../style/components/datepicker.css';
</style>
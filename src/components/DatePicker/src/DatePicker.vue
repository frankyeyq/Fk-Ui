<template>
  <div class="fk-date-picker" v-clickoutside="closeDatePickContainer" :value="value">
    <fk-input 
      v-model="input"
      ref="input"
      :placeholder="'请选择日期'" 
      @focus="pickDate"></fk-input>
    <div v-show="showDatePickContainer" class="fk-date-picker-container">
      <div class="fk-date-picker-container__header">
        <fk-button type="text" @click="prevYear"><<</fk-button>
        <fk-button type="text" @click="prevMonth"><</fk-button>
        <span>{{year}}年{{month}}月</span>
        <fk-button type="text" @click="nextMonth">></fk-button>
        <fk-button type="text" @click="nextYear">>></fk-button>
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
  export default {
    name: 'fk-date-picker',
    componentName: 'fk-date-picker',
    directives: { Clickoutside },
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
        currentYear: 2018
      }
    },
    props: {
      value: String
    },
    methods: {
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
          if (i === this.currentDate && opts.month === this.currentMonth && opts.year === this.currentYear) {
            currentDate.push({class: 'current-month current-date', year: opts.year, month: opts.month, day: i});
          } else {
            currentDate.push({class: 'current-month', year: opts.year, month: opts.month, day: i});
          }
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
        let value = `${year}年${month}月${day}日`
        this.$refs.input.$refs.input.value = value;
        this.$emit('input', value);
        this.closeDatePickContainer();
      }

    },
    mounted() {
      this.initDate();
      console.log(this.value);
    }
  }
</script>

<style>
@import '../../../style/components/datepicker.css';
</style>
<template lang="pug">
  .timer-wrapper(class="mb-1 mt-1")
    .timer-numbers(:style="{ backgroundColor: '#5574B7'}" class="flex space-x-2 rounded justify-between px-8 max-w-sm mx-auto")
      .days(class="flex flex-row items-center px-1")
        span.t-num(class="font-bold") {{ displayDays }}
        span.t-label(class="text-xs") D
      .hours(class="flex items-center px-1 rounded")
        span.t-num(class="font-bold") {{ displayHours }}
        span.t-label(class="text-xs") H
      .minutes(class="flex items-center px-1 rounded")
        span.t-num(class="font-bold") {{ displayMinutes }}
        span.t-label(class="text-xs") M
      .seconds(class="flex-col items-center px-1 rounded")
        span.t-num(class="font-bold") {{ displaySeconds }}
        span.t-label(class="text-xs") S
</template>

<script>
// import format from 'date-fns/format'

export default {
  name: 'CountdownTimer',
  props: {
    year: String,
    month: String,
    day: String,
  },
  data: () => ({
    loaded: false,
    total: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  }),
  computed: {
    displayDays() {
      return this.formatNum(this.days)
    },
    displayHours() {
      return this.formatNum(this.hours)
    },
    displayMinutes() {
      return this.formatNum(this.minutes)
    },
    displaySeconds() {
      return this.formatNum(this.seconds)
    },
    dateString() {
      const date = `${this.year}-${this.month}-${this.day} 0:0:0`
      return date
    },
  },
  created() {
    },
  mounted() {
    this.updateClock()
    const interval = setInterval(() => {
      if (this.total <= 0) {
        clearInterval(interval)
        return
      }
      this.updateClock()
    })
  },
  methods: {
    formatNum(num) {
      return num < 10 ? '0' + num : num
    },
    getRemaining(endtime) {
      const end = new Date(endtime)
      // console.log( format(end, ) )
      const now = new Date()
      const total = Date.parse(end) - Date.parse(now)
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000/60) % 60)
      const hours = Math.floor((total / (1000*60*60)) % 24)
      const days = Math.floor( total / (1000*60*60*24))

      return { total, days, hours, minutes, seconds }
    },
    convertDateForIos(date) {
      const arr = date.split(/[- :]/);
      date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
      return date
    },
    updateClock() {
      const dt = this.getRemaining(this.convertDateForIos(`${this.year}-${this.month}-${this.day} 0:0:0`))
      this.total = dt.total
      this.seconds = dt.seconds
      this.minutes = dt.minutes
      this.hours = dt.hours
      this.days = dt.days
    }
  },
}
</script>

<style></style>

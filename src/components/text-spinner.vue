<template lang="pug">
  .spinning-text(:class="className" class="select-none pointer-events-none bg-blue-600 h-10 w-10 ")
    span.sr-only {{ text }}
    span.spin-character(
      v-for="character, i in spinArray" 
      :key="i"
      aria-hidden="true"
      class="inline-block absolute"
      :style="{ transform: `rotate(${i*18}deg)`, transformOrigin: `0 ${radius}px` }" 
    )
      | {{ character }}
</template>

<script>
export default {
  name: 'TextSpinner',
  data: () => ({}),
  props: {
    text: { type: String },
    className: { type: String },
    radius: { type: Number },
  },
  computed: {
    spinArray() {
      return this.text.split('')
    }
  },
}
</script>

<style lang="stylus">
</style>

<template lang="pug">
.agenda-block
  h4(class="text-xl md:text-xxl font-extra-bold flex flex-col md:flex-row md:items-baseline text-neutral-1600 bg-neutral-400 px-4 py-2 rounded mb-4") 
    | {{ day }} 
    span.requirement(class="text-xs md:pl-2 text-neutral-1000 italic" v-if="dateRequirement") ({{  dateRequirement }})
  //- times
  .times(class="px-4")
    time-block(
      v-for="time, i in times" 
      :key="i"
      :time="time.time" 
      :note="time.note")
  //- subnote
  .subnote(
    v-if="subnote"
    class="text-minimum-text italic mt-1 text-neutral-1000 px-4"
  ) {{ subnote }}
</template>

<script>
import timeBlock from './agenda-time-block.vue';

export default {
  name: 'AgendaBlock',
  data: () => ({}),
  props: {
    day: String,
    dateRequirement: String,
    subnote: String,
    times: Array,
  },
  components: { timeBlock }
}
</script>

<style lang="stylus"></style>

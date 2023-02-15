<template lang="pug">
Layout(navStyle="dark" sub-nav :sub-nav-config="subNavConfig")
  section
    div(class="bg-neutral-1900 text-white")
      .container(class="py-12 md:p-20 text-center")
        .text-center.inline-flex.items-center.justify-center.w-24.h-24.mb-6
          g-link(to="/aeriescon")
            g-image(:src="require('!!assets-loader!~/assets/images/aeriescon/ac-f-2022/aeriescon-logo-f22.svg')")
        h1(class="text-title font-aeries font-bold leading-tight tracking-tight md:text-display")
          | Agenda At-A-Glance
        
        //- If no description is provided by the component, hide the element.
        p(class="text-base mx-auto mb-5 w-full mt-5 md:px-16")
          | AeriesCon Spring 2023 is packed to the brim with exciting keynotes, sessions, social events and more!
        //-p
          | AeriesCon wouldn't be what it is without them — feel free to say hello if you happen to see them around the virtual conference hall!
  
  section.agenda-section(class="py-14")
    div(class="md:max-w-1/2 mx-auto px-4 md:px-0")
      .date-wrapper(class="flex flex-col space-y-10")
        agenda-block(
          class=""
          v-for="day, i in days" 
          :key="i"
          :day="day.day"
          :date-requirement="day.dateRequirement"
          :times="day.times"
          :subnote="day.subnote"
        )
      
</template>

<script>
import agendaBlock from '@/components/agenda-block.vue';

export default {
  name: 'Agenda',
  data: () => ({
    subNavConfig: {},
    days: [
      {
        day: 'Sunday', 
        times: [{ time: '3:00 - 5:00 pm', note: 'Early Check-in' }], 
      },
      {
        day: 'Monday', 
        times: [
          { time: '7:00 am', note: 'Check-in & Breakfast' },
          { time: '8:00 am', note: 'Keynote' },
          { time: '9:15 am', note: '12:00 pm - Workshop Sessions 1 & 2, Open Forum, Vendor Fair' },
          { time: '12:00 pm', note: 'Lunch' },
          { time: '1:00 - 5:15 pm', note: 'Workshop Sessions 3, 4 & 5, Open Forum, Vendor Fair' },
          { time: '5:30 - 8:00 pm', note: 'AeriesCon Reception & Casino Night' },
        ], 
      },
      {
        day: 'Tuesday', 
        times: [
          { time: '7:00 am', note: 'Breakfast' },
          { time: '8:00 am', note: 'Keynote' },
          { time: '9:15 am - 12:00 pm', note: 'Workshop Sessions 1 & 2, Open Forum, Vendor Fair' },
          { time: '12:00 pm', note: 'Lunch' },
          { time: '1:00 - 3:45 pm', note: 'Workshop Sessions 3 & 4, Open Forum, Vendor Fair' },
        ],
        subnote: '**Monday-Tuesday session topic strands include: Attendance, Scheduling, Grade Reporting, Guidance & Discipline, Aeries Analytics, Aeries Portals, Query, State Reporting, Maximizing Aeries, Roundtable sessions Vendor Spotlight sessions.'
      },
      {
        day: 'Wednesday', 
        times: [
          { time: '7:00 am', note: 'Breakfast', },
          { time: '8:00 - 11:45 am', note: 'Advanced Workshop Sessions 1 & 2', },
          { time: '10:00 - 11:45 am', note: 'Period 2', },
          { time: '11:45 am', note: 'Lunch', },
          { time: '12:45 - 4:30 pm', note: 'Advanced Workshop Sessions 3 & 4', },
        ], 
        dateRequirement: '3-Day ticket required', 
        subnote: '**Wednesday Advanced topic strands: CALPADS and Advanced Database Administration.'
      },
    ]
  }),
  components: { agendaBlock },
  mounted() {
    this.subNavConfig = this.$store.state.aeriescon.subNavConfig
  }
}
</script>

<style lang="stylus"></style>

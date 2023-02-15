<template lang="pug">
div(class="rounded col-span-1 grid grid-cols-1 shadow-double-drop py-5" :class="{'border-2 border-orange-500': eventType === 'Conference', 'border border-blue-500': eventType === 'Multi-Day Series'}")
  .eventTitle(class="px-6 flex flex-col font-semi-bold")
    p.text-body.text-neutral-1300.text-body(:class="{'text-blue-500 font-bold' : eventType == 'Multi-Day Series'}") {{ eventType }}
    g-link(class="text-blue font-bold text-title font-aeries mt-2" :title="event.Name" :to="'/events/' + event.EventId") {{event.Name}}
  .eventInfo(class="px-6 my-6")
    div(class="flex")
      div(class="w-full")
        p.text-neutral-1700.text-sm.font-bold(v-if="isWebinarSeriesWithParts") Series Session Dates:
        p.text-neutral-1700.text-sm.font-bold(v-else-if="eventType !== 'Conference'") Next Session:
        p.text-neutral-1700.text-sm.font-bold(v-else) Conference Begins On:
        p.text-neutral-1700.text-body.flex-grow(v-if="isWebinarSeriesWithParts") {{event.SubTitle}} 
        p.text-neutral-1300.text-body(v-else) {{convertShortDateToHumanReadableDate(new Date(event.firstDate).toLocaleString().split(',')[0])}}
    .description(class="mt-4")   
      p.text-neutral-1700.text-body.flex-grow(v-html="excerpt(event.Blurb)")
  .eventButton(class="mt-auto")
    div(class="w-full px-5")
      //- If the 'disabled' prop is toggled true, show the disabled button.
      a(:href="'/events/' + event.EventId" class='w-full mr-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-neutral-1500 focus:outline-none focus:ring text-center' type='button')
        span(v-if="eventType == 'Conference'") Register for conference
        span(v-else-if="isWebinarSeriesWithParts") Register for series
        span(v-else-if="event.events.length > 1") See {{event.events.length}} events
        span(v-else-if="event.events.length === 1") Register for {{ eventType.toLowerCase() }}
        span(v-else) See {{event.events.length}} session
</template>

<script>

export default {
  props: ['eventCategory', 'event'],
  methods: {
    convertShortDateToHumanReadableDate(shortDate) {
      const date = new Date(shortDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    },
    excerpt(str) {
      let excerpt = str.substring(0, 125) + '...'
      return excerpt
    },
  },
  computed: {
    isWebinarSeriesWithParts() { 
      // We check whether this is a multi-part webinar series that has the same name as another webinar series, and make sure not to group the events if so.
      // Returns true if the event context Name contains "Webinar Series Parts"
      return (this.event.SubTitle.includes("-") && !this.event.SubTitle.includes("M -")) || this.event.SubTitle.includes("&")
    },
    isWebinar() {
      /** 
       * Here we're looking at a few pieces of data to extrapolate whether this is a
       * webinar or not.
       * Firstly, we're looking at the title & the blurb. If these two pieces have the word
       * "webinar" in them, we're saying Yes, it's a webinar.
       * Secondly, we're looking to see if this is a conference. If it IS a conference then
       * we're saying that it is NOT a webinar. 
      */
      const blurbHasWebinar = this.event.Blurb.toLowerCase().includes('webinar')
      const titleHasWebinar = this.event.Name.toLowerCase().includes('webinar')
      const blurbTitleWebinar = blurbHasWebinar || titleHasWebinar
      const isConference = this.event.EventType == 'Conference'

      let iwb = false

      if (blurbTitleWebinar && isConference) {
        iwb = false
      } else if (blurbTitleWebinar) {
        iwb = true
      }

      return iwb

    },
    eventType() {
      if (this.event.EventType === 'Conference') {
        return 'Conference'
      } else if (this.isWebinarSeriesWithParts) {
        return 'Multi-Day Series'
      } else if (this.isWebinar) {
        return 'Webinar'
      } else {
        return this.event.EventType
      }
    },
  },
}
</script>

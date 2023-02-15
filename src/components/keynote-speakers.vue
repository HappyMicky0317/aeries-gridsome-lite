<template lang="pug">
section.keynote-speakers
  .container(class="px-4 md:px-0 py-12 my-24 flex flex-col items-center")
  
    div(class="grid grid-cols-1 gap-8 mt-8")  
      div(class="col-span-2 flex flex-col justify-center")
        h2(class="text-header md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900 mt-12 md:mt-2 text-center") 
          | Join us for an outstanding opening session
      .speakers(class="grid grid-cols-1 md:grid-cols-3 gap-8")
        div.here-as-spacer
        speaker(
          v-for="speaker in speakers" :key="speaker.name"
          :speaker="speaker"
          v-if="speaker.sessionType != 'Keynote'"
          class="flex flex-col space-y-2 items-center" 
        )

  .container(class="px-4 md:px-0 py-12 my-24 flex flex-col items-center")
  
    div
      h2(class="text-header md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900 mt-12 md:mt-2") 
        | Keynote Speakers
    div(class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8")
      speaker(
        v-for="speaker in speakers" :key="speaker.name"
        :speaker="speaker"
        v-if="speaker.sessionType == 'Keynote'"
        class="flex flex-col space-y-2 items-center" 
      )
</template>

<script>
import Speaker from './event-speaker'

export default {
  name: "KeynoteSection",
  props: [ 'speakers' ],
  components: { Speaker }
};
</script>

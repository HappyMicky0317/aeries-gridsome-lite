<template lang="pug">
.speaker.flex.flex-col.space-y-2.items-center
  .speaker-image.px-16
    img.rounded-full.overflow-hidden(:src="speaker.photo", :alt="speaker.name")
  .speaker-date.text-center.mt-4
    span {{ speaker.date }}
  .speaker-name.text-center
    h3.text-2xl.font-bold.font-aeries.tracking-tighter.text-neutral-1600 {{ speaker.name }}
  .speaker-topic.text-center.text-lg.font-bold.text-blue.mt-2
    span {{ speaker.topic }}
  .speaker-description.text-center
    div(v-html="speaker.description")
</template>

<script>
export default {
  name: "EventSpeaker",
  props: ['speaker'],
  data: () => ({}),
};
</script>

<template lang="pug">
  .container(class="px-4 md:px-0 text-center flex flex-col")
    span(v-if="sectionEyebrow" class="text-subhead text-blue-500 mb-4") {{ sectionEyebrow }}
    h1(class="text-title md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1700") {{sectionTitle}}
    p(v-if="sectionDescription" class="w-full md:w-4/5 font-semi-bold md:m-auto pt-6 pb-12")
      | {{sectionDescription}}
</template>

<script>
export default {
  name: 'TextCallout',
  props: {
    sectionTitle: {
      type: String,
      default: 'missing section-title attribute'
    },
    sectionDescription: {
      type: String,
      default: 'missing section-description attribute'
    },
    sectionEyebrow: {
      type: String
    },
  },
  data: () => ({}),
}
</script>

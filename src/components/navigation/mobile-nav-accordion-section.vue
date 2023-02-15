<template lang="pug">
  .title(@click="toggleOpen" class="flex items-center pt-4 w-full flex-col")
    span(class="flex w-full px-2 pb-2")
      .title(class="flex-1") {{ title }}
      icon(icon="cheveron-down" class="w-6 h-6 fill-current opacity-50")
    .accordion-panel(class="w-full bg-neutral-1800 px-2 overflow-hidden"
      :class="{'h-0': !open, 'py-2 border-t-2 border-neutral-1700': open}")
      slot
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
  name: 'NavAccordion',
  data() {
    return {
      open: false
    }
  },
  props: {title: String},
  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  },
  mounted() {},
  components: {},
}
</script>

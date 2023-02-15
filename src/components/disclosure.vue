<template lang="pug">
  .disclosure-container(class="w-full")
    .disclosure-title(
      class="flex items-center justify-between cursor-pointer w-full px-4 py-2 bg-neutral-500 rounded border border-neutral-600 shadow"
      @click="handleToggleDisclosure()"
    )
      span(class="font-bold text-neutral-1600 text-lg") {{ title }}
      icon(icon="cheveron-down" class="ml-4 w-5 h-5 fill-current transform transition-transform duration-200" :class="[ open ? 'rotate-270' : 'rotate-180']")
    .disclosure-panel(v-show="open" class="mt-2 px-4")
      .span(v-html="content")
</template>

<script>
export default {
  name: 'Disclosure',
  props: ['title', 'content'],
  data: () => ({
    open: false
  }),
  methods: {
    handleToggleDisclosure() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="stylus"></style>
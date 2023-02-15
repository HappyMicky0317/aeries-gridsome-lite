<template lang="pug">
  mixin Content
    //- .icon(class="w-5 h-5 bg-neutral-900 rounded")
    .text(class="w-full py-3 border-b font-semi-bold border-neutral-1400 md:py-0 md:border-0") {{ text }}

  .media-item--small
    g-link(v-if="to" :to="to" :title="text").media-item--small.flex.items-center
      + Content
    .media-item--small.flex.items-center(v-else)
      + Content
      
</template>

<script>
export default {
  props: ['text', 'icon', 'to']
}
</script>

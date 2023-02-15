<template lang="pug">
  .wrapper.py-5
    //- Main support navigation items
    .flex.flex-col.px-6
      mediaItem(
        v-for="(item, i) in support.main" :key="i"
        class="mb-3 text-neutral-1700 text-lg first:mt-0 last:mb-0"
        :text="item.text"
        :to="item.to"
      )
      
    //- hr.border.border-neutral-400.my-5

    //- //- Secondary support Navigation
    //- .flex.flex-col.px-6
    //-   mediaItem.mb-3(
    //-     v-for="(item, i) in support.secondary" :key="i"
    //-     class="mb-3 text-neutral-1700 text-lg first:mt-0 last:mb-0"
    //-     :text="item.text"
    //-     :to="item.to"
    //-   )

    //- TODO: Add support blog posts with the tag "support"
</template>

<script>
import mediaItem from './../media-item.vue'
export default {
  computed: {
    support() {
      return this.$store.state.navigation.support
    }
  },
  components: {
    mediaItem
  }
}
</script>

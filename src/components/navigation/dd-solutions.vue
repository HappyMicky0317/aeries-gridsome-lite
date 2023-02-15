<template lang="pug">
  .wrapper.py-8

    //- See All solutions
    //- .px-8.pb-8
      g-link(class="text-minimum-text font-bold uppercase tracking-wider flex items-center" to="/solutions") 
        span(class="leading-none") See All Solutions
        svg.ml-1(width="10" height="10" viewBox="0 0 10 10")
          path(d="M8 5L2 9V1L8 5Z" fill="currentColor")

    .aeries-sis-umbrella(class="px-4 lg:px-8 pb-8")
      g-link.media-item(
        class="flex items-center"
        :to="aeriesSis.to"
      )
        .text-container( class="w-full" )
          .title(class="text-subhead font-semi-bold text-neutral-1700") {{ aeriesSis.text }}
          .subtitle(class="text-minimum-text -mt-1") {{ aeriesSis.desc }}
          span.text-minimum-text Learn more about the 
            g-link(to="/nextgen" class="text-blue underline") next generation of Aeries.
    
    
    //- Solutions main display
    .feature-grid(class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-8")
      g-link.media-item(
        class="flex items-center"
        v-for="(item, index) in this.$store.getters.solutions"
        :key="index"
        :to="item.to"
      )
        //- .icon
        //-   .icon-placeholder(class="w-8 lg:w-12 h-8 lg:h-12 bg-neutral-900 rounded")
        .text-container.w-full.max-w-64
          .title(class="text-subhead font-semi-bold text-neutral-1700") {{ item.text }}
          .subtitle(class="text-minimum-text -mt-1") {{ item.desc }}

</template>

<style lang="stylus" scoped>
  .media-item
    &:nth-of-type(2n-1)
      margin-left 0
      padding-left 0
    &:nth-of-type(1),
    &:nth-of-type(2)
      padding-top 0
  .max-w-64
    max-width 16rem
</style>

<script>
export default {
  computed: {
    aeriesSis() {
      return this.$store.state.navigation.aeriesSis
    },
    solutions() {
      return this.$store.state.navigation.solutions
    }
  }
}
</script>

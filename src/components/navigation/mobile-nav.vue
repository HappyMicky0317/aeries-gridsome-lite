<template lang="pug">
  mixin nav-header(label)
    .nav-section--header.flex.px-6.pt-3.pb-3.mb-3.border-b.border-neutral-1400(@click="shiftPanels('dashboard')")
      .back-trigger
        Icon(name="cheveron-left" width="24" height="24" color="currentColor")
      .nav-section--label.ml-2= label
  mixin cheveron-right()
    Icon.ml-2(name="cheveron-right" width="16" height="16" color="currentColor")

  //-=-=-=-=-=-=- COMPONENT START -=-=-=-=-=-=-=-=-//
  .mobile-nav-container(class="fixed bg-neutral-1900 z-40 md:hidden overflow-hidden" :class="{isOpen}")
    .mobile-nav(ref="accordion" class="w-full pt-12 text-neutral-300 flex flex-col")
      
      nav.mobile-nav-items(class="divide-y divide-neutral-1600")

        .mobile-nav-item(class="text-lg")
          a(class="flex items-center px-2 py-2" href="/" @click="toggleMobileNav") Home
        
        .mobile-nav-item(class="text-lg")
          nav-accordion(title="Solutions")
            .grid.grid-cols-1(class="divide-y divide-neutral-1600")
              a.media-item.flex.flex-col(
                v-for="item, i in this.$store.getters.solutions"
                :key="i" :href="item.to"
                @click="toggleMobileNav()"
              )
                .text-container(class="w-full py-1 px-2 ")
                  .title(class="text-subhead font-semi-bold") {{ item.text }}
                  .subtitle(class="text-minimum-text -mt-1 text-neutral-1300") {{ item.desc }}
        
        .mobile-nav-item(class="text-lg")
          nav-accordion(title="Resources")
            .grid.grid-cols-1(class="divide-y divide-neutral-1600 text-base")
              a.media-item(v-for="(item, index) in resources" :key="index" :href="item.to"
                class="first:mt-0 last:mb-0 py-1 px-2"
                @click="toggleMobileNav()"
              ) {{ item.text}}
        
        .mobile-nav-item(class="text-lg")
          nav-accordion(title="Community")
            .grid.grid-cols-1(class="divide-y divide-neutral-1600 text-base")
              a.media-item(v-for="(item, index) in support.secondary" :key="index" :href="item.to"
                class="first:mt-0 last:mb-0 py-1 px-2"
                @click="toggleMobileNav()"
              ) {{ item.text}}
        
        
        .mobile-nav-item(class="text-lg")
          a(class="flex items-center px-2 py-3" href="/parents-and-students" @click="toggleMobileNav") Parents & Students
        
        .mobile-nav-item(class="text-xl")
          nav-accordion(title="Support")
            .grid.grid-cols-1(class="divide-y divide-neutral-1600 text-base")
              a(v-for="(item, i) in support.main" :key="i" :href="item.to"
                class="first:mt-0 last:mb-0 py-1 px-2"
                @click="toggleMobileNav()"
              ) {{ item.text}}
        

        
    
    //- .mobile-nav( ref="panels" class="w-100 text-neutral-300 flex" style="--x: 0;")


      

      nav-panel(name="Community")
        .grid.grid-cols-1
          mediaItem(
            v-for="(item, i) in support.secondary" :key="i"
            class="first:mt-0 last:mb-0"
            :text="item.text"
            :to="item.to"
            @click="toggleMobileNav()"
          )

      nav-panel(name="Support")
           

</template>

<style lang="stylus">
  .mobile-nav-container
    right -100vw
    width 100vw
    min-height  100vh
    transition .25s ease-in-out
    &.isOpen
      right 0
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import navAccordion from './mobile-nav-accordion-section'
import navPanel from './mobile-nav-panel.vue'
import mediaItem from './../media-item.vue'

export default {
  data() {
    return {
      list: [
        {label: 'Home', to: '/'},
        {label: 'Solutions', panel: 'solutions' },
        {label: 'Resources', panel: 'resources'},
        {label: 'Community', panel: 'community'},
        {label: 'Parents & Students', to: '/parents-and-students'},
        {label: 'Support', panel: 'support'},
      ]
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state.navigation.mobile.isOpen,
      width: state => state.navigation.mobile.panelWidth,
      panelWidth: state => state.navigation.mobile.panelWidth,
      panelsWidth: state => state.navigation.mobile.panelsWidth,
      support: state => state.navigation.support,
      sections: state => state.navigation.mobile.sections,
      resources: state => state.navigation.resources,
      activeIndex: state => state.navigation.mobile.activeIndex,
    }),

  },
  methods: {
    ...mapMutations([
      'setActiveIndex',
      'setPanelWidth',
      'setPanelsWidth',
    ]),
    toggleMobileNav() { this.$store.commit('toggleMobileNav') },
    
  },
  mounted() {
  },
  components: {
    navPanel,
    navAccordion,
    mediaItem
  }
}
</script>

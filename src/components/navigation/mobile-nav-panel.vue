<template lang="pug">
  .nav-section.overflow-hidden.w-screen(:class="name.toLowerCase()")
    .nav-section--header(
    v-if="name != 'dashboard'"
    class="flex px-4 pt-3 pb-3 border-b border-neutral-1400"
    @click="zeroOffset(); removeActive()")
      .back-trigger
        Icon(name="cheveron-left" width="24" height="24" color="currentColor")
      .nav-section--label.ml-2 {{ name }}
    
    //- Slot for contents
    .panel-container(class="relative")
      slot
</template>

<style lang="stylus">

.panel-container  
  transform translateX(1rem)
  transition .25s ease-out

.nav-section.active .panel-container
    transform translateX(0rem)
  
</style>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: ['name'],
  mounted() {
    if (process.isClient) {
      this.$el.style.maxWidth = `${window.innerWidth}px`
    }
  },
  computed: {
    mobileNavEl() {
      if ( process.isClient ) { return document.querySelector('.mobile-nav') }
    },
  },
  methods: {
    ...mapMutations(['setActiveIndex']),
    zeroOffset() {
      if (process.isClient) {
        this.mobileNavEl.style.setProperty('--x', 0)
      }
    },
    removeActive() {
      if (process.isClient) {
        this.mobileNavEl.childNodes.forEach(el => {
          el.classList.remove('active')
        })
        this.setActiveIndex('dashboard')
      }
    }
  }
}
</script>

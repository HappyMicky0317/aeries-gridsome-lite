<template lang="pug">
  .nav-item(
    @mouseover="handleEnter()"
    @mouseleave="handleLeave()"
    class="px-2 lg:px-5 last:pr-0 text-body"
    :class="{ enter: enter, 'enter-active': active }"
  )
    //- if there is a 'to' path, create a link
    g-link(v-if="to" :to="to"
    class="nav-title py-4 text-body \
    lg:text-subhead focus:outline-none"
    ) {{ title }}
    //- otherwise create a button
    .button(v-else
    class="nav-title text-body \
    lg:text-subhead focus:outline-none flex items-center font-semi-bold cursor-pointer"
    ) 
      | {{ title }}
      //- icon(icon="cheveron-down" class="fill-current w-6 h-6")
    
    .dropdown(
      v-if="this.$slots.default"
      class="translate-y-12"
      class=""
      :class=`{ \
        'invisible': !active, 
        'visible': active, 
        'opacity-0': !active, 
        'opacity-100': active, 
        'center': centered
      }`
      @click="handleLeave()"
    )
      //- .spacer.py-4
      .dropdown-content(class="mt-8 rounded-lg shadow-lg bg-neutral-100"
      @mouseLeave="handleLeave()"
      ) 
        slot
</template>

<style lang="stylus" scoped>
  .nav-item
    justify-items center

  .dropdown
    position absolute
    // overflow hidden
    top 0px
    transition .25s ease-in-out
    will-change transform
    transform-origin 50% 0

    // &.center
    //   width 100%
    //   left 0
    //   display flex
    //   justify-content center
    
    & > a 
      display block
      width 12.5rem
      margin 1rem 0 0 1rem
  .left-50perc
    left 50%
  .no-50perc-x
    transform translateY(3rem)
  .add-50perc-x
    transform translateX(-50%) translateY(3rem)
    
</style>

<script>
let timeoutDuration = 150

export default {
  props: {
    'to': String,
    'title': String,
    'centered': Boolean
  },
  data() {
    return {
      enter: false,
      active: false
    }
  },
  computed: {
    el() { return this.$el },
    dropdown()        { return this.el.querySelector('.dropdown') },
    dropdownContent() { return this.el.querySelector('.dropdown-content') },
    mainNavRect()     { return this.getRect( document.querySelector('.main-nav') ) },
    navItemRect()     { return this.getRect( this.el.querySelector('.nav-title') ) },
    contentRect()     { return ( this.dropdown ? this.getRect( this.dropdownContent ) : null) },
    navTitleDims()    { return { width: this.navItemRect.width, height: this.navItemRect.height } }
  },
  mounted() {
    let slot = this.$el.querySelector('.dropdown')
    let title = this.$el.querySelector('.nav-title')
    let titleRect = title.getBoundingClientRect()

    if (slot) {
      let slotRect = slot.getBoundingClientRect()
      let w = slotRect.width
      let tw = titleRect.width
      let offset = (((w/2) - (tw/2)) * -1) + 'px'
      
      if (slot.classList.contains('center') ) {
        slot.style.marginLeft = offset
      }
      
    }

  },
  methods: {
    getRect(elem) { 
      return elem.getBoundingClientRect() 
    },
    handleEnter() {
      let bgCoords = null
      this.enter = true
      
      setTimeout(() => {
        this.active = true  
      }, timeoutDuration)

      if (this.contentRect) {
        bgCoords = {
          width: this.contentRect.width,
          height: this.contentRect.height,
          top: this.contentRect.top - this.mainNavRect.top,
          left: this.contentRect.left - this.mainNavRect.left
        }
        
        // let VUEX know that the nav is open
        this.$store.commit('openNav')
        // this.dropdownBg.classList.add('open')

        // Set Dropdown BG width & Height
        // this.dropdownBg.style.height      = `${bgCoords.height}px`
        // this.dropdownBg.style.width       = `${bgCoords.width}px`
        if (this.centered) {
          let x = (this.contentRect.left)

          // this.dropdownBg.style.transform   = `translate(${ x }px, ${bgCoords.top}px)`
        } else {
          // this.dropdownBg.style.transform   = `translate(${bgCoords.left}px, ${bgCoords.top}px)`
        }
        
      }
    },
    handleLeave() {
      if (this.dropdown) {
        this.$store.commit('closeNav')
  
        setTimeout(() => { 

          this.enter = false
          this.active = false
          // this.dropdownBg.classList.remove('open')
          // this.dropdownBg.style.height = 0

        }, timeoutDuration)
      }
    }
  }
}
</script>

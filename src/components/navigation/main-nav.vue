<template lang="pug">
  header.page-header(
    class="py-2 md:py-4 h-10 md:h-16 fixed w-full z-50 \
      border-b border-neutral-400 \
      flex items-center justify-center \
      sm:text-minimum-text"
      
    
    :class="{ \
      'bg-neutral-100 border-neutral-400': navStyle == 'light', \
      'bg-neutral-1700 border-neutral-1900': navStyle == 'dark', \
      'text-neutral-100': navStyle == 'clear', \
    }"
  )

    //- Dropdown Navigation Background
    //-=-=-=-=-=-=-=-=- TO DO! Add Fancy Slidey Background -=-=-=-=-=-=-=-=-//
    //- .dropdown-bg(
    //-   class="absolute bg-white rounded shadow \
    //-   translate-y-20 flex justify-center"
    //-   )
    //-   .arrow.shadow.rounded.h-5.w-5(
    //-     class="absolute bg-white"
    //-   )

    //-------------- Navigation Starts Here -----------------//
    .nav-container(
    class="mx-auto relative flex items-center justify-between px-2 md:px-4"
    :class="{ \
    'w-full': isMobile, \
    'container': !isMobile, \
    'text-neutral-100' : navStyle == 'dark' \
    }")

      .nav-container--left(class="flex items-center")
        //- Logo
        h1.logo(class="py-1 md:py-3 flex items-center")
          g-link(to='/')
            g-image(class="h-6 md:h-8" v-if="navStyle == 'dark' || navStyle == 'clear'" src="@/assets/images/aeries-combomark--light.svg" alt="Aeries Software")
            g-image(class="h-6 md:h-8" v-else src="@/assets/images/aeries-combomark.svg" alt="Aeries Software")

        //- Central Navigation Items
        nav.main-nav.nav-list(
          class="pl-4 lg:pl-8 justify-center hidden md:flex\
          font-semi-bold"
        )

          nav-item-dropdown(title="Solutions")
            dd-solutions.text-neutral-1400
          

          nav-item-dropdown(title="Resources") 
            .wrapper(class="py-5")
              div(class="flex flex-col px-6")
                g-link(v-for="item, i in resources" :key="i" :title="item.text" :to="item.to" 
                  class="text-lg text-neutral-1700 mb-3 last:mb-0") {{ item.text }}

          nav-item-dropdown(title="Community")
            .wrapper(class="py-5")
              div(class="flex flex-col px-6")
                g-link(v-for="item, i in community" :key="i" :title="item.text" :to="item.to"
                   class="text-lg font-semi-bold text-neutral-1700 mb-3 last:mb-0") {{ item.text}}

          nav-item-dropdown(title="Parents & Students" to="/parents-and-students")

      .nav-container--right(class="flex items-center")
        //- Right side nav items
        nav(
          class="hidden md:flex items-center"
        )
          nav-item-dropdown(title="Support" centered)
            dd-support.text-neutral-1400
            
            //- hr(class="border border-neutral-400")
            //- .px-6.py-5
              .media-item--small.mb-6.mb-6.text-lg(class='first:mt-0 last:mb-0')
                .media-item--small.flex.items-center
            
          nav-item-dropdown(to="https://my.aeries.com" :title="fullUserName" class="font-semi-bold last:mr-0")
        
        //- Mobile Nav Trigger
        .mobile-nav-trigger(
          class="absolute right-0 mr-3 md:hidden"
          @click="this.toggleMobileNav"
        )
          .nav-trigger.flex.items-center.justify-center(v-if="!this.isOpen")
            svg.fill-current(viewBox="0 0 24 24" width="24" height="24")
              path(fill-rule="evenodd" clip-rule="evenodd" d="M0 6a1 1 0 011-1h19a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h22a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H1a1 1 0 01-1-1z")
          .nav-trigger.flex.items-center.justify-center(v-else)
            Icon(name="close" width="20" height="20" color="currentColor")

       
</template>

<style lang="stylus" scoped>
  .media-item
    &:nth-of-type(2n-1)
      padding-left: 0
    &:nth-of-type(1),
    &:nth-of-type(2)
      padding-top 0
  .nav-list > *
    &:first-of-type
      padding-left 0
    &:last-of-type
      padding-right 0


</style>

<script>
import Solutions from './dd-solutions.vue'
import Support from './dd-support.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      fullUserName: "Sign In ›",
      light:  false,
      dark:   false,
      clear:  false,
      isMobile: false,
    }
  },
  props: [
    'nav-style'
  ],
  methods: {
    didScroll(n) {
      this.$store.commit('scrolled')
      this.$store.commit('scroll_distance', n)
    },
    ...mapMutations([
      'toggleMobileNav'
    ]),
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  },
  created() {
    if (process.isClient) {
      window.addEventListener('scroll', this.didScroll(window.scrollY))
      
      if (this.navStyle == 'dark') {
        this.dark = true
      } else if (this.navStyle == 'clear') {
        this.clear = true
      } else if (!this.navStyle) {
        this.light = true
      }
    }
  },
  mounted() {
    if (process.isClient) {
      window.addEventListener('resize', () => {
        if ( window.innerWidth < 768 ) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }

      })
    }
    if (this.getCookie('FullUserName')) {
      console.log(this.getCookie('FullUserName'))
      this.fullUserName = this.getCookie('FullUserName') + " ›";
    } else {
      this.fullUserName = "Sign In ›"
    }
  },
  beforeDestory() {
    if (process.isClient) {
      window.removeEventListener('resize')
    }
  },
  computed: {
    ...mapState({
      isOpen: state => state.navigation.mobile.isOpen,
      pages: state => state.navigation.main.pages,
      support: state => state.navigation.main.support,
      resources: state => state.navigation.resources,
      community: state => state.navigation.community,
    }),
  },
  components: {
    'dd-solutions': Solutions,
    'dd-support': Support
  }
}
</script>

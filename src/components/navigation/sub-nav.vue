<template lang='pug'>
  aside.subnav(class="fixed w-full border-b mt-10 md:mt-16 z-40 open shadow-sm pt-1"
    :class="[\
      {'border-neutral-400': !borderColor}, borderColor, \
      {'bg-white': !bgColor}, bgColor, \
    ]"
    )
    .subnav-container(class="relative z-40 md:container py-2 md:py-0 px-4 flex items-center -mt-2 md:mt-0"
      :class="[{'bg-white': !bgColor}, bgColor]")
      
      //- if no subnav title link
      h1.subnav-title(
        v-if="!config.titleLink"
        class="text-2xl md:text-title font-light tracking-tight flex items-center"
        :class="[{'text-blue-600': !textColor}, textColor]"
        ) 
          | {{ config.title }}
          .icon-container(class="p-2 md:hidden" @click="toggleMobileSubnav()")
            icon(icon="cheveron-down" class="fill-current w-6 h-6")
      
      //- if there is a subnav title
      a(v-else :href="config.titleLink" :title="config.title")
        h1.subnav-title(
          class="text-2xl md:text-title font-light tracking-tight flex items-center"
          :class="[{'text-blue-600': !textColor}, textColor]"
          ) 
            | {{ config.title }}
            .icon-container(class="p-2 md:hidden" @click="toggleMobileSubnav()")
              icon(icon="cheveron-down" class="fill-current w-6 h-6")
      
     
      
      nav.subnav-nav(class="flex-1 ml-4 flex")
        
        span(v-for="item, i in config.items" :key="i" class="flex items-center")
          
          a(v-if="item.to[0] == '#'" 
            @click="scrollToElement(item.to)"
            class="text-base mx-2 lg:mx-3 py-2 hidden md:inline cursor-pointer relative z-5"
            :class="[{ 'font-bold border-b-4': item.selected }, {'text-blue-500': !textColor}, textColor]"
          ) {{item.label}}

          g-link(v-else :to='item.to'
            class="text-base mx-2 lg:mx-3 py-2 hidden md:inline relative z-5"
            :class="[{ 'font-bold border-b-4': item.selected }, {'text-blue-500': !textColor}, textColor]"
          ) {{ item.label }}

          pulse-dot(v-if='item.pulse' class="-ml-2 z-0 relative")

      .subnav-cta
        slot(name="cta-btn")
    
    .mobile-subnav-container(ref="mobile-subnav" class="absolute w-full z-30 px-2 flex flex-col border-b md:hidden transition duration-200"
      :class="[{'open': mobileSubnavOpen}, {'bg-white': !bgColor}, bgColor, {'border-neutral-400': !borderColor}, borderColor]")
      span(v-for="item, i in config.items" :key="i")
        a(v-if="item.to[0] == '#'" 
            @click="scrollToElement(item.to)"
            class="text-base text-blue-700 my-3"
            :class="[{ 'font-bold border-l-4 pl-2': item.selected }, {'pl-4': !item.selected}, {'text-blue-700': !textColor}, textColor]"
          ) {{ item.label }}
        g-link(v-else :to='item.to'  
            class="text-base text-blue-700 my-3"
            :class="[{ 'font-bold border-l-4 pl-2': item.selected }, {'pl-4': !item.selected}, {'text-blue-700': !textColor}, textColor]"
          ) {{ item.label }}
        
      
</template>

<style lang="stylus">
  .mobile-subnav-container
    top -375%
    &.open 
      top 100%
</style>


<script>
  import PulseDot from '../pulse-dot.vue'

  export default {
    name: 'SubNav',
    props: { config: Object },
    data() {
      return {
        mobileSubnavOpen: false
      }
    },
    methods: {
      scrollToElement(elementID) {
        console.log(elementID)
        var element = document.querySelector(elementID);
        const y = element.getBoundingClientRect().top + window.pageYOffset + -140;
        window.scrollTo({top: y, behavior: 'smooth'});
      },
      toggleMobileSubnav() {
        this.mobileSubnavOpen = !this.mobileSubnavOpen
      }
    },
    computed: {
      borderColor() { return (this.config.borderColor) ? this.config.borderColor: false },
      textColor()   { return (this.config.textColor) ? this.config.textColor: false },
      bgColor()     { return (this.config.bgColor) ? this.config.bgColor: false },
    },
    components: { PulseDot }
  }
</script>

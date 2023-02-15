<template lang="pug">
  section#aeriesconHero.hero-section
    hero(
      full-screen
      single-column
      bg-filter
    )
      //- Paralax
      .bg-container(slot="bg-filter")
        .cover(class="inset-0 absolute bg-neutral-1800 opacity-30" style="z-index: 5")
        .mobile-static(
          class="relative w-full min-h-screen bg-cover md:hidden" 
          :style="{ backgroundImage: 'url(' + staticBgPath +')', zIndex: 4 }"
        )
        .images(class="relative w-full hidden md:block" style="z-index: 4")
          .image-wrapper(
            v-for="image in paralaxImages" 
            :key="image.id"
            :id="image.id"
            class="absolute min-h-screen w-full"
            :style="{ backgroundImage: 'url(' + image.url + ')',  backgroundPosition: 'bottom center',  backgroundSize: 'cover', backgroundRepeat: 'repeat-x', }" 
          )
      
      //- content
      .hero-content(slot="hero-content" class="flex flex-col items-center")
        .ac-swirl-container(class="flex flex-col items-center px-6 md:px-0")
          g-image.ac-swirl(
            :src="thereAndBackAgainImg"
            class=" w-36 md:w-82 -mt-16 mix-blend-multiply"
          )
          h1(class="flex flex-col items-center ac-hero-text-blue mt-4")
            .font-aeries(class="font-extra-bold text-white text-center md:text-7xl text-6xl uppercase") AeriesCon
            span.font-nunito(class="tracking-superwide uppercase font-extra-bold text-white") Spring 2023
            span.font-nunito(class="tracking-wide uppercase font-extra-bold text-white mt-4") March 6-8 @ Ontario Convention Center
          dot-accent(class="my-8" count="9")

          div.flex.flex-row
            a(href="#registration-options" class="bg-red-600 text-white font-bold py-3 px-8 mt-6 text-subhead rounded mr-4") Register for AeriesCon Spring 2023
            a(href="/events/827" class="bg-blue-600 text-white font-bold py-3 px-8 mt-6 text-subhead rounded") Access Fall 2022 replays #[span.text-minimum-text(style="opacity: .60;") ($249)]
          
          //- span.font-nunito(class="md:text-xl text-white mt-1 uppercase tracking-widest") Purchase and view through June 30, 2022
          //- div.mt-8
      
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'AeriesconHero',
  data: () => ({
    thereAndBackAgainImg: 'https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/2023/spring/There+and+back+again.png',
    staticBgPath: 'https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/2023/spring/paralax-images/acs2023-full.jpg',
    scrollDistance: 0,
  }),
  computed: {
    paralaxImages() {
      let images = []
      for (let i=0; i<10; i++) {
        
        images.push({
          url:`https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/2023/spring/paralax-images/${i+1}.png`, 
          id: this.numberText(i) 
        })
      }
      return images.reverse()
    }
  },
  methods: {
    numberText(i) {
      let n
      switch (i) {
        case i=0:
          n = 'one'
          break;
        case i=1:
          n = 'two'
          break;
        case i=2:
          n = 'three'
          break;
        case i=3:
          n = 'four'
          break;
        case i=4:
          n = 'five'
          break;
        case i=5:
          n = 'six'
          break;
        case i=6:
          n = 'seven'
          break;
        case i=7:
          n = 'eight'
          break;
        case i=8:
          n = 'nine'
          break;
        case i=9:
          n = 'ten'
          break;
        default:
          break;
      }
      return n
    }
  },
  mounted() {
    if (process.isClient) {
      const style = (node, styles) => Object.keys(styles).forEach(key => node.style[key] = styles[key])

      window.addEventListener('scroll', (e) => { 
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        this.scrollDistance = scrollTop

        style(document.querySelector('#nine'),  { transform: 'translate(0, ' + this.scrollDistance / 10 + '%' })
        style(document.querySelector('#eight'), { transform: 'translate(0, ' + this.scrollDistance / 9.5 + '%' })
        style(document.querySelector('#seven'), { transform: 'translate(0, ' + this.scrollDistance / 11 + '%' })
        style(document.querySelector('#six'),   { transform: 'translate(0, ' + this.scrollDistance / 12 + '%' })
        style(document.querySelector('#five'),  { transform: 'translate(0, ' + this.scrollDistance / 14 + '%' })
        style(document.querySelector('#four'),  { transform: 'translate(0, ' + this.scrollDistance / 16 + '%' })
        style(document.querySelector('#three'), { transform: 'translate(0, ' + this.scrollDistance / 24 + '%' })
        style(document.querySelector('#two'),   { transform: 'translate(0, ' + this.scrollDistance / 28 + '%' })
        style(document.querySelector('#one'),   { transform: 'translate(0, ' + this.scrollDistance / 30 + '%' })
      })
    }
    
  },
}
</script>

<style lang="stylus" scoped>
  .images 
    height 110vh
    top -10vh
</style>

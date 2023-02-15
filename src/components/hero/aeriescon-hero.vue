<template lang="pug">
  section#aeriesconHero.hero-section
    //- cover-image="ac-f-2021/Aeriescon-BACK-TO-THE-FUTURE__BG.jpg" 
    hero(
      video
      :video-src="videoSrc"
      tall 
      single-column
      bg-filter
    )
      .bg-filter-content(slot="bg-filter" class="absolute inset-0 backdrop-filter -backdrop-hue-rotate-60 backdrop-blur-lg") 
        span &nbsp;
      .hero-content(slot="hero-content" class="flex flex-col items-center")
        .ac-swirl-container(class="flex flex-col items-center")
          g-image.ac-swirl(
            src="@/assets/images/aeriescon/aeriescon-swirl.svg"
            class="w-40 -mt-16 mix-blend-multiply"
          )
          h1(class="flex flex-col items-center ac-hero-text-blue mt-4")
            .font-aeries(class="font-extra-bold text-white text-center md:text-7xl text-6xl uppercase") AeriesCon
            span.font-nunito(class="tracking-superwide text-white") VIRTUAL SUMMIT
          dot-accent(class="my-8" count="9")
          span.font-nunito(class="text-lg md:text-3xl text-white uppercase tracking-widest") Catch Aeriescon Replays
          
          span.font-nunito(class="md:text-xl text-white mt-1 uppercase tracking-widest") Purchase and view through June 30, 2022
          //- div.mt-8
            h2(class="flex flex-col text-center text-white")
              span Early Bird registration opens 
              span.font-bold.text-xl Wednesday January 5, 2022
        //- .ac-b2tf-image-container(class="px-4 md:px-4")
          g-image.b2tf-image(
            src="@/assets/images/ac-f-2021/Aeriescon-BACK-TO-THE-FUTURE.png"
            class="mt-16"
            alt="Back to the Future"
          )
      
</template>

<script>
export default {
  name: 'AeriesconHero',
  data: () => ({
    videoSrc: [
      { src: "bg-1.m4v", type: 'video/mp4' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
  .text-drop-shadow
    filter drop-shadow(0 2px 2px rgba(darken(#9d0385, 35%), .75))
  .ac-hero-text
    &-blue
      filter drop-shadow(0 5px 3px rgba(darken(#1f2e53, 60%), .76))
    &-magenta
      filter drop-shadow(0 5px 3px rgba(darken(#9d0385, 20%), .75)) drop-shadow(0 15px 6px rgba(darken(#9d0385, 20%), .75))
  .b2tf-image
    filter drop-shadow(0 9px 8px rgba(0,0,0,.5)) drop-shadow(0 6px 45px rgba(#154ca0, .7))
  .ac-swirl 
    filter drop-shadow(0 10px 10px rgba(darken(#1f2e53, 40%), .76)) drop-shadow(0 10px 3px rgba(darken(#1f2e53, 10%), .25))
</style>

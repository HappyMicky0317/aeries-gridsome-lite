<style>
.hero.f22 > .bg-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0%;
}

.f22 .mask-text {
    -webkit-animation: scale-up-center 1;
    animation: scale-up-center 1s;
}
.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.85);
            transform: scale(0.85);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

</style>

<template lang="pug">
  section#aeriesconHero.hero-section
    //- cover-image="ac-f-2021/Aeriescon-BACK-TO-THE-FUTURE__BG.jpg" 
    hero(:cover-image="'aeriescon/ac-f-2022/aeriescon-f22-bg-1920-75-opacity.png'" tall single-column).f22
      .bg-filter-content(slot="bg-filter" class="absolute inset-0 backdrop-filter -backdrop-hue-rotate-60 backdrop-blur-lg") 
        span &nbsp;
      .hero-content(slot="hero-content" class="flex flex-col items-center")
        .ac-swirl-container(class="flex flex-col items-center")
          g-image.ac-swirl(
            alt="AeriesCon Logo"
            src="@/assets/images/aeriescon/ac-f-2022/aeriescon-logo-f22.svg"
            class="w-28 -mt-16 mb-8 mix-blend-multiply"
          )
        h2(class="tracking-widest text-white font-nunito uppercase text-lg md:text-4xl mb-8") And that's a wrap on
        .aeriescon-mask-text(class="flex flex-col items-center")
          g-image.mask-text(
            alt="Gradient AeriesCon text"
            src="@/assets/images/aeriescon/ac-f-2022/aeriescon-mask-text.png"
            class="mix-blend-multiply"
          )
          span(class="text-3xl md:text-6xl font-extra-bold text-white font-aeries mb-4") FALL 2022
          p.font-nunito(class="text-lg md:text-2xl text-white uppercase tracking-widest mt-8") 
            | Thank you to everyone who made the week such a success
          //- p.font-nunito(class="md:text-xl text-white uppercase tracking-widest mt-8 text-center px-12") 
            | Join us onsite for AeriesCon Spring 2023
            br(class="")
            | March 6-8, 2023 • AT THE ONTARIO CONVENTION CENTER
          div.flex.flex-row
            a(href="#registration-options" class="bg-red-600 text-white font-bold py-3 px-8 mt-6 text-subhead rounded mr-4") Register for AeriesCon Spring 2023
            a(href="/events/827" class="bg-blue-600 text-white font-bold py-3 px-8 mt-6 text-subhead rounded") Access Fall 2022 replays #[span.text-minimum-text(style="opacity: .60;") ($249)]
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
  name: 'AeriesconHeroF22',
  data: () => ({
  }),
  props: {
    eventPageUrl: { type: String, default: '/'}
  }
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

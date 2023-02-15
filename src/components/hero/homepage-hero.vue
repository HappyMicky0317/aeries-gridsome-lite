<template lang="pug">
  //- HOME HERO
  .home-hero
    .container.z-10.relative(class="py-24 flex flex-col md:flex-row items-center")
      .text-side.text-neutral-100(
        class="px-4 flex flex-col \
        md:w-1/2")
        h2.font-bold.leading-none(
        class="text-neutral-1600 font-aeries text-center md:text-left \
        font-display text-display md:text-xx-large")
          | Schools Run
          br
          | On Aeries
        .mt-12(class="text-neutral-1400 px-4 md:px-0 md:pl-0 text-center md:text-left") 
          | For 25 years Aeries Software has and will continue to innovate in the landscape of Student Information Systems.
        .buttons.flex.mt-10( class="justify-center md:justify-start" )
          g-link( to="/contact-sales" 
            class="bg-blue px-4 py-2 rounded font-semi-bold shadow" ) 
            | Request a Demo
          g-link( to="/support" 
            class="text-neutral-1400 font-bold hidden md:inline border-2 border-blue-300 bg-neutral-100 shadow px-4 py-2 roundedml-4" ) 
            | Get Support
      div(class="h-56 md:h-10 md:w-1/2 md:max-w-1/2 pl-8 relative flex items-center")
        //- g-image(src="@/assets/images/school-iso-illustration.svg" class="absolute height-auto -mr-56")
    
    
    .blobs
      .illustration(class="absolute")
        illustration()
        //- g-image(src="@/assets/images/school-iso-illustration.svg" class="absolute height-auto -mr-56")

      .blob--right.absolute.right-0
        svg(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 951.41 629.06')
          g(data-name='Layer 2')
            path(d='M117.13 40L84.86 74.66a48.83 48.83 0 01-31.46 15.4L25 92.57a26.81 26.81 0 00-14.85 47.79L37.6 161.1A48.83 48.83 0 0156 209.87l-9 43.57A62.05 62.05 0 10167.52 275l.07-.63a48.85 48.85 0 0149.1-43.19l-.4-.77a115.54 115.54 0 00103.71-116C319.47 54.42 272 4.12 212.11.25A115.27 115.27 0 00117.13 40z' fill='#faa31b')
            path(d='M622.49 144.32C563.94 146 482.49 74.73 470 45.91S419.1 4.1 388.4 17.42c-26.4 11.46-44.66 43.11-36.61 77.13 19.6 82.83-31.06 149.42-94.55 178.36-128 58.32-157.43 147.8-126.54 221.43 65.83 157 205.69 36 310.14 32.6 85.68-2.8 231.59 136.82 354.45 93.93C941.67 569.78 984.8 433.4 926 297.77c-49.64-114.5-116.2-158.83-303.51-153.45z' fill='#58a5db')
      .blob--left.absolute.left-0
        svg(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 783.86 785.22')
          g(data-name='Layer 2')
            path(d='M557.52 191.19c-2.64-.89-5.29-1.67-7.95-2.38l.13-.24-30.45-14.94a57.41 57.41 0 01-32-55.64l1.05-14.7a35.79 35.79 0 00-51.55-42.52 57.39 57.39 0 01-61.72-14.19l-26.55-27.91A47.82 47.82 0 00265.23 63l1.49 4.7a57.41 57.41 0 01-39.62 72.75l-26.19 7.15c-.78.2-1.56.41-2.33.63l-.7.19a85.08 85.08 0 00-57.14 56.78c-13.35 43.69 10.73 90.7 54 105.46a84.85 84.85 0 0046 2.55l50.07-7.57a57.42 57.42 0 0149.63 16.63l75.09 76.81a131 131 0 0014.47 14.8 130.68 130.68 0 0049.14 26.88c66.52 19.57 137.45-16.91 160.31-82.37a130.82 130.82 0 00-81.93-167.2z' fill='#d4e8f6')
            path(d='M150.68 775.53a105.77 105.77 0 0036.86-28.1l56.38-61.78a139.56 139.56 0 01195.45-10.58l55.74 49.18a165.15 165.15 0 10103.81-273.63l-96.17 7.05a139.58 139.58 0 01-136.63-80.06c-16.13-34.49-57.9-50.27-92.33-34a69 69 0 00-39.44 58.69v.12a69.32 69.32 0 000 7.35v21.46a139.59 139.59 0 01-106.62 135.91l-23.57 5.72A106.26 106.26 0 009.55 723c24.27 53.36 87.93 77.05 141.13 52.53z' fill='#b6e3fa')

</template>

<script>
import Illustration from '@/components/svg/school-iso-illustration.vue'

export default {
  components: {
    Illustration,
  }
}
</script>

<style lang="stylus" scoped>
.blobs
  width 100%
  top 0
  position absolute
  height 1400px
  overflow-x hidden

.illustration
  top 29rem
  z-index 4
  left 53%
  width 360px
  margin-left -190px

.blob--left
  top 9rem
  margin-left -22rem
  width 593px
  z-index 0

.blob--right
  top -1rem
  margin-right -23rem
  width 513px
  z-index 0

@media (min-width: 768px)
  .blob--left
    width 540px
    top 15rem
    margin-left -18rem
  .blob--right
    width 743px
  .illustration
    top 5rem
    z-index 4
    left 53%
    width 700px
    margin-left 0
@media (min-width: 1024px)
  .blob--left
    width 783px
    top 12rem
  .blob--right
    width 951px
</style>

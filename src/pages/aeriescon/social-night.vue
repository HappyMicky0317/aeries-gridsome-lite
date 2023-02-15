<template lang='pug'>
  Layout(navStyle="dark")
    a.cta-btn(href="https://my.aeries.com/Events/Home/SelectEvent/610" target="_blank" slot="cta-container" class="bg-blue-600 py-1 px-2 md:px-6 text-neutral-300 rounded my-2") Register now
    
    section#aeriesconHero.hero-section
      hero(cover-image="virtual-summit-jumbo-bg.jpg" tall single-column)
        .hero-content(slot="hero-content" class="flex flex-col items-center")
          g-image(class="mb-6" src="@/assets/images/aeriescon-virtual-logo.svg")
          h4(class="tracking-superwide font-extra-bold text-neutral-100\
          font-aeries text-center text-display\
          md:text-subhead mb-3 uppercase") 
            | Spring 2021
          h2(class="font-extra-bold leading-none text-neutral-100\
          font-aeries text-center text-display\
          md:text-xx-large uppercase") 
            | AeriesCon
          h3(class="font-extra-bold leading-none text-neutral-100\
          font-aeries text-center text-display\
          md:text-display uppercase") 
            | Virtual Summit
          
          g-image(class="my-6" src="@/assets/images/aeriescon-dots-divider.svg")

          h5(class="font-extra-bold leading-none text-neutral-100\
          font-aeries text-center uppercase")
            | March 8-11 • Exclusively online
          div(class="md:w-2/5 mt-4 text-white px-4 md:px-0 md:pl-0 text-center text-subhead")
            | Another multi-day interactive event featuring learning, networking, and exploration of all things Aeries
          div.mt-8
            a.cta-btn(href="https://my.aeries.com/Events/Home/SelectEvent/610" target="_blank" slot="cta-container" class="bg-blue-600 py-2 px-3 md:px-6 text-neutral-300 rounded my-2 text-subhead") Register now



    //- Side-by-side photo sections

    section#unforgettableAeriescon(class="aeriescon-dot-hero-bg")
      .container(class="px-4 md:px-0 py-12 md:py-12 mt-12")
        .flex.items-center
          div(class="md:w-2/5 px-2 m-auto")
            span(class="flex flex-col items-start")
              span(class="text-sm") LIVE ENTERTAINMENT FEATURING
              h1(class="text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1700") THE GET DOWN BOYS
            p(class="text-neutral-1300 mt-8 text-subhead") Morbi vestibulum dapibus diam. Quisque id tincidunt arcu, rhoncus varius neque. Nulla at libero ut sem sagittis molestie scelerisque at elit. Proin nisl ipsum, cursus non risus ut, rhoncus gravida mauris. Duis malesuada rhoncus vulputate. Aenean eleifend pulvinar nulla mollis molestie. 
 
          div(class="hidden md:flex md:w-1/2 px-2")
            g-image(quality="100" src="@/assets/images/aeriescon-virtual-hero-photo.png" class="m-auto rounded")

    section#networkVirtually.container.cta(class="px-4 md:px-0 py-12 md:py-12 mb-16")
      .flex.items-center
        div(class="hidden md:flex md:w-1/2 px-2")
          g-image(quality="100" src="@/assets/images/virtual-summit.gif" class="m-auto")
        div(class="md:w-2/5 px-2 m-auto")
          h1(class="text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1700") Get your Know-it-all on with TRIVIA!
          p(class="text-neutral-1300 mt-10 text-subhead") Nam in convallis ipsum. Integer mauris est, pellentesque nec tellus vel, iaculis vehicula quam. Suspendisse eros neque, semper id lacinia in, pharetra vitae justo. Donec diam risus, gravida a lacinia non, placerat ut quam.
           
    section#unforgettableAeriescon()
      .container(class="px-4 md:px-0 py-12 md:py-12 mt-12 mb-12")
        .flex.items-center
          div(class="md:w-2/5 px-2 m-auto")
            h1(class="text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1700") Place it all on the line at AeriesCon Casino Night!
            p(class="text-neutral-1300 mt-8 text-subhead") Sed laoreet posuere felis. Suspendisse tristique vestibulum suscipit. Donec porta scelerisque magna eu hendrerit. Maecenas ac pellentesque ante. Quisque venenatis, lectus in imperdiet sodales, augue mauris rhoncus eros, et iaculis risus urna eu dolor. Vivamus at hendrerit tellus. Nulla vel sollicitudin lorem, in aliquam leo.
 
          div(class="hidden md:flex md:w-1/2 px-2")
            g-image(quality="100" src="@/assets/images/aeriescon-virtual-hero-photo.png" class="m-auto rounded")


    //- Snack Ribbon Dark Blue

    //-section#aeriesconSnackRibbon.hero-section
      hero(cover-image="aeriescon-hero-bg-2.jpg" single-column class="px-4 md:px-0")
        .hero-content(slot="hero-content" class="flex flex-col items-center my-12 md:mt-24 mb-18")
          .text-white
            h1(class="text-display font-aeries font-bold leading-tight tracking-tight mb-8") New virtual format, same great conference
            .snackGrid
              .biteSnacks(class="md:flex py-6")
                .biteSnack(class="w-full md:w-1/3 md:pr-8 pb-6 md:pb-0")
                  h3(class="font-aeries font-bold text-title pb-3 leading-tight") 14+ session categories
                  p Whether you're just getting started in Aeries, learning to become a Query pro or jumping into Aeries system administration, our session categories offer a wide range of deep-dive subjects on the Aeries student information system.

                .biteSnack(class="w-full md:w-1/3 md:pr-8 pb-6 md:pb-0")
                  h3(class="font-aeries font-bold text-title pb-3 leading-tight") 55+ expert presenters
                  p School staff, vendor partners, and members of the Aeries Software team make up our stellar lineup of session presenters AeriesCon, offering a broad range of perspectives and expertise in managing student data.

                .biteSnack(class="w-full md:w-1/3 md:pr-8 pb-6 md:pb-0")
                  h3(class="font-aeries font-bold text-title pb-3 leading-tight") 95+ sessions
                  p Sit in on our sessions and learn how to maximize your usage of Aeries, solve common SIS problems, learn about new features, and absorb the knowledge of our combined hundreds of school districts.

    



</template>

<style scoped>
.aeriescon-dot-hero-bg {
  background-image: url("../../assets/images/aeriescon-dots-grid-bg.svg");
  background-repeat: no-repeat;
  background-position: -0% 50%;
}
@media (max-width: 1300px) {
 .aeriescon-dot-hero-bg {
  background-image: none;
  background-repeat: no-repeat;
  background-position: -0% 50%;
} 
}

    .contentLayout2 p {
      margin-bottom: 24px;
    }
    .contentLayout2 h1,
		.contentLayout2 h2,
		.contentLayout2 h3,
		.contentLayout2 h4,
		.contentLayout2 h5,
		.contentLayout2 h6 {
			margin-top: 24px;
      margin-bottom: 12px;
      font-size: 24px;
      font-family: "Aeries Sans";
      color: black;
		}

		.contentLayout2 strong {
			font-weight: bold;
		}
</style>

<style lang="stylus" scoped>
  .opening .dept
    &:after
      margin .1rem 0 .5rem 0
      content ''
      width 3rem
      height 2px
      background-color theme('colors.neutral.600')
</style>

<script>
  export default {
    name: 'AeriesCon',
    computed: {

    },
    data() {
      return {
        scrollToElement(elementID) {
          console.log(elementID)
          var element = document.querySelector(elementID);
          const y = element.getBoundingClientRect().top + window.pageYOffset + -140;
          window.scrollTo({top: y, behavior: 'smooth'});
        },
      }
    },
    methods: {
    
    },
    metaInfo() {
      return {
        title: 'AeriesCon'
      }
    }
  }
</script>

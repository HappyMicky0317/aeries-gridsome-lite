<style scoped lang="stylus">
.home-hero {
  background: url('~../assets/images/testimonial-hero-bg.svg'), url('~../assets/images/palos-verdes-people.jpg') center 50%;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-cityscape {
  background-image: url('~../assets/images/bg-cityscape.svg')
  background-size: 100%
  background-repeat: no-repeat
  background-position: 0% 100%
}

@media (max-width: 1024px) {
  .home-hero {
    background-image: none;
  }
}
</style>

<template lang="pug">
    //- SOCIAL PROOF
    section#districtLogoTestimonialAlternative(class="bg-cityscape text-neutral-1600")  
        div
            .container(class="p-4 md:p-20 md:pb-10 text-center")
              div
                h1(class="text-title md:text-display font-aeries font-bold leading-tight")
                  | With the leading SIS platform, 
                  br
                  | you're in good company.
                //- If no description is provided by the component, hide the element.
                p(class="text-base mx-auto mb-5 w-full mt-5")
                  | When you join the Aeries network, you're not just a customer, you're a part of the family of districts working collaboratively towards a common formula for success.
              div(class="flex flex-col md:flex-row mt-12")
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 10+ years
                  p.font-bold Average timespan district customers stay with Aeries
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 30m+
                  p.font-bold Student record interactions in Aeries every day
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 80%+
                  p.font-bold Aeries team from former school district positions
        div
          .container(class="p-4 pb-12 md:px-20 md:pb-40 text-center")
            div
              g-image(class="m-auto" src="@/assets/images/district-logos.png" width="700")

</template>

<script>
  export default {
    data() {
      return {
      
      }
    }
    
  }
</script>
<style scoped lang="stylus">
#interoperability {
  background-image: url('~../assets/images/aeries-stack-bg.png');
  background-position: 100% 100%;
  background-repeat: no-repeat;
}

@media (max-width: 1024px) {
  #interoperability {
    background-image: none;
  }
}
</style>

<template lang="pug">
//- INTEROPERABILITY SECTION
section#interoperability(class="bg-neutral-1900")
  .container.z-10.relative(class="py-12 md:py-24 flex flex-col md:flex-row items-center")
    div(class="md:w-3/5 md:max-w-3/5 pr-8 relative hidden md:flex items-center")
      g-image(src="@/assets/images/aeries-stack.png" class="height-auto m-auto")
    .text-side.text-neutral-100(class="px-4 flex flex-col md:w-2/5")
      span(class="font-bold text-white text-minimum-text pb-2 text-center md:text-left") {{suptitle}}
      h2.font-bold.leading-none(
      class="text-white font-aeries text-center md:text-left \
      text-title md:text-display")
        | {{title}}
      .mt-6(class="text-white px-4 md:px-0 md:pl-0 text-center md:text-left") 
        | {{descriptionPrimary}}
      .mt-6(v-if="descriptionSecondary" class="text-white px-4 md:px-0 md:pl-0 text-center md:text-left") 
        | {{descriptionSecondary}}
      .mt-6(v-if="descriptionTertiary" class="text-white px-4 md:px-0 md:pl-0 text-center md:text-left") 
        | {{descriptionTertiary}}
      .sublink(v-if="linkText" class="flex mt-10 text-white text-subhead m-auto md:ml-0 md:mr-0")
        g-link(class="text-white font-bold underline" to="/solutions") {{linkText}}
</template>

<script>
  export default {
    props: {
      'to': String,
      'linkText': {
        type: String,
        default: 'Build your district\'s stack on Aeries'
      },
      'title': {
        type: String,
        default: 'Interoperability first'
      },
      'descriptionPrimary' : {
        type: String,
        default: "Many SIS platforms tout a “unified all-in-one” system, but too often that means sacrificing existing workflows and tools for a poorly-bundled solution that does not meet your district’s unique needs."
      },
      'descriptionSecondary' : {
        type: String,
        default: "Aeries is different. Our platform is designed for Open Data Standards like Ed-Fi to maximize your existing tools and processes. With Aeries, you're not locked into a single bloated, expensive system."
      },
      'descriptionTertiary' : {
        type: String,
        default: ""
      },
      'suptitle': {
        type: String,
        default: '"ALL IN ONE" IS NOT ONE-SIZE-FITS-ALL'
      }
    },
    data() {
      return {

      }
    }
  }
</script>
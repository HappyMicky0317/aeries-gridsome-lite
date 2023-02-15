<template lang="pug">
section#ctaDark(v-bind:class="{ 'bg-neutral-1900': !secondaryColor, 'border-t border-b' : !noBorder}" class="border-neutral-500")
  .container(class="p-8 lg:px-40 lg:py-20")
      .flex(class="flex-col lg:flex-col items-center")
        div(class="w-full flex-col flex items-center text-center justify-center lg:text-center lg:items-center")
          h1(class="text-header md:text-display font-aeries font-bold leading-tight text-white") {{ displayTitle }}
          h2(class="text-subhead md:text-title leading-tight mt-5") {{subheader}}
        div(class="w-full mt-5 lg:mt-0 flex content-center items-center justify-center")
          a(
            :href="primaryButtonURL" 
            v-if="primaryButtonText" 
            class='rounded-full bg-red-700 text-white px-4 py-2 rounded font-semi-bold shadow'
          )
            | {{primaryButtonText}}
          
          a(
            :href="secondaryButtonURL" 
            v-if="secondaryButtonText" 
            class="text-white px-4 py-2 rounded font-semi-bold shadow'"
          )
            | {{secondaryButtonText}}

</template>

<script>
export default {
// props : [
// 'displayTitle', 
// 'subheader', 
// 'primaryButtonText', 
// 'secondaryButtonText', 
// 'primaryButtonURL', 
// 'secondaryButtonURL',
// 'secondaryColor',
// 'noBorder'
// ]
    props: {
      'displayTitle': {
        type: String,
        default: 'Ready to get started?'
      },
      'subheader': {
        type: String
      },
      'primaryButtonText': {
        type: String,
        default: "Contact sales"
      },
      'secondaryButtonText': {
        type: String,
        default: ""
      },
      'primaryButtonURL': {
        type: String,
        default: "/contact-sales"
      },
      'secondaryButtonURL': {
        type: String,
        default: ""
      },
      'noBorder' : {
        type: Boolean,
        default: false
      },
      'secondaryColor' : {
        type: String
      }
      
    }
}
</script>

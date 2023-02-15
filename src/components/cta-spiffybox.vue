<template lang="pug">
  .cta-spiffybox.overflow-hidden( class="py-20 bg-neutral-400 px-4" )
    .container
      //- Top
      .top( class="flex flex-col sm:flex-row \
      bg-white py-8 px-4 sm:px-8" )
        .icon( class="h-12 w-12 rounded-full \
        bg-neutral-1600 mb-4 mr-0 sm:mb-0 sm:mr-6" )
        .text( class="flex-1 mb-4 sm:mb-0" )
          .title.font-aeries( class="tracking-tight font-bold \
          text-header sm:text-display \
          leading-none" )
            | {{ title }}
          .subtitle( class="text-subhead sm:text-title" ) 
            | {{ subtitle }}
        .button(v-if="buttonText")
          g-link( :to="to"
          class="inline border-2 border-neutral-1300 rounded \
          px-4 py-1 font-bold" )
            | {{ buttonText }}
      
      //- Bottom
      .bottom( class="bg-neutral-500 py-8 \
        px-4 sm:px-8 flex flex-col md:flex-row" )

        .bullets( class="md:w-120 md:mr-8" )
          slot(name="bullets")

        g-link.image(:to="to")
          image-3D(:image="image")
</template>

<script>
  export default {
    props: {
      'to': String,
      'buttonText': {
        type: String,
        default: 'assign text with the \'button-text\' prop.'
      },
      'title': {
        type: String,
        default: 'Spiffy Title'
      },
      'subtitle': {
        type: String,
        default: 'We know how to do these.'
      },
      'image': String
    }
    
  }
</script>

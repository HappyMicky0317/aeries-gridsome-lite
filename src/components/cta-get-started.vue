<template lang="pug">
div(v-bind:class="{ 'bg-neutral-300': !secondaryColor, 'border-t border-b' : !noBorder}" class="border-neutral-500")
  .container(class="p-8 lg:px-40 lg:py-20")
      //- g-image(
      //-   class="h-20 mx-auto mb-10"
      //-   :src="require('!!assets-loader!~/assets/images/megaphone.svg')"
      //- )
      .flex(class="flex-col lg:flex-col items-center")
        div(class="w-full flex-col flex items-center text-center justify-center lg:text-center lg:items-center")
          h1(class="text-header md:text-xx-large font-aeries font-bold leading-tight") {{ displayTitle }}
          //- h1.text-display.font-aeries.font-semi-bold {{displayTitle}}
          h2(v-if="subheader" class="text-subhead md:text-title leading-tight mt-2") {{subheader}}
          p(v-if="paragraph" class="mt-4") {{paragraph}}
        div(class="w-full mt-5 lg:mt-0 flex content-center items-center justify-center")
          a(v-if="primaryButtonText" class='bg-blue px-4 py-2 rounded shadow text-white mt-8')
            | {{primaryButtonText}}
          .button(v-if="secondaryButtonText" class="text-subhead text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border mt-5 border-blue-500 hover:border-transparent mx-3 px-4 py-1 rounded")
            | {{secondaryButtonText}}

</template>

<script>
export default {
props : [
'displayTitle', 
'subheader',
'paragraph',
'primaryButtonText', 
'secondaryButtonText', 
'primaryButtonURL', 
'secondaryButtonURL',
'secondaryColor',
'noBorder']
}
</script>

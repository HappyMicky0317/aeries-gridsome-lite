<template lang="pug">
  .screenshot( class=" mt-8 -ml-10 -mr-6 \
  md:mt-8 md:-mr-10 md:ml-8 \
  lg:-mt-16 ")
    .spiffimg__container( class="rounded-lg overflow-hidden" )
      g-image( fit="outside"
      :src="require('!!assets-loader!~/assets/images/' + image)"
      )
</template>

<style lang="stylus" scoped>
  .screenshot
    perspective 1500px

  .spiffimg__container
    transform rotate3d(0.5,-0.866,0,19deg)
    box-shadow  34.3px 62.5px 125px -25px rgba(50,50,93,.5),
                20.6px 37.5px 75px -37.5px rgba(0,0,0,.6)
</style>

<script>
  export default {
    props: {
      'image': {
        type: String,
        default: 'media-placeholder.png'
      },
    }
  }
</script>

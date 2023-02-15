<template lang='pug'>
  .pulse-dot(
    class="rounded-full"
    :class=" lg ? 'w-8 h-8' : 'w-3 h-3' "
  )
</template>

<style lang='stylus'>
  .pulse-dot
    background-color theme('colors.red.600')
    animation pulsar 2.25s infinite

  @keyframes pulsar
    0%
      transform scale(.8)
      background-color theme('colors.red.700')

    20%
      transform scale(1)
      background-color theme('colors.red.600')

    100%
      transform scale(.8)
      background-color theme('colors.red.700')

</style>

<script>
  export default {
    name:"pulse-dot",
    props: {
      lg: Boolean
    }
  }
</script>

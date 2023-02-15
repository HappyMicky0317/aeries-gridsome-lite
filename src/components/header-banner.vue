<template lang='pug'>
  section.header0-banner(
    class="py-2 mt-16 text-center"
    :class="[textColor, bgColor]"
  )
      .container.mx-auto
        span.font-bold {{ message }} <br>
        span.text-minimum-text {{ secondaryMessage}}
</template>

<style lang='stylus'></style>

<script>
  export default {
    name:"HeaderBanner",
    data: () => ({}),
    props: {
      bgColor: {
        type: String,
        default: 'bg-blue-800'
      },
      textColor: {
        type: String,
        default: 'text-white'
      },
      message: {
        type: String,
        default: 'No message supplied, add prop "message" to header-banner element.'
      },
      secondaryMessage: {
        type: String,
      },
    }
  }
</script>

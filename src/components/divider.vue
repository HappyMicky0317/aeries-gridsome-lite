<template lang='pug'>
  div(class="divider container")
    .line(class="border-neutral-500 border-t" :class="{'my-4' : !noMargins}")
</template>

<script>
  export default {
    props: {
      'noMargins': {
        type: Boolean,
        default: false
      }
  }
}
</script>

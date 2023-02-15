<template lang="pug">
.time-block(class="flex flex-col md:flex-row mb-4")
  span(class="font-bold md:min-w-1/4") {{ time }}
  span(class="") {{ note }}
  
</template>

<script>
export default {
  name: 'TimeBlock',
  props: {
    time: String,
    note: String,
  },
  data: () => ({}),
}
</script>

<style lang="stylus"></style> 

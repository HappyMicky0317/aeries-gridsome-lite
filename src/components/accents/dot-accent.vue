<template lang="pug">
  .dot-accent(class="flex space-x-4 items-center")
    svg.dot(
      v-for="n in 9"
      :key="n"
      viewBox="0 0 3 3" style="width: 6px; height: 6px;"
    )
      circle(cx="1.5" cy="1.5" r="1.5" fill="white")


</template>

<script>
export default {
  name: 'DotAccent',
  data: () => ({}),
}
</script>

<style lang="stylus"></style>
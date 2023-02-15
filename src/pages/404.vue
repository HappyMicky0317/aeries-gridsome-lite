<template lang='pug'>
  Layout.err404
    .container(class="py-20")
      .404-image-container(class="flex justify-center")
        g-image(src="@/assets/images/404-lost-in-space.png")
      .text-container(class="text-center mt-12")
        h1.title(class="text-display text-neutral-1600 font-extra-bold font-aeries") Uh Oh!
        .text-lg(class="text-neutral-1300") Looks like we cant find the page you were looking for.
</template>

<style lang='stylus'></style>

<script>
  export default {
    data() {
      return {
        msg: null
      }
    },
    methods : {
    },
  }
</script>

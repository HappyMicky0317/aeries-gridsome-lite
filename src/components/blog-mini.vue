<template lang="pug">
  g-link.blog-mini.container(:to="url")
    .image
      g-image(:src="imageUrl" v-show="!event")
      g-image(src="@/assets/images/nextgen-events-default-img.jpg" v-show="event")
    .meta.mt-3
      span.text-minimum-text(v-if="superscript") {{ superscript }}
      h3.mt-1.font-extra-bold.text-neutral-1700.text-xl {{ title }}
</template>

<script>
export default {
  name: 'MiniBlog',
  props: ['imageUrl', 'superscript', 'title', 'url', 'event'],
  data: () => ({}),
}
</script>

<style lang="stylus"></style>

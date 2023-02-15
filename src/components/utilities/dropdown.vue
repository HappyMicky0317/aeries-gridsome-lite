<template lang="pug">
.relative
  //- Provide the text for the dropdown button
  button(type='button' @click='isOpen = !isOpen' class='font-semi-bold font-subhead ml-auto pr-5 mt-5 relative z-10 block rounded-full overflow-hidden focus:outline-none focus:border-white')
    | {{dropdownText}}
    //-TODO: Replace this downward arrow when we get icons implemented.
    img(class="inline ml-2 w-4 m-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAy0lEQVRIie3TPWoCURSG4QcSELuElLOCWNgGxC3YuYDpXIBFtpAV2MU+nVuIjQtwBRZWYjpBUJw0x4TIhKhzSTUvnGbud17O/RlqalIyRJbAk4XrBzkKLNCqIG+FowjnF3d4j4UPdK+QP2EVjhkeTgMNvEVgi/4F8h420TtB87fgDUYR3GNwhjzHLnpecXvORM84RNNLgtyfk41PJrtmp6WUnW2Vuyqlg3UIp1FFfOtUlR959P2+CyzRTiU/kmEeleKPL+U+qqbmH/kEO341nt7A5z4AAAAASUVORK5CYII=")
  a.fixed.inset-0.h-full.w-full.cursor-default(v-if='isOpen' @click='isOpen = false' tabindex='-1')
  .absolute.left-0.mt-2.py-2.w-48.bg-white.rounded-lg.shadow-xl(v-if='isOpen')
    //- Loop through each link passed by data
    div(v-for="(item, index) in items" :key class="text-left px-5 py-1")
      a(:href="item.to") {{item.title}}

</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      dropdownText: "Button",
      items: [
          {title: "Home", to: "/"},
          {title: "Blog", to: "/blog/"},
          {title: "Blog Post", to: "/blog-single/"}
      ]
    }
  },
  created() {
    //- Close the dropdown when pressing Esc
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false
      }
    }
    document.addEventListener('keydown', handleEscape)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape)
    })
  }
}
</script>
<template lang="pug">
div(class="md:w-1/4 m-5")
  div(class="overflow-hidden")
    g-image(
    :src="require('!!assets-loader!~/assets/images/' + image)"
    alt=''
    class="w-full hover:shadow")
    div(class="py-4 text-center text-neutral-1700")
      div(class="font-bold text-title font-aeries mb-2") {{title}}
      p(class="text-subhead mb-2")
        | {{description}}
      //- a(class="text-blue-600 font-bold")
      //-   | {{linkText}}
</template>

<script>

export default {
  methods: {
    changeFilter(filterKey) {
      this.$emit('changeFilter',  filterKey)
    }
  },
  props: ['image', 'title', 'description', 'filterKey', 'linkText', 'scrollTo']
}
</script>

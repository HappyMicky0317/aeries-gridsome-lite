<template lang="pug">
.flex
  img(src="@/assets/images/brandmark.svg" :alt="title" class="w-10 h-10 mr-4" :class="{'rounded-full' : rounded }")
  .text-sm.mt-1
    p(v-if="title").text-neutral-1900.font-semi-bold.leading-none 
      | {{title}}
    p(v-if="description").text-minimum-text.text-neutral-1300.mt-1
      | {{description}}
</template>

<script>
export default {
  props: ['title', 'description', 'rounded']
}
</script>

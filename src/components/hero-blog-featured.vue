<template lang="pug">
div(class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-4")
  div(class="col-span-1 lg:col-span-3 shadow-double-drop rounded-md overflow-hidden")
    mega-post(:post="megaPost")
  
  div(class="col-span-1 lg:col-span-2")
    FeaturedBlogPostItem.mb-5(v-for="node in featured" :key="node.id" :post="node")
</template>

<script>

export default {
  name: 'HeroBlogFeatured',
  props: ['posts'],
  computed: {
    megaPost() { return this.posts[0] },
    featured() { return this.posts.slice(1) },
  },
  methods: {
    publishDate(time) {
      return this.$dayjs(time).format("MMM DD, YYYY")
    }
  }
}
</script>

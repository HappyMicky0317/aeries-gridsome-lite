<template lang="pug">
g-link(:to="path" class="grid grid-cols-3 gap-4 shadow-double-drop rounded-md" :title="post.node.title.rendered")
  .post-image(class="col-span-1")
    img(class="" v-if="featuredImage" :src='featuredImage' :alt='post.node.title.rendered')
    g-image(class="" v-else src='https://aeries-com.s3.us-east-2.amazonaws.com/blog/AeriesBlogDefault.png' :alt="post.node.title.rendered")
  .post-text(class="col-span-2 py-4 pr-4")
    //- span.text-minimum-text.text-neutral-1300(v-if="post.node.tags") {{post.node.tags[0]}}
    h3(class="text-subhead font-semi-bold leading-none text-blue" v-html="post.node.title.rendered")
    //- | {{ post.node.date }}
    span.post-date(class="text-xs text-neutral-1200") {{ publishDate(post.node.date) }}
</template>

<script>
export default {
  props: ['post'],
  computed: {
    featuredImage() { 
      if (this.post.node.acf) {
      return this.post.node.acf.featured_image
      } else {
      return false
      } 
      },
    path() { return `/blog/${this.post.node.slug}`}
  },
  methods: {
    publishDate(time) {
      return this.$dayjs(time).format("MMM DD, YYYY")
      // return moment(time).format('LL')
    }
  }
}
</script>

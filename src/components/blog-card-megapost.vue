<template lang="pug">
g-link(:to='`/blog/${post.node.slug}`' :title="post.node.title.rendered")
  .overflow-hidden
    img.w-full(v-if="featuredImageUrl" 
      :src='featuredImageUrl' 
      :alt='post.node.title.rendered'
    )
    img.w-full(v-else src="" :alt='post.node.title.rendered')
    
    .p-4
      //- p(class="text-neutral-1300 text-base mb-2 font-semi-bold") Inside Aeries
      .font-semi-bold.font-aeries.mb-2(class="text-title md:text-display text-blue" v-html="post.node.title.rendered")
      span.post-time(class="text-xs text-neutral-1500") {{ publishDate(post.node.date) }}
      p.excerpt(class="text-neutral-1800 text-base mt-2")
        div(v-html="post.node.excerpt.rendered")
      //- ImageListItem(class="mt-5"
        :title="post.author.name" 
        description="Makers of Aeries"
        image="brandmark.svg"
        rounded=true)
</template>

<script>
export default {
  name: 'MegaPost',
  props: ['post'],
  computed: {
    featuredImageUrl() {
      let url 
      if (this.post.node.acf.featured_image) {
        url = this.post.node.acf.featured_image
      } else {
        url = 'https://aeries-com.s3.us-east-2.amazonaws.com/blog/AeriesBlogDefault.png'
      }
      return url
    }
  },
  methods: {
    publishDate(time) {
      return this.$dayjs(time).format("MMM DD, YYYY")
    }
  },
}
</script>

<style lang="stylus"></style>

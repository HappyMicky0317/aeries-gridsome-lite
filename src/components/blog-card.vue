<template lang="pug">
article.post.rounded-lg.overflow-hidden.shadow-double-drop
  //- | {{ post }}
  g-link.overflow-hidden(:to="`/blog/${post.slug}`", :title="post.title.rendered")
    //- | {{ post.postFields.featuredImage }}
    //- img.w-full(v-if="post.acf.featuredImage" :src='post.acf.featuredImage' :alt='post.title.toString()')
    img.post-featured-image.w-full.mr-4(
      v-if="featuredImageUrl",
      :src="featuredImageUrl",
      :alt="post.title.rendered.toString()"
    )
    img.post-featured-image.w-full.mr-4(
      v-else,
      src="https://aeries-com.s3.us-east-2.amazonaws.com/blog/AeriesBlogDefault.png",
      :alt="post.title.rendered.toString()"
    )
    hr.border.border-t-px.border-neutral-400

    .post-content.p-4.flex.flex-col.justify-around
      .post-title.font-semi-bold.text-title.font-aeries.text-blue(
        v-html="post.title.rendered.toString()"
      )
      .post-date.text-xs.text-neutral-1400.mt-2 {{ publishDate(post.date) }}
      p.text-neutral-1300.text-base.flex-1.mt-4(v-html="post.excerpt.rendered")

      //- .flex
        img(src="@/assets/images/brandmark.svg" :alt="title" class="w-10 h-10 mr-4")
        .text-sm.mt-1
          p.text-neutral-1900.font-semi-bold.leading-none 
            | Aeries Team
          p.text-minimum-text.text-neutral-1300.mt-1
            | Makers of Aeries

      //- ImageListItem.mt-4(
      //-   title="Aeries Team",
      //-   description="Makers of Aeries",
      //-   image="brandmark.svg",
      //-   rounded=false
      //- )
      //- ^ only on the Aeries logo do we show a square avatar, individuals will show as rounded
</template>

<script>
export default {
  name: "BlogCard",
  props: ['post'],
  computed: {
    featuredImageUrl() {
      let url 
      if (this.post.acf.featured_image) {
        url = this.post.acf.featured_image
      } else if (this.post.featuredImage) {
        url = this.post.featuredImage.node.mediaItemUrl
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
  }
};
</script>

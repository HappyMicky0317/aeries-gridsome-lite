<template lang="pug">

.container
  section(class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10")
    article.post(v-for="post in posts" class="rounded-lg overflow-hidden shadow-double-drop")
      a(:href='post.path').overflow-hidden
        //- | {{ post.acf }}
        //- img.w-full(v-if="post.acf.featuredImage" :src='post.acf.featuredImage' :alt='post.title.toString()')
        img.post-featured-image(class="w-full mr-4" v-if="post.postFileds.featuredImage" :src='post.postFields.featuredImage' :alt='post.title')
        img.post-featured-image(class="w-full mr-4" v-else src='https://aeries-com.s3.us-east-2.amazonaws.com/blog/AeriesBlogDefault.png' :alt="post.title.toString()")
        hr(class="border border-t-px border-neutral-400")
        
        .post-content(class="p-4 flex flex-col justify-around")
          
          .post-title(class="font-semi-bold text-title font-aeries" v-html="post.title")
          
          p(
            class="text-neutral-1300 text-base flex-1 mt-4"
            v-html="post.excerpt"
          )

</template>

<script>

export default {
  props: ['posts'],
  methods: {}
}
</script>

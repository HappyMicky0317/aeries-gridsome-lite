<template lang="pug">
  div.blog-post
      a(v-if="post.featuredImage" :href="'https://www.aeries.com' + post.url" :title="post.title" target="_blank") 
        img.blogImage(v-if="post.featuredImage != '/Media/Default/BlogPost/blank.png'" :src="'https://www.aeries.com' + post.featuredImage" :alt="post.title")
        span(v-else)
      g-link(:to="post.url" :title="post.title")
        h2 {{ post.title }}
      // a( :href="'https://www.aeries.com' + post.url" :title="post.title" target="_blank")
      //   h2 {{ post.title }}
      //- div(v-html="content(post.content).body")
      | {{ content(post.content).excerpt }}
</template>

<script>
import showdown from 'showdown'
let converter = new showdown.Converter()

export default {
  methods: {
    content(str) {
      str = str.replace(/(\\r\\n\\r)/gi, '\r\n\r')
            .replace(/(\\r\\n)/gi, '\r\n')
      let converted = converter.makeHtml(str)
      let excerpt = converted.replace(/<[^>]*>?/gi, '').substring(0, 185) + '...'
      return { body: converted, excerpt }
    }
  },
  props: ['post']
}
</script>

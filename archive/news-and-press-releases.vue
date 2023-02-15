<template lang='pug'>
  Default
    div(slot="hero")
      h1(
        class="text-title font-aeries md:text-display lg:text-xx-large \
        font-bold tracking-tight"
      ) News & Press Releases
    
    .articles(class="space-y-12")
      article.news-pr(v-for="article in articles" :key="article.id" class="flex flex-col")
        h2.title(class="text-2xl font-aeries font-bold") {{ article.title }}
        span.publishDate(class="mt-1 text-xs text-neutral-1300 flex items-center") 
          icon(icon="time" class="fill-current h-3 w-3")
          span(class="ml-2") {{ publishDate(article.date) }}
        div.content(class="mt-2 text-neutral-1300" v-html="article.content")

</template>

<page-query>
  query{
    newsPrs {

      nodes{
        id
        slug
        title
        content
        excerpt
        date
      }

    }
  }
</page-query>

<style lang='stylus'>
  .news-pr
    .content p
      margin-top .75rem
    .content blockquote
      font-size theme('fontSize.lg')
      font-weight theme('fontWeight.semi-bold')
      text-align center
      margin 1.75rem 2.5rem 2.5rem
      color theme('colors.neutral.1700')
      font-style italic
      border 2px solid theme('colors.blue.800')
      background theme('backgroundColor.neutral.100')
      box-shadow theme('boxShadow.double-drop')
      border-radius theme('borderRadius.DEFAULT')
      
      p
        padding theme('padding.6') theme('padding.8')
        line-height theme('lineHeight.relaxed')
        margin-bottom .75rem
    
    .content a
      color theme('textColor.blue.500')
      text-decoration underline
    .content strong
      color theme('textColor.neutral.1600')
      font-weight theme('fontWeight.bold')
</style>

<script>
  export default {
    name: 'NewsAndPressReleases',
    metaInfo: () => ({
      title: 'News & Press Releases'
    }),
    data: () => ({
      msg: null
    }),
    computed: {
      articles() {
        let allArticles = this.$page.newsPrs.nodes
        // let newArr = []
        // allArticles.forEach( article => newArr.push(article.node) )
        return allArticles
      }
    },
    methods: {
      publishDate(time) {
        return this.$dayjs(time).format("MMM DD, YYYY")
        // return moment(time).format('LL')
      }
    }
  }
</script>

<template lang="pug">
Layout
    section#post-meta-header(class="mt-6") 
      .container(class="px-2 md:px-20") 
        .breadcrumb(class="flex items-center text-xs ")
          g-link(to="/blog" title="Back to blog" class="ml-3 font-bold text-blue-600 flex items-center") 
            span.news-paper-icon(class="w-4 h-4")
              icon(icon="news-paper" class="fill-current")
            span(class="ml-3") Blog
          span(class="text-neutral-600 px-2")
            icon(icon="cheveron-right" class="fill-current w-4 h-4")

          //- These blog post titles come in from the database as HTML entities, so em dashes for example display as '&#8211;'.
          //- Yay, hacks.
          span(class="text-neutral-1300") {{decodeHtmlEntity(post.title)}}
    
    section#post-header(class="mt-5")
      .container(class="px-5 md:px-20")
        div(class="lg:flex mb-4")
          //- When there's no image, this area contains some special layout logic.
          div(v-if="post.acf" class="sm:w-full lg:w-2/5 md:my-6" :class="{'lg:w-full' :  post.acf.featured_image}")
            .py-4(:class="{'text-center' : !post.acf.featured_image}")
              //- If there are tags, show tags. TODO: Show tags more betterly
              //- p.text-neutral-1300.text-base.mb-2.font-semi-bold.uppercase(v-if="$context.post.tags.length") 
              //-   | {{$context.tags[0]}}
              div(class="font-semi-bold font-aeries mb-2 text-title md:text-display")
                span(v-html=" post.title ")
              //- If there is an excerpt to be had, show it.
              span.publish-date(class="text-xs text-neutral-1400 mt-2") {{ publishDate(post.date) }}
              p.excerpt(class="text-neutral-1800 text-base mt-2" v-if="post.excerpt")
                div(v-html="post.excerpt")
              //- If there is an author provided on the post, show them. Otherwise, show "Aeries Team".
              
              .mt-4
                
                .flex
                  .text-sm.mt-1
                    //- p(v-if="post.author.node.name").text-neutral-1900.font-bold.leading-none 
                    //-   | {{post.author.node.name}}


          div(class="sm:w-full lg:w-3/5 md:my-6 m-6")
            img.w-full(v-if="post.acf && post.acf.featured_image" :src='featuredImageUrl' :alt='post.title')

    section#post-body(class="container px-0")
      article.blog-post-body(class="md:max-w-960 mx-auto my-10 bg-neutral-300 py-16 text-subhead")
        div(v-html="post.content")
      
    
    CTASubscribe(
      display-title="Get the latest from Aeries"
      secondary-color="true")
</template>

<page-query> 
query{
  allPosts {
    edges {
      node {
    id
    title {
      rendered
    }
    date
    slug
    excerpt {
      rendered
    }
    content {
      rendered
    }
    author
    acf {
      featured_image
    } 
  }
    }
  }
}
</page-query>

<style lang="stylus"> 

  .blog-post-body li
    margin-bottom: 2rem;
    list-style: disc;
    list-style-position outside;


  .blog-post-body a, {
    color: #3868b2;
    text-decoration: underline;
  }

  .blog-post-body p:nth-of-type(1)::first-letter {
      font-size: 4.5em;
      float: left;
      margin-top: 25px;
      margin-right: 9px;
      margin-bottom: 10px;
      font-weight: bold;
  }

  .blog-post-body
      h1, h2, h3, h4, h5, p, ul {
        padding-left: 6rem;
        padding-right: 6rem;
        margin-bottom: 2rem;
        line-height: 2.2rem;
      }
      h1, h2, h3, h4, h5 {
        font-family: Aeries Sans
        font-weight: 600;
        margin-top: 40px;
      }

      h1 {
        font-size: 2.43rem;
      }

      h2 {
        font-size: 1.93rem;
      }

      img {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      blockquote {
        overflow: visible;
        text-align: center;
        width: 60%;
        margin: 0 auto;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        font-size: 1.93rem;
        line-height: 2.5rem;
        background-image: url('~../assets/images/blockquote-quotation.svg');
        background-repeat: no-repeat;
      }

      .blogImage {
          max-width 640px
          width 100%
      }

      figure > img {
        margin: 0 auto;
        margin-top: 60px;
        margin-bottom: 60px;
      }
      
      ul {
        padding-left: 10rem;
      }

  @media screen and (max-width: 1024px) {
    .blog-post-body {
      h1, h2, h3, h4, h5, p, ul {
        padding-left: 2rem;
        padding-right: 2rem;
        margin-bottom: 2rem;
        line-height: 2.2rem;
      }
    }
  }

</style>

<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: `${this.decodeHtmlEntity(this.post.title)} - Aeries Blog`
    }
  },
  data() {
    return {
      post: {},
    }
  },
  methods: {
    publishDate(time) {
      return this.$dayjs(time).format("MMM DD, YYYY")
      // return moment(time).format('LL')
    },
    decodeHtmlEntity(str) {
      if (str && typeof str === 'string') {
      return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
      });
    }
    },
    decodeHTMLEntities(str) {
    var element = document.createElement('div');
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
      return str;
    }
  },
  mounted() {
      //Loop through this.$page.allPosts.edges[i].node and return the post whose id matches this.$context.id
      for (let i = 0; i < this.$page.allPosts.edges.length; i++) {
        if (parseInt(this.$page.allPosts.edges[i].node.id) === this.$context.id) {
          this.post = this.$page.allPosts.edges[i].node

          this.post.title = this.post.title.rendered
          this.post.content = this.post.content.rendered
          this.post.excerpt = this.post.excerpt.rendered
        }
      }

  },
  computed: {
    featuredImageUrl() {
      let url = 'https://aeries-com.s3.us-east-2.amazonaws.com/blog/AeriesBlogDefault.png'

      // const acfFeatImg = this.$page.post.postFields.featuredImage
      // const featImg = this.$page.post.featuredImage
      
      if (this.post && this.post.acf.featured_image) {
      const acfFeatImg = this.post.acf.featured_image
      const featImg = this.post.acf.featured_image

      if (acfFeatImg) {
        url = acfFeatImg
      }
      else if (featImg) {
        url = featImg.node.mediaItemUrl
      }

      console.log('url: ', url)
      }
      return url
      
    },
  }
}
</script>

<style scoped lang="stylus">
.bg-cityscape {
  background-image: url('~../assets/images/bg-cityscape.svg')
  background-size: 100%
  background-repeat: no-repeat
  background-position: 0% 100%
}
</style>

<template lang="pug">
  Layout(navStyle="dark")
    section
        div
            .container(class="p-5 md:p-20 text-center")
              .text-center.inline-flex.items-center.justify-center.w-12.h-12.mb-6
                g-image(:src="require('!!assets-loader!~/assets/images/brandmark.svg')")
              h1(class="text-title font-aeries font-bold leading-tight tracking-tight md:text-display")
                | Delivering data-driven, intuitive, and innovative solutions that empower communities to advance student success.
              
              //- If no description is provided by the component, hide the element.
              p(class="text-base mx-auto mb-5 w-full mt-5")
                | Our vision is to build a world where data <span class="font-bold">empowers</span> educators, never impedes. We believe strongly in the supporting role of technology in education, but recognize that there's no replacement for the wisdom and determination of those supporting students' academic successes every day. That's why our goal is to build tools that allow educators to focus on what they do best: educating.
    section  
        div(class="bg-cityscape bg-neutral-300 border-t border-b border-neutral-500")
            .container(class="p-5 md:p-20 text-center")
              div
                h1.text-display.font-aeries.font-bold.leading-tight
                  | Sharing best practices, adapting to changes.
                //- If no description is provided by the component, hide the element.
                p(class="text-base mx-auto mb-5 w-full mt-5")
                  | When you join the Aeries network, you're not just a customer, you're a part of the family of districts working collaboratively towards a common formula for success.
              div(class="flex flex-col md:flex-row")
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 10+ years
                  p.font-semi-bold Average timespan district customers stay with Aeries
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 30m+
                  p.font-semi-bold Student records managed by districts using Aeries SIS
                div(class="w-full md:w-1/3 mb-10 md:mb-0 px-4")
                  h1.font-aeries.text-display.font-bold 80%
                  p.font-semi-bold Of Aeries employees coming from jobs at districts that used Aeries
    section  
        div(class="border-b border-neutral-500")
            .container(class="p-5 md:p-20 text-center")
              div
                g-image(src="@/assets/images/district-logos.png")
    section(class="container mx-auto p-5 md:py-20")
        .items-center.flex.flex-wrap
          div(class='md:w-3/5 w-full ml-auto mr-auto px-5 md:pl-10')
            div(class='mt-10 md:mt-0')
              h1.font-semi-bold.text-display.font-aeries.font-bold.tracking-tight 
                | Schools run on Aeries

              p.mt-4.text-lg.leading-relaxed.text-neutral-1800
                | Our software helps you collect, store, process, and transform your student data into actionable insights that support student success. With a robust platform that integrates with the tools you're already using, you can think of Aeries as the "operating system" powering daily operations at all your school sites.
              h1.mt-12.mb-2.font-aeries.text-title.font-bold.tracking-tight
                | Some reasons why districts choose Aeries
              ul.list-none
                li
                  .flex.items-center
                    div
                      div.text-xs.font-semi-bold.inline-block.p-2.mt-2.rounded-full.mr-3.bg-blue-100
                        Icon(
                          class="fill-current text-blue-500"
                          name="wrench"
                          width="18"
                          height="18"
                        )
                    div
                      h4.text-neutral-1700
                        | Flexible, extensible and customizable
                li
                  .flex.items-center
                    div
                        div.text-xs.font-semi-bold.inline-block.p-2.mt-2.rounded-full.mr-3.bg-blue-100
                          Icon(
                            class="fill-current text-blue-500"
                            name="user-group"
                            width="18"
                            height="18"
                          )
                    div
                      h4.text-neutral-1700 Tools for every role
                li
                  .flex.items-center
                    div
                        div.text-xs.font-semi-bold.inline-block.p-2.mt-2.rounded-full.mr-3.bg-blue-100
                          Icon(
                            class="fill-current text-blue-500"
                            name="chart-bar"
                            width="18"
                            height="18"
                          )
                    div
                      h4.text-neutral-1700 State reporting made easy

          div(class='mt-5 w-full md:w-2/5 md:mt-0 ml-auto mr-auto')
            img.max-w-full(alt='...' src='~../assets/images/back-to-school.svg')

    section(class="mx-auto p-5 py-10 md:py-20 bg-neutral-300 border-t border-b border-neutral-500")
        .items-center.flex.flex-wrap.container
          .w-full.ml-auto.mr-auto(class='md:w-2/5')
            img.max-w-full(alt='...' src='~../assets/images/building-aeries-in-the-cloud.svg')         

          .w-full.ml-auto.mr-auto(class='md:p-0 md:pl-20 md:w-3/5')
            div(class='mt-10 md:mt-0')
              h1.font-semi-bold.text-display.font-aeries.font-semi-bold.tracking-tight
                | Eagles make Aeries

              p.mt-4.text-lg.leading-relaxed.text-neutral-1800
                | Aeries is plural to <span class="italic font-bold">aerie</span>, which is another word for an eagle's nest. We've decided to call our team "eagles", because together we build the nest where your student data lives. Only, it's in the cloud - not in a tree or on a cliff.
              p.mt-4.text-lg.leading-relaxed.text-neutral-1800
                | Our mission is our driving force, and our impact in edtech comes down to our team's belief in that mission. That's why our diverse team is made up of creative, experienced people who want their hard work to matter.
              
              .mt-4.text-lg.leading-relaxed.text-neutral-1800 #[a(href="/about/leadership" class="font-aeries text-blue-500 underline font-bold") Our company leaders] are some of the most seasoned and capable talent working in edtech today.
              .mt-4.text-lg.leading-relaxed.text-neutral-1800 #[a(href="/careers" class="font-aeries text-blue-500 underline font-bold") Careers] at Aeries offer opportunities within a collaborative and innovation-focused environment, where your work can impact millions.
    //- section(class="mx-auto p-5 md:py-20 bg-neutral-300 border-t border-b border-neutral-500")
    //-   h1.mb-10.font-semi-bold.text-display.font-aeries.text-center 
    //-     | Latest news from Aeries
    //-   .flex.flex-wrap.justify-center
    //-     .container
    //-       .grid(class="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10")
    //-         blog-card( v-for="post in posts" :key="post.id" :post="post" )
        
        
</template>

<page-query>
query {
  allPosts {
    edges {
    node {
      title {
        rendered
      }
      date 
      slug
      author
      acf{
        featured_image
      }
      excerpt {
        rendered
      }
      content {
        rendered
      }
    }
  }
  }
}
</page-query>

<script>
export default {
  name: "PageAbout",
  computed: {
    posts() { return this.$page.allPosts.edges }
  },
  metaInfo: {
    title: 'About Us'
  }
}
</script>

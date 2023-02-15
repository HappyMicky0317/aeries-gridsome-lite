<template lang="pug">
Layout(navStyle="light")

  //- HOME HERO
  //- TODO: COMPONENTIZE But replace with the versatile hero Zack made.
  section#homeHero
    .container.z-10.relative(class="py-12 md:py-48 flex flex-col md:flex-row items-center")
      .text-side.text-neutral-100(
        class="px-4 flex flex-col \
        md:w-2/5"
      )
        .box(class="mb-10 flex")
          .pill-box(class="bg-neutral-500 text-neutral-1300 py-2 px-6 rounded-full shadow-sm")
            | Learn more about the 
            g-link(to="/nextgen" class="text-blue-600 underline font-bold") next generation of Aeries.
        g-image(class="w-12 m-auto md:ml-0 md:mr-0 mb-4 shadow-lg rounded-lg" src='@/assets/images/brandmark.svg')
        h2.font-bold.leading-none(
        class="heroHeader text-neutral-1600 font-aeries text-center md:text-left \
        font-display text-display md:text-xx-large tracking-tight leading-tight")
          | Aeries is where student data lives
        .mt-6(class="heroBlurb text-neutral-1400 px-4 md:px-0 md:pl-0 text-center md:text-left") 
          | With a comprehensive K-12 platform, California and Texas districts, parents and students can get the access and oversight they need to maximize student success.
        .buttons(class="justify-center md:justify-start flex mt-10" )
          g-link( to="/contact-sales?origin=homepage-hero" 
            class="bg-blue px-4 py-2 rounded shadow" ) 
            | Contact sales
          g-link( to="/solutions" 
            class="text-blue-600 font-bold hidden md:inline bg-neutral-100 px-4 py-2 rounded md:ml-4" ) 
            | Learn more about Aeries
        .sublink(class="flex mt-10 text-neutral-1600 text-minimum-text m-auto md:ml-0 md:mr-0 md:mt-6")
          span Looking for help with Aeries? 
          g-link(class="text-blue-600 pl-1 font-bold" to="/support") Get support
      div(class="md:w-3/5 md:max-w-3/5 relative hidden md:flex items-center")
        //- g-image(src="@/assets/images/homepage-jumbo-hero.png" class="absolute height-auto")
        //- Lottie go here
        lottie-animation(:path="lottieJSONPath" :speed="1" :loop="true" :autoplay="true" style="width: 100%; height: 100%;")

  SectionSolvingStudentData(darkenedBackground=true)

  CTADistrictLogoTestimonialAlternative 
  
  //- WHAT MAKES AERIES DIFFEREN
  //- TODO: COMPONENTIZE
  section(id="whatMakesAeriesDifferent" class="bg-neutral-300 text-neutral-1600") 
      div
          .container(class="p-4 md:p-20 md:pb-40 text-center")
            div
              h1.text-display.font-aeries.font-bold.leading-tight
                | What's the advantage of Aeries?
            div(class="flex flex-col md:flex-row mt-12")
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32 h-32" src="@/assets/images/header-cap-diamond.png")
                h1.font-aeries.text-title.font-bold.mt-4 Values
                p Committed to your success, not maximizing profits
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-graduation.png")
                h1.font-aeries.text-title.font-bold.mt-4 Resources
                p Training and guidance for every stakeholder role
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-devices.png")
                h1.font-aeries.text-title.font-bold.mt-4 Platform
                p Tools to support every user and use case
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-support.png")
                h1.font-aeries.text-title.font-bold.mt-4 Support
                p Dependable team made up of former K-12 staff
            div(class="flex flex-col md:flex-row md:mt-12 justify-center")
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-search.png")
                h1.font-aeries.text-title.font-bold.mt-4 Intuitive tools
                p Spend less time searching and more time finding
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-ribbon.png")
                h1.font-aeries.text-title.font-bold.mt-4 Loved by clients
                p 10 year average customer lifetime
              div(class="w-full md:w-1/4 mb-10 md:mb-0 px-4")
                g-image(class="m-auto w-32" src="@/assets/images/header-cap-pricing.png")
                h1.font-aeries.text-title.font-bold.mt-4 Pricing
                p Beating competitors on both features and cost

  //- SHINE A LIGHT ON AERIES SOLUTIONS SECTION
  CTAShineALight(class="py-12 md:py-0")

  //- MOBILE APPS SECTION
  //- TODO: COMPONENTIZE
  section#mobileApps(class="bg-neutral-300 md:py-24")
    div(class="container bg-white shadow-md rounded py-12 px-4 md:px-0")
      div(class="text-center mb-12")
        g-image(class="w-16 shadow-lg rounded-lg m-auto" src='@/assets/images/brandmark.svg')
        h1(class="font-aeries text-header md:text-display font-bold pt-4 text-neutral-1700 tracking-tight leading-tight")
          | Access Aeries anywhere with mobile apps
        p(class="w-full md:w-3/5 m-auto text-subhead")
          | Convenient access to student data in Aeries right from your mobile device, for all stakeholder roles.
      div(class="md:flex w-full md:w-3/5 m-auto")
        div(class="mobileAppSpot w-full md:w-1/2 md:pr-4")
          .persona-images.mb-4
            g-image.w-16.inline.pr-4(src='@/assets/images/teacher-persona-1.png')
            g-image.w-16.inline.pr-4(src='@/assets/images/teacher-persona-2.png')
            //-
          h3(class="text-subhead text-green-700 font-bold") Aeries Mobile: Teacher
          p Take attendance. Access the gradebook. Even play games to memorize student names!
          .mobile-download(class="mt-4")
            a(target="_blank" href="https://apps.apple.com/us/app/aeries-teacher/id1479356035")
              g-image.w-32.inline.pr-2(src='@/assets/images/mobile-download-ios.png')
            a(target="_blank" href="https://play.google.com/store/apps/details?id=com.aeries.teacherapp&hl=en_US")
              g-image.w-32.inline.pr-2(src='@/assets/images/mobile-download-android.png')
        div(class="mobileAppSpot w-full md:w-1/2 flex-col md:pr-4 mt-12 md:mt-0")
          .persona-images(class="mb-4")
            g-image.w-16.inline.pr-4(src='@/assets/images/parent-persona-1.png')
            g-image.w-16.inline.pr-4(src='@/assets/images/student-persona-1.png')
          h3(class="text-subhead text-orange-800 font-bold") Aeries Mobile: Parent & Student
          p Stay on top of academic progress. Simulate assignment scores with the “What if?” tool.
          .mobile-download.mt-4
            a(target="_blank" href="https://apps.apple.com/us/app/aeries-mobile-portal/id1261483635")
              g-image.w-32.inline.pr-2(src='@/assets/images/mobile-download-ios.png')
            a(target="_blank" href="https://play.google.com/store/apps/details?id=com.aeries.mobileportal&hl=en_US")
              g-image.w-32.inline.pr-2(src='@/assets/images/mobile-download-android.png')
      .text-center.my-12
        g-link(to="/solutions/aeries-mobile-apps" class="text-subhead text-blue-600 font-bold") See all Aeries apps
  
  //-INTEROPERABILITY FIRST SECTION
  SectionInteroperability

  //- PARTNERS IN EDUCATION SECTION
  //- TODO: COMPONENTIZE
  //- section#partnersInEducation
  //-   .container(class="z-10 relative py-12 md:py-48 mb:pb-24 flex flex-col md:flex-row items-center")
      
  //-     .image-side(class="w-full md:w-3/5 md:max-w-3/5 p-4 md:pr-8 relative flex flex-col items-center")
  //-       //- g-image(src="@/assets/images/partner-logos.svg" class="height-auto m-auto")
  //-       .partner-logo-grid(class="grid grid-cols-2 gap-8 px-8")
  //-         .partner-logo(
  //-           v-for="partner in partners" 
  //-           :key="partner.title"
  //-           class="flex justify-center items-center"
  //-         )
  //-           img(
  //-             :src='partner.featuredImage.node.mediaItemUrl' 
  //-             :alt="partner.title"
  //-             class=""
  //-           )
      
  //-     .text-side.text-neutral-100(class="px-4 flex flex-col md:w-2/5")
  //-       h2.font-bold.leading-none(
  //-       class="mt-12 md:mt-0 text-neutral-1700 font-aeries text-center md:text-left \
  //-       text-title md:text-display")
  //-         | Partners in education
  //-       .mt-6(class="text-neutral-1700 px-4 md:px-0 md:pl-0 text-center md:text-left") 
  //-         | Aeries Software works collaboratively with ed-tech leaders to bring the best to your districts and schools. Through offering partner services, we are able to offer a wide range of additional functionality to your teachers, administrators, students and parents.
  //-       .sublink.flex.mt-10.text-minimum-text
  //-         g-link(class="text-blue-600 text-subhead underline font-bold m-auto md:ml-0 md:mr-0" to="/about/partners-in-education") Learn more about Aeries partners


  //- HISTORY OF INNOVATION VIDEO
  //- TODO: COMPONENTIZE
  section#historyOfInnovation
    .container.z-10.relative(class="pt-12 md:pb-48 md:pt-24 flex flex-col md:flex-row items-center")
      .text-side.text-neutral-100(
        class="px-4 flex flex-col \
        w-full md:w-1/2")
        h2.font-bold.leading-none(
        class="mt-12 md:mt-0 text-neutral-1700 font-aeries text-center md:text-left \
        text-title md:text-display")
          | A history of innovation
        .mt-6(class="text-neutral-1400 px-4 md:px-0 md:pl-0 text-center md:text-left") 
          | Did you know that the founder of Aeries developed an early version of the modern student information system in the 1960s on a mainframe computer that took up the whole room?
        .mt-6(class="text-neutral-1400 px-4 md:px-0 md:pl-0 text-center md:text-left") 
          | Since our inception, Aeries has always had one mission: to empower communities to advance student success by developing innovative tools and lasting partnerships with our client districts.
        
      div(class="w-full md:w-3/5 md:max-w-1/2 md:pl-8 relative flex items-center mt-4 md:mt-0")
        .wistia_responsive_padding(style='padding:56.25% 0 0 0;position:relative;')
        .wistia_responsive_wrapper(style='height:100%;left:0;position:absolute;top:0;width:100%;')
          iframe.wistia_embed(
            src='https://fast.wistia.net/embed/iframe/8rzfzapoei?preload=true&videoFoam=true' 
            title="Aeries - 'History' Video" 
            allow='autoplay; fullscreen' 
            allowtransparency='true' 
            frameborder='0' 
            scrolling='no' 
            name='wistia_embed' 
            allowfullscreen='' msallowfullscreen='' width='100%' height='100%')

  //-TODO: REPLACE WITH A MORE VERSATILE COMPONENT
  CTADark(primaryButtonURL="/contact-sales?origin=homepage-ender")

</template>
<!--
<page-query>
query {
  allPartners {
  	edges {
    node {
      title {
        rendered
      }
      acf {
        partner_url
      }
    }
  }
  }
}
</page-query>
-->
<script>
  import Hero from '@/components/hero/homepage-hero.vue'
  let lottieJSONPath = "lottie-animation/hero-animation.json"
  let description = "Aeries Software - Leading the way in Eduction Technology."
  // import LottiePlayer from 'lottie-player-vue';
  import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

  export default {
    metaInfo: {
      title: 'Aeries Student Information System',
      meta: [
        { key: 'description', name: 'description', content: description}
      ]
    },
    data() {
      return {
        lottieJSONPath,
      }
    },
    components: {
      Hero,
      LottieAnimation
    },
    computed: {
      partners() {
        const arr = []
        this.$page.partners.nodes.forEach(partner => {
          arr.push(partner)
        })
        return arr
      }
    }
  }
</script>

<style lang='stylus'>
  
    
</style>

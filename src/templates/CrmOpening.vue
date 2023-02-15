<style lang="stylus">
  .opening-description
    li
      margin-bottom: 0.5rem;
      list-style: disc;
      list-style-position outside;
      padding-left: 10px;
      line-height: 26px;
    
    ul
        padding-left: 28px;

    h1, h2, h3, h4, h5, p, ul {
      margin-bottom: 2rem;
      line-height: 2.2rem;
    }
    h1, h2, h3, h4, h5 {
      font-family: Aeries Sans
      font-weight: bold;
      line-height: 3rem;
    }

    h1 {
      font-size: 2.43rem;
    }

    h2 {
      font-size: 1.93rem;
    }
</style>

<template lang='pug'>
  Layout.Opening(@form-close="closeForm" @form-submitted="submitted")
    section.hero-section
      hero(single-column no-vertical)
        .hero-content(slot="hero-content" class="mt-16 mb-8 md:my-8")

          .hero-content-breadcrumb(class="px-4")
            g-link(to="/careers" class="text-blue-600 cursor-pointer") Careers
            span(class="text-neutral-1300 px-2") /
            span(class="text-neutral-1300") {{ opening.title }}

          .hero-content-main(class="text-center mx-auto w-full max-w-960 mt-16")
            .department(class="text-ceter text-blue-600 uppercase font-semi-bold tracking-wider") {{ opening.openingFields.department }}
            h1(class="font-bold leading-none text-neutral-1600 font-aeries text-center text-display mt-4 md:text-xx-large") {{ opening.title }}
            .splitter(v-if="opening.openingFields.workEnvironment" class="my-8 h-px w-48 bg-neutral-800 mx-auto")
            div(v-if="opening.openingFields.workEnvironmentr" class="mt-4 text-neutral-1300 px-4 text-center md:px-32") {{ opening.openingFields.shortSummary }}
            a.cta-button.apply(v-if="view === 'opening' && !opening.openingFields.externalApply" @click="view = 'apply form'" class="mt-16 py-2 px-8 font-bold text-xl text-neutral-100 bg-blue-800 rounded-full inline-block cursor-pointer")
              | Apply
      
    section.opening-body(
      class="px-2 md:px-0 mt-8")
        
      apply-form(v-if="view === 'apply form'")

      .thank-you-for-applying(v-if="view === 'thank you'"
        class="bg-neutral-400 shadow-double-drop px-4 py-8 rounded max-w-960 w-full mx-auto flex flex-col items-center text-center")
        g-image(src="@/assets/images/brandmark.svg" class="w-12 h-12")
        h2(class="mt-4 text-2xl text-neutral-1500 md:text-3xl font-bold") 
          | Thank you for your interest in Aeries!
        p.thank-you-body(class="leading-snug text-neutral-1300 mt-4 md:mt-6 text-xl px-6 md:px-20") 
          | We've received your application for the {{ opening.title }} position and will be getting back to you soon.
        g-link(to="/careers/#openings" class="mt-4 text-blue-600 py-4 px-8 flex items-center") 
          icon(icon="cheveron-left" class="h-5 w-5 fill-current")
          | Go back to all openings.

      //- Main opening page, shows when they have not clicked apply.
      .opening-description(v-if="view === 'opening'" class="bg-neutral-400 shadow-double-drop px-4 py-8 rounded max-w-960 w-full mx-auto\
        grid grid-cols-1 md:grid-cols-3 gap-8")
            
        .highlights(class="flex flex-col col-span-1")
          h3(class="text-blue-700 font-bold text-header") Highlights
          .highlight(class="mt-4 flex flex-col text-neutral-1300")
            span(class="text-neutral-1700 font-semi-bold") Position Type
            span {{ positionType }}
          .highlight(class="mt-3 flex flex-col text-neutral-1300")
            span(class="text-neutral-1700 font-semi-bold") Location
            span {{ opening.openingFields.location }}
            
        main.openingDescription(class="col-span-1 md:col-span-2")
          .desription-section(class="flex flex-col")
            h3(class="text-blue-700 font-bold text-header") Your Position
            .callout(class="bg-neutral-500 border border-neutral-800 text-sm p-4 mb-4 rounded font-bold") Aeries Software, Inc., is unable to sponsor, or take over sponsorship of, employment visas at this time. 
            .section-body(v-html="opening.content")
          
          .desription-section(class="mt-2 flex flex-col" v-if="qualifications[0] != '&nbsp;'")
            h3(class="text-blue-700 font-bold text-header mt-8") Your Qualifications
            .section-body
              ul.qualifications-list(class="list-disc ml-1")
                li(v-for="q, i in qualifications" :key="i" class="mt-2") 
                  span(v-html="q")
          
          .desription-section(class="mt-2 flex flex-col")
            h3(class="text-blue-700 font-bold text-header mt-8") Aeries' Integrity
            .section-body
              p Aeries Software provides equal employment opportunities to all employees and applicants for employment and prohibits discrimination and harassment of any type without regard to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran status, sexual orientation, gender identity or expression, or any other characteristic protected by federal, state or local laws.
              p This policy applies to all terms and conditions of employment, including recruiting, hiring, placement, promotion, termination, layoff, recall, transfer, leaves of absence, compensation and training.
              
          .desription-section(v-if="opening.openingFields.workEnvironment" class="mt-2 flex flex-col")
            h2(class="text-blue-700 font-bold text-header mt-8") Work Environment
            .section-body(v-html="opening.openingFields.workEnvironment")
      
      
      //- position footer.
      section.bottom-apply(v-if="" class="py-20 flex flex-col items-center justify-center")
        a.cta-button.apply(v-if="view === 'opening' && !opening.openingFields.externalApply" @click="view = 'apply form'" class="mt-16 py-2 px-8 font-bold text-xl text-neutral-100 bg-blue-800 rounded-full inline-block cursor-pointer")
            | Apply
</template>

<page-query>
query ($id: ID!) {
  opening(id: $id) {
    id
    date
    title
    content
    openingFields {
      department
      positionType
      location
      remoteAvailable
      shortSummary
      qualifications
      workEnvironment
      externalApply
    }
  }
}
</page-query>

<script>
  import ApplyForm from '../components/OpeningApplicantForm'

  export default {
    name: 'Opening',
    computed: {
      opening() {
        return this.$page.opening
      },
      positionType() {
        let str
        let type = this.opening.openingFields.positionType
        if (type === 'ft')  { str = 'Full-Time Employee' }
        if (type === 'pt')  { str = 'Part-Time Employee' }
        if (type === 'rmt') { str = 'Remote Employee' }
        return str
      },
      qualifications() {
        let q = this.opening.openingFields.qualifications
        q = q.split('\n')
        return q
      }
    },
    data() {
      return {
        view: 'opening',
        error: false,
        message: null,
        dropOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 125,
          thumbnailHeight: 125,
          maxFileSize: 3,
          addRemoveLinks: false,
          acceptedFiles: '.pdf,.doc,.txt,.jpg'
        }
      }
    },
    methods: {
      closeForm() {
        this.view = 'opening'
      },
      submitted() {
        this.view = 'thank you'
      }
    },
    components: { ApplyForm }
  }
</script>

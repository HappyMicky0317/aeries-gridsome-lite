<template lang="pug">
section#trainingOptions(class="containers py-24" :class="{'bg-neutral-300' : darkenedBackground}")
  .container(class="px-4 md:px-0")
    h1(class="text-title md:text-display font-aeries font-bold leading-tight tracking-tight text-center text-neutral-1700") 
      | {{sectionTitle}}
    p(v-if="sectionDescription" class="w-full md:w-4/5 font-semi-bold text-center md:m-auto pt-6 pb-6")
      | {{sectionDescription}}
  .container.solutionSelectorButtons(class="flex flex-col md:flex-row justify-center my-6")
    .solutionSelectorButton(@click="selectedSolution = solution" v-for="solution in solutions" class="text-center md:text-subhead md:text-left cursor-pointer px-4 md:mx-2 py-2" :class="{'bg-blue-600 text-white' : solution.header == selectedSolution.header}")
      | {{solution.header}}
  
  .container.cta.rounded(:class="selectedSolution.className" class="md:py-12")
    div(class="md:flex items-center")
      div(class="w-full md:w-3/5 px-2")
        g-image(quality="100" v-show="selectedSolution.header == 'Hands-on training'" src="@/assets/images/aeries-training-photo-hero.png" class="m-auto")
        g-image(quality="100" v-show="selectedSolution.header == 'Webinars & workshops'" src="@/assets/images/aeries-training-webinar-training.png" class="m-auto")
        g-image(quality="100" v-show="selectedSolution.header == 'Self-paced online courses'" src="@/assets/images/aeries-training-certification-hero.png" class="m-auto")
      div(class="w-full md:w-2/5 px-2 mt-12 md:mt-0")
          p(class="pb-2 font-bold text-neutral-1700 text-minimum-text text-center md:text-left uppercase") 
            | {{selectedSolution.suptitle}}
          h1(class="text-header font-aeries font-bold leading-tight tracking-tight text-neutral-1700 ")
            | {{selectedSolution.title}}
          p(class="text-neutral-1300 mt-2 text-subhead" v-html="selectedSolution.description")
          
          .buttons(class="justify-center md:justify-start flex mt-10 text-white" )
            g-link(v-show="selectedSolution.header == 'Hands-on training'" to="/training/catalog" class="bg-blue px-12 py-3 rounded shadow text-subhead font-semi-bold")
              | View training catalog
            g-link(v-show="selectedSolution.header == 'Webinars & workshops'" to="/events" class="bg-blue px-12 py-3 rounded shadow text-subhead font-semi-bold")
              | See upcoming workshops
            g-link(v-show="selectedSolution.header == 'Self-paced online courses'" to="/academy" class="bg-blue px-12 py-3 rounded shadow text-subhead font-semi-bold")
              | Browse Aeries Academy courses
</template>

<script>
  export default {
    mounted() {
      //On mount, set the selected solution to whichever one is first in the list
      //Just so something shows at all.
      this.selectedSolution = this.solutions[0];
    },
    data() {
      return {
        selectedSolution: {

        },
        solutions: [
          {
            suptitle: "Develop a training plan with the Aeries team",
            header: "Hands-on training",
            title: "Ensure user success with on-site training options",
            description: "Thorough training for your school or district’s Aeries users is a crucial step in ensuring long-term SIS success. <br><br> We’ll work with you to develop a training plan specifically designed for and based on the unique needs and background of your unique organization.",
            cta: {
              text : "View training catalog",
              to : "/training/catalog",
            }
          },
          {
            suptitle: "Online webinars & regional in-person workshops",
            header: "Webinars & workshops",
            title: "Join workshops focused on specific Aeries topics",
            description: "We offer a variety of online and in-person workshops that school and district staff can join to brush up on more focused Aeries topics. <br><br> These provide an additional option complementing on-site training for situations where a single-day overview is more appropriate than a multi-day training strategy.",
            cta: {
              text : "See upcoming workshops",
              to : "/events",
            }
          },
          {
            suptitle: "Achieve aeries mastery online at your own pace",
            header: "Self-paced online courses",
            title: "Get certified with Aeries Academy online courses",
            description: "Aeries Academy offers a flexible training option for districts or individual Aeries users that provides certification opportunities so users can prove their mastery with a digital credential from Aeries. <br><br> Participants can work towards any of 10 certification courses on their own time, at their own pace, using the Canvas LMS.",
            cta: {
              text : "Browse Aeries Academy courses",
              to : "/academy",
            }
          },
        ]
      }
    },
    props: {
    'sectionTitle': {
      type: String,
      default: 'Mastering Aeries has never been this straightforward'
    },
    'sectionDescription': {
      type: String,
      default: "Aeries’ library of training resources offers countless courses, webinars, workshops, and self-paced learning opportunities for schools and districts of any size. Reach out to us for help creating a custom professional development plan for your staff."
    },
    'primaryButtonText': {
      type: String,
      default: "Request a demo"
    },
    'secondaryButtonText': {
      type: String,
      default: "Contact sales"
    },
    'primaryButtonURL': {
      type: String,
      default: "/contact"
    },
    'secondaryButtonURL': {
      type: String,
      default: "/contact"
    },
    'darkenedBackground': {
      type: Boolean,
      default: false
    }
      
    }
  }
</script>
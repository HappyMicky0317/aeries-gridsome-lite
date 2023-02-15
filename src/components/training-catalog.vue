<template lang='pug'>
  .trainingCatalog(class="text-neutral-1700")
    .modal.partner-overlay(
      v-if="modalIsActive"
      class="absolute inset-0 z-20 flex justify-center" )

      .white-out(class="cursor-pointer absolute bg-black opacity-25 inset-0 z-10" @click="closeModal")
      .modal-container( class="fixed flex flex-col min-h-screen\
        items-center justify-center w-full max-w-sm md:max-w-3/4 z-40 mx-auto")
        .modal( class="relative bg-white shadow-double-drop\
          rounded container mx-auto p-10 w-full max-auto\
          grid grid-cols-1 md:grid-cols-3 gap-4\
          ")
          .modal-close(class="absolute top-0 right-0 p-4")
            icon(@click="closeModal" icon="close" class="w-4 h-4 fill-current text-neutral-1300")
          .text-side(class="pt-8 md:pt-0 md:col-span-3")
            //- .category(class="text-blue-800 border-l-2 border-red-700 pl-2 mb-1" v-html="categoryNameById(modalCourse.courseCategory)")
            .title(class="flex flex-col md:flex-row leading-none items-center")
              .name(class="text-neutral-1700 font-bold font-aeries text-subhead md:text-title")
                span(v-html="modalCourse.title.rendered")
            .description(
              class="text-minimum-text text-neutral-1300 md:text-body my-4"
              v-html="modalCourse.courseDescription")
            
            //- .audience(class="flex flex-col pt-6")
              span(class="mb-2") Who should take this course?
              ul(class=" flex flex-wrap")
                li(class="text-white font-bold bg-blue-500 rounded-full px-3 mr-3 mb-2 shadow border border-blue-600 py-1 text-minimum-text" v-for="audience in modalCourse.recommendedAttendees") {{ audienceNameById(audience) }}
             .link(class="text-blue-500")
                a(:href="modalCourse.url" target="_blank" :title="modalCourse.title") Learn more about {{ modalCourse.title.rendered }}

    section.training-header(class="md:flex")
      .trainingCatalogCandy(class="md:w-2/6")
        g-image(class="md:pt-10 md:pl-2" src="@/assets/images/training-catalog-girl.png" alt="illustration of person browsing the Aeries Training catalog.")
      .trainingCatalogText(class="px-12 pt-6 pb-4 md:w-4/6 md:m-auto mb-8 md:mb-16 text-neutral-1300")
        h1(class="font-aeries text-display font-bold pb-4") Aeries SIS Training Catalog

        p.mb-4 Aeries provides a variety of training resources to that your school staff have the Aeries knowledge and expertise to effectively manage your student data. Our Aeries Trainers, who all have first-hand experience using Aeries in school districts, will deliver dynamic, outcome-based training sessions to your team. The courses in this catalog can be scheduled anytime during the year as onsite** or webinar sessions with an Aeries trainer.
        
        p.mb-4
          ul(class="list-disc ml-8 text-neutral-1500 flex flex-col space-y-4 text-minimum-text py-4")
            li All Aeries training is being delivered remote via Zoom Webinar currently through at least March 31, 2021. The cost is $250 per hour with a minimum of two hours.
            li Onsite training can be scheduled in full day increments only (up to 7 hours). The cost of onsite training is $1800/day.
            li In most cases, training will be hands-on in a demonstration Aeries database so that attendees get practical experience with the concepts and tools covered in the course.
            li For an optimal learning environment, we recommend limiting class size to no more that fifteen (15) participants per session. Aeries reserves the right to charge a per-person fee of $150 for training sessions that surpass twenty (20) attendees.
        
        p.mb-4.text-minimum-text In addition to the courses listed below, Aeries also offers a variety of convenient workshops and webinars throughout the year. Details and registration information can be found on the Aeries.com 
          g-link(to="/events" class="underline text-blue-600" title="Aeries Events and Workshops") events page.
        
        p.mb-4.text-minimum-text For users that prefer individual, self-paced training, or staff who would like to earn Certification of their Aeries skills related to their job duties, consider our FREE Aeries Academy courses. Visit Aeries Academy at 
          a(href="/academy" title="Aeries Academy" class="underline text-blue-600") this link  
          | for details and to register in courses. 

        p.mb-4.font-bold.text-center.text-neutral-1600 For questions or to schedule training, please contact 
          a(class="underline text-blue" href="mailto:training@aeries.com") training@aeries.com
          | .
    
    
    table(class="table-auto w-full")
      thead(class="text-left")
        tr
          th(class="px-6 py-3 font-aeries text-subhead font-bold") Subject
          //- th(class="px-6 py-3 font-aeries text-subhead font-bold text-right") Duration
      tbody
        tr(v-for="course in trainingCatalog")
          //- | {{course}}
          //- Course Title
          td(class="border-b border-neutral-500 px-6 py-4") 
            a(class="cursor-pointer flex flex-col" @click="openModal(course)") 
              //- span(v-html="categoryNameById(course.courseCategory)" class="text-neutral-1300 mb-px leading-none text-minimum-text")
              span(v-html="course.title.rendered" class="text-blue-600 font-bold")

          //- Course Duration (v-if for if it's not a standard hour based duration)
          //- td(v-if="course.courseDuration < 2" class="border-b border-neutral-500 px-6 py-4 text-right") {{course.customDuration}}
          //- td(v-else class="border-b border-neutral-500 px-6 py-4 text-right") {{ course.courseDuration }} Hours
          
          
</template>

<script>
  export default {
    name:"trainingCatalog",
    data: () => ({
      modalCourse: null,
      modalIsActive: false
    }),
    computed : {
      courseAudiences() {
        let arr = []
        this.$page.audiences.nodes.forEach((node) => {
          arr.push(node)
        })
        return arr
      },
      courseCategories() {
        let arr = []
        this.$page.courseCategories.nodes.forEach((node) => {
          arr.push(node)
        })
        return arr
      },
      trainingCatalog() {
        let newArr = []
        this.$page.allCourses.edges.forEach( (node) => {
          let newObj = {}
          node = node.node
          newObj.title = node.title
          newObj.courseDescription = node.acf['course_description']
          // newObj.courseCategory= node.acf.courseCategory
          // newObj.courseDuration = node.acf.courseDuration
          // newObj.customDuration = node.acf.customDuration
          // newObj.recommendedAttendees = node.acf.recommendedAttendees

          newArr.push(newObj)
        })

        newArr.sort((a, b) => (a.courseCategory > b.courseCategory) ? 1 : -1)
        return newArr
      }
    },
    filters: {
      truncate: function (text, length, suffix) {
          return text.substring(0, length) + suffix;
      },
    },
    methods : {
      decodeHTMLEntity(str) {
        return str.replace(/&#(\d+);/g, function(match, dec) {
          return String.fromCharCode(dec);
        });
      },
      audienceNameById(id) {
        let aud = this.courseAudiences.filter(single => {
          return single.id === JSON.stringify(id)
        })
        return aud[0].title
      },
      categoryNameById(id) {
        let cat = this.courseCategories.filter(single => {
          return single.id === JSON.stringify(id)
        })
        return cat[0].title.rendered
      },
      openModal(course) {
        this.modalIsActive = true
        this.modalCourse = course
      },
      closeModal() {
        this.modalIsActive = false,
        this.modalCourse = null
      },
    },
  }
</script>

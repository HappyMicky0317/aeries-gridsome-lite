<template lang="pug">
section#parentStudentFAQSection(class="px-2 sm:px-8 mb-32")
  div(v-for="faq in faqs" class="mx-auto mt-8 flex flex-col justify-center")
    h2(class=" text-header font-aeries font-bold mb-5 text-center") {{faq.title}}
    
    div(class="grid grid-cols-1 md:grid-cols-6 gap-6 ")
      div(class="md:col-span-4 md:col-start-2 divide-y-2 divide-neutral-400")  
        accordion(v-for="item, i in faq.items" :key="i" 
          :item="item" :active="item.active" class="py-4")
          .content(slot="content" class="grid grid-cols-1 md:grid-cols-1 gap-4")
            //- POST LAUNCH
            //- .content-video
              .video-container(class="w-full h-56 bg-white")
            .content-text {{ showDescription(item.description) }}
</template>

<script>
import Accordion from '../components/accordion'
import ParentStudentFAQ from '~/data/parent-student-faq.json'
export default {
  data() {
    return {
      faqs: ParentStudentFAQ
    }
  },
  methods: {
    showDescription(desc) {
      if (desc.length < 1)
        desc = 'No description' 
      return desc
    }
  },
  components: { Accordion }
};
</script>

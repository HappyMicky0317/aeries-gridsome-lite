<template lang="pug">
section#parentStudentFAQSection(class="sm:mb-32 mb-12")
  div(v-for="faq in faqs" class="mx-auto flex flex-col justify-center")
    h2(class=" text-header font-aeries font-bold mb-5 text-center") {{faq.title}}
    
    div(class="grid grid-cols-1")
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
export default {
  props: ['faq'],
  data() {
    return {
      faqs: []
    }
  },
  mounted() {
    if (this.faq) {
      this.faqs = this.faq;
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

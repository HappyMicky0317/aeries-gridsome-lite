<style scoped>
.content-text {
  white-space: pre-line;
}
</style>

<style>
#aeriesConFAQSection ol > li {
  list-style: auto;
  padding-top: 6px;
}
#aeriesConFAQSection ol {
  padding-left: 32px;
  padding-top: 12px;
}
</style>

<template lang="pug">
section#aeriesConFAQSection(class="px-2 sm:px-8 mb-32")
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
            .content-text(v-html="showDescription(item.description)")
</template>

<script>
import Accordion from '../components/accordion'
import AeriesConSpring23FAQ from '~/data/aeriescon-spring-23-faq.json'
export default {
  data() {
    return {
      faqs: AeriesConSpring23FAQ
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

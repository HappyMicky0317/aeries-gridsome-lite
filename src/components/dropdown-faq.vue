<template lang='pug'>
  section.bg-neutral-300
    div(class="container md:flex py-12 px-4 md:py-24 md:px-4")
      .text-label(class="w-full md:w-2/5 md:pl-12")
        h1(class="md:text-display md:text-left text-center text-header font-aeries font-bold text-neutral-1700") Frequently asked questions
      .dropdowns(class="w-full md:w-3/5 m-auto md:pr-24")
        div(v-for="question in questions")
          .dropdownItem(@click="question.expanded = !question.expanded" class="flex w-full justify-between cursor-pointer py-4")
            .font-bold.text-subhead {{question.title}}
            svg.inline(v-if="!question.expanded" width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M12 15.2932L18.1514 9.14626C18.3467 8.9511 18.6633 8.95127 18.8585 9.14663C19.0536 9.342 19.0535 9.65858 18.8581 9.85374L12.3534 16.3537C12.1581 16.5488 11.8418 16.5488 11.6466 16.3537L5.14661 9.85781C4.95126 9.66264 4.95111 9.34606 5.14629 9.15071C5.34146 8.95536 5.65804 8.95521 5.85339 9.15038L12 15.2932Z' fill='black')
            svg.inline(v-if="question.expanded" width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M8.7068 12L14.8537 18.1514C15.0489 18.3467 15.0487 18.6633 14.8534 18.8585C14.658 19.0536 14.3414 19.0535 14.1463 18.8581L7.6463 12.3534C7.4512 12.1581 7.4512 11.8418 7.6463 11.6466L14.1422 5.14661C14.3374 4.95126 14.6539 4.95111 14.8493 5.14629C15.0446 5.34146 15.0448 5.65804 14.8496 5.85339L8.7068 12Z' fill='black')

          p(v-if="question.expanded == true") {{question.description}}
          Divider

</template>

<script>
  export default {
      props: {
      'questions': {
        type: Array,
        default: [
          {
            title: "No questions found", 
            description: "Add questions by passing a 'questions' object array as a prop with 'title' and 'description'", 
            expanded: false
          },
        ], 
    }
  }
}
</script>
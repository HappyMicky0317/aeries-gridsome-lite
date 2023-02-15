<template lang="pug">
  .container(class="px-4 md:px-0 py-12 md:py-12 mt-6 flex flex-col md:flex-row items-center")
           div(class="flex px-4 flex-1")
             img(
               class="w-full block rounded-md"
               src="@/assets/images/aeriescon-virtual-hero-photo.png" 
               alt="aeriescon virtual conference on laptop blurred in the background"
             )
           div(class="flex-1 flex flex-col md:max-w-3/4 px-4")
             h2(class="text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900") Save the date!
             p(class="text-neutral-1300 mt-8") 
               |  Mark your calendars! AeriesCon will be back for a virtual event this fall and in-person next spring!
             .dates(class="mt-8 grid grid-cols-2")
               .option
                 h3.text-xl.font-bold.font-aeries.text-neutral-1900 Fall 2022 (Virtual)
                 p.text-sm November 7-10, 2022
     
               .option
                 h3.text-xl.font-bold.font-aeries.text-neutral-1900 Spring 2023 (Ontario, CA)
                 p.text-sm March 6-8, 2023
</template>

<script>
export default {
  name: 'ACSaveTheDate',
  data: () => ({}),
}
</script>

<style lang="stylus"></style>

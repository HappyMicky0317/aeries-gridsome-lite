<template lang='pug'>
  section.parent-student-district-finder(class="max-w-5/6 md:max-w-page-inset mx-auto d text-center py-12 md:py-20")
      h1(class="text-header md:text-xx-large font-aeries font-bold leading-tight") Let us help you find your way
      div(class="mt-4 md:mt-5 px-4 md:px-20") It looks like you've found yourself on Aeries.com. Let us show you around and get you to where you are trying to go. Below you can search for your district's portal, or you can read through our FAQ's.

      .district-searchbox(class="mt-10")
        div(class="h-10 md:h-16 md:max-w-4/5 mx-auto w-full bg-neutral-500 rounded-lg overflow-hidden flex items-center")
          Icon(name="search" color="currentColor" class="w-4 md:w-6 w-h md:h-6 ml-4")
          input(type="text" placeholder="Find my district" 
            class="w-full h-16 bg-neutral-500 text-subhead md:text-title font-aeries font-bold flex-1 px-4 focus:outline-none"
          )
    
      .district-display(class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10")
        //- Loop over all the districts and spit them out into cards
        district-card(v-for="dist, i in districts" :district="dist" :key="i")
</template>

<script>
  import DistrictCard from '../components/district-card'
  export default {
    name: 'ParentStudentDistrictFinder',
    data() {
      return {
        districts: [
          { name: 'Hemet Unified School District', districtURL: 'https://www.hemetusd.org/', portalURL: 'https://portals.hemetusd.org', logo: 'school-logo-hemet.png' },
          { name: 'Redlands Unified School District', districtURL: 'https://www.redlandsusd.net', portalURL: 'https://redlands.asp.aeries.net/student/', logo: 'school-logo-redlands.png' },
          { name: 'Alvord Unified School District', districtURL: 'https://www.alvordschools.org/', portalURL: 'https://alvord.aeries.net/student/LoginParent.aspx', logo: 'school-logo-alvord.jpg' },
          { name: 'Capistrano Unified School District', districtURL: 'https://capousd-ca.schoolloop.com/', portalURL: 'https://portal.capousd.org/ParentPortal/LoginParent.aspx', logo: 'school-logo-capistrano.png' },
          { name: 'Chino Valley Unified School District', districtURL: 'https://www.chino.k12.ca.us/', portalURL: 'https://aeriesweb.chino.k12.ca.us/Aeries.NET/LoginParent.aspx', logo: 'school-logo-chino.png' },
          { name: 'Garden Grove Unified School District', districtURL: 'https://ggusd.us', portalURL: 'https://www.ggusd.us/students/student-portal/', logo: 'school-logo-garden-grove.jpg' },
        ]
      }
    },
    components: { DistrictCard }
  }
</script>

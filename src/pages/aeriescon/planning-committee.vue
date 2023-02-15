<style scoped lang="stylus">
.bg-cityscape {
  background-image: url('~../../assets/images/bg-cityscape.svg')
  background-size: 100%
  background-repeat: no-repeat
  background-position: 0% 100%
}
</style>

<template lang="pug">
  Layout 
    section
      div(class="bg-neutral-1900 text-white")
        .container(class="p-5 md:p-20 text-center")
          .text-center.inline-flex.items-center.justify-center.w-24.h-24.mb-6
            g-link(to="/aeriescon")
              g-image(:src="require('!!assets-loader!~/assets/images/aeriescon-virtual-logo.svg')")
          h1(class="text-title font-aeries font-bold leading-tight tracking-tight md:text-display")
            | Our planning committee
          
          //- If no description is provided by the component, hide the element.
          p(class="text-base mx-auto mb-5 w-full mt-5 px-16")
            | To host the unrivaled conference our customers expect from us, it takes a group of people passionate about Aeries and its users to plan it. Meet the folks working hard to elevate and innovate the AeriesCon experience, twice a year, year after year. 
          p
            | AeriesCon wouldn't be what it is without them — feel free to say hello if you happen to see them around the virtual conference hall!
    
    
    section(class="container mx-auto p-5 md:p-20")
          
      h2(class="text-display font-bold font-aeries text-center mb-8 md:mb-12") Planning Committee Chairs
      div(class="grid grid-cols-2 md:grid-cols-3")
        //- Loop through the leadership object and create an avatar
        div(
          class='w-full mb-12'
          v-for="member, i in grouped"
          :key="i")
            //- g-image(
            //-   v-if="member.imageUrl"
            //-   class="shadow-lg max-w-full mx-auto rounded-lg"
            //-   alt='...' 
            //-   :src="require('!!assets-loader!~/assets/images/' + member.imageUrl)" 
            //-   style='max-width: 140px;'
            //- )
            //- g-image(
            //-   v-else
            //-   class="shadow-lg max-w-full mx-auto rounded-lg"
            //-   alt="..."
            //-   :src="require('!!assets-loader!~/assets/images/avatar-placeholder.png')"
            //-   style="max-width: 140px;"
            //- )
            .pt-6.text-center(class="flex flex-col justify-center items-center")
              h5(class="text-title font-bold font-aeries") {{ member.name }}
              p(class=" font-nunito" style="max-width: 175px;") {{ member.group }}
    
    section(class="container mx-auto p-5 md:p-20")
      h2(class="text-display font-bold font-aeries text-center mb-8 md:mb-12") With a special mention for the following contributors

      div(class="grid grid-cols-2 md:grid-cols-2")      
        //- Loop through the leadership object and create an avatar
        div(
          class='w-full mb-12'
          v-for="member, i in committeeMembers"
          :key="i")
            //- g-image(
            //-   v-if="member.imageUrl"
            //-   class="shadow-lg max-w-full mx-auto rounded-lg"
            //-   alt='...' 
            //-   :src="require('!!assets-loader!~/assets/images/' + member.imageUrl)" 
            //-   style='max-width: 140px;'
            //- )
            //- g-image(
            //-   v-else
            //-   class="shadow-lg max-w-full mx-auto rounded-lg"
            //-   alt="..."
            //-   :src="require('!!assets-loader!~/assets/images/avatar-placeholder.png')"
            //-   style="max-width: 140px;"
            //- )
            .pt-6.text-center(class="flex flex-col justify-center items-center")
              h5(class="text-subhead font-bold font-aeries") {{ member.name }}
              p(class="text-sm font-nunito" style="max-width: 175px;") {{ member.group }}
</template>

<script>
import icons from '~/components/utilities/icons/index.js'

export default {
  data() {
    return {
      chairs: [
        {
          groupName: 'Project Coordinator',
          groupMembers: [
            { name: "Brent Lloyd", imageUrl: "brent.png", isChair: true },
          ]
        },
        {
          groupName: "Conference Team Lead",
          groupMembers: [
            { name: "Lara Clickner", imageUrl: "aeries-leadership-team-lara.png", isChair: true },
          ]
        },
        {
          groupName: "Budget Lead",
          groupMembers: [
            { name: "Jonathan Cotton", imageUrl: 'aeries-leadership-team-jon.png', isChair: true },
          ]
        },
        {
          groupName: "Registration Lead",
          groupMembers: [
            { name: "Connie Castillo", imageUrl: "connie.png", isChair: true },
          ]
        },
        {
          groupName: "Conference Session / Schedule Lead",
          groupMembers: [
            { name: "Leslie Stawarz", imageUrl: "leslie.jpg", isChair: true },
          ]
        },
        {
          groupName: "Marketing & Social Media Lead",
          groupMembers: [
            { name: "Natasha Perera", imageUrl: "natasha-perera.png", isChair: true },
          ]
        },
        {
          groupName: "Merchandise Coordinator",
          groupMembers: [
            { name: "Rich Lloyd", imageUrl: null, isChair: true },
          ]
        },
        {
          groupName: "Open Forum & Social Events Lead",
          groupMembers: [
            { name: "Marge Romasanta", imageUrl: "aeries-leadership-team-marge.png", isChair: true },
          ]
        },
        {
          groupName: "IT / Ops Lead",
          groupMembers: [
            { name: "Michael Gehrke", imageUrl: "aeries-leadership-team-michael.png", isChair: true },
          ]
        },
      ],
      committeeMembers: [
        { name: "Lynn Heatherly", imageUrl: "aeries-leadership-team-lynn.jpg" },
        { name: "Sam Defeo", imageUrl: "sam.jpg" },
        { name: "Jan Tokorcheck", imageUrl: "jan.jpg" },
        // { name: "Zachary Guerrero", imageUrl: 'zack.png' },
        { name: "Barry Lloyd", imageUrl: 'Barry.png' },
      ],
    }
  },
  computed: {
    grouped() {
      let grouped = []
      this.chairs.forEach(group => {
        const title = group.groupName
        group.groupMembers.forEach(member => {
          const Member = {
            name: member.name, imageUrl: member.imageUrl, group: title
          }
          if (member.isChair) {
            Member.isChair = true
          }
          grouped.push(Member)
        })
      })
      return grouped
    }
  },
  metaInfo: {
    title: 'AeriesCon Planning Committee'
  }
}
</script>

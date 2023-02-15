<template lang="pug">
  .aeriescon-registration-table(class="flex flex-col px-2 md:px-4")
    .reg-table-topper(class="grid grid-cols-3 md:grid-cols-5 gap-2")
      //- This Grid area holds: Grid title block, and registration options, capacity, and their prices
      .table-left-side-data(class="col-span-2 hidden md:flex h-[100%] flex-col items-center justify-center")
        slot(name="title-content")
      .table-right-side-data(class="col-span-3 grid grid-cols-3 gap-2")
        .reg-option-header(
          v-for="({name, dates, limitedSpace, price}, i) in options"
          class="text-center"
        ) 
          .meta-container(class="flex flex-col text-white bg-gradient-to-b from-blue-600 to-purple-800 py-2")
            .optionName(class="text-subhead font-bold") {{ name }} 
            .optionDates(class="-mt-1 opacity-75 text-sm") {{ dates }} 
          .limitedSpace(class="bg-gradient-to-b from-red-600 to-red-800 text-white py-1 text-xs")
            span.italic(v-if="limitedSpace") Limited Space Available
            span(v-else v-html) &nbsp;
          .price(v-if="price" class="bg-gradient-to-b from-neutral-1700 to-neutral-1900 py-4 text-2xl font-extra-bold text-white flex justify-center items-start") 
            span.text-sm.pt-1 $
            span(class="px-[2px]") {{ price }}
            span.text-sm.pt-1 .00
    
    .reg-table-data(class="grid grid-cols-3 md:grid-cols-5 gap-2")
      //- This holds all included options and selections for each reg type.
      .table-left-side-data(class="col-span-2 hidden md:grid grid-cols-1 gap-2")
        .includes.grid-cell(v-for="(row, i) in rowLabels" :key="i" class="flex flex-col bg-green-400 p-2") 
          h4.text-subhead(class="font-aeries text-neutral-1700 font-semi-bold") {{ row.title }}
          span(v-if="row.subtitle" class="text-sm") {{ row.subtitle }}
      .table-right-side-data(class="col-span-3 grid grid-cols-3 gap-2")
        .included(v-for="(opt, i) in options" :key="i" class="grid grid-cols-1 gap-1 md:gap-2")
          .selectedBox.grid-cell(v-for="(optVal, i) in createIncludedArray(opt.includes)")
            span(v-if="optVal == true" class="text-center")
              span(class="md:hidden text-xs px-2") {{ getRowTitle(i).title }}
              svg(xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden md:inline" fill="none" viewBox="0 0 24 24" stroke="currentColor")
                path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7")
            span(v-else v-html) &nbsp; 
</template>

<script>
export default {
  name: 'AcRegistrationTable',
  props: {
    options: Array,
  },
  data: () => ({}),
  computed: {
    rowLabels() {
      const keys = Object.keys(this.options[0].includes)
      let rows = []
      const newTitles = [
        { title: "Onsite Sessions",
        subtitle: "October 4-8, 2021 @ Sacramento Convention Center" },
        { title: "Virtual Sessions",
        subtitle: "October 6-8, 2021" },
        { title: "Session Replays",
        subtitle: "Through December 30, 2021" },
        { title: "DBA Day",
        subtitle: "October 6, 2021 @ Sacramento Convention Center" },
        { title: "Open Forum (In Person)",
        subtitle: "October 4-5, 2021 @ Sacramento Convention Center" },
        { title: "Open Forum (Virtual)",
        subtitle: "October 6-8, 2021" },
        { title: "Vendor Booths & Presentations" },
        { title: "Onsite Keynote",
        subtitle: "October 4-5 @ Sacramento Convention Center" },
        { title: "Virtual Keynote",
        subtitle: "October 7, 2021"},
        { title: "Casino Night",
        subtitle: "October 4, 2021 @ Sacramento Sheraton" },
        { title: "Virtual Trivia Night",
        subtitle: "October 7, 2021" }
      ]
      keys.forEach((key, i) => {
        rows.push(newTitles[i])
      })
      return rows
    }
  },
  methods: {
    createIncludedArray(obj) {
      return Object.values(obj)
    },
    getRowTitle(index) {
      return this.rowLabels[index]
    }
  },
}
</script>
      
<style lang="stylus" scoped>
.includes
  &.grid-cell:nth-of-type(2n-1) 
    @apply bg-neutral-300;
  &.grid-cell:nth-of-type(2n)
    @apply bg-neutral-500;

.included
  // odd columns
  &:nth-of-type(2n-1)
    & > .grid-cell:nth-of-type(2n)
      @apply bg-neutral-300;
    & > .grid-cell:nth-of-type(2n-1)
      @apply bg-neutral-500;

  // even columns
  &:nth-of-type(2n)
    & > .grid-cell:nth-of-type(2n)
      @apply bg-neutral-500;
    & > .grid-cell:nth-of-type(2n-1)
      @apply bg-neutral-400;


.grid-cell 
  @apply h-16 flex flex-col justify-center;

  &.selectedBox 
    @apply justify-center items-center;

</style>

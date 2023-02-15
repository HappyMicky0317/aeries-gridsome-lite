<template lang='pug'>
  .accordion(class="relative" :title="item.title")
        
    .accordionHeader(
      class="flex justify-between items-center rounded px-4 py-2 z-10 cursor-pointer"
      @click="toggleContent()"
    )
      .header-text(class=" text-lg font-bold leading-tight flex-1") {{ item.title }}
      .iconContainer(class="w-6 h-6 ml-4")
        Icon.header-icon(
          class="w-full fill-current transform transition ease-in-out duration-100" 
          :class="{'rotate-0': !isOpen, 'rotate-90': isOpen}"
          name="cheveron-down"
        )
        
    .accordionContent(
      class="text-neutral-1300 relative rounded z-0 overflow-hidden \
      transition ease-in-out duration-200"
      :class="{'max-h-0': !isOpen, 'max-h-full': isOpen}"
    )
      .contentContainer(
        ref="content-container" 
        class="px-4 pb-4 pt-4"
      )
        slot(name="content")



</template>

<script>
  export default {
    props: [ 'item', 'active' ],
    data() {
      return {
        isOpen: false,
        contentHeight: 0
      }
    },
    created() {
      // if active is set, open the accordion.
      this.isOpen = (this.active) ? true : false
    },
    mounted() {
      this.contentHeight = this.$refs['content-container'].getBoundingClientRect().height
    },
    methods: {
      toggleContent() {
        this.isOpen = (this.isOpen) ? false : true
      },
      
    }
  }
</script>

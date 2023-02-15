<template lang="pug">
  .modal(v-if="isOpen" class="fixed z-80 inset-0 flex items-center justify-center px-2")
    .overlay(class="bg-white opacity-75 absolute inset-0 z-10")
    .modal-container(ref="modalContainer" 
      class="relative bg-white shadow-double-drop min-h-24 max-w-960 w-full z-20 disable-scrollbar"
      :class="{'ov-scroll': isTall}")
      .close-container(@click="closeModal" 
        class="absolute top-0 right-0 p-4 cursor-pointer")
        icon(icon="close" class="w-5 h-5 fill-current text-neutral-1300")
      .modal-content()
        slot


</template>

<style lang="stylus" scoped>
  .modal-container
    max-height calc(100vh - 8rem)
  .ov-scroll
    overflow-y scroll
  .disable-scrollbar
    scrollbar-width none
    -ms-overflow-style none
  ::-webkit-scrollbar
    display none
    width 0
    background transparent
</style>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      isOpen: false,
      isTall: false
    }
  },
  props: [],
  methods: {
    closeModal(){
      this.isOpen = false
    }
  },
  updated() {
    if (this.isOpen) {
      let windowHeight = window.innerHeight
      let modalHeight = this.$refs.modalContainer.getBoundingClientRect().height
      let modalRatio = modalHeight / windowHeight
      if (modalRatio > .60) {
        this.isTall = true
      }
    }
  },
  components: {},
}
</script>

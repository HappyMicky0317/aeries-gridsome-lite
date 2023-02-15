<template lang="pug">

  .default-page-layout(
    class="min-w-full min-h-screen flex flex-col antialiased relative font-nunito"
  )
    main-nav.bg-white.border-b.border-neutral-500
    mobile-nav()
    
    hero(single-column class="bg-blue")
      .hero-title(slot="hero-content" class="mt-16 pt-20 pb-24 text-center text-white")
        slot(name="hero")
    
    
    main.default-body.z-10.flex-1.mx-auto(
      class=" \
      bg-neutral-300 shadow text-neutral-1600 \
      px-4 py-12 md:px-24 md:py-20 \
      -mt-12 mb-24 \
      rounded md:max-w-page-inset"
    )
      slot
    
    Footer

</template>

<script>
export default {
  beforeMount() {
    // before the default layout is created,
    // set the device type to mobile if the 
    // resolution is beneath 768px wide.
    if (process.isClient) {
      
      let device_width = window.innerWidth
      this.$store.commit('set_device_width', device_width)
      if (device_width <= 768) {
        this.$store.commit('set_device_type', true)
      }

    }
  }
}
</script>

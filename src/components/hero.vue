// Sample data for videos
// [
//   { src: 'Mountain-1.m4v', type: 'video/mp4'},
//   { src: 'Mountain-1.webm', type: 'video/webm'},
// ]

<template lang='pug'>
  .hero(class="relative overflow-hidden" :class="{ 'min-h-screen': fullScreen }")
    
    //- BG Filter Slot
    .bg-filter(v-if="bgFilter" class="absolute z-10 inset-0")
      slot(name="bg-filter")

    //- BG Image
    .bg-image(v-if="coverImage"
      :style="{ backgroundImage: 'url(' + require('~/assets/images/' + coverImage) + ')'}"
      class="absolute inset-0 bg-cover select-none z-0"
      :class="bgPositionVal"  
    )
    
    //- BG Video
    .bg-video(v-if="video")
      video.hero-video(autoplay muted loop class="object-cover absolute top-0 left-0 min-w-full min-h-full")
        source(:src="`./../${videoSrc[0].src}`" :type="videoSrc[0].type")
        //- source(:src="`./../${videoSrc[1].src}`" :type="videoSrc[1].type")

    .content-container(:class="{'min-h-screen flex flex-col justify-center': fullScreen}")
      .hero-content(
        class="container relative z-10 grid grid-cols-1 gap-8"
        :class="{'py-0':noVertical, 'py-48': tall, 'md:grid-cols-2': !singleColumn }")
        .hero-content-alpha(class=""
          :class="{ 'col-2 row-1': reverse }")
          slot(name="hero-content")
        .hero-content-beta(class=""
          :class="{ 'col-1 row-1': reverse }")
          slot(name="hero-content--beta")
    //- .hero-illustration

</template>

<script>
  export default {
    name: 'Hero',
    props: {
      bgPosition: {
        type: String,
        default: 'center',
      },
      'reverse': Boolean,
      'bg-filter': Boolean,
      'cover-image': String,
      'single-column': Boolean,
      'tall': Boolean,
      'no-vertical': Boolean,
      'full-screen': Boolean,
      'video': Boolean,
      'video-src': Array
    },
    data: () => ({}),
    computed: {
      bgPositionVal() {
        const bgp = this.bgPosition.toLowerCase()
        let val = ''
        if ( bgp === 'top' ) val = 'bg-top'
        if ( bgp === 'bottom' ) val = 'bg-bottom'
        return val
      },
    },
    methods: {
      videoUrl(file) {
        return `${this.baseUrl}/video/${file}`
      }
    },
  }
</script>

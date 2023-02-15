<style>
.hideChatBot #mobile-chat-container {
  display: none;
}
</style>

<template lang="pug">

.blank-page-layout(
  class="min-w-full min-h-screen flex flex-col antialiased relative font-nunito"
)
  //- header-banner(message="Testing 123" secondary-message="this is a tiny one" bgColor="bg-blue-800")
  main-nav(:nav-style='style')
  sub-nav(v-if="subNav" :config="subNavConfig")
    slot(name="cta-container" slot="cta-btn")
    //- .btn(slot="cta-btn" class="px-3 py-1 bg-blue text-white font-semi-bold rounded") Contact Sales
  mobile-nav()

  main(class="z-10 flex-1 text-neutral-1400" :class="[{'mt-12 md:mt-16': !subNav}, {'mt-20 md:mt-24': subNav}]")
    ///////////// Countdown Banner for AeriesCon ///////////////
    .banner-container(
      v-show="showCountdownBanner"
      class="bg-blue-700 pb-2 pt-3 text-white shadow-lg border-b border-neutral-800" :class="[subNav ? 'mt-3' : '']"
      style="background-size: 100%; background-position: 85% 80%;"
      :style="{ backgroundImage: `url(${countdownBannerBgUrl})`, backgroundColor: '#28305C', backgroundOpacity: .3 }"
    )
      .container
        g-link(to="/aeriescon" class="flex flex-col text-center items-center")
          .top-text(class="items-center justify-center")
            h4.text-center(style="font-size: 15px;")  Almost time to start our next adventure! Will we see you in-person for #[b(class="underline") Spring 2023]?
            countdown-banner(year="2023" month="3" day="6")
          // span(class="text-xs italic mt-1") Virtual registration is still open!
    slot
  
  Footer

</template>

<style lang="stylus">
  .font-aeries
    letter-spacing theme('letterSpacing.tight')
    line-height theme('lineHeight.tight')
</style>

<script>
import HeaderBanner from '../components/header-banner.vue';
import CountdownBanner from '../components/countdown.vue';

export default {
  props: {'nav-style': String, 'sub-nav': Boolean, 'sub-nav-config': Object},
  data: () => ({
    style: null,
    route: null,
    isBlog: false,
    isAeriesConPage: false,
    showCountdownBanner: true,
    countdownBannerBgUrl: 'https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/2023/spring/acs-2023-banner-bg.jpg'
  }),
  mounted() {
    this.route = this.$route
    if (this.navStyle) {
      this.style = this.navStyle
    } else {
      this.style = 'light'
    }

    if (process.isClient) {
      // console.log(this.$route.path.split('/').indexOf('blog') < 0)
      if (this.$route.path.split('/').indexOf('blog') < 0) {
        this.isBlog = false
      } else {
        this.isBlog = true
      }

      if (this.$route.path.split('/').indexOf('aeriescon') < 0) {
        this.isAeriesConPage = false
      } else {
        this.isAeriesConPage = true
      }
    }

    if (window.location.pathname == '/' || window.location.pathname == '/support/' || window.location.pathname == '/support' || window.location.pathname == '/contact/' || window.location.pathname == '/contact') {
      (function (d, w, c) { if(!d.getElementById("spd-busns-spt")) { var n = d.getElementsByTagName('script')[0], s = d.createElement('script'); var loaded = false; s.id = "spd-busns-spt"; s.async = "async"; s.setAttribute("data-self-init", "false"); s.setAttribute("data-init-type", "opt"); s.src = 'https://cdn.freshbots.ai/assets/share/js/freshbots.min.js'; s.setAttribute("data-client", "81877c0218610860b04644a3711b551e48602678"); s.setAttribute("data-bot-hash", "aa15f6fd094667f028ef34479c68fcf6f8c2e511"); s.setAttribute("data-env", "prod"); s.setAttribute("data-region", "us"); if (c) { s.onreadystatechange = s.onload = function () { if (!loaded) { c(); } loaded = true; }; } n.parentNode.insertBefore(s, n); } }) (document, window, function () { Freshbots.initiateWidget({ autoInitChat: false, getClientParams: function () { return ; } }, function(successResponse) { }, function(errorResponse) { }); });
    //Remove class "hideChatBot" from body
    document.body.classList.remove('hideChatBot');
    } else {
      //Add class "hideChatBot" to body
      document.body.classList.add('hideChatBot');
    }

  },
  destroyed() {
    this.style = null
  },
  beforeCreate() {
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
  },
  components: {
    HeaderBanner,
    CountdownBanner,
  }
}
</script>

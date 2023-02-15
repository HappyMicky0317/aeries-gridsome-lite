<template lang="pug">
footer
  ContentStudioModal(v-if="isDev")

  //- Internal introductory modal
  //- .modal.partner-overlay(
  //-   v-if="introductoryModalIsActive"
  //-   class="absolute inset-0 z-20 flex justify-center" )
  //-   .white-out(class="cursor-pointer absolute bg-white opacity-25 inset-0 z-10" @click="closeIntroductoryModal")
  //-   .modal-container( class="fixed flex flex-col min-h-screen\
  //-     items-center justify-center w-full max-w-sm md:max-w-3/4 z-40 mx-auto")
  //-     .modal( class="relative bg-white shadow-double-drop\
  //-       rounded container mx-auto p-10 w-full max-auto\
  //-       grid grid-cols-1 md:grid-cols-3 gap-4\
  //-       ")
  //-       .modal-close(class="absolute top-0 right-0 p-4")
  //-         icon(@click="closeIntroductoryModal" icon="close" class="w-4 h-4 fill-current text-neutral-800")
  //-       .text-side(class="pt-8 md:pt-0 md:col-span-3")
  //-         .title(class="flex flex-col md:flex-row leading-none items-center")
  //-           .name(class="text-neutral-1700 font-bold font-aeries text-subhead md:text-title") Hello Eagles!
  //-           .type-container(class="flex flex-row items-center flex-1")
  //-             .splitter(class="hidden md:inline text-red-800 h-6 mx-2 border-l-2 border-neutral-800")  
  //-             .type(class="text-neutral-1300") To show this modal again after you dismiss it, open a new tab or window to this URL.
  //-         .description(
  //-           class="text-minimum-text md:text-body my-4")
  //-             p On this special development instance, there is a tool at your disposal for providing feedback to the Design team. You can use the "Send Feedback" button located under the "Support" dropdown in the header, as well as on the footer of every page. This will allow you to send us some written feedback and a screenshot, and you can highlight focus areas of the screenshot by drawing boxes on the screen.
  //-             p.pt-4 We recently tested an on-screen annotation system that we had to disable, as it was producing unwanted content on the screen that broke layout elements and changed text content. However, we love the approach just in the preliminary results we got, and we will be revisiting the concept in the near future with a custom solution.
  //-         .link(class="text-blue-500")
  //-           a(target="_blank" class="cursor-pointer" @click="closeIntroductoryModal") Close & begin providing feedback
            

  .border-t.border-neutral-500.bg-neutral-300.text-neutral-1400
    .container
      .flex(class="py-20 px-5 lg:px-0 flex-col lg:flex-row text-center")
        div(class="w-full mb-10 lg:w-2/5 flex-col flex items-left justify-start lg:text-start lg:items-start")
          g-image(src="@/assets/images/brandmark.svg" class="w-20 shadow-lg rounded-lg")
        
        div(class="grid grid-cols-2 lg:w-3/5 gap-y-12 md:gap-y-0 md:grid-cols-3 gap-x-4 text-left")
          //- for each menu in data, make a new menu 
          div(class="col-span-1" v-for="( menu, index ) in menus" :key="index")
          
            h5.mb-3.text-neutral-2000.font-bold
              | {{ menu.name }}
            nav
              //- Add a new menu item for each menu item in the list.
              g-link(v-for="( item, index ) in menu.items" :key="index" :to="item.to" class='lg:mb-1 hover:translate-r-2px hover:text-gray-900 mb-3 py-1 transition-fast relative block text-gray-600 font-medium') 
                span.rounded.absolute.inset-0.bg-teal-200.opacity-0
                span.relative 
                  | {{ item.text }}
  
  div(class="bg-neutral-400 py-4 px-2 lg:px-0 text-center md:text-left text-minimum-text font-nunito")
    nav.container
      g-link(v-for="( item, index ) in secondary" :key="index" :to="item.to" class="pr-4")
        | {{ item.text }}

  div(class="bg-neutral-500 py-4 px-2 md:px-0 text-minimum-text font-nunito text-center md:text-left")
    .container
      | {{ copyright }}

</template>

<script>
const date = new Date().getFullYear() 

export default {
  data() {
    return {
      introductoryModalIsActive: false,
      copyright: `© Aeries Software 1995 — ${ date }. All Rights Reserved.  This website is for US residents.`
    }
  },
  mounted() {
    this.matomo();
  },
  methods: {
        includesDemoLink(solutions) {
      for (var i = 0; i < solutions.length; i++) {
        if (solutions[i].text == 'Demos') {
          return true;
        }
      }
      return false;
    },
    matomo() {
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//stats.aeries.com/statistics/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '13']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    },
      closeIntroductoryModal() {
        window.sessionStorage.setItem('eagleModal', 'false');
        this.introductoryModalIsActive = false,
        this.modalPartner = null
      },
  },
  computed: {
    menus() {
      let footerMenus = this.$store.getters.footerMenus
      const solutions = this.$store.state.navigation.solutions
      footerMenus[0].items = solutions
      if (this.includesDemoLink(footerMenus[2].items) == false) {
        footerMenus[2].items.push({text: 'Demos', to: '/solutions/demo'})
      }
      return footerMenus
    },
    secondary() {
      return this.$store.state.navigation.footer.secondary
    },
    //Are we viewing a dev build
    isDev() {
            return process.env.GRIDSOME_ENV === 'dev';
    },
  }
}
</script>

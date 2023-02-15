<template lang="pug">
  #session-list.container(class="px-4 md:px-0 min-h-screen relative flex flex-col")
    //- .session-list-header( class="mt-8 md:mt-24 self-start top-0 w-full sticky flex justify-between bg-white border-b-2 border-neutral-300" )
    
    .session-category-container(
      class="flex flex-wrap justify-center"
      :class="categoriesOpen ? 'p-4' : 'overflow-hidden h-0 p-0' "
    )
      .pill-box-context.italic.pb-3 Looking for all sessions for a specific category? Select one or more to see matching sessions. 
      .pill-box(class="py-2 flex flex-wrap items-center justify-center")
        span(
          v-for="category, i in categoryList" 
          v-if="category !== ''"
          :key="i" 
          class="uppercase text-sm tracking-wide mr-2 bg-neutral-500 hover:bg-neutral-700 rounded-full px-2 mb-2 cursor-pointer"
          :class="selectedCategories.includes(slugify(category)) ? 'bg-neutral-1600 text-white' : ''"
          @click="toggleCategory(category)"
        ) {{ category }}

    

    //- section.call-for-presenters
        .container(class="px-4 md:px-0 py-12 md:py-12 my-24 flex flex-col md:flex-row-reverse items-center")
          div(class="flex px-4 flex-1")
            img(
              class="w-full block rounded-md"
              src="@/assets/images/aeriescon/spring-2022/call-for-presenters.jpg" 
              alt="aeriescon virtual conference on laptop blurred in the background"
            )
          div(class="flex-1 flex flex-col md:max-w-3/4 px-4")
            h2(class="text-header md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900 mt-12 md:mt-2")  We will be offering many hit sessions from previous AeriesCons, as well as new, updated sessions.
            p(class="text-neutral-1300 mt-8") Check back soon to learn more!
     

    //-//////////////////////////////////////////////////
    //-   🔽🔽  START LIST RENDERING  🔽🔽
    //-/////////////////////////////////////////////////
    .session-list-container(class="grid grid-cols-4 h-full")
      .session-container(class="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4")
        
        //- ⚡ CurrentSessions List is the rendered list. 
        //- selecting a tab, or choosing a filter will replace the current Sessions List
        //- based on which tab is selected, and which category is selected. 

        //- TODO: FIX ACF (session.node.sessionFields.sessionId)
        article.session(
          v-for="session, i in sessions" 
          :key="i" 
          class="my-2 border-b border-neutral-600 pb-4 mb-4 px-4 text-left"
        )
          .session-meta(class="flex items-center justify-between")
            .meta-left(class="flex items-center")
              .session-id(class="text-neutral-800 text-xs font-bold") 
                | {{ session.node.acf.session_id }}
              .tagsContainer.ml-2
                span.tags(
                  v-for="tag, i in session.node.tags"
                  class="py-[2px] px-2 rounded-full text-xs uppercase"
                  :class="tagColor(tag.name)"
                  v-html="tag.name"
                )
            .meta-right(class="flex items-center")
              .type(class="text-xs flex items-center space-x-1 md:pr-4")
                span(v-if="session.node.virtual" title="Virtual")
                  icon(icon="desktop-computer" class="h-4 w-4 stroke-current fill-none")
                span(v-if="session.node.onsite" title="Onsite") 
                  icon(icon="location-marker" class="h-4 w-4 stroke-current fill-none") 
                span(v-if="session.node.onsite_plus" title="Onsite +") 
                  icon(icon="plus" class="h-4 w-4 stroke-current fill-none") 

          h3.session-title(
            class="text-xl lg:text-2xl font-aeries text-blue-800 tracking-tight font-semi-bold"
          ) 
            span(v-html="session.node.title.rendered")
          .state-specific(v-if="session.node.acf.california_texas_specific" class="text-xs font-bold mt-2" :class="{'text-blue-600' : session.node.acf.california_texas_specific.split(':')[1] === 'California', 'text-red-600' : session.node.acf.california_texas_specific.split(':')[1] === 'Texas'}") 
            | • {{ session.node.acf.california_texas_specific ? session.node.acf.california_texas_specific.split(":")[1] + ' Specific' : '&nbsp' }}
          .meta-pills(class="flex flex-wrap space-x-1 py-4")
            span.category(
              v-for="cat, i in session.node.session_category"
              class="py-1 px-2 font-bold mb-2 rounded-full text-xs bg-neutral-500 text-neutral-1300 uppercase"
              style="font-size: 13px;"
              v-html="cat.name"
            )
          div(class="text-neutral-1300" v-html="session.node.content.rendered")



</template>

<script>

export default {
  name: 'AeriesConSessionList',
  props: {
    sessions: {
      type: Array
    },
  },
  data: () => ({
    currentView: 'allSessions',
    ticketTypes: [
      { label: 'All Sessions', set: 'allSessions'},
      { label: 'Virtual', set: 'virtual' },
      { label: 'Onsite', set: 'onsite'  },
      { label: 'Onsite +', set: 'onsitePlus' },
    ],
    allSessions: [],
    selectedCategories: [],
    categoriesOpen: false,
    mobileTypeSelectorOpen: false,
  }),
  computed: {
    categoryList() {
      let catList = []
      const sessions = this.allSessions
      sessions.forEach((session) => {
        if (session.node.categories !== "") {
          const cats = session.node.categories.split('|')
          cats.forEach((cat)  => {
            catList.push(cat)
          })
        }
      })
      const list = [...new Set(catList)]
      return list.sort()
    },
    currentViewTitle() {
      return this.ticketTypes.filter(session => session.node.set === this.currentView)[0].label
    },
    virtualSessions() {
      return this.allSessions.filter((session) => session.node.virtual != '')
    },
    onsiteSessions() {
      return this.allSessions.filter((session) => session.node.onsite != '')
    },
    onsitePlusSessions() {
      return this.allSessions.filter((session) => session.node.onsite_plus != '')
    },
    currentSessionsList() {
      let list = null
      if (this.currentView === 'allSessions') list = this.allSessions.sort( (a, b) => (a.sessionName > b.sessionName) ? 1 : -1 )
      if (this.currentView === 'virtual') list = this.virtualSessions.sort( (a, b) => (a.sessionName > b.sessionName) ? 1 : -1 )
      if (this.currentView === 'onsite') list = this.onsiteSessions.sort( (a, b) => (a.sessionName > b.sessionName) ? 1 : -1 )
      if (this.currentView === 'onsitePlus') list = this.onsitePlusSessions.sort( (a, b) => (a.sessionName > b.sessionName) ? 1 : -1 )
      return list
    },
    filteredSessionsList() {
      let list = []

      // get lists
      const selCats = this.selectedCategories

      // Loop over all the sessions to see if they have any of the
      // selected categories in their category list.
      this.currentSessionsList.forEach(session => {
        let sessionCats = []
        const categories = session.node.categories.split('|')
        categories.forEach(cat => cat !== "" ? sessionCats.push(this.slugify(cat)) : '' )

        if ( selCats.some( r => sessionCats.includes(r) ) ) list.push(session)
      })

      return list
    }
  },
  methods: {
    tagColor(tag) {
      let colorClass
      tag = tag.toLowerCase()
      if ( tag === 'new' ) colorClass = 'bg-red-700 text-neutral-100'
      if ( tag === 'updated' ) colorClass = 'bg-green-400 text-neutral-100'
      if ( tag === 'double' ) colorClass = 'bg-purple-400 text-neutral-100'
      if (!colorClass) colorClass = 'bg-neutral-300 text-neutral-1900'
      return colorClass
    },
    extractTags(obj) {
      if (obj.edges.length == 0) { return [] }
      const tagArray = obj.edges.map(tag => {
        return tag.node.title
      })
      return tagArray
    },
    slugify(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();
    
      // remove accents, swap ñ for n, etc
      var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
      var to   = "aaaaeeeeiiiioooouuuunc------";
      for (var i=0, l=from.length ; i<l ; i++) {
          str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
          .replace(/\s+/g, '-') // collapse whitespace and replace by -
          .replace(/-+/g, '-'); // collapse dashes

      return str;
    },
    toggleCategoryDrawer() {
      this.categoriesOpen = !this.categoriesOpen
    },
    toggleCategory(cat) {
      cat = this.slugify(cat)
      if (this.selectedCategories.includes(cat)) {
        console.log('remove', cat)
        // remove the category from the list
        const index = this.selectedCategories.indexOf(cat)
        this.selectedCategories.splice(index, 1)
      } else {
        console.log('add', cat)
        this.selectedCategories.push(cat)
      }
    },
    mobileTypeSelect(set) {
      this.mobileTypeSelectorOpen = !this.mobileTypeSelect
      this.currentView = set
    },
  },
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.session-list-header
  top: 97px

@media (min-width: 768px)
  .session-list-header
    top: 113px
</style>

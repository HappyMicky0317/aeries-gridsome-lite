<template lang="pug">
Layout(navStyle="dark", sub-nav, :sub-nav-config="subNavConfig")
  a.cta-btn.bg-red-600.py-1.px-2.text-neutral-300.rounded.my-2.font-bold(
    slot="cta-container",
    href="https://my.aeries.com/Events/Home/SelectEvent/674",
    target="_blank",
    class="md:px-6"
  ) REGISTER NOW

  section#sessionsList(class="container text-neutral-1300 mt-4 mb-24")
    .section-title(
      class="w-full text-center mt-8 -mb-16 text-neutral-1800 md:mt-16 md:-mb-24"
    )
      //- h1.font-aeries.text-header.font-bold(class="md:text-xx-large") Our session list for spring 2023 is coming soon!
      //- p(class="text-lg font-bold font-nunito text-neutral-1300") Keep your eyes peeled for more information. 
      //- p(class="text-lg font-bold font-nunito text-neutral-1300") You can expect to see a variety of topics covered, including data management, scheduling, query and reports, CALPADS/PEIMS, and more!
      
      h1.font-aeries.text-header.font-bold(class="md:text-xx-large") AeriesCon Spring 2023 Sessions list
      p(class="text-lg font-bold font-nunito text-neutral-1300") As we get closer to AeriesCon, check back for any additions to our variety of sessions which include data management, scheduling, query and reports, CALPADS/PEIMS, and more!
      
      hr(class="border-neutral-400 my-8 mt-12")

      ac-session-list(class="", :sessions="sessions")
</template>

<page-query>
  query {
    allSessions {
      edges {
        node {
          id
          title {
            rendered
          }
          content {
            rendered
          }
          tags
          session_category
          acf {
            session_id
            california_texas_specific
          }
        }
      }
    }
    allSessionCategories {
      edges {
        node {
          id
          count
          name
          slug
          taxonomy
        }
      }
    }
    allSessionTags {
      edges {
        node {
          id
          count
          name
          slug
          taxonomy
        }
      }
    }
  }
</page-query>

<script>
import AeriesconHero from "../../components/hero/aeriescon-hero";
import AcSessionList from "../../components/ac-session-list";

export default {
  name: "ViewAeriesConSessions",
  components: { AcSessionList, AeriesconHero },
  data: () => ({
    subNavConfig: {},
  }),
  computed: {
    sessionCategories() {
      //Loop through allSessionCategories and return an object where the ID is the key
      //E.g. { 1: {id: 1, name: "Data Management", slug: "data-management", count: 3}, 2: {id: 2, name: "Scheduling", slug: "scheduling", count: 2} }
      const categories = this.$page.allSessionCategories.edges.map((category) => category.node)
      const categoryObj = {}
      categories.forEach((category) => {
        categoryObj[category.id] = category
      })
      return categoryObj
    },
    sessionTags() {
      const tags = this.$page.allSessionTags.edges.map((tag) => tag.node)
      const tagObj = {}
      tags.forEach((tag) => {
        tagObj[tag.id] = tag
      })
      return tagObj
    },
    sessions() {
      // const ses1 = this.$page.firstSessions.edges.map((session) => session.node)
      // const ses2 = this.$page.lastSessions.edges.map((session) => session.node)
      const ses = this.$page.allSessions.edges
      const sorted = ses.sort((a,b) => (a.title > b.title ? 1 : -1))

      //Loop through sorted and replace all int IDs in the session_category array with the category object from sessionCategories
      //For each session_category, replace the ID with the category object
      sorted.forEach((session) => {
        //Loop through session.node.session_category and replace each ID with the category object
        session.node.session_category = session.node.session_category.map((id) => {
          return this.sessionCategories[id]
        })
      })

      // Do the same for tags
      sorted.forEach((session) => {
        //Loop through session.node.session_category and replace each ID with the category object
        session.node.tags = session.node.tags.map((id) => {
          return this.sessionTags[id]
        })
      })

      return sorted
    },
  },
  mounted() {
    this.subNavConfig = this.$store.state.aeriescon.subNavConfig;
  },
};
</script>

<style lang="stylus"></style>

<template lang="pug">
section#solvingStudentData(class="containers py-12" :class="{'bg-neutral-300' : darkenedBackground}")
  .container(class="px-4 md:px-0")
    h1(class="text-title md:text-display font-aeries font-bold leading-tight tracking-tight text-center text-neutral-1700") {{sectionTitle}}
    p(v-if="sectionDescription" class="w-full md:w-4/5 font-semi-bold text-center md:m-auto pt-6 pb-12")
      | {{sectionDescription}}
  .container.solutionSelectorButtons(class="flex flex-col md:flex-row justify-center my-6")
    .solutionSelectorButton(@click="selectedSolution = solution" v-for="solution in solutions" class="text-center md:text-subhead md:text-left cursor-pointer px-4 md:mx-2 py-2" :class="{'bg-blue-600 text-white' : solution.suptitle == selectedSolution.suptitle}")
      | {{solution.suptitle}}
  
  .container.cta.rounded(:class="selectedSolution.className" class="md:py-12")
    div(class="md:flex items-center")
      div(class="w-full md:w-3/5 px-2")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Daily Operations'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Reporting'" src="@/assets/images/aeries-sis-reporting.png" class="shadow-xl m-auto")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Administrative'" src="@/assets/images/aeries-sis-administrative.png" class="shadow-xl m-auto")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Fundraising'" src="@/assets/images/product-financials-borderless.png" class="shadow-xl m-auto")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Communication'" src="@/assets/images/aeries-communications-jumbo-hero.svg" class="w-2/3 m-auto")
        g-image(quality="100" v-show="selectedSolution.suptitle == 'Analytics'" src="@/assets/images/product-analytics-borderless.png" class="shadow-xl m-auto")
      div(class="w-full md:w-2/5 px-2 mt-12 md:mt-0")
        h1.text-header.font-aeries.font-bold.leading-tight.tracking-tight.text-neutral-1700 {{selectedSolution.title}}
        p.text-neutral-1300.mt-2.text-subhead {{selectedSolution.description}}
        .snacks.mt-6
          li(v-for="snack in selectedSolution.snacks" class="mt-4")
            h3.inline.text-subhead.font-bold.text-neutral-1600 {{snack.title}}
            p.pl-6.pt-2.text-neutral-1300 {{snack.description}}
</template>

<script>
  export default {
    mounted() {
      //On mount, set the selected solution to whichever one is first in the list
      //Just so something shows at all.
      this.selectedSolution = this.solutions[0];
    },
    data() {
      return {
        selectedSolution: {

        },
        solutions: [
          {
            suptitle: "Daily Operations",
            title: "Tools for every stakeholder",
            description: "From state reporting to parent engagement to classroom tools, Aeries has your daily op needs covered.",
            snacks: [
              {
                title: "Industry-leading feature set", 
                description: "Designed to empower every user by streamlining complex and tedious tasks that can impede stakeholders."
              },
              {
                title: "Advanced gradebook", 
                description: "Aeries’ robust gradebook allows educators to spend more time teaching and less time doing paperwork."
              },
              {
                title: "Focused interfaces", 
                description: "Aeries offers intuitive role-focused tools to make the most of your stakeholder's time."
              }
            ],
          },
          {
            suptitle: "Reporting",
            title: "Compliant reporting made easy",
            description: "Deliver data to every stakeholder with ease by using Aeries’ library of purpose-built reports.",
            snacks: [
              {
                title: "Fast and Easy Reporting", 
                description: "Use Aeries to turn common data points into intuitive, clear reports for every stakeholder."
              },
              {
                title: "Data delivered", 
                description: "Export reports in your chosen format for immediate download, or email it to stakeholders from within Aeries."
              },
              {
                title: "Focus in on what matters", 
                description: "Look at the big picture, or zoom in on a specific segment or student group for more granular insights."
              }
            ],
          },
          {
            suptitle: "Administrative",
            title: "Full top-down visibility",
            description: "Aeries provides a scalable platform you can use to manage and monitor district-level initiatives.",
            snacks: [
              {
                title: "Optimize operations", 
                description: "With modern technology and intuitive user experiences, you can bring data to the forefront of all users' operations."
              },
              {
                title: "Reduce costs district-wide", 
                description: "Aeries offers tools and services designed to save time for your users and money for your district."
              },
              {
                title: "We're partners in your success", 
                description: "The Aeries team is made up mostly of former K-12 staff from Aeries school districts who have been in your shoes."
              }
            ],
          },
          {
            suptitle: "Communication",
            title: "Your communication network",
            description: "Today, families are more engaged digitally than ever. Manage that engagement with proper oversight.",
            snacks: [
              {
                title: "Simplified, familiar user experience", 
                description: "Provide ease of use for every stakeholder, from administrators to faculty to parents and students."
              },
              {
                title: "Your platform, your rules", 
                description: "Communication is inevitable - now it can happen on a platform your district manages and monitors."
              },
              {
                title: "Unify communication data", 
                description: "No longer will valuable insights be locked away in many different tools and apps, unable to be analyzed."
              }
            ],
          },
          {
            suptitle: "Fundraising",
            title: "Payments & fundraising",
            description: "In-district payment processing and community fundraising made easy.",
            snacks: [
              {
                title: "Track every dollar", 
                description: "Track and associate every detail of fundraising campaigns."
              },
              {
                title: "Manage your environment", 
                description: "Customize your approval process to ensure fundraisers are reviewed and approved."
              },
              {
                title: "Your community's platform", 
                description: "View every campaign on your customized district fundraising portal."
              }
            ],
          },
          {
            suptitle: "Analytics",
            title: "Insights from student data",
            description: "Create customizable dynamic dashboards and make informed decisions with all the facts.",
            snacks: [
              {
                title: "Just-add-data dashboards", 
                description: "Use the massive library of ready-to-use dashboards, or build your own."
              },
              {
                title: "Early warning on at-risk indicators", 
                description: "Aeries Analytics can monitor your at-risk indicators and identify struggling students."
              },
              {
                title: "Interactive charts", 
                description: "In Analytics, click any chart segment to drill down for rich exploration of data subsets."
              }
            ],
          },
        ]
      }
    },
    props: {
    'sectionTitle': {
      type: String,
      default: 'Managing student data with Aeries'
    },
    'sectionDescription': {
      type: String
    },
    'primaryButtonText': {
      type: String,
      default: "Request a demo"
    },
    'secondaryButtonText': {
      type: String,
      default: "Contact sales"
    },
    'primaryButtonURL': {
      type: String,
      default: "/contact"
    },
    'secondaryButtonURL': {
      type: String,
      default: "/contact"
    },
    'darkenedBackground': {
      type: Boolean,
      default: false
    }
      
    }
  }
</script>
<style scoped>
.cta {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #151616;
  background-position: 100% 100%;
}

.cta-communications {
  background-image: url("~../assets/images/cta-shine-communications.png");
}

.cta-analytics {
  background-image: url("~../assets/images/cta-shine-analytics.png");
}

.cta-financials {
  background-image: url("~../assets/images/cta-shine-financials.png");
}

.cta-mobile-apps {
  background-image: url("~../assets/images/cta-shine-mobileapps.png");
}

.cta-enrollment {
  background-image: url("~../assets/images/cta-shine-enrollment.png");
}

.cta-hosting {
  background-image: url("~../assets/images/cta-shine-hosting.png");
}
</style>

<template lang="pug">
section#shineALight(class="containers mt-0 mb-0 md:my-12")
  
  .container
    h1(class="text-title md:text-display font-aeries font-bold leading-tight tracking-tight text-center text-neutral-1700") Shine a light on the Aeries solutions lineup
  
  .container.solutionSelectorButtons(class="flex flex-col md:flex-row justify-center md:my-6")
    .solutionSelectorButton(@click="selectedSolution = solution" v-for="solution in solutions" class="md:text-subhead cursor-pointer px-4 md:mx-2 py-2" :class="{'bg-blue-600 text-white' : solution.suptitle == selectedSolution.suptitle}")
      | {{solution.suptitle}}
  
  .container(class="cta md:rounded" :class="selectedSolution.className" class="py-24")
    .flex
      div(class="w-full md:w-1/2 px-8")
        //- Injecting "Aeries" here for the suptitle e.g. "AERIES COMMUNICATIONS" instead of just "COMMUNICATIONS"
        span.suptitle.uppercase.text-minimum-text.text-white.font-bold {{"Aeries " + selectedSolution.suptitle}}
        h1(class="text-title md:text-display font-aeries font-bold leading-tight tracking-tight text-white") {{selectedSolution.title}}
        p.text-neutral-600.mt-2 {{selectedSolution.description}}
        g-link(class="inline-block rounded-full bg-blue px-4 py-2 rounded font-semi-bold shadow text-white mt-4" :to="selectedSolution.to") Learn more about {{selectedSolution.suptitle}}

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
            suptitle: "Analytics",
            title: "Understanding your data and delivering actionable insights",
            description: "Demystify your student data. Create customizable and dynamic dashboards to turn raw data into analyzable trends.",
            to: "/solutions/aeries-analytics",
            className: "cta-analytics"
          },
          {
            suptitle: "Cloud Hosting",
            title: "Simplify scaling SIS hosting & reduce costs",
            description: "It's the full power of the Aeries Cloud, with no hosting headache. Leave Aeries backups, updates, security, speed, recovery and availability to us.",
            to: "/solutions/aeries-cloud",
            className: "cta-hosting "
          },
          {
            suptitle: "Communications",
            title: "Reaching your district, simplified & streamlined",
            description: "Engage with your students and parents with a fully-integrated communications platform in your SIS, powered by ParentSquare.",
            to: "/solutions/aeries-communications",
            className: "cta-communications"
          },
          {
            suptitle: "Enrollment",
            title: "Say goodbye to the costly and wasteful paper packet",
            description: "A customizable solution to streamline and automate the process of student enrollment online, saving your staff time and money.",
            to: "/solutions/aeries-enrollment",
            className: "cta-enrollment"
          },
          {
            suptitle: "Financials",
            title: "Processing payments has never been easier",
            description: "An integrated financial management solution which streamlines your district's transactions, powered by innovation leader, LivingTree.",
            to: "/solutions/aeries-financials",
            className: "cta-financials"
          },
          {
            suptitle: "Mobile Apps",
            title: "Access to Aeries anytime, anywhere, on your phone",
            description: "Delivering Aeries access to admins, teachers, parents and students on the go. Our suite of apps put student data in the palm of your hand.",
            to: "/solutions/aeries-mobile-apps",
            className: "cta-mobile-apps"
          },
        ]
      }
    }
    
  }
</script>

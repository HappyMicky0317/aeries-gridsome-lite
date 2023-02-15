<style scoped>
.featureList {
    transform: translate(-3px, -15px);
}
</style>

<template lang="pug">
section#featureSet(class="containers py-6 px-6 md:py-24")

  .container(class="flex flex-col md:flex-row")
    div(class="w-full md:w-2/5" v-if="!textAlignment || textAlignment == 'left'")
      h2.font-bold.leading-none(
      class="text-neutral-1700 font-aeries text-center md:text-left \
     text-header tracking-tight leading-tight")
        | Comprehensive, industry-leading feature set
      .mt-6(class="text-neutral-1400 text-center md:text-left") 
        | Aeries delivers innovative solutions for districts, private schools, and local education agencies. See some of the reasons why our customers choose us to manage the data of their over 2.5 million students.
      .buttons.flex.mt-10( class="justify-center md:justify-start" )
        g-link( to="/contact-sales" 
          class="bg-blue px-4 py-2 rounded font-semi-bold shadow text-white" ) 
          | Request a demo
          
    div(class="w-full mt-12 md:m-0 md:w-3/5")
      .flex.flex-row.justify-center
        .features.flex.flex-col.w-48
          .feature(@click="selectFeature(feature)" v-for="feature in features" :class="{'bg-neutral-1200 text-white' : feature.title == selectedFeatures.title, 'cursor-pointer' : isClickable == true}" class="bg-neutral-400 p-2 px-4 inline-block mb-2 rounded")
            span(class="font-semi-bold leading-tight tracking-tight md:text-subhead") {{feature.title}}
        .featureList(class="flex-col bg-white p-4 shadow-2xl rounded w-1/2")
          li(v-for="feature in selectedFeatures.features").mb-1
            span(class="text-minimum-text md:text-base") {{feature}}

    div(class="w-full md:w-2/5" v-if="textAlignment == 'right'")
      h2.font-bold.leading-none(
      class="text-neutral-1700 font-aeries text-center md:text-left \
     text-header tracking-tight leading-tight")
        | Comprehensive, industry-leading feature set
      .mt-6(class="text-neutral-1400 text-center md:text-left") 
        | Aeries delivers innovative solutions for districts, private schools, and local education agencies. See some of the reasons why our customers choose us to manage the data of their over 2.5 million students.
      .buttons.flex.mt-10( class="justify-center md:justify-start" )
        g-link( to="/contact-sales" 
          class="bg-blue px-5 py-3 rounded-full font-semi-bold shadow text-white" ) 
          | See Aeries In Action

  //- .container.cta.rounded(:class="selectedSolution.className" class="py-12")
  //-   .flex.items-center
  //-     div(class="w-3/5 px-2")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Daily operations'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Reporting'" src="@/assets/images/aeries-sis-reporting.png" class="shadow-xl m-auto")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Administrative'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Fundraising'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Communication'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
  //-       g-image(quality="100" v-show="selectedSolution.suptitle == 'Analytics'" src="@/assets/images/aeries-sis-student-profile.png" class="shadow-xl m-auto")
  //-     div(class="w-2/5 px-2")
  //-       h1.text-header.font-aeries.font-bold.leading-tight.tracking-tight.text-neutral-1700 {{selectedSolution.title}}
  //-       p.text-neutral-1300.mt-2.text-subhead {{selectedSolution.description}}
  //-       .snacks.mt-6
  //-         li(v-for="snack in selectedSolution.snacks" class="mt-4")
  //-           h3.inline.text-subhead.font-bold.text-neutral-1400 {{snack.title}}
  //-           p.pl-6.pt-2.text-neutral-1300 {{snack.description}}
</template>

<script>

//Storing the features shown under "Student Data".
//This is so we can render an unclickable version of the component.
var defaultFeaturesTemplate = [
    "Medical",
    "Discipline",
    "Siblings",
    "Emergency Contacts",
    "Fees / Fines",
    "Counseling",
    "Special Ed. / CASEMIS",
    "Intervntion Tracking (RTI)",
    "Retention Tracking",
    "Lockers",
    "Photos / ID Cards",
    "Custom Supplemental Data",
    "Language Assessment",
    "Free & Reduced Lunch",
    "Physical Fitness",
    "Work Permits",
  ]


  export default {
    props: ['textAlignment', 'clickable', 'customCategories'],

    mounted() {
      //On mount, set the selected feature to whichever one is first in the list
      //Just so something shows at all.
      this.selectedFeatures = this.features[0];
      
      //Take the passed prop and set it in the component data to control
      //whether the categories can be switched
      if (this.clickable) {
        this.isClickable = this.clickable;
      }

      if (this.customCategories) {
        var newFeatures = [];
        const categories = this.customCategories.split(',');
        for (var i = 0; i  < categories.length; i++) {
          newFeatures.push({'title' : categories[i], 'features' : defaultFeaturesTemplate})
        }
        this.features = newFeatures;
      }
    },
    methods: {
      selectFeature(feature) {
        if (this.isClickable == true) {
          this.selectedFeatures = feature
        }
      },
    },
    data() {
      return {
        isClickable: true,
        selectedFeatures: {

        },
        features: [
          {
            title: "Student Data",
            features: [
              "Medical",
              "Discipline",
              "Siblings",
              "Emergency Contacts",
              "Fees / Fines",
              "Counseling",
              "Special Ed. / CASEMIS",
              "Intervntion Tracking (RTI)",
              "Retention Tracking",
              "Lockers",
              "Photos / ID Cards",
              "Custom Supplemental Data",
              "Language Assessment",
              "Free & Reduced Lunch",
              "Physical Fitness",
              "Work Permits",
            ]
          },  
          {
            title: "Scheduling",
            features: [
            "Interactive Schedule Builder",
            "Walk-in Scheduler",
            "Mass Scheduling",
            "4-Year Plan",
            "Master Schedule Board",
            "Block Scheduling",
            "Scheduling Priorities",
            "Course Request Packets",
            "Bell Schedule Calendar",
            "Current Year for Next Year",
            "Saves/Restores Unlimited Schedules",
            "Elementary Scheduling",
            "Course Requests",
            "Team Teaching",
            "Teacher Recommendations",
            "Highly Qualified Teacher Processing",
            "Staff Credentials",
            "Locator Cards"
            ]
          },
          {
            title: "Grade Reporting / Transcripts",
            features: [
            "Calculates and Stores over 15 GPAs",
            "Graduation Requirements",
            "User-Defined Report Cards",
            "Customizable Transcripts",
            "Standards-Based Report Cards",
            "Progress Reports",
            "Eligibility Reports",
            "Colleges",
            "UC / CSU Eligibility Analysis",
            "Selected Test Scores & Activities",
            "Transcript Printing to Colleges",
            "Citizenship GPA",
            "Tri-fold Mailers / Letters / Dot-Matrix",
            "UC ELC Integration",
            ]
          },
          {
            title: "Government Reports",
            features: [
            "PEIMS",
            "TSDS Core Collections",
            "CALPADS Compliant",
            "Attendance: Hourly, ADA, & Enrollment",
            "Carl Perkins (CTE)",
            "Class Size Reduction (CSR)",
            "Crime Report",
            "Civil Rights Report (CRDC)",
            "ASAM",
            "SNOR",
            "NCLB",
            "CalPass Integration",
            ]
          },
          {
            title: "Attendance",
            features: [
            "Daily",
            "Period",
            "Homeroom",
            "Positive",
            "Negative",
            "Supplemental",
            "Alternative",
            "Continuation",
            "Summer",
            "After School & Lunch",
            "Absence Letter Printing",
            "Truancy Letter Printing",
            "SARB Letter Printing",
            "Course Attendance",
            "Enrollment History",
            ]
          },
          {
            title: "Testing & Assessment",
            features: [
            "STAAR (3-8 and EOC)",
            "TELPAS",
            "PreID / Load of Standardized Tests",
            "STAR (CAT-6, CST)",
            "Aprenda / SABE",
            "CAHSEE",
            "CELDT",
            "SAT I&II",
            "ACT",
            "Multiple Measures",
            "Cluster/Strand Analysis",
            "Data Mining",
            "Test Analysis",
            "Dynamic Reporting",
            "Multi Student Data Profile",
            "School/Dist Assessments",
            ]
          },
          {
            title: "Medical",
            features: [
            "Daily Log",
            "Medical History",
            "Immunizations",
            "Vaccination Requirements",
            "Hearing",
            "Vision",
            "Physicals",
            "Scoliosis",
            "Dental",
            "Government Billing",
            ]
          },
          {
            title: "... And more",
            features: [
            "Field Level Security",
            "Textbook Inventory",
            "Address Verification",
            "Industry Leading Ad Hoc Query",
            "Billing / Payment Schedules",
            "Scrip Tracking",
            "Mail Merge style Custom Letters",
            "Multiple Label Options",
            "Report Printing Packets",
            "Microsoft Office™ Integration",
            "Summons Slips",
            "Home Language Survey",
            "Multi-Year Enrollment Tracking",
            "District Level Reports"
            ]
          },
        ],
      }
    }
  }
</script>
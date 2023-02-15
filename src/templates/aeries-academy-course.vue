<template lang="pug">
  Layout(sub-nav :sub-nav-config="subNavConfig")
    //- HOME HERO
    //- TODO: COMPONENTIZE But replace with the versatile hero Zack made.
    section.home-hero(class="bg-neutral-300 py-12 lg:py-0")
      .container.z-10.relative(class="flex flex-col md:flex-row items-center")
        .text-side(
          class="px-4 flex flex-col \
          md:w-1/2")
          span(class="text-neutral-1300 pb-2 text-center md:text-left" v-if="thisCourse.itemType == 'General certification course'")
            | #[g-link(class="text-blue-600 underline" to="/academy") Aeries Academy] / #[g-link(class="text-blue-600 underline" to="/academy/general") General Courses] /
          span(class="text-neutral-1300 pb-2 text-center md:text-left" v-else)
            | #[g-link(class="text-blue-600 underline" to="/academy") Aeries Academy] / #[g-link(class="text-blue-600 underline" to="/academy/teacher") Teacher Courses] /
          h2.font-bold.leading-none(
          class="text-neutral-1700 font-aeries text-center md:text-left \
          text-header md:text-display leading-tight tracking-tight")
            | {{thisCourse.title}}
        div(class="md:w-1/2 pl-8 md:relative hidden md:flex items-center justify-center")
          g-image(class="w-4/5" :src="require('!!assets-loader!~/assets/images/' + thisCourse.image).src")

    section.mt-5
      .container(class="bg-neutral-300 py-6 my-12")

        div(class="px-5")
          .flex(class="flex-col md:flex-row")
            div(class="md:w-1/2 pr-8")
              h2(class="text-title text-neutral-1700 font-aeries font-bold mb-6") Course Information
              p(style="white-space: break-spaces;")
                | {{thisCourse.description}}
            
            div(class="md:w-1/2")
              p(v-if="showSuccess" class="text-green-600 font-semi-bold italic mb-6 mt-4") Request received! You'll receive instructions via email on accessing Aeries Academy as soon as your enrollment is processed.
              div(v-if="!showEnrollmentView")
                h2(class="text-title text-neutral-1700 font-aeries font-bold mb-6 mt-12 md:mt-0") Register & enroll
                div(class="flex")
                  //- div(class="w-1/2")
                  //-   span(class="text-subhead") Hours to complete
                  //-   h2(class="text-display text-neutral-1700 font-aeries font-bold") {{thisCourse.hoursToComplete}}
                  //- div(class="w-1/2")
                  //-   span(class="text-subhead") Enrollment cost
                  //-   h2(v-if="thisCourse.salePrice" class="text-display text-neutral-1700 font-aeries font-bold") ${{thisCourse.salePrice}}
                  //-   h2(v-else class="text-display text-neutral-1700 font-aeries font-bold") ${{thisCourse.price}}
                .buttons
                  a.enrollNow(@click="showEnrollmentView = true; showSuccess = false;" class="bg-blue-600 text-white font-bold text-subhead inline-block px-12 py-3 rounded shadow mt-2 cursor-pointer") Enroll Now
                  p(v-if="thisCourse.itemType == 'General certification course' && thisCourse.title !== 'Aeries District Coordinator (Full certification)'" class="text-minimum-text mt-2") TIP: The comprehensive #[g-link(class="font-bold text-blue-600" to="/academy/course/aeries-district-coordinator") District Coordinator certification] includes this course.



              div(v-if="showEnrollmentView")
                .mb-4
                  h2(class="text-title text-neutral-1700 font-aeries font-bold mb-2 mt-12 md:mt-0") Name
                  input(class="w-full p-3 border border-neutral-1200" type="text" autocomplete="name" v-model="userName" placeholder="Your name")
                h2(class="text-title text-neutral-1700 font-aeries font-bold mb-2 mt-12 md:mt-0") Email address
                div(class="flex")
                input(class="w-full p-3 border border-neutral-1200" type="email" autocomplete="email" v-model="userEmail" placeholder="example@email.com")
                .buttons
                  a.enrollNow(@click="submitEnrollment()" class="bg-blue-600 text-white font-bold text-subhead inline-block px-12 py-3 rounded shadow mt-4 cursor-pointer") Send Enrollment Invitation
                  p(v-if="thisCourse.itemType == 'General certification course' && thisCourse.title !== 'Aeries District Coordinator (Full certification)'" class="text-minimum-text mt-2") TIP: The comprehensive #[g-link(class="font-bold text-blue-600" to="/academy/course/aeries-district-coordinator") District Coordinator certification] includes this course.

</template>

<page-query>
  query {
    allGeneralCourses {
      edges {
        node {
          id
          title
          image
          description
          price
          salePrice
          hoursToComplete
          subModules
          itemType
        }
      }
    }
    allTeacherCourses {
      edges {
        node {
          id
          title
          image
          description
          price
          hoursToComplete
          tier
          itemType
          disabled
        }
      }
    }
  }
</page-query>

<script>
import checkboxGroupVue from '@/components/forms/checkboxGroup.vue';
const axios = require('axios')
const $ = require('jquery')


export default {
  data() {
    return {
      checkoutObject: {
        "fullName": "",
        "phone": "",
        "email": "",
        "jobTitle": "",
        "districtName": "",
        "address": "",
        "city": "",
        "aeriesDistrict": "",
        "paymentMethod": "",
        "cart": {
        },
        "totalPrice": "0",
        "msgType": "aeriesAcademyCheckout"
      },
      showSuccess: false,
      showEnrollmentView: false,
      userEmail: "",
      userName: "",
      subNavConfig: {
        title: 'Academy',         // The title that appears on the left of the sub-nav bar
        items: [
          // all the items you want in the subnav
          { label: 'Home', to: '/academy' },
          { label: 'General Courses', to: '/academy/general' },
          { label: 'Teacher Courses', to: '/academy/teacher' },
          { label: 'FAQ', to: '/academy/faq' },
        ],
        bgColor: 'bg-neutral-200',       // tailwind class for bg-color (default is bg-white)
        textColor: 'text-blue-600',     // tailwind class for color (default is text-blue-600)
        borderColor: 'border-neutral-400',   // tailwind class for border-bottom (default is none)
      },
    }
  },
  async mounted () {
    this.checkoutObject.cart["0"] = this.thisCourse;
  },
  methods: {
    sendEnrollment() {
      var globalScope = this;

      $.ajax({
      url: "https://enrollment.aeries-ad-wa2-api.com/users/1/web_requests/31/inbound-msg",
      type: "POST",
      data: globalScope.checkoutObject,

      success: function(data) {
        globalScope.showSuccess = true;
        globalScope.showEnrollmentView = false;
      }
    });

      // fetch("https://enrollment.aeries-ad-wa2-api.com/users/1/web_requests/31/inbound-msg", {
      //   method: "POST", 
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(globalScope.checkoutObject)
      // }).then(res => {
      //   console.log("Request complete! response:", res);
      //   globalScope.showSuccess = true;
      //   globalScope.showEnrollmentView = false;
      // });

      // axios({
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   method: 'POST',
      //   url: 'https://enrollment.aeries-ad-wa2-api.com/users/1/web_requests/31/inbound-msg',
      //   data: encodeURIComponent(JSON.stringify(globalScope.checkoutObject))
      // }).then((response) => {
      //   console.log(response)
      //   globalScope.showSuccess = true;
      //   globalScope.showEnrollmentView = false;
      // }, (error) => {
      //   console.log(error)
      //   alert("Sorry, something went wrong.");
      // });

    },
    submitEnrollment() {
      if (this.userName) {
      if (this.validateEmail(this.userEmail)) {
        if (confirm("Send enrollment invitation for " + this.thisCourse.title + " to " + this.userEmail + "?")) {
          this.checkoutObject.email = this.userEmail;
          this.checkoutObject.fullName = this.userName;
          this.sendEnrollment();
        }
      } else {
        alert("Please enter a valid email address where the invitation should be sent.")
      }
      } else {
        alert("Please enter your name.")
      }
    },
    validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
  },
  computed : {
    generalCourseData() {
      return this.$page.allGeneralCourses.edges
    },
    teacherCourseData() {
      return this.$page.allTeacherCourses.edges
    },
    allCourses() {
      return this.generalCourseData.concat(this.teacherCourseData);
    },
    thisCourse: function() {
      // var courses = this.allCourses;
      // for (var i = 0; i < courses.length; i++) {
      //   if (courses[i].node.id == this.$route.params.id) {
      //     return courses[i].node;
      //   }
      // }
      return this.$context;
    },
  },
  metaInfo: {
    title: 'Aeries Academy Course'
  }
}
</script>

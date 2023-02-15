<template lang='pug'>
  //- Opening apply form. shows after they've clicked the button to apply.
  .opening-form(class="max-w-960 mx-auto w-full flex flex-col")
    .personal-information(class="bg-neutral-400 shadow-double-drop px-4 md:px-24 py-8 rounded w-full flex flex-col")
      h3.form-section-header(class="text-header text-neutral-1700 font-extra-bold") Personal Information
      .form-field-contaier(class="grid grid-cols-4 gap-4 md:gap-6 mt-2")
    
        .input-group(class="col-span-4 md:col-span-2")
          label(for="fullName" class="text-minimum-text") Full Name
          input#fullName(v-model="applicant.fullName" type="text" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border" placeholder="ie. Alan Abbot")
        .input-group(class="col-span-4 md:col-span-2")
          label(for="emailAddress" class="text-minimum-text") Email Address
          input#emailAddress(v-model="applicant.email" type="email" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border")
        .input-group(class="col-span-4 md:col-span-2")
          label(for="phone" class="text-minimum-text") Phone Number
          input#phone(v-model="applicant.phone" type="tel" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border")
        .input-group(class="col-span-4 md:col-span-2")
          label(for="education" class="text-minimum-text") Education Level
          select#education(v-model="applicant.educationLevel" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border bg-white")
            option(value="high-school") High School Diploma
            option(value="some-college") Some College
            option(value="associates") Associates Degree
            option(value="bachelors") Bachelors Degree
            option(value="other") Other
        .input-group(class="col-span-4 md:col-span-2")
          label(for="city" class="text-minimum-text") City
          input#city(v-model="applicant.city" type="text" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border")
        .input-group(class="col-span-2 md:col-span-1")
          label(for="state" class="text-minimum-text") State
          input#state(v-model="applicant.state" type="text" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border")
        .input-group(class="col-span-2 md:col-span-1")
          label(for="zipcode" class="text-minimum-text") Zip
          input#zipcode(v-model="applicant.zip" type="text" class="px-3 py-2 w-full focus:outline-none rounded border-neutral-600 border")
        
    //- TODO: #POSTLAUNCH
    //- .your-resume(class="bg-neutral-400 shadow-double-drop px-4 md:px-24 py-8 rounded w-full mt-6 flex flex-col")
    //-   h3.form-section-header(class="text-header text-neutral-1700 font-extra-bold") Upload Your Resume
    //-   .form-field-container(class="relative flex flex-col items-center justify-center border-dashed border-neutral-600\
    //-     border-2 rounded-lg mt-4 hover:bg-neutral-500 transition duration-150") 
        
    //-     dropzone(ref="dropzone" id="dropzone" 
    //-       :options="dropOptions" 
    //-       @v-dropzone-complete="afterComplete" 
    //-       class="inset-0 w-full h-full")

    .cover-letter(class="bg-neutral-400 shadow-double-drop px-4 md:px-24 py-8 rounded w-full mt-6 flex flex-col")
      h3.form-section-header(class="text-header text-neutral-1700 font-extra-bold") Cover Letter (optional)
      .form-field-contaier(class="grid grid-cols-4 gap-6 mt-2")
      textarea.cover-letter(v-model="applicant.coverLetter" class="col-span-4 px-3 py-2 focus:outline-none rounded border-neutral-600 border" rows="8")

    .button-container(class="grid grid-cols-2 mt-8")
      .back-button()
        g-link.back(to="/careers/#openings" class="flex items-center hover:underline cursor-pointer") 
          icon(icon="cheveron-left" class="w-6 h-6 text-neutral-1400")
          span Back To All Openings
      .right-buttons(class="flex justify-end") 
        div.cancel-btn(@click="$parent.$emit('form-close')" class="px-4 py-2 bg-white hover:bg-neutral-300 transition duration-200 cursor-pointer") Cancel
        div.submit-btn(@click="submitApplication" class="px-4 py-2 bg-blue-600 hover:bg-blue-400 transition duration-200 cursor-pointer text-white rounded ml-2") Submit My Application
</template>

<style lang='stylus'>
   #dropzone
    background transparent
    border none
</style>

<script>
  // import Dropzone from 'vue2-dropzone'
  // import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  import { v1 } from 'uuid'
  import axios from 'axios'

  export default {
    name: 'OpeningApplicantForm',
    // components: { Dropzone },
    mounted() {
      //- set the position data to be added when the form is submitted. 
      this.applicant.id = v1()
      this.position = {
        title: this.$page.crmOpening.title,
        id: this.$page.crmOpening.id,
        dept: this.$page.crmOpening.acf.department
      }
    },
    data() {
      return {
        msg: null,
        submitted: false,
        position: {},
        applicant: {
          id: '',
          fullName: '',
          email: '',
          phone: '',
          educationLevel: '',
          city: '',
          state: '',
          zip: '',
          coverLetter: ''
        }
      }
    },
    methods: {
      validate() {},
      postApplication(packet) {
        return new Promise((resolve, reject) => {
          axios
            .post('https://aeries.services/applicants', packet)
            .then( res => {
              resolve(res)
            })
            .catch( err => reject(err) )
        })
      },
      submitApplication() {
        let timeSubmitted = Date.now()
        let packet = {
          sumitted: timeSubmitted,
          position: this.position,
          applicant: this.applicant
        }
        this.postApplication(packet)
          .then(res => {
            this.$parent.$emit('form-submitted', res.data)
            this.resetForm()
          })
          .catch(err => console.log(err) )
      },
      resetForm() {
        this.position = {}
        this.applicant = {
          fullName: '',
          email: '',
          phone: '',
          educationLevel: '',
          city: '',
          state: '',
          zip: '',
          coverLetter: ''
        }
      }
    }
  }
</script>

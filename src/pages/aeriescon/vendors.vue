
<template lang="pug">
  Layout(sub-nav :sub-nav-config="subNavConfig")
    a.cta-btn.bg-red-600.py-1.px-2.text-neutral-300.rounded.my-2.font-bold(
    slot="cta-container",
    
    :href="subNavConfig.registerheaderlink",
    target="_blank",
    class="md:px-6"
  ) REGISTER NOW
    section
      div(class="bg-neutral-1900 text-white")
        .container(class="p-5 md:p-20 text-center")
          .text-center.inline-flex.items-center.justify-center.w-24.h-24.mb-6
            g-link(to="/aeriescon")
              g-image(:src="require('!!assets-loader!~/assets/images/aeriescon/ac-f-2022/aeriescon-logo-f22.svg')")
          h1(class="text-title font-aeries font-bold leading-tight tracking-tight md:text-display")
            | Interested in becoming an AeriesCon Vendor?
          
          //- If no description is provided by the component, hide the element.
          p(class="text-base mx-auto mb-5 w-full mt-5 md:px-16")
            | To host the unrivaled conference our customers expect from us, it takes a group of people passionate about Aeries and its users to plan it. Meet the folks working hard to elevate and innovate the AeriesCon experience, twice a year, year after year. 
         
    
    section.form-section(class="container mx-auto p-5 md:p-20")
      div(class="md:max-w-1/2 mx-auto mb-4 text-center")
        p(class="") Please fill out the following form and an Aeries representative will be in contact with you about ways to become involved.
      div(class="md:max-w-1/2 mx-auto")
        form.email-form(@submit.prevent="submitForm" v-if="!submitSuccess")
          //- name
          .form-control
            label Name
            input(type="text" name="name" placeholder="" v-model="emailForm.name")
          //- title
          .form-control
            label Title
            input(type="text" name="title" placeholder="" v-model="emailForm.title")
          //- company
          .form-control
            label Company
            input(type="text" name="company" placeholder="" v-model="emailForm.company")
          //- email
          .form-control
            label Email Address
            input(type="email" name="email" placeholder="" v-model="emailForm.email")
          //- phone
          .form-control
            label Phone Number
            input(type="phone" name="phone" placeholder="" v-model="emailForm.phone")
          //- submit
          .form-control
            button.submit-button Submit
        
        div(v-else)
          h2(class="text-header md:text-xx-large font-aeries font-bold text-neutral-1800 text-center mB-24") Thank you for your interest!
          p(class="text-base text-center mx-auto mb-5 w-full mt-5 md:px-16") Someone from our team will be reaching out shortly. 
          
      
    
   
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    subNavConfig: {},
    submitSuccess: false,
    emailForm: {
      name: '',
      email: '',
      phone: '',
      company: '',
      title: '',
    },
  }),
  computed: {
    grouped() {
    }
  },
  mounted() {
    this.subNavConfig = this.$store.state.aeriescon.subNavConfig
  },
  methods: {
    submitForm() {
      axios.post('https://mangotools.vercel.app/api/acvendors', this.emailForm)
        .then((res) => {
          console.log(res)
          this.submitSuccess = true
        })
        .catch((err) => {
          console.log(err)
        })

    }
  },
  metaInfo: {
    title: 'Are you interested in being a vendor?'
  }
}
</script>

<style scoped>
  .email-form {
    @apply grid grid-cols-1 gap-4;
  }
  .form-control {
    @apply flex flex-col items-start;
  }
  .form-control label {
    @apply text-sm font-semi-bold;
  }
  .form-control input {
    @apply border rounded border-neutral-800 bg-neutral-300 w-full px-3 py-1;
  }
  .submit-button {
    @apply bg-blue text-white font-bold font-aeries px-8 py-2 rounded;
  }
  .submit-button:hover {
    @apply bg-blue-700;
  }
</style>

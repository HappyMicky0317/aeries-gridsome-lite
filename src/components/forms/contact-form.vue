<template lang="pug">
    
  .form.contact-form(class="flex flex-col space-y-8 md:space-y-8 p-6")
    
    .success-content(v-if="submitted == true")
      .text-display(class="text-neutral-1600 font-bold") Thanks, we got your message!
      .text-message(class="mt-4") We'll respond to you as soon as we can.
      a(@click="closeParent()" class="block text-blue-700 text-subhead mt-4 font-bold cursor-pointer") Close
    
    .submission-content(v-else)
      .form-heading(class="flex flex-col")
        .text-display(class="text-neutral-1600 font-bold") Contact Us
        .text-message(class="mb-4") Are you interested in learning more about Aeries? Enter your information in the form and a representative will contact you shortly.
      
      .inputs(class="flex flex-col md:space-y-2")
        .input-row(class="md:flex w-full md:space-x-4")
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="firstName") First Name
            input#firstname(type="text" name="firstName" v-model="fields.firstName" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")    
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="lastName") Last Name
            input#lastName(type="text" name="lastName" v-model="fields.lastName" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")      
        
        .input-row(class="md:flex w-full md:space-x-4")
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="email") Email
            input#email(type="email" name="email" v-model="fields.email" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")    
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="phone") Phone
            input#phone(type="tel" name="phone" v-model="fields.phone" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")      
        
        .input-row(class="md:flex w-full md:space-x-4")
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="district") District
            input#district(type="text" name="district" v-model="fields.district" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")    
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="title") Job Title
            input#title(type="text" name="title" v-model="fields.title" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")      
        
        .input-row(class="md:flex w-full md:space-x-4")
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="city") City
            input#city(type="text" name="city" v-model="fields.city" class="focus:outline-none border p-1 rounded border-neutral-500 w-full")    
          .inputGroup(class="mb-4 md:m-0 flex flex-col w-full")
            label(for="state") State
            input#state(type="text" name="state" v-model="fields.state" class="focus:outline-none border p-1 rounded border-neutral-500 w-full") 


        .input-row(class="flex w-full md:space-x-4")
          .input-group(class="flex flex-col w-full")
            label(for="message") Reason For Contacting
            textarea(class="focus:outline-none border rounded border-neutral-500 p-2" rows="5" name="message" v-model="fields.message")

        .input-row(class="flex w-full")
          .input-group(class="mt-8")
            .btn(@click="submitForm()" class="bg-blue text-white rounded px-4 py-2 cursor-pointer") Submit Contact Form
        span(class="text-xs") By submitting this form you agree our terms. See our 
          g-link(to="/privacy-policy" class="text-blue underline") privacy policy
          |  to learn about how we use your information.

</template>


<script>
const axios = require('axios');

export default {
  name: 'ContactForm',
  data() {
    return {
      submitted: false,
      fields: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        jobTitle: '',
        district: '',
        city: '',
        state: '',
        message: ''
      }
    }
  },
  methods: {
    closeParent() {
      this.$parent.isOpen = false
    },
    closeModal() {
      },
    //-TODO: Make this work with modals instead of confirm() and alert()
    submitForm() {
      let submission = this.fields
      submission.time = Date.now()
      console.log(`submitting: `, this.fields)
      
      if (confirm("Submit your contact request?")) {
        this.sendPostData(this.fields);
        this.submitted = true;
      }

    },
    sendPostData(data) {
      var globalScope = this;
      axios({
        method: 'post',
        url: 'https://aeries.services/contact-submission',
        data: data
      }).then((response) => {
        // alert("Thank you - we received your message and will respond as soon as we can.")
        globalScope.submitted = true;
      }, (error) => {
        alert("Sorry, an error occurred and your message was not successfully sent.");
      });
    }
  }
}
</script>

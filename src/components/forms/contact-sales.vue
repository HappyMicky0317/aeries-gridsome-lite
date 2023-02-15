<template lang="pug">
  validation-observer( rules="required" v-slot="{ handleSubmit }")
    form(
      class="flex flex-col p-2 space-y-4" 
      style="margin: 0 auto;"
      :action="submitUrl"
      method="POST"
      @submit.preventDefault="handleSubmit(onSubmit)"
    )

      //- Hidden inputs
      input(type="hidden" name="oid" value="00DU0000000LgEc")
      input(type="hidden" :name="campaignId" :id="campaignId" maxlength="100" :value="campaignId" )
      input(type="hidden" name="retURL" value="https://www.aeries.com/contact-sales?thank-you=true")
      input(type="hidden" name="lead_source" :value="leadSource" id="lead_source")


      //- Form Elements Start
      input-row
        input-group(v-model="formData.first_name" inputId="first_name" inputName="first_name" label="First Name" required)
        input-group(v-model="formData.last_name" inputId="last_name" inputName="last_name" label="Last Name" :maxlength="80" required)

      input-row
        input-group(v-model="formData.company" inputId="company" inputName="company" label="District" required)
        input-group(v-model="formData.title" inputId="title" inputName="title" label="Title" required)
      
      input-row
        input-group(v-model="formData.phone" inputId="phone" inputName="phone" label="Phone" type="tel" required)
        input-group(v-model="formData.email" inputId="email" inputName="email" label="Email" type="email" :maxlength="80" required)

      input-row
        input-group(v-model="formData.city" inputId="city" inputName="city" label="City" required)
        input-group(v-model="formData.state" inputId="state" inputName="state" label="State/Province" :maxlength="20" required)
      
      input-row
        input-group(v-model="formData.description" class="col-span-2" inputId="00N4U000005kyKZ" inputName="00N4U000005kyKZ" label="In a few sentences tell us what you would like to know about Aeries:" textarea)



      input-row
        //- .checkbox(v-for="cbx, i in checkboxes" :key="i" class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
          input(type="checkbox" :name="cbx.id" :id="cbx.id" value="1" v-model="formData.solutions")
          label(:for="cbx.id") {{ cbx.label }}
        
        //- V-For doesnt work here. we don't know why. 
        //- BUT, the following solution does ¯\_(ツ)_/¯
        //- DO NOT TOUCH

        label.col-span-2.text-xs What Aeries SIS Solutions are you interested in?

        .checkbox-group.col-span-2

          input-row
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0Ki" id="00N0P000007X0Ki" value="1")
              label(for="00N0P000007X0Ki") Aeries SIS
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0Kn" id="00N0P000007X0Kn" value="1")
              label(for="00N0P000007X0Kn") Aeries Cloud Services
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0Ks" id="00N0P000007X0Ks" value="1")
              label(for="00N0P000007X0Ks") Aeries Online Enrollment
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0Kx" id="00N0P000007X0Kx" value="1")
              label(for="00N0P000007X0Kx") Aeries Analytics
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0L7" id="00N0P000007X0L7" value="1")
              label(for="00N0P000007X0L7") Aeries Communications
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0LC" id="00N0P000007X0LC" value="1")
              label(for="00N0P000007X0LC") Aeries Financials
            .checkbox(class="flex space-x-1 items-center cursor-pointer mr-4 mb-2")
              input(type="checkbox" name="00N0P000007X0LH" id="00N0P000007X0LH" value="1")
              label(for="00N0P000007X0LH") Aeries EM2
                
      
      input-row
        label.col-span-2.text-xs How did you hear about us?
        select(
          class="col-span-2 border border-neutral-500 rounded-sm px-4 py-2"
          id="00N4U000006qlRk" 
          name="00N4U000006qlRk" 
          title="Marketing Lead Source"
        )
          option(value="") --None--
          option(value="Client Referral") Client Referral
          option(value="Internet Search") Internet Search
          option(value="Conference/Convention") Conference/Convention
          option(value="Social Media") Social Media
          option(value="Digital Advertisement") Digital Advertisement
          option(value="Printed Advertisement") Printed Advertisement
          option(value="Word of Mouth") Word of Mouth
          option(value="Other") Other
        
      .alert-error(class="bg-blue-600 p-3 font-bold text-white" v-show="!emailMatchesDistrictCriteria")
        p(@click="detectParentsStudentsEmail(formData.email)") Hmm, that looks like it might be a personal email address. As a reminder, our sales team can't provide support — please contact your district for assistance with Aeries SIS.
        p(class="mt-4")
          a(@click="confirmSelfNotParentOrStudent()" class="text-white font-bold text-minimum-text underline cursor-pointer opacity-75") I don't want help with Aeries, I have a sales inquiry

      p(class="text-blue-600 font-bold" v-show="selfConfirmedNotParentOrStudent") Sorry about that. Our sales team is happy to follow up with you on any sales-related inquiries.


      input-row
        input(id="submit" class="bg-blue-600 text-white px-4 py-2 rounded mt-4 text-lg cursor-pointer" type="submit" value="Send Message" v-show="emailMatchesDistrictCriteria")

  
</template>


<script>
  import InputRow from './inputRow.vue';
  import InputGroup from './inputGroup.vue';
  import { mapActions, mapMutations } from 'vuex';
  import { ValidationObserver } from 'vee-validate';

  export default {
    name: "ContactSalesForm",
    props: {
      campaignId: {
        type: String,
        default: "00N4U000008QBLa"
      },
      leadSource: {
        type: String,
        default: "Aeries.com"
      }
    },
    data: () => ({
      submitUrl: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
      checkboxes: [
        { id: '00N0P000007X0Ki', value: 1, label: 'Aeries SIS' },
        { id: '00N0P000007X0Kn', value: 1, label: 'Aeries Cloud Services' },
        { id: '00N0P000007X0Ks', value: 1, label: 'Aeries Online Enrollment' },
        { id: '00N0P000007X0Kx', value: 1, label: 'Aeries Analytics' },
        { id: '00N0P000007X0L7', value: 1, label: 'Aeries Communications' },
        { id: '00N0P000007X0LC', value: 1, label: 'Aeries Financials' },
        { id: '00N0P000007X0LH', value: 1, label: 'Aeries EM2' }
      ],
      showInvalidUserTypeError: false,
      selfConfirmedNotParentOrStudent: false,
      errors: [],
      formData: {
        first_name: '',
        last_name: '',
        company: '',
        title: '',
        phone: '',
        email: '',
        city: '',
        state: '',
        description: '',
        solutions: []
      },
    }),
    computed: {
      emailMatchesDistrictCriteria() {
      let email = this.formData.email;
      // distrust by default and look for positive signs
      let test = false

      //To avoid the error showing when there's nothing in the box, we have to let a blank email pass the test
      if (!email.length) {
        test = true;
      }

      if (this.selfConfirmedNotParentOrStudent == true) {
        test = true;
      }

      if (email.split('@')[1]) {
        // get domain string from the email
        const domain = email.split('@')[1]
        
        if (
          domain.includes('.net') ||
          domain.includes('.org') ||
          domain.includes('.edu') ||
          domain.includes('k12') ||
          domain.includes('.k12.ca.us') ||
          domain.includes('sd') ||
          domain.includes('coe') ||
          domain.includes('school') ||
          domain.includes('academy') ||
          domain.includes('charter') ||
          domain.includes('hs') ||
          domain.includes('high') ||
          domain.includes('unified') ||
          domain.includes('union') ||
          domain.includes('usd')
        ) {
          // If the email has any of the strings above,
          // trust that it's a valid LEA email
          test = true
        }
      }
      return test
      },
    },
    methods: {
      ...mapActions({
        submitToSalesForce: "submitToSalesForce"
      }),
      ...mapMutations({
        setSubmitted: 'setContactSalesSubmitted',
        setComplete:  'setContactSalesComplete',
        setFormData:  'setContactSalesFormData',
      }),
      confirmSelfNotParentOrStudent() {
        this.selfConfirmedNotParentOrStudent = true;
        this.showInvalidUserTypeError = false;
      },
      onSubmit() {
        // reset the errors to empty array 
        this.errors = [];

        // 
        if (!this.formData.first_name)  { this.errors.push('first_name') }
        if (!this.formData.last_name)   { this.errors.push('last_name') }
        if (!this.formData.company)     { this.errors.push('company') }
        if (!this.formData.title)       { this.errors.push('title') }
        if (!this.formData.phone)       { this.errors.push('phone') }
        if (!this.formData.email)       { this.errors.push('email') }
        if (!this.formData.city)        { this.errors.push('city') }
        if (!this.formData.state)       { this.errors.push('state') }

        if (!this.errors.length) { return }

      }
    },
    mounted() {},
    components: { InputRow, InputGroup, ValidationObserver}
  }
</script>

<template lang="pug">
//- Passing secondary-color=true to the component sets the background
//- color as white. Normally, it uses bg-neutral-300, but if the element
//- before or after this one also uses that bg color, pass secondary-color=true.
div(v-bind:class="{ 'bg-neutral-300': !secondaryColor, 'border-t border-b' : !noBorder}" class="border-neutral-500")
  .container(class="p-5 md:p-20")
    
    h1(class="text-title md:text-display font-aeries font-bold text-neutral-1700")
      | {{displayTitle}}
    
    //- If no description is provided by the component, hide the element.
    p(class="w-full mt-2 text-neutral-1300" v-if="description")
      | {{description}}
    
    form.container(class='max-w-6xl mx-auto pt-6 pb-8 mb-4')
      div(class='flex flex-row pb-4 sm:justify-center lg:justify-start')
          DropdownEmailSubscriptionCategories(:selectedCategories="selectedCategories" @selectCategory="selectedSubscriptionCategories = $event")
      div(class='flex flex-col md:flex-row sm:items-center')
        input#email(
          class='sm:w-3/5 md:w-3/4 mt-5 md:mt-0 text-subhead \
          font-semi-bold shadow appearance-none border rounded p-3 mr-2 text-neutral-1600 \
          leading-tight focus:outline-none focus:ring'
          v-model="userEmail"
          type='text'
          placeholder='E.g. example@email.com'
        )
        //- Here we default to showing "Subscribe" as the call-to-action button text if no custom text is provided
        .button(
          v-if="buttonText" 
          class='sm:w-2/5 md:w-1/4 mt-5 md:mt-0 md:ml-2 \
          bg-blue-500 text-white text-subhead font-semi-bold p-3 rounded \
          hover:bg-blue-700 focus:outline-none focus:ring text-center'
          @click="subscribe()"
        )
          | {{buttonText}}
        .button( v-else 
          class='sm:w-2/5 md:w-1/4 mt-5 md:mt-0 md:ml-2 \
          hover:bg-blue-700 focus:outline-none focus:ring \
          bg-blue-500 text-white text-subhead font-semi-bold \
          p-3 rounded text-center'
          @click="subscribe()"
        )
          | Subscribe
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userEmail : "",
      selectedSubscriptionCategories: this.selectedCategories
    }
  },
  mounted() {
    if (this.electedCategories) {
      this.selectedSubscriptionCategories = this.selectedCategories;
    }
  },
  methods: {
    subscribe() {
      var userEmailIsValid = this.validateEmail(this.userEmail);
      if (userEmailIsValid) {
        //Subscribe
        this.sendSubscription()
      } else {
        alert("That doesn't look like a valid email address.")
      }
    },
    sendSubscription() {
      axios({
        method: 'post',
        url: 'https://aeries.services/homepage-email-subscriptions',
        data: {
          email: this.userEmail,
          subscriptions: this.selectedSubscriptionCategories 
        }
      }).then((response) => {
        alert("You've been added! Thanks for joining the Aeries mailing list.")
      }, (error) => {
        alert("Sorry, something went wrong.");
      });
    },
    validateEmail(emailAddress) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
        {
          return (true)
        }
          return (false)
      }
  },
  props: ['displayTitle', 'description', 'buttonText', 'secondaryColor', 'noBorder', 'selectedCategories']
}
</script>

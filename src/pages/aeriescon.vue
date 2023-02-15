<style>
.subnav-container > a[href="/aeriescon"] .icon-container {
    display: none;
}
</style>

<template lang='pug'>
  Layout(navStyle="dark" sub-nav :sub-nav-config="subNavConfig")
    //- span(class="text-neutral-300" slot="cta-container") Early-bird registration coming soon
    
    
    //- #### BUTTON FOR SUBNAV CONFIG ####
    a.cta-btn(
      slot="cta-container" 
      :href="subNavConfig.registerheaderlink"
      class="bg-red-600 py-1 px-2 md:px-6 text-neutral-300 rounded my-2 font-bold") Register Now

    aeriescon-hero-s23(:event-page-url="eventPageUrl")


    section
      .container.mb-10.max-w-960
          h3.font-nunito.text-neutral-1900.mt-24.mb-4.uppercase 
            | What to expect at AeriesCon Spring 2023
          h2(class="text-header md:text-x-large font-aeries font-bold text-neutral-1800 mB-24")
            | We are so excited to be back onsite! Over three days, you'll learn lots of useful information and practical skills in keynotes, sessions, and in-person networking events. Connect with Aeries team members, industry experts, and users from districts across CA and TX.
          .p.mt-12.text-subhead AeriesCon Spring 2023 will include hit sessions from AeriesCon Fall 2022, as well as brand new sessions, giving you even more access to valuable insight. Sessions are built with our users' needs in mind, so whether you're a counselor, registrar, or data technician, you'll leave feeling inspired and educated with all things Aeries.

    section#quotes(class="py-10 bg-[#334286]")
      .container(class="mb-4 max-w-960")
        h2(class="text-center font-aeries font-extra-bold uppercase text-neutral-100 text-2xl") What past attendees have to say
      .container(class="max-w-960 grid md:grid-cols-2 gap-8")
        span(v-for="quote, i in quotes" class="text-center italic text-xl text-neutral-100") "{{ quote }}"
        

    section(class="aeriescon-dot-hero-bg")
      //- #### Register SECTION ####
      section(class="bg-neutral-100 pb-12" id="registration-options")
        .container(class="px-4 md:px-0 py-6 md:py-6 mt-12")
          div(class="grid md:grid-cols-2 gap-8")
            .section-title(class="flex flex-col") 
              h2(class="text-header font-aeries font-bold leading-tight tracking-tight text-neutral-1900") 
                | Choose between two different packages and find the option that fits your needs best.
              p(class="text-neutral-1400 mt-4") Want to increase your Aeries knowledge even further? 3-day attendees can choose between the Advanced Database Administrator (DBA) or Advanced CALPADS day being offered Wednesday, March 8. These sessions will go more in-depth and beyond the scope of the respective sessions offered on Network Administration and State Reporting during the first two days of the conference.
              
            div(class="w-full mt-12")
              .options(class="grid gap-6")
                .options-header(class="col-span-2")
                  //- h2(class="text-3xl font-bold font-aeries text-neutral-1900")
                    | Registration:
                ac-registration-package(
                  v-for="option, i in packages.spring"
                  :key="i"
                  :title="option.title" 
                  :subtitle="option.subtitle"
                  :ebPrice="option.ebPrice"
                  :eyebrow="option.eyebrow"
                  :price="option.price"
                  :link="option.link" 
                  :link-text="option.linkText"
                  :disclaimer="option.disclaimer"
                )
      

      //- keynote-section(:speakers='speakers')



      section.call-for-presenters
        .container(class="px-4 md:px-0 py-12 md:py-12 my-24 flex flex-col md:flex-row-reverse items-center")
          div(class="flex flex-col px-4 flex-1")
            img(
              class="w-full block rounded-md"
              src="https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/tosas.png" 
              alt="aeriescon virtual conference on laptop blurred in the background"
            )
            .text-center.text-xs.font-neutral-800.mt-1 Teresa Magpayo Castro (@CastroCorner) and Ricardo Recinos(@techTOSAS), at AeriesCon.
          div(class="flex-1 flex flex-col md:max-w-3/4 px-4")
            h2(class="text-header md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900 mt-12 md:mt-2") Join the illustrious ranks of AeriesCon presenters
            p(class="text-neutral-1300 mt-8") Do you have an innovative approach to using Aeries SIS at your district? We're looking for special guest presenters that want want share the methods to their madness with the AeriesCon community of K-12 districts from all over. 
            p(class="text-neutral-1300 mt-4") If you've got a message you'd like to present at AeriesCon, please contact <a class="text-blue-600 underline" href="mailto:leslies@aeries.com">leslies@aeries.com</a> to learn more about what's involved in proposing an AeriesCon session.
     

      section.hotel
        .container(class="px-4 md:px-0 py-12 md:py-12 my-24 flex flex-col md:flex-row-reverse items-center")
          div(class="flex-1 flex flex-col md:max-w-3/4 px-4")
            //- span.eyebrow-copy(class="font-bold text-sm mb-2 text-blue") Planning Ahead for Spring 2023?
            h2(class="text-header md:text-display font-aeries font-bold leading-tight tracking-tight text-neutral-1900") Stay at the DoubleTree by Hilton Hotel Ontario Airport
            p(class="text-neutral-1300 mt-8") 
              | A limited block of rooms with conference pricing of $169+tax has been reserved at Hilton DoubleTree Ontario.
            p(class="text-neutral-1300 mt-8") 
              | <b>About  DoubleTree by Hilton Hotel Ontario Airport: </b>Find us off I-10, adjacent to the convention center and within five minutes of Ontario International Airport via free shuttle. Our shuttle also covers Toyota Arena and Ontario Mills — one of the largest shopping malls in the state. Expect a warm DoubleTree cookie on arrival, and enjoy our heated outdoor pool and 24-hour fitness center.
             
            div.text-sm(class="text-neutral-1300 mt-8 italic flex flex-col") 
              span Cutoff for booking is <b>2/10/2023</b> or until the block is filled.
              span There is a 72hr cancellation policy for reservations.
              span And an overnight parking charge of $15 +tax per vehicle.
            div(class="mt-8 flex flex-col md:flex-row mb-8 md:mb-0 items-center space-y-4 md:space-y-0 md:space-x-4")
              g-link(
                to="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=ONTO-DT&groupCode=CDTEGS&arrivaldate=2023-03-05&departuredate=2023-03-07&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" 
                class="text-white font-extra-bold text-lg px-4 py-3 bg-red-700 rounded "
              ) Book your stay
              span(class="font-bold text-neutral-1600") Use Group Code: EGS
          div(class="flex px-4 flex-1")
            img(
              class="w-full block rounded-md"
              src="@/assets/images/aeriescon/ac-f-2022/Hilton-Doubletree-Ontario.png" 
              alt="Aerial image of the Hilton Doubletree Hotel's Pool set in front of a mountain backdrop"
            )
    
    section.plan-ahead-banner(class="bg-neutral-500 py-12")
      .container.max-w-960.px-4(class="max-w-960 px-4 text-center flex flex-col justify-center items-center")
        img(class="w-28" src="../assets/images/aeriescon/aeriescon-swirl.svg")
        h3(class="mt-4 text-2xl font-bold font-aeries text-neutral-1500") Do you like to plan ahead? So do we! Save the date for upcoming AeriesCon events...
        .flex(class="flex-col mt-4")
          span.font-bold.text-neutral-1400.text-xl Fall 2023 - November 6-9 (Virtual)  
          //- span.font-bold.text-neutral-1400.text-xl Spring 2024 - March 4-6 (Sacramento, CA)  
    
    
    section#aeriesconSubscribe.cta-subscribe
      CTASubscribe#subscribe(
        :selectedCategories="'aeriescon'" 
        displayTitle="Stay up to date with AeriesCon"
        description="Sign up to stay in the loop!"
        secondaryColor="True"
        class="text-center"
        )

    
</template>

<script>
  import PulseDot from '../components/pulse-dot.vue'
  import AeriesconHeroS23 from '../components/hero/aeriescon-hero-s23'
  import AcRegistrationTable from '../components/ac-registration-table'
  import AcSessionList from '../components/ac-session-list'
  import AcRegistrationPackage from '../components/ac-registration-package'
  import KeynoteSection from '../components/keynote-speakers'
  import axios from 'axios'

  export default {
    name: 'AeriesCon',
    components: { PulseDot, AeriesconHeroS23, AcRegistrationTable, AcSessionList, AcRegistrationPackage, KeynoteSection },
    data: () => ({
      subNavConfig: {},
      eventPageUrl: '/events/1234',
      events: [
        { dates: 'March 6-8, 2023', location: 'Ontario Convention Center', title: 'Spring 2023', type: 'Onsite' },
      ],
      speakers: [
        {
          date: 'Monday, November 7th',
          description: '',
          name: 'Marco Torres',
          photo: 'https://aeries-com.s3.us-east-2.amazonaws.com/aeriescon-assets/speaker-photos/Default.jpg',
          sessionType: 'Openning Session',
          topic: 'AeriesCon Opening Session featuring Marco Torres',
        }
      ],
      quotes: [
        "I am never disappointed and after 9 years of attending, I still find I learn something new every time!",
        "I can honestly say that every time I attend AeriesCon I come out learning something new.",
      ],
      packages: {
        spring: [
          { 
            title: "2 Day", 
            eyebrow: "Onsite", 
            subtitle: 'March 6-7',
            price: 899, 
            link: "/events/807/", 
            linkText: "Register Now", 
          },
          { 
            title: "3-Day ", 
            eyebrow: "Onsite + DBA/CALPADS Day", 
            subtitle: 'March 6-8',
            price: 1049, 
            link: "/events/807", 
            linkText: "Register Now", 
          },
        ],
      }
    }),
    metaInfo() {
      return {
        title: 'AeriesCon'
      }
    },
    mounted() {
      this.subNavConfig = this.$store.state.aeriescon.subNavConfig
    }
  }
</script>


<style scoped>
  @media (min-width: 769px) {
    .registration-option:nth-of-type(2n) {
      @apply -mt-5;
    }
  }

  .aeriescon-dot-hero-bg {
    background-image: url("../assets/images/aeriescon-dots-grid-bg.svg");
    background-repeat: no-repeat;
    background-position: -0% 50%;
  }
  @media (max-width: 1300px) {
  .aeriescon-dot-hero-bg {
    background-image: none;
    background-repeat: no-repeat;
    background-position: -0% 50%;
  } 
  }

      .contentLayout2 p {
        margin-bottom: 24px;
      }
      .contentLayout2 h1,
      .contentLayout2 h2,
      .contentLayout2 h3,
      .contentLayout2 h4,
      .contentLayout2 h5,
      .contentLayout2 h6 {
        margin-top: 24px;
        margin-bottom: 12px;
        font-size: 24px;
        font-family: "Aeries Sans";
        color: black;
      }

      .contentLayout2 strong {
        font-weight: bold;
      }
</style>

<style lang="stylus" scoped>
  .opening .dept
    &:after
      margin .1rem 0 .5rem 0
      content ''
      width 3rem
      height 2px
      background-color theme('colors.neutral.600')
</style>

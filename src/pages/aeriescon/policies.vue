<template lang="pug">
Layout(navStyle="dark", sub-nav, :sub-nav-config="subNavConfig")
  a.cta-btn.bg-red-600.py-1.px-2.text-neutral-300.rounded.my-2.font-bold(
    slot="cta-container",
    
    :href="subNavConfig.registerheaderlink",
    target="_blank",
    class="md:px-6"
  ) REGISTER NOW

  //- // section#aeriesconHero.hero-section(class="mt-0")
    hero(cover-image="ac-f-2021/Aeriescon-BACK-TO-THE-FUTURE__BG.jpg" short single-column bg-position="bottom")
      .hero-content(slot="hero-content" class="flex flex-col items-center text-white pt-8 my-4 md:my-12 ")

  section.container.text-neutral-1300.mt-4.mb-24
    .section-title.w-full.text-center.mt-8.-mb-16.text-neutral-1800(
      class="md:mt-16 md:-mb-24"
    )
      h1.font-aeries.text-header.font-bold(class="md:text-xx-large") AeriesCon Policies
    
  section.container.text-neutral-1300.mt-24.mb-24
    div(class="mx-auto w-100 max-w-960")
      p(Class="mt-4") AeriesCon is an opportunity for clients to enhance their existing foundation of knowledge and share their experiences to better meet the needs of their schools. Topics are presented using a lecture format with a single computer and a projection unit. The conference workshops are NOT designed to replace training for new clients and hands-on environment is limited to an open forum question and answer area.
      p(Class="mt-4") The third day of the conference offers attendees the opportunity to attend advanced sessions dedicated to a more focused topic. Attendees can choose between the Advanced Database Administrator (DBA) or Advanced CALPADS Day being offered Wednesday, March 8, 2023. These sessions will go be more in-depth and beyond the scope of the respective sessions offered on Network Administration and State Reporting during the first two days of the conference.
      p(Class="mt-4") Cancellations - to avoid financial responsibility for the event, registrations must be deleted from my.aeries.com by February 6, 2023. After February 6, 2023, an email outlining extenuating circumstances must be sent to conniec@aeries.com; otherwise, an invoice will be issued for the full registration amount.
      //- p(class="mt-4") This Fall we are excited to offer a fully virtual AeriesCon event with all sessions and activities hosted online from Monday, November 7 - Thursday, November 10, 2022.
      //- p(class="mt-4") Registering for this conference gives you access to live sessions on all 4 days, including new session topics, 4 keynote speakers, updated content in some of our most popular sessions, and a fun evening social event allowing you to connect with Aeries users and staff. Plus, you get access to the recordings of all keynote and workshop sessions through January 31, 2023.
      //- p(class="italic mt-4") Early Bird Registration pricing available August 1, 2022 through September 30, 2022
      //- p(class="mt-4") 
      //-   span(class="font-bold text-neutral-1600") Proof of payment or direct payment must be received by October 14 to confirm Early Bird pricing. 
      //-   |If proof of payment for an Early Bird registration is received after October 14, the registration will be invoiced at the regular event pricing.
      //- p(class="mt-4 italic") Regular Registration pricing available October 1, 2022 through November 10, 2022
      //- p(class="mt-4 italic") Conference course requests will not be collected. The sessions list will be found by mid-August at https://www.aeries.com/aeriescon/ with the final schedule distributed in the days leading up to the event.
      //- p(class="mt-4 italic") Note: while registering, it will only show 1 day to register, but you will be given access to all 4 days of Virtual AeriesCon.
      //- p(class="mt-4") 
      //-   span(class="font-bold text-neutral-1600") Cancellations 
      //-   | - Cancellations must be done by deleting the registration through your my.aeries.com account. Cancellations must be completed by October 28, 2022; otherwise an invoice for the event will be issued.
</template>

<script>

export default {
  name: "ViewAeriesConSessions",
  data: () => ({
    subNavConfig: {},
  }),
  computed: {},
  mounted() {
    this.subNavConfig = this.$store.state.aeriescon.subNavConfig;
  },
};
</script>

<style lang="stylus"></style>

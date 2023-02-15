<template lang="pug">
Layout(navStyle="dark", sub-nav, :sub-nav-config="subNavConfig")
  a.cta-btn.bg-red-600.py-1.px-2.text-neutral-300.rounded.my-2.font-bold(
    slot="cta-container",
    href="https://my.aeries.com/Events/Home/SelectEvent/674",
    target="_blank",
    class="md:px-6"
  ) REGISTER NOW

  section#sessionsList(class="container text-neutral-1300 mt-4 mb-24 flex flex-col")
    .section-title.w-full.text-center.mt-8.-mb-16.text-neutral-1800(
      class="md:mt-16 md:-mb-24"
    )
      h1(class="font-aeries text-header font-bold md:text-xx-large") 
        | AeriesCon Keynote Speakers

  .keynote-speaker-container(class="px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 mt-32")

    .speaker(v-for="speaker in speakers", :key="speaker.name_key")
      //- speaker w link
      .speaker-inner(v-if="speaker.link" class="flex items-center flex-col text-center mb-8")
        g-link(:to="speaker.link")
          g-image(:src="photoUrl(speaker.name_key)" class="w-48 rounded-full border-4 border-neutral-1800 bg-neutral-1800 shadow-double-drop")
        .speaker-info(class="mt-4")
          .date {{ speaker.date }}
          .title(v-if="speaker.keynote_title" class="italic") 
            | "{{ speaker.keynote_title }}"
          g-link(:to="speaker.link")
            h2.speaker-name(class="text-3xl font-extra-bold font-aeries text-blue-700 uppercase") 
              | {{ speaker.name }}
          .speaker-title(class="font-bold text-neutral-1600")
            | {{ speaker.title }}
          .speaker-bio(v-if="speaker.bio" v-html="speaker.bio" class="mt-4 text-justify")

      //- speaker no link
      .speaker-inner(v-else class="flex items-center flex-col text-center mb-8")      
        g-image(:src="photoUrl(speaker.name_key)" class="w-48 rounded-full border-4 border-neutral-1800 bg-neutral-1800 shadow-double-drop")
        .speaker-info(class="mt-4")
          .date {{ speaker.date }}
          .title(v-if="speaker.keynote_title" class="italic") 
            | "{{ speaker.keynote_title }}"
          h2.speaker-name(class="text-3xl font-extra-bold font-aeries text-blue-700 uppercase") 
            | {{ speaker.name }}
          .speaker-title(class="font-bold text-neutral-1600")
            | {{ speaker.title }}
          .speaker-bio(v-if="speaker.bio" v-html="speaker.bio" class="mt-4")

</template>

<script>
export default {
  name: "ViewAeriesConKeynoteSpeakers",
  methods: {
    photoUrl(key) {
      return `https://aeries-cdn.s3.us-west-1.amazonaws.com/images/aeriescon/keynote_speakers/${key}_keynote.jpg`;
    },
  },
  data: () => ({
    subNavConfig: {},
    speakers: [
      {
        name: "Brent Lloyd",
        name_key: "blloyd",
        title: "President, Aeries",
        bio: null,
        link: 'https://aeries.com',
        keynote_title: 'Leveraging the Future of Technology to Re-Build Aeries',
        date: 'Monday, March 7th',
      },
      {
        name: "Cam Iliff",
        name_key: "cilif",
        title: "VP of Product, Aeries",
        bio: null,
        link: 'https://aeries.com',
        keynote_title: 'Leveraging the Future of Technology to Re-Build Aeries',
        date: 'Monday, March 7th',
      },
      {
        name: "Jessica Cabeen",
        name_key: "jcabeen",
        title: "Principal & Speaker",
        bio: 'While Jessica Cabeen is currently a principal, she was previously an assistant principal, special education supervisor, special education teacher, and music therapist. In 2017 she was named as the Minnesota National Distinguished Principal. She holds a Bachelor Degree in Music Therapy from the University of Wisconsin-Eau Claire, a Masters in Special Education from the University of Saint Thomas, and her administrative licenses from Hamline University. She is the author of 4 books: "Lead with Grace", "Unconventional Leadership", Balance Like a Pirate", and "Hacking Early Learning". Her prior speaking engagements have focused on topics such as family engagement, early learning, and unconventional leadership.',
        link: "https://www.jessicacabeen.com",
        keynote_title: 'Learning to Thrive, Not Just Survive',
        date: 'Tuesday, March 8th',
      },
      {
        name: "Dr. Jamal Splane",
        name_key: "jsplane",
        title:
          "Director of Climate, Culture, Curriculum, and Instruction – Los Gatos-Saratoga USD",
        bio: 'Dr. Splane holds his degree in Clinical and Counseling Psychology from San Jose State, a Masters of Arts in Education from UC Berkeley, and his Doctorate degree in Educational Psychology from UC Berkeley. He has previously held roles as a school psychologist, Director of Pupil Services and Special Education, Assistant Principal, and is now the Director of Climate, Culture, Curriculum, and Instruction. His staff development experiences focus on growth-mindset, special education, culture and climate, mental health, student discipline, and staff wellness and self-care.',
        link: "https://www.scholarsystem.org/speaker_post/dr-jamal-splane/",
        keynote_title: 'STIRring it up to get it back: Reimagining Safety, Trust, Inter-dependence, &  Relationships in our schools',
        date: 'Wednesday, March 9th',
      },
      {
        name: "Devin Siebold",
        name_key: "dsiebold",
        title: "Teacher & Comedian",
        bio: `<p class="mt-4">If you attended AeriesCon Fall 2021 onsite, Devin probably looks familiar. He was a huge hit when he spoke about striking a balance with comedy and education to help build joy in and out of the classroom.</p> 
              <p class="mt-4">Devin wears many hats as both a teacher and a comedian.  Perhaps you've seen his videos online; he's known for his original humor that appeals to students, teachers, and parents alike. (Did we mention he's had more than 200 million views on his videos alone?)</p>
              <p class="mt-4">His accolades include being named 2015 iHeartMedia Monsters in the Morning Comedian of the Year, a winner of the Boston World Series of Comedy, a semi-finalist in Florida's Funniest Comedian, and many more.</p>`,
        link: "https://www.devincomedy.com",
        keynote_title: '',
        date: 'Thursday, March 10th',
      },
    ],
  }),
  mounted() {
    this.subNavConfig = this.$store.state.aeriescon.subNavConfig;
  },
};
</script>

<style lang="stylus"></style>

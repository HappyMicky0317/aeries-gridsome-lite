<!-- TODO: This template employs some less-than-ideal hacky stuff  to deal with the existing
event data and should be replaced with a much more streamlined version when we 
have control of the API models. -->

<template lang="pug">
Layout
  section.mt-5
    .container.px-5.mt-10
      g-link.inline-flex.cursor-pointer(to="/events")
        .flex-col
          Icon.fill-current.text-blue-500(
            name="cheveron-left",
            width="28",
            height="28"
          )
        .flex-col
          p.text-blue-500.font-bold.text-subhead
            | Back to All Events
    .container.px-5.mt-10
      .text-center.text-neutral-700
        h4.font-semi-bold.font-aeries.mb-2(
          v-if="thisEvent",
          class="md:text-subhead"
          :class="{'text-blue-600' : eventType == 'Multi-Day Webinar Series','text-orange-500' : eventType == 'Conference'}") {{ eventType }}

        h1.text-title.text-neutral-1600.font-bold.font-aeries.mb-2(
          v-if="thisEvent",
          class="md:text-display"
        ) {{ thisEvent.Name }}

    hr.border-neutral-400.mt-12

    div(class="md:container").px-5.my-20(style="min-height: 600px")
      .flex.flex-col(class="md:flex-row")
        div(class="md:w-1/2")
          h2.text-title.text-neutral-2000.font-aeries.font-semi-bold Description

          .text-neutral-2000.text-body.flex-grow.event-description.pt-5.pr-10(
            v-if="thisEvent",
            v-html="thisEvent.Blurb"
          )

        div(class="md:w-1/2")
          h3(class="text-title text-neutral-2000 font-aeries font-semi-bold") 
            hr(class="md:hidden border-neutral-400 my-12")
            span(v-if="eventType == 'Conference'") 
              | Conference Start Date
            span(v-else-if="isWebinarSeriesWithParts")
              | Register
            span(v-else) 
              | Upcoming Events

          //- h3(v-selse)

          .w-full.pt-5
            div(
              v-if="isWebinarSeriesWithParts"
            )
              div.py-2.self-center.flex-col(class="md:flex-row")
                .align-center.contents-center.self-center
                  p.text-minimum(style="font-size: 14px")
                    | The webinar sessions in this series occur on the following dates:
                  p.flex.text-neutral-1600.text-subhead.font-semi-bold.mb-12.mt-2(
                    v-if="thisEvent.RegistrationDeadline"
                  )
                    | {{ thisEvent.SubTitle }}
                  p.flex.text-neutral-1600.text-body(
                    v-else="thisEvent.RegistrationDeadline"
                  )
                    | Registration closed {{ cookTimestamp(thisEvent.RegistrationDeadline) }}

                div(class="md:flex-col")
                  a(
                    v-if="true",
                    target="_blank",
                    :href="'https://my.aeries.com/Events/Home/SelectEvent/' + thisEvent.EventId",
                    class='mr-3 bg-blue-500 text-white font-bold py-3 px-4 \
                                          rounded cursor-pointer hover:bg-blue-400 \
                                          focus:outline-none focus:ring w-full text-center',
                    type="button"
                  )
                    |
                    | Register for Multi-Day Series
                  a.mr-3.bg-blue-500.text-white.font-bold.py-2.px-4.rounded.opacity-50.cursor-not-allowed.w-full.text-center(
                    v-else,
                    disabled,
                    type="button"
                  )
                    |
                    | Closed

            div(v-else)
              div(
                v-if="thisEvent && thisEvent.SelectedDays",
                v-for="session in thisEventGroup.events"
              )
                .flex.justify-between.py-2.self-center.flex-col(class="md:flex-row")
                  .align-center.contents-center.self-center
                    p.flex.text-subhead.text-neutral-2000.font-semi-bold
                      | {{ session.Subtitle }}
                    p.flex.text-neutral-1600.text-subhead(
                      v-if="session.RegistrationDeadline"
                    )
                      | #[span {{ cookTimestamp(session.FirstDay) }} ] #[span(class="pl-1" v-if="$context.event.EventType !== 'Conference'") session]
                    p.flex.text-neutral-1600.text-body(
                      v-else="session.RegistrationDeadline"
                    )
                      | Registration closed {{ cookTimestamp(session.RegistrationDeadline) }}

                  .flex.flex-row(class="md:flex-col")
                    a(
                      v-if="true",
                      target="_blank",
                      :href="'https://my.aeries.com/Events/Home/SelectEvent/' + session.EventId",
                      class='mr-3 bg-blue-500 text-white font-bold py-2 px-4 \
                                            rounded cursor-pointer hover:bg-blue-400 \
                                            focus:outline-none focus:ring w-full text-center',
                      type="button"
                    )
                      |
                      | Register
                    a.mr-3.bg-blue-500.text-white.font-bold.py-2.px-4.rounded.opacity-50.cursor-not-allowed.w-full.text-center(
                      v-else,
                      disabled,
                      type="button"
                    )
                      |
                      | Closed
                hr.border-neutral-500.my-4
</template>

<page-query>
query {
  allEventAdminEvents {
    edges {
      node {
        EventId
        Name
        SubTitle
        FirstDay
        Blurb
        RegistrationDeadline
      	SelectedDays {
        	EventDayId
          AeriesEvent {
            EventId
            ClosedForEnrollment
            Hide
            Deleted
            Capacity
            RegistrationDeadline
            DeadlineHasPast
          }
          Date
          NumCourses
          NumCourses
          Delete
        }
        EventType
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$context.event.Name + " Aeries SIS Workshops & Events",
    };
  },
  data() {
    return {
      eventAdminEvents: [],
      eventAdminEventsCooked: [],
    };
  },
  async mounted() {
    this.eventAdminEvents = this.$page.allEventAdminEvents.edges;
  },
  methods: {
    cookTimestamp(timestamp) {
      return new Date(timestamp).toLocaleDateString();
    },
    isSessionRegistrationOpen(session) {
      var registrationDeadline = new Date(
        this.cookTimestamp(session.RegistrationDeadline)
      ).getTime();
      var now = new Date().getTime();

      if (
        session.Subtitle.toLowerCase().indexOf("cancelled") !== -1 ||
        registrationDeadline < now
      ) {
        return false;
      } else {
        return true;
      }
    },
    getEventCategoryFromTitle(title) {
      if (title.toLowerCase().indexOf("webinar") > -1) {
        return "Webinar";
        //} else if (title.toLowerCase().indexOf('workshop') > -1) {
      } else {
        return "Workshop";
      }
    },
  },
  computed: {
    isWebinarSeriesWithParts() { 
      // We check whether this is a multi-part webinar series that has the same name as another webinar series, and make sure not to group the events if so.
      // Returns true if the event context Name contains "Webinar Series Parts"
      // A webinar is a multi-day webinar if event.SubTitle contains "-" or "&" to indicate multiple days in the string, e.g. "March 16-18, 2022" or "March 13, 17 & 18, 2022"
      return (this.$context.event.SubTitle.includes("-") && !this.$context.event.SubTitle.includes("M -")) || this.$context.event.SubTitle.includes("&")
    },
     isWebinar() {
      /** 
       * Here we're looking at a few pieces of data to extrapolate whether this is a
       * webinar or not.
       * Firstly, we're looking at the title & the blurb. If these two pieces have the word
       * "webinar" in them, we're saying Yes, it's a webinar.
       * Secondly, we're looking to see if this is a conference. If it IS a conference then
       * we're saying that it is NOT a webinar. 
      */
      const blurbHasWebinar = this.$context.event.Blurb.toLowerCase().includes('webinar')
      const titleHasWebinar = this.$context.event.Name.toLowerCase().includes('webinar')
      const blurbTitleWebinar = blurbHasWebinar || titleHasWebinar
      const isConference = this.$context.event.EventType == 'Conference'

      let iwb = false

      if (blurbTitleWebinar && isConference) {
        iwb = false
      } else if (blurbTitleWebinar) {
        iwb = true
      }

      return iwb

    },
    eventType() {
      if (this.$context.event.EventType == 'Conference') {
        return 'Conference'
      } else if (this.isWebinarSeriesWithParts) {
        return 'Multi-Day Webinar Series'
      } else if (this.isWebinar) {
        return 'Webinar'
      } else {
        return this.$context.event.EventType
      }
    },
    eventAdminEventsSortedByUpcoming() {
      var events = this.eventAdminEvents.slice();
      for (var i = 0; i < events.length; i++) {
        var e = events[i];
        e.node.firstDate = new Date(e.node.FirstDay).getTime();
      }

      return events.sort((a, b) => (a.firstDate > b.firstDate ? 1 : -1));
    },
    groupSimilarEvents() {
      var events = this.eventAdminEventsSortedByUpcoming; // The list of events to group.
      var cookedEvents = {}; // The pre-keyed output object
      for (var i = 0; i < events.length; i++) {
        var event = events[i].node;
        if (this.getEventCategoryFromTitle(event.Name)) {
          //If this isn't an implementation webinar,
          //and the category matches the currently selected filter OR the filter is set to show all
          if (event.Name.indexOf("[NEW AERIES DISTRICTS ONLY]") == -1) {
            if (cookedEvents[event.Name]) {
              delete event.Blurb;
              cookedEvents[event.Name].events.push(event);
            } else {
              cookedEvents[event.Name] = {};
              cookedEvents[event.Name].SubTitle = event.SubTitle;
              cookedEvents[event.Name].Name = event.Name;
              cookedEvents[event.Name].Blurb = event.Blurb;
              cookedEvents[event.Name].firstDate = event.firstDate;
              cookedEvents[event.Name].EventId = event.EventId;
              cookedEvents[event.Name].events = [event];
              cookedEvents[event.Name].EventType = event.EventType;
            }
          }
        }
      }
      const groupedEventsArray = Object.keys(cookedEvents).map(
        (key) => cookedEvents[key]
      );
      return groupedEventsArray;
    },

    thisEventSortedSessions() {
      if (this.thisEvent) {
        return this.thisEvent.events.sort((a, b) =>
          a.eventFirstDate > b.eventFirstDate ? 1 : -1
        );
      }
    },
    thisEventGroup() {
      for (var i = 0; i < this.groupSimilarEvents.length; i++) {
        if (this.groupSimilarEvents[i].EventId == this.$context.event.EventId) {
          return this.groupSimilarEvents[i];
        }
      }
      return false;
    },
    thisEvent() {
      return this.$context.event;
    },
    // groupSimilarEvents: function() {
    //   var events = this.eventAdminEvents;
    //   var cookedEvents = {};
    //   for (var i = 0; i < events.length; i++) {
    // var event = events[i].node;
    // if (event.eventName.indexOf('[NEW AERIES DISTRICTS ONLY]') == -1) {
    // if (cookedEvents[event.eventName]) {
    //     delete event.eventDescription;
    //     cookedEvents[event.eventName].events.push(event);
    // } else {
    // cookedEvents[event.eventName] = {};
    // cookedEvents[event.eventName].eventName = event.eventName;
    // cookedEvents[event.eventName].description = event.eventDescription;
    // cookedEvents[event.eventName].firstDate = event.eventFirstDate;
    // cookedEvents[event.eventName].id = btoa(escape(event.eventName));
    // cookedEvents[event.eventName].events = [event];
    // }
    // }
    //   }
    //   const groupedEventsArray = Object.keys(cookedEvents).map(key => cookedEvents[key]);
    //   return groupedEventsArray

    // }
  },
};
</script>


<style lang="stylus">
.event-description {
  h1, h2, h3, h4, h5, p, ul {
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;
    line-height: 2rem;
  }

  h1, h2, h3, h4, h5 {
    font-family: Aeries Sans;
    font-weight: 600;
  }

  h1 {
    font-size: 2.43rem;
  }

  h2 {
    font-size: 1.93rem;
  }
}
</style>

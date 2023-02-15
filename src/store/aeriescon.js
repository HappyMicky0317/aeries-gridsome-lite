export default {
  state: {
    subNavConfig: {
      title: 'AeriesCon',
      titleLink: '/aeriescon',
      registerheaderlink: '/aeriescon/#registration-options',
      items: [
        // all the items you want in the subnav
        // { label: 'About', to: '/aeriescon/#unforgettableAeriescon' },
        { label: 'Agenda', to: '/aeriescon/agenda' },
        { label: 'Session List', to: '/aeriescon/sessions' },
        // { label: 'Keynote Speakers', to: '/aeriescon/keynote-speakers' },
        // { label: 'Session Replay Portal', to: 'https://virtual.aeriescon.com/', pulse: true },
        { label: 'FAQ', to: '/aeriescon/faq' },
        { label: 'Vendors', to: '/aeriescon/vendors' },
        { label: 'Policies', to: '/aeriescon/policies' },
        { label: 'Fall 2022 Session Replays', to: '/events/827' },
      ],
      bgColor: 'bg-neutral-1800',
      textColor: 'text-neutral-100',
      borderColor: 'border-neutral-1700'
    }
  },
  mutations: {}
}

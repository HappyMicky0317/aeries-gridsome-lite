export default {
  state: {
    isOpen: false, // true when navigation item is open
    aeriesSis: {
      to: "/solutions/aeries-sis",
      text: "Aeries SIS",
      desc: "The core student information system, from your student portal to your gradebook",
    },
    solutions: [
      {
        to: "/solutions/aeries-analytics",
        text: "Analytics",
        desc: "Customizable dashboards to make informed decisions about student data"
      },
      {
        to: "/solutions/aeries-cloud",
        text: "Cloud",
        desc: "Scalable, managed SIS hosting for greater security, speed, and stability"
      },
      {
        to: "/solutions/aeries-communications",
        text: "Communications",
        desc: "Cloud-based mass messaging to engage with parents, students, and staff"
      },
      {
        to: "/solutions/aeries-enrollment",
        text: "Enrollment",
        desc: "Streamlined student enrollment with multilingual support and seamless integration"
      },
      {
        to: "/solutions/aeries-financials",
        text: "Financials",
        desc: "Payment processing for fees, fines, tuition, and fundraising"
      },
      {
        to: "/solutions/aeries-mobile-apps",
        text: "Mobile Apps",
        desc: "On-the-go access to the parent and student app, teacher portal app, and emergency management"
      },
    ],
    support: {
      main: [
        // {to: "/faq", text: "FAQ"},
        { to: "https://my.aeries.com/Updates", text: "Aeries Updates" },
        { to: "/contact", text: "Contact Us" },
        { to: "/support", text: "Get Support" },
        { to: "https://support.aeries.com/support/solutions/14000072404", text: "Support Videos" },
        { to: "/training", text: "Training" },
        // {to: "/data-conversion", text: "Data Conversion"},
        // {to: "/implementation", text: "Implementaion"},
      ]
    },
    community: [
      { text: 'AeriesCon', to: "/aeriescon" },
      { text: 'Aeries Ideas', to: "https://ideas.aeries.com", external: true },
      // { text: 'Tradeshows', to: "/events#events-with-us" }, //TODO: Create a flow for seeing events that we'll be at, but not attending
      { text: 'Facebook', to: "https://www.facebook.com/AeriesSIS", external: true },
      { text: 'Instagram', to: "https://www.instagram.com/aeries_sis", external: true },
      { text: 'Twitter', to: "https://twitter.com/AeriesSIS", external: true },
      { text: 'User Groups', to: "/support/user-groups" }
    ],
    resources: [
      { text: 'Academy', to: "/academy" },
      { text: 'Blog', to: "/blog" },
      // { text: 'News', to: "/blog?cat=aeries-news" },
      { text: 'Careers', to: "/careers" },
      { text: 'Demos', to: "/solutions/demo" },
      { text: 'Events', to: "/events/" },
      { text: "Partners", to: "/about/partners-in-education" },
      { text: 'Revision Notes', to: "https://support.aeries.com/support/discussions/14000022988" },
      { text: 'Training', to: "/training" },
      // { text: 'Implementation', to: "/solutions/implementation" },
      // { text: 'Learn How', to: "/support" },
    ],
    main: {
      pages: [
        { to: "/products", text: "Solutions" },
        { to: "/workshop-events", text: "Events" },
        { to: "/blog", text: "Blog" },
        { to: "/parents-and-students", text: "Parents & Students" }
      ],
      solutions(state) { state.solutions },
      support: [
        { to: "/support", text: "Support" },
        { to: "/", text: "Sign In ›" }
      ]
    },
    footer: {
      menus: [
        {
          name: "Solutions"
          // items hackily put in the footer template
          // to copy what's in the solutions section 
          // above. I'm sorry. <3    
        },
        {
          name: "Company",
          items: [
            { text: "About Us", to: "/about/" },
            { text: "Leadership", to: "/about/leadership/" },
            { text: "Careers", to: "/careers/" },
            // { text: "Press Releases", to: "/about/news-and-press-releases/" },
            { text: "Events", to: "/events" },
            // { text: "Brand Kit", to: "/brand-kit/" },
            { text: "Partners in Education", to: "/about/partners-in-education" }
          ]
        },
        {
          name: "Get Help",
          items: [
            { text: "Support", to: "/support/" },
            // { text: "FAQ", to: "/faq/" },
            { text: "Aeries Academy", to: "/academy/" },
            { text: "Contact Us", to: "/contact/" },
            { text: "Privacy Center", to: "/privacy-center/" },
            { text: "Responsible Disclosure", to: "/responsible-disclosure/" },
            // { text: "View All Resources", to: "/resources/" }
          ]
        }
      ],
      secondary: [
        { text: 'Privacy center', to: '/privacy-center' },
        { text: "Responsible Disclosure", to: "/responsible-disclosure/" },
        { text: 'Terms', to: '/terms-of-service' },
        // { text: 'View all resources', to: '/resources' },
        { text: 'Contact us', to: '/contact' },
      ]
    },
    mobile: {
      isOpen: false,
      activeIndex: 0,
      panelWidth: 0,
      panelsWidth: 0,
      sections: ['dashboard', 'solutions', 'resources', 'community', 'support'],
    }
  },
  mutations: {
    openNav(state) {
      state.isOpen = true
    },
    closeNav(state) {
      state.isOpen = false
    },
    toggleMobileNav(state) {
      state.mobile.isOpen = !state.mobile.isOpen
    },
    setPanelWidth(state, payload) {
      state.mobile.panelWidth = payload
    },
    setPanelsWidth(state, payload) {
      state.mobile.panelsWidth = payload
    },
    setActiveIndex(state, payload) {
      payload = state.mobile.sections.indexOf(payload.toLowerCase())
      state.mobile.activeIndex = payload
    },
  },
  getters: {
    solutions(state) {
      return state.solutions
    },
    mainNav(state) {
      return state.main
    },
    footerMenus(state) {
      return state.footer.menus
    },
    suppportNav(state) {
      return state.support
    }
  }
}

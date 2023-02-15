export default {
  state: {
    device_width: 375,    // base is 375 -- smallest screen
    isMobile: false,      // true when device resolutin is below md.
    scroll_distance: 0,   // distance scrolled on the page
    scrolled: false,      // true when a visitor did scroll
  },
  mutations: {
    set_device_width(state, n) {
      state.device_width = n
    },
    set_device_type(state, b) {
      state.isMobile = b
    },
    scrolled(state) {
      state.scrolled = true
    },
    scroll_distance(state, n) {
      state.scrollDistance = n
    }
  }
}

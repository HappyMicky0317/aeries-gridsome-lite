// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/main.css')
require('typeface-nunito-sans')
require('typeface-aeries-sans')

// Fonts for Preload
import AeriesSansBold from 'typeface-aeries-sans/files/AeriesSansBold.woff2'
import NunitoSansRegular from 'typeface-nunito-sans/files/nunito-sans-latin-400.woff2'
import NunitoSansRegularItalic from 'typeface-nunito-sans/files/nunito-sans-latin-400italic.woff2'
import NunitoSansSemiBold from 'typeface-nunito-sans/files/nunito-sans-latin-600.woff2'
import NunitoSansBold from 'typeface-nunito-sans/files/nunito-sans-latin-700.woff2'
import NunitoSansBoldItalic from 'typeface-nunito-sans/files/nunito-sans-latin-700italic.woff2'

// Dependencies
import Vuex from 'vuex'
import SvgIcon from 'vue-svgicon'
import Navigation from '~/store/navigation.js'
import General from '~/store/general.js'
import AcademyCourses from '~/store/aeries-academy-courses.js'
import AeriesconStore from '~/store/aeriescon.js'
// import InfiniteLoading from 'vue-infinite-loading'
import dayjs from 'dayjs'

// Layouts
import BlankLayout from '~/layouts/Blank.vue'
import DefaultLayout from '~/layouts/Default.vue'

// Components
import Image3D from '~/components/image-3d.vue'
import MainNav from '~/components/navigation/main-nav.vue'
import MobileNav from '~/components/navigation/mobile-nav.vue'
import NavItemDropdown from '~/components/navigation/nav-dropdown.vue'
import SubNav from '~/components/navigation/sub-nav.vue'
import PostList from '~/components/post-list.vue'
import CardBlogPost from '~/components/card-blog-post.vue'
import CardEvent from '~/components/card-event.vue'
import CardEventCategory from '~/components/card-event-category.vue'
import CTASubcribe from '~/components/cta-subscribe.vue'
import CTASpiffyBox from '~/components/cta-spiffybox.vue'
import CTAGetStarted from '~/components/cta-get-started.vue'
import CTADark from '~/components/cta-dark.vue'
import CTAShineALight from '~/components/cta-shine-a-light.vue'
import CTADistrictLogoTestimonial from '~/components/cta-district-logo-testimonial.vue'
import CTADistrictLogoTestimonialAlternative from '~/components/cta-district-logo-testimonial-alternative.vue'
import Divider from '~/components/divider.vue'
import DropdownFAQ from '~/components/dropdown-faq.vue'
import DistrictLogosAlternate from '~/components/district-logos-alternate.vue'
import ImageListItem from '~/components/image-list-item.vue'
import ParentStudentFAQSection from '~/components/parent-student-faq-section.vue'
import AeriesConFAQSectionS23 from '~/components/aeriescon-faq-section-s23.vue'
import AeriesAcademyFAQSection from '~/components/aeries-academy-faq-section.vue'
import FeaturedBlogPosts from '~/components/hero-blog-featured.vue'
import FeaturedBlogPostItem from '~/components/hero-blog-featured-item.vue'
import SectionSolvingStudentData from '~/components/section-solving-student-data.vue'
import SectionAeriesTrainingOptions from '~/components/section-aeries-training-options.vue'
import SectionFeatureSet from '~/components/section-feature-set.vue'
import SectionInteroperability from '~/components/section-interoperability.vue'
import SectionOpenStandards from '~/components/section-open-standards.vue'
import SectionPartnerIntegrations from '~/components/section-partner-integrations.vue'
import Modal from '~/components/modal.vue'
import Footer from '~/components/footer.vue'
import Hero from '~/components/hero'
import TextCallout from '~/components/text-callout.vue'
import Disclosure from '~/components/disclosure.vue'
import MiniBlog from '~/components/blog-mini.vue'
import BlogCard from '~/components/blog-card.vue'
import MegaPost from '~/components/blog-card-megapost.vue'
import CardUserGroup from '~/components/card-usergroup.vue'

// Accents
import DotAccent from '~/components/accents/dot-accent.vue'

// Utilities

import Dropdown from '~/components/utilities/dropdown.vue'
import DropdownEmailSubscriptionCategories from '~/components/utilities/dropdown-email-subscription-categories.vue'
import SlideToggle from '~/components/utilities/slide-toggle-header.vue'
// import ContentStudioModal from '~/components/utilities/content-studio-modal.vue'

export default function (Vue, { router, head, isClient, appOptions }) {
  // Layouts
  Vue.component('Layout', BlankLayout)
  Vue.component('Default', DefaultLayout)

  // Components
  Vue.component('MainNav', MainNav)
  Vue.component('MobileNav', MobileNav)
  Vue.component('NavItemDropdown', NavItemDropdown)
  Vue.component('SubNav', SubNav)
  Vue.component('PostList', PostList)
  Vue.component('CardBlogPost', CardBlogPost)
  Vue.component('CardEvent', CardEvent)
  Vue.component('CardUserGroup', CardUserGroup)
  Vue.component('CardEventCategory', CardEventCategory)
  // Vue.component('ContentStudioModal', ContentStudioModal)
  Vue.component('CTASubscribe', CTASubcribe)
  Vue.component('CTAGetStarted', CTAGetStarted)
  Vue.component('CTADark', CTADark)
  Vue.component('CTASpiffybox', CTASpiffyBox)
  Vue.component('CTAShineALight', CTAShineALight)
  Vue.component('CTADistrictLogoTestimonial', CTADistrictLogoTestimonial)
  Vue.component('CTADistrictLogoTestimonialAlternative', CTADistrictLogoTestimonialAlternative)
  Vue.component('Divider', Divider)
  Vue.component('DropdownFAQ', DropdownFAQ)
  Vue.component('DistrictLogosAlternate', DistrictLogosAlternate)
  Vue.component('ImageListItem', ImageListItem)
  Vue.component('ParentStudentFAQSection', ParentStudentFAQSection)
  Vue.component('AeriesConFAQSectionS23', AeriesConFAQSectionS23)
  Vue.component('AeriesAcademyFAQSection', AeriesAcademyFAQSection)
  Vue.component('FeaturedBlogPosts', FeaturedBlogPosts)
  Vue.component('FeaturedBlogPostItem', FeaturedBlogPostItem)
  Vue.component('SectionSolvingStudentData', SectionSolvingStudentData)
  Vue.component('SectionAeriesTrainingOptions', SectionAeriesTrainingOptions)
  Vue.component('SectionInteroperability', SectionInteroperability)
  Vue.component('SectionOpenStandards', SectionOpenStandards)
  Vue.component('SectionFeatureSet', SectionFeatureSet)
  Vue.component('SectionPartnerIntegrations', SectionPartnerIntegrations)
  Vue.component('Footer', Footer)
  Vue.component('Dropdown', Dropdown)
  Vue.component('SlideToggle', SlideToggle)
  Vue.component('DropdownEmailSubscriptionCategories', DropdownEmailSubscriptionCategories)
  Vue.component('Image3D', Image3D)
  Vue.component('Hero', Hero)
  Vue.component('Modal', Modal)
  Vue.component('TextCallout', TextCallout)
  Vue.component('Disclosure', Disclosure)
  Vue.component('MiniBlog', MiniBlog)
  Vue.component('BlogCard', BlogCard)
  Vue.component('MegaPost', MegaPost)
  // Accents
  Vue.component('DotAccent', DotAccent)
  
  Vue.use(Vuex)
  // Vue.use(InfiniteLoading)
  Vue.use(SvgIcon, {
    tagName: 'Icon'
  })

  //Use the moment.js library inside of our project, so we don't have to import it in every component where its needed.
  //This avoids a bunch of duplicated javascript appearing in the final bundled app.js file.
  Vue.prototype.$dayjs = dayjs

  // Preloads
  head.link.push({ rel: "preload", href: AeriesSansBold, as: "font", crossOrigin: "anonymous" })
  head.link.push({ rel: "preload", href: NunitoSansRegular, as: "font", crossOrigin: "anonymous" })
  head.link.push({ rel: "preload", href: NunitoSansRegularItalic, as: "font", crossOrigin: "anonymous" })
  head.link.push({ rel: "preload", href: NunitoSansSemiBold, as: "font", crossOrigin: "anonymous" })
  head.link.push({ rel: "preload", href: NunitoSansBold, as: "font", crossOrigin: "anonymous" })
  head.link.push({ rel: "preload", href: NunitoSansBoldItalic, as: "font", crossOrigin: "anonymous" })

  appOptions.store = new Vuex.Store({
    modules: {
      navigation: Navigation,
      general: General,
      academyCourses: AcademyCourses,
      aeriescon: AeriesconStore
    }
  })

}

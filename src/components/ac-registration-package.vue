<template lang="pug">
div.option(class="flex flex-col relative")
  span.eyebrow(class="text-sm" v-show="eyebrow") {{ eyebrow }}
  h3.text-xl.font-bold.font-aeries.text-neutral-1900 {{ title }}
  p.text-sm {{ subtitle }}
  //- Prices
  .price(class="text-2xl font-bold text-red-700 font-aeries")
    span.price(:class="{ 'text-neutral-1400 strike': isEarlyBirdPriceActive && ebPrice }" class="") ${{ price }}
    span.early-bird-price(v-show="ebPrice" class="ml-4") ${{ ebPrice }}
  //- Register now link
  g-link(v-show="link" :to="link" class="self-start bg-red-700 text-white mt-2 px-2 py-2 rounded text-xl inline-block") 
    | {{ linkText }}
  .disclaimer-subtext(class="text-xs italic mt-2" v-show="disclaimer") {{ disclaimer }}

  
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'AcRegistrationPackage',
  data: () => ({
    spinString: 'Early Bird Pricing',
    earlyBirdEndDate: '10/1/2022'
  }),
  props: {
    disclaimer: { type: String },
    eyebrow: { type: String },
    link: { type: String },
    linkText: { type: String },
    price: { type: Number },
    ebPrice: { type: Number },
    spinningText: { type: Boolean },
    subtitle: { type: String, default: null },
    title: { type: String, default: 'Package Name' },
  },
  computed: {
    isEarlyBirdPriceActive() {
      const isafterenddate = () => dayjs(this.earlyBirdEndDate) <= dayjs('10/1/2022')
      return isafterenddate()
    }
  },
}
</script>

<style lang="stylus">
.strike
  text-decoration line-through
</style>

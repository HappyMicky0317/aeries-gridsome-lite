<template lang='pug'>
  .district-card(class="bg-white shadow-double-drop p-4 flex items-center rounded-lg hover:bg-neutral-300 hover:shadow-lg transition ease-in-out duration-200")
    .district-logo(class="w-24 h-24 flex items-center rounded-full")
      img.logo(:src="require('!!assets-loader!~/assets/images/' + district.logo).src" :alt="district.name")
    .district-info(class="ml-4 flex-1")
      .district-name(class="text-subhead font-bold text-left leading-none") {{ district.name }}
      .district-links(class="flex mt-2 font-semi-bold underline text-blue-500")
        a.district-website(:href="district.districtURL" target="_blank") District Website
        a.district-portal(:href="district.portalURL" target="_blank" class=" ml-4") Student Portal
</template>

<script>
  export default {
    name: 'DistrictCard',
    props: [ 'district' ]
  }
</script>

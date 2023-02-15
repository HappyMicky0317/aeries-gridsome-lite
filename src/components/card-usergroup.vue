<template lang="pug">
.card.user-group(
  v-show="group.node.acf.isActiveGroup",
  class='p-8 bg-neutral-400 hover:bg-neutral-500 transition duration-250 border border-neutral-500 hover:border-neutral-600 rounded shadow-double-drop \
                text-center relative overflow-hidden'
)
  h3.groupTitle.text-lg.font-bold.text-neutral-1500(class="md:text-xl") {{ group.node.title.rendered }}
  .state-id.absolute.z-0.bottom-0.right-0.-mb-6.-mr-4.select-none 
    span.text-3xl.font-extra-bold.font-aeries.text-neutral-1600.opacity-10.uppercase(
      class="md:text-8xl"
    ) 
      | {{ regionToState(group.node.acf.state) }}
  .groupRegion.z-10 {{ group.node.acf.region }}
  .group-meta.mt-4.z-10
    .group-meta__leader-name 
      | Leader: 
      span.font-bold {{ group.node.acf.leaderCoordinatorName }}
    .group-meta__leader-email(
      v-show="group.node.acf.leaderCoordinatorEmail"
    )
      a.text-blue.underline(
        :href="'mailto:' + group.node.acf.leaderCoordinatorEmail"
      ) {{ group.node.acf.leaderCoordinatorEmail }}
</template>

<script>
export default {
  name: "UserGroupCard",
  props: ['group'],
  data: () => ({}),
  methods: {
    regionToState(region) {
      let state 
      region == 'na' 
        ? state ='' 
        : region == 'norcal' || region == 'socal' 
          ? state = 'ca' 
          : state = 'tx'
      return state
    }
  },
};
</script>

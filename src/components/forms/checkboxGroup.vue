<template lang="pug">
  .checkboxGroup(class="cursor-pointer flex space-x-1 items-center")
    input(type="checkbox" :id="inputId" :value="value")
    label(:for="inputId" class="cursor-pointer") {{ label }}
</template>

<script>
export default {
  name: 'checkboxGroup',
  props: {
    label: String,
    inputId: String,
    value: [ Number, String ]
  }
}
</script>

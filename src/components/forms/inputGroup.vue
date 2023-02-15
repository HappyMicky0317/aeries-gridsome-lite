<template lang="pug">
  validation-provider(:rules="`${required ? 'required': ''}`" v-slot="{ errors }")
    .inputGroup(class="flex flex-col w-full")
      label(class="text-minimum-text" :for="inputId") {{ label }}
        span(v-if="required" class="text-red-800")  *

      //- if Textarea is true use textarea
      textarea(
        v-if="textarea" 
        :id="inputId" 
        :name="inputName"
        :rows="rows"
        class="focus:outline-none border rounded-sm border-neutral-500 p-1"
        :value="value"
        @input="$emit('input', $event.target.value)"
      )

      //- Otherwise, use a text input
      input(
        v-else
        class="focus:outline-none border rounded-sm border-neutral-500 p-1" 
        required
        :id="inputId"
        :name="inputName"
        :maxLength="maxlength"
        :size="size"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
      )
      span.text-minimum-text.text-red-800.pt-2 {{ errors[0] }}
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  name: 'inputGroup',
  data: () => ({}),
  props: {
    label: { type: String },
    inputId: { type: String },
    inputName: { type: String },
    textarea: { type: Boolean },
    type: { type: String, default: 'text' },
    size: { type: Number, default: 20 },
    maxlength: { type: Number, default: 40 },
    rows: { type: Number, default: 5 },
    presetValue: { type: Boolean },
    required: { type: Boolean, default: false },
    value: { type: undefined },
  },
  computed: {},
  methods: {},
  mounted() {},
  components: { ValidationProvider },
}
</script>

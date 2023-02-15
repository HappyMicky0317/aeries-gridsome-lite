<template lang='pug'>
  section#partnerIntegrations.partner-integrations(class="bg-neutral-300")
    
    div(class="py-12 md:py-24 flex flex-col md:flex-row items-center \
      container z-10 relative")
      
      div(class="flex flex-col \
        w-full md:w-2/5 .text-side.text-neutral-100")
        
        h2(class="font-bold text-neutral-1600 font-aeries text-center md:text-left \
        font-display text-header leading-tight tracking-tight")
          | Aeries integrates directly with leading tools
        
        div(class="mt-6 text-neutral-1400 md:px-0 md:pl-0 text-center md:text-left") 
          | Enhance functionality in Aeries by implementing services from one of our many integrated partners, or build your own ecosystem with the tools you already use.
        
        g-link(to="/about/partners-in-education" class="text-blue-600 mt-4 font-bold text-center md:text-left pb-6 md:pb-0") 
          | Learn more about Aeries' strategic partners
      
      div(class="w-full md:w-3/5 md:pl-8 relative flex self-center")
        g-image(quality="100" src="@/assets/images/integration-partners-outlined-dashed.png" class="w-4/5 m-auto")
</template>

<script>
  export default {

  }
</script>

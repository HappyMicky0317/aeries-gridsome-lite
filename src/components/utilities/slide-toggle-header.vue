<template lang="pug">
//- Hide the cheveron-down if we have no prop data to show.
div(v-if="title")
    .inline
        Icon.mb-2(
            class="fill-current inline-block"
            :name="this.getArrowIcon"
            width="24"
            height="24"
            )
    //- Show the description when clicking the title header.
    .inline(
        class="text-subhead lg:text-title mb-4 cursor-pointer"
        v-on:click="active = !active") 
            | {{title}}

    vue-slide-up-down(
    :active='active'
    :duration='250'
    )
        
        p(class="pl-8 pt-2 pb-4")
            span(v-if="description" class="color-neutral-1900") {{description}}
            span(v-else class="color-neutral-1000") No description text provided for this item.
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import icons from '~/components/utilities/icons/index.js'

export default {
    props: ['title', 'description'],
    data() {
        return {
            active: false
        }
    },
    computed : {
        getArrowIcon() {
            // Switch the icon for expand / collapse.
            // TODO: Rotate this instead?
            if (this.active == true) {
                return "cheveron-down"
            } else {
                return "cheveron-right"
            }
        }
    },
    components: {
        'vue-slide-up-down' : SlideUpDown
    }
}
</script>